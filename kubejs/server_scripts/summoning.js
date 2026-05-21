// priority: 0

// Visit the wiki for more info - https://kubejs.com/
// priority: 500

// 骷髅幻翼
//EntityEvents.spawned('minecraft:skeleton', event => {
//	let skeleton = event.entity;
//	let level = event.level;
//	let server = event.server;
//	let dimension = level.dimension;
//	if (Math.random() < Math.min(2 * 0.05, 0.5)) {
//		if (dimension === "minecraft:overworld" || dimension === "minecraft:the_end") {
//			let skeletonBlockPos = skeleton.blockPosition();
//			if (level.canSeeSky(skeletonBlockPos) || dimension === "minecraft:the_end") {
//				{
//					let x = skeleton.getX();
//					let y = skeleton.getY();
//					let z = skeleton.getZ();
//					let phantom = level.createEntity("minecraft:phantom");
//					phantom.setPosition(x, y + 20, z)
//					phantom.setMotion(0, 1, 0)
//					phantom.spawn();
//					skeleton.getServer().scheduleInTicks(1, () => {
//						if (skeleton.isAlive() && !skeleton.removed && phantom.isAlive() && !phantom.removed) {
//							skeleton.startRiding(phantom);
//						}})}}}}})


  //本整合包由 绘名青棺(Silentmo) 制作，联系QQ群：693928637

ServerEvents.recipes(event => {

event.recipes.summoningrituals
    .altar('cataclysm:cursium_ingot')        // 催化物
    .mobOutput(
        SummoningOutput.mob('cataclysm:maledictus')       // 生物输出
            .count(1)                             // 数量
            .offset(0, 3, 0)                      // 垂直向上
            .spread(5, 0, 5)                      // 水平扩散
            .data({ Health: 6000, Attributes: [
                { Name: 'generic.max_health', Base: 2400 }, 
                { Name: 'obscure_api:magic_damage', Base: 8 },
                { Name: 'obscure_api:critical_hit', Base: 0.2 },
                { Name: 'obscure_api:penetration', Base: 0.2 },
                { Name: 'obscure_api:regeneration', Base: 100 },
                { Name: 'obscure_api:healing_power', Base: 5 },
            ] }) // 自定义属性
    )
    .input('goetyawaken:nameless_platinum')            // 输入物品
    .recipeTime(100)                              // 耗时

})

// 实体发射弹射物配置
const projectileConfigs2 = [
  {
    entities: ['cataclysm:maledictus'],
    timer: 8,
    projectile: 'goety:void_shock_bomb', //虚空震荡弹
    damage: 16
  },
  {
    entities: ['cataclysm:maledictus'],
    timer: 8,
    projectile: 'bosses_of_mass_destruction:charged_ender_pearl', //充能末影珍珠（传送）
    damage: 16
  }
];

// 通用实体发射弹射物函数
function setupProjectileEntity2(entityId, config) {
  EntityEvents.spawned(entityId, event => {
  const entity = event.entity;
    // 检查维度
  let dimensionId = '未知';
  try {
    if (entity.level.dimension) {
      dimensionId = entity.level.dimension.id || entity.level.dimension.toString();
    }
  } catch (e) {}

  if (dimensionId === 'pbf1:sanctum_of_the_battle1') {

    if (!event.entity || !event.entity.level) return;
    Utils.server.scheduleInTicks(config.timer * 20, e => {
      if (event.entity.isAlive()) {
        e.repeating = true;
        let target = event.level.getNearestPlayer(event.entity, 48);
        if (target) {
          event.entity.lookAt("eyes", new Vec3d(target.x, target.y + 1, target.z));
          
          const projectile = event.level.createEntity(config.projectile);
          if (!projectile) return;
          const dx = target.x - event.entity.x;
          const dy = target.y + 2.0 - (event.entity.y + 1.5);
          const dz = target.z - event.entity.z;
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
          
          if (distance > 0) {
            const normalizedVector = {
              x: dx / distance,
              y: dy / distance,
              z: dz / distance
            };
            
            const offset = 3.0;
            const spawnX = event.entity.x + normalizedVector.x * offset;
            const spawnY = event.entity.y + 1.0 + normalizedVector.y * offset;
            const spawnZ = event.entity.z + normalizedVector.z * offset;
            
            projectile.setPosition(spawnX, spawnY, spawnZ);

            const velocity = 2.0;
            projectile.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity);
            projectile.mergeNbt({ pickup: 4, damage: config.damage, PierceLevel: 2 });
            projectile.setOwner(event.entity);
            event.level.addFreshEntity(projectile);
          }
        }
      } else {
        e.repeating = false;
      }
    });
  }}
);
}

// 应用所有弹射物配置
projectileConfigs2.forEach(config => {
  config.entities.forEach(entityId => {
    setupProjectileEntity2(entityId, config);
  });
});
