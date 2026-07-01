/**
 * 弹射物发射基础函数
 * @param {Internal.ServerLevel} level 
 * @param {Internal.Entity} shooter 
 * @param {String} projectileType 
 * @param {number} x
 * @param {number} y 
 * @param {number} z  
 * @param {number} velocity 
 * @param {number} inaccuracy 
 * @param {Internal.CompoundTag} nbt 
 * @returns {Internal.Projectile}
 */
function baseProjectileSpawn(level, shooter, projectileType, x, y, z, velocity, inaccuracy, nbt) {
    /**
     * @type {Internal.Projectile}
     */
    const projectile = level.createEntity(projectileType);
    projectile.setPosition(x, y, z);
    projectile.shootFromRotation(shooter, shooter.getViewXRot(1.0), shooter.getViewYRot(1.0), 0.0, velocity, inaccuracy);
    projectile.setOwner(shooter);
    if(nbt) projectile.mergeNbt(nbt);
    projectile.spawn();
    return projectile;
}

/**
 * 通用弹射物发射函数
 * @param {Internal.Player} player 
 * @param {String} itemId 
 * @param {String} projectileType 
 * @param {Internal.Vec3d} position 
 * @param {Object} options 
 * @returns {Internal.Projectile}
 */
function baseShootProjectile(player, itemId, projectileType, position, options) {
    const level = player.getLevel();
    if(level.isClientSide()) return;
    if (player.cooldowns.isOnCooldown(itemId)) return;
    const velocity = options.velocity || 2.0;
    const inaccuracy = options.inaccuracy || 1.0;
    const nbt = options.nbt;
    /**
     * @type {Internal.Projectile}
     */
    const projectile = baseProjectileSpawn(level, player, projectileType, position.x(), position.y(), position.z(), velocity, inaccuracy, nbt);
    if (options.cooldown) player.addItemCooldown(itemId, options.cooldown);
    return projectile;
}

/**
 * 默认位置弹射物发射函数
 * @returns {Internal.Projectile}
 */
function shootProjectile(event, itemId, projectileType, options) {
    const pos = new Vec3d(event.player.x, event.player.eyeY, event.player.z);
    return baseShootProjectile(event.player, itemId, projectileType, pos, options);
}

/**
 * 默认攻速弹射物发射函数
 * @returns {Internal.Projectile}
 */
function atkSpeedShootProjectile(event, itemId, projectileType, options) {
    const player = event.player;
    const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.attack_speed');
    options.cooldown = options.cooldown || 20 / setCOOLDOWNS;
    return shootProjectile(event, itemId, projectileType, options);
}

/**
 * 多弹射物发射函数
 */
function shootMultiProjectile(event, itemId, projectileType, positions, options) {
  const player = event.player;
  const level = event.level;
  if(level.isClientSide()) return;
  if (!player || !level) return;
  
  if (player.cooldowns.isOnCooldown(itemId)) return;

  const velocity = options.velocity || 2.0;
  const nbt = options.nbt || {};
  
  positions.forEach(pos => baseProjectileSpawn(
    level, player, projectileType, 
    player.x + pos.x, 
    player.y + pos.y, 
    player.z + pos.z, 
    velocity, 1.0, nbt
  ));
  
  if (options.cooldown) player.addItemCooldown(itemId, options.cooldown);
}

global.shootMultiProjectile = shootMultiProjectile;
global.shootProjectile = shootProjectile;
global.baseShootProjectile = baseShootProjectile;
global.atkSpeedShootProjectile = atkSpeedShootProjectile;

const LeftClickInUsingEvent = Java.loadClass('io.zershyan.fictional.common.event.LeftClickInUsingEvent');
NativeEvents.onEvent(LeftClickInUsingEvent, 
    /**
     * 
     * @param {Internal.LeftClickInUsingEvent} event 
     */
    event => {
        const BladeBeam = Java.loadClass('io.zershyan.fictional.common.registry.entities.BladeBeam');
        console.log(event.getUsingItem());
    }
)

// const UsingSlownessEvent = Java.loadClass('io.zershyan.fictional.common.event.UsingSlownessEvent');
// NativeEvents.onEvent(UsingSlownessEvent, 
//     /**
//      * 
//      * @param {Internal.UsingSlownessEvent} event 
//      */
//     event => {
//         const UsingSlownessEvent = Java.loadClass('io.zershyan.fictional.common.event.UsingSlownessEvent');
//         //console.log(event.getUsingItem());
//         event.cancel();
//     }
// )

// NativeEvents.onEvent(UsingSlownessEvent,
//     /**
//      * 
//      * @param {Internal.UsingSlownessEvent} event 
//      */
//     event => {
//     const { player } = event;
//     if (!player.player) return;
//     event.cancel();
//     console.log;
// })

