// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {

   //破损的怀表
    event.shapeless('kubejs:broken_pocketwatch', ['eeeabsmobs:ghost_steel_ingot','goetyawaken:superaggregated_mycelial_circuit','kubejs:restrictiontimer_pocketwatch'])

    //图腾转换
    event.shapeless('minecraft:totem_of_undying', ['friendsandfoes:totem_of_freezing'])
    event.shapeless('minecraft:totem_of_undying', ['friendsandfoes:totem_of_illusion'])

    //末影之手
    event.shapeless('minecraft:ender_eye', ['mutantmonsters:endersoul_hand'])

    //浮云棒
    event.shapeless('4x trials:breeze_rod', ['legendary_monsters:cloud_rod'])

    //羽毛 Feathers
    event.shapeless('kubejs:golden_feather', ['minecraft:feather','3x minecraft:gold_nugget'])
    event.shapeless('kubejs:enchanted_golden_feather', ['kubejs:golden_feather','3x minecraft:gold_nugget'])
    //甜菜根
    event.shapeless('3x minecraft:sugar', ['3x minecraft:beetroot'])
    //浆果
    event.shapeless('3x minecraft:sugar', ['3x minecraft:sweet_berries'])
    //发光浆果
    event.shapeless('3x minecraft:sugar', ['3x minecraft:glow_berries'])
    event.shapeless('2x minecraft:string', ['supplementaries:flax'])
    //晶虾分解紫水晶
    event.shapeless('4x minecraft:amethyst_shard', ['tide:crystal_shrimp'])
    //超级米诺陶战斧
    event.shapeless('better_minoshroomtaur:better_minotaur_axe', ['twilightforest:diamond_minotaur_axe','3x better_minoshroomtaur:maze_diamond'])

    //末影之眼
    event.shapeless('minecraft:ender_eye', ['minecraft:ender_pearl','minecraft:blaze_powder','minecraft:phantom_membrane','obscure_api:astral_dust'])

    //瓶中船（铸造厂）
    //event.shapeless(Item.of('wishing_fountain:wf_structure_map', '{target:"totw_modded:regular"}'), ['wishing_fountain:wf_structure_map','obscure_api:astral_dust'])

    //紫晶币
    event.shapeless('9x minecraft:amethyst_shard', ['kubejs:compressed_amethyst'])
    event.shapeless('kubejs:compressed_amethyst', ['9x minecraft:amethyst_shard'])

    //测试
    //event.shaped(Item.of('minecraft:splash_potion', '{CustomPotionEffects:[{Ambient:0b,Amplifier:0b,CurativeItems:[{Count:1b,id:"minecraft:milk_bucket"}],Duration:600,Id:207,ShowIcon:1b,ShowParticles:1b,"forge:id":"kubejs:hostility_magic_resistance"}]}'), [
    //   '   ',
    //   ' 0 ',
    //   '   '
    //], 
    //{
    //   0: 'minecraft:echo_shard',
    //})

    //缚时者的怀表
    event.shaped(Item.of('kubejs:restrictiontimer_pocketwatch'), [
       ' 1 ',
       '101',
       ' 1 '
    ], 
    {
       0: 'kubejs:covenant_purewhite',
       1: 'minecraft:clock',
    })

    //哨兵护身符
    event.shaped(Item.of('lost_aether_content:sentry_shield'), [
       '323',
       '101',
       ' 1 '
    ], 
    {
       0: 'aether_redux:snailshell_shield',
       1: 'aether_redux:gravitite_ingot',
       2: 'legendary_monsters:air_rune',
       3: 'legendary_monsters:cloud_rod'
    })

    //惊雷飞刀
    event.shaped(Item.of('4x aether:lightning_knife'), [
       ' 0 ',
       '1  ',
       '   '
    ], 
    {
       0: 'farmersdelight:iron_knife',
       1: 'legendary_monsters:cloud_rod',
    })


    //灵质
    event.shaped(Item.of('goety:ectoplasm',2), [
       ' 1 ',
       '101',
       ' 1 '
    ], 
    {
       0: 'goety:ectoplasm',
       1: 'minecraft:nether_wart',
    })
    event.shaped(Item.of('goety:ectoplasm',4), [
       '212',
       '101',
       '212'
    ], 
    {
       0: 'goety:ectoplasm',
       1: 'minecraft:nether_wart',
       2: 'goety:jade',
    })

    //冰火收集器
    event.remove({output: 'goety:ice_bouquet_trap'})
    event.shaped('goety:ice_bouquet_trap', [
       '333',
       '303',
       '333'
    ], 
    {
       0: 'goety:night_beacon',
       //1: 'mutantmore:mutant_frozen_zombie_spikes',
       //2: 'bosses_of_mass_destruction:levitation_block',
       3: 'minecraft:barrier',
    })

    //警示护符
    event.shaped('goety:alarming_charm', [
       '343',
       '101',
       '121'
    ], 
    {
       0: 'minecraft:bell',
       1: 'goety:cursed_ingot',
       2: 'goety:soul_emerald',
       3: 'minecraft:chain',
       4: 'minecraft:netherite_ingot'
    })

    //中子素致密骨头
    event.shaped('kubejs:neutronium_densebone', [
       '121',
       '405',
       '131'
    ], 
    {
       0: 'mutantmore:mutant_wither_skeleton_rib',
       1: 'goety:void_block',
       2: 'bosses_of_mass_destruction:obsidian_heart',
       3: 'better_minoshroomtaur:maze_diamond',
       4: 'advancednetherite:netherite_diamond_ingot',
       5: 'enderitemod:enderite_ingot'
    })

    //皇家末影珍珠
    event.shaped('royalvariations:royal_ender_pearl', [
       '121',
       '101',
       '111'
    ], 
    {
       0: 'minecraft:ender_pearl',
       1: 'cataclysm:void_jaw',
       2: 'royalvariations:spiritual_crown',
    })

    //皇家弓
    event.remove({output: 'royalvariations:royal_bow'})
    event.shaped('royalvariations:royal_bow', [
       ' 14',
       '304',
       ' 14'
    ], 
    {
       0: 'minecraft:bow',
       1: 'royalvariations:royal_bone',
       3: 'meetyourfight:mossy_tooth',
       4: 'twilightforest:liveroot'
    })

    //禁品草方块
    event.remove({output: 'goety:forbidden_grass'})
    event.shaped('8x goety:forbidden_grass', [
       '111',
       '101',
       '111'
    ], 
    {
       0: 'goety:forbidden_fragment',
       1: 'minecraft:grass_block',
    })

    //巨颌霰炮
    event.remove({output: 'gwrexpansions:mirecaller_shotgun'})
    event.shaped('gwrexpansions:mirecaller_shotgun', [
       '222',
       '204',
       '135'
    ], 
    {
       0: 'gwrexpansions:netherite_shotgun',
       1: 'radiation_zone_reborn:tyrant_eye',
       2: 'radiation_zone_reborn:giantrock_ingot',
       3: 'meetyourfight:dredged_cannonade',
       4: 'mutantmore:sand_cannon',
       5: 'royalvariations:royal_bomb'
    })

    //命定·柒
    event.remove({output: 'gwrexpansions:destiny_seven'})
    event.shaped('gwrexpansions:destiny_seven', [
       '166',
       '204',
       '635'
    ], 
    {
       0: 'meetyourfight:cocktail_shotgun',
       1: 'mutantmore:mutant_blaze_core',
       2: 'twilightforest:magic_beans',
       3: 'gwrexpansions:netherite_sniper',
       4: 'meetyourfight:fortunes_favor',
       5: 'better_minoshroomtaur:maze_remnant_page_minoshroomtaur',
       6: 'goetyawaken:mucilage'
    })

    //暮影蚀光
    event.remove({output: 'gwrexpansions:duskfall_eclipse_blaster'})
    event.shaped('gwrexpansions:duskfall_eclipse_blaster', [
       '771',
       '204',
       '638'
    ], 
    {
       0: 'gwrexpansions:netherite_gatling',
       1: 'mutantmore:mutant_shulker_shell',
       2: 'mutantmore:mutant_jungle_zombie_vine_seed',
       3: 'meetyourfight:phantasmal_rifle',
       4: 'meetyourfight:violet_bloom',
       6: 'enderitemod:enderite_ingot',
       7: 'goetyawaken:mucilage',
       8: 'better_minoshroomtaur:maze_remnant_page_minoshroomtaur'
    })

    //爆破增幅器
    event.remove({output: 'bosses_of_mass_destruction:monolith_block'})
    event.shaped('bosses_of_mass_destruction:monolith_block', [
       '222',
       '202',
       '313'
    ], 
    {
       0: 'bosses_of_mass_destruction:blazing_eye',
       1: 'bosses_of_mass_destruction:obsidian_heart',
       2: 'minecraft:obsidian',
       3: 'cataclysm:witherite_ingot'
    })

    //暗影精粹
    event.shaped('2x goety:shadow_essence', [
       '212',
       '101',
       '212'
    ], 
    {
       0: 'goety:shadow_essence',
       1: 'goety:ectoplasm',
       2: 'obscure_api:astral_dust',
    })

    //余烬合金锭
    event.remove({output: 'goetyawaken:gilded_ingot'})
    event.shaped('2x goetyawaken:gilded_ingot', [
       '212',
       '101',
       '212'
    ], 
    {
       0: 'goetyawaken:gilded_ingot',
       1: 'goetyawaken:glowing_ember',
       2: 'obscure_api:astral_dust'
    })

    //撕裂聚晶
    event.remove({output: 'goety:rupture_focus'})
    event.shaped('goety:rupture_focus', [
       '434',
       '206',
       '515'
    ], 
    {
       0: 'goety:tunnel_focus',
       1: 'minecraft:dragon_head',
       2: 'goety_cataclysm:void_rune_focus',
       3: 'goety:void_echo',
       4: 'goety:void_shard',
       5: 'minecraft:crying_obsidian',
       6: 'goety_cataclysm:void_vortex_focus'
    })


    //烬息
    event.remove({output: 'goety_cataclysm:ashen_breath_focus'})
    event.shaped('goety_cataclysm:ashen_breath_focus', [
       '212',
       '101',
       '212'
    ], 
    {
       0: 'goety:fire_breath_focus',
       1: 'friendsandfoes:wildfire_crown_fragment',
       2: 'minecraft:magma_cream',
    })

    //无尽手杖
    event.remove({output: 'constructionwand:infinity_wand'})
    event.shaped('constructionwand:infinity_wand', [
       '  1',
       ' 0 ',
       '   '
    ], 
    {
       0: 'constructionwand:diamond_wand',
       1: 'beyonddimensions:stable_space_time_fragment',
    })

    //怪异法袍
    event.shaped('goety_spillage:freaky_robe', [
       '454',
       '203',
       '414'
    ], 
    {
       0: 'illageandspillage:bag_of_horrors',
       1: 'goety:dark_robe',
       2: 'goety_spillage:pumpkin_bomb',
       3: 'goety_spillage:skull_bomb',
       4: 'goety_spillage:mutated_flesh',
       5: 'goety:dark_fabric'
    })

    //华丽头巾
    event.shaped('goety:grand_turban', [
       '454',
       '303',
       '313'
    ], 
    {
       0: 'goety_spillage:freaky_hat',
       1: 'goety:vexing_focus',
       3: 'goety:occult_fabric',
       4: 'goety:magic_fabric',
       5: 'goety:soul_ruby'
    })

    //华丽长袍
    event.shaped('goety:grand_robe', [
       '454',
       '303',
       '333'
    ], 
    {
       0: 'goety:illusion_robe',
       3: 'goety:occult_fabric',
       4: 'goety:magic_fabric',
       5: 'goety:soul_ruby'
    })

    //风爆
    event.remove({output: 'goety:wind_blast_focus'})
    event.shaped('goety:wind_blast_focus', [
       '131',
       '303',
       '131'
    ], 
    {
       0: 'goety:wind_core',
       1: 'minecraft:feather',
       3: '#minecraft:wool'
    })

    //头骨
    event.shaped('64x gwrexpansions:skull', [
       '121',
       '202',
       '121'
    ], 
    {
       0: 'gwrexpansions:skull',
       1: 'minecraft:bone',
       2: 'minecraft:iron_ingot'
    })

    //腐化之心
    event.shaped('kubejs:corrupting_heart', [
       '113',
       '102',
       '221'
    ], 
    {
       0: 'kubejs:caerula_heart',
       1: 'minecraft:gold_block',
       2: 'minecraft:emerald_block',
       3: 'beyonddimensions:shattered_space_time_crystallization'
    })
    event.shaped('kubejs:caerula_heart', [
       '121',
       '202',
       '131'
    ], 
    {
       0: 'minecraft:heart_of_the_sea',
       1: 'goety_cataclysm:abyss_essence',
       2: 'cataclysm:lacrima',
       3: 'goetyawaken:profound_echoing_shard'
    })

    event.shaped('kubejs:caerula_heart', [
       '113',
       '201',
       '122'
    ], 
    {
       0: 'kubejs:corrupting_heart',
       1: 'minecraft:lapis_block',
       2: 'minecraft:sculk',
       3: 'cataclysm:lacrima'
    })

    //梦之笛
    event.shaped('kubejs:taodix', [
       '123',
       '405',
       '678'
    ], 
    {
       0: 'deep_aether:aerwhale_saddle',
       1: 'xercamusic:tubular_bell',
       2: 'xercamusic:violin',
       3: 'xercamusic:piano',
       4: 'xercamusic:god',
       5: 'xercamusic:drum',
       6: 'touhou_little_maid:servant_bell',
       7: 'xercamusic:lyre',
       8: 'quark:iron_rod',
    })

    //破坏核心
    event.remove({output: 'constructionwand:core_destruction'})
    event.shaped('constructionwand:core_destruction', [
       '231',
       '303',
       '132'
    ], 
    {
       0: 'ba_bt:core_golem_eye',
       1: 'minecraft:netherite_pickaxe',
       2: 'twilightforest:mazebreaker_pickaxe',
       3: '#forge:glass_panes'
    })

    //液态虚空桶
    event.shaped('goety:void_bucket', [
       ' 1 ',
       '101',
       ' 1 '
    ], 
    {
       0: 'the_bumblezone:honey_bucket',
       1: 'goety:void_bottle',
    })

    //黑曜石奶奶锭
    event.shaped('kubejs:citlali_ingot', [
       '212',
       '101',
       '212'
    ], 
    {
       0: 'bosses_of_mass_destruction:obsidian_heart',
       1: 'minecraft:obsidian',
       2: 'aether_treasure_reforging:pyral_ingot'
    })

    //附魔图书馆
    event.remove({output: 'enchlibathome:library'})
    event.shaped('enchlibathome:library', [
       '313',
       '303',
       '333'
    ], 
    {
       0: 'minecraft:enchanting_table',
       1: 'ba_bt:land_golem_eye',
       3: '#forge:bookshelves'
    })

    //黑暗卷轴
    event.remove({output: 'goety:dark_scroll'})
    event.shaped('goety:dark_scroll', [
       '313',
       '303',
       '323'
    ], 
    {
       0: 'minecraft:totem_of_undying',
       1: 'bosses_of_mass_destruction:soul_star',
       2: 'goety:dark_fabric',
       3: 'goety:magic_fabric'
    })

    //灵魂图腾
    event.remove({output: 'goety:totem_of_souls'})
    event.shaped('goety:totem_of_souls', [
       '414',
       '303',
       ' 2 '
    ], 
    {
       0: 'goety:totem_of_roots',
       1: 'goety:empty_focus',
       2: 'minecraft:soul_lantern',
       3: 'twilightforest:charm_of_keeping_1',
       4: 'goety:magic_emerald'
    })
    event.shaped('goety:totem_of_souls', [
       '414',
       '303',
       ' 2 '
    ], 
    {
       0: 'goety:totem_of_roots',
       1: 'goety:empty_focus',
       2: 'minecraft:soul_lantern',
       3: 'obscure_api:astral_dust',
       4: 'goety:magic_emerald'
    })
    event.shaped('goety:totem_of_souls', [
       ' 1 ',
       '101',
       ' 1 '
    ], 
    {
       0: 'goety:spent_totem',
       1: 'goety:magic_emerald',
    })

    //网络喂食器
    event.remove({output: 'beyonddimensions:net_feeder_item'})
    //网络熔炉
    event.remove({output:'beyonddimensions:net_furnace_block'});
    event.shaped('beyonddimensions:net_furnace_block', [
       ' 1 ',
       '202',
       '222'
    ], 
    {
       0: 'beyonddimensions:dimensional_connect_block',
       1: 'beyonddimensions:stable_space_time_fragment',
       2: 'minecraft:furnace',
    })
    //经验棒
    event.remove({output:'beyonddimensions:xp_exchange_item'});
    event.shaped('beyonddimensions:xp_exchange_item', [
       ' 21',
       ' 02',
       '3  '
    ], 
    {
       0: 'beyonddimensions:stable_space_time_fragment',
       1: 'minecraft:amethyst_shard',
       2: 'xpbook:xp_tome',
       3: 'aether:nature_staff'
    })

    //混沌（监狱）之眼
    event.remove({output:'goetyawaken:prison_eye'});
    event.shaped('goetyawaken:prison_eye', [
       '123',
       '495',
       '678'
    ], 
    {
       1: 'cataclysm:monstrous_eye',
       2: 'cataclysm:void_eye',
       3: 'cataclysm:mech_eye',
       4: 'cataclysm:desert_eye',
       5: 'cataclysm:abyss_eye',
       6: 'cataclysm:cursed_eye',
       7: 'cataclysm:flame_eye',
       8: 'cataclysm:storm_eye',
       9: 'radiation_zone_reborn:tyrant_eye',
    })

    //死亡射线
    event.shaped('goetyawaken:death_ray_focus', [
       ' 1 ',
       '101',
       ' 2 '
    ], 
    {
       0: 'goety:soul_bolt_focus',
       1: 'goety:ectoplasm',
       2: 'twilightforest:twilight_scepter',
    })

    //幸运猫吊坠
    event.shaped('kubejs:luckitten_pendant', [
       '111',
       '101',
       '324'
    ], 
    {
       0: 'goetyawaken:glacial_wraith_essence',
       1: 'radiation_zone_reborn:sedisilver_ingot',
       2: 'farmersdelight:grilled_salmon',
       3: 'farmersdelight:baked_cod_stew',
       4: 'farmersdelight:fish_stew',
    })

    //动力手套
    event.shaped('lost_aether_content:power_gloves', [
       '   ',
       '120',
       '343'
    ], 
    {
       0: 'aether:valkyrie_gloves',
       1: 'aether:netherite_gloves',
       2: 'legendary_monsters:air_rune',
       3: 'legendary_monsters:cloud_rod',
       4: 'aether_redux:gravitite_ingot'
    })

    //隐形宝石
    event.shaped('lost_aether_content:invincibility_gem', [
       '212',
       '101',
       '212'
    ], 
    {
       0: 'legendary_monsters:air_rune',
       1: 'goety:soul_emerald',
       2: 'legendary_monsters:cloud_rod',
    })

    //创世者坚盾
    event.shaped('lost_aether_content:shield_of_emile', [
       '212',
       '303',
       ' 3 '
    ], 
    {
       0: 'twilightforest:knightmetal_shield',
       1: 'legendary_monsters:air_rune',
       2: 'aether_treasure_reforging:valkyrum_ingot',
       3: 'legendary_monsters:cloud_rod'
    })

    //雷霆之锤
    event.shaped('goety:stormlander', [
       '313',
       '303',
       ' 2 '
    ], 
    {
       0: 'goety:bonehead_hammer',
       1: 'goety:thunderbolt_focus',
       2: 'artifacts:shock_pendant',
       3: 'legendary_monsters:cloud_rod'
    })

    //虚空瓶
    event.shaped('goety:void_bottle', [
       ' 1 ',
       '101',
       ' 1 '
    ], 
    {
       0: 'minecraft:glass_bottle',
       1: 'cataclysm:void_jaw',
    })

    //黑暗铁砧
    event.remove({output:'goety:dark_anvil'});
    event.shaped('goety:dark_anvil', [
       '111',
       '101',
       '111'
    ], 
    {
       0: 'minecraft:anvil',
       1: 'goety:dark_ingot',
    })

    //幽冥钢模板
    event.remove({output:'eeeabsmobs:ghost_warrior_upgrade_smithing_template'});
    event.shaped('2x eeeabsmobs:ghost_warrior_upgrade_smithing_template', [
       '101',
       '121',
       '111'
    ], 
    {
       0: 'eeeabsmobs:ghost_warrior_upgrade_smithing_template',
       1: 'twilightforest:knightmetal_ingot',
       2: 'better_minoshroomtaur:maze_diamond'
    })

    //咒魂弓
    event.remove({output:'cataclysm:cursed_bow'});
    event.shaped('cataclysm:cursed_bow', [
       ' 13',
       '103',
       ' 23'
    ], 
    {
       0: 'enderitemod:enderite_bow',
       1: 'cataclysm:cursium_ingot',
       2: 'cataclysm:black_steel_ingot',
       3: 'minecraft:string',
    })

    //重生锚
    event.remove({output:'minecraft:respawn_anchor'});
    event.shaped('minecraft:respawn_anchor', [
       '111',
       '222',
       '101'
    ], 
    {
       0: 'minecraft:lodestone',
       1: 'minecraft:crying_obsidian',
       2: 'minecraft:glowstone',
    })

    //训练人偶
    event.remove({output:'dummmmmmy:target_dummy'});
    event.shaped('dummmmmmy:target_dummy', [
       ' 0 ',
       '323',
       '313'
    ], 
    {
       0: '#goety:skulls',
       1: 'minecraft:armor_stand',
       2: 'goety:soul_emerald',
       3: 'minecraft:hay_block'
    })

    //渴望戒指
    event.shaped('goety:ring_of_want', [
       '303',
       '121',
       '111'
    ], 
    {
       0: 'goety:soul_emerald',
       1: 'minecraft:lapis_lazuli',
       2: 'aether:golden_ring',
       3: 'goety:ectoplasm'
    })

    //守望之眼
    event.shaped('goetyawaken:eye_of_overwatch', [
       '212',
       '101',
       '212'
    ], 
    {
       0: 'ba_bt:end_golem_eye',
       1: 'goety:void_echo',
       2: 'goety:void_shard',
    })

    //偏执解药瓶
    event.shaped('4x kubejs:paranoia_antidote_vessel1', [
       '123',
       '405',
       '678'
    ], 
    {
       0: 'artifacts:antidote_vessel',
       1: 'artifacts:thorn_pendant',
       2: 'artifacts:cross_necklace',
       3: 'artifacts:digging_claws',
       4: 'artifacts:villager_hat',
       5: 'artifacts:night_vision_goggles',
       6: 'artifacts:steadfast_spikes',
       7: 'artifacts:flippers',
       8: 'artifacts:running_shoes',
    })
    event.shaped('4x kubejs:paranoia_antidote_vessel2', [
       '123',
       '405',
       '678'
    ], 
    {
       0: 'kubejs:paranoia_antidote_vessel1',
       1: 'eeeabsmobs:guardian_core',
       2: 'cataclysm:essence_of_the_storm',
       3: 'aether_redux:feather_of_warding',
       4: 'goety:withered_manuscript',
       5: 'xercamusic:god',
       6: 'bosses_of_mass_destruction:obsidian_heart',
       7: 'bosses_of_mass_destruction:ancient_anima',
       8: 'mutantmore:mutant_frozen_zombie_spikes',
    })

    //寻位眼镜
    event.shaped('goety:targeting_monocle', [
       '343',
       '424',
       '111'
    ], 
    {
       1: 'minecraft:gold_ingot',
       2: 'minecraft:glass_pane',
       3: 'minecraft:leather',
       4: 'goety:ectoplasm'
    })

    //灵魂方舟
    event.shaped('goety:arca', [
       '415',
       '603',
       '722'
    ], 
    {
       0: 'goety:cursed_cage',
       1: 'goety:dark_ingot',
       2: 'minecraft:respawn_anchor',
       3: 'goety:totem_of_souls',
       4: 'minecraft:recovery_compass',
       5: 'minecraft:lodestone',
       6: 'bosses_of_mass_destruction:soul_star',
       7: 'minecraft:obsidian'
    })


    //自然指南针
    event.remove({output:'naturescompass:naturescompass'});
    event.shaped('naturescompass:naturescompass', [
       ' 1 ',
       '303',
       ' 2 '
    ], 
    {
       0: 'minecraft:compass',
       1: 'ba_bt:land_golem_eye',
       2: 'meetyourfight:mossy_tooth',
       3: 'minecraft:echo_shard',
    })

    //头骨粉碎者
    event.remove({output:'gwrexpansions:skullcrusher_pulverizer'});
    event.shaped('gwrexpansions:skullcrusher_pulverizer', [
       '241',
       '304',
       ' 33'
    ], 
    {
       0: 'gwrexpansions:netherite_gatling',
       1: 'gwrexpansions:skull',
       2: 'bosses_of_mass_destruction:ancient_anima',
       3: 'twilightforest:knightmetal_ingot',
       4: 'twilightforest:steeleaf_ingot'
    })

    //黑石粉
    event.shaped('5x crockpot:blackstone_dust', [
       '010',
       '101',
       '010'
    ], 
    {
       0: 'minecraft:blackstone',
       1: 'minecraft:tnt',
    })

    //圣翼黄瓜使
    event.shaped('kubejs:saintwing_cucumberangel', [
       '303',
       '414',
       ' 2 '
    ], 
    {
       0: 'goetyawaken:gatling_charm',
       1: 'mutantmore:mutant_jungle_zombie_vine_seed',
       2: 'aether_redux:grand_victory_medal',
       3: 'aether_treasure_reforging:valkyrum_ingot',
       4: 'aether_redux:cockatrice_feather'
    })

    //网络磁铁
    event.remove({output:'beyonddimensions:net_magnet_item'});
    event.shaped('beyonddimensions:net_magnet_item', [
       ' 12',
       '103',
       ' 12'
    ], 
    {
       0: 'twilightforest:ore_magnet',
       1: 'beyonddimensions:space_time_bar',
       2: 'minecraft:netherite_ingot',
       3: 'beyonddimensions:shattered_space_time_crystallization'
    })

    //狱锻之轮
    event.remove({output:'gwrexpansions:hellforge_revolver'});
    event.shaped('gwrexpansions:hellforge_revolver', [
       '1  ',
       '121',
       ' 10'
    ], 
    {
       0: 'gunswithoutroses:blaze_gun',
       1: 'advancednetherite:netherite_gold_ingot',
       2: 'bosses_of_mass_destruction:blazing_eye',
    })

    //缠魂铃铛
    event.remove({output:'meetyourfight:haunted_bell'});
    event.shaped('meetyourfight:haunted_bell', [
       ' 0 ',
       '232',
       '212'
    ], 
    {
       0: 'royalvariations:spiritual_crown_shard',
       1: 'minecraft:cobbled_deepslate',
       2: 'minecraft:gold_ingot',
       3: 'bosses_of_mass_destruction:soul_star',
    })

    //魔鬼赌注
    event.remove({output:'meetyourfight:devils_ante'});
    event.shaped('meetyourfight:devils_ante', [
       '212',
       '131',
       '212'
    ], 
    {
       1: 'minecraft:diamond',
       2: 'minecraft:blaze_powder',
       3: 'bosses_of_mass_destruction:soul_star',
    })

    //疣猪兽拳套
    event.remove({output:'mutantmore:hogfist_gauntlet'});
    event.shaped('mutantmore:hogfist_gauntlet', [
       ' 4 ',
       '242',
       '131'
    ], 
    {
       1: 'advancednetherite:netherite_gold_ingot',
       2: 'mutantmore:mutant_hoglin_tusk',
       3: 'cataclysm:sticky_gloves',
       4: 'minecraft:bone_block'
    })

    //激光加特林
    event.remove({output:'cataclysm:laser_gatling'});
    event.shaped('cataclysm:laser_gatling', [
       '32 ',
       '212',
       ' 24'
    ], 
    {
       1: 'gwrexpansions:netherite_gatling',
       2: 'cataclysm:witherite_ingot',
       3: 'minecraft:redstone_block',
       4: 'bosses_of_mass_destruction:obsidian_heart'
    })

    //断魂战戟
    event.remove({output:'cataclysm:soul_render'});
    event.shaped('cataclysm:soul_render', [
       '113',
       '12 ',
       ' 2 '
    ], 
    {
       1: 'cataclysm:cursium_ingot',
       2: 'cataclysm:black_steel_ingot',
       3: 'enderitemod:enderite_sword',
    })

    //荒漠号角
    event.remove({output:'mutantmore:desert_horn'});
    event.shaped('mutantmore:desert_horn', [
       '111',
       '123',
       '440'
    ], 
    {
       0: 'minecraft:goat_horn',
       1: 'cataclysm:ancient_metal_ingot',
       2: 'radiation_zone_reborn:dust_star',
       3: 'mutantmore:mutant_husk_vocal_cords',
       4: 'radiation_zone_reborn:giantrock_ingot'
    })


    //沉积银武器
    event.remove({output:'radiation_zone_reborn:sedisilver_hammer'});
    event.shaped('radiation_zone_reborn:sedisilver_hammer', [
       '323',
       '212',
       '323'
    ], 
    {
       1: 'radiation_zone_reborn:decayed_stone_hammer',
       2: 'radiation_zone_reborn:sedisilver_ingot',
       3: 'radiation_zone_reborn:radioactive_flame',
    })
    event.shaped('radiation_zone_reborn:sedisilver_hammer', [
       '323',
       '212',
       '323'
    ], 
    {
       1: 'radiation_zone_reborn:dust_hammer',
       2: 'radiation_zone_reborn:sedisilver_ingot',
       3: 'radiation_zone_reborn:radioactive_flame',
    })
    event.remove({output:'radiation_zone_reborn:sedisilver_dagger'});
    event.shaped('radiation_zone_reborn:sedisilver_dagger', [
       '323',
       '212',
       '323'
    ], 
    {
       1: 'radiation_zone_reborn:decayed_stone_dagger',
       2: 'radiation_zone_reborn:sedisilver_ingot',
       3: 'radiation_zone_reborn:radioactive_flame',
    })
    event.shaped('radiation_zone_reborn:sedisilver_dagger', [
       '323',
       '212',
       '323'
    ], 
    {
       1: 'radiation_zone_reborn:rat_tooth_dagger',
       2: 'radiation_zone_reborn:sedisilver_ingot',
       3: 'radiation_zone_reborn:radioactive_flame',
    })
    event.remove({output:'radiation_zone_reborn:sedisilver_sword'});
    event.shaped('radiation_zone_reborn:sedisilver_sword', [
       '323',
       '212',
       '323'
    ], 
    {
       1: 'radiation_zone_reborn:decayed_stone_sword',
       2: 'radiation_zone_reborn:sedisilver_ingot',
       3: 'radiation_zone_reborn:radioactive_flame',
    })
    event.remove({output:'radiation_zone_reborn:sedisilver_axe'});
    event.shaped('radiation_zone_reborn:sedisilver_axe', [
       '323',
       '212',
       '323'
    ], 
    {
       1: 'radiation_zone_reborn:decayed_stone_axe',
       2: 'radiation_zone_reborn:sedisilver_ingot',
       3: 'radiation_zone_reborn:radioactive_flame',
    })
    event.remove({output:'radiation_zone_reborn:sedisilver_pickaxe'});
    event.shaped('radiation_zone_reborn:sedisilver_pickaxe', [
       '323',
       '212',
       '323'
    ], 
    {
       1: 'radiation_zone_reborn:decayed_stone_pickaxe',
       2: 'radiation_zone_reborn:sedisilver_ingot',
       3: 'radiation_zone_reborn:radioactive_flame',
    })
    event.remove({output:'radiation_zone_reborn:sedisilver_hoe'});
    event.shaped('radiation_zone_reborn:sedisilver_hoe', [
       '323',
       '212',
       '323'
    ], 
    {
       1: 'radiation_zone_reborn:decayed_stone_hoe',
       2: 'radiation_zone_reborn:sedisilver_ingot',
       3: 'radiation_zone_reborn:radioactive_flame',
    })
    event.remove({output:'radiation_zone_reborn:sedisilver_shovel'});
    event.shaped('radiation_zone_reborn:sedisilver_shovel', [
       '323',
       '212',
       '323'
    ], 
    {
       1: 'radiation_zone_reborn:decayed_stone_shovel',
       2: 'radiation_zone_reborn:sedisilver_ingot',
       3: 'radiation_zone_reborn:radioactive_flame',
    })

    //巨岩武器
    event.remove({output:'radiation_zone_reborn:giantrock_hammer'});
    event.shaped('radiation_zone_reborn:giantrock_hammer', [
       '323',
       '212',
       '323'
    ], 
    {
       1: 'radiation_zone_reborn:sedisilver_hammer',
       2: 'radiation_zone_reborn:giantrock_ingot',
       3: 'radiation_zone_reborn:radioactive_flame',
    })
    event.remove({output:'radiation_zone_reborn:giantrock_dagger'});
    event.shaped('radiation_zone_reborn:giantrock_dagger', [
       '323',
       '212',
       '323'
    ], 
    {
       1: 'radiation_zone_reborn:sedisilver_dagger',
       2: 'radiation_zone_reborn:giantrock_ingot',
       3: 'radiation_zone_reborn:radioactive_flame',
    })
    event.remove({output:'radiation_zone_reborn:giantrock_sword'});
    event.shaped('radiation_zone_reborn:giantrock_sword', [
       '323',
       '212',
       '323'
    ], 
    {
       1: 'radiation_zone_reborn:sedisilver_sword',
       2: 'radiation_zone_reborn:giantrock_ingot',
       3: 'radiation_zone_reborn:radioactive_flame',
    })
    event.remove({output:'radiation_zone_reborn:giantrock_axe'});
    event.shaped('radiation_zone_reborn:giantrock_axe', [
       '323',
       '212',
       '323'
    ], 
    {
       1: 'radiation_zone_reborn:sedisilver_axe',
       2: 'radiation_zone_reborn:giantrock_ingot',
       3: 'radiation_zone_reborn:radioactive_flame',
    })
    event.remove({output:'radiation_zone_reborn:giantrock_pickaxe'});
    event.shaped('radiation_zone_reborn:giantrock_pickaxe', [
       '323',
       '212',
       '323'
    ], 
    {
       1: 'radiation_zone_reborn:sedisilver_pickaxe',
       2: 'radiation_zone_reborn:giantrock_ingot',
       3: 'radiation_zone_reborn:radioactive_flame',
    })
    event.remove({output:'radiation_zone_reborn:giantrock_hoe'});
    event.shaped('radiation_zone_reborn:giantrock_hoe', [
       '323',
       '212',
       '323'
    ], 
    {
       1: 'radiation_zone_reborn:sedisilver_hoe',
       2: 'radiation_zone_reborn:giantrock_ingot',
       3: 'radiation_zone_reborn:radioactive_flame',
    })
    event.remove({output:'radiation_zone_reborn:giantrock_shovel'});
    event.shaped('radiation_zone_reborn:giantrock_shovel', [
       '323',
       '212',
       '323'
    ], 
    {
       1: 'radiation_zone_reborn:sedisilver_shovel',
       2: 'radiation_zone_reborn:giantrock_ingot',
       3: 'radiation_zone_reborn:radioactive_flame',
    })

    //纯白盟约
    event.shaped('kubejs:covenant_purewhite', [
       ' 1 ',
       '101',
       ' 1 '
    ], 
    {
       0: 'minecraft:map',
       1: 'minecraft:white_dye',
    })

    //利刃盟约
    event.shaped('kubejs:covenant_sharpblade1', [
       '748',
       '506',
       '213'
    ], 
    {
       0: 'kubejs:covenant_purewhite',
       1: 'quark:diamond_heart',
       2: 'exposure:camera',
       3: 'immersive_aircraft:steel_boiler',
       4: 'minecraft:diamond_sword',
       5: 'minecraft:clock',
       6: 'supplementaries:altimeter',
       7: 'aether:iron_pendant',
       8: 'immersive_aircraft:sturdy_pipes',
    })
    event.shaped('kubejs:covenant_sharpblade2', [
       '748',
       '506',
       '213'
    ], 
    {
       0: 'kubejs:covenant_sharpblade1',
       1: 'meetyourfight:bone_raker',
       2: 'waystones:warp_stone',
       3: 'minecraft:heart_of_the_sea',
       4: 'minecraft:netherite_sword',
       5: 'twilightforest:naga_scale',
       6: 'friendsandfoes:wildfire_crown_fragment',
       7: 'twilightforest:knightmetal_sword',
       8: 'radiation_zone_reborn:sedisilver_sword',
    })
    event.shaped('kubejs:covenant_sharpblade3', [
       '678',
       '405',
       '123'
    ], 
    {
       0: 'kubejs:covenant_sharpblade2',
       1: 'mutantmore:mutant_hoglin_tusk',
       2: 'advancednetherite:netherite_diamond_ingot',
       3: 'mutantmore:mutant_blaze_core',
       4: 'meetyourfight:fortunes_favor',
       5: 'meetyourfight:phantoplasm',
       6: 'better_minoshroomtaur:maze_diamond',
       7: 'minecraft:nether_star',
       8: 'bosses_of_mass_destruction:ancient_anima',
    })
   event.shaped('kubejs:covenant_sharpblade4', [
       '548',
       '706',
       '213'
    ], 
    {
       0: 'kubejs:covenant_sharpblade3',
       1: 'enderitemod:enderite_ingot',
       2: 'mutantmore:mutant_husk_vocal_cords',
       3: 'mutantmore:mutant_frozen_zombie_spikes',
       4: 'ba_bt:end_monolith_key',
       5: 'goety:withered_manuscript',
       6: 'mutantmore:mutant_jungle_zombie_vine_seed',
       7: 'mutantmore:mutant_wither_skeleton_skull',
       8: 'bosses_of_mass_destruction:blazing_eye',
    })
    event.shaped('kubejs:covenant_sharpblade5', [
       '678',
       '105',
       '324'
    ], 
    {
       0: 'kubejs:covenant_sharpblade4',
       1: 'bosses_of_mass_destruction:obsidian_heart',
       2: 'deep_aether:stratus_ingot',
       3: 'radiation_zone_reborn:dust_star',
       4: 'radiation_zone_reborn:tyrant_skin',
       5: 'bosses_of_mass_destruction:void_thorn',
       6: 'goetyawaken:glacial_wraith_essence',
       7: 'meetyourfight:violet_bloom',
       8: 'goetyawaken:taboo_fragment',
    })

    //无光盟约
    event.shaped('kubejs:covenant_matt1', [
       '748',
       '506',
       '213'
    ], 
    {
       0: 'kubejs:covenant_purewhite',
       1: 'goety:dark_wand',
       2: 'jrftl:prepared_flesh',
       3: 'aether:golden_pendant',
       4: 'goety:totem_of_roots',
       5: 'exposure:camera',
       6: 'minecraft:fermented_spider_eye',
       7: 'goety:dark_hat',
       8: 'goety:dark_robe',
    })
    event.shaped('kubejs:covenant_matt2', [
       '748',
       '506',
       '213'
    ], 
    {
       0: 'kubejs:covenant_matt1',
       1: 'meetyourfight:mossy_tooth',
       2: 'twilightforest:magic_map_focus',
       3: 'minecraft:ghast_tear',
       4: 'goety:totem_of_souls',
       5: 'twilightforest:naga_scale',
       6: 'friendsandfoes:wildfire_crown_fragment',
       7: 'goety:ring_of_want',
       8: 'goety:targeting_monocle',
    })
    event.shaped('kubejs:covenant_matt3', [
       '678',
       '405',
       '123'
    ], 
    {
       0: 'kubejs:covenant_matt2',
       1: 'mutantmore:mutant_hoglin_tusk',
       2: 'advancednetherite:netherite_diamond_ingot',
       3: 'mutantmore:mutant_blaze_core',
       4: 'meetyourfight:fortunes_favor',
       5: 'meetyourfight:phantoplasm',
       6: 'better_minoshroomtaur:maze_diamond',
       7: 'minecraft:nether_star',
       8: 'bosses_of_mass_destruction:ancient_anima',
    })
    event.shaped('kubejs:covenant_matt4', [
       '548',
       '706',
       '213'
    ], 
    {
       0: 'kubejs:covenant_matt3',
       1: 'enderitemod:enderite_ingot',
       2: 'mutantmore:mutant_husk_vocal_cords',
       3: 'mutantmore:mutant_frozen_zombie_spikes',
       4: 'ba_bt:end_monolith_key',
       5: 'goety:withered_manuscript',
       6: 'mutantmore:mutant_jungle_zombie_vine_seed',
       7: 'mutantmore:mutant_wither_skeleton_skull',
       8: 'eeeabsmobs:heart_of_pagan',
    })
    event.shaped('kubejs:covenant_matt5', [
       '678',
       '105',
       '324'
    ], 
    {
       0: 'kubejs:covenant_matt4',
       1: 'bosses_of_mass_destruction:obsidian_heart',
       2: 'deep_aether:stratus_ingot',
       3: 'radiation_zone_reborn:dust_star',
       4: 'radiation_zone_reborn:tyrant_skin',
       5: 'bosses_of_mass_destruction:void_thorn',
       6: 'goetyawaken:glacial_wraith_essence',
       7: 'meetyourfight:violet_bloom',
       8: 'goetyawaken:taboo_fragment',
    })

    //猎人盟约
    event.shaped('kubejs:covenant_gunpowder1', [
       '748',
       '506',
       '123'
    ], 
    {
       0: 'kubejs:covenant_purewhite',
       1: 'minecraft:clock',
       2: 'gunswithoutroses:gold_gun',
       3: 'aether:golden_pendant',
       4: 'gunswithoutroses:diamond_sniper',
       5: 'exposure:camera',
       6: 'minecraft:fermented_spider_eye',
       7: 'gunswithoutroses:diamond_shotgun',
       8: 'gunswithoutroses:diamond_gatling',
    })
    event.shaped('kubejs:covenant_gunpowder2', [
       '748',
       '506',
       '213'
    ], 
    {
       0: 'kubejs:covenant_gunpowder1',
       1: 'meetyourfight:dredged_cannonade',
       2: 'deep_aether:gravitite_ring',
       3: 'aether:zanite_pendant',
       4: 'gunswithoutrosesadditions:knightmetal_shotgun',
       5: 'twilightforest:naga_scale',
       6: 'friendsandfoes:wildfire_crown_fragment',
       7: 'gunswithoutrosesadditions:veridium_revolver_infused',
       8: 'gunswithoutrosesadditions:gravitite_shotgun',
    })
   event.shaped('kubejs:covenant_gunpowder3', [
       '678',
       '405',
       '123'
    ], 
    {
       0: 'kubejs:covenant_gunpowder2',
       1: 'mutantmore:mutant_hoglin_tusk',
       2: 'advancednetherite:netherite_diamond_ingot',
       3: 'mutantmore:mutant_blaze_core',
       4: 'meetyourfight:fortunes_favor',
       5: 'meetyourfight:phantoplasm',
       6: 'better_minoshroomtaur:maze_diamond',
       7: 'minecraft:nether_star',
       8: 'bosses_of_mass_destruction:ancient_anima',
    })
    event.shaped('kubejs:covenant_gunpowder4', [
       '548',
       '706',
       '213'
    ], 
    {
       0: 'kubejs:covenant_gunpowder3',
       1: 'enderitemod:enderite_ingot',
       2: 'mutantmore:mutant_husk_vocal_cords',
       3: 'mutantmore:mutant_frozen_zombie_spikes',
       4: 'ba_bt:end_monolith_key',
       5: 'goety:withered_manuscript',
       6: 'mutantmore:mutant_jungle_zombie_vine_seed',
       7: 'mutantmore:mutant_wither_skeleton_skull',
       8: 'bosses_of_mass_destruction:blazing_eye',
    })
    event.shaped('kubejs:covenant_gunpowder5', [
       '678',
       '105',
       '324'
    ], 
    {
       0: 'kubejs:covenant_gunpowder4',
       1: 'bosses_of_mass_destruction:obsidian_heart',
       2: 'deep_aether:stratus_ingot',
       3: 'radiation_zone_reborn:dust_star',
       4: 'radiation_zone_reborn:tyrant_skin',
       5: 'bosses_of_mass_destruction:void_thorn',
       6: 'goetyawaken:glacial_wraith_essence',
       7: 'meetyourfight:violet_bloom',
       8: 'goetyawaken:taboo_fragment',
    })

    //过滤口罩
    event.remove({output:'radiation_zone_reborn:copper_filter_mask_helmet'});
    event.shaped('radiation_zone_reborn:copper_filter_mask_helmet', [
       ' 1 ',
       '131',
       '222'
    ], 
    {
       1: 'minecraft:leather',
       2: 'minecraft:copper_ingot',
       3: 'minecraft:blaze_powder',
    })
    event.remove({output:'radiation_zone_reborn:golden_filter_mask_helmet'});
    event.shaped('radiation_zone_reborn:golden_filter_mask_helmet', [
       ' 1 ',
       '232',
       '242'
    ], 
    {
       1: 'minecraft:leather',
       2: 'minecraft:gold_ingot',
       3: 'radiation_zone_reborn:copper_filter_mask_helmet',
       4: 'radiation_zone_reborn:radioactive_flame'
    })

    //防护服套装
    event.remove({output:'radiation_zone_reborn:protective_helmet'});
    event.shaped('radiation_zone_reborn:protective_helmet', [
       '333',
       '323',
       ' 1 '
    ], 
    {
       1: 'radiation_zone_reborn:golden_filter_mask_helmet',
       2: 'radiation_zone_reborn:wastefur_armor_helmet',
       3: 'radiation_zone_reborn:protective_clothing_fabric',
    })
    event.remove({output:'radiation_zone_reborn:protective_chestplate'});
    event.shaped('radiation_zone_reborn:protective_chestplate', [
       '333',
       '323',
       ' 3 '
    ], 
    {
       2: 'radiation_zone_reborn:wastefur_armor_chestplate',
       3: 'radiation_zone_reborn:protective_clothing_fabric',
    })
    event.remove({output:'radiation_zone_reborn:protective_leggings'});
    event.shaped('radiation_zone_reborn:protective_leggings', [
       '333',
       '323',
       ' 3 '
    ], 
    {
       2: 'radiation_zone_reborn:wastefur_armor_leggings',
       3: 'radiation_zone_reborn:protective_clothing_fabric',
    })
    event.remove({output:'radiation_zone_reborn:protective_boots'});
    event.shaped('radiation_zone_reborn:protective_boots', [
       '333',
       '323',
       ' 3 '
    ], 
    {
       2: 'radiation_zone_reborn:wastefur_armor_boots',
       3: 'radiation_zone_reborn:protective_clothing_fabric',
    })

    //沉积银套装
    event.remove({output:'radiation_zone_reborn:sedisilver_protective_helmet'});
    event.shaped('radiation_zone_reborn:sedisilver_protective_helmet', [
       '333',
       '313',
       '323'
    ], 
    {
       1: 'radiation_zone_reborn:protective_helmet',
       2: 'radiation_zone_reborn:radioactive_flame',
       3: 'radiation_zone_reborn:sedisilver_ingot',
    })
    event.shaped('radiation_zone_reborn:sedisilver_protective_helmet', [
       '333',
       '313',
       ' 2 '
    ], 
    {
       1: 'radiation_zone_reborn:sedisilver_armor_helmet',
       2: 'radiation_zone_reborn:golden_filter_mask_helmet',
       3: 'radiation_zone_reborn:protective_clothing_fabric',
    })
    event.remove({output:'radiation_zone_reborn:sedisilver_armor_helmet'});
    event.shaped('radiation_zone_reborn:sedisilver_armor_helmet', [
       '333',
       '313',
       '323'
    ], 
    {
       1: 'radiation_zone_reborn:wastefur_armor_helmet',
       2: 'radiation_zone_reborn:radioactive_flame',
       3: 'radiation_zone_reborn:sedisilver_ingot',
    })
    event.remove({output:'radiation_zone_reborn:sedisilver_armor_chestplate'});
    event.shaped('radiation_zone_reborn:sedisilver_armor_chestplate', [
       '333',
       '313',
       '323'
    ], 
    {
       1: 'radiation_zone_reborn:protective_chestplate',
       2: 'radiation_zone_reborn:radioactive_flame',
       3: 'radiation_zone_reborn:sedisilver_ingot',
    })
    event.remove({output:'radiation_zone_reborn:sedisilver_armor_leggings'});
    event.shaped('radiation_zone_reborn:sedisilver_armor_leggings', [
       '333',
       '313',
       '323'
    ], 
    {
       1: 'radiation_zone_reborn:protective_leggings',
       2: 'radiation_zone_reborn:radioactive_flame',
       3: 'radiation_zone_reborn:sedisilver_ingot',
    })
    event.remove({output:'radiation_zone_reborn:sedisilver_armor_boots'});
    event.shaped('radiation_zone_reborn:sedisilver_armor_boots', [
       '333',
       '313',
       '323'
    ], 
    {
       1: 'radiation_zone_reborn:protective_boots',
       2: 'radiation_zone_reborn:radioactive_flame',
       3: 'radiation_zone_reborn:sedisilver_ingot',
    })

    //沙尘剑
    event.remove({output:'radiation_zone_reborn:dustorm_sword'});
    event.shaped('radiation_zone_reborn:dustorm_sword', [
       ' 2 ',
       '313',
       ' 2 '
    ], 
    {
       1: 'radiation_zone_reborn:giantrock_sword',
       2: 'radiation_zone_reborn:dustorm_eye',
       3: 'radiation_zone_reborn:dust_rod',
    })
    event.shaped('radiation_zone_reborn:dustorm_sword', [
       ' 2 ',
       '313',
       ' 2 '
    ], 
    {
       1: 'radiation_zone_reborn:giantrock_dagger',
       2: 'radiation_zone_reborn:dustorm_eye',
       3: 'radiation_zone_reborn:dust_rod',
    })

    //飞腾台座
    event.shaped('bosses_of_mass_destruction:levitation_block', [
       ' 4 ',
       '313',
       '222'
    ], 
    {
       1: 'bosses_of_mass_destruction:obsidian_heart',
       2: 'minecraft:obsidian',
       3: 'minecraft:gold_ingot',
       4: 'bosses_of_mass_destruction:ancient_anima'
    })

    //飞腾台座
    event.shaped('bosses_of_mass_destruction:levitation_block', [
       ' 4 ',
       '313',
       '222'
    ], 
    {
       1: 'bosses_of_mass_destruction:void_thorn',
       2: 'minecraft:obsidian',
       3: 'minecraft:gold_ingot',
       4: 'bosses_of_mass_destruction:ancient_anima'
    })

    //创造模式奶帽
    event.shaped('crockpot:creative_milkmade_hat', [
       ' 4 ',
       '212',
       '232'
    ], 
    {
       1: 'crockpot:milkmade_hat',
       2: 'crockpot:netherosia',
       3: 'bosses_of_mass_destruction:levitation_block',
       4: 'quark:dragon_scale'
    })

    //创造模式玻璃剑
    event.shaped(Item.of('twilightforest:glass_sword', "{Damage:0,Unbreakable:1b,display:{Lore:['{\"translate\":\"item.twilightforest.glass_sword.desc\",\"italic\":false,\"color\":\"gray\"}']}}"), [
       ' 4 ',
       '212',
       '232'
    ], 
    {
       1: 'twilightforest:glass_sword',
       2: 'goety:shadow_essence',
       3: 'bosses_of_mass_destruction:levitation_block',
       4: 'goetyawaken:glacial_wraith_essence'
    })

    //古代铜锣
    event.shaped('goetyawaken:ancient_gong', [
       '323',
       '212',
       ' 2 '
    ], 
    {
       1: 'bosses_of_mass_destruction:soul_star',
       2: 'minecraft:copper_ingot',
       3: 'minecraft:string',
    })



    //末影守卫之眼
    event.shaped('ba_bt:end_golem_eye', [
       '242',
       '313',
       '252'
    ], 
    {
       1: 'ba_bt:core_golem_eye',
       2: 'ba_bt:end_monolith_key',
       3: 'enderitemod:enderite_ingot',
       4: 'mutantmore:mutant_shulker_shell',
       5: 'quark:dragon_scale'
    })

    //神血机械核心
    event.shaped('kubejs:divineblood_mechanizedcore', [
       '323',
       '414',
       ' 5 '
    ], 
    {
       1: 'cataclysm:witherite_block',
       2: 'goety:unholy_blood',
       3: 'advancednetherite:netherite_iron_ingot',
       4: 'cataclysm:ignitium_ingot',
       5: 'goety:void_echo'
    })

    //末地水晶
    event.remove({output:'minecraft:end_crystal'});
    event.shaped('minecraft:end_crystal', [
       '424',
       '313',
       '424'
    ], 
    {
       1: 'minecraft:ender_eye',
       2: 'minecraft:ghast_tear',
       3: 'minecraft:shulker_shell',
       4: 'quark:myalite_crystal'
    })

    //巨岩套装
    event.remove({output:'radiation_zone_reborn:giantrock_protective_helmet'});
    event.shaped('radiation_zone_reborn:giantrock_protective_helmet', [
       '333',
       '313',
       '323'
    ], 
    {
       1: 'radiation_zone_reborn:sedisilver_protective_helmet',
       2: 'radiation_zone_reborn:radioactive_flame',
       3: 'radiation_zone_reborn:giantrock_ingot',
    })
    event.shaped('radiation_zone_reborn:giantrock_protective_helmet', [
       '333',
       '313',
       ' 2 '
    ], 
    {
       1: 'radiation_zone_reborn:giantrock_armor_helmet',
       2: 'radiation_zone_reborn:golden_filter_mask_helmet',
       3: 'radiation_zone_reborn:protective_clothing_fabric',
    })
    event.remove({output:'radiation_zone_reborn:giantrock_armor_helmet'});
    event.shaped('radiation_zone_reborn:giantrock_armor_helmet', [
       '333',
       '313',
       '323'
    ], 
    {
       1: 'radiation_zone_reborn:sedisilver_armor_helmet',
       2: 'radiation_zone_reborn:radioactive_flame',
       3: 'radiation_zone_reborn:giantrock_ingot',
    })
    event.remove({output:'radiation_zone_reborn:giantrock_armor_chestplate'});
    event.shaped('radiation_zone_reborn:giantrock_armor_chestplate', [
       '333',
       '313',
       '323'
    ], 
    {
       1: 'radiation_zone_reborn:sedisilver_armor_chestplate',
       2: 'radiation_zone_reborn:radioactive_flame',
       3: 'radiation_zone_reborn:giantrock_ingot',
    })
    event.remove({output:'radiation_zone_reborn:giantrock_armor_leggings'});
    event.shaped('radiation_zone_reborn:giantrock_armor_leggings', [
       '333',
       '313',
       '323'
    ], 
    {
       1: 'radiation_zone_reborn:sedisilver_armor_leggings',
       2: 'radiation_zone_reborn:radioactive_flame',
       3: 'radiation_zone_reborn:giantrock_ingot',
    })
    event.remove({output:'radiation_zone_reborn:giantrock_armor_boots'});
    event.shaped('radiation_zone_reborn:giantrock_armor_boots', [
       '333',
       '313',
       '323'
    ], 
    {
       1: 'radiation_zone_reborn:sedisilver_armor_boots',
       2: 'radiation_zone_reborn:radioactive_flame',
       3: 'radiation_zone_reborn:giantrock_ingot',
    })

    //突变丛林僵尸手臂
    event.remove({output:'mutantmore:mutant_jungle_zombie_arm'});
    event.shaped('mutantmore:mutant_jungle_zombie_arm', [
       '131',
       '202',
       ' 1 '
    ], 
    {
       0: 'mutantmore:mutant_jungle_zombie_vine_seed',
       1: 'radiation_zone_reborn:wastefiber',
       2: 'radiation_zone_reborn:fluorescent_gel',
       3: 'bosses_of_mass_destruction:void_thorn'
    })

    //突变烈焰人护盾
    event.remove({output:'mutantmore:mutant_blaze_shields'});
    event.shaped('mutantmore:mutant_blaze_shields', [
       '212',
       '101',
       '212'
    ], 
    {
       0: 'mutantmore:mutant_blaze_core',
       1: 'advancednetherite:netherite_gold_ingot',
       2: 'minecraft:blaze_powder',
    })

    //吹叶机
    event.remove({output:'mutantmore:leafblower'});
    event.shaped('mutantmore:leafblower', [
       '202',
       '111',
       ' 1 '
    ], 
    {
       0: 'mutantmore:mutant_jungle_zombie_vine_seed',
       1: 'radiation_zone_reborn:sedisilver_ingot',
       2: 'radiation_zone_reborn:giantrock_ingot',
    })

    //尸壳战锤
    event.remove({output:'mutantmore:husk_hammer'});
    event.shaped('mutantmore:husk_hammer', [
       '111',
       '121',
       ' 0 '
    ], 
    {
       0: 'mutantmonsters:hulk_hammer',
       1: 'radiation_zone_reborn:sedisilver_ingot',
       2: 'mutantmore:mutant_husk_vocal_cords',
    })

    //疣猪兽头盔
    event.remove({output:'mutantmore:hog_helm'});
    event.shaped('mutantmore:hog_helm', [
       '121',
       '202',
       '   '
    ], 
    {
       0: 'advancednetherite:netherite_gold_helmet',
       1: 'mutantmore:mutant_hoglin_tusk',
       2: 'minecraft:netherite_ingot',
    })

    //适应性弩
    event.remove({output:'mutantmore:adaptive_crossbow'});
    event.shaped('mutantmore:adaptive_crossbow', [
       '212',
       '101',
       ' 3 '
    ], 
    {
       0: 'minecraft:crossbow',
       1: 'radiation_zone_reborn:sedisilver_ingot',
       2: 'radiation_zone_reborn:wastefiber',
       3: 'radiation_zone_reborn:giantrock_ingot',
    })

    //突变药剂
    event.remove({output:'mutantmore:incomplete_formula_y'});
    event.shaped('mutantmore:incomplete_formula_y', [
       '121',
       '101',
       ' 1 '
    ], 
    {
       0: 'radiation_zone_reborn:radioactive_flame',
       1: 'radiation_zone_reborn:radiance_crystal_shard',
       2: 'radiation_zone_reborn:radiant_pearl',
    })
    event.remove({output:'mutantmore:incomplete_compound_z'});
    event.shaped('mutantmore:compound_z', [
       '121',
       '101',
       ' 1 '
    ], 
    {
       0: 'mutantmore:incomplete_formula_y',
       1: 'radiation_zone_reborn:radiance_crystal_shard',
       2: 'radiation_zone_reborn:dust_star',
    })

    //暴龙之眼
    event.remove({output:'radiation_zone_reborn:tyrant_eye'});
    event.shaped('radiation_zone_reborn:tyrant_eye', [
       '212',
       '101',
       '212'
    ], 
    {
       0: 'radiation_zone_reborn:radiant_pearl',
       1: 'radiation_zone_reborn:giantrock_ingot',
       2: 'radiation_zone_reborn:sedisilver_ingot',
    })

    //黑铁装备
    event.shaped('goety:black_iron_helmet', [
       '121',
       '101',
       '111'
    ], 
    {
       0: 'minecraft:iron_helmet',
       1: 'goety:cursed_ingot',
       2: 'minecraft:diamond',
    })
    event.shaped('goety:black_iron_chestplate', [
       '121',
       '101',
       '111'
    ], 
    {
       0: 'minecraft:iron_chestplate',
       1: 'goety:cursed_ingot',
       2: 'minecraft:diamond',
    })
    event.shaped('goety:black_iron_leggings', [
       '121',
       '101',
       '111'
    ], 
    {
       0: 'minecraft:iron_leggings',
       1: 'goety:cursed_ingot',
       2: 'minecraft:diamond',
    })
    event.shaped('goety:black_iron_boots', [
       '121',
       '101',
       '111'
    ], 
    {
       0: 'minecraft:iron_boots',
       1: 'goety:cursed_ingot',
       2: 'minecraft:diamond',
    })

    //黑暗装备
    event.shaped('goety:dark_helmet', [
       '121',
       '101',
       '131'
    ], 
    {
       0: 'goety:black_iron_helmet',
       1: 'goety:dark_ingot',
       2: 'goety:magic_emerald',
       3: 'goety:spirit_fabric',
    })
    event.shaped('goety:dark_chestplate', [
       '121',
       '101',
       '131'
    ], 
    {
       0: 'goety:black_iron_chestplate',
       1: 'goety:dark_ingot',
       2: 'goety:magic_emerald',
       3: 'goety:spirit_fabric',
    })
    event.shaped('goety:dark_leggings', [
       '121',
       '101',
       '131'
    ], 
    {
       0: 'goety:black_iron_leggings',
       1: 'goety:dark_ingot',
       2: 'goety:magic_emerald',
       3: 'goety:spirit_fabric',
    })
    event.shaped('goety:dark_boots', [
       '121',
       '101',
       '131'
    ], 
    {
       0: 'goety:black_iron_boots',
       1: 'goety:dark_ingot',
       2: 'goety:magic_emerald',
       3: 'goety:spirit_fabric',
    })


    //巨兽霰弹枪
    event.remove({output:'gwrexpansions:netherite_monster_shotgun'});
    event.shaped('gwrexpansions:netherite_monster_shotgun', [
       '35 ',
       '312',
       ' 60'
    ], 
    {
       0: 'meetyourfight:cocktail_shotgun',
       1: 'advancednetherite:netherite_diamond_ingot',
       2: 'cataclysm:monstrous_horn',
       3: 'twilightforest:fiery_ingot',
       5: 'goety:withered_manuscript',
       6: 'radiation_zone_reborn:dust_star'
    })

    //咒魂狙击枪
    event.remove({output:'gwrexpansions:cursium_sniper'});
    event.shaped('gwrexpansions:cursium_sniper', [
       '12 ',
       '314',
       ' 30'
    ], 
    {
       0: 'meetyourfight:phantasmal_rifle',
       1: 'cataclysm:cursium_ingot',
       2: 'goetyawaken:glacial_wraith_essence',
       3: 'enderitemod:enderite_ingot',
       4: 'cataclysm:strange_key'
    })

    //虚空穿刺
    event.remove({output:'gwrexpansions:voidspike'});
    event.shaped('gwrexpansions:voidspike', [
       '52 ',
       '354',
       ' 30'
    ], 
    {
       0: 'meetyourfight:phantasmal_rifle',
       2: 'mutantmore:mutant_jungle_zombie_vine_seed',
       3: 'radiation_zone_reborn:giantrock_ingot',
       4: 'bosses_of_mass_destruction:void_thorn',
       5: 'radiation_zone_reborn:sedisilver_ingot'
    })

    //神能合金
    event.remove({output:'deep_aether:metal_mixture'});
    event.shaped('deep_aether:metal_mixture', [
       '116',
       '223',
       '450'
    ], 
    {
       0: 'aether:ambrosium_shard',
       1: 'aether_redux:veridium_block',
       2: 'aether_redux:refined_sentrite_block',
       3: 'aether:zanite_gemstone',
       4: 'deep_aether:skyjade',
       5: 'aether:golden_amber',
       6: 'obscure_api:astral_dust',
    })

    //守护者之羽
    event.remove({output:'aether_redux:feather_of_warding'});
    event.shaped('aether_redux:feather_of_warding', [
       '131',
       '101',
       ' 2 '
    ], 
    {
       0: 'aether_redux:cockatrice_feather',
       1: 'deep_aether:metal_mixture',
       2: 'aether_redux:blighted_spores',
       3: 'deep_aether:aerglow_blossom',
    })

    //云母钢
    event.remove({output:'deep_aether:stratus_ingot'});
    event.shapeless('9x deep_aether:stratus_ingot', ['deep_aether:stratus_block'])
    event.shaped('deep_aether:stratus_ingot', [
       '000',
       '613',
       '245'
    ], 
    {
       0: 'deep_aether:chromatic_aercloud',
       1: 'aether_redux:gravitite_block',
       2: 'deep_aether:metal_mixture',
       3: 'deep_aether:squall_plate',
       4: 'aether_treasure_reforging:valkyrum_ingot',
       5: 'aether_treasure_reforging:pyral_ingot',
       6: 'aether_treasure_reforging:neptune_mesh',
    })

    //高级下界合金
    event.remove({output:'advancednetherite:netherite_iron_ingot'});
    event.shapeless('9x advancednetherite:netherite_iron_ingot', ['advancednetherite:netherite_iron_block'])
    event.shaped('advancednetherite:netherite_iron_ingot', [
       '011',
       '112',
       '   '
    ], 
    {
       0: 'minecraft:netherite_ingot',
       1: 'minecraft:iron_ingot',
       2: 'obscure_api:astral_dust'
    })

    event.remove({output:'advancednetherite:netherite_gold_ingot'});
    event.shapeless('9x advancednetherite:netherite_gold_ingot', ['advancednetherite:netherite_gold_block'])
    event.shaped('advancednetherite:netherite_gold_ingot', [
       '011',
       '112',
       '   '
    ], 
    {
       0: 'advancednetherite:netherite_iron_ingot',
       1: 'minecraft:gold_ingot',
       2: 'obscure_api:astral_dust'
    })

    event.remove({output:'advancednetherite:netherite_emerald_ingot'});
    event.shapeless('9x advancednetherite:netherite_emerald_ingot', ['advancednetherite:netherite_emerald_block'])
    event.shaped('advancednetherite:netherite_emerald_ingot', [
       '011',
       '112',
       '   '
    ], 
    {
       0: 'advancednetherite:netherite_gold_ingot',
       1: 'minecraft:emerald',
       2: 'minecraft:ender_eye'
    })

    event.remove({output:'advancednetherite:netherite_diamond_ingot'});
    event.shapeless('9x advancednetherite:netherite_diamond_ingot', ['advancednetherite:netherite_diamond_block'])
    event.shaped('advancednetherite:netherite_diamond_ingot', [
       '011',
       '112',
       '   '
    ], 
    {
       0: 'advancednetherite:netherite_emerald_ingot',
       1: 'minecraft:diamond',
       2: 'minecraft:ender_eye'
    })


    //烈焰枪
    event.shaped(Item.of('gunswithoutroses:blaze_gun',1), [
        'AD ',
        'DCA',
        ' AB'
    ],
    {
        A: 'friendsandfoes:wildfire_crown_fragment',
        B: 'minecraft:netherite_ingot',
        C: 'gunswithoutroses:gold_gun',
        D: 'minecraft:blaze_rod'
    })

    //电磁脉冲装置
    event.shaped(Item.of('cataclysm:emp',1), [
        'BCB',
        ' C ',
        'BCB'
    ],
    {
        B: 'advancednetherite:netherite_iron_ingot',
        C: 'cataclysm:witherite_ingot'
    })

    //改良起落架
    event.shaped(Item.of('immersive_aircraft:improved_landing_gear',1), [
        ' BB',
        'AAB',
        'AA '
    ],
    {
        A: 'minecraft:coal_block',
        B: 'minecraft:iron_ingot'
    })

    //加固管道
    event.shaped(Item.of('immersive_aircraft:sturdy_pipes',1), [
        ' AA',
        'BAB',
        'AA '
    ],
    {
        A: 'minecraft:copper_block',
        B: 'minecraft:iron_ingot'
    })

    //工业齿轮
    event.shaped(Item.of('immersive_aircraft:industrial_gears',1), [
        ' AA',
        'BCA',
        'BB '
    ],
    {
        A: 'minecraft:copper_ingot',
        B: 'minecraft:iron_ingot',
        C: 'minecraft:netherite_scrap'
    })

    //增强型螺旋桨
    event.shaped(Item.of('immersive_aircraft:enhanced_propeller',1), [
        ' A ',
        'BCB',
        ' A '
    ],
    {
        A: 'immersive_aircraft:propeller',
        B: 'minecraft:copper_ingot',
        C: 'minecraft:netherite_scrap'
    })

    //陀螺仪
    event.shaped(Item.of('immersive_aircraft:gyroscope',1), [
        'BBB',
        'ACA',
        'BBB'
    ],
    {
        A: 'minecraft:comparator',
        B: 'minecraft:iron_ingot',
        C: 'minecraft:compass'
    })

    //人鱼项链
    event.shaped(Item.of('mermod:sea_necklace',1), [
        ' A ',
        'ACA',
        ' B '
    ],
    {
        A: 'aether_treasure_reforging:neptune_mesh',
        B: 'minecraft:conduit',
        C: 'mermod:sea_crystal'
    })

    //虚饰的空白
    event.shaped(Item.of('kubejs:feigned_blank',1), [
        ' D ',
        'ACB',
        ' E '
    ],
    {
        A: 'cataclysm:ignitium_ingot',
        B: 'cataclysm:cursium_ingot',
        C: 'cataclysm:essence_of_the_storm',
        D: 'advancednetherite:netherite_diamond_ingot',
        E: 'enderitemod:enderite_ingot'
    })

    //猫猫汉堡
    event.shaped(Item.of('catburger:cat_burger',1), [
        'BAB',
        'EBC',
        'BDB'
    ],
    {
        A: 'farmersdelight:hamburger',
        B: 'minecraft:totem_of_undying',
        C: 'mynethersdelight:nether_burger',
        D: 'twilightdelight:hydra_burger',
        E: 'twilightdelight:ghast_burger'
    })

    //医者仁心
    event.remove({output:'goetyawaken:gatling_charm'});
    event.shaped(Item.of('goetyawaken:gatling_charm',1), [
        'EAE',
        'EBE',
        ' A '
    ],
    {
        A: 'goetyawaken:mucilage',
        B: 'goetyawaken:taboo_fragment',
        E: 'goety:magic_fabric'
    })

    //召集之钟
    //event.remove({output:'goety:hook_bell'});
    event.shaped(Item.of('goety:hook_bell',1), [
        ' D ',
        'BCB',
        ' A '
    ],
    {
        A: 'minecraft:nether_star',
        B: 'minecraft:ender_eye',
        C: 'minecraft:bell',
        D: 'advancednetherite:netherite_diamond_ingot',
    })

    //潮涌核心
    event.shaped(Item.of('minecraft:conduit',1), [
        'BAB',
        'DCD',
        'BAB'
    ],
    {
        A: 'obscure_api:astral_dust',
        B: 'minecraft:nautilus_shell',
        C: 'minecraft:heart_of_the_sea',
        D: 'mermod:sea_crystal'
    })

    //炎葬
    event.remove({output:'cataclysm:the_incinerator'});
    event.shaped('cataclysm:the_incinerator', [
       ' 21',
       '212',
       '02 '
    ], 
    {
       0: 'advancednetherite:netherite_diamond_sword',
       1: 'cataclysm:ignitium_ingot',
       2: 'minecraft:blaze_rod',
    })

    //沙漠项链
    event.shaped('cataclysm:necklace_of_the_desert', [
       ' 1 ',
       '1 1',
       ' 0 '
    ], 
    {
       0: 'cataclysm:desert_eye',
       1: 'cataclysm:ancient_metal_ingot',
    })


    //拆解台
    event.shaped(Item.of('twilightforest:uncrafting_table',1), [
        'BBB',
        'DAD',
        'CCC'
    ],
    {
        A: 'twilightforest:maze_map_focus',
        B: 'twilightforest:carminite',
        C: 'minecraft:crafting_table',
        D: 'better_minoshroomtaur:maze_diamond'
    })

    //娜迦鳞片合成抗火药水
    event.shaped(Item.of('minecraft:potion', 3, '{Potion:"minecraft:long_fire_resistance"}'), [
        'BA ',
        'BB ',
        '   '
    ],
    {
        A: 'twilightforest:naga_scale',
        B: 'minecraft:glass_bottle'
    })

    //合成幸运药水
    event.shaped(Item.of('minecraft:potion', 1, '{Potion:"minecraft:luck"}'), [
        ' A ',
        ' B ',
        '   '
    ],
    {
        A: 'minecraft:pitcher_plant',
        B: 'minecraft:glass_bottle'
    })
    event.shaped(Item.of('minecraft:potion', 1, '{Potion:"minecraft:luck"}'), [
        ' A ',
        ' B ',
        '   '
    ],
    {
        A: 'minecraft:rabbit_foot',
        B: 'minecraft:glass_bottle'
    })

    //暴食之袋
    event.shaped(Item.of('gwrexpansions:maws_of_gluttony'), [
        'BDB',
        'DAD',
        'BCB'
    ],
    {
        A: 'minecraft:nether_star',
        B: 'jrftl:prepared_flesh',
        C: 'minecraft:netherite_ingot',
        D: 'obscure_api:astral_dust'
    })

    //强化螯针武器
    event.shaped(Item.of('the_bumblezone:stinger_spear', '{Damage:0}').enchant('minecraft:sharpness', 4), [
        'BBB',
        'BAB',
        'BBB'
    ],
    {
        A: 'the_bumblezone:stinger_spear',
        B: 'the_bumblezone:honey_crystal_shards'
    })
    event.shaped(Item.of('queen_bee:stinger_sword', '{Damage:0}').enchant('minecraft:sharpness', 4), [
        'BBB',
        'BAB',
        'BBB'
    ],
    {
        A: 'queen_bee:stinger_sword',
        B: 'the_bumblezone:honey_crystal_shards'
    })

    //强化重锤
    event.shaped(Item.of('trials:mace', '{Damage:0}').enchant('trials:wind_burst', 3), [
        'CBC',
        'BAB',
        'CBC'
    ],
    {
        A: 'trials:mace',
        B: 'the_bumblezone:windy_air',
        C: 'trials:wind_charge'
    })

    //超级霰弹枪
    event.shaped(Item.of('gwrexpansions:super_shotgun'), [
        'DC ',
        'CAB',
        ' BD'
    ],
    {
        A: 'gunswithoutrosesadditions:gravitite_shotgun',
        B: 'cataclysm:lacrima',
        C: 'cataclysm:essence_of_the_storm',
        D: 'deep_aether:stratus_ingot'
    })

    //远古长矛
    event.shaped(Item.of('cataclysm:ancient_spear'), [
        ' BA',
        ' BB',
        'B  '
    ],
    {
        A: 'cataclysm:sandstorm_in_a_bottle',
        B: 'cataclysm:ancient_metal_ingot'
    })

    //凋灵骷髅头
    event.shaped(Item.of('minecraft:wither_skeleton_skull', 1), [
        'CBC',
        'BAB',
        'CBC'
    ],
    {
        A: 'minecraft:skeleton_skull',
        B: 'obscure_api:astral_dust',
        C: 'minecraft:nether_wart'
    })


    //螯针合成剧毒箭
    event.shaped(Item.of('minecraft:tipped_arrow', 4, '{Potion:"minecraft:strong_poison"}'), [
        ' B ',
        'BAB',
        ' B '
    ],
    {
        A: 'queen_bee:stinger',
        B: 'minecraft:arrow'
    })

    //甜菜汤
    event.shaped(Item.of('minecraft:beetroot_soup'), [
        'BB ',
        'AB ',
        '   '
    ],
    {
        A: 'minecraft:bowl',
        B: 'minecraft:beetroot'
    })

    //红线
    event.shaped(Item.of('minecraft:string', 2), [
        'A  ',
        '   ',
        '   '
    ],
    {
        A: 'twilightforest:red_thread'
    })

    //发酵蛛眼合成虚弱箭
    event.shaped(Item.of('minecraft:tipped_arrow', 4, '{Potion:"minecraft:long_weakness"}'), [
        ' B ',
        'BAB',
        ' B '
    ],
    {
        A: 'minecraft:fermented_spider_eye',
        B: 'minecraft:arrow'
    })
    //闪烁西瓜片合成治疗箭
    event.shaped(Item.of('minecraft:tipped_arrow', 4, '{Potion:"minecraft:strong_healing"}'), [
        ' B ',
        'BAB',
        ' B '
    ],
    {
        A: 'minecraft:glistering_melon_slice',
        B: 'minecraft:arrow'
    })

    //末影合金重生锚
    event.shaped(Item.of('enderitemod:enderite_respawn_anchor',1), [
        '   ',
        'AAA',
        'BCB'
    ],
    {
        A: 'minecraft:ender_pearl',
        B: 'enderitemod:enderite_ingot',
        C: 'minecraft:respawn_anchor'
    })

    //锻造模板（饰纹）
    event.shaped(Item.of('enderitemod:enderite_upgrade_smithing_template',4), [
        'ACA',
        'ABA',
        'AAA'
    ],
    {
        A: 'minecraft:netherite_ingot',
        B: 'minecraft:end_stone',
        C: 'enderitemod:enderite_upgrade_smithing_template'
    })

    //突变骷髅分解骨粉/皮革
    event.shaped(Item.of('minecraft:bone_meal',2), [
        'A  ',
        '   ',
        '   '
    ],
    {
        A: 'mutantmonsters:mutant_skeleton_limb'
    })
    event.shaped(Item.of('minecraft:bone_meal',2), [
        'A  ',
        '   ',
        '   '
    ],
    {
        A: 'mutantmonsters:mutant_skeleton_pelvis'
    })
    event.shaped(Item.of('minecraft:bone_meal',2), [
        'A  ',
        '   ',
        '   '
    ],
    {
        A: 'mutantmonsters:mutant_skeleton_rib'
    })
    event.shaped(Item.of('minecraft:leather',2), [
        'A  ',
        '   ',
        '   '
    ],
    {
        A: 'mutantmonsters:mutant_skeleton_shoulder_pad'
    })

    //烈焰弹
    event.shaped(Item.of('minecraft:fire_charge',5), [
        'AB ',
        '   ',
        '   '
    ],
    {
        A: 'minecraft:magma_cream',
        B: 'minecraft:gunpowder'
    })

    //磁石
    //event.shaped(Item.of('minecraft:lodestone',1), [
    //    'AAA',
    //    'ABA',
    //    'AAA'
    //],
    //{
    //    A: 'minecraft:chiseled_stone_bricks',
    //    B: 'minecraft:iron_ingot'
    //})

    //追溯指针
    event.shaped(Item.of('minecraft:recovery_compass',1), [
        'AAA',
        'ABA',
        'AAA'
    ],
    {
        A: 'minecraft:echo_shard',
        B: 'minecraft:compass'
    })

    //星界粉尘制作附魔之瓶
    event.shaped(Item.of('minecraft:experience_bottle',8), [
        'A  ',
        'B  ',
        '   '
    ],
    {
        A: 'obscure_api:astral_dust',
        B: 'minecraft:glass_bottle'
    })

    //下界合金锭
    event.shaped(Item.of('minecraft:netherite_ingot',1), [
        'AAA',
        'ACC',
        'CCB'
    ],
    {
        A: 'minecraft:netherite_scrap',
        B: 'obscure_api:astral_dust',
        C: 'minecraft:gold_ingot'
    })
    event.shaped(Item.of('minecraft:netherite_ingot',9), [
        'A  ',
        '   ',
        '   '
    ],
    {
        A: 'minecraft:netherite_block'
    })

    //末影合金锭
    event.shaped(Item.of('enderitemod:enderite_ingot',1), [
        'AAA',
        'ACC',
        'CCB'
    ],
    {
        A: 'enderitemod:enderite_scrap',
        B: 'minecraft:ender_eye',
        C: 'minecraft:diamond'
    })
    event.shaped(Item.of('enderitemod:enderite_ingot',9), [
        'A  ',
        '   ',
        '   '
    ],
    {
        A: 'enderitemod:enderite_block'
    })

    //铁粒
    event.shaped(Item.of('minecraft:iron_nugget',9), [
        'A  ',
        '   ',
        '   '
    ],
    {
        A: 'minecraft:iron_ingot'
    })
    //金粒
    event.shaped(Item.of('minecraft:gold_nugget',9), [
        'A  ',
        '   ',
        '   '
    ],
    {
        A: 'minecraft:gold_ingot'
    })

    //背包
    event.shaped(Item.of('backpacked:backpack',1), [
        'AAA',
        'BCB',
        'AAA'
    ],
    {
        A: 'minecraft:leather',
        B: 'minecraft:string',
		C: 'minecraft:iron_ingot'
    })

    //火药
    event.shaped(Item.of('minecraft:gunpowder',2), [
        'AB ',
        '   ',
        '   '
    ],
    {
        A: 'minecraft:nether_wart',
        B: 'minecraft:sugar'
    })

    //板条箱
    event.shaped(Item.of('quark:crate',1), [
        ' C ',
        'CAC',
        ' C '
    ],
    {
        A: 'minecraft:barrel',
        C: 'minecraft:iron_ingot'
    })

    //木棍
    event.shaped(Item.of('minecraft:stick',16), [
        'A  ',
        'A  ',
        '   '
    ],
    {
        A: 'quark:cactus_block'
    })

    //灵能护手
    event.shaped(Item.of('royalvariations:spectral_gauntlet',1), [
        ' CC',
        'ABC',
        'DA '
    ],
    {
        A: 'minecraft:gold_ingot',
        C: 'minecraft:phantom_membrane',
        B: 'royalvariations:royal_ender_pearl',
        D: 'obscure_api:astral_dust'
    })

    //苦力怕仆从调试器
    event.shaped(Item.of('mutantmonsters:creeper_minion_tracker',1), [
        'ACA',
        'ABA',
        'ACA'
    ],
    {
        A: 'minecraft:iron_ingot',
        C: 'obscure_api:astral_dust',
        B: 'mutantmonsters:creeper_shard'
    })

    //灵性王冠
    event.shaped(Item.of('royalvariations:spiritual_crown',1), [
        ' A ',
        'ACA',
        'AAA'
    ],
    {
        A: 'royalvariations:spiritual_crown_shard',
        C: 'obscure_api:astral_dust'
    })

    //炸弹
    event.shaped(Item.of('supplementaries:bomb',4), [
        ' BC',
        'AAB',
        'AA '
    ],
    {
        A: 'minecraft:fire_charge',
        B: 'minecraft:iron_ingot',
		C: 'minecraft:string'
    })
    //靛蓝炸弹
    event.shaped(Item.of('supplementaries:bomb_blue',2), [
        'DCD',
        'CAC',
        'DCD'
    ],
    {
        A: 'supplementaries:bomb',
		C: 'minecraft:blue_dye',
        D: 'minecraft:gunpowder'
    })

    //附魔金苹果
    event.shaped(Item.of('minecraft:enchanted_golden_apple',1), [
        'BBB',
        'BAB',
        'BBB'
    ],
    {
        A: 'minecraft:apple',
		B: 'minecraft:gold_block'
    })

    //骑士金属弹
    event.shaped(Item.of('gunswithoutrosesadditions:knightmetal_bullet',64), [
       '003',
       '321',
       '111'
    ], 
    {
       0: 'twilightforest:knightmetal_ingot',
       1: 'minecraft:copper_ingot',
       2: '#forge:gunpowder',
       3: 'minecraft:iron_ingot'
    })

    //蜜蜂结晶弹
    event.shaped(Item.of('gunswithoutrosesadditions:honey_crystal_bullet',64), [
       '000',
       '021',
       '111'
    ], 
    {
       0: 'the_bumblezone:honey_crystal_shards',
       1: 'minecraft:copper_ingot',
       2: '#forge:gunpowder',
    })

    //紫晶弹
    event.shaped(Item.of('gunswithoutrosesadditions:zanite_bullet',64), [
       '000',
       '021',
       '111'
    ], 
    {
       0: 'aether:zanite_gemstone',
       1: 'minecraft:copper_ingot',
       2: '#forge:gunpowder',
    })

    //燧石弹丸
    event.shaped(Item.of('gunswithoutroses:flint_bullet',64), [
        'AAA',
        'ABC',
        'CCC'
    ],
    {
        A: 'minecraft:flint',
        B: '#forge:gunpowder',
		C: 'minecraft:copper_ingot'
    })

    //史莱姆弹丸
    event.shaped(Item.of('gwrexpansions:slime_bullet',64), [
        'AAA',
        'ABA',
        'AAC'
    ],
    {
        A: 'minecraft:iron_ingot',
        B: '#forge:gunpowder',
		  C: 'minecraft:slime_ball'
    })

    //烈焰弹丸
    event.shaped(Item.of('gunswithoutroses:blaze_bullet',64), [
        'AAA',
        'ABA',
        'AAC'
    ],
    {
        A: 'minecraft:iron_ingot',
        B: '#forge:gunpowder',
		  C: 'minecraft:blaze_powder'
    })

    //爆炸弹丸
    event.shaped(Item.of('gunswithoutroses:explosive_bullet',64), [
        'AAA',
        'ABA',
        'AAC'
    ],
    {
        A: 'minecraft:iron_ingot',
        B: '#forge:gunpowder',
		  C: 'minecraft:tnt'
    })

    //铁弹丸
    event.shaped(Item.of('gunswithoutroses:iron_bullet',64), [
        'AAA',
        'ABC',
        'CCC'
    ],
    {
        A: 'minecraft:iron_ingot',
        B: '#forge:gunpowder',
		C: 'minecraft:copper_ingot'
    })

    //金弹丸
    event.shaped(Item.of('gwrexpansions:golden_bullet',64), [
        'AAA',
        'ABC',
        'CCC'
    ],
    {
        A: 'minecraft:gold_ingot',
        B: '#forge:gunpowder',
		C: 'minecraft:copper_ingot'
    })

    //鞍
    event.shaped(Item.of('minecraft:saddle',1), [
        ' C ',
        'CAC',
        '   '
    ],
    {
        A: 'minecraft:iron_ingot',
		C: 'minecraft:leather'
    })

    //紫颂图腾
    event.shaped(Item.of('artifacts:chorus_totem',1), [
        'CAC',
        'CBC',
        ' C '
    ],
    {
        A: 'minecraft:ender_pearl',
        B: 'minecraft:totem_of_undying',
		C: 'minecraft:popped_chorus_fruit'
    })


    //箭袋
    event.shaped(Item.of('supplementaries:quiver',1), [
        ' BA',
        'BAA',
        'CA '
    ],
    {
        A: 'minecraft:leather',
        B: 'minecraft:string',
		C: 'minecraft:iron_ingot'
    })

    //三叉戟
    event.shaped(Item.of('minecraft:trident',1), [
        'CCC',
        'BAB',
        ' A '
    ],
    {
        A: 'minecraft:prismarine_shard',
        B: 'mermod:sea_crystal',
		C: 'minecraft:iron_ingot'
    })

    //沉重核心
    event.shaped(Item.of('trials:heavy_core',1), [
        'CAC',
        'ABA',
        'CAC'
    ],
    {
        C: 'minecraft:iron_ingot',
        B: 'trials:trial_key_ominous',
		A: 'minecraft:netherite_ingot'
    })

    //骨粉
    event.shaped(Item.of('minecraft:bone_meal',1), [
        'AA ',
        'AA ',
        '   '
    ],
    {
        A: 'supplementaries:ash'
    })
    event.shaped(Item.of('minecraft:bone_meal',2), [
        'A  ',
        '   ',
        '   '
    ],
    {
        A: 'minecraft:scute'
    })
    event.shaped(Item.of('minecraft:bone_meal',5), [
        'A  ',
        '   ',
        '   '
    ],
    {
        A: 'minecraft:nautilus_shell'
    })

    //火把
    event.shaped(Item.of('minecraft:torch',6), [
        'B  ',
        'A  ',
        '   '
    ],
    {
        A: 'minecraft:torch',
        B: 'minecraft:glow_ink_sac'
    })

    //煤炭
    event.shaped(Item.of('minecraft:coal',2), [
        'BB ',
        'BA ',
        '   '
    ],
    {
        A: 'minecraft:nether_wart',
        B: 'supplementaries:ash'
    })
    event.shaped(Item.of('minecraft:coal',3), [
        'BB ',
        'BA ',
        '   '
    ],
    {
        A: 'minecraft:nether_wart',
        B: 'minecraft:bone_meal'
    })

    //末影合金潜影盒
    event.shaped(Item.of('enderitemod:enderite_shulker_box',1), [
        'AB ',
        '   ',
        '   '
    ],
    {
        A: 'enderitemod:enderite_ingot',
        B: '#enderitemod:shulker_boxes'
    })

    //本整合包由 绘名青棺(Silentmo) 制作，联系QQ群：693928637

    //收纳袋
    event.shaped(Item.of('minecraft:bundle',1), [
        'ADA',
        'ACA',
        ' A '
    ],
    {
        A: 'minecraft:leather',
        C: 'twilightforest:raven_feather',
        D: 'minecraft:string'
    })

    //光灵箭
    event.shaped(Item.of('minecraft:spectral_arrow',4), [
        ' B ',
        'BAB',
        ' B '
    ],
    {
        A: 'minecraft:arrow',
        B: 'twilightforest:torchberries'
    })

    //箭
    event.shaped(Item.of('minecraft:arrow',12), [
        'BC ',
        'BA ',
        'B  '
    ],
    {
        A: 'twilightforest:raven_feather',
        B: 'minecraft:stick',
        C: 'minecraft:flint'
    })
    event.shaped(Item.of('minecraft:arrow',24), [
        'BA ',
        'BA ',
        'B  '
    ],
    {
        A: 'twilightforest:steeleaf_ingot',
        B: 'minecraft:stick'
    })

    //炽热之握
    event.shaped(Item.of('cataclysm:blazing_grips',1), [
        'DDD',
        'DAD',
        'BCB'
    ],
    {
        A: 'meetyourfight:bone_raker',
        B: 'minecraft:nether_brick',
        C: 'cataclysm:ignitium_ingot',
        D: 'twilightforest:fiery_ingot'
    })

    //生命护符
    event.shaped(Item.of('twilightforest:charm_of_life_1',1), [
        'BBB',
        'BCB',
        'BBB'
    ],
    {
        B: 'twilightforest:alpha_yeti_fur',
        C: 'twilightforest:hydra_chop'
    })

    //塔钥匙
    event.shaped(Item.of('twilightforest:tower_key',4), [
        'A  ',
        'B  ',
        'A  '
    ],
    {
        A: 'twilightforest:knightmetal_ingot',
        B: 'twilightforest:carminite'
    })

    //冰霜炸弹
    event.shaped(Item.of('twilightforest:ice_bomb',4), [
        ' B ',
        'BAB',
        ' B '
    ],
    {
        A: 'twilightforest:alpha_yeti_fur',
        B: 'minecraft:packed_ice'
    })

    //薄暮之钥
    event.shaped(Item.of('meetyourfight:dusk_key',1), [
        ' EA',
        'DCB',
        'CB '
    ],
    {
        A: 'bosses_of_mass_destruction:soul_star',
        B: 'minecraft:amethyst_shard',
        C: 'minecraft:purpur_block',
        D: 'obscure_api:astral_dust',
        E: 'minecraft:ender_eye'
    })

    //钢叶合成粗铁木
    event.shaped(Item.of('twilightforest:raw_ironwood',2), [
        'AB ',
        'CD ',
        '   '
    ],
    {
        A: 'twilightforest:liveroot',
        B: 'twilightforest:steeleaf_ingot',
        C: 'minecraft:gold_nugget',
        D: 'minecraft:raw_copper'
    })

    //立方护符
    event.shaped(Item.of('twilightforest:cube_talisman',1), [
        'FBI',
        'DAE',
        'HCG'
    ],
    {
        A: 'twilightforest:fiery_block',
        B: 'better_minoshroomtaur:maze_diamond',
        C: 'twilightforest:lamp_of_cinders',
        D: 'twilightforest:charm_of_life_2',
        E: 'twilightforest:charm_of_keeping_3',
        F: 'twilightforest:carminite_block',
        G: 'twilightforest:knightmetal_block',
        H: 'twilightforest:ironwood_block',
        I: 'twilightforest:steeleaf_block'
    })

    //极地装备
    event.shaped(Item.of('twilightforest:arctic_helmet',1), [
        ' B ',
        'BAB',
        ' B '
    ],
    {
        A: 'minecraft:leather_helmet',
        B: 'twilightforest:arctic_fur'
    })
    event.shaped(Item.of('twilightforest:arctic_chestplate',1), [
        ' B ',
        'BAB',
        ' B '
    ],
    {
        A: 'minecraft:leather_chestplate',
        B: 'twilightforest:arctic_fur'
    })
    event.shaped(Item.of('twilightforest:arctic_leggings',1), [
        ' B ',
        'BAB',
        ' B '
    ],
    {
        A: 'minecraft:leather_leggings',
        B: 'twilightforest:arctic_fur'
    })
    event.shaped(Item.of('twilightforest:arctic_boots',1), [
        ' B ',
        'BAB',
        ' B '
    ],
    {
        A: 'minecraft:leather_boots',
        B: 'twilightforest:arctic_fur'
    })

    //保管护符
    event.shaped(Item.of('twilightforest:charm_of_keeping_1',1), [
        ' CA',
        'AAB',
        '   '
    ],
    {
        A: 'twilightforest:time_planks',
        B: 'twilightforest:naga_scale',
        C: 'twilightforest:torchberries'
    })
    event.shaped(Item.of('twilightforest:charm_of_keeping_2',1), [
        'AA ',
        '   ',
        '   '
    ],
    {
        A: 'twilightforest:charm_of_keeping_1'
    })
    event.shaped(Item.of('twilightforest:charm_of_keeping_3',1), [
        'AA ',
        '   ',
        '   '
    ],
    {
        A: 'twilightforest:charm_of_keeping_2'
    })

    
})