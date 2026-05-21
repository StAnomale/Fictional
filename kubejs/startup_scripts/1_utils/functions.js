//priority: 5
function thunderbrand(entity, roll, delay) {
	const vec = entity.getViewVector(1);
	const ex = vec.x();
	const ez = vec.z();
	const ey = vec.y();
	const {x:px, y:py, z:pz, level} = entity;
	const {server} = Utils;

	// if(Math.abs(ey) > 0.85) return;
	for(let i = 0, tick = 0; i < roll; i++){
		server.scheduleInTicks(i*delay, () => {
			tick++;
			const x = (2*tick+2)*ex + px;
			const y = (2*tick+0.5)*ey + py;
			const z = (2*tick+2)*ez + pz;

			if(entity.age % delay) return;
			let lightning_bolt = level.createEntity('minecraft:lightning_bolt');
			lightning_bolt.setPosition(x, y, z);
			lightning_bolt.spawn();
		})
	}
}

function ec_check(target, identifier) {
	if(target.level.isClientSide() || !target.isLiving() || global.throttle(target, 10, identifier)) return true;
}

function longTip(player, tip) {
	const time = 160;

	const msg = Text.translate(tip);
	const {server} = Utils;
	function delayedTip(tick) {
		server.scheduleInTicks(tick, () => player.statusMessage = msg)
	};

	for(let i = 0; i <= time; i += 20) delayedTip(i);
	global.sound(player, 'entity.experience_orb.pickup', 0.22, 1.01, 0.07);
}

function doTip(player, refer, id, delay) {  //Tips
	const info = refer[id];
	const {stages} = player;
	const {server} = Utils;

	if(global.throttle(player, 600, 'tip')) return;
	if(stages.has(info.stage)) return;
	if(stages.has(info.name)) return;
	server.scheduleInTicks(delay || 0, () => {
		stages.add(info.name);
		longTip(player, `dialogue.fmn.${info.name}`);
	})
}

function doSimpleTip(player, name, s) {	 //Tips
	if(global.throttle(player, 600, 'tip')) return;
	const {stages} = player;
	if(stages.has(s)) return;
	if(stages.has(name)) return;

	stages.add(name);
	longTip(player, `dialogue.fmn.${name}`);
}