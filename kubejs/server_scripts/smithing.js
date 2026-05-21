// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')


ServerEvents.recipes(event => {

//手套
event.smithing('umbral_skies:yeti_gloves','twilightforest:alpha_yeti_fur','umbral_skies:arctic_gloves','twilightforest:alpha_yeti_fur')

//耐久10
event.smithing(Item.of('minecraft:enchanted_book').enchant('minecraft:unbreaking', 10),'quark:ancient_tome','minecraft:writable_book','enderitemod:enderite_scrap')

//迷宫破坏者
event.smithing(Item.of('twilightforest:mazebreaker_pickaxe', '{Damage:0}').enchant('minecraft:efficiency', 4).enchant('minecraft:unbreaking', 3).enchant('minecraft:fortune', 2),'better_minoshroomtaur:maze_diamond','twilightforest:ironwood_block','better_minoshroomtaur:maze_diamond')

//锻造模板
event.smithing('2x enderitemod:enderite_upgrade_smithing_template','minecraft:netherite_upgrade_smithing_template','minecraft:netherite_ingot','quark:dragon_scale')
event.smithing('2x minecraft:netherite_upgrade_smithing_template','#minecraft:trim_templates','minecraft:diamond','minecraft:nether_star')

//暮色森林弓转换
event.smithing('twilightforest:seeker_bow','minecraft:echo_shard','twilightforest:triple_bow','minecraft:echo_shard')
event.smithing('twilightforest:triple_bow','twilightforest:fiery_ingot','twilightforest:seeker_bow','twilightforest:fiery_ingot')
event.smithing('twilightforest:ice_bow','twilightforest:ice_bomb','twilightforest:ender_bow','twilightforest:ice_bomb')
event.smithing('twilightforest:ender_bow','minecraft:ender_pearl','twilightforest:ice_bow','minecraft:ender_pearl')

//皮革系列锁链升级
event.smithing('minecraft:chainmail_helmet','minecraft:chain','minecraft:leather_helmet','minecraft:chain')
event.smithing('minecraft:chainmail_chestplate','minecraft:chain','minecraft:leather_chestplate','minecraft:chain')
event.smithing('minecraft:chainmail_leggings','minecraft:chain','minecraft:leather_leggings','minecraft:chain')
event.smithing('minecraft:chainmail_boots','minecraft:chain','minecraft:leather_boots','minecraft:chain')

//铁木系列钢叶升级
event.smithing('twilightforest:steeleaf_helmet','twilightforest:steeleaf_ingot','twilightforest:ironwood_helmet','twilightforest:steeleaf_ingot')
event.smithing('twilightforest:steeleaf_chestplate','twilightforest:steeleaf_ingot','twilightforest:ironwood_chestplate','twilightforest:steeleaf_ingot')
event.smithing('twilightforest:steeleaf_leggings','twilightforest:steeleaf_ingot','twilightforest:ironwood_leggings','twilightforest:steeleaf_ingot')
event.smithing('twilightforest:steeleaf_boots','twilightforest:steeleaf_ingot','twilightforest:ironwood_boots','twilightforest:steeleaf_ingot')

event.smithing('twilightforest:steeleaf_sword','twilightforest:steeleaf_ingot','twilightforest:ironwood_sword','twilightforest:steeleaf_ingot')
event.smithing('twilightforest:steeleaf_pickaxe','twilightforest:steeleaf_ingot','twilightforest:ironwood_pickaxe','twilightforest:steeleaf_ingot')
event.smithing('twilightforest:steeleaf_axe','twilightforest:steeleaf_ingot','twilightforest:ironwood_axe','twilightforest:steeleaf_ingot')
event.smithing('twilightforest:steeleaf_shovel','twilightforest:steeleaf_ingot','twilightforest:ironwood_shovel','twilightforest:steeleaf_ingot')
event.smithing('twilightforest:steeleaf_hoe','twilightforest:steeleaf_ingot','twilightforest:ironwood_hoe','twilightforest:steeleaf_ingot')

//炽铁系列幽冥升级
event.smithing('eeeabsmobs:ghost_warrior_helmet','eeeabsmobs:ghost_warrior_upgrade_smithing_template','twilightforest:fiery_helmet','eeeabsmobs:ghost_steel_ingot')
event.smithing('eeeabsmobs:ghost_warrior_chestplate','eeeabsmobs:ghost_warrior_upgrade_smithing_template','twilightforest:fiery_chestplate','eeeabsmobs:ghost_steel_ingot')
event.smithing('eeeabsmobs:ghost_warrior_leggings','eeeabsmobs:ghost_warrior_upgrade_smithing_template','twilightforest:fiery_leggings','eeeabsmobs:ghost_steel_ingot')
event.smithing('eeeabsmobs:ghost_warrior_boots','eeeabsmobs:ghost_warrior_upgrade_smithing_template','twilightforest:fiery_boots','eeeabsmobs:ghost_steel_ingot')
event.smithing('eeeabsmobs:netherworld_katana','eeeabsmobs:ghost_warrior_upgrade_smithing_template','twilightdelight:teardrop_sword','eeeabsmobs:ghost_steel_ingot')

//高级下界合金系列腾炎升级
event.smithing('cataclysm:ignitium_helmet','cataclysm:ignitium_upgrade_smithing_template','advancednetherite:netherite_diamond_helmet','cataclysm:ignitium_ingot')
event.smithing('cataclysm:ignitium_chestplate','cataclysm:ignitium_upgrade_smithing_template','advancednetherite:netherite_diamond_chestplate','cataclysm:ignitium_ingot')
event.smithing('cataclysm:ignitium_leggings','cataclysm:ignitium_upgrade_smithing_template','advancednetherite:netherite_diamond_leggings','cataclysm:ignitium_ingot')
event.smithing('cataclysm:ignitium_boots','cataclysm:ignitium_upgrade_smithing_template','advancednetherite:netherite_diamond_boots','cataclysm:ignitium_ingot')

//末影合金系列咒魂升级
event.smithing('cataclysm:cursium_helmet','cataclysm:cursium_upgrade_smithing_template','enderitemod:enderite_helmet','cataclysm:cursium_ingot')
event.smithing('cataclysm:cursium_chestplate','cataclysm:cursium_upgrade_smithing_template','enderitemod:enderite_chestplate','cataclysm:cursium_ingot')
event.smithing('cataclysm:cursium_chestplate','cataclysm:cursium_upgrade_smithing_template','enderitemod:enderite_elytra','cataclysm:cursium_ingot')
event.smithing('cataclysm:cursium_leggings','cataclysm:cursium_upgrade_smithing_template','enderitemod:enderite_leggings','cataclysm:cursium_ingot')
event.smithing('cataclysm:cursium_boots','cataclysm:cursium_upgrade_smithing_template','enderitemod:enderite_boots','cataclysm:cursium_ingot')

//沙尘锤
event.remove({output:'radiation_zone_reborn:dustorm_hammer'});
event.smithing('radiation_zone_reborn:dustorm_hammer','radiation_zone_reborn:radiation_zone_smithing_template','radiation_zone_reborn:giantrock_hammer','radiation_zone_reborn:dust_star')

//沙尘胸甲
event.remove({output:'radiation_zone_reborn:dustorm_chestplate_chestplate'});
event.smithing('radiation_zone_reborn:dustorm_chestplate_chestplate','radiation_zone_reborn:radiation_zone_smithing_template','radiation_zone_reborn:giantrock_armor_chestplate','radiation_zone_reborn:dust_star')

//巨岩系列暴龙升级
event.remove({output:'radiation_zone_reborn:tyrant_skin_armor_helmet'});
event.remove({output:'radiation_zone_reborn:tyrant_skin_armor_chestplate'});
event.remove({output:'radiation_zone_reborn:tyrant_skin_armor_leggings'});
event.remove({output:'radiation_zone_reborn:tyrant_skin_armor_boots'});
event.smithing('radiation_zone_reborn:tyrant_skin_armor_helmet','radiation_zone_reborn:radiation_zone_smithing_template','radiation_zone_reborn:giantrock_protective_helmet','radiation_zone_reborn:tyrant_skin')
event.smithing('radiation_zone_reborn:tyrant_skin_armor_helmet','radiation_zone_reborn:radiation_zone_smithing_template','radiation_zone_reborn:giantrock_armor_helmet','radiation_zone_reborn:tyrant_skin')
event.smithing('radiation_zone_reborn:tyrant_skin_armor_chestplate','radiation_zone_reborn:radiation_zone_smithing_template','radiation_zone_reborn:giantrock_armor_chestplate','radiation_zone_reborn:tyrant_skin')
event.smithing('radiation_zone_reborn:tyrant_skin_armor_leggings','radiation_zone_reborn:radiation_zone_smithing_template','radiation_zone_reborn:giantrock_armor_leggings','radiation_zone_reborn:tyrant_skin')
event.smithing('radiation_zone_reborn:tyrant_skin_armor_boots','radiation_zone_reborn:radiation_zone_smithing_template','radiation_zone_reborn:giantrock_armor_boots','radiation_zone_reborn:tyrant_skin')

})