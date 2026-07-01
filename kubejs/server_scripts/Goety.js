let $LMLivingHurtEvent = Java.loadClass("net.minecraftforge.event.entity.living.LivingHurtEvent")

// 本整合包由 绘名青棺(Silentmo) 制作，联系QQ群：693928637

// 示例
// /**
//  * @returns {Internal.Projectile}
//  */
// function shootExample(event, itemId, projectileType, options) {
//     options = options || {};
//     options.nbt = options.nbt || { pickup: 2, damage: 2 + 0.75 * damage + 0.75 * adddamage, PierceLevel: 2 };
//     return shootProjectile(event, itemId, projectileType, options);
// }

ItemEvents.firstLeftClicked('void', event => { //利刃盟约 - 额外剑气
  const { player } = event; //从事件中解构出对象待用
  if (!player.player) return;  // 检查玩家是否在线

  const BladeBeam = Java.loadClass('io.zershyan.fictional.common.registry.entities.BladeBeam');

  const mainHandItem = player.getMainHandItem();
  if (mainHandItem.getId() === 'minecraft:air') return;

  if (event.player.cooldowns.isOnCooldown('kubejs:covenant_sharpblade1')) return;
  if (!hasCovenantItem(player)) return;
  const damage = player.getAttributeTotalValue('minecraft:generic.attack_damage');
  const setCOOLDOWNS=player.getAttributeTotalValue("minecraft:generic.attack_speed")

  //player.playNotifySound("entity.player.attack.sweep", "ambient", 1, 1)

  if (player.isCuriosEquipped('kubejs:covenant_sharpblade1')) {

  BladeBeam.spawn(player, 1 + 0.2 * damage ).distance(20).color(0xFFFFFF).alpha(0.2).build(3.0);
  player.playNotifySound("entity.player.attack.sweep", "ambient", 1, 1)
  player.addItemCooldown('kubejs:covenant_sharpblade1', 20/setCOOLDOWNS)

  } else if (player.isCuriosEquipped('kubejs:covenant_sharpblade2')) { 

  BladeBeam.spawn(player, 1 + 0.25 * damage ).distance(21).color(0xFFFFFF).alpha(0.2).build(3.0);
  player.playNotifySound("entity.player.attack.sweep", "ambient", 1, 1)
  player.addItemCooldown('kubejs:covenant_sharpblade1', 20/setCOOLDOWNS)

  } else if (player.isCuriosEquipped('kubejs:covenant_sharpblade3')) {

  BladeBeam.spawn(player, 1 + 0.3 * damage ).distance(22).color(0xFFFFFF).alpha(0.2).build(3.0);
  player.playNotifySound("entity.player.attack.sweep", "ambient", 1, 1)
  player.addItemCooldown('kubejs:covenant_sharpblade1', 20/setCOOLDOWNS)

  } else if (player.isCuriosEquipped('kubejs:covenant_sharpblade4')) {

  BladeBeam.spawn(player, 1 + 0.35 * damage ).distance(23).color(0xFFFFFF).alpha(0.2).build(3.0);
  player.playNotifySound("entity.player.attack.sweep", "ambient", 1, 1)
  player.addItemCooldown('kubejs:covenant_sharpblade1', 20/setCOOLDOWNS)

  } else if (player.isCuriosEquipped('kubejs:covenant_sharpblade5')) {

  BladeBeam.spawn(player, 1 + 0.4 * damage ).distance(24).color(0xFFFFFF).alpha(0.2).build(3.0);
  player.playNotifySound("entity.player.attack.sweep", "ambient", 1, 1)
  player.addItemCooldown('kubejs:covenant_sharpblade1', 20/setCOOLDOWNS)

  }
  
  });

ItemEvents.firstLeftClicked('void', event => { //锚把手 - 额外剑气
  const { player } = event; //从事件中解构出对象待用
  if (!player.player) return;  // 检查玩家是否在线

  const BladeBeam = Java.loadClass('io.zershyan.fictional.common.registry.entities.BladeBeam');

  const mainHandItem = player.getMainHandItem();
  if (mainHandItem.getId() === 'minecraft:air') return;

  if (event.player.cooldowns.isOnCooldown('legendary_monsters:anchor_handle')) return;
  //if (!hasCovenantItem(player)) return;
  const att1 = player.getAttributeTotalValue('obscure_api:accuracy');
  const att2 = player.getAttributeTotalValue('obscure_api:penetration');
  //const setCOOLDOWNS=player.getAttributeTotalValue("minecraft:generic.attack_speed")

  player.server.scheduleInTicks(1, () => {

  //player.playNotifySound("entity.player.attack.sweep", "ambient", 1, 1)

  if (player.isCuriosEquipped('legendary_monsters:anchor_handle')) {

  BladeBeam.spawn(player, 10 * (1+att1+att2) ).distance(20).color(0x999999).alpha(0.2).build(2.8);
  player.playNotifySound("entity.player.attack.sweep", "ambient", 1, 1)
  player.addItemCooldown('legendary_monsters:anchor_handle', 20)

  } 
  })
  
  });


ItemEvents.firstLeftClicked('void', event => { //堕落之魂
  const { player } = event; //从事件中解构出对象待用
  if (!player.player) return;  // 检查玩家是否在线

  const BladeBeam = Java.loadClass('io.zershyan.fictional.common.registry.entities.BladeBeam');

  const mainHandItem = player.getMainHandItem();
  if (mainHandItem.getId() === 'minecraft:air') return;

  if (event.player.cooldowns.isOnCooldown('legendary_monsters:corrupted_soul')) return;
  //if (!hasCovenantItem(player)) return;
  const att1 = player.getAttributeTotalValue('obscure_api:accuracy');
  const att2 = player.getAttributeTotalValue('obscure_api:penetration');

  player.server.scheduleInTicks(2, () => {

  //player.playNotifySound("entity.player.attack.sweep", "ambient", 1, 1)

  if (player.isCuriosEquipped('legendary_monsters:corrupted_soul')) {

  BladeBeam.spawn(player, 10 * (1+att1+att2) ).distance(24).color(0x00FFFF).alpha(0.4).build(2.8);
  player.playNotifySound("entity.player.attack.sweep", "ambient", 1, 1)
  player.addItemCooldown('legendary_monsters:corrupted_soul', 20)

  } 
  })
});

ItemEvents.rightClicked('void', event => { //堕落之魂
  const { player } = event; //从事件中解构出对象待用
  if (!player.player) return;  // 检查玩家是否在线

  const BladeBeam = Java.loadClass('io.zershyan.fictional.common.registry.entities.BladeBeam');

  const mainHandItem = player.getMainHandItem();
  if (mainHandItem.getId() === 'minecraft:air') return;

  if (event.player.cooldowns.isOnCooldown('legendary_monsters:corrupted_soul')) return;
  //if (!hasCovenantItem(player)) return;
  const att1 = player.getAttributeTotalValue('obscure_api:accuracy');
  const att2 = player.getAttributeTotalValue('obscure_api:penetration');

  player.server.scheduleInTicks(2, () => {

  //player.playNotifySound("entity.player.attack.sweep", "ambient", 1, 1)

  if (player.isCuriosEquipped('legendary_monsters:corrupted_soul')) {

  BladeBeam.spawn(player, 10 * (1+att1+att2) ).distance(24).color(0x00FFFF).alpha(0.4).build(2.8);
  player.playNotifySound("entity.player.attack.sweep", "ambient", 1, 1)
  player.addItemCooldown('legendary_monsters:corrupted_soul', 20)

  } 
  })
});


// ItemEvents.rightClicked('void', event => { //测试
//   const { player } = event; //从事件中解构出对象待用
//   if (!player.player) return;  // 检查玩家是否在线

//   const BladeBeam = Java.loadClass('io.zershyan.fictional.common.registry.entities.BladeBeam');

//   const mainHandItem = player.getMainHandItem();
//   if (mainHandItem.getId() === 'minecraft:air') return;

//   const att1 = player.getAttributeTotalValue('obscure_api:accuracy');
//   const att2 = player.getAttributeTotalValue('obscure_api:penetration');

//   player.server.scheduleInTicks(2, () => {

//   //player.playNotifySound("entity.player.attack.sweep", "ambient", 1, 1)

//   if (player.isCuriosEquipped('kubejs:renegade')) {
//   event.cancel();

//   } 
//   })
// });

ItemEvents.rightClicked('legendary_monsters:fiery_jaw', event => { //
  const { player, level } = event; //从事件中解构出对象待用
  if (!player.player) return;  // 检查玩家是否在线

  if (event.player.cooldowns.isOnCooldown('legendary_monsters:fiery_jaw')) return;

  const viewVector = player.getViewVector(1.0); // 获取玩家的视角向量并标准化
  const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
  const normalizedVector = {x: viewVector.x() / length,y: viewVector.y() / length,z: viewVector.z() / length};
  const projectile = level.createEntity("goety:haunted_skull_shot"); // 发射物
  const projectile2 = level.createEntity("goety:haunted_skull_shot"); // 发射物
  const projectile3 = level.createEntity("goety:haunted_skull_shot"); // 发射物
  const offset = 0.5;  // 偏移距离
  const spawnX = player.x + normalizedVector.x * offset; // 基于玩家位置+视线方向偏移
  const spawnY = player.y + 1.2 + normalizedVector.y * offset;
  const spawnZ = player.z + normalizedVector.z * offset;
  const velocity = 3.0; // 设定速度基数

  player.server.scheduleInTicks(1, () => {

  projectile.setPosition(spawnX, spawnY, spawnZ); //设定发射坐标
  projectile.mergeNbt({ pickup: 2, damage: 4, PierceLevel: 2 })// 设定弹射物NBT数据
  projectile.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity); // 设定弹射物方向
  projectile.setOwner(player) // 设定弹射物发射者
  projectile.spawn();
  })

  player.server.scheduleInTicks(4, () => {
  projectile3.setPosition(spawnX, spawnY, spawnZ); //设定发射坐标
  projectile3.mergeNbt({ pickup: 2, damage: 4, PierceLevel: 2 })// 设定弹射物NBT数据
  projectile3.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity); // 设定弹射物方向
  projectile3.setOwner(player) // 设定弹射物发射者
  projectile3.spawn();
  })

  player.server.scheduleInTicks(6, () => {
  if (!player.isCuriosEquipped('goety:unholy_blood')) return;
  projectile2.setPosition(spawnX, spawnY, spawnZ); //设定发射坐标
  projectile2.mergeNbt({ pickup: 2, damage: 4, PierceLevel: 2 })// 设定弹射物NBT数据
  projectile2.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity); // 设定弹射物方向
  projectile2.setOwner(player) // 设定弹射物发射者
  projectile2.spawn();
  })

  player.addItemCooldown('legendary_monsters:fiery_jaw', 60)

});

// ItemEvents.rightClicked('void', event => { //堕落之魂
//   const { player, level } = event; //从事件中解构出对象待用
//   if (!player.player) return;  // 检查玩家是否在线
//   if (!hasAnyCurio(player, ['legendary_monsters:corrupted_soul'])) return
//   if (event.player.cooldowns.isOnCooldown('legendary_monsters:corrupted_soul')) return;
//   const mainHandItem = player.getMainHandItem();
//   if (mainHandItem.getId() === 'minecraft:air') return;

//   const viewVector = player.getViewVector(1.0); // 获取玩家的视角向量并标准化
//   const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
//   const normalizedVector = {x: viewVector.x() / length,y: viewVector.y() / length,z: viewVector.z() / length};
//   const projectile = level.createEntity("legendary_monsters:soul_javelin"); // 发射物
//   const offset = 1.5;  // 偏移距离
//   const spawnX = player.x + normalizedVector.x * offset; // 基于玩家位置+视线方向偏移
//   const spawnY = player.y + 1.0 + normalizedVector.y * offset;
//   const spawnZ = player.z + normalizedVector.z * offset;
//   projectile.setPosition(spawnX, spawnY, spawnZ); //设定发射坐标
//   const velocity = 4.0; // 设定速度基数
//   projectile.mergeNbt({ pickup: 4, damage: 4, PierceLevel: 8 })// 设定弹射物NBT数据
//   projectile.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity); // 设定弹射物方向
//   projectile.setOwner(player) // 设定弹射物发射者
//   projectile.spawn();
//   const setCOOLDOWNS=player.getAttributeTotalValue("minecraft:generic.luck")
//   player.addItemCooldown('legendary_monsters:corrupted_soul', 5 + 50 ^ (0.85*setCOOLDOWNS))
// });



ItemEvents.rightClicked('void', event => { //传送门碎片
  const { player, level } = event; //从事件中解构出对象待用
  if (!player.player) return;  // 检查玩家是否在线
  if (!hasAnyCurio(player, ['legendary_monsters:portal_shard'])) return
  if (event.player.cooldowns.isOnCooldown('legendary_monsters:portal_shard')) return;

  const viewVector = player.getViewVector(1.0); // 获取玩家的视角向量并标准化
  const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
  const normalizedVector = {x: viewVector.x() / length,y: viewVector.y() / length,z: viewVector.z() / length};
  const projectile = level.createEntity("legendary_monsters:tracking_bomb"); // 发射物
  const offset = 1.5;  // 偏移距离
  const spawnX = player.x + normalizedVector.x * offset; // 基于玩家位置+视线方向偏移
  const spawnY = player.y + 1.5 + normalizedVector.y * offset;
  const spawnZ = player.z + normalizedVector.z * offset;
  projectile.setPosition(spawnX, spawnY, spawnZ); //设定发射坐标
  const velocity = 3.0; // 设定速度基数
  projectile.mergeNbt({ pickup: 4, damage: 4, PierceLevel: 8 })// 设定弹射物NBT数据
  projectile.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity); // 设定弹射物方向
  projectile.setOwner(player) // 设定弹射物发射者
  projectile.spawn();
  const setCOOLDOWNS=player.getAttributeTotalValue("minecraft:generic.luck")
  player.addItemCooldown('legendary_monsters:portal_shard', 5 + 40 ^ (0.85*setCOOLDOWNS))
});

ItemEvents.firstLeftClicked('void', event => { //传送门碎片
  const { player, level } = event; //从事件中解构出对象待用
  if (!player.player) return;  // 检查玩家是否在线
  if (!hasAnyCurio(player, ['legendary_monsters:portal_shard'])) return
  if (event.player.cooldowns.isOnCooldown('legendary_monsters:portal_shard')) return;
  const mainHandItem = player.getMainHandItem();
  if (mainHandItem.getId() === 'minecraft:air') return;

  const viewVector = player.getViewVector(1.0); // 获取玩家的视角向量并标准化
  const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
  const normalizedVector = {x: viewVector.x() / length,y: viewVector.y() / length,z: viewVector.z() / length};
  const projectile = level.createEntity("legendary_monsters:tracking_bomb"); // 发射物
  const offset = 1.5;  // 偏移距离
  const spawnX = player.x + normalizedVector.x * offset; // 基于玩家位置+视线方向偏移
  const spawnY = player.y + 1.5 + normalizedVector.y * offset;
  const spawnZ = player.z + normalizedVector.z * offset;
  projectile.setPosition(spawnX, spawnY, spawnZ); //设定发射坐标
  const velocity = 3.0; // 设定速度基数
  projectile.mergeNbt({ pickup: 4, damage: 4, PierceLevel: 8 })// 设定弹射物NBT数据
  projectile.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity); // 设定弹射物方向
  projectile.setOwner(player) // 设定弹射物发射者
  projectile.spawn();
  const setCOOLDOWNS=player.getAttributeTotalValue("minecraft:generic.luck")
  player.addItemCooldown('legendary_monsters:portal_shard', 5 + 40 ^ (0.85*setCOOLDOWNS))
});




// 玩家登录事件
PlayerEvents.loggedIn(event => {
	let player = event.player
	let server = player.server
    let playerName = player.username
	server.scheduleInTicks(40, () => {
	//		server.runCommandSilent(`/execute in pbf1:sanctum_of_the_battle1 run tp ${playerName} 4 10 0`)
	//		console.log(`已将 ${playerName} 玩家传送至竞技场`)
            if (!player.player) return;  // 检查玩家是否在线
            player.statusMessage = ` 缚时之刻已结束！ `;
            Utils.server.runCommandSilent(`/gamemode survival ${playerName}`);
            player.potionEffects.add('kubejs:hostility_magic_illness', 60, 1); // 魔力病
            //player.statusMessage = ` 世界，我们拥抱自然 `
			player.tell(`欢迎来到 - [ 虚饰作品 ] - `)
            player.tell(`反馈交流群：693928637 `)
            player.tell(` `)
            player.tell(`按 [ J ] 键可查看FTB任务 `)
            player.tell(`按 [ O ] 键可打开存储空间 `)
			
	})

})

// 玩家左键点击无名宝箱时立即破坏（宝箱内的物品将正常掉落）
BlockEvents.leftClicked('goetyawaken:nameless_chest', event => {
    const { player, block, level } = event;
    if (!player) return;
    // 立即破坏方块
    block.set('minecraft:air');
    // 给予玩家钥匙
    //player.give('ba_bt:land_monolith_key');
    // 播放音效
    level.playSound(null, block.x, block.y, block.z, 'block.stone.break', 'blocks', 1.0, 1.0);
});

// 玩家左键点击冰火收集器时立即破坏
BlockEvents.leftClicked('goety:ice_bouquet_trap', event => {
    const { player, block, level } = event;
    if (!player) return;
    // 立即破坏方块
    block.set('minecraft:air');
    // 播放音效
    level.playSound(null, block.x, block.y, block.z, 'block.stone.break', 'blocks', 1.0, 1.0);
});

// 破碎的时空结晶（随机传送）
ItemEvents.rightClicked('beyonddimensions:shattered_space_time_crystallization', event => {
  const { level } = event;
  let player = event.player
  let mainHandItem = player.getMainHandItem();
  let Dimension = level.dimension
  if (!Dimension == "pbf1:sanctum_of_the_battle1") {return} //无法在沉睡海港使用
  if (mainHandItem.getId() === 'beyonddimensions:shattered_space_time_crystallization') {
  //if(!player.isCuriosEquipped('ba_bt:end_golem_eye')) return; //佩戴饰品

  let x = Math.random() * 200000 - Math.random() * 200000;
  let z = Math.random() * 200000 - Math.random() * 200000;

  if (player.cooldowns.isOnCooldown('beyonddimensions:shattered_space_time_crystallization')) return;
  player.addItemCooldown('beyonddimensions:shattered_space_time_crystallization', 200)

  if (!player.isCreative()) {mainHandItem.shrink(1);player.setMainHandItem(mainHandItem);};

  player.playNotifySound("minecraft:ambient.cave", "ambient", 1, 1);
  global.sound(player, 'block.amethyst_cluster.break', 1, 1, 0.14);
  player.potionEffects.add('levitation', 45, 0, false , false);
  let delayTicks = 40; //延迟
  player.server.scheduleInTicks(delayTicks, () => { 
  if (!player.player) return;  // 检查玩家是否在线
  player.teleportTo(x,320,z);
  player.playNotifySound("minecraft:item.totem.use", "ambient", 1, 1)
  player.potionEffects.add('resistance', 200, 4, false , false);
  player.statusMessage = ` 你意外跌入时间的长河，遗落至此 `;
})}

})

// 缚时者的怀表（旁观者模式）
ItemEvents.rightClicked('kubejs:restrictiontimer_pocketwatch', event => {
  const { level , player} = event;
  let playerName = player.username
  let mainHandItem = player.getMainHandItem();
  let Dimension = level.dimension
  if (!Dimension == "pbf1:sanctum_of_the_battle1") {return} //无法在沉睡海港使用
  if (mainHandItem.getId() === 'kubejs:restrictiontimer_pocketwatch') {
  //if(!player.isCuriosEquipped('ba_bt:end_golem_eye')) return; //佩戴饰品

  if (player.cooldowns.isOnCooldown('kubejs:restrictiontimer_pocketwatch')) return;
  player.addItemCooldown('kubejs:restrictiontimer_pocketwatch', 600)

  Utils.server.runCommandSilent(`/gamemode spectator ${playerName}`);
  player.potionEffects.add('kubejs:hostility_chaos', 280, 9, false , false);
  player.potionEffects.add('minecraft:night_vision', 200, 9, false , false);
  //player.runCommandSilent('/summon goety:brew_effect_gas');

  player.playNotifySound("minecraft:ambient.cave", "ambient", 1, 1);
  global.sound(player, 'block.amethyst_cluster.break', 1, 1, 0.14);
  player.statusMessage = ` 你遁入时间之中 `;

   player.server.scheduleInTicks(120, () => { 
   if (!player.player) return;  // 检查玩家是否在线
   player.statusMessage = ` 缚时之刻还剩 3 秒 `;
   player.playNotifySound("minecraft:item.bottle.empty", "ambient", 1, 1)
   })

   player.server.scheduleInTicks(140, () => { 
   if (!player.player) return;  // 检查玩家是否在线
   player.statusMessage = ` 缚时之刻还剩 2 秒 `;
   player.playNotifySound("minecraft:item.bottle.fill", "ambient", 1, 1)
   })

   player.server.scheduleInTicks(160, () => { 
   if (!player.player) return;  // 检查玩家是否在线
   player.statusMessage = ` 缚时之刻还剩 1 秒 `;
   player.playNotifySound("minecraft:item.bottle.fill", "ambient", 1, 1)
   })

   player.server.scheduleInTicks(180, () => { 
   if (!player.player) return;  // 检查玩家是否在线
   player.statusMessage = ` 缚时之刻已结束！ `;
   Utils.server.runCommandSilent(`/gamemode survival ${playerName}`);
   player.potionEffects.add('jump_boost', 40, 4, false , false);
   player.playNotifySound("minecraft:item.bottle.fill_dragonbreath", "ambient", 1, 1)

   })

}
})


// 破损的怀表（前往沉睡海港）
ItemEvents.rightClicked('kubejs:broken_pocketwatch', event => {
  let player = event.player
  let server = player.server
  let playerName = player.username
  let mainHandItem = player.getMainHandItem();
  //if (Dimension == "pbf1:sanctum_of_the_battle1") return //无法在竞技场使用
  if (mainHandItem.getId() === 'kubejs:broken_pocketwatch') {
  //if(!player.isCuriosEquipped('ba_bt:end_golem_eye')) return; //佩戴饰品

  if (player.cooldowns.isOnCooldown('kubejs:broken_pocketwatch')) return;
  player.addItemCooldown('kubejs:broken_pocketwatch', 600)

  player.playNotifySound("minecraft:ambient.cave", "ambient", 1, 1);
  global.sound(player, 'block.amethyst_cluster.break', 1, 1, 0.14);
  player.potionEffects.add('levitation', 45, 0, false , false);
  let delayTicks = 40; //延迟
  player.server.scheduleInTicks(delayTicks, () => { 
  if (!player.player) return;  // 检查玩家是否在线
  Utils.server.runCommandSilent(`/execute in pbf1:sanctum_of_the_battle1 run tp ${playerName} 3 10 0`);
  player.playNotifySound("minecraft:item.totem.use", "ambient", 1, 1)
  player.statusMessage = ` 你攥紧手中的怀表，顺着时间长河而下 `;
})}
})

//召唤无名者
ItemEvents.firstRightClicked('kubejs:feigned_blank', event => {
    // 从事件中解构出关键对象
    const { player, level, item } = event;
    if (!player) return;
    if (level.isClientSide()) {return;}
    let Dimension = level.dimension
	if (Dimension == "pbf1:sanctum_of_the_battle1") { //只能在竞技场召唤
    const targetItemId = 'kubejs:feigned_blank';
    const mainHandItem = player.getMainHandItem();
    if (!player.getMainHandItem().is(targetItemId)) {return;}
    if(player.getMainHandItem() == ("kubejs:feigned_blank")){
    if (player.cooldowns.isOnCooldown('kubejs:feigned_blank')) return; // 冷却返回
    player.addItemCooldown('kubejs:feigned_blank', 1200);

    let random1 = Math.random() * 5 - Math.random() * 10;
    let random2 = Math.random() * 5 - Math.random() * 10;

    if (mainHandItem.getId() === 'kubejs:feigned_blank') {//召唤所需的物品
        const moyingg = event.level.createEntity('goetyawaken:nameless_one');//被召唤的生物
        moyingg.setPosition(
            player.x + random1,
            player.y + 3,
            player.z + random2
        );
        moyingg.spawn();
        if (!player.isCreative()) {mainHandItem.shrink(1);player.setMainHandItem(mainHandItem)}
    }
  }
}
});


// 玩家死亡事件
//EntityEvents.death(event => {
//	let player = event.entity
//	if (!player || !player.isPlayer()) return
//        let server = player.getServer();
//    let playerName = player.username;
//    let x = Math.random() * 500 - Math.random() * 1000;
//    let z = Math.random() * 500 - Math.random() * 1000;
//    player.potionEffects.add('kubejs:hostility_magic_illness', 200, 1); // 魔力病
//})

// 移除弹射物
let $ProjectileImpactEvent = Java.loadClass('net.minecraftforge.event.entity.ProjectileImpactEvent')
let $Arrow = Java.loadClass('net.minecraft.world.entity.projectile.Arrow')
//let $ThrownTrident = Java.loadClass('net.minecraft.world.entity.projectile.ThrownTrident')

NativeEvents.onEvent($ProjectileImpactEvent, event => {
	let entity = event.entity
	//let { rayTraceResult, entity } = event
	if (entity instanceof $Arrow) {
		entity.discard()
	}
	// if (entity instanceof $ThrownTrident) {
	// 	entity.discard()
	// }
})

// // 更新玩家经验值
// PlayerEvents.tick(event => {
//     let player = event.player;
//     if (!player || player.level.isClientSide() || player.age % 40 !== 0) return;

//     let playerName = player.username
// 	let exp = player.totalExperience
//     Utils.server.runCommandSilent(`/experience set ${playerName} ${exp}`)
	
// });


const MATT_COVENANT_ITEMS = ['kubejs:covenant_matt1', 'kubejs:covenant_matt2', 'kubejs:covenant_matt3', 'kubejs:covenant_matt4', 'kubejs:covenant_matt5'];

function hasMattCovenantEquipped(entity) {
    for (let item of MATT_COVENANT_ITEMS) {
        if (entity.isCuriosEquipped(item)) return true;
    }
    return false;
}

//ItemEvents.firstRightClicked('beyonddimensions:net_creater', event => { //维度网络提示（无效）
//	let player = event.player
//	let item = event.item
//    player.playNotifySound("minecraft:entity.experience_orb.pickup", "ambient", 1, 1)
//	player.addItemCooldown(item.id, 20)
//	player.tell("按 [ O ] 键可随时打开个人维度网络 ")
//})


PlayerEvents.tick(event => {
    const player = event.player;
    if (!player.player) return;  // 检查玩家是否在线
    if (!player || player.level.isClientSide() || player.age % 20 !== 0) return;

    let playerName = player.username 
	let exp = player.totalExperience
    Utils.server.runCommandSilent(`/experience set ${playerName} ${exp}`) // 更新玩家经验值

    if(player.isCuriosEquipped('kubejs:taodix')) { //梦之笛                      
            player.potionEffects.add('the_bumblezone:hidden', 100, 4);
            player.potionEffects.add('minecraft:invisibility', 100, 4);
            player.potionEffects.add('minecraft:luck', 100, 4);
            player.potionEffects.add('goety:fortunate', 100, 4);
            player.potionEffects.add('goety:bottling', 100, 4);
            player.potionEffects.add('kubejs:hostility_chaos', 100, 9);
            player.potionEffects.add('cataclysm:ghost_form', 100, 0);
    
    }

    if(player.isCuriosEquipped('legendary_monsters:molten_metal_ingot')) { //熔融金属锭
        if (!player.cooldowns.isOnCooldown('legendary_monsters:molten_metal_ingot')) {

        player.addItemCooldown('legendary_monsters:molten_metal_ingot', 80)

        if (!player.potionEffects.isActive('kubejs:wrought'))  {  //铸造                            
            player.potionEffects.add('kubejs:wrought', 160, 0, false, false); 
        } else if (player.potionEffects.isActive('kubejs:wrought'))  {                           
            player.potionEffects.add('kubejs:wrought', 160, 1, false, false); 
        } 
            
    }
    }

    // if(player.isCuriosEquipped('legendary_monsters:molten_metal_ingot')) { //熔融金属锭 
    // if (!player.cooldowns.isOnCooldown('legendary_monsters:molten_metal_ingot')) { 
        
    //     player.addItemCooldown('legendary_monsters:molten_metal_ingot', 80)

    //     if (!player.potionEffects.isActive('kubejs:wrought')) {  //铸造                             
    //         player.potionEffects.add('kubejs:wrought', 200, 0); 
    //     } else {
    //         let currentLevel = player.potionEffects.get('kubejs:wrought').amplifier;
    //         if (player.potionEffects.isActive('kubejs:wrought') && currentLevel < 4) { 
    //             player.potionEffects.add('kubejs:wrought', 200, currentLevel + 1);
    //         }
    //     }
    // }
    // }

    if(player.isCuriosEquipped('goetyawaken:taboo_fragment')) { //禁咒碎片
    let att = event.player.getAttributeTotalValue('minecraft:generic.max_health');
        if (att >= 40 && att < 60) {                                    
            player.potionEffects.add('goetyawaken:shockwave', 100, 1); //冲击波
        } else if (att >= 60 && att < 80) {
            player.potionEffects.add('goetyawaken:shockwave', 100, 2); 
        } else if (att >= 80 && att < 100) {
            player.potionEffects.add('goetyawaken:shockwave', 100, 3); 
        } else if (att >= 100 && att < 120) {
            player.potionEffects.add('goetyawaken:shockwave', 100, 4); 
        } else if (att >= 120) {
            player.potionEffects.add('goetyawaken:shockwave', 100, 5); 
        }
    }

    if(player.isCuriosEquipped('kubejs:divineblood_mechanizedcore')) { //神血机械核心
    let att = event.player.getAttributeTotalValue('minecraft:generic.armor');
        if (att >= 40 && att < 60) {
            player.potionEffects.add('goetyawaken:enchantment_thundering', 100, 1); //引雷
        } else if (att >= 60 && att < 80) {
            player.potionEffects.add('goetyawaken:enchantment_thundering', 100, 2); 
        } else if (att >= 80 && att < 100) {
            player.potionEffects.add('goetyawaken:enchantment_thundering', 100, 3); 
        } else if (att >= 100 && att < 120) {
            player.potionEffects.add('goetyawaken:enchantment_thundering', 100, 4); 
        } else if (att >= 120) {
            player.potionEffects.add('goetyawaken:enchantment_thundering', 100, 5); 
        }
    }

    if(player.isCuriosEquipped('kubejs:saintwing_cucumberangel')) { //圣翼黄瓜使
    let att = event.player.getAttributeTotalValue('minecraft:generic.luck');
        if (att >= 0 && att < 10) {                                    
            player.potionEffects.add('goety:shielding', 100, 0); //护佑
        } else if (att >= 10 && att < 15) {
            player.potionEffects.add('goety:shielding', 100, 1); 
        } else if (att >= 15) {
            player.potionEffects.add('goety:shielding', 100, 2); 
        }
    }

    if(player.isCuriosEquipped('goety:heart_of_the_night')) { //暗夜之心
        Utils.server.runCommandSilent(`execute at ${event.player.username} run effect give @e[type=!player,distance=..10] goety:wane 10 0 true`)
        Utils.server.runCommandSilent(`execute at ${event.player.username} run effect give @e[type=!player,distance=..10] goety:sapped 10 0 true`)
    }

    if(player.isCuriosEquipped('bosses_of_mass_destruction:blazing_eye')) { //烈焰之眼
        let att = event.player.getAttributeTotalValue('minecraft:generic.armor');
        if (att >= 0 && att < 120) {
        Utils.server.runCommandSilent(`execute at ${event.player.username} run effect give @e[type=!player,distance=..10] goety:flammable 10 0 true`)
        } else if (att >= 120) {
        Utils.server.runCommandSilent(`execute at ${event.player.username} run effect give @e[type=!player,distance=..10] goety:flammable 10 1 true`)
        }
    }

    if(player.isCuriosEquipped('legendary_monsters:eye_crystal')) { //眼之水晶
        Utils.server.runCommandSilent(`execute at ${event.player.username} run effect give @e[type=!player,distance=..10] goety:ender_ground 10 0 true`)
    }

    if(player.isCuriosEquipped('goety:soul_ruby')) { //灵魂红宝石
        Utils.server.runCommandSilent(`execute at ${event.player.username} run effect give @e[type=!player,distance=..10] goety:ender_ground 10 0 true`)
    }

    if(player.isCuriosEquipped('goety:night_beacon')) { //暗夜信标
        Utils.server.runCommandSilent(`execute at ${event.player.username} run effect give @e[type=!player,distance=..10] goety:sun_allergy 10 0 true`)
        
        // 获取当前位置
        let currentX = player.x;
        let currentY = player.y;
        let currentZ = player.z;
        if (!player || player.removed) return;

        // 延迟检查位置是否变化
        player.server.scheduleInTicks(40, () => {
        if (!player || player.removed) return;
        
        // 计算位置变化
        let deltaX = Math.abs(player.x - currentX);
        let deltaY = Math.abs(player.y - currentY);
        let deltaZ = Math.abs(player.z - currentZ);
        
        // 如果位置几乎没变（静止）
        if (deltaX < 0.1 && deltaY < 0.1 && deltaZ < 0.1) {
            let server = player.getServer();
            if (server) {Utils.server.runCommandSilent(`execute at ${event.player.username} run effect give @e[type=!player,distance=..10] goety:buff 30 4 true`)}
        }
    }
    )}

    if (hasAnyCurio(player, ['kubejs:covenant_matt1', 'kubejs:covenant_matt2', 'kubejs:covenant_matt3', 'kubejs:covenant_matt4', 'kubejs:covenant_matt5'])) {
    Utils.server.runCommandSilent(`/goety soul add ${player.username} 2`);}
    if (hasAnyCurio(player, ['kubejs:covenant_matt2', 'kubejs:covenant_matt3', 'kubejs:covenant_matt4', 'kubejs:covenant_matt5'])) {
    Utils.server.runCommandSilent(`/goety soul add ${player.username} 2`);}
    if (hasAnyCurio(player, ['kubejs:covenant_matt3', 'kubejs:covenant_matt4', 'kubejs:covenant_matt5'])) {
    Utils.server.runCommandSilent(`/goety soul add ${player.username} 2`);}
    if (hasAnyCurio(player, ['kubejs:covenant_matt4', 'kubejs:covenant_matt5'])) {
    Utils.server.runCommandSilent(`/goety soul add ${player.username} 2`);}
    if (hasAnyCurio(player, ['kubejs:covenant_matt5'])) {
    Utils.server.runCommandSilent(`/goety soul add ${player.username} 2`);}
    

    if (!hasMattCovenantEquipped(player)) return; // 无光盟约 - 自动回蓝
    
    if (player.isCuriosEquipped('goety:totem_of_roots')) {
        Utils.server.runCommandSilent(`/goety soul add ${player.username} 4`);
        if (hasAnyCurio(player, ['kubejs:covenant_matt2', 'kubejs:covenant_matt3', 'kubejs:covenant_matt4', 'kubejs:covenant_matt5'])) {
        Utils.server.runCommandSilent(`/goety soul add ${player.username} 4`);}

        // 获取当前位置
        let currentX = player.x;
        let currentY = player.y;
        let currentZ = player.z;
        if (!player || player.removed) return;

        // 延迟检查位置是否变化
        player.server.scheduleInTicks(40, () => {
        if (!player || player.removed) return;
        
        // 计算位置变化
        let deltaX = Math.abs(player.x - currentX);
        let deltaY = Math.abs(player.y - currentY);
        let deltaZ = Math.abs(player.z - currentZ);
        
        // 如果位置几乎没变（静止）
        if (deltaX < 0.1 && deltaY < 0.1 && deltaZ < 0.1) {
            let server = player.getServer();
            if (server) {
                Utils.server.runCommandSilent(`/goety soul add ${player.username} 4`);
                if (hasAnyCurio(player, ['kubejs:covenant_matt2', 'kubejs:covenant_matt3', 'kubejs:covenant_matt4', 'kubejs:covenant_matt5'])) {
                Utils.server.runCommandSilent(`/goety soul add ${player.username} 4`);}
            }
        }
    })
    }
    if (player.isCuriosEquipped('goety:totem_of_souls')) {
        Utils.server.runCommandSilent(`/goety soul add ${player.username} 4`);
        if (hasAnyCurio(player, ['kubejs:covenant_matt3', 'kubejs:covenant_matt4', 'kubejs:covenant_matt5'])) {
        Utils.server.runCommandSilent(`/goety soul add ${player.username} 4`);}

        // 获取当前位置
        let currentX = player.x;
        let currentY = player.y;
        let currentZ = player.z;
        if (!player || player.removed) return;

        // 延迟检查位置是否变化
        player.server.scheduleInTicks(40, () => {
        if (!player || player.removed) return;
        
        // 计算位置变化
        let deltaX = Math.abs(player.x - currentX);
        let deltaY = Math.abs(player.y - currentY);
        let deltaZ = Math.abs(player.z - currentZ);
        
        // 如果位置几乎没变（静止）
        if (deltaX < 0.1 && deltaY < 0.1 && deltaZ < 0.1) {
            let server = player.getServer();
            if (server) {
                Utils.server.runCommandSilent(`/goety soul add ${player.username} 4`);
                if (hasAnyCurio(player, ['kubejs:covenant_matt3', 'kubejs:covenant_matt4', 'kubejs:covenant_matt5'])) {
                Utils.server.runCommandSilent(`/goety soul add ${player.username} 4`);}
            }
        }
    })
    }

    if (player.isCuriosEquipped('twilightforest:cube_talisman')) { //立方护符
        Utils.server.runCommandSilent(`/goety soul add ${player.username} 4`);
        if (hasAnyCurio(player, ['kubejs:covenant_matt3', 'kubejs:covenant_matt4', 'kubejs:covenant_matt5'])) {
        Utils.server.runCommandSilent(`/goety soul add ${player.username} 4`);}

        // 获取当前位置
        let currentX = player.x;
        let currentY = player.y;
        let currentZ = player.z;
        if (!player || player.removed) return;

        // 延迟检查位置是否变化
        player.server.scheduleInTicks(40, () => {
        if (!player || player.removed) return;
        
        // 计算位置变化
        let deltaX = Math.abs(player.x - currentX);
        let deltaY = Math.abs(player.y - currentY);
        let deltaZ = Math.abs(player.z - currentZ);
        
        // 如果位置几乎没变（静止）
        if (deltaX < 0.1 && deltaY < 0.1 && deltaZ < 0.1) {
            let server = player.getServer();
            if (server) {
                Utils.server.runCommandSilent(`/goety soul add ${player.username} 4`);
                if (hasAnyCurio(player, ['kubejs:covenant_matt3', 'kubejs:covenant_matt4', 'kubejs:covenant_matt5'])) {
                Utils.server.runCommandSilent(`/goety soul add ${player.username} 4`);}
            }
        }
    })
    }

    if (player.isCuriosEquipped('goetyawaken:soul_sapphire')) { //灵魂蓝宝石
        Utils.server.runCommandSilent(`/goety soul add ${player.username} 8`);
        if (hasAnyCurio(player, ['kubejs:covenant_matt4', 'kubejs:covenant_matt5'])) {
        Utils.server.runCommandSilent(`/goety soul add ${player.username} 8`);}

        // 获取当前位置
        let currentX = player.x;
        let currentY = player.y;
        let currentZ = player.z;
        if (player || player.removed) {

        // 延迟检查位置是否变化
        player.server.scheduleInTicks(40, () => {
        if (player || player.removed) {
        
        // 计算位置变化
        let deltaX = Math.abs(player.x - currentX);
        let deltaY = Math.abs(player.y - currentY);
        let deltaZ = Math.abs(player.z - currentZ);
        
        // 如果位置几乎没变（静止）
        if (deltaX < 0.1 && deltaY < 0.1 && deltaZ < 0.1) {
            let server = player.getServer();
            if (server) {
                Utils.server.runCommandSilent(`/goety soul add ${player.username} 8`);
                if (hasAnyCurio(player, ['kubejs:covenant_matt4', 'kubejs:covenant_matt5'])) {
                Utils.server.runCommandSilent(`/goety soul add ${player.username} 8`);}
            }
            }
        }}
    )
    }
    
    }

    if (player.isCuriosEquipped('goety:unholy_blood')) { //不洁之血
        Utils.server.runCommandSilent(`/goety soul add ${player.username} 8`);
        if (hasAnyCurio(player, ['kubejs:covenant_matt5'])) {
        Utils.server.runCommandSilent(`/goety soul add ${player.username} 8`);}

        // 获取当前位置
        let currentX = player.x;
        let currentY = player.y;
        let currentZ = player.z;
        if (player || player.removed) {

        // 延迟检查位置是否变化
        player.server.scheduleInTicks(40, () => {
        if (player || player.removed) {
        
        // 计算位置变化
        let deltaX = Math.abs(player.x - currentX);
        let deltaY = Math.abs(player.y - currentY);
        let deltaZ = Math.abs(player.z - currentZ);
        
        // 如果位置几乎没变（静止）
        if (deltaX < 0.1 && deltaY < 0.1 && deltaZ < 0.1) {
            let server = player.getServer();
            if (server) {
                Utils.server.runCommandSilent(`/goety soul add ${player.username} 8`);
                if (hasAnyCurio(player, ['kubejs:covenant_matt5'])) {
                Utils.server.runCommandSilent(`/goety soul add ${player.username} 8`);}
            }
            }
        }}
    )
    }

    

}}
);

PlayerEvents.tick(event => { //恶意浪潮
    const player = event.player;
    if (!player || player.level.isClientSide() || player.age % 300 !== 0) return;

    if(player.isCuriosEquipped('kubejs:contrary_chronicle_hostility')) {
        const randomEffect = Math.floor(Math.random() * 100);
        switch(randomEffect) {
            case 0: player.potionEffects.add('kubejs:hostility_wounding', 600, 0); break; //重创
            case 1: player.potionEffects.add('kubejs:hostility_magic_illness', 600, 0); break; //魔力病
            case 2: player.potionEffects.add('goety:evil_eye', 200, 4); break; //邪恶之眼
            case 3: player.potionEffects.add('goety:void_touched', 1200, 4); break; //虚空之触
            case 4: player.potionEffects.add('goety:impaired', 200, 0); break; //锢魂
            case 5: player.potionEffects.add('goety:flammable', 1200, 4); break; //助燃性
            case 6: player.potionEffects.add('goety:storms_wrath', 600, 0); break; //风暴之怒
            case 7: player.potionEffects.add('goety:flimsy', 1200, 4); break; //失重
            case 8: player.potionEffects.add('goety:ender_flux', 600, 4); break; //末影溶解
            case 9: player.potionEffects.add('goety:doom', 600, 4); break; //末日
            case 10: player.potionEffects.add('goety:plunge', 600, 4); break; //坠落
            case 11: player.potionEffects.add('goety:arrowmantic', 600, 4); break; //箭矢磁吸
            //case 12: player.potionEffects.add('goety:tripping', 300, 4); break; //滑跌
            case 12: player.potionEffects.add('goety:save_effects', 1200, 4); break; //永恒
            case 13: player.potionEffects.add('goety:snow_skin', 600, 4); break; //雪肤
            case 14: player.potionEffects.add('goety:sun_allergy', 600, 4); break; //日光过敏
            case 15: player.potionEffects.add('goety:nyctophobia', 600, 2); break; //黑暗恐惧症
            case 16: player.potionEffects.add('goety:soul_hunger', 600, 0); break; //灵魂饥饿
            case 17: player.potionEffects.add('goety:sapped', 600, 4); break; //侵蚀
            case 18: player.potionEffects.add('goety:burn_hex', 600, 0); break; //灼烧魔印
            case 19: player.potionEffects.add('goety:summon_down', 600, 0); break; //召唤冷却
            case 20: player.potionEffects.add('goety:illague', 600, 0); break; //灾厄瘟疫
            
        }
    }
});




// 皇家权杖使用
ItemEvents.rightClicked('royalvariations:royal_staff', event => {
    let player = event.player;
    let mainHandItem = player.getMainHandItem();
    if (!player.player) return;  // 检查玩家是否在线

    if (!hasMattCovenantEquipped(player)) return;
    //if (!player || mainHandItem.getId() !== 'royalvariations:royal_staff') return;
    if (player.cooldowns.isOnCooldown(mainHandItem.id)) return;
    
    const setCOOLDOWNS=player.getAttributeTotalValue("goety:void_potency")
    player.addItemCooldown(mainHandItem.id, 20+1000/(4+setCOOLDOWNS));

    player.potionEffects.add('kubejs:hostility_magic_illness', 100, 0);   //魔力病
    
    player.playNotifySound("minecraft:item.bottle.empty", "ambient", 1, 1);
    Utils.server.runCommandSilent(`/goety soul add ${player.username} 20`);
    if (hasAnyCurio(player, ['kubejs:covenant_matt3', 'kubejs:covenant_matt4', 'kubejs:covenant_matt5'])) {
    Utils.server.runCommandSilent(`/goety soul add ${player.username} 20`);}
    
    const delays = [20, 40, 60, 80, 100, 120, 140, 160, 180];
    const sounds = ["minecraft:item.bottle.empty", "minecraft:item.bottle.fill", "minecraft:item.bottle.fill", "minecraft:item.bottle.fill_dragonbreath"];
    
    delays.forEach((delay, i) => {
        player.server.scheduleInTicks(delay, () => {
            Utils.server.runCommandSilent(`/goety soul add ${player.username} 20`);
            if (player.player) player.playNotifySound(sounds[i], "ambient", 1, 1);
            if (hasAnyCurio(player, ['kubejs:covenant_matt3', 'kubejs:covenant_matt4', 'kubejs:covenant_matt5'])) {
            Utils.server.runCommandSilent(`/goety soul add ${player.username} 20`);}
        });
    });

});

// 充能末影珍珠使用
ItemEvents.rightClicked('bosses_of_mass_destruction:charged_ender_pearl', event => {
    let player = event.player;
    let mainHandItem = player.getMainHandItem();
    if (!player.player) return;  // 检查玩家是否在线

    if (!hasMattCovenantEquipped(player)) return;
    //if (!player || mainHandItem.getId() !== 'bosses_of_mass_destruction:charged_ender_pearl') return;
    if (player.cooldowns.isOnCooldown(mainHandItem.id)) return;
    
    const setCOOLDOWNS=player.getAttributeTotalValue("goety:void_potency")
    player.addItemCooldown(mainHandItem.id, 20+1000/(4+setCOOLDOWNS));

    player.potionEffects.add('kubejs:hostility_magic_illness', 100, 0);   //魔力病
    
    player.playNotifySound("minecraft:item.bottle.empty", "ambient", 1, 1);
    Utils.server.runCommandSilent(`/goety soul add ${player.username} 50`);
    if (hasAnyCurio(player, ['kubejs:covenant_matt4', 'kubejs:covenant_matt5'])) {
    Utils.server.runCommandSilent(`/goety soul add ${player.username} 50`);}
    
    const delays = [20, 40, 60, 80, 100, 120, 140, 160, 180];
    const sounds = ["minecraft:item.bottle.empty", "minecraft:item.bottle.fill", "minecraft:item.bottle.fill", "minecraft:item.bottle.fill_dragonbreath"];
    
    delays.forEach((delay, i) => {
        player.server.scheduleInTicks(delay, () => {
            Utils.server.runCommandSilent(`/goety soul add ${player.username} 50`);
            if (player.player) player.playNotifySound(sounds[i], "ambient", 1, 1);
            if (hasAnyCurio(player, ['kubejs:covenant_matt4', 'kubejs:covenant_matt5'])) {
            Utils.server.runCommandSilent(`/goety soul add ${player.username} 50`);}
        });
    });


});

// 灵质使用
ItemEvents.rightClicked('goety:ectoplasm', event => {
    let player = event.player;
    let mainHandItem = player.getMainHandItem();
    if (!player.player) return;  // 检查玩家是否在线

    if (!hasMattCovenantEquipped(player)) return;
    if (!player || mainHandItem.getId() !== 'goety:ectoplasm') return;
    if (player.cooldowns.isOnCooldown(mainHandItem.id)) return;

    if (!player.isCreative()) {mainHandItem.shrink(1);player.setMainHandItem(mainHandItem)}
    
    const setCOOLDOWNS=player.getAttributeTotalValue("goety:void_potency")
    player.addItemCooldown(mainHandItem.id, 10+800/(4+setCOOLDOWNS));

    player.potionEffects.add('kubejs:hostility_magic_illness', 60, 0);   //魔力病
    
    player.playNotifySound("minecraft:item.bottle.empty", "ambient", 1, 1);
    Utils.server.runCommandSilent(`/goety soul add ${player.username} 20`);
    if (hasAnyCurio(player, ['kubejs:covenant_matt2', 'kubejs:covenant_matt3', 'kubejs:covenant_matt4', 'kubejs:covenant_matt5'])) {
    Utils.server.runCommandSilent(`/goety soul add ${player.username} 20`);}
    
    const delays = [20, 40, 60, 80, 100, 120, 140, 160, 180];
    const sounds = ["minecraft:item.bottle.empty", "minecraft:item.bottle.fill", "minecraft:item.bottle.fill", "minecraft:item.bottle.fill_dragonbreath"];
    
    delays.forEach((delay, i) => {
        player.server.scheduleInTicks(delay, () => {
            Utils.server.runCommandSilent(`/goety soul add ${player.username} 20`);
            if (player.player) player.playNotifySound(sounds[i], "ambient", 1, 1);
            if (hasAnyCurio(player, ['kubejs:covenant_matt2', 'kubejs:covenant_matt3', 'kubejs:covenant_matt4', 'kubejs:covenant_matt5'])) {
            Utils.server.runCommandSilent(`/goety soul add ${player.username} 20`);}
        });
    });

});

// 暗影精髓使用
ItemEvents.rightClicked('goety:shadow_essence', event => {
    let player = event.player;
    let mainHandItem = player.getMainHandItem();
    if (!player.player) return;  // 检查玩家是否在线

    if (!hasMattCovenantEquipped(player)) return;
    if (!player || mainHandItem.getId() !== 'goety:shadow_essence') return;
    if (player.cooldowns.isOnCooldown(mainHandItem.id)) return;
    
    const setCOOLDOWNS=player.getAttributeTotalValue("goety:void_potency")
    player.addItemCooldown(mainHandItem.id, 10+800/(4+setCOOLDOWNS));

    player.potionEffects.add('kubejs:hostility_magic_illness', 60, 0);   //魔力病
    
    player.playNotifySound("minecraft:item.bottle.empty", "ambient", 1, 1);
    Utils.server.runCommandSilent(`/goety soul add ${player.username} 400`);
    if (hasAnyCurio(player, ['kubejs:covenant_matt3', 'kubejs:covenant_matt4', 'kubejs:covenant_matt5'])) {
    Utils.server.runCommandSilent(`/goety soul add ${player.username} 400`);}
    
    const delays = [20, 40, 60, 80];
    const sounds = ["minecraft:item.bottle.empty", "minecraft:item.bottle.fill", "minecraft:item.bottle.fill", "minecraft:item.bottle.fill_dragonbreath"];
    
    delays.forEach((delay, i) => {
        player.server.scheduleInTicks(delay, () => {
            Utils.server.runCommandSilent(`/goety soul add ${player.username} 400`);
            if (player.player) player.playNotifySound(sounds[i], "ambient", 1, 1);
            if (hasAnyCurio(player, ['kubejs:covenant_matt3', 'kubejs:covenant_matt4', 'kubejs:covenant_matt5'])) {
            Utils.server.runCommandSilent(`/goety soul add ${player.username} 400`);}
        });
    });

    if (!player.isCreative()) {mainHandItem.shrink(1);player.setMainHandItem(mainHandItem)}

});

// 不死图腾使用
ItemEvents.rightClicked('minecraft:totem_of_undying', event => {
    let player = event.player;
    let mainHandItem = player.getMainHandItem();
    if (!player.player) return;  // 检查玩家是否在线

    if (!hasMattCovenantEquipped(player)) return;
    if (!player || mainHandItem.getId() !== 'minecraft:totem_of_undying') return;
    if (player.cooldowns.isOnCooldown(mainHandItem.id)) return;
    
    const setCOOLDOWNS=player.getAttributeTotalValue("goety:void_potency")
    player.addItemCooldown(mainHandItem.id, 40+4000/(4+setCOOLDOWNS));

    player.potionEffects.add('kubejs:hostility_magic_illness', 100, 0);   //魔力病
    
    player.playNotifySound("minecraft:item.totem.use", "ambient", 1, 1);
    Utils.server.runCommandSilent(`/goety soul add ${player.username} 2000`);
    if (hasAnyCurio(player, ['kubejs:covenant_matt4', 'kubejs:covenant_matt5'])) {
    Utils.server.runCommandSilent(`/goety soul add ${player.username} 2000`);}
    
    const delays = [20, 40, 60, 80];
    const sounds = ["minecraft:item.bottle.empty", "minecraft:item.bottle.fill", "minecraft:item.bottle.fill", "minecraft:item.bottle.fill_dragonbreath"];
    
    delays.forEach((delay, i) => {
        player.server.scheduleInTicks(delay, () => {
            Utils.server.runCommandSilent(`/goety soul add ${player.username} 2000`);
            if (player.player) player.playNotifySound(sounds[i], "ambient", 1, 1);
            if (hasAnyCurio(player, ['kubejs:covenant_matt4', 'kubejs:covenant_matt5'])) {
            Utils.server.runCommandSilent(`/goety soul add ${player.username} 2000`);}
        });
    });
    
    if (!player.isCreative()) {mainHandItem.shrink(1);player.setMainHandItem(mainHandItem)}

});

// // 召唤蔓生巨像
// BlockEvents.rightClicked('ba_bt:land_monolith', event => {//右键方块
//     if (event.hand == "OFF_HAND") return;
//     const player = event.player;
//     if (!player) return;

//     if (player.cooldowns.isOnCooldown('legendary_monsters:eye_of_moss')) return; // 冷却返回

//     let random1 = Math.random() * 5 - Math.random() * 10;
//     let random2 = Math.random() * 5 - Math.random() * 10;
 
//     const mainHandItem = player.getMainHandItem();
//     if (mainHandItem.getId() === 'legendary_monsters:eye_of_moss') {//召唤所需的物品
//         const moyingg = event.level.createEntity('legendary_monsters:overgrown_colossus');//被召唤的生物
//         moyingg.setPosition(
//             player.x + random1,
//             player.y + 3,
//             player.z + random2
//         );
//         moyingg.spawn();
//         if (!player.isCreative()) {mainHandItem.shrink(1);player.setMainHandItem(mainHandItem)}
//         player.addItemCooldown('legendary_monsters:eye_of_moss', 1200);
//     }
// });

// 召唤使徒
BlockEvents.rightClicked('minecraft:respawn_anchor', event => {//右键方块
    if (event.hand == "OFF_HAND") return;
    const player = event.player;
    if (!player) return;

    if (player.cooldowns.isOnCooldown('goety:withered_manuscript')) return; // 冷却返回

    let random1 = Math.random() * 5 - Math.random() * 10;
    let random2 = Math.random() * 5 - Math.random() * 10;
 
    const mainHandItem = player.getMainHandItem();
    if (mainHandItem.getId() === 'goety:withered_manuscript') {//召唤所需的物品
        const moyingg = event.level.createEntity('goety:apostle');//被召唤的生物
        moyingg.setPosition(
            player.x + random1,
            player.y + 3,
            player.z + random2
        );
        moyingg.spawn();
        if (!player.isCreative()) {mainHandItem.shrink(1);player.setMainHandItem(mainHandItem)}
        player.addItemCooldown('goety:withered_manuscript', 1200);
    }
});

// 召唤孤魂尸鬼
BlockEvents.rightClicked('goety:arca', event => {//右键方块
    if (event.hand == "OFF_HAND") return;
    const player = event.player;
    if (!player) return;

    if (player.cooldowns.isOnCooldown('goety:resonance_crystal')) return; // 冷却返回
    player.addItemCooldown('goety:resonance_crystal', 1200);

    let random = Math.random() * 5 - Math.random() * 10;
 
    const mainHandItem = player.getMainHandItem();
    if (mainHandItem.getId() === 'goety:resonance_crystal') {//召唤所需的物品
        const moyingg = event.level.createEntity('goety:wight');//被召唤的生物
        moyingg.setPosition(
            player.x + random,
            player.y + 3,
            player.z + random
        );
        moyingg.spawn();
        if (!player.isCreative()) {mainHandItem.shrink(1);player.setMainHandItem(mainHandItem)}
    }
});

// 召唤堡垒队长
BlockEvents.rightClicked('minecraft:diamond_block', event => {//右键方块
    if (event.hand == "OFF_HAND") return;
    const player = event.player;
    if (!player) return;

    const mainHandItem = player.getMainHandItem();
    if (mainHandItem.getId() === 'goetyawaken:threat_banner') {//召唤所需的物品

        if (player.cooldowns.isOnCooldown('goetyawaken:threat_banner')) return; // 冷却返回
        player.addItemCooldown('goetyawaken:threat_banner', 1200);
        let random = Math.random() * 5 - Math.random() * 10;

        const moyingg = event.level.createEntity('goetyawaken:hostile_rampart_captain');//被召唤的生物
        moyingg.setPosition(
            player.x + random,
            player.y + 3,
            player.z + random
        );
        moyingg.spawn();
        if (!player.isCreative()) {mainHandItem.shrink(1);player.setMainHandItem(mainHandItem)}
    }
});

ItemEvents.rightClicked('cataclysm:laser_gatling', event => { //激光加特林
  const { player, level } = event; //从事件中解构出对象待用
  if (event.player.cooldowns.isOnCooldown('cataclysm:laser_gatling')) return;
  const viewVector = player.getViewVector(1.0); // 获取玩家的视角向量并标准化
  const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
  const normalizedVector = {x: viewVector.x() / length,y: viewVector.y() / length,z: viewVector.z() / length};
  const projectile = level.createEntity("gunswithoutroses:bullet"); // 发射物
  const offset = 1.5;  // 偏移距离
  const spawnX = player.x + normalizedVector.x * offset; // 基于玩家位置+视线方向偏移
  const spawnY = player.y + 1.5 + normalizedVector.y * offset;
  const spawnZ = player.z + normalizedVector.z * offset;
  projectile.setPosition(spawnX, spawnY, spawnZ); //设定发射坐标
  const velocity = 2.0; // 设定速度基数
  const damage=player.getAttributeTotalValue("obscure_api:magic_damage")
  const totaldamage=player.getAttributeTotalValue("gunswithoutroses:gwr.damage_total")
  projectile.mergeNbt({ pickup: 4, damage: (2+0.5*damage)*totaldamage, PierceLevel: 8 })// 设定弹射物NBT数据
  projectile.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity); // 设定弹射物方向
  projectile.setOwner(player) // 设定弹射物发射者
  projectile.spawn();
  player.addItemCooldown('cataclysm:laser_gatling', 10)
  });

ItemEvents.rightClicked('gunswithoutrosesadditions:veridium_revolver_infused', event => { //灌注辉蓝晶左轮
  const { player, level } = event; //从事件中解构出对象待用
  if (event.player.cooldowns.isOnCooldown('gunswithoutrosesadditions:veridium_revolver_infused')) return;
  const viewVector = player.getViewVector(1.0); // 获取玩家的视角向量并标准化
  const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
  const normalizedVector = {x: viewVector.x() / length,y: viewVector.y() / length,z: viewVector.z() / length};
  const projectile = level.createEntity("gunswithoutroses:bullet"); // 发射物
  const offset = 1.5;  // 偏移距离
  const spawnX = player.x + normalizedVector.x * offset; // 基于玩家位置+视线方向偏移
  const spawnY = player.y + 1.5 + normalizedVector.y * offset;
  const spawnZ = player.z + normalizedVector.z * offset;
  projectile.setPosition(spawnX, spawnY, spawnZ); //设定发射坐标
  const velocity = 4.0; // 设定速度基数
  const damage=player.getAttributeTotalValue("goety:void_potency")
  const totaldamage=player.getAttributeTotalValue("gunswithoutroses:gwr.damage_total")
  projectile.mergeNbt({ pickup: 4, damage: ( 4 + 1.5 * damage ) * totaldamage , PierceLevel: 8 })// 设定弹射物NBT数据
  projectile.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity); // 设定弹射物方向
  projectile.setOwner(player) // 设定弹射物发射者
  projectile.spawn();
  player.addItemCooldown('gunswithoutrosesadditions:veridium_revolver_infused', 30)
  });

// ==================== 炽铁武器 ====================
const fieryWeapons = [
  { itemId: 'twilightforest:fiery_sword'},
  { itemId: 'twilightdelight:teardrop_sword'}
];

fieryWeapons.forEach(weapon => {
  // 左键发射
  ItemEvents.firstLeftClicked(weapon.itemId, event => {

    const { player } = event;
    const BladeBeam = Java.loadClass('io.zershyan.fictional.common.registry.entities.BladeBeam');
    if (player.cooldowns.isOnCooldown(weapon.itemId)) return;

    const adddamage = player.getAttributeTotalValue('minecraft:generic.max_health');
    const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.attack_speed');

    BladeBeam.spawn(player, 4 + 0.4 * adddamage ).distance(24).color(0xDC143C).alpha(0.2).build(4.0);
    player.addItemCooldown(weapon.itemId, 20 / setCOOLDOWNS)

  });

});


//本整合包由 绘名青棺(Silentmo) 制作，联系QQ群：693928637

const COVENANTITEMS = [
    'kubejs:covenant_sharpblade1', 'kubejs:covenant_sharpblade2', 'kubejs:covenant_sharpblade3', 'kubejs:covenant_sharpblade4', 'kubejs:covenant_sharpblade5',
    'kubejs:covenant_gunpowder1', 'kubejs:covenant_gunpowder2', 'kubejs:covenant_gunpowder3', 'kubejs:covenant_gunpowder4', 'kubejs:covenant_gunpowder5',
    'kubejs:covenant_longbow1', 'kubejs:covenant_longbow2', 'kubejs:covenant_longbow3', 'kubejs:covenant_longbow4', 'kubejs:covenant_longbow5',
    'kubejs:covenant_matt1', 'kubejs:covenant_matt2', 'kubejs:covenant_matt3', 'kubejs:covenant_matt4', 'kubejs:covenant_matt5',
];

function hasCovenantItem(player) {
    if (!player || !player.isPlayer()) return false;
    for (let item of COVENANTITEMS) {
        if (player.isCuriosEquipped(item)) return true;
    }
    return false;
}

// 检查玩家是否拥有指定列表中的任意饰品
function hasAnyCurio(player, itemList) {
    if (!player || !player.isPlayer()) return false;
    for (let item of itemList) {
        if (player.isCuriosEquipped(item)) return true;
    }
    return false;
}

// 检查玩家是否同时佩戴指定列表中的所有饰品
function hasAllCurios(player, itemList) {
    if (!player || !player.isPlayer()) return false;
    for (let item of itemList) {
        if (!player.isCuriosEquipped(item)) return false;
    }
    return true;
}

// 统一处理所有伤害逻辑
NativeEvents.onEvent(Java.loadClass("net.minecraftforge.event.entity.living.LivingHurtEvent"), (/** @type{Internal.LivingHurtEvent} */event) => {
    const { entity, source, amount } = event;
    const attacker = source.actual;
    const target = entity;

    // 玩家被攻击时的防御/减伤效果
    if (target.isPlayer()) {
        const player = target;

        // 基础盟约 - 最大生命 (防御减免)
        if (hasCovenantItem(player) && hasAnyCurio(player, [
            'ba_bt:land_golem_eye', 'ba_bt:ocean_golem_eye', 'ba_bt:core_golem_eye', 'ba_bt:end_golem_eye',
            'the_bumblezone:essence_of_the_bees', 'deep_aether:aerwhale_saddle'
        ])) {
            const maxHealth = player.getAttributeValue('minecraft:generic.max_health');
            if (maxHealth >= 40 && maxHealth < 80) {
                event.setAmount(event.amount * 0.9);
            } else if (maxHealth >= 80) {
                event.setAmount(event.amount * 0.8);
            }
        }

        // 基础盟约 - 护甲值 (防御减免)
        if (hasCovenantItem(player) && hasAnyCurio(player, [
            'quark:diamond_heart', 'mutantmore:mutant_blaze_core', 'better_minoshroomtaur:maze_remnant_page_minoshroomtaur',
            'minecraft:nether_star', 'eeeabsmobs:ancient_drive_crystal', 'kubejs:divineblood_mechanizedcore', 'cataclysm:vitality_ankh'
        ])) {
            const armor = player.getAttributeValue('minecraft:generic.armor');
            if (armor >= 40) {
                event.setAmount(event.amount * 0.9);
            }
        }

        // 腐化之心
        if (hasAnyCurio(player, ['kubejs:corrupting_heart'])) {
            if (!player.isCuriosEquipped('cataclysm:abyssal_egg')) { 
            player.potionEffects.add('goety:rallying', 300, 0)
        } else if (player.isCuriosEquipped('cataclysm:abyssal_egg')) { 
            player.potionEffects.add('goety:rallying', 300, 1)
        }
        }

}

    // 玩家攻击怪物时的增伤效果
    if (attacker && attacker.isPlayer()) {
        /**
         * @type {Internal.Player}
         */
        const player = attacker;


        // 空白编年史
        if (player.isCuriosEquipped('kubejs:contrary_chronicle')) {
            event.setAmount(event.amount * 1.25);
        }

        // 猎人盟约
        if (hasAnyCurio(player, [
            'kubejs:covenant_gunpowder1', 'kubejs:covenant_gunpowder2', 'kubejs:covenant_gunpowder3',
            'kubejs:covenant_gunpowder4', 'kubejs:covenant_gunpowder5'
        ])) {

            const att1 = player.getAttributeTotalValue('obscure_api:magic_damage');
            const att2 = player.getAttributeTotalValue('obscure_api:accuracy');
            const att3 = player.getAttributeTotalValue('obscure_api:critical_hit');
            const att4 = player.getAttributeTotalValue('obscure_api:critical_damage');
            const att5 = player.getAttributeTotalValue('gunswithoutroses:gwr.damage_total');
            const att = (6 + att1 ) * (att2 + att3 + att4/2 + att5-1 ) ;

            //entity.attack(entity.damageSources().wither(), 1)
            if (!player.cooldowns.isOnCooldown('kubejs:covenant_gunpowder1')) {
            //event.entity.invulnerableTime = 0
            event.setAmount( amount + att );
            player.addItemCooldown('kubejs:covenant_gunpowder1', 30);

            }
        }

        // 不洁之血
        if (hasAnyCurio(player, ['goety:unholy_blood'])) {
            event.setAmount(event.amount * 1.2);
        }

        // 堕落之魂
        if (hasAnyCurio(player, ['legendary_monsters:corrupted_soul'])) {
            event.setAmount(event.amount * 1.15);
        }

        // 梦之笛
        if (hasAnyCurio(player, ['kubejs:taodix'])) {
            event.setAmount(event.amount * 0.5);
        }

        // 大型潜影壳
        if (hasAnyCurio(player, ['legendary_monsters:large_shulker_shell'])) {

            if(!player.hasEffect('kubejs:wrought')) {
                event.setAmount(event.amount * 1.1);
            } else if(player.hasEffect('kubejs:wrought')) {
                event.setAmount(event.amount * 1.2);
            }
        }


        // 混沌之眼 - 盟约加成
        if (hasAllCurios(player, ['goetyawaken:prison_eye']) && hasAnyCurio(player, [
            'kubejs:covenant_sharpblade1', 'kubejs:covenant_gunpowder1', 'kubejs:covenant_longbow1', 'kubejs:covenant_matt1'])) {
            event.setAmount(event.amount * 1.05);
        } else if (hasAllCurios(player, ['goetyawaken:prison_eye']) && hasAnyCurio(player, [
            'kubejs:covenant_sharpblade2', 'kubejs:covenant_gunpowder2', 'kubejs:covenant_longbow2', 'kubejs:covenant_matt2'])) {
            event.setAmount(event.amount * 1.1);
        } else if (hasAllCurios(player, ['goetyawaken:prison_eye']) && hasAnyCurio(player, [
            'kubejs:covenant_sharpblade3', 'kubejs:covenant_gunpowder3', 'kubejs:covenant_longbow3', 'kubejs:covenant_matt3'])) {
            event.setAmount(event.amount * 1.15);
        } else if (hasAllCurios(player, ['goetyawaken:prison_eye']) && hasAnyCurio(player, [
            'kubejs:covenant_sharpblade4', 'kubejs:covenant_gunpowder4', 'kubejs:covenant_longbow4', 'kubejs:covenant_matt4'])) {
            event.setAmount(event.amount * 1.2);
        } else if (hasAllCurios(player, ['goetyawaken:prison_eye']) && hasAnyCurio(player, [
            'kubejs:covenant_sharpblade5', 'kubejs:covenant_gunpowder5', 'kubejs:covenant_longbow5', 'kubejs:covenant_matt5'])) {
            event.setAmount(event.amount * 1.25);
        } 
        

        // 腐化之心
        if (hasAnyCurio(player, ['kubejs:corrupting_heart'])) {
            if (!player.isCuriosEquipped('cataclysm:abyssal_egg')) { 
            event.setAmount(event.amount * 0.8);
        } else if (player.isCuriosEquipped('cataclysm:abyssal_egg')) { 
            event.setAmount(event.amount * 0.6);
        }
        }

        // 腐化之心
        if (hasAnyCurio(player, [
            'kubejs:corrupting_heart'
        ])) {
            if (!player.cooldowns.isOnCooldown('kubejs:corrupting_heart')) {
            const damage1 = player.getAttributeTotalValue('obscure_api:magic_damage');
            const damage2 = player.getAttributeTotalValue('minecraft:generic.max_health');
            const heal = player.getAttributeTotalValue('obscure_api:healing_power');
            const damage = 0.25 * damage1 + 0.05 * damage2

            if (!player.hasEffect('cataclysm:abyssal_fear')) {
            player.heal(damage);
            player.potionEffects.add('cataclysm:abyssal_fear', 120, 0)
            player.addItemCooldown('kubejs:corrupting_heart', 60 )
            } else if (player.hasEffect('cataclysm:abyssal_fear')) {
            event.entity.invulnerableTime = 0
            entity.attack(entity.damageSources().magic(), 6 * damage * heal)
            player.addItemCooldown('kubejs:corrupting_heart', 60 )
            }
        }}

        // 大气符文
        if (hasAnyCurio(player, [
            'legendary_monsters:air_rune'
        ])) {
            if (!player.cooldowns.isOnCooldown('legendary_monsters:air_rune')) {
            const cooldown = player.getAttributeTotalValue('minecraft:generic.movement_speed');
            player.addItemCooldown('legendary_monsters:air_rune', 5/cooldown )

            const damage = player.getAttributeTotalValue('obscure_api:magic_damage');
            const damage2 = 4 + 2.4 * damage
            event.setAmount(event.amount + damage2);
            }
        }

        // 虚空回响
        if (hasAnyCurio(player, [
            'goety:void_echo'
        ])) {
            if (!player.cooldowns.isOnCooldown('goety:void_echo')) {
            const cooldown = player.getAttributeTotalValue('goety:cooldown_discount');
            player.addItemCooldown('goety:void_echo', 5 + 75 * (1-cooldown))

            const damage = player.getAttributeTotalValue('goety:void_potency');
            const damage2 = 4 + 3 * damage
            const soulAmount = Math.floor(damage2);
            event.setAmount(event.amount + damage2);
            Utils.server.runCommandSilent(`/goety soul add ${player.username} ${soulAmount}`);
            }
        }

        // 中子素致命骨头
        if (hasAnyCurio(player, [
            'kubejs:neutronium_densebone'
        ])) {
            if (!player.cooldowns.isOnCooldown('kubejs:neutronium_densebone')) {
            const cooldown = player.getAttributeTotalValue('obscure_api:accuracy');
            player.addItemCooldown('kubejs:neutronium_densebone', 20 + 80 / (1+cooldown))

            const damage = player.getAttributeTotalValue('minecraft:generic.max_health');
            const damage2 = 8 + 0.6 * damage
            event.setAmount(event.amount + damage2);
            //player.potionEffects.add('absorption', 300, 0, false , false);
            }
        }

        // 堡垒手稿
        if (hasAnyCurio(player, [
            'goetyawaken:rampart_manuscript'
        ])) {
            if (!player.cooldowns.isOnCooldown('goetyawaken:rampart_manuscript')) {
            const cooldown = player.getAttributeTotalValue('obscure_api:accuracy');
            player.addItemCooldown('goetyawaken:rampart_manuscript', 10 + 40 / (1+cooldown))

            const damage = player.getAttributeTotalValue('minecraft:generic.armor_toughness');
            const damage2 = 6 + 0.4 * damage
            event.setAmount(event.amount + damage2);
            entity.potionEffects.add('minecraft:slowness', 100, 1, false , false);
            entity.potionEffects.add('kubejs:hostility_wounding', 100, 0, false , false);
            }
        }

        // 不祥核心
        if (hasAnyCurio(player, [
            'goety:ominous_orb'
        ])) {
            if (!player.cooldowns.isOnCooldown('goety:ominous_orb')) {
            const cooldown = player.getAttributeTotalValue('minecraft:generic.luck');
            player.addItemCooldown('goety:ominous_orb', 1 + 240/(8+cooldown))

            const damage = player.getAttributeTotalValue('minecraft:generic.max_health');
            const damage2 = 4 + 0.4 * damage

            event.entity.invulnerableTime = 0
            entity.attack(entity.damageSources().magic(), damage2)
            //event.setAmount(event.amount + damage2);

            if(event.entity.hasEffect('minecraft:weakness')) {
            entity.attack(entity.damageSources().magic(), 12)
            }
            if(event.entity.hasEffect('goety:wane')) {
            entity.attack(entity.damageSources().magic(), 12)
            }
            }
        }

        // 利刃盟约 - 重创效果（战争技艺）
        if (hasAnyCurio(player, [
            'kubejs:covenant_sharpblade1', 'kubejs:covenant_sharpblade2', 'kubejs:covenant_sharpblade3',
            'kubejs:covenant_sharpblade4', 'kubejs:covenant_sharpblade5'
        ])) {
            const damage = player.getAttributeTotalValue('minecraft:generic.attack_damage');
            if (damage >= 15 && damage < 30) {
                event.entity.potionEffects.add('kubejs:hostility_wounding',300,0);
            } else if (damage >= 30) {
                event.entity.potionEffects.add('kubejs:hostility_wounding',300,1);; //重创
            }
        }

        // 基础盟约 - 幸运值 (攻击加成)
        if (hasCovenantItem(player) && hasAnyCurio(player, [
            'twilightforest:magic_beans', 'meetyourfight:tomb_planter', 'lost_aether_content:invincibility_gem',
            'meetyourfight:ace_of_iron', 'meetyourfight:slicers_dice'
        ])) {
            const luck = player.getAttributeTotalValue('minecraft:generic.luck');
            // 概率触发
            if (Math.random() < 0.2) {
                if (luck >= 6 && luck < 9) {
                    event.setAmount(event.amount + 10);
                } else if (luck >= 9 && luck < 12) {
                    event.setAmount(event.amount + 20);
                } else if (luck >= 12 && luck < 15) {
                    event.setAmount(event.amount + 30);
                } else if (luck >= 15) {
                    event.setAmount(event.amount + 40);
                }
            }
        }

        // 猎人盟约 - 弹丸伤害增幅（猎杀技艺）
        if (hasAnyCurio(player, [
            'kubejs:covenant_gunpowder1', 'kubejs:covenant_gunpowder2', 'kubejs:covenant_gunpowder3',
            'kubejs:covenant_gunpowder4', 'kubejs:covenant_gunpowder5'
        ])) {
            const damage_total = player.getAttributeTotalValue('gunswithoutroses:gwr.damage_total');
            const critical_damage = player.getAttributeTotalValue('obscure_api:critical_damage');

            if (critical_damage >= 2.4 ) {
            event.setAmount(event.amount * 1.1);   
            } 

            if (damage_total >= 1.6 ) {
            event.setAmount(event.amount * 1.1); 
            }
        }


        // 基础盟约 - 暴击率 (攻击倍率)
        if (hasCovenantItem(player) && hasAnyCurio(player, [
            'mutantmonsters:endersoul_hand', 'meetyourfight:blossoming_mind', 'radiation_zone_reborn:tyrant_skin',
            'aethermobs:finalkey', 'lootr:trophy', 'cataclysm:sandstorm_in_a_bottle', 
        ])) {
            const crit = player.getAttributeTotalValue('obscure_api:critical_hit');
            if (crit >= 0.3 && crit < 0.6) {
                event.setAmount(event.amount * 1.1);
            } else if (crit >= 0.6 && crit < 0.9) {
                event.setAmount(event.amount * 1.15);
            } else if (crit >= 0.9) {
                event.setAmount(event.amount * 1.2);
            }
        }

        // 基础盟约 - 治疗效果 (攻击倍率)
        if (hasCovenantItem(player) && hasAnyCurio(player, [
            'ba_bt:land_golem_eye', 'ba_bt:ocean_golem_eye', 'ba_bt:core_golem_eye', 'ba_bt:end_golem_eye',
            'the_bumblezone:essence_of_the_bees', 'deep_aether:aerwhale_saddle'
        ])) {
            const att = player.getAttributeTotalValue('obscure_api:healing_power');
            if (att >= 1.3 && att < 1.6) {
                event.setAmount(event.amount * 1.1);
            } else if (att >= 1.6) {
                event.setAmount(event.amount * 1.2);
            }
        }

        // 基础盟约 - 盔甲韧性 (攻击倍率)
        if (hasCovenantItem(player) && hasAnyCurio(player, [
            'aether:invisibility_cloak', 'minecraft:heart_of_the_sea', 'minecraft:conduit',
            'mutantmore:mutant_husk_vocal_cords', 'the_bumblezone:buzzing_briefcase',
            'aether:shield_of_repulsion', 'quark:dragon_scale', 'enderitemod:enderite_respawn_anchor'
        ])) {
            const toughness = player.getAttributeTotalValue('minecraft:generic.armor_toughness');
            if (toughness >= 40 && toughness < 60) {
                event.setAmount(event.amount * 1.2);
            } else if (toughness >= 60 && toughness < 80) {
                event.setAmount(event.amount * 1.3);
            } else if (toughness >= 80) {
                event.setAmount(event.amount * 1.4);
            }
        }

        // 基础盟约 - 护甲值 (攻击倍率)
        if (hasCovenantItem(player) && hasAnyCurio(player, [
            'quark:diamond_heart', 'mutantmore:mutant_blaze_core', 'better_minoshroomtaur:maze_remnant_page_minoshroomtaur',
            'minecraft:nether_star', 'eeeabsmobs:ancient_drive_crystal', 'kubejs:divineblood_mechanizedcore'
        ])) {
            const armor = player.getAttributeTotalValue('minecraft:generic.armor');
            if (armor >= 60 && armor < 80) {
                event.setAmount(event.amount * 1.2);
            } else if (armor >= 80) {
                event.setAmount(event.amount * 1.3);
            }
        }

        // 荒古滴水石碎片
        if (hasAnyCurio(player, [
            'legendary_monsters:chiseled_ancient_dripstone_shard'
        ])) {
            if (Math.random() < 0.5 &&!player.hasEffect('kubejs:wrought')) {
                event.setAmount(event.amount + 2);
            } else if (Math.random() < 0.5) {
                event.setAmount(event.amount + 10);
            }
        }

        // 凋零犄角
        if (hasAnyCurio(player, ['legendary_monsters:withered_horn'])) {

            if (!player.cooldowns.isOnCooldown('legendary_monsters:withered_horn') && (Math.random() < 0.3)) {
            player.addItemCooldown('legendary_monsters:withered_horn', 4)

            if(!event.entity.hasEffect('minecraft:wither')) {
            event.setAmount(event.amount + 10);
            } else if(event.entity.hasEffect('minecraft:wither')) {
            event.setAmount(event.amount + 20);
            }
            }
        }

        // 传送门碎片
        if (hasAnyCurio(player, [
            'legendary_monsters:portal_shard'
        ])) {
            if (!player.cooldowns.isOnCooldown('kubejs:cucumber2')) {
            player.addItemCooldown('kubejs:cucumber2', 5)
            event.setAmount(event.amount + 7);
            if (Math.random() < 0.25) {
                player.potionEffects.add('kubejs:wrought', 100, 0, false, false); 
            }
            } 
        }

        // 眼之水晶
        if (hasAnyCurio(player, [
            'legendary_monsters:eye_crystal'
        ])) {

            if (!player.hasEffect('kubejs:wrought')) {
            entity.potionEffects.add('goety:sapped', 100, 0, false, false); 
            } else if (player.hasEffect('kubejs:wrought')) {
            entity.potionEffects.add('goety:sapped', 100, 1, false, false); 
            }
        } 
        

        // 熔融金属锭
        if (hasAnyCurio(player, [
            'legendary_monsters:molten_metal_ingot'
        ])) {
            const att1 = player.getAttributeTotalValue('minecraft:generic.armor');
            const att2 = player.getAttributeTotalValue('minecraft:generic.armor_toughness');

            if(player.hasEffect('kubejs:wrought')) {
                event.setAmount(event.amount + 4 + att1 * 0.4 + att2 * 0.4);
                player.removeEffect('kubejs:wrought');
            }
        }

        // 紫颂水晶
        if (hasAnyCurio(player, [
            'legendary_monsters:chorus_crystal'
        ])) {
            const att1 = player.getAttributeTotalValue('minecraft:generic.luck');

            if (player.cooldowns.isOnCooldown('legendary_monsters:chorus_crystal')) return;

            if (Math.random() < 0.15) {
                event.setAmount(event.amount + 30);
                player.potionEffects.add('kubejs:wrought', 100, 0, false, false); 
                player.addItemCooldown('legendary_monsters:chorus_crystal', 180 / (6 + att1))
            } 
        }



        // 守望之眼（回击）
        if (hasAnyCurio(player, [
            'goetyawaken:eye_of_overwatch'
        ])) {
            const att = player.getAttributeTotalValue('minecraft:generic.armor_toughness');
            if ( att >= 20 && att < 40 && Math.random() < 0.5 && !player.cooldowns.isOnCooldown('goetyawaken:eye_of_overwatch') ) {
                player.potionEffects.add('goetyawaken:echo',100,0);
                player.addItemCooldown('goetyawaken:eye_of_overwatch', 200)
            } else if ( att >= 40 && att < 60 && Math.random() < 0.5 && !player.cooldowns.isOnCooldown('goetyawaken:eye_of_overwatch') ) {
                player.potionEffects.add('goetyawaken:echo',100,1);
                player.addItemCooldown('goetyawaken:eye_of_overwatch', 200)
            } else if ( att >= 60 && att < 80 && Math.random() < 0.5 && !player.cooldowns.isOnCooldown('goetyawaken:eye_of_overwatch') ) {
                player.potionEffects.add('goetyawaken:echo',100,2);
                player.addItemCooldown('goetyawaken:eye_of_overwatch', 200)
            } else if ( att >= 80 && att < 100 && Math.random() < 0.5 && !player.cooldowns.isOnCooldown('goetyawaken:eye_of_overwatch') ) {
                player.potionEffects.add('goetyawaken:echo',100,3);
                player.addItemCooldown('goetyawaken:eye_of_overwatch', 200)
            } else if ( att >= 100 && Math.random() < 0.5 && !player.cooldowns.isOnCooldown('goetyawaken:eye_of_overwatch') ) {
                player.potionEffects.add('goetyawaken:echo',100,4);
                player.addItemCooldown('goetyawaken:eye_of_overwatch', 200)
            }
        }

        // 凋零手稿
        if (hasAnyCurio(player, ['goety:withered_manuscript'])) {
            event.entity.invulnerableTime = 0

            const att = player.getAttributeTotalValue('minecraft:generic.armor');
            const att2 = 4 + 0.4 * att
            const cooldown = player.getAttributeTotalValue('minecraft:generic.luck');

            //entity.attack(entity.damageSources().wither(), 1)
            if (!player.cooldowns.isOnCooldown('goety:withered_manuscript')) {
            entity.attack(entity.damageSources().wither(), att2)

            if(event.entity.hasEffect('minecraft:wither')) {
            entity.attack(entity.damageSources().wither(), 12)
            }
            player.addItemCooldown('goety:withered_manuscript', 1 + 240/(8+cooldown))
        }
        }

        // 毒牙
        if (hasAnyCurio(player, ['goety:venomous_fang'])) {
            if(event.entity.hasEffect('minecraft:poison')) {
            event.setAmount(event.amount * 1.3);
            }
            if(event.entity.hasEffect('goety:acid_venom')) {
            event.setAmount(event.amount * 1.3);
            }
        }

        // 虚空碎片
        if (hasAnyCurio(player, ['goety:void_shard'])) {
            event.entity.invulnerableTime = 0
            entity.attack(entity.damageSources().magic(), 1)
        }

        // 黑沉沉泪
        if (hasAnyCurio(player, ['goetyawaken:gloomy_tears'])) {
            event.entity.invulnerableTime = 0
            entity.attack(entity.damageSources().onFire(), 2)
        }

        if ( //异变药水
        isEquippedCurio(player, 'goety_spillage:mutation_potion') 
        && !player.cooldowns.isOnCooldown('goety_spillage:mutation_potion')
        ) {
        let foodData = player.getFoodData();
        let currentFoodLevel = foodData.getFoodLevel();
        let att = player.getAttributeTotalValue('minecraft:generic.armor_toughness');

        if ((currentFoodLevel > 0))
        {
           foodData.setFoodLevel(currentFoodLevel - 4);
           event.setAmount(amount + (1 + att * 0.2 + currentFoodLevel * 2.0));
           let cooldown = player.getAttributeTotalValue('goety:soul_discount');
           player.addItemCooldown('goety_spillage:mutation_potion', 5 + 45 * (1-cooldown))

        }

        if ((currentFoodLevel < 20) && isEquippedCurio(player, 'goety_spillage:freaky_hat')
        )
        {
           foodData.setFoodLevel(currentFoodLevel + 4);
        }
        //event.entity.invulnerableTime = 0
        //entity.attack(entity.damageSources().magic(), 2 + currentFoodLevel * 2.0)

        }

        // 法术强效修改（魔能渴望）
        if (hasAnyCurio(player, ['kubejs:contrary_chronicle_hostility', 'kubejs:contrary_chronicle_hard', 'kubejs:contrary_chronicle_normal', 'kubejs:contrary_chronicle_easy'])) {
            const attributes = player.getAttributeTotalValue('goety:void_potency');
            // 根据属性区间提升伤害
            // 法术伤害倍率配置
        const spellMultipliers = [
            [0, 4, 0.5], [4, 5, 0.55], [5, 6, 0.6], [6, 7, 0.65],
            [7, 8, 0.7], [8, 9, 0.75], [9, 10, 0.8], [10, 11, 0.85],
            [11, 12, 0.9], [12, 13, 0.95], [13, 14, 1.0],
            [14, 15, 1.05], [15, 16, 1.1], [16, 17, 1.15],
            [17, 18, 1.2], [18, 19, 1.25], [19, 20, 1.3], [20, 21, 1.35],
            [21, 22, 1.4], [22, 23, 1.45], [23, 24, 1.5], [24, 25, 1.55], 
            [25, 26, 1.6], [26, 27, 1.65], [27, Infinity, 1.7]
        ];
        
        for (let [min, max, multiplier] of spellMultipliers) {
            if (attributes > min && attributes <= max) {
                event.setAmount(event.amount * multiplier);
                break;
            }
        }
        }

        // 法术强效修改（黑曜石之泪）
        if (hasAnyCurio(player, ['goetyawaken:obsidian_tear'])) {
            const attributes = player.getAttributeTotalValue('goety:void_potency');
            // 根据属性区间提升伤害
            // 法术伤害倍率配置
        const spellMultipliers = [
            [0, 14, 1.0] , [14, Infinity, 2.0]
        ];
        
        for (let [min, max, multiplier] of spellMultipliers) {
            if (attributes > min && attributes <= max) {
                event.setAmount(event.amount * multiplier);
                break;
            }
        }
        }

        // 编年史系列 - 全局伤害倍率
        if (hasAnyCurio(player, ['kubejs:contrary_chronicle_easy'])) {
            event.setAmount(event.amount * 1.5);
        } else if (player.isCuriosEquipped('kubejs:contrary_chronicle_hostility')) {
            event.setAmount(event.amount * 0.4);
        } else if (player.isCuriosEquipped('kubejs:contrary_chronicle_hard')) {
            event.setAmount(event.amount * 0.6);
        }

        // 动态抗性 - 全局伤害倍率
        if (hasAnyCurio(player, ['kubejs:contrary_chronicle_easy', 'kubejs:contrary_chronicle_normal', 'kubejs:contrary_chronicle_hostility', 'kubejs:contrary_chronicle_hard'])) {
            if(event.entity.hasEffect('kubejs:hostility_dynamic_resistance')) {
                event.setAmount(event.amount * 0.5);
            }
        }
        
        if (event.entity.isPlayer()) {
            event.setAmount(event.amount * 0.1);
        }
        
        }

    }
);


let $MobUtil = Java.loadClass("com.Polarice3.Goety.utils.MobUtil");
let CuriosAPI = Java.loadClass("top.theillusivec4.curios.api.CuriosApi");
let curious = Java.loadClass("top.theillusivec4.curios.api.CuriosApi").getCuriosHelper();

function isEquippedCurio(entity, curioId) {
  return curious.findFirstCurio(entity, curioId).isPresent();
}

EntityEvents.hurt(event => {
  const ent = event.entity;
  const player = event.player;

  if (!player) return;  // 检查玩家是否在线
  if (!ent || !ent.isPlayer()) return;

  const damage = ent.getAttributeTotalValue('goety:void_potency');
  const damage2 = 10 + 2 * damage
  const damage3 = 20 + 4 * damage
  const cooldown = ent.getAttributeTotalValue('goety:cooldown_discount');
  const cooldown2 = 10 + 500 * (1-cooldown)
  const cooldown3 = 10 + 600 * (1-cooldown)
  

  if ( //伪造的任命书
    isEquippedCurio(player, 'goetyawaken:fake_appointment') &&
    !player.cooldowns.isOnCooldown('goetyawaken:fake_appointment')
  ) {
    var zagLevel = 1;
    for (var i = 0; i < zagLevel; i++) {
      var zagSpawn = ent.level.createEntity('goetyawaken:tormentor_servant');
      if (!zagSpawn) continue;

      zagSpawn.copyPosition(player); // 设置位置并生成
      zagSpawn.spawn();
      
      try {$MobUtil.summonTame(zagSpawn, player);} catch (error) {console.error('召唤驯服失败:', error);} // 尝试驯服

      zagSpawn.setMaxHealth(damage3); // 设置生命值
      zagSpawn.setHealth(damage3);
      
      zagSpawn.server.scheduleInTicks(600, () => {if (zagSpawn && !zagSpawn.removed) {zagSpawn.kill();}}); // 定时杀死
    }

    player.addItemCooldown('goetyawaken:fake_appointment', cooldown3);
  }

  if ( //伪造的任命书 - 灵魂蓝宝石
    isEquippedCurio(player, 'goetyawaken:fake_appointment') &&
    isEquippedCurio(player, 'goetyawaken:soul_sapphire') &&
    !player.cooldowns.isOnCooldown('goetyawaken:soul_sapphire')
  ) {
    var zagLevel = 1;
    for (var i = 0; i < zagLevel; i++) {
      var zagSpawn = ent.level.createEntity('goetyawaken:tormentor_servant');
      if (!zagSpawn) continue;

      zagSpawn.copyPosition(player); // 设置位置并生成
      zagSpawn.spawn();
      
      try {$MobUtil.summonTame(zagSpawn, player);} catch (error) {console.error('召唤驯服失败:', error);} // 尝试驯服

      zagSpawn.setMaxHealth(damage3); // 设置生命值
      zagSpawn.setHealth(damage3);
      
      zagSpawn.server.scheduleInTicks(600, () => {if (zagSpawn && !zagSpawn.removed) {zagSpawn.kill();}}); // 定时杀死
    }

    player.addItemCooldown('goetyawaken:soul_sapphire', cooldown3);
  }

  if ( //伪造的任命书 - 不洁之血
    isEquippedCurio(player, 'goetyawaken:fake_appointment') &&
    isEquippedCurio(player, 'goety:unholy_blood') &&
    !player.cooldowns.isOnCooldown('goety:unholy_blood')
  ) {
    var zagLevel = 1;
    for (var i = 0; i < zagLevel; i++) {
      var zagSpawn = ent.level.createEntity('goety:inferno');
      if (!zagSpawn) continue;

      zagSpawn.copyPosition(player); // 设置位置并生成
      zagSpawn.spawn();
      
      try {$MobUtil.summonTame(zagSpawn, player);} catch (error) {console.error('召唤驯服失败:', error);} // 尝试驯服

      zagSpawn.setMaxHealth(damage3); // 设置生命值
      zagSpawn.setHealth(damage3);
      
      zagSpawn.server.scheduleInTicks(600, () => {if (zagSpawn && !zagSpawn.removed) {zagSpawn.kill();}}); // 定时杀死
    }

    player.addItemCooldown('goety:unholy_blood', cooldown3);
  }


  if ( //灵魂红宝石
    isEquippedCurio(player, 'goety:soul_ruby') &&
    !player.cooldowns.isOnCooldown('goety:soul_ruby')
  ) {
    var zagLevel = 1;
    for (var i = 0; i < zagLevel; i++) {
      var zagSpawn = ent.level.createEntity('goety:vex_servant');
      if (!zagSpawn) continue;

      zagSpawn.copyPosition(player); // 设置位置并生成
      zagSpawn.spawn();
      
      try {$MobUtil.summonTame(zagSpawn, player);} catch (error) {console.error('召唤驯服失败:', error);} // 尝试驯服

      zagSpawn.setMaxHealth(damage2); // 设置生命值
      zagSpawn.setHealth(damage2);
      
      zagSpawn.server.scheduleInTicks(600, () => {if (zagSpawn && !zagSpawn.removed) {zagSpawn.kill();}}); // 定时杀死
    }

    player.addItemCooldown('goety:soul_ruby', cooldown2);
  }

  if ( //不祥核心
    isEquippedCurio(player, 'goety:ominous_orb') &&
    isEquippedCurio(player, 'goety:soul_ruby') &&
    !player.cooldowns.isOnCooldown('goety:ominous_orb')
  ) {
    var zagLevel2 = 1;
    for (var i = 0; i < zagLevel2; i++) {
      var zagSpawn = ent.level.createEntity('goety:vex_servant');
      if (!zagSpawn) continue;

      zagSpawn.copyPosition(player); // 设置位置并生成
      zagSpawn.spawn();
      
      try {$MobUtil.summonTame(zagSpawn, player);} catch (error) {console.error('召唤驯服失败:', error);} // 尝试驯服

      zagSpawn.setMaxHealth(damage2); // 设置生命值
      zagSpawn.setHealth(damage2);
      
      zagSpawn.server.scheduleInTicks(600, () => {if (zagSpawn && !zagSpawn.removed) {zagSpawn.kill();}}); // 定时杀死
    }

    player.addItemCooldown('goety:ominous_orb', cooldown2);
  }

  if ( //凋零手稿
    isEquippedCurio(player, 'goety:withered_manuscript') &&
    isEquippedCurio(player, 'goety:soul_ruby') &&
    !player.cooldowns.isOnCooldown('goety:withered_manuscript')
  ) {
    var zagLevel3 = 1;
    for (var i = 0; i < zagLevel3; i++) {
      var zagSpawn = ent.level.createEntity('goety:wither_skeleton_servant');
      if (!zagSpawn) continue;

      zagSpawn.copyPosition(player); // 设置位置并生成
      zagSpawn.spawn();
      
      try {$MobUtil.summonTame(zagSpawn, player);} catch (error) {console.error('召唤驯服失败:', error);} // 尝试驯服

      zagSpawn.setMaxHealth(damage2); // 设置生命值
      zagSpawn.setHealth(damage2);
      
      zagSpawn.server.scheduleInTicks(600, () => {if (zagSpawn && !zagSpawn.removed) {zagSpawn.kill();}}); // 定时杀死
    }

    player.addItemCooldown('goety:withered_manuscript', cooldown2);
  }

});

// 骨头使用（预制腐肉）
ItemEvents.rightClicked('minecraft:bone', event => {
    let player = event.player;
    let mainHandItem = player.getMainHandItem();

    const ent = event.entity;

    const damage = ent.getAttributeTotalValue('goety:void_potency');
    const damage2 = 20 + 3 * damage

    const cooldown = ent.getAttributeTotalValue('goety:cooldown_discount');
    const cooldown2 = 10 + 800 * (1-cooldown)

    if(player.isCuriosEquipped('jrftl:prepared_flesh')) {

    if (!player || mainHandItem.getId() !== 'minecraft:bone') return;
    if (player.cooldowns.isOnCooldown('jrftl:prepared_flesh')) return;

    var zagLevel = 1;
    for (var i = 0; i < zagLevel; i++) {
      var zagSpawn = ent.level.createEntity('minecraft:wolf');
      if (!zagSpawn) continue;

      zagSpawn.copyPosition(player); // 设置位置并生成
      zagSpawn.spawn();
      
      try {$MobUtil.summonTame(zagSpawn, player);} catch (error) {console.error('召唤驯服失败:', error);} // 尝试驯服

      zagSpawn.setMaxHealth(damage2); // 设置生命值
      zagSpawn.setHealth(damage2);
      
      zagSpawn.server.scheduleInTicks(1200, () => {if (zagSpawn && !zagSpawn.removed) {zagSpawn.kill();}}); // 定时杀死

      player.addItemCooldown('jrftl:prepared_flesh', cooldown2);
    }

}

});

// 毒刺藤种（自然水晶）
ItemEvents.rightClicked('goety:poison_quill_seed', event => {
    let player = event.player;
    let mainHandItem = player.getMainHandItem();

    const ent = event.entity;

    const damage = ent.getAttributeTotalValue('goety:void_potency');
    const damage1 = ent.getAttributeTotalValue('minecraft:generic.max_health');
    const damage2 = 40 + 4 * damage + 2 * damage1

    const cooldown = ent.getAttributeTotalValue('goety:cooldown_discount');
    const cooldown2 = 10 + 600 * (1-cooldown)

    if(player.isCuriosEquipped('legendary_monsters:nature_crystal')) {

    if (!player || mainHandItem.getId() !== 'goety:poison_quill_seed') return;
    if (player.cooldowns.isOnCooldown('legendary_monsters:nature_crystal')) return;

    var zagLevel = 1;
    for (var i = 0; i < zagLevel; i++) {
      var zagSpawn = ent.level.createEntity('goety:leapleaf');
      if (!zagSpawn) continue;

      zagSpawn.copyPosition(player); // 设置位置并生成
      zagSpawn.spawn();
      
      try {$MobUtil.summonTame(zagSpawn, player);} catch (error) {console.error('召唤驯服失败:', error);} // 尝试驯服

      zagSpawn.setMaxHealth(damage2); // 设置生命值
      zagSpawn.setHealth(damage2);
      
      zagSpawn.server.scheduleInTicks(1200, () => {if (zagSpawn && !zagSpawn.removed) {zagSpawn.kill();}}); // 定时杀死

      player.addItemCooldown('legendary_monsters:nature_crystal', cooldown2);
      if (!player.isCreative()) {mainHandItem.shrink(1);player.setMainHandItem(mainHandItem);};
    }

}

});

// 竖琴弩
ItemEvents.rightClicked('goetyawaken:harp_crossbow', event => {
  const { player } = event;
  const damage = player.getAttributeTotalValue("obscure_api:magic_damage");
  const adddamage = player.getAttributeTotalValue("goety:void_potency");

  player.addItemCooldown('goetyawaken:harp_crossbow', 5);

  if(!player.isCuriosEquipped('goety:unholy_blood')) return; //佩戴饰品

  let delayTicks = 10; //延迟
  player.server.scheduleInTicks(delayTicks, () => { 
  if (!player.player) return;  // 检查玩家是否在线

  shootProjectile(event, 'goety:unholy_blood', 'goety:death_arrow', {
    nbt: { pickup: 2, damage: 2 + 0.75 * damage + 0.75 * adddamage, PierceLevel: 2 },
    cooldown: 20, velocity: 4.0
  });
})
});

// 黑暗合金弓
ItemEvents.rightClicked('goetyawaken:dark_netherite_bow', event => {
  const { player } = event;
  const adddamage = player.getAttributeTotalValue("goety:void_potency");

  player.server.scheduleInTicks(8, () => { 
  if (!player.player) return;  // 检查玩家是否在线

    /**
     * @type {Internal.Projectile}
     */
    const projectile = shootProjectile(event, 'goetyawaken:dark_netherite_bow', 'goety:death_arrow', {
      cooldown: 5
    });
    if(!projectile) return;
    projectile.setDamage(4 + 0.2 * adddamage);
  })

  if(!player.isCuriosEquipped('goety:unholy_blood')) return; //佩戴饰品

  let delayTicks = 10; //延迟
  player.server.scheduleInTicks(delayTicks, () => { 
  if (!player.player) return;  // 检查玩家是否在线

  shootProjectile(event, 'goety:unholy_blood', 'goety:death_arrow', {
    nbt: { pickup: 2, damage: 2 + 0.2 * adddamage, PierceLevel: 2 },
    cooldown: 20
  });
})
});

// 末影之刃
ItemEvents.firstLeftClicked('goety:blade_of_ender', event => {
  const { player } = event;
  const damage = player.getAttributeTotalValue("minecraft:generic.attack_damage");
  const adddamage = player.getAttributeTotalValue("goety:void_potency");

  atkSpeedShootProjectile(event, 'goety:blade_of_ender', 'radiation_zone_reborn:sand_ball', {
    nbt: { pickup: 2, damage: 0.5 + 0.05 * damage + 0.25 * adddamage, PierceLevel: 2 },
    velocity: 4.0
  });
});


// 冰霜长镰
ItemEvents.firstLeftClicked('goetyawaken:frost_scythe', event => {
  const { player } = event;
  const damage = player.getAttributeTotalValue("minecraft:generic.armor");
  const adddamage = player.getAttributeTotalValue("goety:void_potency");
  const cooldown = player.getAttributeTotalValue("minecraft:generic.attack_speed");

  shootProjectile(event, 'goetyawaken:frost_scythe', 'radiation_zone_reborn:sand_ball', { //发射物
    nbt: { pickup: 2, damage: 1 + 0.1 * damage + 0.25 * adddamage, PierceLevel: 2 },
    cooldown: cooldown, velocity: 4.0
  });
});

// 无星之夜
ItemEvents.firstLeftClicked('goetyawaken:starless_night', event => {
  const { player } = event;
  const damage = player.getAttributeTotalValue("minecraft:generic.attack_damage");
  const adddamage = player.getAttributeTotalValue("goety:void_potency");

  atkSpeedShootProjectile(event, 'goetyawaken:starless_night', 'radiation_zone_reborn:sand_ball', { //发射物
    nbt: { pickup: 2, damage: 1 + 0.15 * damage + 0.5 * adddamage, PierceLevel: 2 },
    velocity: 4.0
  });
});


// 超立方体
ItemEvents.firstLeftClicked('legendary_monsters:the_tesseract', event => {
    const { player } = event;

    if (event.player.cooldowns.isOnCooldown('legendary_monsters:the_tesseract')) return;

    const BladeBeam = Java.loadClass('io.zershyan.fictional.common.registry.entities.BladeBeam');

    const damage = player.getAttributeTotalValue('minecraft:generic.armor');
    const adddamage = player.getAttributeTotalValue('minecraft:generic.armor_toughness');
    const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.attack_speed');

    BladeBeam.spawn(player, 4 + 0.4*damage + 0.4 * adddamage ).distance(24).color(0x00FF00).alpha(0.4).build(4.0);
    player.addItemCooldown('legendary_monsters:the_tesseract', 20 / setCOOLDOWNS)
});

// 碎裂巨剑
ItemEvents.firstLeftClicked('legendary_monsters:shattered_greatsword', event => {
    const { player } = event;

    if (event.player.cooldowns.isOnCooldown('legendary_monsters:shattered_greatsword')) return;

    const BladeBeam = Java.loadClass('io.zershyan.fictional.common.registry.entities.BladeBeam');

    const damage = player.getAttributeTotalValue('minecraft:generic.armor');
    const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.attack_speed');

    BladeBeam.spawn(player, 8 + 0.3*damage).distance(24).color(0xCCCCCC).alpha(0.4).build(4.0);
    player.addItemCooldown('legendary_monsters:shattered_greatsword', 20 / setCOOLDOWNS)
});

// 复生长戟
ItemEvents.firstLeftClicked('legendary_monsters:resurrected_javelin', event => {
    const { player } = event;

    if (event.player.cooldowns.isOnCooldown('legendary_monsters:resurrected_javelin')) return;

    const BladeBeam = Java.loadClass('io.zershyan.fictional.common.registry.entities.BladeBeam');

    const damage = player.getAttributeTotalValue('minecraft:generic.max_health');
    const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.attack_speed');

    BladeBeam.spawn(player, 4 + 0.3*damage).distance(24).color(0xCCCCCC).alpha(0.4).build(4.0);
    player.addItemCooldown('legendary_monsters:resurrected_javelin', 20 / setCOOLDOWNS)
});

// 灵魂巨剑
ItemEvents.firstLeftClicked('legendary_monsters:soul_great_sword', event => {
    const { player } = event;

    if (event.player.cooldowns.isOnCooldown('legendary_monsters:soul_great_sword')) return;

    const BladeBeam = Java.loadClass('io.zershyan.fictional.common.registry.entities.BladeBeam');

    const damage = player.getAttributeTotalValue('minecraft:generic.max_health');
    const adddamage = player.getAttributeTotalValue('minecraft:generic.armor');
    const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.attack_speed');

    BladeBeam.spawn(player, 20 + 0.3*damage + 0.3*adddamage).distance(24).color(0x00FFFF).alpha(0.4).build(4.0);
    player.addItemCooldown('legendary_monsters:soul_great_sword', 20 / setCOOLDOWNS)
});


// 霜冻之刃
ItemEvents.firstLeftClicked('goety:frozen_blade', event => {
  const { player } = event;
  const damage = player.getAttributeTotalValue("minecraft:generic.attack_damage");
  const adddamage = player.getAttributeTotalValue("goety:void_potency");

  atkSpeedShootProjectile(event, 'goety:frozen_blade', 'radiation_zone_reborn:sand_ball', { //发射物
    nbt: { pickup: 2, damage: 0.5 + 0.05 * damage + 0.25 * adddamage, PierceLevel: 2 },
    velocity: 4.0
  });
});


ItemEvents.rightClicked('gwrexpansions:duskfall_eclipse_blaster', event => { //暮影蚀光
  const { player, level } = event; //从事件中解构出对象待用
  //if(!player.isCuriosEquipped('meetyourfight:wilted_ideals')) return; //佩戴饰品
  if (event.player.cooldowns.isOnCooldown('meetyourfight:wilted_ideals')) return;
  const viewVector = player.getViewVector(1.0); // 获取玩家的视角向量并标准化
  const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
  const normalizedVector = {x: viewVector.x() / length,y: viewVector.y() / length,z: viewVector.z() / length};
  const projectile = level.createEntity("gunswithoutroses:bullet"); // 发射物
  const offset = 1.5;  // 偏移距离
  const spawnX = player.x + normalizedVector.x * offset; // 基于玩家位置+视线方向偏移
  const spawnY = player.y + 1.5 + normalizedVector.y * offset;
  const spawnZ = player.z + normalizedVector.z * offset;
  projectile.setPosition(spawnX, spawnY, spawnZ); //设定发射坐标
  const velocity = 2.0; // 设定速度基数
  const damage=player.getAttributeTotalValue("minecraft:generic.armor_toughness")
  const totaldamage=player.getAttributeTotalValue("gunswithoutroses:gwr.damage_total")
  projectile.mergeNbt({ pickup: 4, damage: (6+0.4*damage)*totaldamage, PierceLevel: 8 })// 设定弹射物NBT数据
  projectile.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity); // 设定弹射物方向
  projectile.setOwner(player) // 设定弹射物发射者
  const setCOOLDOWNS=player.getAttributeTotalValue("minecraft:generic.movement_speed")
  player.addItemCooldown('meetyourfight:wilted_ideals', 1 * 3/(setCOOLDOWNS))
  projectile.spawn();
  });

ItemEvents.rightClicked('gwrexpansions:destiny_seven', event => { //命定·柒
  const { player, level } = event; //从事件中解构出对象待用
  if (!player.isCuriosEquipped('meetyourfight:blossoming_mind')) return;
  if (event.player.cooldowns.isOnCooldown('gwrexpansions:destiny_seven')) return;
  const viewVector = player.getViewVector(1.0); // 获取玩家的视角向量并标准化
  const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
  const normalizedVector = {x: viewVector.x() / length,y: viewVector.y() / length,z: viewVector.z() / length};
  const projectile = level.createEntity("gunswithoutroses:bullet"); // 发射物
  const offset = 1.0;  // 偏移距离
  const spawnX = player.x + normalizedVector.x * offset; // 基于玩家位置+视线方向偏移
  const spawnY = player.y + 1.2 + normalizedVector.y * offset;
  const spawnZ = player.z + normalizedVector.z * offset;
  projectile.setPosition(spawnX, spawnY, spawnZ); //设定发射坐标
  const velocity = 2.0; // 设定速度基数

  const damage=player.getAttributeTotalValue("minecraft:generic.luck")
  const totaldamage=player.getAttributeTotalValue("gunswithoutroses:gwr.damage_total")

  projectile.mergeNbt({ pickup: 2, damage: (2+0.5*damage)*totaldamage, PierceLevel: 2 })// 设定弹射物NBT数据
  projectile.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity); // 设定弹射物方向
  projectile.setOwner(player) // 设定弹射物发射者
  projectile.spawn();
  player.addItemCooldown('gwrexpansions:destiny_seven', 30);
  });

ItemEvents.firstLeftClicked('goety:frozen_blade', event => { //霜冻之刃
  const { player, level } = event; //从事件中解构出对象待用
  if (event.player.cooldowns.isOnCooldown('kubejs:cucumber1')) return;
  const viewVector = player.getViewVector(1.0); // 获取玩家的视角向量并标准化
  const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
  const normalizedVector = {x: viewVector.x() / length,y: viewVector.y() / length,z: viewVector.z() / length};
  const projectile = level.createEntity("goety:razor_wind"); // 发射物
  const offset = 1.0;  // 偏移距离
  const spawnX = player.x + normalizedVector.x * offset; // 基于玩家位置+视线方向偏移
  const spawnY = player.y + 1.2 + normalizedVector.y * offset;
  const spawnZ = player.z + normalizedVector.z * offset;
  projectile.setPosition(spawnX, spawnY, spawnZ); //设定发射坐标
  const velocity = 1.0; // 设定速度基数
  projectile.mergeNbt({ pickup: 2, damage: 1, PierceLevel: 2 })// 设定弹射物NBT数据
  const setCOOLDOWNS=player.getAttributeTotalValue("minecraft:generic.attack_speed")
  projectile.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity); // 设定弹射物方向
  projectile.setOwner(player) // 设定弹射物发射者
  projectile.spawn();
  player.addItemCooldown('kubejs:cucumber1', 20/setCOOLDOWNS);
  });

ItemEvents.firstLeftClicked('goetyawaken:frost_scythe', event => { //冰霜长镰
  const { player, level } = event; //从事件中解构出对象待用
  if (event.player.cooldowns.isOnCooldown('kubejs:cucumber1')) return;
  const viewVector = player.getViewVector(1.0); // 获取玩家的视角向量并标准化
  const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
  const normalizedVector = {x: viewVector.x() / length,y: viewVector.y() / length,z: viewVector.z() / length};
  const projectile = level.createEntity("goety:razor_wind"); // 发射物
  const offset = 1.0;  // 偏移距离
  const spawnX = player.x + normalizedVector.x * offset; // 基于玩家位置+视线方向偏移
  const spawnY = player.y + 1.2 + normalizedVector.y * offset;
  const spawnZ = player.z + normalizedVector.z * offset;
  projectile.setPosition(spawnX, spawnY, spawnZ); //设定发射坐标
  const velocity = 1.0; // 设定速度基数
  projectile.mergeNbt({ pickup: 2, damage: 1, PierceLevel: 2 })// 设定弹射物NBT数据
  const setCOOLDOWNS=player.getAttributeTotalValue("minecraft:generic.attack_speed")
  projectile.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity); // 设定弹射物方向
  projectile.setOwner(player) // 设定弹射物发射者
  {projectile.spawn();}
  player.addItemCooldown('kubejs:cucumber1', 20/setCOOLDOWNS);
  });

ItemEvents.firstLeftClicked('goety:blade_of_ender', event => { //末影之刃
  const { player, level } = event; //从事件中解构出对象待用
  if (event.player.cooldowns.isOnCooldown('kubejs:cucumber1')) return;
  const viewVector = player.getViewVector(1.0); // 获取玩家的视角向量并标准化
  const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
  const normalizedVector = {x: viewVector.x() / length,y: viewVector.y() / length,z: viewVector.z() / length};
  const projectile = level.createEntity("goety:void_slash"); // 发射物
  const offset = 1.0;  // 偏移距离
  const spawnX = player.x + normalizedVector.x * offset; // 基于玩家位置+视线方向偏移
  const spawnY = player.y + 1.2 + normalizedVector.y * offset;
  const spawnZ = player.z + normalizedVector.z * offset;
  projectile.setPosition(spawnX, spawnY, spawnZ); //设定发射坐标
  const velocity = 0.5; // 设定速度基数
  projectile.mergeNbt({ pickup: 2, damage: 1, PierceLevel: 2 })// 设定弹射物NBT数据
  const setCOOLDOWNS=player.getAttributeTotalValue("minecraft:generic.attack_speed")
  projectile.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity); // 设定弹射物方向
  projectile.setOwner(player) // 设定弹射物发射者
  {projectile.spawn();}
  player.addItemCooldown('kubejs:cucumber1', 20/setCOOLDOWNS);
  });

ItemEvents.firstLeftClicked('goetyawaken:starless_night', event => { //无星之夜
  const { player, level } = event; //从事件中解构出对象待用
  if (event.player.cooldowns.isOnCooldown('kubejs:cucumber1')) return;
  const viewVector = player.getViewVector(1.0); // 获取玩家的视角向量并标准化
  const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
  const normalizedVector = {x: viewVector.x() / length,y: viewVector.y() / length,z: viewVector.z() / length};
  const projectile = level.createEntity("goety:void_slash"); // 发射物
  const offset = 1.0;  // 偏移距离
  const spawnX = player.x + normalizedVector.x * offset; // 基于玩家位置+视线方向偏移
  const spawnY = player.y + 1.2 + normalizedVector.y * offset;
  const spawnZ = player.z + normalizedVector.z * offset;
  projectile.setPosition(spawnX, spawnY, spawnZ); //设定发射坐标
  const velocity = 0.5; // 设定速度基数
  projectile.mergeNbt({ pickup: 2, damage: 1, PierceLevel: 2 })// 设定弹射物NBT数据
  const setCOOLDOWNS=player.getAttributeTotalValue("minecraft:generic.attack_speed")
  projectile.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity); // 设定弹射物方向
  projectile.setOwner(player) // 设定弹射物发射者
  {projectile.spawn();}
  player.addItemCooldown('kubejs:cucumber1', 20/setCOOLDOWNS);
  });

ItemEvents.firstLeftClicked('mutantmore:mutant_jungle_zombie_arm', event => { //突变丛林僵尸手臂
  const { player, level } = event; //从事件中解构出对象待用
  if (event.player.cooldowns.isOnCooldown('mutantmore:mutant_jungle_zombie_arm')) return;

  const hitResult = event.player.pick(6.0, 0.0, false);
  const pos = hitResult.getLocation().add(0, -2.0, 0);
  const postions = [pos,
    pos.add(1.0, 0, 0),
    pos.add(-1.0, 0, 0),
    pos.add(0, 0, -1.0),
    pos.add(0, 0, 1.0),
  ]
  postions.forEach(p => {
    let projectile = level.createEntity("goety:blossom_thorn");
    projectile.setPos(p); //设定发射坐标
    projectile.mergeNbt({ pickup: 2, damage: 1, PierceLevel: 2 })// 设定弹射物NBT数据
    projectile.setOwner(player) // 设定弹射物发射者
    projectile.spawn();
  })
  
  let setCOOLDOWNS=player.getAttributeTotalValue("minecraft:generic.attack_speed")
  player.addItemCooldown('mutantmore:mutant_jungle_zombie_arm', 80/setCOOLDOWNS);
});

//   ItemEvents.rightClicked('legendary_monsters:wand_of_clouds', event => { //层云叠杖
//     const { player, level } = event;
//     const damage = player.getAttributeTotalValue('minecraft:generic.max_health');
//     const adddamage = player.getAttributeTotalValue('obscure_api:magic_damage');
//     /**
//      * @type {Internal.Projectile}
//      */
//     const projectile = shootProjectile(event, 'legendary_monsters:wand_of_clouds', 'legendary_monsters:bomb', {
//       cooldown: 30
//     });
//     if(!projectile) return;
//     projectile.mergeNbt({ pickup: 2, damage: 4 + 0.4 * damage + 0.5 * adddamage, PierceLevel: 2 })// 设定弹射物NBT数据
//   });

// ItemEvents.rightClicked('legendary_monsters:wand_of_clouds', event => { //层云叠杖
//   const { player, level } = event; //从事件中解构出对象待用
//   if (event.player.cooldowns.isOnCooldown('kubejs:cucumber1')) return;
//   const viewVector = player.getViewVector(1.0); // 获取玩家的视角向量并标准化
//   const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
//   const normalizedVector = {x: viewVector.x() / length,y: viewVector.y() / length,z: viewVector.z() / length};
//   const projectile = level.createEntity('legendary_monsters:underground_soul_blade'); // 发射物
//   const offset = 1.0;  // 偏移距离
//   const spawnX = player.x + normalizedVector.x * offset; // 基于玩家位置+视线方向偏移
//   const spawnY = player.y + 1.2 + normalizedVector.y * offset;
//   const spawnZ = player.z + normalizedVector.z * offset;
//   projectile.setPosition(spawnX, spawnY, spawnZ); //设定发射坐标
//   const velocity = 2.0; // 设定速度基数
//   const damage = player.getAttributeTotalValue('minecraft:generic.max_health');
//   const adddamage = player.getAttributeTotalValue('obscure_api:magic_damage');
//   projectile.mergeNbt({ pickup: 2, damage: 400 + 0.4 * damage + 0.5 * adddamage, PierceLevel: 2 })// 设定弹射物NBT数据
//   projectile.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity); // 设定弹射物方向
//   projectile.setOwner(player) // 设定弹射物发射者
//   {projectile.spawn();}
//   player.addItemCooldown('kubejs:cucumber1', 30);
//   });

  ItemEvents.firstLeftClicked('eeeabsmobs:netherworld_katana', event => { //幽冥炼狱太刀
    const { player } = event;
    const BladeBeam = Java.loadClass('io.zershyan.fictional.common.registry.entities.BladeBeam');

    const adddamage = player.getAttributeTotalValue('minecraft:generic.luck');
    const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.attack_speed');

    BladeBeam.spawn(player, 16 + 0.6 * adddamage ).distance(24).color(0x4169E1).alpha(0.2).build(4.0);
    player.addItemCooldown('eeeabsmobs:netherworld_katana', 20 / setCOOLDOWNS)

  });

// ==================== 黄金系列武器 ====================
const goldWeapons = [
  { itemId: 'royalvariations:royal_staff'},
  { itemId: 'aether:valkyrie_lance'},
  { itemId: 'aether:valkyrie_axe'},
  { itemId: 'advancednetherite:netherite_gold_sword'},
  { itemId: 'advancednetherite:netherite_gold_axe'},
  { itemId: 'minecraft:golden_sword'},
  { itemId: 'minecraft:golden_axe'},
];

goldWeapons.forEach(weapon => {
  // 左键发射
  ItemEvents.firstLeftClicked(weapon.itemId, event => {
    const { player } = event;
    const BladeBeam = Java.loadClass('io.zershyan.fictional.common.registry.entities.BladeBeam');
    if (!player.potionEffects.isActive('kubejs:gold')) return;

    const adddamage = player.getAttributeTotalValue('minecraft:generic.luck');
    const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.attack_speed');

    BladeBeam.spawn(player, 4 + 2.0 * adddamage ).distance(24).color(0xFFFF00).alpha(0.2).build(4.0);
    player.addItemCooldown('kubejs:gold_heart', 20 / setCOOLDOWNS)

  });

});
