// priority: 500

console.info('Hello, World! (You will see this line every time server resources reload)')


ServerEvents.recipes(event => {
    //删除配方

    event.remove('trials:bolt_smith_trim')//镶铆饰纹
    event.remove('trials:flow_smith_trim')//涡流饰纹
    //event.remove({output: 'goety_cataclysm:battlefield_focus'})//战墟聚晶

    event.remove({output: 'goety:empty_focus'})//空法术聚晶
    event.remove({output: 'goety:frost_nova_focus'})//霜冻新星

    event.remove({output: 'quark:carrot_crate'})//箱装物品
    event.remove({output: 'quark:beetroot_crate'})
    event.remove({output: 'quark:potato_crate'})
    event.remove({output: 'quark:chorus_fruit_block'})

    event.remove({output: 'eeeabsmobs:ghost_warrior_helmet'}) //幽冥
    event.remove({output: 'eeeabsmobs:ghost_warrior_chestplate'})
    event.remove({output: 'eeeabsmobs:ghost_warrior_leggings'})
    event.remove({output: 'eeeabsmobs:ghost_warrior_boots'})

    //event.remove('touhou_little_maid:broom')//魔理沙的扫帚
    event.remove({output: 'twilightforest:uncrafting_table'})//拆解台
    event.remove({output: 'twilightforest:charm_of_keeping_2'})//保管护符
    event.remove({output: 'twilightforest:charm_of_keeping_3'})
    event.remove({output: 'twilightforest:arctic_helmet'})//极地装备
    event.remove({output: 'twilightforest:arctic_chestplate'})
    event.remove({output: 'twilightforest:arctic_leggings'})
    event.remove({output: 'twilightforest:arctic_boots'})
    event.remove({output: 'meetyourfight:dusk_key'})//薄暮之钥
    event.remove({output: 'cataclysm:ancient_spear'})//远古长矛
    event.remove({output: 'gwrexpansions:maws_of_gluttony'})//暴食之袋
    event.remove({output: 'better_minoshroomtaur:better_minotaur_axe'})//超级米诺陶战斧
    event.remove({output: 'minecraft:beetroot_soup'})//甜菜汤
    event.remove({output: 'enderitemod:enderite_respawn_anchor'})//末影合金重生锚
    //event.remove({output: 'minecraft:lodestone'})//磁石
    event.remove({output: 'minecraft:recovery_compass'})//追溯指针
    event.remove({output: 'enderitemod:enderite_upgrade_smithing_template'})//末影合金锻造模板
    event.remove({output: 'quark:berry_sack'})//袋装甜浆果
    event.remove({output: 'berry_good:glow_berry_basket'})//箱装发光浆果
    event.remove({output: 'minecraft:ender_eye'})//末影之眼
    event.remove({output: 'cataclysm:chiseled_purpur_block'})//雕纹紫珀块
    event.remove({output: 'mermod:sea_necklace'})//海之项链
    event.remove({output: 'minecraft:conduit'})//潮涌核心
    //event.remove({output: 'hook_bell:hook_bell'})//召集之钟
    event.remove({output: 'catburger:cat_burger'})//猫猫汉堡
    event.remove({output: 'immersive_aircraft:gyroscope'})//陀螺仪
    event.remove({output: 'immersive_aircraft:industrial_gears'})//工业齿轮
    event.remove({output: 'immersive_aircraft:sturdy_pipes'})//加固管道
    event.remove({output: 'immersive_aircraft:improved_landing_gear'})//改良起落架
    event.remove({output: 'immersive_aircraft:enhanced_propeller'})//增强型螺旋桨
    event.remove({output: 'gunswithoutroses:blaze_gun'})//烈焰枪
    //event.remove({output: 'gunswithoutroses:explosive_bullet'})//爆炸子弹（导致崩溃问题，新版已修复）
    event.remove({output: 'goety:fanged_dagger'})//尖牙匕首

    event.remove({type: 'minecraft:crafting_shaped', output: 'aether:leather_gloves'}) //手套
    event.remove({type: 'minecraft:crafting_shaped', output: 'aether:chainmail_gloves'})
    event.remove({type: 'minecraft:crafting_shaped', output: 'aether:iron_gloves'})
    event.remove({type: 'minecraft:crafting_shaped', output: 'aether:golden_gloves'})
    event.remove({type: 'minecraft:crafting_shaped', output: 'aether:diamond_gloves'})



    event.remove({output: 'aether_redux:sentry_ring'})//哨石卫戒
    event.remove({output: 'umbral_skies:yeti_gloves'})//雪怪手套

    event.remove({output: 'enchantinginfuser:enchanting_infuser'})//高级附魔台
    event.remove({output: 'enchantinginfuser:advanced_enchanting_infuser'})

    event.remove({output: 'minecraft:netherite_ingot'})//下界合金锭
    event.remove({output: 'enderitemod:enderite_ingot'})//末影合金锭

    event.remove({output: 'cataclysm:blazing_grips'})//炽热之握

    event.remove({output: 'royalvariations:spiritual_crown'})//灵性王冠
    event.remove({output: 'royalvariations:spectral_gauntlet'})//灵能护手
    event.remove({output: 'mutantmonsters:creeper_minion_tracker'})//苦力怕仆从调试器

    event.remove({output: 'exlinecopperequipment:copper_nugget'})//铜粒
    event.remove({output: 'minecraft:iron_nugget'})//铁粒
    event.remove({output: 'minecraft:gold_nugget'})//金粒
    event.remove({output: 'minecraft:amethyst_shard'})//农夫乐事紫水晶
    event.remove({output: 'minecraft:string'})//线

    event.remove({output: 'cataclysm:ignitium_helmet'})//腾炎装备
    event.remove({output: 'cataclysm:ignitium_chestplate'})
    event.remove({output: 'cataclysm:ignitium_leggings'})
    event.remove({output: 'cataclysm:ignitium_boots'})

    event.remove({output: 'cataclysm:cursium_helmet'})//咒魂装备
    event.remove({output: 'cataclysm:cursium_chestplate'})
    event.remove({output: 'cataclysm:cursium_leggings'})
    event.remove({output: 'cataclysm:cursium_boots'})


})