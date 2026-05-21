// Visit the wiki for more info - https://kubejs.com/
// priority: 500

// ==================== 下界合金系列武器（10个）====================
const netheriteWeapons = [
  { itemId: 'minecraft:netherite_sword', addAttr: 'minecraft:generic.armor', dmgMult: 0.2 },
  { itemId: 'minecraft:netherite_axe', addAttr: 'minecraft:generic.armor', dmgMult: 0.2 },
  { itemId: 'advancednetherite:netherite_iron_sword', addAttr: 'minecraft:generic.armor', dmgMult: 0.2 },
  { itemId: 'advancednetherite:netherite_iron_axe', addAttr: 'minecraft:generic.armor', dmgMult: 0.2 },
  { itemId: 'advancednetherite:netherite_gold_sword', addAttr: 'minecraft:generic.armor', dmgMult: 0.2 },
  { itemId: 'advancednetherite:netherite_gold_axe', addAttr: 'minecraft:generic.armor', dmgMult: 0.2 },
  { itemId: 'advancednetherite:netherite_emerald_sword', addAttr: 'minecraft:generic.armor', dmgMult: 0.2 },
  { itemId: 'advancednetherite:netherite_emerald_axe', addAttr: 'minecraft:generic.armor', dmgMult: 0.2 },
  { itemId: 'advancednetherite:netherite_diamond_sword', addAttr: 'minecraft:generic.armor', dmgMult: 0.2 },
  { itemId: 'advancednetherite:netherite_diamond_axe', addAttr: 'minecraft:generic.armor', dmgMult: 0.2 },
];

netheriteWeapons.forEach(weapon => {
  // 左键发射
  ItemEvents.firstLeftClicked(weapon.itemId, event => {
    const { player, level } = event;
    if (!player.potionEffects.isActive('kubejs:netherite')) return;
    if (player.cooldowns.isOnCooldown(weapon.itemId)) return;

    /**
     * @type {Internal.Projectile}
     */
    const projectile = global.shootProjectile('cataclysm:blazing_bone', player);
    const damage = player.getAttributeTotalValue('minecraft:generic.attack_damage');
    const adddamage = player.getAttributeTotalValue(weapon.addAttr);
    const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.attack_speed');
    projectile.setDamage(4 + 0.4 * damage + weapon.dmgMult * adddamage);

    player.addItemCooldown(weapon.itemId, 20 / setCOOLDOWNS);
    projectile.spawn();
  });

  // 右键激活效果
  ItemEvents.firstRightClicked(weapon.itemId, event => {
    const { player } = event;
    if (player.potionEffects.isActive('kubejs:cooldown')) return;
    player.potionEffects.add('kubejs:netherite', 300);
    player.potionEffects.add('kubejs:cooldown', 600);
  });
});

// ==================== 钻石系列武器（2个）====================
const diamondWeapons = [
  { itemId: 'minecraft:diamond_sword', addAttr: 'minecraft:generic.armor', dmgMult: 0.2 },
  { itemId: 'minecraft:diamond_axe', addAttr: 'minecraft:generic.armor', dmgMult: 0.2 }
];

diamondWeapons.forEach(weapon => {
  // 左键发射
  ItemEvents.firstLeftClicked(weapon.itemId, event => {
    const { player, level } = event;
    if (!player.potionEffects.isActive('kubejs:diamond')) return;
    if (player.cooldowns.isOnCooldown(weapon.itemId)) return;

    const viewVector = player.getViewVector(1.0);
    const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
    const normalizedVector = {
      x: viewVector.x() / length,
      y: viewVector.y() / length,
      z: viewVector.z() / length
    };

    const projectile = level.createEntity('cataclysm:blazing_bone');
    projectile.setPosition(player.x + normalizedVector.x * 0.8, player.y + 1.1 + normalizedVector.y * 0.8, player.z + normalizedVector.z * 0.8);
    projectile.setMotion(normalizedVector.x * 3.0, normalizedVector.y * 3.0, normalizedVector.z * 3.0);
    projectile.setOwner(player);

    const damage = player.getAttributeTotalValue('minecraft:generic.attack_damage');
    const adddamage = player.getAttributeTotalValue(weapon.addAttr);
    const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.attack_speed');
    projectile.setDamage(2 + 0.4 * damage + weapon.dmgMult * adddamage);

    player.addItemCooldown(weapon.itemId, 20 / setCOOLDOWNS);
    projectile.spawn();
  });

  // 右键激活效果
  ItemEvents.firstRightClicked(weapon.itemId, event => {
    const { player } = event;
    if (player.potionEffects.isActive('kubejs:cooldown')) return;
    player.potionEffects.add('kubejs:diamond', 300);
    player.potionEffects.add('kubejs:cooldown', 600);
  });
});

// ==================== 末影合金系列武器（2个）====================
const enderiteWeapons = [
  { itemId: 'enderitemod:enderite_sword', addAttr: 'minecraft:generic.armor_toughness', dmgMult: 0.2 },
  { itemId: 'enderitemod:enderite_axe', addAttr: 'minecraft:generic.armor_toughness', dmgMult: 0.2 }
];

enderiteWeapons.forEach(weapon => {
  // 左键发射
  ItemEvents.firstLeftClicked(weapon.itemId, event => {
    const { player, level } = event;
    if (!player.potionEffects.isActive('kubejs:enderite')) return;
    if (player.cooldowns.isOnCooldown(weapon.itemId)) return;

    const viewVector = player.getViewVector(1.0);
    const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
    const normalizedVector = {
      x: viewVector.x() / length,
      y: viewVector.y() / length,
      z: viewVector.z() / length
    };

    const projectile = level.createEntity('cataclysm:blazing_bone');
    projectile.setPosition(player.x + normalizedVector.x * 0.8, player.y + 1.1 + normalizedVector.y * 0.8, player.z + normalizedVector.z * 0.8);
    projectile.setMotion(normalizedVector.x * 3.5, normalizedVector.y * 3.5, normalizedVector.z * 3.5);
    projectile.setOwner(player);

    const damage = player.getAttributeTotalValue('minecraft:generic.attack_damage');
    const adddamage = player.getAttributeTotalValue(weapon.addAttr);
    const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.attack_speed');
    projectile.setDamage(4 + 0.4 * damage + weapon.dmgMult * adddamage);

    player.addItemCooldown(weapon.itemId, 20 / setCOOLDOWNS);
    projectile.spawn();
  });

  // 右键激活效果
  ItemEvents.firstRightClicked(weapon.itemId, event => {
    const { player } = event;
    if (player.potionEffects.isActive('kubejs:cooldown')) return;
    player.potionEffects.add('kubejs:enderite', 300);
    player.potionEffects.add('kubejs:cooldown', 600);
  });
});

// ==================== 深渊宝珠系列（3个护手）====================
const gauntletWeapons = [
  { itemId: 'cataclysm:gauntlet_of_guard', dmgAttr: 'minecraft:generic.max_health', addAttr: 'minecraft:generic.armor_toughness', dmgBase: 4, dmgMult1: 0.4, dmgMult2: 0.2 },
  { itemId: 'cataclysm:gauntlet_of_maelstrom', dmgAttr: 'minecraft:generic.attack_damage', addAttr: 'minecraft:generic.armor_toughness', dmgBase: 4, dmgMult1: 0.4, dmgMult2: 0.4 },
  { itemId: 'cataclysm:gauntlet_of_bulwark', dmgAttr: 'minecraft:generic.attack_damage', addAttr: 'minecraft:generic.armor', dmgBase: 4, dmgMult1: 0.4, dmgMult2: 0.4 }
];

gauntletWeapons.forEach(weapon => {
  ItemEvents.firstLeftClicked(weapon.itemId, event => {
    const { player, level } = event;
    if (player.cooldowns.isOnCooldown(weapon.itemId)) return;

    const viewVector = player.getViewVector(1.0);
    const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
    const normalizedVector = {
      x: viewVector.x() / length,
      y: viewVector.y() / length,
      z: viewVector.z() / length
    };

    const projectile = level.createEntity('cataclysm:abyss_orb');
    projectile.setPosition(player.x + normalizedVector.x * 0.8, player.y + 1.5 + normalizedVector.y * 0.8, player.z + normalizedVector.z * 0.8);
    projectile.setMotion(normalizedVector.x * 5.0, normalizedVector.y * 5.0, normalizedVector.z * 5.0);
    projectile.setOwner(player);

    const damage = player.getAttributeTotalValue(weapon.dmgAttr);
    const adddamage = player.getAttributeTotalValue(weapon.addAttr);
    const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.attack_speed');
    projectile.setDamage(weapon.dmgBase + weapon.dmgMult1 * damage + weapon.dmgMult2 * adddamage);

    player.addItemCooldown(weapon.itemId, 20 / setCOOLDOWNS);
    projectile.spawn();
  });
});

// ==================== 单独武器 ====================

// 沙暴之怒
ItemEvents.rightClicked('cataclysm:wrath_of_the_desert', event => {
  const { player, level } = event;
  if (player.cooldowns.isOnCooldown('cataclysm:wrath_of_the_desert')) return;

  const viewVector = player.getViewVector(1.0);
  const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
  const normalizedVector = {
    x: viewVector.x() / length,
    y: viewVector.y() / length,
    z: viewVector.z() / length
  };

  const projectile = level.createEntity('cataclysm:cursed_sandstorm');
  projectile.setPosition(player.x + normalizedVector.x * 0.8, player.y + 1.0 + normalizedVector.y * 0.8, player.z + normalizedVector.z * 0.8);
  projectile.setMotion(normalizedVector.x * 2.0, normalizedVector.y * 2.0, normalizedVector.z * 2.0);
  projectile.setOwner(player);

  const damage = player.getAttributeTotalValue('obscure_api:magic_damage');
  const adddamage = player.getAttributeTotalValue('minecraft:generic.armor_toughness');
  projectile.setDamage(4 + 1.0 * damage + 0.8 * adddamage);

  player.addItemCooldown('cataclysm:wrath_of_the_desert', 16);
  projectile.spawn();
});

// 神怒长朔
ItemEvents.firstLeftClicked('cataclysm:astrape', event => {
  const { player, level } = event;
  if (player.cooldowns.isOnCooldown('cataclysm:astrape')) return;

  const viewVector = player.getViewVector(1.0);
  const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
  const normalizedVector = {
    x: viewVector.x() / length,
    y: viewVector.y() / length,
    z: viewVector.z() / length
  };

  const projectile = level.createEntity('cataclysm:water_spear');
  projectile.setPosition(player.x + normalizedVector.x * 0.8, player.y + 1.0 + normalizedVector.y * 0.8, player.z + normalizedVector.z * 0.8);
  projectile.setMotion(normalizedVector.x * 3.0, normalizedVector.y * 3.0, normalizedVector.z * 3.0);
  projectile.setOwner(player);

  const damage = player.getAttributeTotalValue('minecraft:generic.attack_damage');
  const adddamage = player.getAttributeTotalValue('minecraft:generic.armor');
  const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.attack_speed');
  projectile.setDamage(10.5+0.4 * damage + 0.4 * adddamage);

  player.addItemCooldown('cataclysm:astrape', 20 / setCOOLDOWNS);
  projectile.spawn();
});

// 断魂战戟
ItemEvents.firstLeftClicked('cataclysm:soul_render', event => {
  const { player, level } = event;
  if (player.cooldowns.isOnCooldown('cataclysm:soul_render')) return;

  const viewVector = player.getViewVector(1.0);
  const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
  const normalizedVector = {
    x: viewVector.x() / length,
    y: viewVector.y() / length,
    z: viewVector.z() / length
  };

  const projectile = level.createEntity('cataclysm:axe_blade');
  projectile.setPosition(player.x + normalizedVector.x * 0.8, player.y + 1.0 + normalizedVector.y * 0.8, player.z + normalizedVector.z * 0.8);
  projectile.setMotion(normalizedVector.x * 3.5, normalizedVector.y * 3.5, normalizedVector.z * 3.5);
  projectile.setOwner(player);
  
  const rot = player.yRot
  projectile.yRot = rot //修正方向

  const damage = player.getAttributeTotalValue('minecraft:generic.attack_damage');
  const adddamage = player.getAttributeTotalValue('minecraft:generic.armor_toughness');
  const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.attack_speed');
  projectile.setDamage(15+0.4 * damage + 0.4 * adddamage);

  player.addItemCooldown('cataclysm:soul_render', 20 / setCOOLDOWNS);
  projectile.spawn();
});

// 炎葬
ItemEvents.firstRightClicked('cataclysm:the_incinerator', event => {
  const { player, level } = event;
  if (player.potionEffects.isActive('kubejs:cooldown')) return;

  const viewVector = player.getViewVector(1.0);
  const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
  const normalizedVector = {
    x: viewVector.x() / length,
    y: viewVector.y() / length,
    z: viewVector.z() / length
  };

  const projectile = level.createEntity('cataclysm:flame_strike');
  projectile.setPosition(player.x + normalizedVector.x * 0.8, player.y + 0.2 + normalizedVector.y * 0.8, player.z + normalizedVector.z * 0.8);
  projectile.setMotion(normalizedVector.x * 1.0, normalizedVector.y * 1.0, normalizedVector.z * 1.0);
  projectile.setOwner(player);

  const damage = player.getAttributeTotalValue('minecraft:generic.attack_damage');
  const adddamage = player.getAttributeTotalValue('minecraft:generic.armor');
  const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.attack_speed');
  projectile.setDamage(0.1 * damage + 0.1 * adddamage);

  player.potionEffects.add('kubejs:cooldown', 1200 / setCOOLDOWNS);
  projectile.spawn();
});

// 远古之矛
ItemEvents.rightClicked('cataclysm:ancient_spear', event => {
  const { player, level } = event;
  if (player.cooldowns.isOnCooldown('cataclysm:ancient_spear')) return;

  const viewVector = player.getViewVector(1.0);
  const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
  const normalizedVector = {
    x: viewVector.x() / length,
    y: viewVector.y() / length,
    z: viewVector.z() / length
  };

  const projectile = level.createEntity('cataclysm:sandstorm_projectile');
  projectile.setPosition(player.x + normalizedVector.x * 0.8, player.y + 1.0 + normalizedVector.y * 0.8, player.z + normalizedVector.z * 0.8);
  projectile.setMotion(normalizedVector.x * 2.5, normalizedVector.y * 2.5, normalizedVector.z * 2.5);
  projectile.setOwner(player);

  const damage = player.getAttributeTotalValue('minecraft:generic.attack_damage');
  const adddamage = player.getAttributeTotalValue('minecraft:generic.armor_toughness');
  const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.attack_speed');
  projectile.setDamage(8+0.4 * damage + 0.8 * adddamage);

  player.addItemCooldown('cataclysm:ancient_spear', 10+ 10 / setCOOLDOWNS);
  projectile.spawn();
});

// 胧暮荆棘
ItemEvents.firstLeftClicked('meetyourfight:twilights_thorn', event => {
  const { player, level } = event;
  if (player.cooldowns.isOnCooldown('meetyourfight:twilights_thorn')) return;

  const viewVector = player.getViewVector(1.0);
  const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
  const normalizedVector = {
    x: viewVector.x() / length,
    y: viewVector.y() / length,
    z: viewVector.z() / length
  };

  const projectile = level.createEntity('cataclysm:amethyst_cluster_projectile');
  projectile.setPosition(player.x + normalizedVector.x * 0.8, player.y + 1.5 + normalizedVector.y * 0.8, player.z + normalizedVector.z * 0.8);
  projectile.setMotion(normalizedVector.x * 3.0, normalizedVector.y * 3.0, normalizedVector.z * 3.0);
  projectile.setOwner(player);

  const damage = player.getAttributeTotalValue('minecraft:generic.attack_damage');
  const adddamage = player.getAttributeTotalValue('minecraft:generic.luck');
  const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.attack_speed');
  projectile.setDamage(4+0.4 * damage + 2 * adddamage);

  player.addItemCooldown('meetyourfight:twilights_thorn', 20 / setCOOLDOWNS);
  projectile.spawn();
});

// 末影合金弓
ItemEvents.rightClicked('enderitemod:enderite_bow', event => {
  const { player, level } = event;
  if (player.cooldowns.isOnCooldown('enderitemod:enderite_bow')) return;

  const viewVector = player.getViewVector(1.0);
  const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
  const normalizedVector = {
    x: viewVector.x() / length,
    y: viewVector.y() / length,
    z: viewVector.z() / length
  };

  const adddamage = player.getAttributeTotalValue('minecraft:generic.armor_toughness');
  const velocity = 2;

  // 第一个弹射物
  const projectile1 = level.createEntity('minecraft:arrow');
  projectile1.setPosition(player.x, player.y + 1.2, player.z);
  projectile1.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity);
  projectile1.setOwner(player);
  projectile1.mergeNbt({ pickup: 1, damage: 2 + 0.2 * adddamage, PierceLevel: 2 });
  projectile1.spawn();

  // 第二个弹射物（需要药水效果）
  if (player.potionEffects.isActive('kubejs:enderite')) {
    const projectile2 = level.createEntity('minecraft:arrow');
    projectile2.setPosition(player.x, player.y + 0.6, player.z);
    projectile2.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity);
    projectile2.setOwner(player);
    projectile2.mergeNbt({ pickup: 1, damage: 2 + 0.1 * adddamage, PierceLevel: 2 });
    projectile2.spawn();
  }

  player.addItemCooldown('enderitemod:enderite_bow', 16);
});

//本整合包由 绘名青棺(Silentmo) 制作，联系QQ群：693928637
