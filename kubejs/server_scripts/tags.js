//生物标签
ServerEvents.tags("entity_type", event => {

    event.add("radiation_zone_reborn:radiation_zone_mob", "eeeabsmobs:guling_sentinel")//辐射荒原生物兼容
    event.add("radiation_zone_reborn:radiation_zone_mob", "eeeabsmobs:guling_sentinel_heavy")
    event.add("radiation_zone_reborn:radiation_zone_mob", "eeeabsmobs:nameless_guardian")
    event.add("radiation_zone_reborn:radiation_zone_mob", "eeeabsmobs:the_immortal")
    event.add("radiation_zone_reborn:radiation_zone_mob", "bosses_of_mass_destruction:void_blossom")
    event.add("radiation_zone_reborn:radiation_zone_mob", "cataclysm:the_watcher")

    event.add("radiation_zone_reborn:radiation_zone_mob", "mutantmonsters:mutant_enderman")
    event.add("radiation_zone_reborn:radiation_zone_mob", "mutantmonsters:mutant_zombie")
    event.add("radiation_zone_reborn:radiation_zone_mob", "mutantmonsters:mutant_skeleton")
    event.add("radiation_zone_reborn:radiation_zone_mob", "mutantmonsters:mutant_creeper")
    event.add("radiation_zone_reborn:radiation_zone_mob", "mutantmore:mutant_husk")
    event.add("radiation_zone_reborn:radiation_zone_mob", "mutantmore:mutant_jungle_zombie")
    event.add("radiation_zone_reborn:radiation_zone_mob", "mutantmore:mutant_frozen_zombie")

    //event.remove("dungeons_arise:heavenly_challenger", "#minecraft:is_jungle")
    //event.remove("dungeons_arise:heavenly_challenger", "#minecraft:is_forest")
    //event.remove("dungeons_arise:heavenly_challenger", "minecraft:desert")
    //event.remove("dungeons_arise:heavenly_challenger", "minecraft:plains")
    //event.remove("dungeons_arise:heavenly_challenger", "minecraft:sunflower_plains")
    //event.remove("dungeons_arise:heavenly_challenger", "minecraft:savanna")
    //event.remove("dungeons_arise:heavenly_challenger", "minecraft:savanna_plateau")
    //event.remove("dungeons_arise:heavenly_challenger", "minecraft:end_midlands")
    //event.remove("dungeons_arise:heavenly_challenger", "minecraft:end_highlands")
});

//方块标签
ServerEvents.tags("block", event => {
    event.add("minecraft:needs_iron_tool", "minecraft:spawner")//刷怪笼
    event.add("crockpot:unknown_crops", 'minecraft:wheat')//烹饪锅兼容
    event.add("crockpot:unknown_crops", 'minecraft:melon_stem')
    event.add("crockpot:unknown_crops", 'minecraft:beetroots')
    event.add("crockpot:unknown_crops", 'minecraft:pumpkin_stem')
    event.add("crockpot:unknown_crops", 'supplementaries:flax')
    event.add("crockpot:unknown_crops", 'farmersdelight:cabbage_seeds')
    event.add("crockpot:unknown_crops", 'farmersdelight:tomato_seeds')
    event.add("crockpot:unknown_crops", 'farmersdelight:rice')

    event.remove("meetyourfight:blocks_passages_toll", "minecraft:bedrock") //旅人之钟黑名单
    event.remove("meetyourfight:blocks_passages_toll", "minecraft:barrier")
    //event.add("meetyourfight:blocks_passages_toll", "minecraft:smooth_quartz_slab")
    //event.add("meetyourfight:blocks_passages_toll", "minecraft:calcite") 
});

//物品标签（移除）
ServerEvents.tags("item", event => {
    event.remove("artifacts:slot/necklace", "artifacts:charm_of_sinking")
    event.remove("artifacts:slot/belt", "artifacts:crystal_heart")
    event.remove("artifacts:slot/belt", "artifacts:chorus_totem")
    event.remove("artifacts:slot/belt", "artifacts:obsidian_skull")
    event.remove("artifacts:slot/belt", "artifacts:antidote_vessel")
    event.remove("artifacts:slot/belt", "artifacts:universal_attractor")
    event.remove("artifacts:slot/hands", "artifacts:onion_ring")
    event.remove("curios:head", "meetyourfight:blossoming_mind")
    event.remove('forge:ender_pearls', 'royalvariations:royal_ender_pearl')//皇家末影珍珠
    event.remove("curios:necklace", "cataclysm:vitality_ankh")
    event.remove("curios:necklace", "cataclysm:berserker_soul_amulet")
    event.remove("curios:rings", "cataclysm:ring_of_grudged")
    event.remove("curios:waist", "cataclysm:belt_of_beginner")

});

// 物品标签（添加）
ServerEvents.tags("item", event => {

    //event.add("minecraft:arrows", "minecraft:anvil")//铁砧

    event.add('curios:talisman', 'artifacts:cloud_in_a_bottle')//云朵瓶
    event.add('curios:talisman', 'artifacts:charm_of_sinking')//下沉护符
    event.add('curios:talisman', 'artifacts:helium_flamingo')//氦气火烈鸟
    event.add('curios:talisman', 'artifacts:chorus_totem')//紫颂图腾

    event.add("curios:charm", 'legendary_monsters:air_rune')//大气符文
    event.add("curios:charm", 'legendary_monsters:nature_crystal')//自然水晶

    event.add("curios:charm", 'goetyawaken:taboo_fragment')//禁咒碎片
    event.add("curios:charm", 'goetyawaken:soul_sapphire')//灵魂蓝宝石
    event.add("curios:charm", 'goetyawaken:fake_appointment')//伪造的任命书
    event.add("curios:charm", 'goetyawaken:eye_of_overwatch')//守望之眼
    event.add("curios:charm", 'goetyawaken:obsidian_tear')//黑曜石之泪
    event.add("curios:charm", 'goetyawaken:prison_eye')//监牢之眼
    event.add("curios:charm", 'goetyawaken:glacial_wraith_essence')//冰封幽魂质
    //event.add("curios:head", 'goetyawaken:mushroom_hat')//蘑菇帽

    event.add("curios:charm", 'meetyourfight:mossy_tooth')//藓牙

    event.add("curios:belt", "cataclysm:belt_of_beginner")//初学者腰带
    event.add("curios:charm", "cataclysm:vitality_ankh")//活力安卡
    event.add("curios:charm", "cataclysm:berserker_soul_amulet")//战魂护符
    event.add("curios:ring", "cataclysm:ring_of_grudged")//怨怒之戒
    event.add("curios:charm", "bosses_of_mass_destruction:obsidian_heart")//黑曜石之心
    event.add("curios:hands", "goety:venomous_fang")//毒牙
    event.add("curios:ring", "twilightforest:knightmetal_ring")//骑士金属环
    event.add("curios:charm", "mutantmore:mutant_husk_vocal_cords")//突变尸壳声带

    event.add('goety:focuses', 'goety_cataclysm:abyssal_mine_focus')//聚晶
    event.add('goety:focuses', 'goety_cataclysm:abyssal_beam_focus')
    event.add('goety:focuses', 'goety_cataclysm:abyssal_orb_focus')
    event.add('goety:focuses', 'goety_cataclysm:water_spear_focus')
    event.add('goety:focuses', 'goety_cataclysm:sunken_swell_focus')
    event.add('goety:focuses', 'goety_cataclysm:sunken_current_focus')
    event.add('goety:focuses', 'goety_cataclysm:sunken_tribune_focus')
    event.add('goety:focuses', 'goety_cataclysm:kakourgos_focus')
    event.add('goety:focuses', 'goety_cataclysm:polemistis_focus')

    event.add('goety:focuses', 'goety_cataclysm:kyria_focus')
    event.add('goety:focuses', 'goety_cataclysm:amethyst_cluster_focus')
    event.add('goety:focuses', 'goety_cataclysm:desert_crush_focus')
    event.add('goety:focuses', 'goety_cataclysm:earth_shake_focus')
    event.add('goety:focuses', 'goety_cataclysm:desert_raid_focus')
    event.add('goety:focuses', 'goety_cataclysm:cursed_grave_focus')
    event.add('goety:focuses', 'goety_cataclysm:cursed_cairn_focus')
    event.add('goety:focuses', 'goety_cataclysm:cursed_tomb_focus')
    event.add('goety:focuses', 'goety_cataclysm:battlefield_focus')

    event.add('goety:focuses', 'goety_cataclysm:ashen_breath_focus')
    event.add('goety:focuses', 'goety_cataclysm:extinct_flame_focus')
    event.add('goety:focuses', 'goety_cataclysm:flare_bomb_focus')
    event.add('goety:focuses', 'goety_cataclysm:death_laser_focus')
    event.add('goety:focuses', 'goety_cataclysm:lightning_spear_focus')
    event.add('goety:focuses', 'goety_cataclysm:thunder_rage_focus')
    event.add('goety:focuses', 'goety_cataclysm:storm_serpent_focus')
    event.add('goety:focuses', 'goety_cataclysm:void_rune_focus')
    event.add('goety:focuses', 'goety_cataclysm:void_vortex_focus')
    event.add('goety:focuses', 'goety_cataclysm:sandstorm_focus')

    event.add('goety:focuses', 'goety_spillage:impish_focus')
    event.add('goety:focuses', 'goety_spillage:spirit_hand_focus')
    event.add('goety:focuses', 'goety_spillage:requiem_focus')
    event.add('goety:focuses', 'goety_spillage:soul_beam_focus')

    event.add('goety:focuses', 'goetyawaken:shulker_missile_focus')
    event.add('goety:focuses', 'goetyawaken:creeper_focus')
    event.add('goety:focuses', 'goetyawaken:stare_focus')
    event.add('goety:focuses', 'goetyawaken:torment_focus')
    event.add('goety:focuses', 'goetyawaken:infestation_focus')
    event.add('goety:focuses', 'goetyawaken:killer_focus')
    event.add('goety:focuses', 'goetyawaken:wololo_focus')
    event.add('goety:focuses', 'goetyawaken:blood_rain_focus')
    event.add('goety:focuses', 'goetyawaken:agony_focus')

    event.add('goety:focuses', 'goetyawaken:desert_plagues_focus')
    event.add('goety:focuses', 'goetyawaken:death_ray_focus')
    event.add('goety:focuses', 'goetyawaken:heaven_rift_focus')
    event.add('goety:focuses', 'goetyawaken:champion_focus')
    event.add('goety:focuses', 'goetyawaken:access_focus')
    event.add('goety:focuses', 'goetyawaken:fairy_focus')
    event.add('goety:focuses', 'goetyawaken:mushroom_missile_focus')

    event.add("minecraft:piglin_loved", "radiation_zone_reborn:golden_filter_mask_helmet")//塔罗牌金制物品
    event.add("minecraft:piglin_loved", "aether:golden_gloves")
    event.add("minecraft:piglin_loved", "gunswithoutroses:gold_gun")
    event.add("minecraft:piglin_loved", "twilightforest:gold_minotaur_axe")
    event.add("minecraft:piglin_loved", "advancednetherite:netherite_gold_sword")
    event.add("minecraft:piglin_loved", "advancednetherite:netherite_gold_pickaxe")
    event.add("minecraft:piglin_loved", "advancednetherite:netherite_gold_axe")
    event.add("minecraft:piglin_loved", "advancednetherite:netherite_gold_shovel")
    event.add("minecraft:piglin_loved", "advancednetherite:netherite_gold_hoe")
    event.add("minecraft:piglin_loved", "advancednetherite:netherite_gold_helmet")
    event.add("minecraft:piglin_loved", "advancednetherite:netherite_gold_chestplate")
    event.add("minecraft:piglin_loved", "advancednetherite:netherite_gold_leggings")
    event.add("minecraft:piglin_loved", "advancednetherite:netherite_gold_boots")

    event.add("minecraft:tools", "quark:pickarang")//皮卡镖
    event.add("minecraft:tools", "quark:flamerang")

    //event.add("curios:charm", "goety_cataclysm:mechanized_core")
    //event.add("curios:head", "goety:redstone_monstrosity_head")
    //event.add("curios:head", "goety:grave_golem_skull")
    //event.add("curios:head", "goety_cataclysm:netherite_monstrosity_head")
    //event.add("curios:body", "goety_spillage:misconducted_soul")
    //event.add("curios:charm", "goety:howling_soul")
    //event.add("curios:charm", "goety:taglock_kit")
    event.add("curios:charm", "goety:withered_manuscript")
    event.add("curios:charm", "goety:soul_ruby")
    event.add("curios:charm", "goety:void_shard")
    event.add("curios:charm", "goety:void_echo")
    event.add("curios:charm", "goety:unholy_blood")
    event.add("curios:charm", "goety:heart_of_the_night")
    event.add("curios:charm", "goety:night_beacon")
    event.add("curios:charm", "goety:ominous_orb")
    event.add("curios:charm", "goety_spillage:mutation_potion")

    event.add("curios:ring", "artifacts:onion_ring")//洋葱指环

    event.add("curios:charm", "mutantmore:mutant_blaze_core")//突变烈焰人核心
    event.add("curios:hands", "mutantmore:mutant_jungle_zombie_vine_seed")//突变丛林僵尸种子
    event.add("curios:charm", "mutantmore:mutant_shulker_shell")//突变潜影壳
    event.add("curios:charm", "mutantmore:mutant_frozen_zombie_spikes")//突变冰封僵尸尖刺

    event.add("curios:charm", "radiation_zone_reborn:dustorm_eye")//沙风之眼
    event.add("curios:charm", "radiation_zone_reborn:dust_star")//沙尘之星
    event.add("curios:charm", "radiation_zone_reborn:tyrant_skin")//暴龙皮
    event.add("curios:hands", "radiation_zone_reborn:radien_jawbone")//放射人颌骨

    event.add("curios:charm", "bosses_of_mass_destruction:void_thorn")//虚空荆棘
    event.add("curios:charm", "bosses_of_mass_destruction:monolith_block")//爆破增幅器
    event.add("curios:charm", "bosses_of_mass_destruction:ancient_anima")//古代灵魂
    event.add("curios:charm", "bosses_of_mass_destruction:blazing_eye")//烈焰之眼
    event.add("curios:charm", "ba_bt:land_golem_eye")//大地守卫之眼
    event.add("curios:charm", "ba_bt:ocean_golem_eye")//海洋守卫之眼
    event.add("curios:charm", "ba_bt:core_golem_eye")//炉心守卫之眼
    event.add("curios:charm", "ba_bt:end_golem_eye")//末影守卫之眼

    event.add("curios:charm", "aethermobs:finalkey")//终末之钥
    event.add("curios:charm", "aethermobs:pyrespear")//柴薪长矛

    event.add("curios:charm", "meetyourfight:blossoming_mind")//绽放之念
    event.add("curios:charm", "minecraft:fermented_spider_eye")//发酵蛛眼
    event.add("curios:charm", "artifacts:charm_of_sinking")//下沉护符
    event.add("curios:charm", "aether_redux:veridium_lantern")//辉蓝晶灯笼
    event.add("curios:charm", "lost_aether_content:sentry_shield")//哨兵护身符
    event.add("curios:head", "lost_aether_content:swetty_mask")//史维特面具
    event.add("curios:charm", "deep_aether:medal_of_honor")//项链
    event.add("curios:charm", "aether_redux:grand_victory_medal")
    event.add("curios:charm", "aether_redux:vampire_amulet")
    event.add("curios:charm", "aether_redux:sentry_chip")//石械核芯
    event.add("curios:charm", "aether:valkyrie_cape")//披风
    event.add("curios:charm", "deep_aether:cloud_cape")
    event.add("curios:charm", "lost_aether_content:phoenix_cape")
    event.add("curios:charm", "aether:invisibility_cloak")
    event.add("curios:charm", "aether_redux:airbound_cape")
    event.add("curios:charm", "aether:swet_cape")
    event.add("curios:charm", "aether:agility_cape")
    event.add("curios:charm", "deep_aether:aercloud_necklace")
    event.add("curios:charm", "deep_aether:floaty_scarf")
    event.add("curios:charm", "deep_aether:sun_core")
    event.add("curios:charm", "deep_aether:aerwhale_saddle")

    event.add("curios:head", "friendsandfoes:wildfire_crown")//野火王冠
    event.add("curios:hands", "friendsandfoes:crab_claw")

    event.add("curios:charm", "minecraft:crafting_table")//工作台
    event.add("curios:charm", "minecraft:grindstone")//砂轮
    event.add("curios:charm", "minecraft:smithing_table")//锻造台
    event.add("curios:charm", "xpbook:xp_tome")//经验之书
    event.add("curios:charm", "minecraft:rabbit_foot")//兔子脚
    event.add("curios:charm", "xercamusic:god")//上帝之音
    event.add("curios:charm", "eeeabsmobs:guardian_core")//守护者核心
    event.add("curios:charm", "eeeabsmobs:ancient_drive_crystal")//远古驱动水晶
    event.add("curios:body", "eeeabsmobs:heart_of_pagan")//异教徒心脏
    event.add("curios:charm", "illageandspillage:totem_of_banishment")//放逐图腾
    event.add("curios:charm", "illageandspillage:spellbound_book")//咒缚书
    event.add("curios:charm", "illageandspillage:bag_of_horrors")//可怖之袋
    event.add("curios:charm", "cataclysm:abyssal_egg")//深渊之卵
    event.add("curios:charm", "goety:hook_bell")//召集之钟
    event.add("curios:charm", "minecraft:respawn_anchor")//重生锚
    event.add("curios:charm", "enderitemod:enderite_respawn_anchor")
    event.add("curios:head", "masquerader_mod:blank_mask")//面具
    event.add("curios:head", "masquerader_mod:evoker_mask")
    event.add("curios:head", "masquerader_mod:illusioner_mask")
    event.add("curios:head", "masquerader_mod:ravager_mask")
    event.add("curios:head", "masquerader_mod:witch_mask")

    event.add("curios:body", "immersive_aircraft:steel_boiler")//钢制锅炉
    event.add("curios:charm", "cataclysm:emp")//电磁脉冲装置
    event.add("curios:charm", "cataclysm:strange_key")//怪奇之钥

    event.add("curios:head", "immersive_aircraft:gyroscope_hud")//机械饰品
    event.add("curios:head", "immersive_aircraft:gyroscope_dials")
    event.add("curios:charm", "immersive_aircraft:hull_reinforcement")
    event.add("curios:charm", "immersive_aircraft:sturdy_pipes")
    event.add("curios:charm", "immersive_aircraft:industrial_gears")
    event.add("curios:charm", "immersive_aircraft:enhanced_propeller")
    
    event.add("curios:feet", "immersive_aircraft:improved_landing_gear")
    event.add("curios:feet", "immersive_aircraft:engine")
    event.add("curios:feet", "immersive_aircraft:eco_engine")
    event.add("curios:feet", "immersive_aircraft:nether_engine")
    event.add("curios:feet", "aether:sentry_boots")
    event.add("curios:feet", "lost_aether_content:agility_boots")

    event.add("forge:armors", 'better_minoshroomtaur:maze_diamond_armor_helmet')//迷宫钻石防具
    event.add("forge:armors", 'better_minoshroomtaur:maze_diamond_armor_boots')

    event.add('minecraft:trimmable_armor', 'cataclysm:ignitium_helmet')//锻造饰纹
    event.add('minecraft:trimmable_armor', 'cataclysm:ignitium_chestplate')
    event.add('minecraft:trimmable_armor', 'cataclysm:ignitium_elytra_chestplate')
    event.add('minecraft:trimmable_armor', 'cataclysm:ignitium_leggings')
    event.add('minecraft:trimmable_armor', 'cataclysm:ignitium_boots')

    event.add('minecraft:trimmable_armor', 'the_bumblezone:stingless_bee_helmet_1')
    event.add('minecraft:trimmable_armor', 'the_bumblezone:stingless_bee_helmet_2')
    event.add('minecraft:trimmable_armor', 'the_bumblezone:bumble_bee_chestplate_1')
    event.add('minecraft:trimmable_armor', 'the_bumblezone:bumble_bee_chestplate_2')
    event.add('minecraft:trimmable_armor', 'the_bumblezone:honey_bee_leggings_1')
    event.add('minecraft:trimmable_armor', 'the_bumblezone:honey_bee_leggings_2')
    event.add('minecraft:trimmable_armor', 'the_bumblezone:carpenter_bee_boots_1')
    event.add('minecraft:trimmable_armor', 'the_bumblezone:carpenter_bee_boots_2')

    event.add('minecraft:trimmable_armor', 'mutantmonsters:mutant_skeleton_chestplate')
    event.add('minecraft:trimmable_armor', 'mutantmonsters:mutant_skeleton_leggings')
    event.add('minecraft:trimmable_armor', 'mutantmonsters:mutant_skeleton_boots')

    event.add('minecraft:trimmable_armor', 'mutantmore:mutant_wither_skeleton_skull')
    event.add('minecraft:trimmable_armor', 'mutantmore:mutant_wither_skeleton_chestplate')
    event.add('minecraft:trimmable_armor', 'mutantmore:mutant_wither_skeleton_leggings')
    event.add('minecraft:trimmable_armor', 'mutantmore:mutant_wither_skeleton_boots')

    event.add('minecraft:trimmable_armor', 'royalvariations:royal_knight_helmet')
    event.add('minecraft:trimmable_armor', 'royalvariations:royal_knight_chestplate')
    event.add('minecraft:trimmable_armor', 'royalvariations:royal_knight_leggings')
    event.add('minecraft:trimmable_armor', 'royalvariations:royal_knight_boots')

    event.add('minecraft:trimmable_armor', 'aether:valkyrie_helmet')
    event.add('minecraft:trimmable_armor', 'aether:valkyrie_chestplate')
    event.add('minecraft:trimmable_armor', 'aether:valkyrie_leggings')
    event.add('minecraft:trimmable_armor', 'aether:valkyrie_boots')

    event.add('minecraft:trimmable_armor', 'goety:cursed_knight_helmet')
    event.add('minecraft:trimmable_armor', 'goety:cursed_knight_chestplate')
    event.add('minecraft:trimmable_armor', 'goety:cursed_knight_leggings')
    event.add('minecraft:trimmable_armor', 'goety:cursed_knight_boots')

    event.add('minecraft:trimmable_armor', 'goety:cursed_paladin_helmet')
    event.add('minecraft:trimmable_armor', 'goety:cursed_paladin_chestplate')
    event.add('minecraft:trimmable_armor', 'goety:cursed_paladin_leggings')
    event.add('minecraft:trimmable_armor', 'goety:cursed_paladin_boots')

    event.add('minecraft:trimmable_armor', 'goety:black_iron_helmet')
    event.add('minecraft:trimmable_armor', 'goety:black_iron_chestplate')
    event.add('minecraft:trimmable_armor', 'goety:black_iron_leggings')
    event.add('minecraft:trimmable_armor', 'goety:black_iron_boots')

    event.add('minecraft:trimmable_armor', 'goety:dark_helmet')
    event.add('minecraft:trimmable_armor', 'goety:dark_chestplate')
    event.add('minecraft:trimmable_armor', 'goety:dark_leggings')
    event.add('minecraft:trimmable_armor', 'goety:dark_boots')

    event.add('minecraft:trimmable_armor', 'goetyawaken:champion_helmet')
    event.add('minecraft:trimmable_armor', 'goetyawaken:champion_chestplate')
    event.add('minecraft:trimmable_armor', 'goetyawaken:champion_leggings')
    event.add('minecraft:trimmable_armor', 'goetyawaken:champion_boots')
    event.add('minecraft:trimmable_armor', 'goetyawaken:mushroom_hat')

    event.add('minecraft:trimmable_armor', 'radiation_zone_reborn:dustorm_chestplate_chestplate')
    event.add('minecraft:trimmable_armor', 'radiation_zone_reborn:giantrock_protective_helmet')
    event.add('minecraft:trimmable_armor', 'radiation_zone_reborn:giantrock_armor_helmet')
    event.add('minecraft:trimmable_armor', 'radiation_zone_reborn:giantrock_armor_chestplate')
    event.add('minecraft:trimmable_armor', 'radiation_zone_reborn:giantrock_armor_leggings')
    event.add('minecraft:trimmable_armor', 'radiation_zone_reborn:giantrock_armor_boots')
    event.add('minecraft:trimmable_armor', 'radiation_zone_reborn:tyrant_skin_armor_helmet')
    event.add('minecraft:trimmable_armor', 'radiation_zone_reborn:tyrant_skin_armor_chestplate')
    event.add('minecraft:trimmable_armor', 'radiation_zone_reborn:tyrant_skin_armor_leggings')
    event.add('minecraft:trimmable_armor', 'radiation_zone_reborn:tyrant_skin_armor_boots')
    event.add('minecraft:trimmable_armor', 'aethermobs:shaday_helmet')
    event.add('minecraft:trimmable_armor', 'aethermobs:shaday_chestplate')
    event.add('minecraft:trimmable_armor', 'aethermobs:shaday_leggings')
    

    event.add("fictional:cataclysmenchant", "cataclysm:the_incinerator")//灾变武器附魔
    event.add("fictional:cataclysmenchant", "cataclysm:the_immolator")
    event.add("fictional:cataclysmenchant", "cataclysm:the_annihilator")
    event.add("fictional:cataclysmenchant", "cataclysm:ancient_spear")
    event.add("fictional:cataclysmenchant", "cataclysm:soul_render")
    event.add("fictional:cataclysmenchant", "cataclysm:ceraunus")
    event.add("fictional:cataclysmenchant", "cataclysm:astrape")
    event.add("fictional:cataclysmenchant", "cataclysm:gauntlet_of_guard")
    event.add("fictional:cataclysmenchant", "cataclysm:gauntlet_of_bulwark")
    event.add("fictional:cataclysmenchant", "cataclysm:gauntlet_of_maelstrom")
    event.add("fictional:cataclysmenchant", "cataclysm:meat_shredder")
    event.add("fictional:cataclysmenchant", "cataclysm:tidal_claws")
    event.add("fictional:cataclysmenchant", "cataclysm:infernal_forge")
    event.add("fictional:cataclysmenchant", "cataclysm:void_forge")

    event.add("crockpot:unknown_crops", '#forge:seeds')//烹饪锅兼容

    event.add("quality_food:blacklist", "minecraft:honeycomb_block")//食物品质黑名单
    event.add("quality_food:blacklist", "minecraft:honeycomb")
    event.add("quality_food:blacklist", "minecraft:rotten_flesh")
    event.add("quality_food:blacklist", "minecraft:spider_eye")
    event.add("quality_food:blacklist", "minecraft:brown_mushroom")
    event.add("quality_food:blacklist", "minecraft:red_mushroom")
    event.add("quality_food:blacklist", "minecraft:nether_wart")
    event.add("quality_food:blacklist", "minecraft:sugar_cane")
    event.add("quality_food:blacklist", "minecraft:ink_sac")
    event.add("quality_food:blacklist", "supplementaries:flax")
    event.add("quality_food:blacklist", "supplementaries:flax_seeds")
    event.add("quality_food:blacklist", "the_bumblezone:honey_crystal_shards")
    event.add("quality_food:blacklist", "crockpot:unknown_seeds")

    event.add("the_bumblezone:essence/arena_does_not_replace", "gravestone:gravestone")//蜜蜂领域墓碑兼容
    event.add("minecraft:iron_bars", "gravestone:gravestone")//墓碑兼容
    event.add("supplementaries:iron_gate", "gravestone:gravestone")//墓碑兼容
    event.add("minecraft:oak_fence", "gravestone:gravestone")//墓碑兼容
    event.add("diagonalfences:minecraft/oak_fence", "gravestone:gravestone")//墓碑兼容

    event.add("curios:charm", "the_bumblezone:buzzing_briefcase")
    event.add("curios:charm", "the_bumblezone:essence_of_the_bees")
    event.add("curios:charm", "the_bumblezone:crystalline_flower")

    event.add("curios:charm", "twilightforest:cube_talisman")
    event.add("curios:charm", "minecraft:nether_star")
    event.add("curios:charm", "twilightforest:magic_beans")
    event.add("curios:charm", "twilightforest:crumble_horn")
    event.add("curios:charm", "artifacts:chorus_totem")
    event.add("curios:charm", "artifacts:crystal_heart")
    event.add("curios:charm", "mutantmonsters:creeper_minion_tracker")

    event.add("curios:body", "minecraft:heart_of_the_sea")
    event.add("curios:body", "cataclysm:void_core")
    event.add("curios:charm", "cataclysm:abyssal_sacrifice")

    event.add("curios:charm", "minecraft:enchanted_golden_apple")
    event.add("curios:charm", "meetyourfight:passages_toll")
    event.add("curios:charm", "twilightforest:peacock_feather_fan")
    event.add("curios:charm", "twilightforest:moonworm_queen")
    event.add("curios:charm", "twilightforest:moon_dial")
    event.add("curios:charm", "better_minoshroomtaur:maze_remnant_page_minoshroomtaur")
    event.add("curios:head", "cataclysm:monstrous_horn")
    event.add("curios:necklace", "cataclysm:necklace_of_the_desert")
    event.add("curios:charm", "cataclysm:essence_of_the_storm")
    event.add("curios:charm", "cataclysm:sandstorm_in_a_bottle")

    event.add("curios:charm", "royalvariations:royal_bomb")
    event.add("curios:head", "royalvariations:spiritual_crown")
    event.add("curios:charm", "royalvariations:royal_telelocator")
    event.add("curios:charm", "trials:ominous_bottle")
    event.add("curios:charm", "trials:heavy_core")
    event.add("curios:charm", "waystones:warp_stone")
    event.add("curios:necklace", "minecraft:ghast_tear")

    event.add("curios:necklace", "minecraft:ender_eye")
    event.add("curios:head", "twilightforest:magic_map_focus")
    event.add("curios:body", "twilightforest:maze_map_focus")
    event.add("curios:hands", "mutantmonsters:endersoul_hand")
    event.add("curios:charm", "lootr:trophy")
    event.add("curios:charm", "exposure:camera")
    event.add("curios:body", "minecraft:conduit")

    event.add("curios:charm", "artifacts:obsidian_skull")
    event.add("curios:charm", "artifacts:antidote_vessel")
    event.add("curios:charm", "artifacts:universal_attractor")

    event.add("curios:charm", "quark:dragon_scale")
    event.add("curios:charm", "supplementaries:altimeter")
    event.add("curios:charm", "jrftl:prepared_flesh")
    event.add("curios:charm", "minecraft:clock")
    event.add("curios:charm", "quark:soul_bead")
    event.add("curios:body", "quark:diamond_heart")
    event.add("curios:charm", "minecraft:recovery_compass")
})

