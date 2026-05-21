// priority: 0

// Visit the wiki for more info - https://kubejs.com/
// priority: 500

//召唤不朽者
ItemEvents.firstRightClicked('kubejs:feigned_blank', event => {
    // 从事件中解构出关键对象
    const { player, level, item } = event;
    if (!player) return;
    if (level.isClientSide()) {return;}
    let Dimension = level.dimension
	  if (Dimension == "pbf1:sanctum_of_the_battle1") return //无法在沉睡海港召唤
    const targetItemId = 'kubejs:feigned_blank';
    const mainHandItem = player.getMainHandItem();
    if (!player.getMainHandItem().is(targetItemId)) {return;}
    if(player.getMainHandItem() == ("kubejs:feigned_blank")){
    if (player.cooldowns.isOnCooldown('kubejs:feigned_blank')) return; // 冷却返回
    player.addItemCooldown('kubejs:feigned_blank', 1200);

    let random1 = Math.random() * 5 - Math.random() * 10;
    let random2 = Math.random() * 5 - Math.random() * 10;

    if (mainHandItem.getId() === 'kubejs:feigned_blank') {//召唤所需的物品
        const moyingg = event.level.createEntity('eeeabsmobs:immortal');//被召唤的生物
        moyingg.setPosition(
            player.x + random1,
            player.y + 3,
            player.z + random2
        );
        moyingg.spawn();
        if (!player.isCreative()) {mainHandItem.shrink(1);player.setMainHandItem(mainHandItem)}
    }
  }
});

ItemEvents.firstLeftClicked('eeeabsmobs:guardian_axe', event => { //守卫者战斧
  const { player, level } = event; //从事件中解构出对象待用
  if (player.cooldowns.isOnCooldown('eeeabsmobs:guardian_axe')) {return;} // 冷却返回
  const viewVector = player.getViewVector(1.0); // 获取玩家的视角向量并标准化
  const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
  const normalizedVector = {x: viewVector.x() / length,y: viewVector.y() / length,z: viewVector.z() / length};
  const projectile = level.createEntity("eeeabsmobs:shaman_bomb"); // 发射物
  const offset = 0.5;  // 偏移距离
  const spawnX = player.x + normalizedVector.x * offset; // 基于玩家位置+视线方向偏移
  const spawnY = player.y + 1.2 + normalizedVector.y * offset;
  const spawnZ = player.z + normalizedVector.z * offset;
  projectile.setPosition(spawnX, spawnY, spawnZ); //设定发射坐标
  const velocity = 3.0; // 设定速度基数
  //projectile.yRot = player.yRot; // 修正方向
  const damage=player.getAttributeTotalValue("minecraft:generic.attack_damage")
  const adddamage=player.getAttributeTotalValue("minecraft:generic.armor")
  projectile.mergeNbt({ pickup: 2, damage: 0.4*damage + 0.2*adddamage, PierceLevel: 2 })// 设定弹射物NBT数据
  const setCOOLDOWNS=player.getAttributeTotalValue("minecraft:generic.attack_speed")
  player.addItemCooldown('eeeabsmobs:guardian_axe', 20/setCOOLDOWNS);
  projectile.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity); // 设定弹射物方向
  projectile.setOwner(player) // 设定弹射物发射者
  {projectile.spawn();}
  });


ItemEvents.rightClicked('cataclysm:cursed_bow', event => { //咒魂弓
  //从事件中解构出对象待用
  const { player, level } = event;
  if (player.cooldowns.isOnCooldown('cataclysm:cursed_bow')) {return;} // 冷却返回
  // 获取玩家的视角向量并标准化
  const viewVector = player.getViewVector(1.0);
  const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
  const normalizedVector = {
    x: viewVector.x() / length,
    y: viewVector.y() / length,
    z: viewVector.z() / length
  };
  const projectile = level.createEntity("minecraft:arrow");//发射物
  projectile.setPosition(player.x, player.y + 1.2, player.z);//设定发射坐标
  const velocity = 2.0;// 设定速度基数
  projectile.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity);// 设定弹射物方向
  projectile.setOwner(player)// 设定弹射物发射者
  const adddamage=player.getAttributeTotalValue("minecraft:generic.armor_toughness")
  projectile.mergeNbt({ pickup: 2, damage: 2+0.4*adddamage, PierceLevel: 2 })// 设定弹射物nbt
  player.addItemCooldown('cataclysm:cursed_bow', 16);
  projectile.spawn();// 生成弹射物
  });

ItemEvents.firstLeftClicked('cataclysm:the_incinerator', event => { //炎葬
  const { player, level } = event; //从事件中解构出对象待用
  if (player.cooldowns.isOnCooldown('cataclysm:the_incinerator')) {return;} // 冷却返回
  const viewVector = player.getViewVector(1.0); // 获取玩家的视角向量并标准化
  const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
  const normalizedVector = {x: viewVector.x() / length,y: viewVector.y() / length,z: viewVector.z() / length};
  const projectile = level.createEntity("cataclysm:flare_bomb"); // 发射物
  const offset = 1.2;  // 偏移距离
  const spawnX = player.x + normalizedVector.x * offset; // 基于玩家位置+视线方向偏移
  const spawnY = player.y + 1.2 + normalizedVector.y * offset;
  const spawnZ = player.z + normalizedVector.z * offset;
  projectile.setPosition(spawnX, spawnY, spawnZ); //设定发射坐标
  const velocity = 2.5; // 设定速度基数
  //projectile.yRot = player.yRot; // 修正方向
  const damage=player.getAttributeTotalValue("minecraft:generic.attack_damage")
  const adddamage=player.getAttributeTotalValue("minecraft:generic.armor_toughness")
  projectile.mergeNbt({ pickup: 2, damage: 0.4*damage + 0.4*adddamage, PierceLevel: 2 })// 设定弹射物NBT数据
  const setCOOLDOWNS=player.getAttributeTotalValue("minecraft:generic.attack_speed")
  player.addItemCooldown('cataclysm:the_incinerator', 20/setCOOLDOWNS);
  projectile.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity); // 设定弹射物方向
  projectile.setOwner(player) // 设定弹射物发射者
  projectile.spawn();
  });
ItemEvents.firstLeftClicked('cataclysm:the_incinerator', event => { //炎葬
  const { player, level } = event; //从事件中解构出对象待用
  if (event.player.cooldowns.isOnCooldown('kubejs:cucumber1')) return;
  const viewVector = player.getViewVector(1.0); // 获取玩家的视角向量并标准化
  const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
  const normalizedVector = {x: viewVector.x() / length,y: viewVector.y() / length,z: viewVector.z() / length};
  const projectile = level.createEntity("cataclysm:blazing_bone"); // 发射物
  const offset = 1.2;  // 偏移距离
  const spawnX = player.x + normalizedVector.x * offset; // 基于玩家位置+视线方向偏移
  const spawnY = player.y + 1.2 + normalizedVector.y * offset;
  const spawnZ = player.z + normalizedVector.z * offset;
  projectile.setPosition(spawnX, spawnY, spawnZ); //设定发射坐标
  const velocity = 3.0; // 设定速度基数
  const damage=player.getAttributeTotalValue("minecraft:generic.attack_damage")
  const adddamage=player.getAttributeTotalValue("minecraft:generic.armor")
  projectile.mergeNbt({ pickup: 2, damage: 1+0.2*damage + 0.2*adddamage, PierceLevel: 2 })// 设定弹射物NBT数据
  const setCOOLDOWNS=player.getAttributeTotalValue("minecraft:generic.attack_speed")
  player.addItemCooldown('kubejs:cucumber1', 20/setCOOLDOWNS);
  projectile.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity); // 设定弹射物方向
  projectile.setOwner(player) // 设定弹射物发射者
  projectile.spawn();
  
  });

ItemEvents.firstLeftClicked('eeeabsmobs:netherworld_katana', event => { //幽冥炼狱太刀
  const { player, level } = event; //从事件中解构出对象待用
  if (player.cooldowns.isOnCooldown('eeeabsmobs:netherworld_katana')) {return;} // 冷却返回
  const viewVector = player.getViewVector(1.0); // 获取玩家的视角向量并标准化
  const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
  const normalizedVector = {x: viewVector.x() / length,y: viewVector.y() / length,z: viewVector.z() / length};
  const projectile = level.createEntity("cataclysm:axe_blade"); // 发射物
  const offset = 0.5;  // 偏移距离
  const spawnX = player.x + normalizedVector.x * offset; // 基于玩家位置+视线方向偏移
  const spawnY = player.y + 1.0 + normalizedVector.y * offset;
  const spawnZ = player.z + normalizedVector.z * offset;
  projectile.setPosition(spawnX, spawnY, spawnZ); //设定发射坐标
  const velocity = 4.5; // 设定速度基数

  const rot = player.yRot
  projectile.yRot = rot //修正方向

  const damage=player.getAttributeTotalValue("minecraft:generic.attack_damage")
  const adddamage=player.getAttributeTotalValue("minecraft:generic.max_health")
  projectile.setDamage(16+0.4*damage+0.4*adddamage)
  const setCOOLDOWNS=player.getAttributeTotalValue("minecraft:generic.attack_speed")
  player.addItemCooldown('eeeabsmobs:netherworld_katana', 20/setCOOLDOWNS);
  projectile.setMotion(normalizedVector.x * velocity, normalizedVector.y * velocity, normalizedVector.z * velocity); // 设定弹射物方向
  projectile.setOwner(player) // 设定弹射物发射者
  projectile.spawn();
  });//本整合包由 绘名青棺(Silentmo) 制作，联系QQ群：693928637
