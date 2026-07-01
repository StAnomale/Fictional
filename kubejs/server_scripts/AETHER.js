// Visit the wiki for more info - https://kubejs.com/
// priority: 500

// ==================== 批量注册函数 ====================
function registerWeapons(weapons, eventType, callback) {
  weapons.forEach(itemId => {
    ItemEvents[eventType](itemId, event => callback(event, itemId));
  });
}

// ==================== 云母钢系列 - 冰效果（5个武器）====================
const stratusIceWeapons = [
  'deep_aether:stratus_sword',
  'deep_aether:stratus_axe',
  'deep_aether:stratus_pickaxe',
  'deep_aether:stratus_shovel',
  'deep_aether:stratus_hoe'
];

registerWeapons(stratusIceWeapons, 'firstLeftClicked', (event, itemId) => {
  const { player } = event;
  if (!player.potionEffects.isActive('kubejs:ice')) return;
  if (player.cooldowns.isOnCooldown('aether:ice_ring')) return;
  if (player.cooldowns.isOnCooldown('aether:ice_pendant')) return;
  
  const damage = player.getAttributeTotalValue('minecraft:generic.attack_damage');
  const adddamage = player.getAttributeTotalValue('minecraft:generic.armor');
  const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.luck');
  
  shootProjectile(event, 'aether:ice_ring', 'deep_aether:wind_crystal', {
    offset: 2.6,
    spawnY: 1.0,
    velocity: 4.0,
    nbt: { pickup: 4, damage: 0.4 * damage + 0.2 * adddamage, PierceLevel: 8 },
    cooldown: 1 + 120 / (4 + setCOOLDOWNS)
  });
  player.addItemCooldown('aether:ice_pendant', 1 + 120 / (4 + setCOOLDOWNS));
});

// ==================== 云母钢系列 - 太阳效果（5个武器）====================
registerWeapons(stratusIceWeapons, 'firstLeftClicked', (event, itemId) => {
  const { player } = event;
  if (!player.potionEffects.isActive('kubejs:sun')) return;
  if (player.cooldowns.isOnCooldown('aether_redux:solar_emblem')) return;
  
  const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.luck');
  
  shootProjectile(event, 'aether_redux:solar_emblem', 'aether:fire_crystal', {
    offset: 0.6,
    spawnY: 1.0,
    velocity: 4.0,
    nbt: { pickup: 1, damage: 1, PierceLevel: 1 },
    cooldown:  1 + 120 / (4 + setCOOLDOWNS)
  });
});

// ==================== 云母钢系列 - 火焰之矛效果（5个武器）====================
registerWeapons(stratusIceWeapons, 'firstLeftClicked', (event, itemId) => {
  const { player } = event;
  if (!player.isCuriosEquipped('aethermobs:pyrespear')) return;
  if (player.cooldowns.isOnCooldown('aethermobs:pyrespear')) return;
  
  const adddamage = player.getAttributeTotalValue('minecraft:generic.armor_toughness');
  const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.movement_speed');
  
  shootProjectile(event, 'aethermobs:pyrespear', 'aethermobs:shalkbbbb', {
    offset: 0.5,
    spawnY: 1.5,
    velocity: 3.0,
    nbt: { pickup: 4, damage: 2 + 0.2 * adddamage, PierceLevel: 8 },
    cooldown: 3 / setCOOLDOWNS
  });
});

// ==================== 灯壶之灵剑系列（冰效果 + 火焰之矛）====================
// 灯壶之灵剑 - 冰效果
ItemEvents.firstLeftClicked('aethermobs:spiritsword', event => {
  const { player } = event;
  if (!player.potionEffects.isActive('kubejs:ice')) return;
  if (player.cooldowns.isOnCooldown('aether:ice_ring')) return;
  if (player.cooldowns.isOnCooldown('aether:ice_pendant')) return;
  
  const damage = player.getAttributeTotalValue('minecraft:generic.attack_damage');
  const adddamage = player.getAttributeTotalValue('minecraft:generic.armor');
  const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.luck');
  
  shootProjectile(event, 'aether:ice_ring', 'deep_aether:wind_crystal', {
    offset: 2.6,
    spawnY: 1.0,
    velocity: 4.0,
    nbt: { pickup: 4, damage: 0.4 * damage + 0.2 * adddamage, PierceLevel: 8 },
    cooldown: 1 + 120 / (4 + setCOOLDOWNS)
  });
  player.addItemCooldown('aether:ice_pendant', 120 / (4 + setCOOLDOWNS));
});

// 灯壶之灵剑 - 火焰之矛效果
ItemEvents.firstLeftClicked('aethermobs:spiritsword', event => {
  const { player } = event;
  if (!player.isCuriosEquipped('aethermobs:pyrespear')) return;
  if (player.cooldowns.isOnCooldown('aethermobs:pyrespear')) return;
  
  const adddamage = player.getAttributeTotalValue('minecraft:generic.armor_toughness');
  const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.movement_speed');
  
  shootProjectile(event, 'aethermobs:pyrespear', 'aethermobs:shalkbbbb', {
    offset: 0.5,
    spawnY: 1.5,
    velocity: 3.0,
    nbt: { pickup: 4, damage: 2 + 0.2 * adddamage, PierceLevel: 8 },
    cooldown: 3 / setCOOLDOWNS
  });
});

// 灯壶之灵剑 - 右键效果
ItemEvents.firstRightClicked('aethermobs:spiritsword', event => {
  const { player } = event;
  player.potionEffects.add('minecraft:haste', 600);
  player.potionEffects.add('minecraft:strength', 600);
});

// ==================== 火焰之矛系列武器（4个）====================
const pyrespearWeapons = [
  'aethermobs:saltinstrument',
  'aethermobs:crystalitesword',
  'aethermobs:dungeondagger'
];

registerWeapons(pyrespearWeapons, 'firstLeftClicked', (event, itemId) => {
  const { player } = event;
  if (!player.isCuriosEquipped('aethermobs:pyrespear')) return;
  if (player.cooldowns.isOnCooldown('aethermobs:pyrespear')) return;
  
  const adddamage = player.getAttributeTotalValue('minecraft:generic.armor_toughness');
  const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.movement_speed');
  
  shootProjectile(event, 'aethermobs:pyrespear', 'aethermobs:shalkbbbb', {
    offset: 0.5,
    spawnY: 1.5,
    velocity: 3.0,
    nbt: { pickup: 4, damage: 2 + 0.2 * adddamage, PierceLevel: 8 },
    cooldown: 3 / setCOOLDOWNS
  });
});

// ==================== 吹箭筒系列（5个）====================

const dartShooters = [
  { itemId: 'aether:golden_dart_shooter', addAttr: 'minecraft:generic.armor_toughness', dmgMult: 0.2 },
  { itemId: 'aether:poison_dart_shooter', addAttr: 'obscure_api:magic_damage', dmgMult: 1.0 },
  { itemId: 'aether:enchanted_dart_shooter', addAttr: 'minecraft:generic.armor_toughness', dmgMult: 0.2 },
  { itemId: 'aether_redux:veridium_dart_shooter', addAttr: 'minecraft:generic.max_health', dmgMult: 0.2 },
  { itemId: 'aether_redux:infused_veridium_dart_shooter', addAttr: 'minecraft:generic.max_health', dmgMult: 0.2 }
];

dartShooters.forEach(shooter => {

ItemEvents.rightClicked(shooter.itemId, event => {
  const { player, level } = event;
  if (!player.isCuriosEquipped('deep_aether:slider_eye')) return;
  if (player.cooldowns.isOnCooldown('deep_aether:slider_eye')) return;
  
  const viewVector = player.getViewVector(1.0);
  const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
  const normalizedVector = {
    x: viewVector.x() / length,
    y: viewVector.y() / length,
    z: viewVector.z() / length
  };
  
  const projectile = level.createEntity('minecraft:arrow');
  projectile.setPosition(player.x, player.y + 1.2, player.z);
  projectile.setMotion(normalizedVector.x * 2.0, normalizedVector.y * 2.0, normalizedVector.z * 2.0);
  projectile.setOwner(player);

  const setCOOLDOWNS = player.getAttributeTotalValue("minecraft:generic.luck")
  const adddamage = player.getAttributeTotalValue('minecraft:generic.max_health');
  projectile.mergeNbt({ pickup: 4, damage: 6 + shooter.dmgMult * adddamage, PierceLevel: 8 });
  
  player.addItemCooldown('deep_aether:slider_eye', 1+120 / (4 + setCOOLDOWNS));
  projectile.spawn();
});

});

// ==================== 冰零弩 ====================
// 冰零弩 - 冰效果
ItemEvents.rightClicked('aether_redux:subzero_crossbow', event => {
  const { player } = event;
  if (!player.potionEffects.isActive('kubejs:ice')) return;
  if (player.cooldowns.isOnCooldown('aether:ice_ring')) return;
  if (player.cooldowns.isOnCooldown('aether:ice_pendant')) return;
  
  const adddamage = player.getAttributeTotalValue('minecraft:generic.max_health');
  const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.luck');
  
  shootProjectile(event, 'aether:ice_ring', 'aether:ice_crystal', {
    offset: 1.8,
    spawnY: 1.0,
    velocity: 3.0,
    nbt: { pickup: 4, damage: 2 + 0.4 * adddamage, PierceLevel: 8 },
    cooldown: 1 + 120 / (4 + setCOOLDOWNS)
  });
  player.addItemCooldown('aether:ice_pendant', 120 / (4 + setCOOLDOWNS));
});

// 冰零弩 - 普通射击
ItemEvents.rightClicked('aether_redux:subzero_crossbow', event => {
  const { player } = event;
  if (!player.isCuriosEquipped('deep_aether:slider_eye')) return;
  if (player.cooldowns.isOnCooldown('deep_aether:slider_eye')) return;
  
  const adddamage = player.getAttributeTotalValue('minecraft:generic.max_health');
  const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.luck');
  
  shootProjectile(event, 'deep_aether:slider_eye', 'minecraft:arrow', {
    offset: 1.5,
    spawnY: 1.5,
    velocity: 2.0,
    nbt: { pickup: 4, damage: 6 + 0.4 * adddamage, PierceLevel: 8 },
    cooldown: 1 + 120 / (4 + setCOOLDOWNS)
  });
});

// ==================== 卷风长弓 ====================
// 卷风长弓 - 冰效果
ItemEvents.rightClicked('deep_aether:storm_bow', event => {
  const { player } = event;
  if (!player.potionEffects.isActive('kubejs:ice')) return;
  if (player.cooldowns.isOnCooldown('aether:ice_ring')) return;
  if (player.cooldowns.isOnCooldown('aether:ice_pendant')) return;
  
  const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.luck');
  
  shootProjectile(event, 'aether:ice_ring', 'deep_aether:wind_crystal', {
    offset: 1.8,
    spawnY: 1.0,
    velocity: 4.0,
    nbt: { pickup: 1, damage: 1, PierceLevel: 1 },
    cooldown: 1 + 120 / (4 + setCOOLDOWNS)
  });
  player.addItemCooldown('aether:ice_pendant', 120 / (4 + setCOOLDOWNS));
});

// 卷风长弓 - 普通射击
ItemEvents.rightClicked('deep_aether:storm_bow', event => {
  const { player, level } = event;
  if (player.cooldowns.isOnCooldown('deep_aether:storm_bow')) return;
  
  const viewVector = player.getViewVector(1.0);
  const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
  const normalizedVector = {
    x: viewVector.x() / length,
    y: viewVector.y() / length,
    z: viewVector.z() / length
  };
  
  const projectile = level.createEntity('minecraft:arrow');
  projectile.setPosition(player.x, player.y + 1.75, player.z);
  projectile.setMotion(normalizedVector.x * 2.0, normalizedVector.y * 2.0, normalizedVector.z * 2.0);
  projectile.setOwner(player);
  
  const damage = player.getAttributeTotalValue('obscure_api:magic_damage');
  const adddamage = player.getAttributeTotalValue('minecraft:generic.luck');
  projectile.mergeNbt({ pickup: 1, damage: 1 + 0.4 * damage + 0.75 * adddamage, PierceLevel: 1 });

  player.server.scheduleInTicks(4, () => {

  player.addItemCooldown('deep_aether:storm_bow', 10);
  projectile.spawn();

  })
});

// ==================== 凤舞长弓 ====================
// 凤舞长弓 - 太阳效果
ItemEvents.rightClicked('aether:phoenix_bow', event => {
  const { player } = event;
  if (!player.potionEffects.isActive('kubejs:sun')) return;
  if (player.cooldowns.isOnCooldown('aether_redux:solar_emblem')) return;
  
  const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.luck');
  
  shootProjectile(event, 'aether_redux:solar_emblem', 'aether:fire_crystal', {
    offset: 1.8,
    spawnY: 1.0,
    velocity: 3.0,
    nbt: { pickup: 1, damage: 1, PierceLevel: 1 },
    cooldown: 1 + 120 / (4 + setCOOLDOWNS)
  });
});

// // 凤舞长弓 - 普通射击
// ItemEvents.rightClicked('aether:phoenix_bow', event => {
//   const { player, level } = event;
//   if (player.cooldowns.isOnCooldown('aether:phoenix_bow')) return;
  
//   const viewVector = player.getViewVector(1.0);
//   const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
//   const normalizedVector = {
//     x: viewVector.x() / length,
//     y: viewVector.y() / length,
//     z: viewVector.z() / length
//   };
  
//   const projectile = level.createEntity('minecraft:arrow');
//   projectile.setPosition(player.x, player.y + 1.75, player.z);
//   projectile.setMotion(normalizedVector.x * 2.0, normalizedVector.y * 2.0, normalizedVector.z * 2.0);
//   projectile.setOwner(player);
  
//   const damage = player.getAttributeTotalValue('minecraft:generic.attack_damage');
//   const adddamage = player.getAttributeTotalValue('minecraft:generic.max_health');
//   projectile.mergeNbt({ pickup: 1, damage: 4 + 0.2 * damage + 0.1 * adddamage, PierceLevel: 1 });

//   player.server.scheduleInTicks(4, () => {
  
//   player.addItemCooldown('aether:phoenix_bow', 10);
//   projectile.spawn();

//   })
// });

ItemEvents.rightClicked('aether:phoenix_bow', event => { // 凤舞长弓 - 普通射击
  const { player, level } = event; //从事件中解构出对象待用
  //if(!player.isCuriosEquipped('meetyourfight:wilted_ideals')) return; //佩戴饰品
  if (event.player.cooldowns.isOnCooldown('aether:phoenix_bow')) return;
  const viewVector = player.getViewVector(1.0); // 获取玩家的视角向量并标准化
  const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
  const normalizedVector = {x: viewVector.x() / length,y: viewVector.y() / length,z: viewVector.z() / length};
  const projectile = level.createEntity('minecraft:arrow'); // 发射物

  const offset = -0.5;  // 偏移距离

  const spawnX = player.x + normalizedVector.x * offset; // 基于玩家位置+视线方向偏移
  const spawnY = player.y + 1.75 + normalizedVector.y * offset;
  const spawnZ = player.z + normalizedVector.z * offset;
  projectile.setPosition(spawnX, spawnY, spawnZ); //设定发射坐标

  const velocity = 3.0; // 设定速度基数

  const damage = player.getAttributeTotalValue('minecraft:generic.attack_damage');
  const adddamage = player.getAttributeTotalValue('minecraft:generic.max_health');

  projectile.mergeNbt({ pickup: 4, damage: 2 + 0.1 * damage + 0.1 * adddamage, PierceLevel: 8 })// 设定弹射物NBT数据

  projectile.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity); // 设定弹射物方向
  projectile.setOwner(player) // 设定弹射物发射者

  player.server.scheduleInTicks(8, () => {
  if (!player.player) return;

  //const setCOOLDOWNS=player.getAttributeTotalValue("minecraft:generic.movement_speed")
  player.addItemCooldown('aether:phoenix_bow', 10)
  projectile.spawn();

  })

});

// // 凤舞长弓 - 普通射击
// ItemEvents.rightClicked('aether:phoenix_bow', event => {
//   const { player } = event;
//   const damage = player.getAttributeTotalValue('minecraft:generic.attack_damage');
//   const adddamage = player.getAttributeTotalValue('minecraft:generic.max_health');

//   player.server.scheduleInTicks(6, () => { 
//   if (!player.player) return;  // 检查玩家是否在线

//     /**
//      * @type {Internal.Projectile}
//      */
//     const projectile = shootProjectile(event, 'aether:phoenix_bow', 'minecraft:arrow', {
//       cooldown: 10, velocity: 4.0
//     });
//     if(!projectile) return;
//     projectile.setDamage(4 + 0.2 * damage + 0.1 * adddamage);
//   })

// });

// ==================== 神烬 ====================
// 神烬 - 太阳效果
ItemEvents.rightClicked('deep_aether:afterburner', event => {
  const { player } = event;
  if (!player.potionEffects.isActive('kubejs:sun')) return;
  if (player.cooldowns.isOnCooldown('aether_redux:solar_emblem')) return;
  
  const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.luck');
  
  shootProjectile(event, 'aether_redux:solar_emblem', 'aether:fire_crystal', {
    offset: 1.8,
    spawnY: 1.0,
    velocity: 3.5,
    nbt: { pickup: 1, damage: 1, PierceLevel: 1 },
    cooldown:  1 + 120 / (4 + setCOOLDOWNS)
  });
});

// 神烬 - 太阳核心效果（双弹射物）
ItemEvents.rightClicked('deep_aether:afterburner', event => {
  const { player, level } = event;
  if (!player.isCuriosEquipped('deep_aether:sun_core')) return;
  if (player.cooldowns.isOnCooldown('deep_aether:sun_core')) return;
  
  const viewVector = player.getViewVector(1.0);
  const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
  const normalizedVector = {
    x: viewVector.x() / length,
    y: viewVector.y() / length,
    z: viewVector.z() / length
  };
  
  const offset = 0.8;
  const spawnX = player.x + normalizedVector.x * offset;
  const spawnY = player.y + 1.5 + normalizedVector.y * offset;
  const spawnZ = player.z + normalizedVector.z * offset;
  const velocity = 3.0;
  
  const damage = player.getAttributeTotalValue('minecraft:generic.attack_damage');
  const adddamage = player.getAttributeTotalValue('minecraft:generic.max_health');
  const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.movement_speed');
  
  // 发射第一个弹射物
  const projectile1 = level.createEntity('cataclysm:blazing_bone');
  projectile1.setPosition(spawnX, spawnY, spawnZ);
  projectile1.mergeNbt({ pickup: 4, damage: 8 + 0.8 * damage + 0.8 * adddamage, PierceLevel: 8 });
  projectile1.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity);
  projectile1.setOwner(player);
  projectile1.spawn();
  
  // 发射第二个弹射物
  const projectile2 = level.createEntity('aether:fire_crystal');
  projectile2.setPosition(spawnX, spawnY, spawnZ);
  projectile2.mergeNbt({ pickup: 4, damage: 2 + 0.2 * damage + 0.2 * adddamage, PierceLevel: 8 });
  projectile2.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity);
  projectile2.setOwner(player);
  projectile2.spawn();
  
  player.addItemCooldown('deep_aether:sun_core', 8 / setCOOLDOWNS);
});

// ==================== 单独武器 ====================

// 惊雷飞刀
ItemEvents.rightClicked('aether:lightning_knife', event => {
  const { player } = event;
  
  shootProjectile(event, 'aether:lightning_knife', 'aether:lightning_knife', {
    offset: 1.5,
    spawnY: 1.0,
    velocity: 0.5,
    nbt: { pickup: 4, damage: 1, PierceLevel: 8 }
  });
});

// 创世者飞锤
ItemEvents.rightClicked('aether:hammer_of_kingbdogz', event => {
  const { player } = event;
  shootProjectile(event, 'aether:hammer_of_kingbdogz', 'aether:hammer_projectile', {
    offset: 1.5,
    spawnY: 1.0,
    velocity: 2.5,
    nbt: { pickup: 4, damage: 1, PierceLevel: 8 }
  });
});

// 烈焰长剑
ItemEvents.firstLeftClicked('aether:flaming_sword', event => {
  const { player } = event;
  if (!player.potionEffects.isActive('kubejs:sun')) return;
  if (player.cooldowns.isOnCooldown('aether_redux:solar_emblem')) return;
  
  const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.luck');
  
  shootProjectile(event, 'aether_redux:solar_emblem', 'aether:fire_crystal', {
    offset: 1.8,
    spawnY: 1.0,
    velocity: 3.0,
    nbt: { pickup: 1, damage: 1, PierceLevel: 1 },
    cooldown:  1 + 120 / (4 + setCOOLDOWNS)
  });
});

// 卷风大剑
ItemEvents.firstLeftClicked('deep_aether:storm_sword', event => {
  const { player } = event;
  if (!player.potionEffects.isActive('kubejs:ice')) return;
  if (player.cooldowns.isOnCooldown('aether:ice_ring')) return;
  if (player.cooldowns.isOnCooldown('aether:ice_pendant')) return;
  
  const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.luck');
  
  shootProjectile(event, 'aether:ice_ring', 'deep_aether:wind_crystal', {
    offset: 0.8,
    spawnY: 1.0,
    velocity: 3.0,
    nbt: { pickup: 1, damage: 1, PierceLevel: 1 },
    cooldown:  1 + 120 / (4 + setCOOLDOWNS)
  });
  player.addItemCooldown('aether:ice_pendant', 120 / (4 + setCOOLDOWNS));
});

// 境云权杖
ItemEvents.firstLeftClicked('aether:cloud_staff', event => {
  const { player } = event;
  if (!player.potionEffects.isActive('kubejs:ice')) return;
  if (player.cooldowns.isOnCooldown('aether:ice_ring')) return;
  if (player.cooldowns.isOnCooldown('aether:ice_pendant')) return;
  
  const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.luck');
  
  shootProjectile(event, 'aether:ice_ring', 'deep_aether:wind_crystal', {
    offset: 0.8,
    spawnY: 1.0,
    velocity: 3.0,
    nbt: { pickup: 1, damage: 1, PierceLevel: 1 },
    cooldown:  1 + 120 / (4 + setCOOLDOWNS)
  });
  player.addItemCooldown('aether:ice_pendant', 120 / (4 + setCOOLDOWNS));
});

// ==================== 武神系列武器（5个）====================
const valkyrieWeapons = [
  'aether:valkyrie_lance',
  'aether:valkyrie_axe',

];

registerWeapons(valkyrieWeapons, 'firstLeftClicked', (event, itemId) => {
  const { player } = event;
  if (!player.potionEffects.isActive('kubejs:ice')) return;
  if (player.cooldowns.isOnCooldown('aether:ice_ring')) return;
  if (player.cooldowns.isOnCooldown('aether:ice_pendant')) return;
  
  const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.luck');
  
  shootProjectile(event, 'aether:ice_ring', 'aether:ice_crystal', {
    offset: 0.8,
    spawnY: 1.0,
    velocity: 3.0,
    nbt: { pickup: 1, damage: 1, PierceLevel: 1 },
    cooldown:  1 + 120 / (4 + setCOOLDOWNS)
  });
  player.addItemCooldown('aether:ice_pendant', 120 / (4 + setCOOLDOWNS));
});

// ==================== 凤凰系列武器（5个）====================
const phoenixWeapons = [
  'lost_aether_content:phoenix_sword',
  'lost_aether_content:phoenix_axe',
  'lost_aether_content:phoenix_pickaxe',
  'lost_aether_content:phoenix_hoe',
  'lost_aether_content:phoenix_shovel'
];

registerWeapons(phoenixWeapons, 'firstLeftClicked', (event, itemId) => {
  const { player } = event;
  if (!player.potionEffects.isActive('kubejs:sun')) return;
  if (player.cooldowns.isOnCooldown('aether_redux:solar_emblem')) return;
  
  const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.luck');
  
  shootProjectile(event, 'aether_redux:solar_emblem', 'aether:fire_crystal', {
    offset: 0.6,
    spawnY: 1.0,
    velocity: 4.0,
    nbt: { pickup: 1, damage: 1, PierceLevel: 1 },
    cooldown:  1 + 120 / (4 + setCOOLDOWNS)
  });
});


// ==================== 实体受伤事件 ====================

// 反击之盾
EntityEvents.hurt(event => {
  if (event.source.actual && event.entity.isPlayer()) {
    if (!event.source.actual.isPlayer()) {
      let player = event.player;
      if (player.isCuriosEquipped('aether:shield_of_repulsion')) {
        if (player.cooldowns.isOnCooldown('aether:shield_of_repulsion')) return;
        
        let damage = player.getAttributeTotalValue('minecraft:generic.armor');
        let adddamage = player.getAttributeTotalValue('minecraft:generic.armor_toughness');
        let setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.luck');
        
        for (let i = 0; i < 10; i++) {
          let randomX = player.getRandom().nextDouble();
          let randomY = player.getRandom().nextDouble();
          let randomZ = player.getRandom().nextDouble();
          let shard = event.level.createEntity('cataclysm:blazing_bone');
          shard.setOwner(player);
          shard.setDamage(2 + 0.2 * damage + 0.2 * adddamage);
          shard.setPos(player.position().add(0, player.getBbHeight() / 1.5, 0));
          shard.setDeltaMovement(new Vec3d(
            (randomX - 0.5) * 0.35,
            0.1 + randomY * 0.2,
            (randomZ - 0.5) * 0.35
          ));
          shard.spawn();
        }
        player.addItemCooldown('aether:shield_of_repulsion', 1 + 200 / (4 + setCOOLDOWNS));
      }
    }
  }
});

// 烈焰灵石
EntityEvents.hurt(event => {
  if (event.source.actual && event.entity.isPlayer()) {
    if (!event.source.actual.isPlayer()) {
      let player = event.player;
      if (player.isCuriosEquipped('lost_aether_content:flaming_gemstone')) {
        if (player.cooldowns.isOnCooldown('lost_aether_content:flaming_gemstone')) return;
        
        let damage = player.getAttributeTotalValue('minecraft:generic.max_health');
        let adddamage = player.getAttributeTotalValue('minecraft:generic.attack_damage');
        let setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.luck');
        
        for (let i = 0; i < 16; i++) {
          let randomX = player.getRandom().nextDouble();
          let randomY = player.getRandom().nextDouble();
          let randomZ = player.getRandom().nextDouble();
          let shard = event.level.createEntity('cataclysm:blazing_bone');
          shard.setOwner(player);
          shard.setDamage(2 + 0.2 * damage + 0.2 * adddamage);
          shard.setPos(player.position().add(0, player.getBbHeight() / 1.0, 0));
          shard.setDeltaMovement(new Vec3d(
            (randomX - 0.5) * 0.35,
            0.1 + randomY * 0.2,
            (randomZ - 0.5) * 0.35
          ));
          shard.spawn();
        }
        player.addItemCooldown('lost_aether_content:flaming_gemstone', 1 + 200 / (4 + setCOOLDOWNS));
      }
    }
  }
});

//本整合包由绘(Silentmo)制作
//感谢FXT1206提供的kubejs支持
//要使用下列代码请取得他的授权哦
