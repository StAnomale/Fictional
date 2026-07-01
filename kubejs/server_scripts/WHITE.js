// priority: 0

// Visit the wiki for more info - https://kubejs.com/
// priority: 500

// ==================== 物品事件 ====================

ItemEvents.firstLeftClicked('minecraft:bundle', event => { //收纳袋（垃圾桶升级！）
	let player = event.player
	let item = event.item
	if (player.cooldowns.isOnCooldown(item.id)) {return;}
	player.runCommandSilent('/sweepermaid dustbin');
  player.playNotifySound("minecraft:entity.experience_orb.pickup", "ambient", 1, 1)
	player.addItemCooldown(item.id, 40)
	player.tell("打开垃圾箱")
})


ItemEvents.rightClicked('minecraft:filled_map', event => { //地图传送
	let player = event.player
  let mainHandItem = player.getMainHandItem();
	//let item = event.item
  if (mainHandItem.getId() === 'minecraft:filled_map') {
  if(!player.isCuriosEquipped('ba_bt:end_golem_eye')) return; //佩戴饰品
	let x=player.mainHandItem.nbt.get("Decorations")[0].x
  let z=player.mainHandItem.nbt.get("Decorations")[0].z
  if (player.cooldowns.isOnCooldown('ba_bt:end_golem_eye')) return;
  player.addItemCooldown('ba_bt:end_golem_eye', 600)
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
	player.tell("传送至目标地点")
})}
})

  //level.spawnparticles("minecraft:smoke", true, blockX, blockY, blockZ,  //还是不会写喵
  //   0, 0, 0, //速度向量
  //   1,     //粒子数量
  //   0      //速度
  //);
  //player.spawnParticles('minecraft:totem_of_undying', player.x, player.y + 1, player.z, 30, 0.5, 1, 0.5, 0.5);      // 在玩家周围生成大量图腾粒子

//本整合包由 绘名青棺(Silentmo) 制作，联系QQ群：693928637

ItemEvents.rightClicked('meetyourfight:dredged_cannonade', event => { //沉渣火炮
  const { player, level } = event; //从事件中解构出对象待用
  if (event.player.cooldowns.isOnCooldown('meetyourfight:dredged_cannonade')) return;
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
  const damage=player.getAttributeTotalValue("minecraft:generic.max_health")
  const totaldamage=player.getAttributeTotalValue("gunswithoutroses:gwr.damage_total")
  projectile.mergeNbt({ pickup: 4, damage: (3+0.1*damage)*totaldamage, PierceLevel: 8 })// 设定弹射物NBT数据
  projectile.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity); // 设定弹射物方向
  projectile.setOwner(player) // 设定弹射物发射者
  projectile.spawn();
  player.addItemCooldown('meetyourfight:dredged_cannonade', 30)
  });

ItemEvents.rightClicked('gwrexpansions:mirecaller_shotgun', event => { //巨颌霰炮
  const { player, level } = event; //从事件中解构出对象待用
  if (event.player.cooldowns.isOnCooldown('gwrexpansions:mirecaller_shotgun')) return;
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
  const damage=player.getAttributeTotalValue("minecraft:generic.max_health")
  const totaldamage=player.getAttributeTotalValue("gunswithoutroses:gwr.damage_total")
  projectile.mergeNbt({ pickup: 4, damage: (3+0.1*damage)*totaldamage, PierceLevel: 8 })// 设定弹射物NBT数据
  projectile.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity); // 设定弹射物方向
  projectile.setOwner(player) // 设定弹射物发射者
  projectile.spawn();
  player.addItemCooldown('gwrexpansions:mirecaller_shotgun', 30)
  });

ItemEvents.rightClicked('minecraft:bone', event => { //骨头
  const { player, level } = event; //从事件中解构出对象待用
  let mainHandItem = player.getMainHandItem();
  if (mainHandItem.getId() === 'minecraft:bone') {
  if (event.player.cooldowns.isOnCooldown('minecraft:bone')) return;
  const setCOOLDOWNS=player.getAttributeTotalValue("minecraft:generic.luck")
  player.addItemCooldown('minecraft:bone', 1 + 1 * 40/(4+setCOOLDOWNS))
  const viewVector = player.getViewVector(1.0); // 获取玩家的视角向量并标准化
  const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
  const normalizedVector = {x: viewVector.x() / length,y: viewVector.y() / length,z: viewVector.z() / length};
  const projectile = level.createEntity("illageandspillage:bone"); // 发射物
  const offset = 1.5;  // 偏移距离
  const spawnX = player.x + normalizedVector.x * offset; // 基于玩家位置+视线方向偏移
  const spawnY = player.y + 1.5 + normalizedVector.y * offset;
  const spawnZ = player.z + normalizedVector.z * offset;
  projectile.setPosition(spawnX, spawnY, spawnZ); //设定发射坐标
  const velocity = 2.0; // 设定速度基数
  projectile.mergeNbt({ pickup: 4, damage: 4, PierceLevel: 8 })// 设定弹射物NBT数据
  projectile.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity); // 设定弹射物方向
  projectile.setOwner(player) // 设定弹射物发射者
    if (player.isCuriosEquipped('cataclysm:sticky_gloves') && Math.random() < 0.40) {
      if (!player.isCreative()) {mainHandItem.shrink(1);player.setMainHandItem(mainHandItem);};
    } else if (!player.isCuriosEquipped('cataclysm:sticky_gloves')) {
      if (!player.isCreative()) {mainHandItem.shrink(1);player.setMainHandItem(mainHandItem);};
    } //粘性手套 - 概率不消耗投掷物
  projectile.spawn();}
  });
ItemEvents.rightClicked('minecraft:bone', event => { //骨头
  const { player, level } = event; //从事件中解构出对象待用
  let offHandItem = player.getOffHandItem();
  if (offHandItem.getId() === 'minecraft:bone') {
  if (event.player.cooldowns.isOnCooldown('minecraft:bone')) return;
  const setCOOLDOWNS=player.getAttributeTotalValue("minecraft:generic.luck")
  player.addItemCooldown('minecraft:bone', 1 + 1 * 40/(4+setCOOLDOWNS))
  const viewVector = player.getViewVector(1.0); // 获取玩家的视角向量并标准化
  const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
  const normalizedVector = {x: viewVector.x() / length,y: viewVector.y() / length,z: viewVector.z() / length};
  const projectile = level.createEntity("illageandspillage:bone"); // 发射物
  const offset = 1.5;  // 偏移距离
  const spawnX = player.x + normalizedVector.x * offset; // 基于玩家位置+视线方向偏移
  const spawnY = player.y + 1.5 + normalizedVector.y * offset;
  const spawnZ = player.z + normalizedVector.z * offset;
  projectile.setPosition(spawnX, spawnY, spawnZ); //设定发射坐标
  const velocity = 2.0; // 设定速度基数
  projectile.mergeNbt({ pickup: 4, damage: 4, PierceLevel: 8 })// 设定弹射物NBT数据
  projectile.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity); // 设定弹射物方向
  projectile.setOwner(player) // 设定弹射物发射者
  if (offHandItem.getId() === 'minecraft:bone') {
    if (player.isCuriosEquipped('cataclysm:sticky_gloves') && Math.random() < 0.40) {
      if (!player.isCreative()) {offHandItem.shrink(1);player.setOffHandItem(offHandItem);};
    } else if (!player.isCuriosEquipped('cataclysm:sticky_gloves')) {
      if (!player.isCreative()) {offHandItem.shrink(1);player.setOffHandItem(offHandItem);};
    } //粘性手套 - 概率不消耗投掷物
  projectile.spawn();}}
  });

ItemEvents.rightClicked('radiation_zone_reborn:radiated_bone', event => { //污浊骨头
  const { player, level } = event; //从事件中解构出对象待用
  let mainHandItem = player.getMainHandItem();
  if (mainHandItem.getId() === 'radiation_zone_reborn:radiated_bone') {
  if (event.player.cooldowns.isOnCooldown('radiation_zone_reborn:radiated_bone')) return;
  const viewVector = player.getViewVector(1.0); // 获取玩家的视角向量并标准化
  const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
  const normalizedVector = {x: viewVector.x() / length,y: viewVector.y() / length,z: viewVector.z() / length};
  const projectile = level.createEntity("illageandspillage:bone"); // 发射物
  const offset = 1.5;  // 偏移距离
  const spawnX = player.x + normalizedVector.x * offset; // 基于玩家位置+视线方向偏移
  const spawnY = player.y + 1.5 + normalizedVector.y * offset;
  const spawnZ = player.z + normalizedVector.z * offset;
  projectile.setPosition(spawnX, spawnY, spawnZ); //设定发射坐标
  const velocity = 4.0; // 设定速度基数
  projectile.mergeNbt({ pickup: 4, damage: 4, PierceLevel: 8 })// 设定弹射物NBT数据
  projectile.setMotion(normalizedVector.x * (velocity-2), normalizedVector.y * (velocity-2), normalizedVector.z * (velocity-2)); // 设定弹射物方向
  projectile.setOwner(player) // 设定弹射物发射者
  const setCOOLDOWNS=player.getAttributeTotalValue("minecraft:generic.luck")
  player.addItemCooldown('radiation_zone_reborn:radiated_bone', 1 + 1 * 60/(4+setCOOLDOWNS))
    if (player.isCuriosEquipped('cataclysm:sticky_gloves') && Math.random() < 0.40) {
      if (!player.isCreative()) {mainHandItem.shrink(1);player.setMainHandItem(mainHandItem);};
    } else if (!player.isCuriosEquipped('cataclysm:sticky_gloves')) {
      if (!player.isCreative()) {mainHandItem.shrink(1);player.setMainHandItem(mainHandItem);};
    } //粘性手套 - 概率不消耗投掷物
  projectile.spawn();

  const projectile2 = level.createEntity("radiation_zone_reborn:vesicabug_leader_bullet"); // 发射物
  projectile2.setPosition(spawnX, spawnY, spawnZ); //设定发射坐标
  const adddamage=player.getAttributeTotalValue("minecraft:generic.armor_toughness")
  projectile2.mergeNbt({ pickup: 4, damage: 4+0.1*adddamage, PierceLevel: 8 })// 设定弹射物NBT数据
  projectile2.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity); // 设定弹射物方向
  projectile2.setOwner(player) // 设定弹射物发射者
  projectile2.spawn();}
  });
ItemEvents.rightClicked('radiation_zone_reborn:radiated_bone', event => { //污浊骨头
  const { player, level } = event; //从事件中解构出对象待用
  let offHandItem = player.getOffHandItem();
  if (offHandItem.getId() === 'radiation_zone_reborn:radiated_bone') {
  if (event.player.cooldowns.isOnCooldown('radiation_zone_reborn:radiated_bone')) return;
  const viewVector = player.getViewVector(1.0); // 获取玩家的视角向量并标准化
  const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
  const normalizedVector = {x: viewVector.x() / length,y: viewVector.y() / length,z: viewVector.z() / length};
  const projectile = level.createEntity("illageandspillage:bone"); // 发射物
  const offset = 1.5;  // 偏移距离
  const spawnX = player.x + normalizedVector.x * offset; // 基于玩家位置+视线方向偏移
  const spawnY = player.y + 1.5 + normalizedVector.y * offset;
  const spawnZ = player.z + normalizedVector.z * offset;
  projectile.setPosition(spawnX, spawnY, spawnZ); //设定发射坐标
  const velocity = 4.0; // 设定速度基数
  projectile.mergeNbt({ pickup: 4, damage: 4, PierceLevel: 8 })// 设定弹射物NBT数据
  projectile.setMotion(normalizedVector.x * (velocity-2), normalizedVector.y * (velocity-2), normalizedVector.z * (velocity-2)); // 设定弹射物方向
  projectile.setOwner(player) // 设定弹射物发射者
  const setCOOLDOWNS=player.getAttributeTotalValue("minecraft:generic.luck")
  player.addItemCooldown('radiation_zone_reborn:radiated_bone', 1 + 1 * 60/(4+setCOOLDOWNS))
    if (player.isCuriosEquipped('cataclysm:sticky_gloves') && Math.random() < 0.40) {
      if (!player.isCreative()) {offHandItem.shrink(1);player.setOffHandItem(offHandItem);};
    } else if (!player.isCuriosEquipped('cataclysm:sticky_gloves')) {
      if (!player.isCreative()) {offHandItem.shrink(1);player.setOffHandItem(offHandItem);};
    } //粘性手套 - 概率不消耗投掷物
  projectile.spawn();

  const projectile2 = level.createEntity("radiation_zone_reborn:vesicabug_leader_bullet"); // 发射物
  projectile2.setPosition(spawnX, spawnY, spawnZ); //设定发射坐标
  const adddamage=player.getAttributeTotalValue("minecraft:generic.armor_toughness")
  projectile2.mergeNbt({ pickup: 4, damage: 4+0.1*adddamage, PierceLevel: 8 })// 设定弹射物NBT数据
  projectile2.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity); // 设定弹射物方向
  projectile2.setOwner(player) // 设定弹射物发射者
  projectile2.spawn();}
  });




ItemEvents.rightClicked('cataclysm:koboleton_bone', event => { //骸龙之骨
  const { player, level } = event; //从事件中解构出对象待用
  let mainHandItem = player.getMainHandItem();
  if (mainHandItem.getId() === 'cataclysm:koboleton_bone') {
  if (event.player.cooldowns.isOnCooldown('cataclysm:koboleton_bone')) return;
  const viewVector = player.getViewVector(1.0); // 获取玩家的视角向量并标准化
  const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
  const normalizedVector = {x: viewVector.x() / length,y: viewVector.y() / length,z: viewVector.z() / length};
  const projectile = level.createEntity("illageandspillage:bone"); // 发射物
  const offset = 1.5;  // 偏移距离
  const spawnX = player.x + normalizedVector.x * offset; // 基于玩家位置+视线方向偏移
  const spawnY = player.y + 1.5 + normalizedVector.y * offset;
  const spawnZ = player.z + normalizedVector.z * offset;
  projectile.setPosition(spawnX, spawnY, spawnZ); //设定发射坐标
  const velocity = 4.0; // 设定速度基数
  projectile.mergeNbt({ pickup: 4, damage: 4, PierceLevel: 8 })// 设定弹射物NBT数据
  projectile.setMotion(normalizedVector.x * (velocity-2), normalizedVector.y * (velocity-2), normalizedVector.z * (velocity-2)); // 设定弹射物方向
  projectile.setOwner(player) // 设定弹射物发射者
  const setCOOLDOWNS=player.getAttributeTotalValue("minecraft:generic.luck")
  player.addItemCooldown('cataclysm:koboleton_bone', 1 + 1 * 80/(4+setCOOLDOWNS))
    if (player.isCuriosEquipped('cataclysm:sticky_gloves') && Math.random() < 0.40) {
      if (!player.isCreative()) {mainHandItem.shrink(1);player.setMainHandItem(mainHandItem);};
    } else if (!player.isCuriosEquipped('cataclysm:sticky_gloves')) {
      if (!player.isCreative()) {mainHandItem.shrink(1);player.setMainHandItem(mainHandItem);};
    } //粘性手套 - 概率不消耗投掷物
  projectile.spawn();

  const projectile2 = level.createEntity("radiation_zone_reborn:sand_ball"); // 发射物
  projectile2.setPosition(spawnX, spawnY, spawnZ); //设定发射坐标
  const adddamage=player.getAttributeTotalValue("minecraft:generic.armor_toughness")
  projectile2.mergeNbt({ pickup: 4, damage: 4+0.2*adddamage, PierceLevel: 8 })// 设定弹射物NBT数据
  projectile2.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity); // 设定弹射物方向
  projectile2.setOwner(player) // 设定弹射物发射者
  projectile2.spawn();}
  });
ItemEvents.rightClicked('cataclysm:koboleton_bone', event => { //骸龙之骨
  const { player, level } = event; //从事件中解构出对象待用
  let offHandItem = player.getOffHandItem();
  if (offHandItem.getId() === 'cataclysm:koboleton_bone') {
  if (event.player.cooldowns.isOnCooldown('cataclysm:koboleton_bone')) return;
  const viewVector = player.getViewVector(1.0); // 获取玩家的视角向量并标准化
  const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
  const normalizedVector = {x: viewVector.x() / length,y: viewVector.y() / length,z: viewVector.z() / length};
  const projectile = level.createEntity("illageandspillage:bone"); // 发射物
  const offset = 1.5;  // 偏移距离
  const spawnX = player.x + normalizedVector.x * offset; // 基于玩家位置+视线方向偏移
  const spawnY = player.y + 1.5 + normalizedVector.y * offset;
  const spawnZ = player.z + normalizedVector.z * offset;
  projectile.setPosition(spawnX, spawnY, spawnZ); //设定发射坐标
  const velocity = 4.0; // 设定速度基数
  projectile.mergeNbt({ pickup: 4, damage: 4, PierceLevel: 8 })// 设定弹射物NBT数据
  projectile.setMotion(normalizedVector.x * (velocity-2), normalizedVector.y * (velocity-2), normalizedVector.z * (velocity-2)); // 设定弹射物方向
  projectile.setOwner(player) // 设定弹射物发射者
  const setCOOLDOWNS=player.getAttributeTotalValue("minecraft:generic.luck")
  player.addItemCooldown('cataclysm:koboleton_bone', 1 + 1 * 80/(4+setCOOLDOWNS))
    if (player.isCuriosEquipped('cataclysm:sticky_gloves') && Math.random() < 0.40) {
      if (!player.isCreative()) {offHandItem.shrink(1);player.setOffHandItem(offHandItem);};
    } else if (!player.isCuriosEquipped('cataclysm:sticky_gloves')) {
      if (!player.isCreative()) {offHandItem.shrink(1);player.setOffHandItem(offHandItem);};
    } //粘性手套 - 概率不消耗投掷物
  projectile.spawn();

  const projectile2 = level.createEntity("radiation_zone_reborn:sand_ball"); // 发射物
  projectile2.setPosition(spawnX, spawnY, spawnZ); //设定发射坐标
  const adddamage=player.getAttributeTotalValue("minecraft:generic.armor_toughness")
  projectile2.mergeNbt({ pickup: 4, damage: 4+0.2*adddamage, PierceLevel: 8 })// 设定弹射物NBT数据
  projectile2.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity); // 设定弹射物方向
  projectile2.setOwner(player) // 设定弹射物发射者
  projectile2.spawn();}
  });



ItemEvents.rightClicked('radiation_zone_reborn:dust_ball', event => { //沙尘弹
  const { player, level } = event; //从事件中解构出对象待用
  if (event.player.cooldowns.isOnCooldown('radiation_zone_reborn:dust_ball')) return;
  const viewVector = player.getViewVector(1.0); // 获取玩家的视角向量并标准化
  const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
  const normalizedVector = {x: viewVector.x() / length,y: viewVector.y() / length,z: viewVector.z() / length};
  const projectile = level.createEntity("radiation_zone_reborn:sand_ball"); // 发射物
  const offset = 1.5;  // 偏移距离
  const spawnX = player.x + normalizedVector.x * offset; // 基于玩家位置+视线方向偏移
  const spawnY = player.y + 1.5 + normalizedVector.y * offset;
  const spawnZ = player.z + normalizedVector.z * offset;
  projectile.setPosition(spawnX, spawnY, spawnZ); //设定发射坐标
  const velocity = 1.0; // 设定速度基数
  const adddamage=player.getAttributeTotalValue("obscure_api:magic_damage")
  projectile.mergeNbt({ pickup: 4, damage: 6+2.0*adddamage, PierceLevel: 8 })// 设定弹射物NBT数据
  projectile.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity); // 设定弹射物方向
  projectile.setOwner(player) // 设定弹射物发射者
  projectile.spawn();
  });

ItemEvents.rightClicked('gunswithoutroses:blaze_gun', event => { //烈焰枪
  const { player, level } = event; //从事件中解构出对象待用
  if(!player.isCuriosEquipped('mutantmore:mutant_blaze_core')) return; //佩戴饰品
  if (event.player.cooldowns.isOnCooldown('mutantmore:mutant_blaze_core')) return;
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
  const damage=player.getAttributeTotalValue("minecraft:generic.armor")
  const totaldamage=player.getAttributeTotalValue("gunswithoutroses:gwr.damage_total")
  projectile.mergeNbt({ pickup: 4, damage: (6+0.4*damage)*totaldamage, PierceLevel: 8 })// 设定弹射物NBT数据
  projectile.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity); // 设定弹射物方向
  projectile.setOwner(player) // 设定弹射物发射者
  const setCOOLDOWNS=player.getAttributeTotalValue("minecraft:generic.movement_speed")
  player.addItemCooldown('mutantmore:mutant_blaze_core', 1 * 3/(setCOOLDOWNS))
  projectile.spawn();
  });

ItemEvents.rightClicked('gwrexpansions:hellforge_revolver', event => { //狱锻之轮
  const { player, level } = event; //从事件中解构出对象待用
  if(!player.isCuriosEquipped('mutantmore:mutant_blaze_core')) return; //佩戴饰品
  if (event.player.cooldowns.isOnCooldown('mutantmore:mutant_blaze_core')) return;
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
  const damage=player.getAttributeTotalValue("minecraft:generic.armor")
  const totaldamage=player.getAttributeTotalValue("gunswithoutroses:gwr.damage_total")
  projectile.mergeNbt({ pickup: 4, damage: (6+0.4*damage)*totaldamage, PierceLevel: 8 })// 设定弹射物NBT数据
  projectile.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity); // 设定弹射物方向
  projectile.setOwner(player) // 设定弹射物发射者
  const setCOOLDOWNS=player.getAttributeTotalValue("minecraft:generic.movement_speed")
  player.addItemCooldown('mutantmore:mutant_blaze_core', 1 * 3/(setCOOLDOWNS))
  projectile.spawn();
  });

ItemEvents.rightClicked('mutantmore:adaptive_crossbow', event => { //适应性弩
  const { player, level } = event; //从事件中解构出对象待用
  if(!player.isCuriosEquipped('mutantmore:mutant_jungle_zombie_vine_seed')) return; //佩戴饰品
  if (event.player.cooldowns.isOnCooldown('mutantmore:mutant_jungle_zombie_vine_seed')) return;
  const viewVector = player.getViewVector(1.0); // 获取玩家的视角向量并标准化
  const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
  const normalizedVector = {x: viewVector.x() / length,y: viewVector.y() / length,z: viewVector.z() / length};
  const projectile = level.createEntity("radiation_zone_reborn:vesicabug_leader_bullet"); // 发射物
  const offset = 1.5;  // 偏移距离
  const spawnX = player.x + normalizedVector.x * offset; // 基于玩家位置+视线方向偏移
  const spawnY = player.y + 1.5 + normalizedVector.y * offset;
  const spawnZ = player.z + normalizedVector.z * offset;
  projectile.setPosition(spawnX, spawnY, spawnZ); //设定发射坐标
  const velocity = 4.0; // 设定速度基数
  const damage=player.getAttributeTotalValue("minecraft:generic.armor_toughness")
  const adddamage=player.getAttributeTotalValue("obscure_api:magic_damage")
  projectile.mergeNbt({ pickup: 4, damage: 8+0.2*damage+0.75*adddamage, PierceLevel: 8 })// 设定弹射物NBT数据
  projectile.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity); // 设定弹射物方向
  projectile.setOwner(player) // 设定弹射物发射者
  const setCOOLDOWNS=player.getAttributeTotalValue("minecraft:generic.movement_speed")
  player.addItemCooldown('mutantmore:mutant_jungle_zombie_vine_seed', 1 * 4/(setCOOLDOWNS))
  projectile.spawn();
  });

ItemEvents.firstLeftClicked('bosses_of_mass_destruction:earthdive_spear', event => { //潜地矛
  const { player, level } = event; //从事件中解构出对象待用
  if(!player.isCuriosEquipped('mutantmore:mutant_jungle_zombie_vine_seed')) return; //佩戴饰品
  if (event.player.cooldowns.isOnCooldown('mutantmore:mutant_jungle_zombie_vine_seed')) return;
  const viewVector = player.getViewVector(1.0); // 获取玩家的视角向量并标准化
  const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
  const normalizedVector = {x: viewVector.x() / length,y: viewVector.y() / length,z: viewVector.z() / length};
  const projectile = level.createEntity("radiation_zone_reborn:vesicabug_leader_bullet"); // 发射物
  const offset = 1.5;  // 偏移距离
  const spawnX = player.x + normalizedVector.x * offset; // 基于玩家位置+视线方向偏移
  const spawnY = player.y + 1.5 + normalizedVector.y * offset;
  const spawnZ = player.z + normalizedVector.z * offset;
  projectile.setPosition(spawnX, spawnY, spawnZ); //设定发射坐标
  const velocity = 4.0; // 设定速度基数
  const damage=player.getAttributeTotalValue("minecraft:generic.attack_damage")
  const adddamage=player.getAttributeTotalValue("obscure_api:magic_damage")
  projectile.mergeNbt({ pickup: 4, damage: 8+0.2*damage+0.75*adddamage, PierceLevel: 8 })// 设定弹射物NBT数据
  projectile.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity); // 设定弹射物方向
  projectile.setOwner(player) // 设定弹射物发射者
  const setCOOLDOWNS=player.getAttributeTotalValue("minecraft:generic.movement_speed")
  player.addItemCooldown('mutantmore:mutant_jungle_zombie_vine_seed', 1 * 4/(setCOOLDOWNS))
  projectile.spawn();
  });

// 巨人之锤 - 使用通用函数
ItemEvents.firstLeftClicked('mutantmonsters:hulk_hammer', event => {
  const { player } = event;
  const adddamage = player.getAttributeTotalValue("minecraft:generic.armor_toughness");
  const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.attack_speed');
  
  shootProjectile(event, 'mutantmonsters:hulk_hammer', 'radiation_zone_reborn:sand_ball', {
    velocity: 4.0,
    nbt: { pickup: 1, damage: 1 + 0.1 * adddamage, PierceLevel: 2 },
    cooldown: 20 / setCOOLDOWNS
  });
});

// 尸壳战锤 - 使用通用函数
ItemEvents.firstLeftClicked('mutantmore:husk_hammer', event => {
  const { player } = event;
  const adddamage = player.getAttributeTotalValue("minecraft:generic.armor_toughness");
  const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.attack_speed');
  
  shootProjectile(event, 'mutantmore:husk_hammer', 'radiation_zone_reborn:player_sand_bomb', {
    spawnY: 1.1,
    velocity: 2.0,
    nbt: { pickup: 1, damage: 4 + 0.2 * adddamage, PierceLevel: 2 },
    cooldown: 20 / setCOOLDOWNS
  });
});



// 荒漠号角
ItemEvents.rightClicked('mutantmore:desert_horn', event => {
  const { player } = event;
  const damage = player.getAttributeTotalValue("minecraft:generic.armor_toughness");
  const adddamage = player.getAttributeTotalValue("obscure_api:magic_damage");
  
  shootProjectile(event, 'mutantmore:desert_horn', 'radiation_zone_reborn:sand_ball', {
    velocity: 4.0,
    nbt: { pickup: 4, damage: 4 + 0.2 * damage + 0.75 * adddamage, PierceLevel: 2 },
    cooldown: 30 
  });
});

// 沙尘武器
const giantrockWeapons = [
  'radiation_zone_reborn:dustorm_greatsword',
  'radiation_zone_reborn:dustorm_sword',
  'radiation_zone_reborn:dustorm_hammer',
  'radiation_zone_reborn:sedisilver_hammer',   // 沉积银锤
  'radiation_zone_reborn:sedisilver_axe',      // 沉积银斧
  'radiation_zone_reborn:sedisilver_dagger',   // 沉积银匕首
  'radiation_zone_reborn:sedisilver_sword',    // 沉积银剑
  'radiation_zone_reborn:sedisilver_pickaxe',  // 沉积银镐
  'radiation_zone_reborn:sedisilver_shovel',    // 沉积银锹
  'radiation_zone_reborn:giantrock_hammer',   // 巨岩锤
  'radiation_zone_reborn:giantrock_axe',      // 巨岩斧
  'radiation_zone_reborn:giantrock_dagger',   // 巨岩匕首
  'radiation_zone_reborn:giantrock_sword',    // 巨岩剑
  'radiation_zone_reborn:giantrock_pickaxe',  // 巨岩镐
  'radiation_zone_reborn:giantrock_shovel'    // 巨岩锹
];

giantrockWeapons.forEach(weaponId => {
  ItemEvents.firstLeftClicked(weaponId, event => {
    const { player } = event;
    const adddamage = player.getAttributeTotalValue("obscure_api:magic_damage");
    const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.attack_speed');
    
    shootProjectile(event, weaponId, 'radiation_zone_reborn:sand_ball', {
      velocity: 4.0,
      nbt: { pickup: 2, damage: 1 + 0.25 * adddamage, PierceLevel: 2 },
      cooldown: 20 / setCOOLDOWNS
    });
  });
});

// 巨岩锄 - 特殊冷却时间
ItemEvents.firstLeftClicked('radiation_zone_reborn:giantrock_hoe', event => {
  const { player } = event;
  const adddamage = player.getAttributeTotalValue("obscure_api:magic_damage");
  const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.attack_speed');
  
  shootProjectile(event, 'radiation_zone_reborn:giantrock_hoe', 'radiation_zone_reborn:sand_ball', {
    nbt: { pickup: 2, damage: 2 + 0.5 * adddamage, PierceLevel: 2 },
    cooldown: 40 / setCOOLDOWNS
  });
});

// 沉积银锄 - 特殊冷却时间
ItemEvents.firstLeftClicked('radiation_zone_reborn:sedisilver_hoe', event => {
  const { player } = event;
  const adddamage = player.getAttributeTotalValue("obscure_api:magic_damage");
  const setCOOLDOWNS = player.getAttributeTotalValue('minecraft:generic.attack_speed');
  
  shootProjectile(event, 'radiation_zone_reborn:sedisilver_hoe', 'radiation_zone_reborn:sand_ball', {
    nbt: { pickup: 2, damage: 2 + 0.5 * adddamage, PierceLevel: 2 },
    cooldown: 40 / setCOOLDOWNS
  });
});


