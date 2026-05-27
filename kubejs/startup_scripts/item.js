// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')

BlockEvents.modification(event => { 
    event.modify('minecraft:calcite', block => { 
        block.setExplosionResistance(10000); 
    });
    event.modify('minecraft:blackstone', block => { 
        block.setExplosionResistance(10000); 
    });
    event.modify('minecraft:blackstone_stairs', block => { 
        block.setExplosionResistance(10000); 
    });
    event.modify('minecraft:blackstone_stairs', block => { 
        block.setExplosionResistance(10000); 
    });
    event.modify('minecraft:diorite_stairs', block => { 
        block.setExplosionResistance(10000); 
    });

    event.modify('minecraft:mud', block => { 
        block.setExplosionResistance(10000); 
    });
    event.modify('minecraft:black_concrete', block => { 
        block.setExplosionResistance(10000); 
    });
    event.modify('minecraft:coal_block', block => { 
        block.setExplosionResistance(10000); 
    });
    event.modify('summoningrituals:indestructible_altar', block => { 
        block.setExplosionResistance(10000); 
    });
    event.modify('minecraft:quartz_bricks', block => { 
        block.setExplosionResistance(10000); 
    });
}); 

ItemEvents.modification(event => {
    // //防护口罩（Tick逻辑移至server_scripts）
    // event.modify('radiation_zone_reborn:golden_filter_mask_helmet', item => {
    //   item.rarity = 'UNCOMMON'
    //   item.fireResistant = true
    // })

    //龙鳞
    event.modify('quark:dragon_scale', item => {
      item.rarity = 'EPIC'
      item.fireResistant = true
    })
    //暗夜信标
    event.modify('goety:night_beacon', item => {
      item.rarity = 'EPIC'
      item.fireResistant = true
    })
    //不洁之血
    event.modify('goety:unholy_blood', item => {
      item.rarity = 'EPIC'
      item.fireResistant = true
    })
    //虚空回响
    event.modify('goety:void_echo', item => {
      item.rarity = 'EPIC'
      item.fireResistant = true
    })
    //灌注辉蓝晶左轮
    event.modify('gunswithoutrosesadditions:veridium_revolver_infused', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    //灵魂红宝石
    event.modify('goety:soul_ruby', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    //不祥核心
    event.modify('goety:ominous_orb', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    //虚空碎片
    event.modify('goety:void_shard', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    //暗夜之心
    event.modify('goety:heart_of_the_night', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    //霜冻之刃
    event.modify('goety:frozen_blade', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    //末影之刃
    event.modify('goety:blade_of_ender', item => {
      item.rarity = 'EPIC'
      item.fireResistant = true
    })
    //金手枪
    event.modify('gunswithoutroses:gold_gun', item => {
      item.maxDamage = 513
      item.fireResistant = true
    })
    //贤者之锤
    event.modify('goety:philosophers_mace', item => {
      item.maxDamage = 1280
      item.fireResistant = true
    })
    //生命补片
    event.modify('aether:life_shard', item => {
      item.rarity = 'EPIC'
      item.maxStackSize = 16
      item.fireResistant = true
    })
    //钻石
    event.modify('minecraft:diamond', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    //魔豆
    event.modify('twilightforest:magic_beans', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    //下界合金锭
    event.modify('minecraft:netherite_ingot', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    //末影合金锭
    event.modify('enderitemod:enderite_ingot', item => {
      item.rarity = 'EPIC'
      item.fireResistant = true
    })

    //维度网络
    event.modify('beyonddimensions:net_creater', item => {
      item.rarity = 'EPIC'
      item.fireResistant = true
    })
    event.modify('beyonddimensions:net_feeder_item', item => {
      item.rarity = 'EPIC'
      item.fireResistant = true
    })

    //风眼
    event.modify('radiation_zone_reborn:dustorm_eye', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })

    //云母钢锭
    event.modify('deep_aether:stratus_ingot', item => {
      item.rarity = 'EPIC'
      item.fireResistant = true
    })
    event.modify('aether_treasure_reforging:pyral_ingot', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    event.modify('aether_treasure_reforging:valkyrum_ingot', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    event.modify('deep_aether:metal_mixture', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    event.modify('aether_treasure_reforging:neptune_mesh', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    event.modify('deep_aether:squall_plate', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })

    //战斗高塔守卫之眼
    event.modify('ba_bt:land_golem_eye', item => {
      item.fireResistant = true
    })
    event.modify('ba_bt:ocean_golem_eye', item => {
      item.fireResistant = true
    })
    event.modify('ba_bt:core_golem_eye', item => {
      item.fireResistant = true
    })
    event.modify('ba_bt:nether_golem_eye', item => {
      item.fireResistant = true
    })
    event.modify('ba_bt:end_golem_eye', item => {
      item.fireResistant = true
    })
    event.modify('ba_bt:sky_golem_eye', item => {
      item.fireResistant = true
    })

    //末影合金鞘翅胸甲
    event.modify('enderitemod:enderite_elytra', item => {
      item.maxDamage = 1600
      item.fireResistant = true
    })

    //末影合金盾
    event.modify('enderitemod:enderite_shield', item => {
      item.maxDamage = 2000
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })

    //适应性弩
    event.modify('cataclysm:laser_gatling', item => {
      item.maxDamage = 1000
      item.fireResistant = true
    })

    //激光加特林
    event.modify('cataclysm:laser_gatling', item => {
      item.maxDamage = 100
    })

    //盾
    event.modify('minecraft:shield', item => {
      item.maxDamage = 600
    })
    event.modify('cataclysm:black_steel_targe', item => {
      item.maxDamage = 1600
    })
    event.modify('cataclysm:azure_sea_shield', item => {
      item.maxDamage = 1600
    })
    event.modify('twilightforest:knightmetal_shield', item => {
      item.maxDamage = 1600
    })
    event.modify('lost_aether_content:zanite_shield', item => {
      item.maxDamage = 1000
    })
    event.modify('deep_aether:skyjade_shield', item => {
      item.maxDamage = 1000
    })
    event.modify('lost_aether_content:gravitite_shield', item => {
      item.maxDamage = 2000
      item.rarity = 'UNCOMMON'
    })

    //水瓶堆叠
    event.modify('minecraft:potion', item => {
      item.maxStackSize = 16
      item.fireResistant = true
      item.rarity = 'UNCOMMON'
    })
    event.modify('minecraft:splash_potion', item => {
      item.maxStackSize = 16
      item.fireResistant = true
      item.rarity = 'UNCOMMON'
    })
    event.modify('minecraft:lingering_potion', item => {
      item.maxStackSize = 16
      item.fireResistant = true
      item.rarity = 'UNCOMMON'
    })
    //煲堆叠
    event.modify('minecraft:beetroot_soup', item => {
      item.maxStackSize = 1
    })
    event.modify('minecraft:suspicious_stew', item => {
      item.maxStackSize = 1
    })
    event.modify('berry_good:glowgurt', item => {
      item.maxStackSize = 1
    })
    event.modify('minecraft:rabbit_stew', item => {
      item.maxStackSize = 1
    })
    event.modify('minecraft:mushroom_stew', item => {
      item.maxStackSize = 1
    })
    //图腾堆叠
    event.modify('minecraft:totem_of_undying', item => {
      item.maxStackSize = 4
      item.fireResistant = true
    })
    event.modify('artifacts:chorus_totem', item => {
      item.maxStackSize = 4
      item.fireResistant = true
    })
    //生命符咒堆叠
    event.modify('twilightforest:charm_of_life_1', item => {
      item.maxStackSize = 4
      item.fireResistant = true
    })
    event.modify('twilightforest:charm_of_life_2', item => {
      item.maxStackSize = 4
      item.fireResistant = true
    })
    //珍珠堆叠
    event.modify('minecraft:ender_pearl', item => {
      item.maxStackSize = 64
      item.fireResistant = true
      item.rarity = 'UNCOMMON'
    })
    event.modify('minecraft:ender_eye', item => {
      item.maxStackSize = 64
      item.fireResistant = true
      item.rarity = 'UNCOMMON'
    })
    event.modify('minecraft:snowball', item => {
      item.maxStackSize = 64
    })
    event.modify('minecraft:egg', item => {
      item.maxStackSize = 64
    })
})

ItemEvents.modification(event => {
    event.modify('minecraft:ender_pearl', item => {
      item.maxStackSize = 64
      item.fireResistant = true
      item.rarity = 'UNCOMMON'
    })
  
    event.modify('minecraft:ancient_debris', item => {
      item.rarity = 'RARE'
      item.burnTime = 16000
    })

    //立方护符
    event.modify('twilightforest:cube_talisman', item => {
      item.rarity = 'EPIC'
    })

    //大气符文
    event.modify('legendary_monsters:air_rune', item => {
      item.rarity = 'EPIC'
    })

    event.modify('legendary_monsters:mossy_chestplate', item => {
      item.rarity = 'UNCOMMON'
      item.maxDamage = 1200
      item.armorProtection = 8.0
      item.armorToughness = 3.0
    })


    //骨粉燃烧
    event.modify('minecraft:bone_meal', item => {
      item.burnTime = 400
    })
    //海龟壳
    event.modify('minecraft:turtle_helmet', item => {
      item.rarity = 'RARE'
      item.maxDamage = 581
      item.armorProtection = 3.0
      item.armorToughness = 3.0
      item.craftingRemainder = Item.of('minecraft:scute').item
    })
    //三叉戟
    event.modify('minecraft:trident', item => {
      item.rarity = 'UNCOMMON'
      item.maxDamage = 500
      item.craftingRemainder = Item.of('minecraft:prismarine_shard').item
    })

    //星界粉尘
    event.modify('obscure_api:astral_dust', item => {
      item.fireResistant = true
      item.maxStackSize = 64
    })

    //异教徒的心脏
    event.modify('eeeabsmobs:heart_of_pagan', item => {
      item.rarity = 'EPIC'
      item.fireResistant = true
    })

    //可怖之袋
    event.modify('illageandspillage:bag_of_horrors', item => {
      item.rarity = 'EPIC'
      item.fireResistant = true
    })
    //咒缚书
    event.modify('illageandspillage:spellbound_book', item => {
      item.rarity = 'EPIC'
      item.fireResistant = true
    })
    //放逐图腾
    event.modify('illageandspillage:totem_of_banishment', item => {
      item.rarity = 'EPIC'
      item.fireResistant = true
    })

    //竖琴弩
    event.modify('goetyawaken:harp_crossbow', item => {
      item.rarity = 'EPIC'
      item.fireResistant = true
    })

    //监狱之眼
    event.modify('goetyawaken:prison_eye', item => {
      item.rarity = 'EPIC'
      item.fireResistant = true
    })

    //医者仁心
    event.modify('goetyawaken:gatling_charm', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })

    //冠军套装
    event.modify('goetyawaken:champion_helmet', item => {
      item.fireResistant = true
      item.rarity = 'EPIC'
      item.maxDamage = 6000
      item.armorToughness = 4.0
    })
    event.modify('goetyawaken:champion_chestplate', item => {
      item.fireResistant = true
      item.rarity = 'EPIC'
      item.maxDamage = 6000
      item.armorToughness = 4.0
    })
    event.modify('goetyawaken:champion_leggings', item => {
      item.fireResistant = true
      item.rarity = 'EPIC'
      item.maxDamage = 6000
      item.armorToughness = 4.0
    })
    event.modify('goetyawaken:champion_boots', item => {
      item.fireResistant = true
      item.rarity = 'EPIC'
      item.maxDamage = 6000
      item.armorToughness = 4.0
    })

    //过滤口罩
    event.modify('radiation_zone_reborn:copper_filter_mask_helmet', item => {
      item.maxDamage = 220
      item.armorProtection = 1.0
      item.armorToughness = 1.0
    })
    event.modify('radiation_zone_reborn:golden_filter_mask_helmet', item => {
      item.maxDamage = 600
      item.armorProtection = 2.0
      item.armorToughness = 2.0
    })
    //荒野皮毛套装
    event.modify('radiation_zone_reborn:wastefur_armor_helmet', item => {
      item.maxDamage = 600
      item.armorProtection = 3.0
      item.armorToughness = 2.0
    })
    event.modify('radiation_zone_reborn:wastefur_armor_chestplate', item => {
      item.maxDamage = 800
      item.armorProtection = 8.0
      item.armorToughness = 2.0
    })
    event.modify('radiation_zone_reborn:wastefur_armor_leggings', item => {
      item.maxDamage = 700
      item.armorProtection = 7.0
      item.armorToughness = 2.0
    })
    event.modify('radiation_zone_reborn:wastefur_armor_boots', item => {
      item.maxDamage = 650
      item.armorProtection = 3.0
      item.armorToughness = 2.0
    })
    //防护服套装
    event.modify('radiation_zone_reborn:protective_helmet', item => {
      item.maxDamage = 700
      item.armorProtection = 3.0
      item.armorToughness = 3.5
    })
    event.modify('radiation_zone_reborn:protective_chestplate', item => {
      item.maxDamage = 900
      item.armorProtection = 8.0
      item.armorToughness = 3.5
    })
    event.modify('radiation_zone_reborn:protective_leggings', item => {
      item.maxDamage = 800
      item.armorProtection = 7.0
      item.armorToughness = 3.5
    })
    event.modify('radiation_zone_reborn:protective_boots', item => {
      item.maxDamage = 800
      item.armorProtection = 3.0
      item.armorToughness = 3.5
    })
    //沉积银套装
    event.modify('radiation_zone_reborn:sedisilver_protective_helmet', item => {
      item.maxDamage = 1200
      item.armorProtection = 4.0
      item.armorToughness = 4.0
    })
    event.modify('radiation_zone_reborn:sedisilver_armor_helmet', item => {
      item.maxDamage = 1200
      item.armorProtection = 4.0
      item.armorToughness = 4.0
    })
    event.modify('radiation_zone_reborn:sedisilver_armor_chestplate', item => {
      item.maxDamage = 1200
      item.armorProtection = 9.0
      item.armorToughness = 4.0
    })
    event.modify('radiation_zone_reborn:sedisilver_armor_leggings', item => {
      item.maxDamage = 1200
      item.armorProtection = 8.0
      item.armorToughness = 4.0
    })
    event.modify('radiation_zone_reborn:sedisilver_armor_boots', item => {
      item.maxDamage = 1200
      item.armorProtection = 4.0
      item.armorToughness = 4.0
    })
    //巨岩套装
    event.modify('radiation_zone_reborn:giantrock_protective_helmet', item => {
      item.maxDamage = 1600
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
      item.armorProtection = 5.0
      item.armorToughness = 4.0
    })
    event.modify('radiation_zone_reborn:giantrock_armor_helmet', item => {
      item.maxDamage = 1600
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
      item.armorProtection = 5.0
      item.armorToughness = 4.0
    })
    event.modify('radiation_zone_reborn:giantrock_armor_chestplate', item => {
      item.maxDamage = 1600
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
      item.armorProtection = 10.0
      item.armorToughness = 4.0
    })
    event.modify('radiation_zone_reborn:giantrock_armor_leggings', item => {
      item.maxDamage = 1600
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
      item.armorProtection = 9.0
      item.armorToughness = 4.0
    })
    event.modify('radiation_zone_reborn:giantrock_armor_boots', item => {
      item.maxDamage = 1600
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
      item.armorProtection = 5.0
      item.armorToughness = 4.0
    })
    //暴龙套装
    event.modify('radiation_zone_reborn:tyrant_skin_armor_helmet', item => {
      item.maxDamage = 3000
      item.rarity = 'EPIC'
      item.fireResistant = true
      item.armorProtection = 5.0
      item.armorToughness = 4.5
    })
    event.modify('radiation_zone_reborn:tyrant_skin_armor_chestplate', item => {
      item.maxDamage = 3000
      item.rarity = 'EPIC'
      item.fireResistant = true
      item.armorProtection = 10.0
      item.armorToughness = 4.5
    })
    event.modify('radiation_zone_reborn:tyrant_skin_armor_leggings', item => {
      item.maxDamage = 3000
      item.rarity = 'EPIC'
      item.fireResistant = true
      item.armorProtection = 9.0
      item.armorToughness = 4.5
    })
    event.modify('radiation_zone_reborn:tyrant_skin_armor_boots', item => {
      item.maxDamage = 3000
      item.rarity = 'EPIC'
      item.fireResistant = true
      item.armorProtection = 4.0
      item.armorToughness = 4.5
    })
    //沙尘胸甲
    event.modify('radiation_zone_reborn:dustorm_chestplate_chestplate', item => {
      item.maxDamage = 3000
      item.rarity = 'EPIC'
      item.fireResistant = true
      item.armorProtection = 11.0
      item.armorToughness = 4
    })

    //沙尘锤
    event.modify('radiation_zone_reborn:dustorm_hammer', item => {
      item.maxDamage = 4000
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    //沙尘剑
    event.modify('radiation_zone_reborn:dustorm_sword', item => {
      item.maxDamage = 3000
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    //沙尘大剑
    event.modify('radiation_zone_reborn:dustorm_greatsword', item => {
      item.maxDamage = 4000
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })

    //发光雕纹衰败石
    event.modify('radiation_zone_reborn:glowing_chiseled_decayed_stone', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })

    //霜鳞甲盾
    event.modify('radiation_zone_reborn:tortoise_shell_shield', item => {
      item.maxDamage = 2000
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })

    //暴龙皮
    event.modify('radiation_zone_reborn:tyrant_skin', item => {
      item.rarity = 'EPIC'
      item.fireResistant = true
    })

    //神烬
    event.modify('deep_aether:afterburner', item => {
      item.maxDamage = 1000
      item.rarity = 'EPIC'
      item.fireResistant = true
    })

    //阴影装备
    event.modify('aethermobs:shaday_helmet', item => {
      item.maxDamage = 2000
      item.rarity = 'EPIC'
      item.fireResistant = true
    })
    event.modify('aethermobs:shaday_chestplate', item => {
      item.maxDamage = 2000
      item.rarity = 'EPIC'
      item.fireResistant = true
    })
    event.modify('aethermobs:shaday_leggings', item => {
      item.maxDamage = 2000
      item.rarity = 'EPIC'
      item.fireResistant = true
    })

    //饥饿匕首
    event.modify('goety:hungry_dagger', item => {
      item.maxDamage = 600
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })

    //凋零手稿
    event.modify('goety:withered_manuscript', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })

    //灯壶之灵剑
    event.modify('aethermobs:spiritsword', item => {
      item.maxDamage = 1000
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    //盐制乐器
    event.modify('aethermobs:saltinstrument', item => {
      item.maxDamage = 1500
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    //晶岩剑
    event.modify('aethermobs:crystalitesword', item => {
      item.maxDamage = 2000
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    //地牢匕首
    event.modify('aethermobs:dungeondagger', item => {
      item.maxDamage = 2000
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })

    //枢机魔眼
    event.modify('deep_aether:slider_eye', item => {
      item.maxDamage = 1000
      item.fireResistant = true
    })

    //凤凰披风
    event.modify('lost_aether_content:phoenix_cape', item => {
      item.maxDamage = 100
      item.fireResistant = true
    })
    //烈阳灵石
    event.modify('lost_aether_content:flaming_gemstone', item => {
      item.maxDamage = 1400
      item.fireResistant = true
    })
    //隐形宝石
    event.modify('lost_aether_content:invincibility_gem', item => {
      item.maxDamage = 400
      item.fireResistant = true
    })

    //守护之羽
    event.modify('aether_redux:feather_of_warding', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    //穹玉戒指
    event.modify('deep_aether:skyjade_ring', item => {
      item.maxDamage = 90
      item.fireResistant = true
    })
    //紫晶戒指
    event.modify('aether:zanite_ring', item => {
      item.maxDamage = 150
      item.fireResistant = true
    })
    //寒冰戒指
    event.modify('aether:ice_ring', item => {
      item.rarity = 'UNCOMMON'
      item.maxDamage = 375
      item.fireResistant = true
    })
    //重力晶戒指
    event.modify('deep_aether:gravitite_ring', item => {
      item.rarity = 'UNCOMMON'
      item.maxDamage = 400
      item.fireResistant = true
    })
    //云母钢戒指
    event.modify('deep_aether:stratus_ring', item => {
      item.rarity = 'UNCOMMON'
      item.maxDamage = 800
      item.fireResistant = true
    })
    //蘑菇之戒
    event.modify('aether_redux:shroom_ring', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    //智慧之戒
    event.modify('aether_redux:ring_of_wisdom', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    //构造之戒
    event.modify('aether_redux:ring_of_construction', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    //诡异之戒
    event.modify('deep_aether:spooky_ring', item => {
      item.maxDamage = 1000
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })

    //哨兵护身符
    event.modify('lost_aether_content:sentry_shield', item => {
      item.maxDamage = 300
      item.fireResistant = true
    })
    //史维特面具
    event.modify('lost_aether_content:swetty_mask', item => {
      item.maxDamage = 550
      item.fireResistant = true
    })

    //紫晶吊坠
    event.modify('aether:zanite_pendant', item => {
      item.maxDamage = 300
      item.fireResistant = true
    })
    //寒冰吊坠
    event.modify('aether:ice_pendant', item => {
      item.rarity = 'UNCOMMON'
      item.maxDamage = 750
      item.fireResistant = true
    })

    //穹玉护手
    event.modify('deep_aether:skyjade_gloves', item => {
      item.maxDamage = 150
      item.fireResistant = true
    })
    //紫晶护手
    event.modify('aether:zanite_gloves', item => {
      item.maxDamage = 500
      item.fireResistant = true
    })
    //重力晶护手
    event.modify('aether:gravitite_gloves', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    //云母钢护手
    event.modify('deep_aether:stratus_gloves', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })

    //重锤
    event.modify('trials:mace', item => {
      item.rarity = 'EPIC'
      item.maxDamage = 1000
      item.fireResistant = true
    })

    //守护者核心
    event.modify('eeeabsmobs:guardian_core', item => {
      item.fireResistant = true
      item.maxDamage = 50
    })

    //蔚蓝海石盾
    event.modify('cataclysm:azure_sea_shield', item => {
      item.maxDamage = 1028
      item.fireResistant = true
    })

    //暮色森林护手
    event.modify('umbral_skies:arctic_gloves', item => {
      item.maxDamage = 520
      item.fireResistant = true
    })
    event.modify('umbral_skies:naga_gloves', item => {
      item.maxDamage = 546
      item.fireResistant = true
    })
    event.modify('umbral_skies:yeti_gloves', item => {
      item.maxDamage = 520
      item.fireResistant = true
    })
    event.modify('umbral_skies:phantom_gloves', item => {
      item.maxDamage = 780
      item.fireResistant = true
    })
    event.modify('umbral_skies:fiery_gloves', item => {
      item.maxDamage = 975
      item.fireResistant = true
    })

    //假面
    event.modify('masquerader_mod:blank_mask', item => {
      item.rarity = 'EPIC'
      item.maxDamage = 666
      item.armorProtection = 0.0
      item.armorToughness = 6.0
      item.fireResistant = true
    })
    event.modify('masquerader_mod:witch_mask', item => {
      item.rarity = 'EPIC'
      item.maxDamage = 666
      item.armorProtection = 0.0
      item.armorToughness = 6.0
      item.fireResistant = true
    })
    event.modify('masquerader_mod:ravager_mask', item => {
      item.rarity = 'EPIC'
      item.maxDamage = 666
      item.armorProtection = 0.0
      item.armorToughness = 6.0
      item.fireResistant = true
    })
    event.modify('masquerader_mod:illusioner_mask', item => {
      item.rarity = 'EPIC'
      item.maxDamage = 666
      item.armorProtection = 0.0
      item.armorToughness = 6.0
      item.fireResistant = true
    })
    event.modify('masquerader_mod:evoker_mask', item => {
      item.rarity = 'EPIC'
      item.maxDamage = 666
      item.armorProtection = 0.0
      item.armorToughness = 6.0
      item.fireResistant = true
    })

    //鞍
    event.modify('minecraft:saddle', item => {
      item.fireResistant = true
      item.rarity = 'UNCOMMON'
      item.maxStackSize = 16
    })

    //幻象图腾
    event.modify('friendsandfoes:totem_of_illusion', item => {
      item.fireResistant = true
      item.rarity = 'UNCOMMON'
      item.maxStackSize = 4
    })
    //寒冰图腾
    event.modify('friendsandfoes:totem_of_freezing', item => {
      item.fireResistant = true
      item.rarity = 'UNCOMMON'
      item.maxStackSize = 4
    })

    //野火王冠
    event.modify('friendsandfoes:wildfire_crown', item => {
      item.maxDamage = 750
      item.armorProtection = 2.0
      item.armorToughness = 2.0
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })

    //魔法地图核心
    event.modify('twilightforest:magic_map_focus', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    //迷宫地图核心
    event.modify('twilightforest:maze_map_focus', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    //超级霰弹枪
    event.modify('gwrexpansions:super_shotgun', item => {
      item.rarity = 'EPIC'
      item.maxDamage = 8000
      item.fireResistant = true
    })
    //超级米诺陶战斧
    event.modify('better_minoshroomtaur:better_minotaur_axe', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    event.modify('better_minoshroomtaur:maze_diamond_armor_helmet', item => {
      item.rarity = 'UNCOMMON'
      item.armorToughness = 5.0
      item.fireResistant = true
    })
    event.modify('better_minoshroomtaur:maze_diamond_armor_boots', item => {
      item.rarity = 'UNCOMMON'
      item.armorProtection = 5.0
      item.armorToughness = 5.0
      item.fireResistant = true
    })
    //结晶炮
    event.modify('the_bumblezone:crystal_cannon', item => {
      item.rarity = 'UNCOMMON'
      item.maxDamage = 800
      item.fireResistant = true
    })
    //嗡嗡公文包
    event.modify('the_bumblezone:buzzing_briefcase', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    //花朵头饰
    event.modify('the_bumblezone:flower_headwear', item => {
      item.maxDamage = 75
      item.armorProtection = 1.0
      item.armorToughness = 1.0
    })
    //蜜蜂装备
    event.modify('the_bumblezone:stingless_bee_helmet_1', item => {
      item.maxDamage = 528
      item.armorProtection = 2.0
      item.armorToughness = 2.5
    })
    event.modify('the_bumblezone:stingless_bee_helmet_2', item => {
      item.maxDamage = 528
      item.armorProtection = 2.0
      item.armorToughness = 2.5
    })
    event.modify('the_bumblezone:bumble_bee_chestplate_trans_1', item => {
      item.maxDamage = 768
      item.armorProtection = 7.0
      item.armorToughness = 2.5
    })
    event.modify('the_bumblezone:bumble_bee_chestplate_trans_2', item => {
      item.maxDamage = 768
      item.armorProtection = 7.0
      item.armorToughness = 2.5
    })
    event.modify('the_bumblezone:bumble_bee_chestplate_1', item => {
      item.maxDamage = 768
      item.armorProtection = 7.0
      item.armorToughness = 2.5
    })
    event.modify('the_bumblezone:bumble_bee_chestplate_2', item => {
      item.maxDamage = 768
      item.armorProtection = 7.0
      item.armorToughness = 2.5
    })
    event.modify('the_bumblezone:honey_bee_leggings_1', item => {
      item.maxDamage = 720
      item.armorProtection = 5.0
      item.armorToughness = 2.5
    })
    event.modify('the_bumblezone:honey_bee_leggings_2', item => {
      item.maxDamage = 720
      item.armorProtection = 5.0
      item.armorToughness = 2.5
    })
    event.modify('the_bumblezone:carpenter_bee_boots_1', item => {
      item.maxDamage = 624
      item.armorProtection = 2.0
      item.armorToughness = 2.5
    })
    event.modify('the_bumblezone:carpenter_bee_boots_2', item => {
      item.maxDamage = 624
      item.armorProtection = 2.0
      item.armorToughness = 2.5
    })


    //不详之瓶
    event.modify('trials:ominous_bottle', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    //追溯指针
    event.modify('minecraft:recovery_compass', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    //灵魂珠
    event.modify('quark:soul_bead', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    //苦力怕仆从调试器
    event.modify('mutantmonsters:creeper_minion_tracker', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    //传送石
    event.modify('waystones:warp_stone', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    //恶魂之泪
    event.modify('minecraft:ghast_tear', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })




    //螯针剑
    event.modify('queen_bee:stinger_sword', item => {
      item.rarity = 'UNCOMMON'
      item.maxDamage = 500
      item.fireResistant = true
    })

    //螯针长矛
    event.modify('the_bumblezone:stinger_spear', item => {
      item.maxDamage = 440
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })

    //蜜蜂触角
    event.modify('queen_bee:antenna', item => {
      item.armorToughness = 5.0
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })

    //花岩肩甲
    event.modify('cataclysm:bloom_stone_pauldrons', item => {
      item.armorProtection = 10.0
      item.armorToughness = 4.0
      item.rarity = 'UNCOMMON'
      item.maxDamage = 2000
      item.fireResistant = true
    })

    //潜地矛
    event.modify('bosses_of_mass_destruction:earthdive_spear', item => {
      item.maxDamage = 1500
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    //爆破增幅器
    event.modify('bosses_of_mass_destruction:monolith_block', item => {
      item.rarity = 'EPIC'
      item.fireResistant = true
    })
    //充能末影珍珠
    event.modify('bosses_of_mass_destruction:charged_ender_pearl', item => {
      item.rarity = 'EPIC'
      item.fireResistant = true
    })

    //巨人之锤
    event.modify('mutantmonsters:hulk_hammer', item => {
      item.maxDamage = 480
      item.fireResistant = true
    })
    //末影之手
    event.modify('mutantmonsters:endersoul_hand', item => {
      item.maxDamage = 480
      item.fireResistant = true
    })
    //突变骷髅装备
    event.modify('mutantmonsters:mutant_skeleton_skull', item => {
      item.maxDamage = 525
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    event.modify('mutantmonsters:mutant_skeleton_chestplate', item => {
      item.maxDamage = 580
      item.armorToughness = 3.0
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    event.modify('mutantmonsters:mutant_skeleton_leggings', item => {
      item.maxDamage = 550
      item.armorToughness = 3.0
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    event.modify('mutantmonsters:mutant_skeleton_boots', item => {
      item.maxDamage = 490
      item.armorToughness = 3.0
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    //突变凋零骷髅装备
    event.modify('mutantmore:mutant_wither_skeleton_skull', item => {
      item.fireResistant = true
    })
    event.modify('mutantmore:mutant_wither_skeleton_chestplate', item => {
      item.fireResistant = true
    })
    event.modify('mutantmore:mutant_wither_skeleton_leggings', item => {
      item.fireResistant = true
    })
    event.modify('mutantmore:mutant_wither_skeleton_boots', item => {
      item.fireResistant = true
    })

    //弓
    event.modify('twilightforest:triple_bow', item => {
      item.maxDamage = 768
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    event.modify('twilightforest:seeker_bow', item => {
      item.maxDamage = 768
    })
    event.modify('twilightforest:ice_bow', item => {
      item.maxDamage = 768
    })
    event.modify('twilightforest:ender_bow', item => {
      item.maxDamage = 768
    })


    //娜迦装备
    event.modify('twilightforest:naga_chestplate', item => {
      item.maxDamage = 672
      item.armorProtection = 9.0
      item.armorToughness = 2.0
    })
    event.modify('twilightforest:naga_leggings', item => {
      item.maxDamage = 630
      item.armorProtection = 7.0
      item.armorToughness = 2.0
    })

    //米诺陶战斧
    event.modify('twilightforest:gold_minotaur_axe', item => {
      item.maxDamage = 256
    })
    event.modify('twilightforest:diamond_minotaur_axe', item => {
      item.maxDamage = 3122
    })

    //皇家装备
    event.modify('royalvariations:royal_knight_helmet', item => {
      item.maxDamage = 814
      item.armorToughness = 2.0
    })
    event.modify('royalvariations:royal_knight_cuirass', item => {
      item.maxDamage = 1184
      item.armorToughness = 2.0
    })
    event.modify('royalvariations:royal_knight_leggings', item => {
      item.maxDamage = 1110
      item.armorToughness = 2.0
    })
    event.modify('royalvariations:royal_knight_boots', item => {
      item.maxDamage = 962
      item.armorToughness = 2.0
    })

    //海皇装备
    event.modify('aether:neptune_gloves', item => {
      item.maxDamage = 1000
      item.fireResistant = true
    })
    event.modify('aether:neptune_helmet', item => {
      item.maxDamage = 600
      item.fireResistant = true
      item.armorToughness = 3.0
    })
    event.modify('aether:neptune_chestplate', item => {
      item.maxDamage = 800
      item.fireResistant = true
      item.armorToughness = 3.0
    })
    event.modify('aether:neptune_leggings', item => {
      item.maxDamage = 700
      item.fireResistant = true
      item.armorToughness = 3.0
    })
    event.modify('aether:neptune_boots', item => {
      item.maxDamage = 650
      item.fireResistant = true
      item.armorToughness = 3.0
    })
    //风锻装备
    event.modify('deep_aether:stormforged_gloves', item => {
      item.maxDamage = 2000
      item.fireResistant = true
    })
    event.modify('deep_aether:stormforged_helmet', item => {
      item.maxDamage = 700
      item.fireResistant = true
      item.armorToughness = 3
    })
    event.modify('deep_aether:stormforged_chestplate', item => {
      item.maxDamage = 900
      item.fireResistant = true
      item.armorToughness = 3
    })
    event.modify('deep_aether:stormforged_leggings', item => {
      item.maxDamage = 800
      item.fireResistant = true
      item.armorToughness = 3
    })
    event.modify('deep_aether:stormforged_boots', item => {
      item.maxDamage = 750
      item.fireResistant = true
      item.armorToughness = 3
    })
    //武神装备
    event.modify('aether:valkyrie_gloves', item => {
      item.maxDamage = 2500
      item.fireResistant = true
    })
    event.modify('aether:valkyrie_helmet', item => {
      item.maxDamage = 800
      item.fireResistant = true
      item.armorProtection = 4.0
      item.armorToughness = 2.5
    })
    event.modify('aether:valkyrie_chestplate', item => {
      item.maxDamage = 1000
      item.fireResistant = true
      item.armorProtection = 9.0
      item.armorToughness = 2.5
    })
    event.modify('aether:valkyrie_leggings', item => {
      item.maxDamage = 900
      item.fireResistant = true
      item.armorProtection = 7.0
      item.armorToughness = 2.5
    })
    event.modify('aether:valkyrie_boots', item => {
      item.maxDamage = 850
      item.fireResistant = true
      item.armorProtection = 4.0
      item.armorToughness = 2.5
    })
    //凤凰装备
    event.modify('aether:phoenix_gloves', item => {
      item.maxDamage = 3000
      item.fireResistant = true
    })
    event.modify('aether:phoenix_helmet', item => {
      item.maxDamage = 900
      item.fireResistant = true
      item.armorProtection = 4.0
      item.armorToughness = 3.0
    })
    event.modify('aether:phoenix_chestplate', item => {
      item.maxDamage = 1100
      item.fireResistant = true
      item.armorProtection = 9.0
      item.armorToughness = 3.0
    })
    event.modify('aether:phoenix_leggings', item => {
      item.maxDamage = 1000
      item.fireResistant = true
      item.armorProtection = 7.0
      item.armorToughness = 3.0
    })
    event.modify('aether:phoenix_boots', item => {
      item.maxDamage = 950
      item.fireResistant = true
      item.armorProtection = 4.0
      item.armorToughness = 3.0
    })
    //黑曜石装备
    event.modify('aether:obsidian_gloves', item => {
      item.maxDamage = 3500
      item.fireResistant = true
    })
    event.modify('aether:obsidian_helmet', item => {
      item.maxDamage = 1000
      item.fireResistant = true
      item.armorProtection = 4.5
      item.armorToughness = 3.0
    })
    event.modify('aether:obsidian_chestplate', item => {
      item.maxDamage = 1200
      item.fireResistant = true
      item.armorProtection = 9.5
      item.armorToughness = 3.0
    })
    event.modify('aether:obsidian_leggings', item => {
      item.maxDamage = 1100
      item.fireResistant = true
      item.armorProtection = 7.5
      item.armorToughness = 3.0
    })
    event.modify('aether:obsidian_boots', item => {
      item.maxDamage = 1050
      item.fireResistant = true
      item.armorProtection = 4.5
      item.armorToughness = 3.0
    })
    //动力手套
    event.modify('lost_aether_content:power_gloves', item => {
      item.maxDamage = 4000
      item.fireResistant = true
    })
    //创世者坚盾
    event.modify('lost_aether_content:shield_of_emile', item => {
      item.maxDamage = 4000
      item.fireResistant = true
    })
    //境天神武器
    event.modify('aether:pig_slayer', item => {
      item.maxDamage = 1000
      item.fireResistant = true
    })
    event.modify('deep_aether:storm_sword', item => {
      item.maxDamage = 1000
      item.fireResistant = true
    })
    event.modify('aether:lightning_sword', item => {
      item.maxDamage = 1000
      item.fireResistant = true
    })
    event.modify('aether:holy_sword', item => {
      item.maxDamage = 1000
      item.fireResistant = true
    })
    event.modify('deep_aether:blade_of_luck', item => {
      item.maxDamage = 1000
      item.fireResistant = true
    })
    event.modify('aether:flaming_sword', item => {
      item.maxDamage = 1000
      item.fireResistant = true
    })
    event.modify('aether:hammer_of_kingbdogz', item => {
      item.maxDamage = 500
      item.fireResistant = true
    })
    event.modify('aether:cloud_staff', item => {
      item.maxDamage = 200
      item.fireResistant = true
    })

    //黑铁装备
    event.modify('goety:black_iron_helmet', item => {
      item.maxDamage = 814
      item.fireResistant = true
    })
    event.modify('goety:black_iron_chestplate', item => {
      item.maxDamage = 1184
      item.fireResistant = true
    })
    event.modify('goety:black_iron_leggings', item => {
      item.maxDamage = 1110
      item.fireResistant = true
    })
    event.modify('goety:black_iron_boots', item => {
      item.maxDamage = 962
      item.fireResistant = true
    })

    //黑暗装备
    event.modify('goety:dark_helmet', item => {
      item.maxDamage = 814
      item.fireResistant = true
    })
    event.modify('goety:dark_chestplate', item => {
      item.maxDamage = 1184
      item.fireResistant = true
    })
    event.modify('goety:dark_leggings', item => {
      item.maxDamage = 1110
      item.fireResistant = true
    })
    event.modify('goety:dark_boots', item => {
      item.maxDamage = 962
      item.fireResistant = true
    })

    //诅咒骑士装备
    event.modify('goety:cursed_knight_helmet', item => {
      item.maxDamage = 814
      item.fireResistant = true
    })
    event.modify('goety:cursed_knight_chestplate', item => {
      item.maxDamage = 1184
      item.fireResistant = true
    })
    event.modify('goety:cursed_knight_leggings', item => {
      item.maxDamage = 1110
      item.fireResistant = true
    })
    event.modify('goety:cursed_knight_boots', item => {
      item.maxDamage = 962
      item.fireResistant = true
    })

    //诅咒圣骑士装备
    event.modify('goety:cursed_paladin_helmet', item => {
      item.maxDamage = 1000
      item.fireResistant = true
    })
    event.modify('goety:cursed_paladin_chestplate', item => {
      item.maxDamage = 1300
      item.fireResistant = true
    })
    event.modify('goety:cursed_paladin_leggings', item => {
      item.maxDamage = 1200
      item.fireResistant = true
    })
    event.modify('goety:cursed_paladin_boots', item => {
      item.maxDamage = 1100
      item.fireResistant = true
    })






    //下界合金装备
    event.modify('minecraft:netherite_helmet', item => {
      item.maxDamage = 814
    })
    event.modify('minecraft:netherite_chestplate', item => {
      item.maxDamage = 1184
    })
    event.modify('minecraft:netherite_leggings', item => {
      item.maxDamage = 1110
    })
    event.modify('minecraft:netherite_boots', item => {
      item.maxDamage = 962
    })

    //高级下界合金装备
    event.modify('advancednetherite:netherite_iron_helmet', item => {
      item.maxDamage = 900
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
      item.armorToughness = 3.0
    })
    event.modify('advancednetherite:netherite_iron_chestplate', item => {
      item.maxDamage = 1200
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
      item.armorToughness = 3.0
      item.armorProtection = 9.0
    })
    event.modify('advancednetherite:netherite_iron_leggings', item => {
      item.maxDamage = 1100
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
      item.armorToughness = 3.0
      item.armorProtection = 7.0
    })
    event.modify('advancednetherite:netherite_iron_boots', item => {
      item.maxDamage = 1000
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
      item.armorToughness = 3.0
    })

    event.modify('advancednetherite:netherite_gold_helmet', item => {
      item.maxDamage = 1000
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    event.modify('advancednetherite:netherite_gold_chestplate', item => {
      item.maxDamage = 1300
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    event.modify('advancednetherite:netherite_gold_leggings', item => {
      item.maxDamage = 1200
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })
    event.modify('advancednetherite:netherite_gold_boots', item => {
      item.maxDamage = 1100
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
    })

    event.modify('advancednetherite:netherite_emerald_helmet', item => {
      item.maxDamage = 1100
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
      item.armorToughness = 4.0
    })
    event.modify('advancednetherite:netherite_emerald_chestplate', item => {
      item.maxDamage = 1400
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
      item.armorToughness = 4.0
    })
    event.modify('advancednetherite:netherite_emerald_leggings', item => {
      item.maxDamage = 1300
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
      item.armorToughness = 4.0
    })
    event.modify('advancednetherite:netherite_emerald_boots', item => {
      item.maxDamage = 1200
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
      item.armorToughness = 4.0
    })

    event.modify('advancednetherite:netherite_diamond_helmet', item => {
      item.maxDamage = 1200
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
      item.armorProtection = 4.5
    })
    event.modify('advancednetherite:netherite_diamond_chestplate', item => {
      item.maxDamage = 1500
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
      item.armorProtection = 9.5
    })
    event.modify('advancednetherite:netherite_diamond_leggings', item => {
      item.maxDamage = 1400
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
      item.armorProtection = 7.5
    })
    event.modify('advancednetherite:netherite_diamond_boots', item => {
      item.maxDamage = 1300
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
      item.armorProtection = 4.5
    })

    //咒魂装备
    event.modify('cataclysm:cursium_helmet', item => {
      item.armorToughness = 5.0
      item.fireResistant = true
    })
    event.modify('cataclysm:cursium_chestplate', item => {
      item.armorToughness = 5.0
      item.fireResistant = true
    })
    event.modify('cataclysm:cursium_leggings', item => {
      item.armorToughness = 5.0
      item.fireResistant = true
    })
    event.modify('cataclysm:cursium_boots', item => {
      item.armorToughness = 5.0
      item.fireResistant = true
    })

    //皮革装备
    event.modify('minecraft:leather_helmet', item => {
      item.maxDamage = 75
      item.armorToughness = 1.0
    })
    event.modify('minecraft:leather_chestplate', item => {
      item.maxDamage = 100
      item.armorToughness = 1.0
    })
    event.modify('minecraft:leather_leggings', item => {
      item.maxDamage = 95
      item.armorToughness = 1.0
    })
    event.modify('minecraft:leather_boots', item => {
      item.maxDamage = 85
      item.armorToughness = 1.0
    })

    //锁链装备
    event.modify('minecraft:chainmail_chestplate', item => {
      item.armorProtection = 6.0
    })
    event.modify('minecraft:chainmail_leggings', item => {
      item.armorProtection = 5.0
    })
    event.modify('minecraft:chainmail_boots', item => {
      item.armorProtection = 2.0
    })

    //云母装备
    event.modify('deep_aether:stratus_helmet', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
      item.maxDamage = 2000
      item.armorProtection = 4
      item.armorToughness = 4
    })
    event.modify('deep_aether:stratus_chestplate', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
      item.maxDamage = 2000
      item.armorProtection = 9
      item.armorToughness = 4
    })
    event.modify('deep_aether:stratus_leggings', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
      item.maxDamage = 2000
      item.armorProtection = 7
      item.armorToughness = 4
    })
    event.modify('deep_aether:stratus_boots', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
      item.maxDamage = 2000
      item.armorProtection = 4
      item.armorToughness = 4
    })
    event.modify('deep_aether:stratus_gloves', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
      item.maxDamage = 4000
    })
    event.modify('deep_aether:stratus_shield', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
      item.maxDamage = 4000
    })
    event.modify('deep_aether:stratus_sword', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
      item.maxDamage = 4000
    })
    event.modify('deep_aether:stratus_pickaxe', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
      item.maxDamage = 4000
    })
    event.modify('deep_aether:stratus_axe', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
      item.maxDamage = 4000
    })
    event.modify('deep_aether:stratus_shovel', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
      item.maxDamage = 4000
    })
    event.modify('deep_aether:stratus_hoe', item => {
      item.rarity = 'UNCOMMON'
      item.fireResistant = true
      item.maxDamage = 4000
    })

    //金装备
    event.modify('minecraft:golden_helmet', item => {
      item.maxDamage = 105
      item.armorProtection = 2.0
      item.armorToughness = 1.0
    })
    event.modify('minecraft:golden_chestplate', item => {
      item.maxDamage = 135
      item.armorToughness = 1.0
    })
    event.modify('minecraft:golden_leggings', item => {
      item.maxDamage = 125
      item.armorToughness = 1.0
    })
    event.modify('minecraft:golden_boots', item => {
      item.maxDamage = 110
      item.armorProtection = 2.0
      item.armorToughness = 1.0
    })
    //金工具
    event.modify('minecraft:golden_sword', item => {
      item.maxDamage = 150
    })
    event.modify('minecraft:golden_pickaxe', item => {
      item.maxDamage = 150
    })
    event.modify('minecraft:golden_axe', item => {
      item.maxDamage = 150
    })
    event.modify('minecraft:golden_shovel', item => {
      item.maxDamage = 150
    })
    event.modify('minecraft:golden_hoe', item => {
      item.maxDamage = 150
    })


    //铁镐
    event.modify('minecraft:iron_pickaxe', item => {
      item.maxDamage = 350
    })
    //铁装备
    event.modify('minecraft:iron_helmet', item => {
      item.armorProtection = 3.0
    })
    event.modify('minecraft:iron_chestplate', item => {
      item.armorProtection = 8.0
    })
    event.modify('minecraft:iron_leggings', item => {
      item.armorProtection = 6.0
    })
    event.modify('minecraft:iron_boots', item => {
      item.armorProtection = 3.0
    })

    //重力晶装备
    event.modify('aether:gravitite_helmet', item => {
      item.maxDamage = 663
    })
    event.modify('aether:gravitite_chestplate', item => {
      item.maxDamage = 728
    })
    event.modify('aether:gravitite_leggings', item => {
      item.maxDamage = 695
    })
    event.modify('aether:gravitite_boots', item => {
      item.maxDamage = 629
    })

    //钻石装备
    event.modify('minecraft:diamond_helmet', item => {
      item.maxDamage = 663
    })
    event.modify('minecraft:diamond_chestplate', item => {
      item.maxDamage = 728
    })
    event.modify('minecraft:diamond_leggings', item => {
      item.maxDamage = 695
    })
    event.modify('minecraft:diamond_boots', item => {
      item.maxDamage = 629
    })

    //极地装备
    event.modify('twilightforest:arctic_helmet', item => {
      item.maxDamage = 220
      item.armorToughness = 3.0
    })
    event.modify('twilightforest:arctic_chestplate', item => {
      item.maxDamage = 320
      item.armorToughness = 3.0
    })
    event.modify('twilightforest:arctic_leggings', item => {
      item.maxDamage = 300
      item.armorToughness = 3.0
    })
    event.modify('twilightforest:arctic_boots', item => {
      item.maxDamage = 260
      item.armorToughness = 3.0
    })

    //幻影装备
    event.modify('twilightforest:phantom_helmet', item => {
      item.maxDamage = 660
      item.armorProtection = 4.5
    })
    event.modify('twilightforest:phantom_chestplate', item => {
      item.maxDamage = 960
      item.armorProtection = 9.5
    })

    //骑士装备
    event.modify('twilightforest:block_and_chain', item => {
      item.maxDamage = 220
    })
    event.modify('twilightforest:knightmetal_helmet', item => {
      item.maxDamage = 440
      item.armorProtection = 3.5
    })
    event.modify('twilightforest:knightmetal_chestplate', item => {
      item.maxDamage = 640
      item.armorProtection = 8.5
    })
    event.modify('twilightforest:knightmetal_leggings', item => {
      item.maxDamage = 600
      item.armorProtection = 6.5
    })
    event.modify('twilightforest:knightmetal_boots', item => {
      item.maxDamage = 520
      item.armorProtection = 3.5
    })
    event.modify('twilightforest:knightmetal_sword', item => {
      item.maxDamage = 1024
    })
    event.modify('twilightforest:knightmetal_pickaxe', item => {
      item.maxDamage = 1024
    })
    event.modify('twilightforest:knightmetal_axe', item => {
      item.maxDamage = 1024
    })

    //雪怪装备
    event.modify('twilightforest:yeti_helmet', item => {
      item.maxDamage = 440
      item.armorToughness = 4.5
    })
    event.modify('twilightforest:yeti_chestplate', item => {
      item.maxDamage = 620
      item.armorProtection = 8.0
      item.armorToughness = 3.5
    })
    event.modify('twilightforest:yeti_leggings', item => {
      item.maxDamage = 600
      item.armorToughness = 3.5
    })
    event.modify('twilightforest:yeti_boots', item => {
      item.maxDamage = 520
      item.armorToughness = 3.5
    })

    //炽铁装备
    event.modify('twilightforest:fiery_helmet', item => {
      item.maxDamage = 750
      item.armorToughness = 2.0
    })
    event.modify('twilightforest:fiery_chestplate', item => {
      item.maxDamage = 850
      item.armorToughness = 2.0
    })
    event.modify('twilightforest:fiery_leggings', item => {
      item.maxDamage = 800
      item.armorToughness = 2.0
    })
    event.modify('twilightforest:fiery_boots', item => {
      item.maxDamage = 750
      item.armorToughness = 2.0
    })
    event.modify('twilightforest:fiery_sword', item => {
      item.maxDamage = 2500
    })
    event.modify('twilightforest:fiery_pickaxe', item => {
      item.maxDamage = 2500
    })

})