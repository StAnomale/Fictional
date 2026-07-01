// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')


ServerEvents.recipes(event => {

//切石机
event.stonecutting('cataclysm:chiseled_purpur_block','minecraft:purpur_block')
//空法术聚晶（高炉）
event.blasting('goety:empty_focus', '#goety:focuses').cookingTime(300).xp(10.0)
event.blasting('goety:empty_focus', '#goety:wands').cookingTime(300).xp(10.0)
event.blasting('4x goety:empty_focus', 'goety:resonance_crystal').cookingTime(300).xp(10.0)

event.blasting('minecraft:iron_ingot', 'goety:pale_steel_ingot').cookingTime(200)

//米诺陶斧（高炉）
event.blasting('twilightforest:gold_minotaur_axe', 'twilightforest:diamond_minotaur_axe').cookingTime(300).xp(10.0)

//大气之靴（高炉）
event.blasting('legendary_monsters:air_rune', 'legendary_monsters:atmospheric_boots').cookingTime(300).xp(10.0)

//宝藏袋（高炉）
event.blasting('goety:treasure_pouch', 'goety:fanged_dagger').cookingTime(300).xp(100.0)
event.blasting('goety:treasure_pouch', 'goety:crone_hat').cookingTime(300).xp(100.0)
event.blasting('goety:treasure_pouch', 'eeeabsmobs:heart_of_pagan').cookingTime(300).xp(100.0)
event.blasting('goety:treasure_pouch', 'illageandspillage:totem_of_banishment').cookingTime(300).xp(100.0)
event.blasting('goety:treasure_pouch', 'masquerader_mod:blank_mask').cookingTime(300).xp(100.0)
event.blasting('goety:treasure_pouch', 'illageandspillage:bag_of_horrors').cookingTime(300).xp(100.0)
event.blasting('goety:treasure_pouch', 'illageandspillage:spellbound_book').cookingTime(300).xp(100.0)
event.blasting('goety:treasure_pouch', 'better_minoshroomtaur:maze_remnant_page_minoshroomtaur').cookingTime(300).xp(100.0)
event.blasting('goety:treasure_pouch', 'bosses_of_mass_destruction:obsidian_heart').cookingTime(300).xp(100.0)
event.blasting('goety:treasure_pouch', 'meetyourfight:violet_bloom').cookingTime(300).xp(100.0)
event.blasting('goety:treasure_pouch', 'eeeabsmobs:ancient_drive_crystal').cookingTime(300).xp(100.0)
event.blasting('goety:treasure_pouch', 'eeeabsmobs:guardian_core').cookingTime(300).xp(100.0)
event.blasting('goety:treasure_pouch', 'goety:ominous_orb').cookingTime(300).xp(100.0)
event.blasting('goety:treasure_pouch', 'friendsandfoes:wildfire_crown').cookingTime(300).xp(100.0)
event.blasting('goety:treasure_pouch', 'meetyourfight:fortunes_favor').cookingTime(300).xp(100.0)
event.blasting('goety:treasure_pouch', 'meetyourfight:phantoplasm').cookingTime(300).xp(100.0)
event.blasting('goety:treasure_pouch', 'radiation_zone_reborn:dust_star').cookingTime(300).xp(100.0)
event.blasting('goety:treasure_pouch', 'radiation_zone_reborn:tyrant_skin').cookingTime(300).xp(100.0)

//黑钢锭（高炉）
event.blasting('3x cataclysm:black_steel_ingot', 'cataclysm:sturdy_boots').cookingTime(300).xp(10.0)
event.blasting('5x cataclysm:black_steel_ingot', 'cataclysm:berserker_soul_amulet').cookingTime(300).xp(10.0)
event.blasting('5x cataclysm:black_steel_ingot', 'cataclysm:ring_of_grudged').cookingTime(300).xp(10.0)

//远古金属锭（高炉）
event.blasting('3x cataclysm:ancient_metal_ingot', 'cataclysm:unbreakable_skull').cookingTime(300).xp(10.0)
event.blasting('5x cataclysm:ancient_metal_ingot', 'cataclysm:vitality_ankh').cookingTime(300).xp(10.0)

//银青境云（高炉）
event.blasting('deep_aether:sterling_aercloud', 'lost_aether_content:enchanted_pink_aercloud').cookingTime(300).xp(10.0)

//天境回收（高炉）
event.blasting('10x kubejs:compressed_amethyst', '#aether:accessories_miscellaneous').cookingTime(300).xp(100.0)
event.blasting('10x kubejs:compressed_amethyst', '#aether:accessories_shields').cookingTime(300).xp(100.0)

event.blasting('10x kubejs:compressed_amethyst', 'deep_aether:blade_of_luck').cookingTime(300).xp(100.0)
event.blasting('10x kubejs:compressed_amethyst', 'aether:flaming_sword').cookingTime(300).xp(100.0)

event.blasting('aether_treasure_reforging:valkyrum_ingot', 'aether:valkyrie_cape').cookingTime(300).xp(100.0)
event.blasting('aether_treasure_reforging:pyral_ingot', 'lost_aether_content:phoenix_cape').cookingTime(300).xp(100.0)

//突变骷髅头（高炉）
event.blasting('minecraft:skeleton_skull', 'mutantmonsters:mutant_skeleton_skull').cookingTime(300).xp(100.0)
//突变凋零骷髅头（高炉）
event.blasting('minecraft:wither_skeleton_skull', 'mutantmore:mutant_wither_skeleton_skull').cookingTime(300).xp(100.0)
//上帝之音回收（高炉）
event.blasting('10x kubejs:compressed_amethyst', 'xercamusic:god').cookingTime(300).xp(100.0)
//诡异之戒回收（高炉）
event.blasting('10x kubejs:compressed_amethyst', 'deep_aether:spooky_ring').cookingTime(300).xp(100.0)
//奇异饰品回收（高炉）
event.blasting('10x kubejs:compressed_amethyst', '#artifacts:artifacts').cookingTime(300).xp(100.0)
//塔罗牌回收（高炉）
event.blasting('10x kubejs:compressed_amethyst', '#tarotcards:tarot_cards').cookingTime(300).xp(100.0)
//凤凰合金锭（高炉）
event.blasting('aether_treasure_reforging:pyral_ingot', '#lost_aether_content:phoenix_tools').cookingTime(300).xp(10)
event.blasting('aether_treasure_reforging:pyral_ingot', 'aether:obsidian_helmet').cookingTime(300).xp(10)
event.blasting('aether_treasure_reforging:pyral_ingot', 'aether:obsidian_chestplate').cookingTime(300).xp(10)
event.blasting('aether_treasure_reforging:pyral_ingot', 'aether:obsidian_leggings').cookingTime(300).xp(10)
event.blasting('aether_treasure_reforging:pyral_ingot', 'aether:obsidian_boots').cookingTime(300).xp(10)
event.blasting('aether_treasure_reforging:pyral_ingot', 'aether:obsidian_gloves').cookingTime(300).xp(10)


event.remove({output: 'minecraft:nether_star'})//下界之星
//event.blasting('minecraft:nether_star', 'radiation_zone_reborn:dust_star').cookingTime(600).xp(100)

//竹块烧成木炭（烟熏炉）
event.smoking('minecraft:charcoal', 'minecraft:bamboo_block').cookingTime(200).xp(0.1)
//石头烧成2个砂砾（高炉）
event.blasting('2x minecraft:gravel', 'minecraft:stone').cookingTime(200).xp(0.1)
//极地毛皮（高炉）
event.blasting('2x minecraft:leather', 'twilightforest:arctic_fur').cookingTime(300).xp(1.0)
//雪怪首领毛皮（高炉）
event.blasting('5x minecraft:leather', 'twilightforest:alpha_yeti_fur').cookingTime(300).xp(10.0)
//娜迦鳞片（高炉）
event.blasting('8x minecraft:bone_meal', 'twilightforest:naga_scale').cookingTime(300).xp(10.0)
//骑士金属锭（高炉）
event.blasting('2x minecraft:iron_ingot', 'twilightforest:knightmetal_ingot').cookingTime(300).xp(10.0)
//装甲碎片(高炉)
event.blasting('2x minecraft:iron_nugget', 'twilightforest:armor_shard').cookingTime(300).xp(1.0)
//仙人掌烟熏为绿色染料
event.smoking('minecraft:green_dye', 'minecraft:cactus').cookingTime(200).xp(2.0)
//钻石之心
event.smelting('6x minecraft:diamond', 'quark:diamond_heart').cookingTime(600).xp(100)
//钻石之心（高炉）
event.blasting('6x minecraft:diamond', 'quark:diamond_heart').cookingTime(300).xp(100)
//巨人之锤
event.smelting('12x minecraft:iron_ingot', 'mutantmonsters:hulk_hammer').cookingTime(600).xp(100)
//巨人之锤（高炉）
event.blasting('12x minecraft:iron_ingot', 'mutantmonsters:hulk_hammer').cookingTime(300).xp(100)
//皇家盔甲碎片（高炉）
event.blasting('4x minecraft:iron_ingot', 'royalvariations:royal_armor_fragments').cookingTime(300).xp(10.0)
//灵性王冠碎片（高炉）
event.blasting('4x minecraft:gold_ingot', 'royalvariations:spiritual_crown_shard').cookingTime(300).xp(10.0)
//皇家火药（高炉）
event.blasting('5x minecraft:gunpowder', 'royalvariations:royal_gunpowder').cookingTime(300).xp(10.0)
//恶兽犄角（高炉）
event.blasting('6x minecraft:netherite_scrap', 'cataclysm:monstrous_horn').cookingTime(600).xp(60)
//炼狱锻锤（高炉）
event.blasting('6x minecraft:netherite_scrap', 'cataclysm:infernal_forge').cookingTime(600).xp(60)
//唤魂项链（高炉）
event.blasting('4x minecraft:netherite_scrap', 'eeeabsmobs:soul_summoning_necklace').cookingTime(600).xp(60)
//紫水晶蟹壳（高炉）
event.blasting('3x kubejs:compressed_amethyst', 'cataclysm:amethyst_crab_shell').cookingTime(300).xp(10.0)
//紫水晶块（高炉）
event.blasting('2x minecraft:amethyst_shard', 'minecraft:amethyst_block').cookingTime(200).xp(0.5)
//黑钢锭（高炉）
event.blasting('2x minecraft:iron_ingot', 'cataclysm:black_steel_ingot').cookingTime(300).xp(0.5)
//泪宝石（高炉）
event.blasting('2x minecraft:emerald', 'cataclysm:lacrima').cookingTime(300).xp(0.5)
//迷宫钻石（高炉）
event.blasting('2x minecraft:diamond', 'better_minoshroomtaur:maze_diamond').cookingTime(300).xp(10)
//甲壳巨钳（高炉）
event.blasting('20x minecraft:bone_meal', 'cataclysm:chitin_claw').cookingTime(300).xp(10)
//野火王冠碎片（高炉）
event.blasting('6x minecraft:blaze_powder', 'friendsandfoes:wildfire_crown_fragment').cookingTime(300).xp(10)
//卷风武器（高炉）
event.blasting('deep_aether:squall_plate', 'deep_aether:storm_sword').cookingTime(300).xp(60)
event.blasting('deep_aether:squall_plate', 'deep_aether:storm_bow').cookingTime(300).xp(60)
//矿石磁铁（高炉）
event.blasting('2x minecraft:iron_ingot', 'twilightforest:ore_magnet').cookingTime(200).xp(10.0)

//马铠（高炉）
event.blasting('7x minecraft:diamond', 'minecraft:diamond_horse_armor').cookingTime(300)
event.blasting('7x minecraft:gold_ingot', 'minecraft:golden_horse_armor').cookingTime(300)
event.blasting('7x minecraft:iron_ingot', 'minecraft:iron_horse_armor').cookingTime(300)
event.blasting('7x minecraft:leather', 'minecraft:leather_horse_armor').cookingTime(300)
//马铠（熔炉）
event.smelting('7x minecraft:diamond', 'minecraft:diamond_horse_armor').cookingTime(600)
event.smelting('7x minecraft:gold_ingot', 'minecraft:golden_horse_armor').cookingTime(600)
event.smelting('7x minecraft:iron_ingot', 'minecraft:iron_horse_armor').cookingTime(600)
event.smelting('7x minecraft:leather', 'minecraft:leather_horse_armor').cookingTime(600)

//铁下界合金装备（高炉）
event.blasting('1x advancednetherite:netherite_iron_ingot', '#advancednetherite:tiers/armor/netherite_iron').cookingTime(300)
event.blasting('1x advancednetherite:netherite_iron_ingot', '#advancednetherite:tiers/tools/netherite_iron').cookingTime(300)
//铁下界合金装备（熔炉）
event.smelting('1x advancednetherite:netherite_iron_ingot', '#advancednetherite:tiers/armor/netherite_iron').cookingTime(600)
event.smelting('1x advancednetherite:netherite_iron_ingot', '#advancednetherite:tiers/tools/netherite_iron').cookingTime(600)

//金下界合金装备（高炉）
event.blasting('1x advancednetherite:netherite_gold_ingot', '#advancednetherite:tiers/armor/netherite_gold').cookingTime(300)
event.blasting('1x advancednetherite:netherite_gold_ingot', '#advancednetherite:tiers/tools/netherite_gold').cookingTime(300)
//金下界合金装备（熔炉）
event.smelting('1x advancednetherite:netherite_gold_ingot', '#advancednetherite:tiers/armor/netherite_gold').cookingTime(600)
event.smelting('1x advancednetherite:netherite_gold_ingot', '#advancednetherite:tiers/tools/netherite_gold').cookingTime(600)

//绿宝石下界合金装备（高炉）
event.blasting('1x advancednetherite:netherite_emerald_ingot', '#advancednetherite:tiers/armor/netherite_emerald').cookingTime(300)
event.blasting('1x advancednetherite:netherite_emerald_ingot', '#advancednetherite:tiers/tools/netherite_emerald').cookingTime(300)
//绿宝石下界合金装备（熔炉）
event.smelting('1x advancednetherite:netherite_emerald_ingot', '#advancednetherite:tiers/armor/netherite_emerald').cookingTime(600)
event.smelting('1x advancednetherite:netherite_emerald_ingot', '#advancednetherite:tiers/tools/netherite_emerald').cookingTime(600)

//钻石下界合金装备（高炉）
event.blasting('1x advancednetherite:netherite_diamond_ingot', '#advancednetherite:tiers/armor/netherite_diamond').cookingTime(300)
event.blasting('1x advancednetherite:netherite_diamond_ingot', '#advancednetherite:tiers/tools/netherite_diamond').cookingTime(300)
//钻石下界合金装备（熔炉）
event.smelting('1x advancednetherite:netherite_diamond_ingot', '#advancednetherite:tiers/armor/netherite_diamond').cookingTime(600)
event.smelting('1x advancednetherite:netherite_diamond_ingot', '#advancednetherite:tiers/tools/netherite_diamond').cookingTime(600)

//末影合金装备（高炉）
event.blasting('1x enderitemod:enderite_ingot', '#enderitemod:enderite_armor').cookingTime(300)
//末影合金装备（熔炉）
event.smelting('1x enderitemod:enderite_ingot', '#enderitemod:enderite_armor').cookingTime(600)

//手套回收（高炉）
event.blasting('1x minecraft:netherite_ingot', 'aether:netherite_gloves').cookingTime(300).xp(10)
event.blasting('4x minecraft:leather', 'aether:leather_gloves').cookingTime(300).xp(10)
event.blasting('2x minecraft:iron_ingot', 'aether:chainmail_gloves').cookingTime(300).xp(10)
event.blasting('4x minecraft:iron_ingot', 'aether:iron_gloves').cookingTime(300).xp(10)
event.blasting('4x minecraft:gold_ingot', 'aether:golden_gloves').cookingTime(300).xp(10)
event.blasting('4x minecraft:diamond', 'aether:diamond_gloves').cookingTime(300).xp(10)

//饰品回收（高炉）
event.blasting('4x goety:ectoplasm', 'trials:ominous_bottle').cookingTime(200)
event.blasting('8x minecraft:bone_meal', 'friendsandfoes:crab_claw').cookingTime(200)
event.blasting('4x minecraft:copper_ingot', 'supplementaries:altimeter').cookingTime(200)
event.blasting('5x minecraft:iron_ingot', 'exposure:camera').cookingTime(200)

event.blasting('1x minecraft:iron_ingot', 'aether:iron_pendant').cookingTime(300)
event.blasting('4x minecraft:iron_ingot', 'aether:iron_ring').cookingTime(300)
event.blasting('1x minecraft:gold_ingot', 'aether:golden_pendant').cookingTime(300)
event.blasting('4x minecraft:gold_ingot', 'aether:golden_ring').cookingTime(300)

//重力晶装备（高炉）
event.blasting('5x aether_redux:gravitite_ingot', 'aether:gravitite_helmet').cookingTime(300)
event.blasting('8x aether_redux:gravitite_ingot', 'aether:gravitite_chestplate').cookingTime(300)
event.blasting('7x aether_redux:gravitite_ingot', 'aether:gravitite_leggings').cookingTime(300)
event.blasting('4x aether_redux:gravitite_ingot', 'aether:gravitite_boots').cookingTime(300)
event.blasting('2x aether_redux:gravitite_ingot', 'aether:gravitite_gloves').cookingTime(300)

event.blasting('2x aether_redux:gravitite_ingot', 'aether:gravitite_sword').cookingTime(300)
event.blasting('3x aether_redux:gravitite_ingot', 'aether:gravitite_pickaxe').cookingTime(300)
event.blasting('3x aether_redux:gravitite_ingot', 'aether:gravitite_axe').cookingTime(300)
event.blasting('1x aether_redux:gravitite_ingot', 'aether:gravitite_shovel').cookingTime(300)
event.blasting('2x aether_redux:gravitite_ingot', 'aether:gravitite_hoe').cookingTime(300)

//金装备（高炉）
event.blasting('5x minecraft:gold_ingot', 'minecraft:golden_helmet').cookingTime(300)
event.blasting('8x minecraft:gold_ingot', 'minecraft:golden_chestplate').cookingTime(300)
event.blasting('7x minecraft:gold_ingot', 'minecraft:golden_leggings').cookingTime(300)
event.blasting('4x minecraft:gold_ingot', 'minecraft:golden_boots').cookingTime(300)

event.blasting('2x minecraft:gold_ingot', 'minecraft:golden_sword').cookingTime(300)
event.blasting('3x minecraft:gold_ingot', 'minecraft:golden_pickaxe').cookingTime(300)
event.blasting('3x minecraft:gold_ingot', 'minecraft:golden_axe').cookingTime(300)
event.blasting('1x minecraft:gold_ingot', 'minecraft:golden_shovel').cookingTime(300)
event.blasting('2x minecraft:gold_ingot', 'minecraft:golden_hoe').cookingTime(300)

//金装备（熔炉）
event.smelting('5x minecraft:gold_ingot', 'minecraft:golden_helmet').cookingTime(600)
event.smelting('8x minecraft:gold_ingot', 'minecraft:golden_chestplate').cookingTime(600)
event.smelting('7x minecraft:gold_ingot', 'minecraft:golden_leggings').cookingTime(600)
event.smelting('4x minecraft:gold_ingot', 'minecraft:golden_boots').cookingTime(600)

event.smelting('2x minecraft:gold_ingot', 'minecraft:golden_sword').cookingTime(600)
event.smelting('3x minecraft:gold_ingot', 'minecraft:golden_pickaxe').cookingTime(600)
event.smelting('3x minecraft:gold_ingot', 'minecraft:golden_axe').cookingTime(600)
event.smelting('1x minecraft:gold_ingot', 'minecraft:golden_shovel').cookingTime(600)
event.smelting('2x minecraft:gold_ingot', 'minecraft:golden_hoe').cookingTime(600)

//铁装备（高炉）
event.blasting('5x minecraft:iron_ingot', 'minecraft:iron_helmet').cookingTime(300)
event.blasting('8x minecraft:iron_ingot', 'minecraft:iron_chestplate').cookingTime(300)
event.blasting('7x minecraft:iron_ingot', 'minecraft:iron_leggings').cookingTime(300)
event.blasting('4x minecraft:iron_ingot', 'minecraft:iron_boots').cookingTime(300)

event.blasting('2x minecraft:iron_ingot', 'minecraft:iron_sword').cookingTime(300)
event.blasting('3x minecraft:iron_ingot', 'minecraft:iron_pickaxe').cookingTime(300)
event.blasting('3x minecraft:iron_ingot', 'minecraft:iron_axe').cookingTime(300)
event.blasting('1x minecraft:iron_ingot', 'minecraft:iron_shovel').cookingTime(300)
event.blasting('2x minecraft:iron_ingot', 'minecraft:iron_hoe').cookingTime(300)

//铁装备（熔炉）
event.smelting('5x minecraft:iron_ingot', 'minecraft:iron_helmet').cookingTime(600)
event.smelting('8x minecraft:iron_ingot', 'minecraft:iron_chestplate').cookingTime(600)
event.smelting('7x minecraft:iron_ingot', 'minecraft:iron_leggings').cookingTime(600)
event.smelting('4x minecraft:iron_ingot', 'minecraft:iron_boots').cookingTime(600)

event.smelting('2x minecraft:iron_ingot', 'minecraft:iron_sword').cookingTime(600)
event.smelting('3x minecraft:iron_ingot', 'minecraft:iron_pickaxe').cookingTime(600)
event.smelting('3x minecraft:iron_ingot', 'minecraft:iron_axe').cookingTime(600)
event.smelting('1x minecraft:iron_ingot', 'minecraft:iron_shovel').cookingTime(600)
event.smelting('2x minecraft:iron_ingot', 'minecraft:iron_hoe').cookingTime(600)

//锁链装备（高炉）
event.blasting('5x minecraft:iron_nugget', 'minecraft:chainmail_helmet').cookingTime(300)
event.blasting('8x minecraft:iron_nugget', 'minecraft:chainmail_chestplate').cookingTime(300)
event.blasting('7x minecraft:iron_nugget', 'minecraft:chainmail_leggings').cookingTime(300)
event.blasting('4x minecraft:iron_nugget', 'minecraft:chainmail_boots').cookingTime(300)

//锁链装备（熔炉）
event.smelting('5x minecraft:iron_nugget', 'minecraft:chainmail_helmet').cookingTime(600)
event.smelting('8x minecraft:iron_nugget', 'minecraft:chainmail_chestplate').cookingTime(600)
event.smelting('7x minecraft:iron_nugget', 'minecraft:chainmail_leggings').cookingTime(600)
event.smelting('4x minecraft:iron_nugget', 'minecraft:chainmail_boots').cookingTime(600)

//钻石装备（高炉）
event.blasting('5x minecraft:diamond', 'minecraft:diamond_helmet').cookingTime(300)
event.blasting('8x minecraft:diamond', 'minecraft:diamond_chestplate').cookingTime(300)
event.blasting('7x minecraft:diamond', 'minecraft:diamond_leggings').cookingTime(300)
event.blasting('4x minecraft:diamond', 'minecraft:diamond_boots').cookingTime(300)

event.blasting('2x minecraft:diamond', 'minecraft:diamond_sword').cookingTime(300)
event.blasting('3x minecraft:diamond', 'minecraft:diamond_pickaxe').cookingTime(300)
event.blasting('3x minecraft:diamond', 'minecraft:diamond_axe').cookingTime(300)
event.blasting('1x minecraft:diamond', 'minecraft:diamond_shovel').cookingTime(300)
event.blasting('2x minecraft:diamond', 'minecraft:diamond_hoe').cookingTime(300)

//钻石装备（熔炉）
event.smelting('5x minecraft:diamond', 'minecraft:diamond_helmet').cookingTime(600)
event.smelting('8x minecraft:diamond', 'minecraft:diamond_chestplate').cookingTime(600)
event.smelting('7x minecraft:diamond', 'minecraft:diamond_leggings').cookingTime(600)
event.smelting('4x minecraft:diamond', 'minecraft:diamond_boots').cookingTime(600)

event.smelting('2x minecraft:diamond', 'minecraft:diamond_sword').cookingTime(600)
event.smelting('3x minecraft:diamond', 'minecraft:diamond_pickaxe').cookingTime(600)
event.smelting('3x minecraft:diamond', 'minecraft:diamond_axe').cookingTime(600)
event.smelting('1x minecraft:diamond', 'minecraft:diamond_shovel').cookingTime(600)
event.smelting('2x minecraft:diamond', 'minecraft:diamond_hoe').cookingTime(600)

//下界合金装备（高炉）
event.blasting('1x minecraft:netherite_ingot', 'minecraft:netherite_helmet').cookingTime(300)
event.blasting('1x minecraft:netherite_ingot', 'minecraft:netherite_chestplate').cookingTime(300)
event.blasting('1x minecraft:netherite_ingot', 'minecraft:netherite_leggings').cookingTime(300)
event.blasting('1x minecraft:netherite_ingot', 'minecraft:netherite_boots').cookingTime(300)

event.blasting('1x minecraft:netherite_ingot', 'minecraft:netherite_sword').cookingTime(300)
event.blasting('1x minecraft:netherite_ingot', 'minecraft:netherite_pickaxe').cookingTime(300)
event.blasting('1x minecraft:netherite_ingot', 'minecraft:netherite_axe').cookingTime(300)
event.blasting('1x minecraft:netherite_ingot', 'minecraft:netherite_shovel').cookingTime(300)
event.blasting('1x minecraft:netherite_ingot', 'minecraft:netherite_hoe').cookingTime(300)

//下界合金装备（熔炉）
event.smelting('1x minecraft:netherite_ingot', 'minecraft:netherite_helmet').cookingTime(600)
event.smelting('1x minecraft:netherite_ingot', 'minecraft:netherite_chestplate').cookingTime(600)
event.smelting('1x minecraft:netherite_ingot', 'minecraft:netherite_leggings').cookingTime(600)
event.smelting('1x minecraft:netherite_ingot', 'minecraft:netherite_boots').cookingTime(600)

event.smelting('1x minecraft:netherite_ingot', 'minecraft:netherite_sword').cookingTime(600)
event.smelting('1x minecraft:netherite_ingot', 'minecraft:netherite_pickaxe').cookingTime(600)
event.smelting('1x minecraft:netherite_ingot', 'minecraft:netherite_axe').cookingTime(600)
event.smelting('1x minecraft:netherite_ingot', 'minecraft:netherite_shovel').cookingTime(600)
event.smelting('1x minecraft:netherite_ingot', 'minecraft:netherite_hoe').cookingTime(600)

//末影合金装备（高炉）
event.blasting('1x enderitemod:enderite_ingot', 'enderitemod:enderite_sword').cookingTime(300)
event.blasting('1x enderitemod:enderite_ingot', 'enderitemod:enderite_pickaxe').cookingTime(300)
event.blasting('1x enderitemod:enderite_ingot', 'enderitemod:enderite_axe').cookingTime(300)
event.blasting('1x enderitemod:enderite_ingot', 'enderitemod:enderite_shovel').cookingTime(300)
event.blasting('1x enderitemod:enderite_ingot', 'enderitemod:enderite_hoe').cookingTime(300)

//末影合金装备（熔炉）
event.smelting('1x enderitemod:enderite_ingot', 'enderitemod:enderite_sword').cookingTime(600)
event.smelting('1x enderitemod:enderite_ingot', 'enderitemod:enderite_pickaxe').cookingTime(600)
event.smelting('1x enderitemod:enderite_ingot', 'enderitemod:enderite_axe').cookingTime(600)
event.smelting('1x enderitemod:enderite_ingot', 'enderitemod:enderite_shovel').cookingTime(600)
event.smelting('1x enderitemod:enderite_ingot', 'enderitemod:enderite_hoe').cookingTime(600)
})