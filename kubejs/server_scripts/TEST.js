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

PlayerEvents.tick(event => {
    let player = event.getPlayer();
    let pData = player.getPersistentData();
    if(!pData.contains('testItem')) return;
    let tick = pData.getInt('testItem');
    if(tick > 0) pData.putInt('testItem', --tick);
    let level = event.getLevel();
    let pos = player.position();
    let pos1 = pos.add(new Vec3d(-1,-1,-1));
    let pos2 = pos.add(new Vec3d(1,1,1));
    level.getEntitiesWithin(AABB.of(pos1.x(), pos1.y(), pos1.z(), pos2.x(), pos2.y(), pos2.z()))
        .filter(entity => entity.isLiving() && entity != player).forEach(entity => {
            entity.attack(player.damageSources().playerAttack(player), 10);
        });
    if(tick == 0) pData.remove('testItem');
})

// 玩家复活事件（在登录时也会触发）
EntityEvents.spawned(event => {
    let player = event.entity;
    let server = player.server
    let playerName = player.username
    if (!player || !player.isPlayer()) return;
    
    // 添加负面效果
    player.potionEffects.add('kubejs:hostility_wounding', 200, 0); // 重创
    player.potionEffects.add('kubejs:hostility_chaos', 300, 4);   // 混乱

    server.scheduleInTicks(60, () => {

    // 检测魔力病，阻止玩家登录时触发的传送
    if (!player.potionEffects.isActive('kubejs:hostility_magic_illness')) return;
    
    // 定义维度传送配置
    const dimensions = [
        { chance: 0.10, id: 'aether:the_aether', resistance: true },
        { chance: 0.20, id: 'minecraft:the_nether', resistance: true },
        { chance: 0.70, id: 'twilightforest:twilight_forest', resistance: true },
        { chance: 0.80, id: 'the_bumblezone:the_bumblezone', resistance: true },
        { chance: 0.90, id: 'radiation_zone_reborn:radiation_zone', resistance: true },
    //    { chance: 0.60, id: 'pbf1:sanctum_of_the_battle1', x: 4, y: 10, z: 0, resistance: false },
    //    { chance: 1.80, id: 'minecraft:overworld', resistance: false }
    ];

    let roll = Math.random();
    let targetDim = null;
    let cumulativeChance = 0;

    // 确定目标维度
    for (let dim of dimensions) {
        if (roll < dim.chance && roll >= cumulativeChance) {targetDim = dim;break;}
        cumulativeChance = dim.chance;
    }

    // 执行传送
    if (targetDim) {
        server.scheduleInTicks(5, () => {
            let tpX = targetDim.x !== undefined ? targetDim.x : x;
            let tpY = targetDim.y !== undefined ? targetDim.y : 320;
            let tpZ = targetDim.z !== undefined ? targetDim.z : z;
            
            server.runCommandSilent(`/execute in ${targetDim.id} run tp ${playerName} ${tpX} ${tpY} ${tpZ}`);
            
            if (targetDim.resistance) {
                player.potionEffects.add('resistance', 160, 4, false, false);
            }
            
            player.playNotifySound("minecraft:item.totem.use", "ambient", 1, 1);
            console.log(`已将死亡玩家 ${playerName} 随机传送至 ${targetDim.id}`);
            player.statusMessage = ` 你意外跌入时间的长河，遗落至此 `;
        });
    }
    })

});

//测试重锤
let $Player = Java.loadClass("net.minecraft.world.entity.player.Player");
let $FoodList = Java.loadClass("com.cazsius.solcarrot.tracking.FoodList");

let GOURMET_SWORD_CONFIG = {
    id: "trials:mace", // 物品ID
    nbtKey: "gourmet_food_count", // 存储在物品NBT中的键
    pdataKey: "gourmet_last_count", // 存储在持久化数据中的键
    baseDamagePenalty: 0.00030, // 基础伤害减少百分比
    damageBonusPerStack: 0.00005, // 每层伤害加成百分比
    minEffectiveHunger: 20 // 最小有效饱食度
};

let calculateAndSyncEffectiveFoodCount = (player, swordItemStack) => {
    if (!player || !swordItemStack || swordItemStack.id !== GOURMET_SWORD_CONFIG.id) return;

    let foodCapability = $FoodList.get(player);
    if (foodCapability) {
        let eatenFoodsSet = foodCapability.getEatenFoods();
        let effectiveFoodCount = 0;
        for (let foodInstance of eatenFoodsSet) {
            let item = foodInstance.item;
            let foodProperties = item.getFoodProperties();
            if (foodProperties && foodProperties.getNutrition() > GOURMET_SWORD_CONFIG.minEffectiveHunger) {
                effectiveFoodCount++;
            }
        }
        swordItemStack.getOrCreateTag().putInt(GOURMET_SWORD_CONFIG.nbtKey, effectiveFoodCount);
    }
};

NativeEvents.onEvent(Java.loadClass("net.minecraftforge.event.entity.living.LivingEntityUseItemEvent$Finish"), event => {
    let player = event.getEntity();
    if (!player || !(player instanceof $Player) || player.level.isClientSide()) return;

    let itemStack = event.getItem();
    if (!itemStack.isEdible()) return;

    let swordItemStack = player.getMainHandItem(); // 获取玩家主手物品
    if (!swordItemStack || swordItemStack.id !== GOURMET_SWORD_CONFIG.id) return;

    let newTotalFoodCount = $FoodList.get(player).getEatenFoods().size();
    let oldTotalFoodCount = player.persistentData.getInt(GOURMET_SWORD_CONFIG.pdataKey);

    if (newTotalFoodCount > oldTotalFoodCount) {
        calculateAndSyncEffectiveFoodCount(player, swordItemStack);

        let item = itemStack.item;
        let eatenItemProperties = item.getFoodProperties();

        if (eatenItemProperties && eatenItemProperties.getNutrition() > GOURMET_SWORD_CONFIG.minEffectiveHunger) {
            player.tell(Text.of("§6你品尝了新的美食，这把武器的力量得到增强！"));
        }

        player.persistentData.putInt(GOURMET_SWORD_CONFIG.pdataKey, newTotalFoodCount);
    }
});

NativeEvents.onEvent(Java.loadClass("net.minecraftforge.event.entity.living.LivingHurtEvent"), event => {
    let attackerPlayer = event.source.player;

    if (attackerPlayer && !attackerPlayer.isFake()) {
        let player = attackerPlayer;
        let swordItemStack = player.getMainHandItem(); // 获取玩家主手物品

        if (swordItemStack && swordItemStack.id === GOURMET_SWORD_CONFIG.id) {
            let originalDamage = event.amount;
            let tag = swordItemStack.getOrCreateTag();
            let foodCount = tag.getInt(GOURMET_SWORD_CONFIG.nbtKey);

            let finalDamageMultiplier = 1 - GOURMET_SWORD_CONFIG.baseDamagePenalty + (foodCount * GOURMET_SWORD_CONFIG.damageBonusPerStack);

            let modifiedDamage = originalDamage * finalDamageMultiplier;

            if (Math.abs(modifiedDamage - originalDamage) > 0.001) {
                if (modifiedDamage < 0) modifiedDamage = 0;
                event.setAmount(modifiedDamage);
            }
        }
    }
});

