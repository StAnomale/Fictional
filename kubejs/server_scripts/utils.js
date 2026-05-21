/**
 * 
 * @param {String} projectileId 
 * @param {Internal.Entity} shooter 
 * @param {number} velocity
 * @param {number} inaccuracy
 * @returns {Internal.Projectile}
 */
function shoot(projectileId, shooter, velocity, inaccuracy) {
    const level = shooter.getLevel();
    if(level.isClientSide()) return;
    /**
     * @type {Internal.Projectile}
     */
    const projectile = level.createEntity(projectileId);
    projectile.setPosition(shooter.x, shooter.eyeY, shooter.z);
    projectile.shootFromRotation(shooter, shooter.getViewXRot(1.0), shooter.getViewYRot(1.0), 0.0, velocity, inaccuracy);
    projectile.setOwner(shooter);
    projectile.spawn();
    return projectile;
}

/**
 * 
 * @param {String} projectileId 
 * @param {Internal.Entity} shooter 
 * @returns {Internal.Projectile}
 */
function shootProjectile(projectileId, shooter) {
    return shoot(projectileId, shooter, 3.0, 1.0);
}

global.shoot = shoot;
global.shootProjectile = shootProjectile;