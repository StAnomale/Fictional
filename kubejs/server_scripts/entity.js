// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// 本整合包由 绘名青棺(Silentmo) 制作，联系QQ群：693928637

// 实体发射弹射物配置
const projectileConfigs = [
  {
    entities: ['goety:wither_necromancer', 'goety:apostle', 'cataclysm:the_harbinger'],
    timer: 20,
    projectile: 'goety:fire_tornado_trap', //燃烧龙卷风
    damage: 16
  },
  {
    entities: ['ba_bt:core_golem', 'goety:apostle', 'cataclysm:ignis'],
    timer: 8,
    projectile: 'goety:hell_blast', //狱火爆破
    damage: 16
  },
  {
    entities: ['radiation_zone_reborn:wastelands_tyrant'],
    timer: 16,
    projectile: 'radiation_zone_reborn:radiant_pearl_projectile', //放射珍珠（传送）
    damage: 10
  },
  {
    entities: ['radiation_zone_reborn:wastelands_tyrant'],
    timer: 7,
    projectile: 'radiation_zone_reborn:sand_bomb', //沙尘炸弹
    damage: 16
  },
  {
    entities: ['radiation_zone_reborn:wastelands_tyrant'],
    timer: 6,
    projectile: 'radiation_zone_reborn:sand_bomb', //沙尘炸弹
    damage: 16
  },
  {
    entities: ['bosses_of_mass_destruction:void_blossom'],
    timer: 6,
    projectile: 'bosses_of_mass_destruction:petal_blade', //花瓣利刃
    damage: 16
  },
  {
    entities: ['bosses_of_mass_destruction:void_blossom'],
    timer: 7,
    projectile: 'bosses_of_mass_destruction:petal_blade', //花瓣利刃
    damage: 16
  },
  {
    entities: ['bosses_of_mass_destruction:obsidilith'],
    timer: 7,
    projectile: 'bosses_of_mass_destruction:blue_fireball', //幽焰弹
    damage: 10
  },
  {
    entities: ['bosses_of_mass_destruction:obsidilith', 'goety:ender_keeper', 'eeeabsmobs:immortal'],
    timer: 8,
    projectile: 'goety:void_slash', //虚空斩击
    damage: 16
  },
  {
    entities: ['aether:sun_spirit', 'aethermobs:crystalitegolem'],
    timer: 8,
    projectile: 'aether:fire_crystal', //滚炎球
    damage: 10
  },
  {
    entities: ['aethermobs:saltcrabking', 'aethermobs:spirit', 'aethermobs:aetherdragon', 'aethermobs:aetherdragonphase_2'],
    timer: 5,
    projectile: 'deep_aether:wind_crystal', //寒风球（分裂，破坏方块）
    damage: 16
  },
  {
    entities: ['legendary_monsters:cloud_golem', 'aethermobs:aetherdragonphase_2', 'aethermobs:aetherdragon', 'aethermobs:eldershulker', 'cataclysm:scylla', 'goetyawaken:wraith_necromancer'],
    timer: 8,
    projectile: 'goety:razor_wind', //风刃
    damage: 16
  },
  {
    entities: ['aethermobs:aetherdragon', 'aethermobs:eldershulker'],
    timer: 9,
    projectile: 'lost_aether_content:cloud_shot', //音云球（范围滞留伤害）
    damage: 16,
    velocity: 8
  },
  {
    entities: ['aethermobs:aetherdragonphase_2', 'aethermobs:aether_naga'],
    timer: 16,
    projectile: 'bosses_of_mass_destruction:charged_ender_pearl', //充能末影珍珠（传送）
    damage: 16
  }
];

// 通用实体发射弹射物函数
function setupProjectileEntity(entityId, config) {
  EntityEvents.spawned(entityId, event => {
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
          const dy = target.y + 1.0 - (event.entity.y + 1.5);
          const dz = target.z - event.entity.z;
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
          
          if (distance > 0) {
            const normalizedVector = {
              x: dx / distance,
              y: dy / distance,
              z: dz / distance
            };
            
            const offset = 1.5;
            const spawnX = event.entity.x + normalizedVector.x * offset;
            const spawnY = event.entity.y + 1.5 + normalizedVector.y * offset;
            const spawnZ = event.entity.z + normalizedVector.z * offset;
            
            projectile.setPosition(spawnX, spawnY, spawnZ);

            const velocity = 1.5;
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
  });
}

// 应用所有弹射物配置
projectileConfigs.forEach(config => {
  config.entities.forEach(entityId => {
    setupProjectileEntity(entityId, config);
  });
});

// 动态抗性减伤机制
EntityEvents.hurt(event => {
  let entity = event.entity; 
  if(event.source.player) {
    if(event.entity.isPlayer()) return;
    if (entity.potionEffects.isActive('kubejs:hostility_dynamic_resistance')) return;
    let delayTicks = 1;
    entity.server.scheduleInTicks(delayTicks, () => { 
      entity.potionEffects.add('kubejs:hostility_dynamic_resistance', 10, 0, false, false);
    })
  }
});

// 怪物效果配置
const monsterEffectConfigs = [
  {
    monsters: ['lost_aether_content:aerwhale_king'],
    effects: [
      { id: 'hostility_wounding', amplifier: 1 }
    ]
  },
  { //二星
    monsters: ['goety:brood_mother', 'goety:crone', 'goety:wither_necromancer', 'goety:wight', 'goety:minister', 'goety:bone_lord', 'goety:endersent', 'goety:hostile_redstone_golem'],
    effects: [
      { id: 'kubejs:fictional', amplifier: 1 },
      { id: 'minecraft:regeneration', amplifier: 1 },
      { id: 'minecraft:resistance', amplifier: 1 },
      { id: 'minecraft:glowing', amplifier: 0 }
    ]
  },
  { //三星
    monsters: ['goetyawaken:wraith_necromancer', 'goetyawaken:parched_necromancer', 'goety:skull_lord', 'goety:hostile_redstone_monstrosity', 'goety:vizier'],
    effects: [
      { id: 'kubejs:fictional', amplifier: 2 },
      { id: 'minecraft:regeneration', amplifier: 2 },
      { id: 'minecraft:resistance', amplifier: 1 },
      { id: 'minecraft:glowing', amplifier: 0 }
    ]
  },
  { //四星（但是会被免疫）
    monsters: ['goetyawaken:nameless_one', 'goetyawaken:hostile_mushroom_monstrosity', 'goety:apostle', 'goety:ender_keeper'],
    effects: [
      { id: 'kubejs:fictional', amplifier: 3 },
      { id: 'minecraft:regeneration', amplifier: 3 },
      { id: 'minecraft:resistance', amplifier: 1 },
      { id: 'minecraft:glowing', amplifier: 0 }
    ]
  },
  { //魔法抗性
    monsters: ['goetyawaken:wraith_necromancer', 'goetyawaken:parched_necromancer', 'goety:crone', 'goety:ender_keeper', 'goety:skull_lord', 'goety:hostile_redstone_monstrosity', 'goety:vizier'],
    effects: [
      { id: 'kubejs:hostility_magic_resistance', amplifier: 1 }
    ]
  }
];

// //特殊掉落
// EntityEvents.drops('cataclysm:urchinkin', event => {
//   let entity = event.entity;
//   let dimensionId = entity.level.dimension.toString()
//   //console.log(`测试1`)
//   if (dimensionId === 'pbf1:sanctum_of_the_battle1') {
//     let damageSource = event.getSource();
//     let player = damageSource.player
//     if (player.isCuriosEquipped('goety:unholy_blood')) {
//     event.addDrop('kubejs:cucumber1', 1)
//     event.drops.removeIf(item => item.item.id === 'minecraft:rotten_flesh');
//     //event.cancel();
//     //entity.spawnAtLocation('kubejs:cucumber1', 1);
//     //console.log(`测试2`)
//     }}
// })


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
