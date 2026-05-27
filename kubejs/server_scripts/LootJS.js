ServerEvents.fishingLootTables(event => {
    event.addFishing("minecraft:treasure",loot=>{//钓鱼战利品表-宝藏
        loot.addPool(pool=>{
            pool.addItem("minecraft:nautilus_shell")//鹦鹉螺壳
            pool.addItem("minecraft:turtle_egg")//海龟蛋
            pool.addItem("minecraft:heart_of_the_sea")//海洋之心
            pool.addItem("artifacts:anglers_hat")//钓鱼佬帽
            pool.addItem("artifacts:novelty_drinking_hat")//新款饮水帽
            pool.addItem("artifacts:plastic_drinking_hat")//塑料饮水帽
            pool.addItem("artifacts:charm_of_sinking")//下沉护符
            pool.addItem("artifacts:flippers")//脚蹼
            pool.addItem("artifacts:snorkel")//通气管
            pool.addItem("minecraft:diamond")//钻石
            pool.addItem("minecraft:gold_ingot")//金锭
            pool.addItem("minecraft:iron_ingot")//铁锭
            pool.addItem("mermod:sea_crystal")//海洋结晶
            pool.addItem("aether:golden_amber")//金琥珀
            pool.addItem("deep_aether:skyjade")//穹玉
            pool.addItem("aether:zanite_gemstone")//紫晶
            pool.addItem("aether_redux:raw_veridium")//粗辉蓝晶
            pool.addItem("aether:ambrosium_shard")//神能晶片
            pool.addItem("kubejs:enchanted_golden_feather")//金羽毛
            pool.addItem("kubejs:golden_feather")//金羽毛
            pool.addItem("kubejs:compressed_amethyst")//紫水晶币
            pool.addItem("minecraft:prismarine_shard")//海晶碎片
            pool.addItem("minecraft:scute")//鳞甲
        })
    })
})

ServerEvents.fishingLootTables(event => {
    event.addFishing("minecraft:junk",loot=>{//钓鱼战利品表-垃圾
        loot.addPool(pool=>{
            pool.addItem("crockpot:unknown_seeds")//未知种子
            pool.addItem("minecraft:leather")//皮革
            pool.addItem("minecraft:scute")//鳞甲
            pool.addItem("minecraft:coal")//煤炭
            pool.addItem("minecraft:ink_sac")//墨囊
            pool.addItem("minecraft:rabbit_foot")//兔子脚
            pool.addItem("minecraft:kelp")//海带
            pool.addItem("minecraft:prismarine_shard")//海晶碎片
            pool.addItem("minecraft:prismarine_crystals")//海晶砂砾
            pool.addItem("minecraft:gunpowder")//火药
            pool.addItem("quark:crab_leg")//螃蟹腿
        })
    })
})


LootJS.modifiers(event => {
    let lootItem = [
        ['enderitemod:enderite_upgrade_smithing_template', 0.15],//末影合金锻造模板
        ['royalvariations:royal_ender_pearl', 0.4],]//皇家末影珍珠
    lootItem.forEach(([item, chance]) => {event
            .addLootTableModifier('minecraft:chests/end_city_treasure')
            .addLoot([LootEntry.of(item).when(c => c.randomChance(chance))])
    })
})

LootJS.modifiers(event => {
    //定义删除物品,[物品id]
    let removeLoot = [
        ['enderitemod:enderite_upgrade_smithing_template'],//末影合金锻造模板
    ]

     removeLoot.forEach(([item]) => {
         event
             .addLootTableModifier('minecraft:chests/end_city_treasure')
            .removeLoot(item)

     })

})

LootJS.modifiers(event => {
    //定义删除物品,[物品id]
    let removeLoot = [
        ['twilightforest:uncrafting_table'],//拆解台
    ]

     removeLoot.forEach(([item]) => {
         event
             .addLootTableModifier('twilightforest:chests/hill_2')
            .removeLoot(item)

     })
     removeLoot.forEach(([item]) => {
         event
             .addLootTableModifier('twilightforest:chests/graveyard')
            .removeLoot(item)

     })

})


LootJS.modifiers(event => {
    //定义删除物品,[物品id]
    let removeLoot = [
        ['gwrexpansions:tidal_pistol'],//潮汐手枪
    ]

     removeLoot.forEach(([item]) => {
         event
             .addLootTableModifier('gwrexpansions:leviathan')
            .removeLoot(item)

     })

})

LootJS.modifiers((event) => {
    //定义删除物品,[物品id]
    let removeLoot = [
        ['goety:treasure_pouch'],
    ]

     removeLoot.forEach(([item]) => {
         event
    event
        .addEntityLootModifier("goetyawaken:hostile_wildfire")//野火
        .removeLoot(item)
    })
});


LootJS.modifiers(event => {
    let lootItem = [
        ['artifacts:universal_attractor', 0.02],//强力磁铁
        ['artifacts:power_glove', 0.02],//强力手套
        ['artifacts:feral_claws', 0.02],//狂野爪
        ['artifacts:pickaxe_heater', 0.02],//冶矿手套
        ['artifacts:pocket_piston', 0.02],//袖珍活塞
        ['artifacts:running_shoes', 0.02],//跑鞋
        ]
    lootItem.forEach(([item, chance]) => {event
            .addLootTableModifier('dungeoncrawl:chests/stage_5')//地牢战利品
            .addLoot([LootEntry.of(item).when(c => c.randomChance(chance))])
    })
})

LootJS.modifiers((event) => {
    event
        .addLootTableModifier('dungeoncrawl:chests/stage_5')//地牢战利品
        .addWeightedLoot(2, [
            Item.of('kubejs:compressed_amethyst').withChance(25),//紫水晶币
            Item.of('goety:ectoplasm').withChance(50),//灵质
            Item.of('goety:grave_dust').withChance(25),//坟尘
            Item.of('minecraft:bell').withChance(8),//钟
            Item.of('minecraft:goat_horn').withChance(4),
            Item.of('aether:iron_ring').withChance(4),
            Item.of('aether:golden_ring').withChance(4),
            Item.of('aether:iron_pendant').withChance(4),
            Item.of('aether:golden_pendant').withChance(4),
            Item.of('supplementaries:altimeter').withChance(4),
            Item.of('exposure:camera').withChance(4),
            Item.of('trials:ominous_bottle').withChance(4),
            Item.of('friendsandfoes:crab_claw').withChance(4),
        ]);
});

LootJS.modifiers((event) => {
    event
        .addLootTableModifier('dungeoncrawl:chests/stage_4')//地牢战利品
        .addWeightedLoot(2, [
            Item.of('kubejs:compressed_amethyst').withChance(25),//紫水晶币
            Item.of('goety:ectoplasm').withChance(50),//灵质
            Item.of('goety:grave_dust').withChance(25),//坟尘
            Item.of('minecraft:bell').withChance(8),//钟
            Item.of('minecraft:goat_horn').withChance(4),
            Item.of('aether:iron_ring').withChance(4),
            Item.of('aether:golden_ring').withChance(4),
            Item.of('aether:iron_pendant').withChance(4),
            Item.of('aether:golden_pendant').withChance(4),
            Item.of('supplementaries:altimeter').withChance(4),
            Item.of('exposure:camera').withChance(4),
            Item.of('trials:ominous_bottle').withChance(4),
            Item.of('friendsandfoes:crab_claw').withChance(4),
        ]);
});

LootJS.modifiers((event) => {
    event
        .addLootTableModifier('dungeoncrawl:chests/stage_3')//地牢战利品
        .addWeightedLoot(2, [
            Item.of('kubejs:compressed_amethyst').withChance(25),//紫水晶币
            Item.of('goety:ectoplasm').withChance(50),//灵质
            Item.of('goety:grave_dust').withChance(25),//坟尘
            Item.of('minecraft:bell').withChance(8),//钟
            Item.of('minecraft:goat_horn').withChance(4),
            Item.of('aether:iron_ring').withChance(4),
            Item.of('aether:golden_ring').withChance(4),
            Item.of('aether:iron_pendant').withChance(4),
            Item.of('aether:golden_pendant').withChance(4),
            Item.of('supplementaries:altimeter').withChance(4),
            Item.of('exposure:camera').withChance(4),
            Item.of('trials:ominous_bottle').withChance(4),
            Item.of('friendsandfoes:crab_claw').withChance(4),
        ]);
});

LootJS.modifiers((event) => {
    event
        .addLootTableModifier('dungeoncrawl:chests/stage_2')//地牢战利品
        .addWeightedLoot(1, [
            Item.of('kubejs:compressed_amethyst').withChance(25),//紫水晶币
            Item.of('goety:ectoplasm').withChance(50),//灵质
            Item.of('goety:grave_dust').withChance(25),//坟尘
            Item.of('minecraft:bell').withChance(8),//钟
            Item.of('minecraft:goat_horn').withChance(4),
            Item.of('aether:iron_ring').withChance(4),
            Item.of('aether:golden_ring').withChance(4),
            Item.of('aether:iron_pendant').withChance(4),
            Item.of('aether:golden_pendant').withChance(4),
            Item.of('supplementaries:altimeter').withChance(4),
            Item.of('exposure:camera').withChance(4),
            Item.of('trials:ominous_bottle').withChance(4),
            Item.of('friendsandfoes:crab_claw').withChance(4),
        ]);
});

LootJS.modifiers((event) => {
    event
        .addLootTableModifier('dungeoncrawl:chests/stage_1')//地牢战利品
        .addWeightedLoot(1, [
            Item.of('kubejs:compressed_amethyst').withChance(25),//紫水晶币
            Item.of('goety:ectoplasm').withChance(50),//灵质
            Item.of('goety:grave_dust').withChance(25),//坟尘
            Item.of('minecraft:bell').withChance(8),//钟
            Item.of('minecraft:goat_horn').withChance(4),
            Item.of('aether:iron_ring').withChance(4),
            Item.of('aether:golden_ring').withChance(4),
            Item.of('aether:iron_pendant').withChance(4),
            Item.of('aether:golden_pendant').withChance(4),
            Item.of('supplementaries:altimeter').withChance(4),
            Item.of('exposure:camera').withChance(4),
            Item.of('trials:ominous_bottle').withChance(4),
            Item.of('friendsandfoes:crab_claw').withChance(4),
        ]);
});

LootJS.modifiers((event) => {
    event
        .addLootTableModifier('goety:chests/crypt_tomb')//骷髅领主陶瓷坛战利品
        .addWeightedLoot(1, [
            Item.of('goety:fell_blade').withChance(1),//堕落之刃
            Item.of('goety:frozen_blade').withChance(1),//霜冻金属刃
            Item.of('goety:cursed_paladin_helmet').withChance(1),//诅咒圣骑士
            Item.of('goety:cursed_paladin_chestplate').withChance(1),
            Item.of('goety:cursed_paladin_leggings').withChance(1),
            Item.of('goety:cursed_paladin_boots').withChance(1),
        ]);
});

LootJS.modifiers((event) => {
    event
        .addLootTableModifier('minecraft:chests/nether_bridge')//下界
        .addWeightedLoot(3, [
            Item.of('minecraft:netherite_scrap').withChance(30),//下界合金碎片
            Item.of('kubejs:compressed_amethyst').withChance(25),//紫水晶币
            Item.of('goety:ectoplasm').withChance(25),//灵质
            Item.of('goety:grave_dust').withChance(16),//坟尘
            Item.of('minecraft:goat_horn').withChance(4),//山羊角
            Item.of('bosses_of_mass_destruction:soul_star').withChance(8),//灵魂之星
            Item.of('minecraft:netherite_ingot').withChance(4),//下界合金锭
            Item.of('minecraft:netherite_upgrade_smithing_template').withChance(2),//下界合金锻造模板
            Item.of('crockpot:pot_upgrade_smithing_template').withChance(1),//烹饪锅锻造模板
        ]);
});
LootJS.modifiers((event) => {
    event
        .addLootTableModifier('minecraft:chests/bastion_other')
        .addWeightedLoot(3, [
            Item.of('minecraft:netherite_scrap').withChance(30),//下界合金碎片
            Item.of('kubejs:compressed_amethyst').withChance(25),//紫水晶币
            Item.of('goety:ectoplasm').withChance(25),//灵质
            Item.of('goety:grave_dust').withChance(16),//坟尘
            Item.of('minecraft:goat_horn').withChance(4),//山羊角
            Item.of('bosses_of_mass_destruction:soul_star').withChance(8),//灵魂之星
            Item.of('minecraft:netherite_ingot').withChance(4),//下界合金锭
            Item.of('minecraft:netherite_upgrade_smithing_template').withChance(2),//下界合金锻造模板
            Item.of('crockpot:pot_upgrade_smithing_template').withChance(1),//烹饪锅锻造模板
        ]);
});
LootJS.modifiers((event) => {
    event
        .addLootTableModifier('minecraft:chests/bastion_hoglin_stable')
        .addWeightedLoot(3, [
            Item.of('minecraft:netherite_scrap').withChance(30),//下界合金碎片
            Item.of('kubejs:compressed_amethyst').withChance(25),//紫水晶币
            Item.of('goety:ectoplasm').withChance(25),//灵质
            Item.of('goety:grave_dust').withChance(16),//坟尘
            Item.of('minecraft:goat_horn').withChance(4),//山羊角
            Item.of('bosses_of_mass_destruction:soul_star').withChance(8),//灵魂之星
            Item.of('minecraft:netherite_ingot').withChance(4),//下界合金锭
            Item.of('minecraft:netherite_upgrade_smithing_template').withChance(2),//下界合金锻造模板
            Item.of('crockpot:pot_upgrade_smithing_template').withChance(1),//烹饪锅锻造模板
        ]);
});
LootJS.modifiers((event) => {
    event
        .addLootTableModifier('minecraft:chests/bastion_bridge')
        .addWeightedLoot(3, [
            Item.of('minecraft:netherite_scrap').withChance(30),//下界合金碎片
            Item.of('kubejs:compressed_amethyst').withChance(25),//紫水晶币
            Item.of('goety:ectoplasm').withChance(25),//灵质
            Item.of('goety:grave_dust').withChance(16),//坟尘
            Item.of('minecraft:goat_horn').withChance(4),//山羊角
            Item.of('bosses_of_mass_destruction:soul_star').withChance(8),//灵魂之星
            Item.of('minecraft:netherite_ingot').withChance(4),//下界合金锭
            Item.of('minecraft:netherite_upgrade_smithing_template').withChance(2),//下界合金锻造模板
            Item.of('crockpot:pot_upgrade_smithing_template').withChance(1),//烹饪锅锻造模板
        ]);
});
LootJS.modifiers((event) => {
    event
        .addLootTableModifier('minecraft:chests/bastion_treasure')
        .addWeightedLoot(3, [
            Item.of('minecraft:netherite_scrap').withChance(30),//下界合金碎片
            Item.of('kubejs:compressed_amethyst').withChance(25),//紫水晶币
            Item.of('goety:ectoplasm').withChance(25),//灵质
            Item.of('goety:grave_dust').withChance(16),//坟尘
            Item.of('minecraft:goat_horn').withChance(4),//山羊角
            Item.of('bosses_of_mass_destruction:soul_star').withChance(8),//灵魂之星
            Item.of('minecraft:netherite_ingot').withChance(4),//下界合金锭
            Item.of('minecraft:netherite_upgrade_smithing_template').withChance(2),//下界合金锻造模板
            Item.of('crockpot:pot_upgrade_smithing_template').withChance(1),//烹饪锅锻造模板
        ]);
});

LootJS.modifiers(event => {
    let lootItem = [
        ['kubejs:enchanted_golden_feather', 0.1],//附魔金羽毛
        ['minecraft:ender_pearl', 0.15],//末影珍珠
        ['goety:ectoplasm', 0.5], //灵质
        ['goety:grave_dust', 0.2], //坟尘
        ['kubejs:compressed_amethyst', 0.2],//紫水晶币
        ['aether_redux:raw_gravitite', 0.15],//重力晶
        ['aether:zanite_gemstone', 0.3],//紫晶石
        ['aether_treasure_reforging:neptune_mesh', 0.2], //海皇纱
        ['aether_redux:raw_veridium', 0.3],]//粗灰蓝晶
    lootItem.forEach(([item, chance]) => {event
            .addLootTableModifier('aether:chests/dungeon/silver/silver_dungeon')//天境武神神庙
            .addLoot([LootEntry.of(item).when(c => c.randomChance(chance))])
    })
    lootItem.forEach(([item, chance]) => {event
            .addLootTableModifier('aether:chests/dungeon/silver/silver_dungeon_trash')
            .addLoot([LootEntry.of(item).when(c => c.randomChance(chance))])
    })
    lootItem.forEach(([item, chance]) => {event
            .addLootTableModifier('aether:chests/dungeon/silver/silver_dungeon_disc')
            .addLoot([LootEntry.of(item).when(c => c.randomChance(chance))])
    })
})

LootJS.modifiers((event) => {  //暮色森林
    event
        .addLootTableModifier('twilightforest:chests/basement')
        .addWeightedLoot(2, [
            Item.of('twilightforest:liveroot').withChance(25),//活根
            Item.of('kubejs:compressed_amethyst').withChance(25),//紫水晶币
            Item.of('goety:ectoplasm').withChance(50),//灵质
            Item.of('goety:grave_dust').withChance(30),//坟尘
            Item.of('bosses_of_mass_destruction:soul_star').withChance(12),//灵魂之星
            Item.of('twilightforest:charm_of_keeping_1').withChance(10),//保管护符
            Item.of('twilightforest:raw_ironwood').withChance(20),//铁木
            Item.of('twilightforest:steeleaf_ingot').withChance(20),//钢叶
            Item.of('twilightforest:sorting_sapling').withChance(5),//树苗
            Item.of('twilightforest:hollow_oak_sapling').withChance(5),
            Item.of('twilightforest:mining_sapling').withChance(5),
            Item.of('twilightforest:transformation_sapling').withChance(5),
            Item.of('twilightforest:time_sapling').withChance(5),
        ]);
});

LootJS.modifiers((event) => {  //暮色森林
    event
        .addLootTableModifier('twilightforest:chests/tree_cache')
        .addWeightedLoot(2, [
            Item.of('twilightforest:liveroot').withChance(25),//活根
            Item.of('kubejs:compressed_amethyst').withChance(25),//紫水晶币
            Item.of('goety:ectoplasm').withChance(50),//灵质
            Item.of('goety:grave_dust').withChance(30),//坟尘
            Item.of('bosses_of_mass_destruction:soul_star').withChance(12),//灵魂之星
            Item.of('twilightforest:charm_of_keeping_1').withChance(10),//保管护符
            Item.of('twilightforest:raw_ironwood').withChance(20),//铁木
            Item.of('twilightforest:steeleaf_ingot').withChance(20),//钢叶
            Item.of('twilightforest:sorting_sapling').withChance(5),//树苗
            Item.of('twilightforest:hollow_oak_sapling').withChance(5),
            Item.of('twilightforest:mining_sapling').withChance(5),
            Item.of('twilightforest:transformation_sapling').withChance(5),
            Item.of('twilightforest:time_sapling').withChance(5),
        ]);
});

LootJS.modifiers((event) => {  //暮色森林
    event
        .addLootTableModifier('twilightforest:chests/foundation_basement')
        .addWeightedLoot(2, [
            Item.of('twilightforest:liveroot').withChance(25),//活根
            Item.of('kubejs:compressed_amethyst').withChance(25),//紫水晶币
            Item.of('goety:ectoplasm').withChance(50),//灵质
            Item.of('goety:grave_dust').withChance(30),//坟尘
            Item.of('bosses_of_mass_destruction:soul_star').withChance(12),//灵魂之星
            Item.of('twilightforest:charm_of_keeping_1').withChance(10),//保管护符
            Item.of('twilightforest:raw_ironwood').withChance(20),//铁木
            Item.of('twilightforest:steeleaf_ingot').withChance(20),//钢叶
            Item.of('twilightforest:sorting_sapling').withChance(5),//树苗
            Item.of('twilightforest:hollow_oak_sapling').withChance(5),
            Item.of('twilightforest:mining_sapling').withChance(5),
            Item.of('twilightforest:transformation_sapling').withChance(5),
            Item.of('twilightforest:time_sapling').withChance(5),
        ]);
});

LootJS.modifiers((event) => {  //暮色森林
    event
        .addLootTableModifier('twilightforest:chests/hill_1')
        .addWeightedLoot(2, [
            Item.of('twilightforest:liveroot').withChance(25),//活根
            Item.of('kubejs:compressed_amethyst').withChance(25),//紫水晶币
            Item.of('goety:ectoplasm').withChance(50),//灵质
            Item.of('goety:grave_dust').withChance(30),//坟尘
            Item.of('bosses_of_mass_destruction:soul_star').withChance(12),//灵魂之星
            Item.of('twilightforest:charm_of_keeping_1').withChance(10),//保管护符
            Item.of('twilightforest:raw_ironwood').withChance(20),//铁木
            Item.of('twilightforest:steeleaf_ingot').withChance(20),//钢叶
            Item.of('twilightforest:sorting_sapling').withChance(5),//树苗
            Item.of('twilightforest:hollow_oak_sapling').withChance(5),
            Item.of('twilightforest:mining_sapling').withChance(5),
            Item.of('twilightforest:transformation_sapling').withChance(5),
            Item.of('twilightforest:time_sapling').withChance(5),
        ]);
});
LootJS.modifiers((event) => {  //暮色森林
    event
        .addLootTableModifier('twilightforest:chests/hill_2')
        .addWeightedLoot(2, [
            Item.of('twilightforest:liveroot').withChance(25),//活根
            Item.of('kubejs:compressed_amethyst').withChance(25),//紫水晶币
            Item.of('goety:ectoplasm').withChance(50),//灵质
            Item.of('goety:grave_dust').withChance(30),//坟尘
            Item.of('bosses_of_mass_destruction:soul_star').withChance(12),//灵魂之星
            Item.of('twilightforest:charm_of_keeping_1').withChance(10),//保管护符
            Item.of('twilightforest:raw_ironwood').withChance(20),//铁木
            Item.of('twilightforest:steeleaf_ingot').withChance(20),//钢叶
            Item.of('twilightforest:sorting_sapling').withChance(5),//树苗
            Item.of('twilightforest:hollow_oak_sapling').withChance(5),
            Item.of('twilightforest:mining_sapling').withChance(5),
            Item.of('twilightforest:transformation_sapling').withChance(5),
            Item.of('twilightforest:time_sapling').withChance(5),
        ]);
});
LootJS.modifiers((event) => {  //暮色森林
    event
        .addLootTableModifier('twilightforest:chests/hill_3')
        .addWeightedLoot(2, [
            Item.of('twilightforest:liveroot').withChance(25),//活根
            Item.of('kubejs:compressed_amethyst').withChance(25),//紫水晶币
            Item.of('goety:ectoplasm').withChance(50),//灵质
            Item.of('goety:grave_dust').withChance(30),//坟尘
            Item.of('bosses_of_mass_destruction:soul_star').withChance(12),//灵魂之星
            Item.of('twilightforest:charm_of_keeping_1').withChance(10),//保管护符
            Item.of('twilightforest:raw_ironwood').withChance(20),//铁木
            Item.of('twilightforest:steeleaf_ingot').withChance(20),//钢叶
            Item.of('twilightforest:sorting_sapling').withChance(5),//树苗
            Item.of('twilightforest:hollow_oak_sapling').withChance(5),
            Item.of('twilightforest:mining_sapling').withChance(5),
            Item.of('twilightforest:transformation_sapling').withChance(5),
            Item.of('twilightforest:time_sapling').withChance(5),
        ]);
});



LootJS.modifiers(event => {
    let lootItem = [
        ['goety:ectoplasm', 0.5], //灵质
        ['goety:grave_dust', 0.2], //坟尘
        ['aether:phoenix_bow', 0.05],//凤舞长弓
        ['aether:flaming_sword', 0.05],//烈焰长剑
        ['aether:phoenix_gloves', 0.05],//凤凰护手
        ['aether:phoenix_helmet', 0.05],//凤凰防具
        ['aether:phoenix_chestplate', 0.05],
        ['aether:phoenix_leggings', 0.05],
        ['aether:phoenix_boots', 0.05],]
    lootItem.forEach(([item, chance]) => {event
            .addLootTableModifier('lost_aether_content:chests/platinum_treasure_loot')//铂金地牢
            .addLoot([LootEntry.of(item).when(c => c.randomChance(chance))])})
})

LootJS.modifiers(event => {
    let lootItem = [
        ['goety:ectoplasm', 0.5], //灵质
        ['goety:grave_dust', 0.2], //坟尘
        ['aether:shield_of_repulsion', 0.05], //反击之盾
        ['xercamusic:god', 0.1], //上帝之音
        ['deep_aether:spooky_ring', 0.05],] //诡异之戒
    lootItem.forEach(([item, chance]) => {event
            .addLootTableModifier('deep_aether:chests/dungeon/brass/brass_dungeon_reward')//黄铜地牢
            .addLoot([LootEntry.of(item).when(c => c.randomChance(chance))])})})
LootJS.modifiers(event => {
    let lootItem = [
        ['goety:ectoplasm', 0.5], //灵质
        ['goety:grave_dust', 0.2], //坟尘
        ['xercamusic:god', 0.1], //上帝之音
        ['aether:shield_of_repulsion', 0.05], //反击之盾
        ['aether:hammer_of_kingbdogz', 0.05], //创世者之锤
        ['deep_aether:spooky_ring', 0.05],]
    lootItem.forEach(([item, chance]) => {event
            .addLootTableModifier('aether:chests/dungeon/silver/silver_dungeon_reward')//白银地牢
            .addLoot([LootEntry.of(item).when(c => c.randomChance(chance))])})})
            
LootJS.modifiers(event => {
    let lootItem = [
        ['aether:phoenix_bow', 0.05],//凤舞长弓
        ['aether:flaming_sword', 0.05],//烈焰长剑
        ['aether:phoenix_gloves', 0.05],//凤凰护手
        ['aether:shield_of_repulsion', 0.05], //反击之盾
        ['goety:ectoplasm', 0.5], //灵质
        ['goety:grave_dust', 0.2], //坟尘
        ['xercamusic:god', 0.1], //上帝之音
        ['deep_aether:spooky_ring', 0.05],]
    lootItem.forEach(([item, chance]) => {event
            .addLootTableModifier('aether:chests/dungeon/gold/gold_dungeon_reward')//黄金地牢
            .addLoot([LootEntry.of(item).when(c => c.randomChance(chance))])})})
LootJS.modifiers(event => {
    let lootItem = [
        ['goety:ectoplasm', 0.5], //灵质
        ['goety:grave_dust', 0.2], //坟尘
        ['aether:shield_of_repulsion', 0.05], //反击之盾
        ['xercamusic:god', 0.1], //上帝之音
        ['deep_aether:spooky_ring', 0.1],]
    lootItem.forEach(([item, chance]) => {event
            .addLootTableModifier('lost_aether_content:chests/platinum_treasure_loot')//铂金地牢
            .addLoot([LootEntry.of(item).when(c => c.randomChance(chance))])})})

LootJS.modifiers(event => {
    //定义删除物品,[物品id]
    let removeLoot = [
        ['enderitemod:enderite_upgrade_smithing_template'],//末影合金锻造模板
    ]

     removeLoot.forEach(([item]) => {
         event
             .addLootTableModifier('minecraft:chests/end_city_treasure')
            .removeLoot(item)

     })


})

LootJS.modifiers((event) => {

    //定义删除物品,[物品id]
    let removeLoot = [
        ['minecraft:gold_ingot'],
        ['minecraft:emerald'],
        ['minecraft:book'],
        ['minecraft:golden_apple'],
        ['minecraft:experience_bottle'],
        ['minecraft:enchanted_golden_apple'],
    ]

     removeLoot.forEach(([item]) => {
         event
             .addLootTableModifier('goety:gameplay/treasure_pouch')
            .removeLoot(item)

     })

    event
        .addLootTableModifier('goety:gameplay/treasure_pouch')//宝藏袋
        .addWeightedLoot(9, [
            Item.of('goety:thunderbolt_focus').withChance(5),//聚晶
            Item.of('goety:shocking_focus').withChance(5),//聚晶
            Item.of('goety:razor_wind_focus').withChance(5),//聚晶
            Item.of('goety:updraft_focus').withChance(5),//聚晶
            Item.of('goety:earth_punch_focus').withChance(5),//聚晶
            Item.of('goety:quaking_focus').withChance(5),//聚晶
            Item.of('goety:osseous_focus').withChance(5),//聚晶
            Item.of('goety:rotting_focus').withChance(5),//聚晶
            Item.of('goety:blizzard_focus').withChance(5),//聚晶
            Item.of('goety:ice_spike_focus').withChance(5),//聚晶
            Item.of('goety_cataclysm:water_spear_focus').withChance(5),//聚晶
            Item.of('goety:tidal_focus').withChance(5),//聚晶
            Item.of('goety:lavaball_focus').withChance(5),//聚晶
            Item.of('goety:bombardment_focus').withChance(5),//聚晶
            Item.of('goety:magic_bolt_focus').withChance(5),//聚晶
            Item.of('goety_cataclysm:void_rune_focus').withChance(5),//聚晶

            Item.of('goety:teeth_focus').withChance(5),//聚晶
            Item.of('goety:biting_focus').withChance(5),//聚晶
            Item.of('goety:arrow_rain_focus').withChance(5),//聚晶
            Item.of('goety:iron_hide_focus').withChance(5),//聚晶
            Item.of('goety:bulwark_focus').withChance(5),//聚晶
            Item.of('goety:soul_heal_focus').withChance(5),//聚晶
            Item.of('goety:weakening_focus').withChance(5),//聚晶
            Item.of('goety:chilling_focus').withChance(5),//聚晶

            Item.of('goety:electrocute_focus').withChance(5),
            Item.of('goety:surging_focus').withChance(5),
            Item.of('goety:leeching_focus').withChance(5),
            Item.of('goety:reaping_focus').withChance(5),
            Item.of('goety:water_jet_focus').withChance(5),
            Item.of('goety:water_whip_focus').withChance(5),

            Item.of('goety:blazing_focus').withChance(5),
            Item.of('goety:ghastly_focus').withChance(5),
            Item.of('goetyawaken:shulker_missile_focus').withChance(5),
            Item.of('goetyawaken:stare_focus').withChance(5),
            Item.of('goety:end_walk_focus').withChance(5),

            Item.of('goety:prisma_beam_focus').withChance(5),
            Item.of('goety:steaming_focus').withChance(5),
            Item.of('goety:swarm_focus').withChance(5),
            Item.of('goety:poison_dart_focus').withChance(5),
            Item.of('goety:mauling_focus').withChance(5),

            Item.of('goety:ice_spike_focus').withChance(5),
            Item.of('goety:frost_breath_focus').withChance(5),
            Item.of('goety:frostborn_focus').withChance(5),
            Item.of('goetyawaken:infestation_focus').withChance(5),
            Item.of('goety_cataclysm:earth_shake_focus').withChance(5),
            Item.of('goety_cataclysm:amethyst_cluster_focus').withChance(5),

            Item.of('goety:overgrowth_focus').withChance(5),
            Item.of('goety:blossoming_focus').withChance(5),
            Item.of('goety:shockwave_focus').withChance(5),
            Item.of('goety:skull_focus').withChance(5),
            Item.of('goety:ice_storm_focus').withChance(5),
            Item.of('goety:eruption_focus').withChance(5),
            Item.of('goety:hail_focus').withChance(5),
            Item.of('goety:iceology_focus').withChance(5),
            //Item.of('goety:frost_nova_focus').withChance(5), //霜冻新星

            Item.of('goety:thunderstorm_focus').withChance(5),
            Item.of('goety:lightning_focus').withChance(5),
            Item.of('goety:bolting_focus').withChance(5),
            Item.of('goety:discharge_focus').withChance(5),
            Item.of('goety:monsoon_focus').withChance(5),
            Item.of('goety:cyclone_focus').withChance(5),
            Item.of('goety:flying_focus').withChance(5),
            Item.of('goety:entangling_focus').withChance(5),

            Item.of('goety:bouncy_bubble_focus').withChance(5),
            Item.of('goety:trident_storm_focus').withChance(5),
            Item.of('goety:biomine_focus').withChance(5),
            Item.of('goety:meteor_shower_focus').withChance(5),
            Item.of('goety:magma_bomb_focus').withChance(5),
            Item.of('goety:fire_blast_focus').withChance(5),
            Item.of('goety:flame_strike_focus').withChance(5),
            Item.of('goety:blink_focus').withChance(5),
            Item.of('goety:watching_focus').withChance(5),
            Item.of('goety:blasting_focus').withChance(5),
            Item.of('goety:snaring_focus').withChance(5),
            Item.of('goety:vexing_focus').withChance(5),
        

            Item.of('goety:ominous_staff').withChance(4),//法杖
            Item.of('goety:nether_staff').withChance(4),
            Item.of('goety:necro_staff').withChance(4),
            Item.of('goety:geo_staff').withChance(4),
            Item.of('goety:wind_staff').withChance(4),
            Item.of('goety:storm_staff').withChance(4),
            Item.of('goety:frost_staff').withChance(4),
            Item.of('goety:wild_staff').withChance(4),
            Item.of('goety:abyss_staff').withChance(4),
            Item.of('goety:void_staff').withChance(4),

            Item.of('goety:grave_dust').withChance(60),//坟尘
            Item.of('goety:jade').withChance(40),//玉
            Item.of('goety:ectoplasm').withChance(40),//灵质
            Item.of('goety:dark_ingot').withChance(60),//黑暗金属锭
            Item.of('goety:forbidden_piece').withChance(80),//禁书碎片
            Item.of('goety:forbidden_fragment').withChance(20),//禁书片段
            Item.of('bosses_of_mass_destruction:soul_star').withChance(10),//灵魂之星
            Item.of('goetyawaken:glowing_ember').withChance(4),//辉光余烬
            Item.of('deep_aether:spooky_ring').withChance(4),//诡异之戒
            Item.of('aether_redux:ring_of_construction').withChance(4),//构造之戒
            Item.of('lost_aether_content:agility_boots').withChance(4),//敏捷之靴
            Item.of('aether_redux:vampire_amulet').withChance(4),//吸血鬼护身符
            Item.of('aether:iron_bubble').withChance(4),//坚铁气泡
            Item.of('aether:shield_of_repulsion').withChance(4),//反击之盾
        ]);

    event
        .addLootTableModifier('goetyawaken:chests/mirage')//荒漠迷城
        .addWeightedLoot(1, [
            Item.of('goetyawaken:royal_scroll').withChance(10),//支配卷轴
            Item.of('goety:grave_dust').withChance(45),//坟尘
            Item.of('goety:ectoplasm').withChance(40),//灵质
            Item.of('goety:dark_ingot').withChance(40),//黑暗金属锭
            Item.of('goety:forbidden_piece').withChance(60),//禁书碎片
            Item.of('goety:forbidden_fragment').withChance(5),//禁书片段
        ]);
});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("cataclysm:maledictus")//咒翼灵骸
        .addWeightedLoot(1, [
            Item.of('cataclysm:berserker_soul_amulet').withChance(10),
            Item.of('cataclysm:ring_of_grudged').withChance(10),
            Item.of('cataclysm:sturdy_boots').withChance(10),
        ]);
});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("cataclysm:ancient_remnant")//远古遗魂
        .addWeightedLoot(1, [
            Item.of('cataclysm:unbreakable_skull').withChance(20),
            Item.of('cataclysm:vitality_ankh').withChance(10),
        ]);
});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("goety:vizier")//灾厄宰相
        .addWeightedLoot(1, [
            Item.of('goety:soul_ruby').withChance(50),
            Item.of('minecraft:totem_of_undying').withChance(50),
        ]);
});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("goetyawaken:hostile_wildfire")//野火
        .addWeightedLoot(3, [
            Item.of('friendsandfoes:wildfire_crown_fragment').withChance(50),
            Item.of('minecraft:blaze_rod').withChance(50),
        ]);
});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("goety:brood_mother")//育母蜘蛛
        .addWeightedLoot(1, [
            Item.of("goety:fanged_dagger").withChance(100),
        ]);
});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("goety:brood_mother")//育母蜘蛛
        .addWeightedLoot(1, [
            Item.of('artifacts:antidote_vessel').withChance(10),
            Item.of('artifacts:thorn_pendant').withChance(10),
            Item.of('artifacts:digging_claws').withChance(10),
            Item.of('obscure_api:astral_dust').withChance(10),
        ]);
});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("goety:crone")//巫婆
        .addWeightedLoot(1, [
            Item.of('artifacts:antidote_vessel').withChance(10),
            Item.of('artifacts:thorn_pendant').withChance(10),
            Item.of('artifacts:digging_claws').withChance(10),
            Item.of('obscure_api:astral_dust').withChance(10),
        ]);
});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("goetyawaken:nameless_one")//无名者
        .addWeightedLoot(1, [
            Item.of('goetyawaken:glowing_ember').withChance(100),
        ]);
});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("aether:cockatrice")//鸡蛇
        .addWeightedLoot(1, [
            Item.of('aether_redux:cockatrice_feather').withChance(5),//鸡蛇羽毛
            Item.of('minecraft:bone').withChance(95),//骨头
        ]);
});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("goety:wither_necromancer")//凋零死灵法师
        .addWeightedLoot(3, [
            Item.of("goetyawaken:mucilage").withChance(50),//粘质
            Item.of('goety:grave_dust').withChance(50),//坟尘
        ]);
});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("goetyawaken:parched_necromancer")//焦骸死灵法师
        .addWeightedLoot(3, [
            Item.of("goetyawaken:mucilage").withChance(40),//粘质
            Item.of('goety:grave_dust').withChance(60),//坟尘
        ]);
});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("goetyawaken:wraith_necromancer")//幽魂死灵法师
        .addWeightedLoot(3, [
            Item.of("goetyawaken:mucilage").withChance(40),//粘质
            Item.of('goety:grave_dust').withChance(60),//坟尘
        ]);
});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("radiation_zone_reborn:radiation_skeleton")//辐化骷髅
        .addWeightedLoot(4, [
            Item.of("radiation_zone_reborn:radiated_bone").withChance(50),
            Item.of("radiation_zone_reborn:wastefiber").withChance(20),
            Item.of('goety:ectoplasm').withChance(15),//灵质
            Item.of("radiation_zone_reborn:protective_clothing_fabric").withChance(20)
        ]);
});
LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("mutantmonsters:mutant_enderman")//突变末影人
        .addWeightedLoot(1, [
            Item.of("mutantmonsters:endersoul_hand").withChance(10),
            Item.of("minecraft:ender_eye").withChance(35),
            Item.of("cataclysm:void_jaw").withChance(55),
        ]);
});
LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("radiation_zone_reborn:dustorm")//沙尘人
        .addWeightedLoot(1, [
            Item.of("radiation_zone_reborn:dust_rod").withChance(95),
            Item.of("radiation_zone_reborn:dustorm_head").withChance(5)
        ]);
});
LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("radiation_zone_reborn:greater_dustorm")//大型沙尘人
        .addWeightedLoot(1, [
            Item.of("radiation_zone_reborn:dust_rod").withChance(85),
            Item.of("radiation_zone_reborn:dustorm_head").withChance(15)
        ]);
});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("aethermobs:guardianangel")//守护天使
        .addWeightedLoot(1, [
            Item.of("aethermobs:citykey").withChance(10),
            Item.of("aether_redux:raw_gravitite").withChance(30),
            Item.of("obscure_api:astral_dust").withChance(60)
        ]);
});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("twilightforest:king_spider")//国王蜘蛛
        .addWeightedLoot(1, [
            Item.of('royalvariations:spiritual_crown_shard').withChance(10),
            Item.of('goety:ectoplasm').withChance(90)
        ]);
});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("radiation_zone_reborn:silver_calamity")//银质灾祸
        .addWeightedLoot(1, [
            Item.of("kubejs:silver_protection").withChance(100)
        ]);
});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("radiation_zone_reborn:sandstone_wither")//砂岩凋灵
        .addWeightedLoot(3, [
            Item.of("radiation_zone_reborn:dustorm_head").withChance(40),
            Item.of("obscure_api:astral_dust").withChance(60)
        ]);
});



LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("radiation_zone_reborn:decayed_totem")//腐衰图腾
        .addWeightedLoot(8, [
            Item.of("radiation_zone_reborn:giantrock_ingot").withChance(80),
            Item.of("obscure_api:astral_dust").withChance(20),
        ]);
});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("ba_bt:land_golem")//大地守卫
        .addWeightedLoot(1, [
            Item.of("quark:diamond_heart").withChance(1)
        ]);
});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("ba_bt:land_golem")//大地守卫
        .addWeightedLoot(2, [
            Item.of('obscure_api:astral_dust').withChance(60),
            Item.of("quark:diamond_heart").withChance(40),
            Item.of("deep_aether:blade_of_luck").withChance(20),
            Item.of("aether:flaming_sword").withChance(20)
        ]);
});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("ba_bt:ocean_golem")//海洋守卫
        .addWeightedLoot(2, [
            Item.of('obscure_api:astral_dust').withChance(60),
            Item.of("aether:flaming_sword").withChance(20),
            Item.of("deep_aether:blade_of_luck").withChance(20),
            Item.of("minecraft:heart_of_the_sea").withChance(40)
        ]);
});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("ba_bt:core_golem")//炉心守卫
        .addWeightedLoot(2, [
            Item.of('obscure_api:astral_dust').withChance(60),
            Item.of("aether:flaming_sword").withChance(20),
            Item.of("deep_aether:blade_of_luck").withChance(20)
        ]);
});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("mutantmore:mutant_frozen_zombie")//突变冰封僵尸
        .addWeightedLoot(9, [
            Item.of("radiation_zone_reborn:sedisilver_ingot").withChance(80),
            Item.of("obscure_api:astral_dust").withChance(20)
        ]);
});
LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("mutantmore:mutant_jungle_zombie")//突变丛林僵尸
        .addWeightedLoot(10, [
            Item.of("radiation_zone_reborn:sedisilver_ingot").withChance(80),
            Item.of("obscure_api:astral_dust").withChance(20)
        ]);
});
LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("mutantmore:mutant_husk")//突变尸壳
        .addWeightedLoot(8, [
            Item.of("radiation_zone_reborn:sedisilver_ingot").withChance(80),
            Item.of("obscure_api:astral_dust").withChance(20)
        ]);
});
LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("mutantmore:mutant_husk")//突变潜影贝
        .addWeightedLoot(5, [
            Item.of("mutantmore:mutant_shulker").withChance(60),
            Item.of("obscure_api:astral_dust").withChance(40)
        ]);
});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("twilightforest:skeleton_druid")//骷髅德鲁伊
        .addWeightedLoot(1, [
            Item.of('goety:grave_dust').withChance(5),//坟尘
            Item.of('goety:ectoplasm').withChance(15),//灵质
            Item.of("twilightforest:torchberries").withChance(50),
            Item.of("twilightforest:raven_feather").withChance(20),
            Item.of("twilightforest:liveroot").withChance(10)
        ]);
});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:wither")//凋灵下界合金
        .addWeightedLoot(5, [
            Item.of("minecraft:netherite_scrap").withChance(70),
            Item.of("obscure_api:astral_dust").withChance(30)
        ]);
});

LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("minecraft:gravel") //为沙砾添加Modifier
        .randomChance(0.3)                                    //概率为30%
        .addLoot("minecraft:gunpowder");});          //掉落内容为火药

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("friendsandfoes:wildfire")//野火
        .addWeightedLoot(4, [
            Item.of("minecraft:netherite_scrap").withChance(50),
            Item.of("minecraft:blaze_rod").withChance(30),
            Item.of('bosses_of_mass_destruction:soul_star').withChance(15),
            Item.of("obscure_api:astral_dust").withChance(20)
        ]);
});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("mutantmore:mutant_hoglin")//突变疣猪兽
        .addWeightedLoot(4, [
            Item.of("minecraft:netherite_scrap").withChance(80),
            Item.of('bosses_of_mass_destruction:soul_star').withChance(15),
            Item.of("obscure_api:astral_dust").withChance(20)
        ]);
});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("mutantmore:mutant_blaze")//突变烈焰人
        .addWeightedLoot(4, [
            Item.of("minecraft:netherite_scrap").withChance(80),
            Item.of('bosses_of_mass_destruction:soul_star').withChance(15),
            Item.of("obscure_api:astral_dust").withChance(20)
        ]);
});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("mutantmore:mutant_wither_skeleton")//突变凋零骷髅
        .addWeightedLoot(5, [
            Item.of("minecraft:netherite_scrap").withChance(80),
            Item.of('bosses_of_mass_destruction:soul_star').withChance(15),
            Item.of("obscure_api:astral_dust").withChance(20)
        ]);
});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("twilightforest:snow_queen")//冰雪女王
        .addWeightedLoot(2, [
            Item.of("twilightforest:moonworm_queen").withChance(10),
            Item.of("twilightforest:peacock_feather_fan").withChance(10),
            Item.of("twilightforest:moon_dial").withChance(10),
            Item.of("artifacts:crystal_heart").withChance(10),
            Item.of("artifacts:snowshoes").withChance(10),
            Item.of("obscure_api:astral_dust").withChance(50)
        ]);
});  

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("twilightforest:hydra")//九头蛇
        .addWeightedLoot(2, [
            Item.of("twilightforest:moonworm_queen").withChance(10),
            Item.of("twilightforest:peacock_feather_fan").withChance(10),
            Item.of("twilightforest:moon_dial").withChance(10),
            Item.of("artifacts:power_glove").withChance(10),
            Item.of("artifacts:steadfast_spikes").withChance(10),
            Item.of('artifacts:running_shoes').withChance(10),
            Item.of("obscure_api:astral_dust").withChance(40)
        ]);
});  

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("better_minoshroomtaur:better_minoshroomtaur")//超级米诺菇
        .addWeightedLoot(2, [
            Item.of("twilightforest:moonworm_queen").withChance(10),
            Item.of("twilightforest:peacock_feather_fan").withChance(10),
            Item.of("twilightforest:moon_dial").withChance(10),
            Item.of("artifacts:power_glove").withChance(10),
            Item.of("artifacts:steadfast_spikes").withChance(10),
            Item.of('artifacts:running_shoes').withChance(10),
            Item.of("obscure_api:astral_dust").withChance(40)
        ]);
});  

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("twilightforest:lich")//巫妖
        .addWeightedLoot(2, [
            Item.of('goety:grave_dust').withChance(35),//坟尘
            Item.of('goety:ectoplasm').withChance(40),//灵质
            Item.of("artifacts:scarf_of_invisibility").withChance(5),
            Item.of("artifacts:vampiric_glove").withChance(5),
            Item.of("twilightforest:moonworm_queen").withChance(5),
            Item.of("twilightforest:peacock_feather_fan").withChance(5),
            Item.of("twilightforest:moon_dial").withChance(5),
        ]);
});  

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("twilightforest:knight_phantom")//幻影骑士
        .addWeightedLoot(3, [
            Item.of("twilightforest:armor_shard").withChance(90),
            Item.of("twilightforest:armor_shard_cluster").withChance(10)
        ]);
}); 

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("cataclysm:ender_guardian")//末影守卫
        .addWeightedLoot(6, [
            Item.of("cataclysm:void_core").withChance(10),
            Item.of('royalvariations:royal_ender_pearl').withChance(20),
            Item.of("enderitemod:enderite_upgrade_smithing_template").withChance(10),
            Item.of("enderitemod:enderite_scrap").withChance(60)
        ]);
});  

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:ender_dragon")//末影龙
        .addWeightedLoot(1, [
            Item.of("ba_bt:end_monolith_key").withChance(100)
        ]);
});  

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("cataclysm:ender_guardian")//末影守卫
        .addWeightedLoot(1, [
            Item.of("ba_bt:end_monolith_key").withChance(100)
        ]);
});  
LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("meetyourfight:rosalyne")//罗莎琳
        .addWeightedLoot(1, [
            Item.of("ba_bt:end_monolith_key").withChance(100)
        ]);
});  

LootJS.modifiers(event => {
    let lootItem = [
        ['ba_bt:end_monolith_key', 1.0],]
    lootItem.forEach(([item, chance]) => {event
            .addLootTableModifier('bosses_of_mass_destruction:chests/obsidilith')//黑曜石巨柱
            .addLoot([LootEntry.of(item).when(c => c.randomChance(chance))])})
})


LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("cataclysm:the_leviathan")//利维坦
        .addWeightedLoot(1, [
            Item.of("gwrexpansions:tidal_pistol").withChance(50),
            Item.of("obscure_api:astral_dust").withChance(50),
        ]);
});  

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("meetyourfight:rosalyne")//罗莎琳
        .addWeightedLoot(5, [
            Item.of("obscure_api:astral_dust").withChance(40),
            Item.of("enderitemod:enderite_scrap").withChance(60)
        ]);
});  

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("eeeabsmobs:immortal")//不朽者
        .addWeightedLoot(1, [
            Item.of("eeeabsmobs:ghost_warrior_upgrade_smithing_template").withChance(100)
        ]);
});  

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("eeeabsmobs:immortal")//不朽者
        .addWeightedLoot(3, [
            Item.of('eeeabsmobs:ghost_steel_ingot').withChance(100)
        ]);
});  

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("cataclysm:netherite_monstrosity")//下界合金巨兽
        .addWeightedLoot(8, [
            Item.of("minecraft:netherite_scrap").withChance(70),
            Item.of("obscure_api:astral_dust").withChance(30)
        ]);
}); 

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("aether:slider")//滑行魔石
        .addWeightedLoot(1, [
            Item.of("deep_aether:slider_eye").withChance(15),
            Item.of("aether_redux:raw_gravitite").withChance(85)
        ]);
}); 

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("deep_aether:eots_controller")//狂瞳龙卷
        .addWeightedLoot(1, [
            Item.of("deep_aether:floaty_scarf").withChance(15),
            Item.of("aether:life_shard").withChance(15),
            Item.of("aether_redux:raw_gravitite").withChance(70)
        ]);
}); 

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("aether:valkyrie_queen")//武神女王
        .addWeightedLoot(1, [
            Item.of("deep_aether:medal_of_honor").withChance(15),
            Item.of("lost_aether_content:agility_boots").withChance(15),
            Item.of("lost_aether_content:swetty_mask").withChance(15),
            Item.of("aether:valkyrie_lance").withChance(15),
            Item.of("aether:life_shard").withChance(15),
            Item.of("aether_redux:raw_gravitite").withChance(25)
        ]);
}); 

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("aether:sun_spirit")//烈阳巨灵
        .addWeightedLoot(1, [
            Item.of("deep_aether:sun_core").withChance(15),
            Item.of("lost_aether_content:flaming_gemstone").withChance(15),
            Item.of("aether:life_shard").withChance(15),
            Item.of("aether_redux:raw_gravitite").withChance(55)
        ]);
}); 

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("legendary_monsters:cloud_golem")//云筑魔像
        .addWeightedLoot(4, [
            Item.of("deep_aether:sterling_aercloud").withChance(60),
            Item.of("aether:life_shard").withChance(10),
            Item.of("aether_redux:raw_gravitite").withChance(30)
        ]);
}); 

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("legendary_monsters:hovering_hurricane")//飓旋
        .addWeightedLoot(1, [
            Item.of("aether_treasure_reforging:neptune_mesh").withChance(15),
            Item.of("aether_redux:raw_gravitite").withChance(85)
        ]);
}); 

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("lost_aether_content:aerwhale_king")//帝王云鲸
        .addWeightedLoot(1, [
            Item.of("deep_aether:aerwhale_saddle").withChance(15),
            Item.of("aether_redux:raw_gravitite").withChance(85)
        ]);
}); 


LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:warden")//坚守者回响碎片
        .addLoot("1x minecraft:echo_shard");});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:skeleton")//骷髅
        .addWeightedLoot(3, [
            Item.of("minecraft:iron_ingot").withChance(5),
            Item.of("goety:grave_dust").withChance(10),
            Item.of("minecraft:arrow").withChance(85)
        ]);
});  
LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("twilightforest:minoshroom")//米诺菇迷宫蘑菇
        .addLoot("2x better_minoshroomtaur:maze_mushroom");});
        
LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("legendarycreatures:scorpion")//蝎子
        .addWeightedLoot(1, [
            Item.of("artifacts:vampiric_glove").withChance(5),
            Item.of("artifacts:panic_necklace").withChance(5),
            Item.of("artifacts:thorn_pendant").withChance(5),
            Item.of("minecraft:rotten_flesh").withChance(85)
        ]);
});     
LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("legendarycreatures:scarecrow")//稻草人
        .addWeightedLoot(1, [
            Item.of("artifacts:villager_hat").withChance(5),
            Item.of("artifacts:onion_ring").withChance(5),
            Item.of("minecraft:wheat").withChance(90)
        ]);
});       
LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("legendarycreatures:hound")//森林猎犬
        .addWeightedLoot(1, [
            Item.of("artifacts:rooted_boots").withChance(4),
            Item.of("artifacts:feral_claws").withChance(4),
            Item.of("minecraft:bone").withChance(60),
            Item.of("minecraft:leather").withChance(32)
        ]);
});
LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("legendarycreatures:peacock_spider")//孔雀蜘蛛
        .addWeightedLoot(1, [
            Item.of("artifacts:steadfast_spikes").withChance(4),
            Item.of("artifacts:digging_claws").withChance(4),
            Item.of("minecraft:string").withChance(92)
        ]);
});
LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:elder_guardian")//远古守卫者
        .addWeightedLoot(1, [
            Item.of("artifacts:charm_of_sinking").withChance(10),
            Item.of("artifacts:shock_pendant").withChance(10),
            Item.of("artifacts:flippers").withChance(10),
            Item.of("obscure_api:astral_dust").withChance(10),
            Item.of("minecraft:nautilus_shell").withChance(30),
            Item.of("minecraft:heart_of_the_sea").withChance(30)
        ]);
});
LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("ba_bt:ocean_golem")//海洋守卫
        .addWeightedLoot(1, [
            Item.of("artifacts:charm_of_sinking").withChance(10),
            Item.of("artifacts:shock_pendant").withChance(10),
            Item.of("artifacts:flippers").withChance(10),
            Item.of("artifacts:anglers_hat").withChance(10),
            Item.of("minecraft:nautilus_shell").withChance(60),
        ]);
});
LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("mutantmonsters:mutant_creeper")//苦力怕突变体
        .addWeightedLoot(1, [
            Item.of("mutantmonsters:creeper_shard").withChance(40),
            Item.of("obscure_api:astral_dust").withChance(60)
        ]);
});     

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("cataclysm:endermaptera")//末影甲虫
        .addWeightedLoot(1, [
            Item.of("minecraft:ender_pearl").withChance(40),
            Item.of("cataclysm:void_jaw").withChance(60)
        ]);
});    
LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("ba_bt:core_golem")//炉心守卫
        .addWeightedLoot(1, [
            Item.of("artifacts:obsidian_skull").withChance(10),
            Item.of("artifacts:flame_pendant").withChance(10),
            Item.of("artifacts:fire_gauntlet").withChance(10),
            Item.of("artifacts:helium_flamingo").withChance(10),
            Item.of("minecraft:netherite_scrap").withChance(60)
        ]);
});
LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:piglin_brute")//猪灵蛮兵
        .addWeightedLoot(1, [
            Item.of("artifacts:obsidian_skull").withChance(3),
            Item.of("artifacts:flame_pendant").withChance(3),
            Item.of("artifacts:fire_gauntlet").withChance(3),
            Item.of("artifacts:helium_flamingo").withChance(3),
            Item.of("obscure_api:astral_dust").withChance(13),
            Item.of("minecraft:gold_ingot").withChance(30),
            Item.of("minecraft:netherite_scrap").withChance(45)
        ]);
});
LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:evoker")//唤魔者
        .addWeightedLoot(1, [
            Item.of("artifacts:whoopee_cushion").withChance(15),
            Item.of("artifacts:cross_necklace").withChance(5),
            Item.of("artifacts:lucky_scarf").withChance(5),
            Item.of("artifacts:superstitious_hat").withChance(5),
            Item.of("obscure_api:astral_dust").withChance(10),
            Item.of("minecraft:emerald").withChance(60)
        ]);
});
LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:illusioner")//幻术师
        .addWeightedLoot(1, [
            Item.of("artifacts:whoopee_cushion").withChance(15),
            Item.of("artifacts:cross_necklace").withChance(5),
            Item.of("artifacts:lucky_scarf").withChance(5),
            Item.of("artifacts:superstitious_hat").withChance(5),
            Item.of("obscure_api:astral_dust").withChance(10),
            Item.of("minecraft:emerald").withChance(60)
        ]);
});
LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("queen_bee:queen_bee")//蜂后
        .addWeightedLoot(1, [
            Item.of('artifacts:antidote_vessel').withChance(10),
            Item.of('artifacts:thorn_pendant').withChance(10),
            Item.of('artifacts:digging_claws').withChance(10),
            Item.of("obscure_api:astral_dust").withChance(10),
        ]);
});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:turtle")//海龟
        .addWeightedLoot(2, [
            Item.of("minecraft:scute").withChance(60),
            Item.of("minecraft:bone").withChance(40),
        ]);
});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:pig")//猪
        .addWeightedLoot(2, [
            Item.of("minecraft:leather").withChance(40),
            Item.of("minecraft:bone").withChance(60),
        ]);
});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:sheep")//绵羊
        .addWeightedLoot(1, [
            Item.of("minecraft:bone").withChance(100),
        ]);
});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:chicken")//鸡
        .addWeightedLoot(1, [
            Item.of('minecraft:feather').withChance(60),
            Item.of("minecraft:bone").withChance(40),
        ]);
});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:cow")//牛
        .addWeightedLoot(1, [
            Item.of("minecraft:leather").withChance(60),
            Item.of("minecraft:bone").withChance(40),
        ]);
});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:sniffer")//嗅探兽
        .addWeightedLoot(1, [
            Item.of("minecraft:sniffer_egg").withChance(40),
            Item.of("minecraft:diamond").withChance(60)
        ]);
});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:polar_bear")//北极熊
        .addWeightedLoot(3, [
            Item.of("minecraft:leather").withChance(40),
            Item.of("minecraft:bone").withChance(60),
        ]);
});


