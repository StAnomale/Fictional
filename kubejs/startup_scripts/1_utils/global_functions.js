//priority: 10
global.particleBurst = (entity, particleId, count, speed, shift, yOverride) => {
	shift = shift || 0; speed = speed || 0;
	entity.level.spawnParticles(particleId, true, entity.x, yOverride || entity.y+entity.eyeHeight/3*2, entity.z, shift, shift, shift, count, speed);
}

global.particleBurstBlock = (level, x, y, z, particleId, count, speed, spread) => {
	level.spawnParticles(particleId, true, x+0.5, y+0.5, z+0.5, spread, spread, spread, count, speed);
}

global.particleBurstBlock2 = (block, particleId, count, speed, spread) => {
	const {x, y, z, level} = block;
	level.spawnParticles(particleId, true, x+0.5, y+0.5, z+0.5, spread, spread, spread, count, speed);
}

const modeMap = {
	'static': '',
	'spread': '10000000000000',
	'gather': '-10000000000000'
};
global.particleRing = (mode, count, delay, dist, entity, particleId, speed, yOverride) => {
	let {x, y, z, level, eyeHeight} = entity;
	const {server} = Utils;
	yOverride = yOverride || 0;

	for(let i = 0, counter = 0; i < count; i++) {
		server.scheduleInTicks(delay*i, () => {
			counter++;
			level.runCommandSilent(`execute rotated ${counter * 360/count} 0 positioned ${x} ${y+eyeHeight/4+yOverride} ${z} run particle ${particleId} ^ ^ ^${dist} ^ ^ ^${modeMap[mode]} ${(speed*0.00000000000001).toFixed(18)} 0 force`)
		})
	}
}

global.particleBridge = (thisEntity, nextEntity, particleId) => {
	const {x:startX, eyeY:startY, z:startZ} = thisEntity;
	const {x:endX, eyeY:endY, z:endZ} = nextEntity;
	const dist = thisEntity.distanceToEntity(nextEntity);

	for (let i = 0; i < dist; i += 1) {
		let t = i/dist;
		let x = startX + (endX-startX) * t;
		let y = startY-0.5 + (endY-startY) * t;
		let z = startZ + (endZ-startZ) * t;

		thisEntity.level.spawnParticles(particleId, true, x, y, z, 0, 0, 0, 1, 0);
	}
}

global.particleBridge2 = (level, startX, startY, startZ, endX, endY, endZ, particleId) => {
	const dist = Math.hypot(startX-endX, startY-endY, startZ-endZ);

	for (let i = 0; i < dist; i += 1) {
		let t = i/dist;
		let x = startX + (endX-startX) * t;
		let y = startY-0.5 + (endY-startY) * t;
		let z = startZ + (endZ-startZ) * t;

		level.spawnParticles(particleId, true, x, y, z, 0, 0, 0, 1, 0);
	}
}

global.randomSelect = (reference) => {
	const keys = reference.length ? reference : Object.keys(reference);
	return keys[Math.floor(Math.random() * keys.length)];
}

global.clamp = (min, max, value) => Math.max(min, Math.min(value, max))

global.within = (min, max, value) => (value >= min && value < max)

global.throttle = (temp => (entity, interval, identifier) => {
	const {uuid, age: now} = entity;
	const key = `${uuid}${identifier}`;
	const previous = temp[key];
	if(previous == null || now - previous >= interval || now < previous){
		temp[key] = now;
		return false;
	};
	return true
})({})

global.sound = (entity, soundId, volume, pitch, shift) => {
	shift = shift || 0.1; pitch = pitch || 1; volume = volume || 1;
	const {level, x, y, z} = entity;
	level.playSound(null, x, y, z, soundId, 'master', global.clamp(0, 2, volume), global.clamp(0.5, 2, pitch - shift/2 + Math.random()*shift));
}

global.shocking = (user, thisEntity, maxChain, chainRadius) => {
	const {level} = user, {server} = Utils;
	const attackNearbyEntities = (thisEntity, depth) => {
		if(depth == 0) return;
		const entities = level.getEntitiesWithin(thisEntity.boundingBox.inflate(chainRadius))
		if(entities.length <= 0) return;
		const nextEntity = entities.filter(e => 
			e.isLiving() && !e.hasEffect('kubejs:timer2') && e != user
		).getFirst();

		server.scheduleInTicks(2, () => {
			nextEntity.attack('lightningBolt', 3);
			nextEntity.potionEffects.add('kubejs:timer2', 60, 0, true, false);

			nextEntity.potionEffects.add('glowing', 10, 0, true, false);
			global.sound(nextEntity, 'block.soul_sand.place', 1.5, 1.8, 0.2);
			global.particleBridge(thisEntity, nextEntity, 'end_rod');

			attackNearbyEntities(nextEntity, depth - 1);
		})
	};
	attackNearbyEntities(thisEntity, maxChain);
}

global.advancedRayTrace = (entity, distance) => {  //credit: Squoshi
	const {level} = entity;
	const eyePos = entity.eyePosition;
	const viewVec = entity.getViewVector(1);
	const endPos = eyePos.add(viewVec.x() * distance, viewVec.y() * distance, viewVec.z() * distance);
	const aabb = AABB.of(eyePos.x(), eyePos.y(), eyePos.z(), endPos.x(), endPos.y(), endPos.z());

	const ray = $ProjectileUtil.getEntityHitResult(level, entity, eyePos, endPos, aabb, (e) => {
		return !e.isSpectator()
	}, 0);

	const clip = new $ClipContext(
		entity.getEyePosition(1), 
		entity.getEyePosition(1).add(entity.getLookAngle().scale(distance)), 
		'collider', 'none',
		entity
	);
	const hit = level.clip(clip);
	if(ray == null) {
		return {
			block: hit.getBlockPos() ? level.getBlock(hit.getBlockPos()) : null,
			entity: null
		}
	}
	return {
		block: level.getBlock(hit.getBlockPos()),
		entity: ray.entity
	}
}

global.advancedRayTrace2 = (entity, distance) => {  //credit: Squoshi
	const eyePos = entity.eyePosition;
	const viewVec = entity.getViewVector(1);
	const endPos = eyePos.add(viewVec.x() * distance, viewVec.y() * distance, viewVec.z() * distance);
	const aabb = AABB.of(eyePos.x(), eyePos.y(), eyePos.z(), endPos.x(), endPos.y(), endPos.z());

	const ray = $ProjectileUtil.getEntityHitResult(entity.level, entity, eyePos, endPos, aabb, e => {
		return !e.isSpectator()
	}, 0);

	if(ray == null) return null;
	return ray.entity;
}

global.updateMaxHealth = (player, count) => {
	count = count || 0;
	const {persistentData: pData, stages} = player;
	const {basehealth, death_count} = pData;
	const limited_lives_count = (stages.has('no_limited_lives') || death_count == null) ? 0 : death_count*0.2;
	const value = global.clamp(6, 40, basehealth - limited_lives_count + count);

	pData.basehealth += count;
	player.setAttributeBaseValue('minecraft:generic.max_health', value);
	player.health += count;
}

global.isNearHome = (player, dist) => {
	const {respawnPosition} = player;
	if(!respawnPosition) return false;
	const {x: rx, y: ry, z: rz} = respawnPosition;
	const {x, y, z} = player;
	if(Math.hypot(x-rx, y-ry, z-rz) <= dist) return true;
	return false;
}

global.checkFullArmor2 = (entity) => {
	return !entity.armorSlots.find(a => !a.id == 'minecraft:air');
}

global.blockHit = (entity, dist) => {  //credit: Squoshi
	const {level} = entity;
	const eyePosition = entity.getEyePosition(1);
	const clip = new $ClipContext(
		eyePosition, 
		eyePosition.add(entity.getLookAngle().scale(dist)), 
		'collider', 'none',
		entity
	);
	return level.clip(clip);
}

global.bounce = (entity, direction, motionX, motionY, motionZ) => {
	const dirMap = {
        x: [-0.6, 0.7, 0.7],
        y: [0.7, -0.6, 0.7],
        z: [0.7, 0.7, -0.6]
    };
    const data = dirMap[direction.axis];

    entity.setMotion(motionX*data[0], motionY*data[1], motionZ*data[2]);

	global.particleBurst(entity, 'item_slime', 2);
    global.sound(entity, 'block.slime_block.place', 0.25, 1.1);
}