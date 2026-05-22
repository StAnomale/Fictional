// priority: 0

// Visit the wiki for more info - https://kubejs.com/
// priority: 500

console.info('Hello, World! (Loaded client scripts)')
//你补药看我的石山代码口牙！！！！

//extra.js多重弹射物发射
function defaultExtraJsShoot(event, itemId, projectileType, positions, options) {
    options = options || {};
    options.nbt = options.nbt || { pickup: 2, damage: 8, PierceLevel: 5 };
    shootMultiProjectile(event, itemId, projectileType, positions, options);
}

// 玩家左键点击刷怪笼时立即破坏并给予钥匙
BlockEvents.leftClicked('ba_bt:spawner_marker', event => {
    const { player, block, level } = event;
    if (!player) return;
    // 立即破坏方块
    block.set('minecraft:air');
    // 给予玩家钥匙
    player.give('ba_bt:land_monolith_key');
    // 播放音效
    level.playSound(null, block.x, block.y, block.z, 'block.stone.break', 'blocks', 1.0, 1.0);
});
BlockEvents.leftClicked('ba_bt:land_spawner', event => {
    const { player, block, level } = event;
    if (!player) return;
    // 立即破坏方块
    block.set('minecraft:air');
    // 给予玩家钥匙
    player.give('ba_bt:land_monolith_key');
    // 播放音效
    level.playSound(null, block.x, block.y, block.z, 'block.stone.break', 'blocks', 1.0, 1.0);
});
BlockEvents.leftClicked('ba_bt:ocean_spawner', event => {
    const { player, block, level } = event;
    if (!player) return;
    // 立即破坏方块
    block.set('minecraft:air');
    // 给予玩家钥匙
    player.give('ba_bt:ocean_monolith_key');
    // 播放音效
    level.playSound(null, block.x, block.y, block.z, 'block.stone.break', 'blocks', 1.0, 1.0);
});
BlockEvents.leftClicked('ba_bt:core_spawner', event => {
    const { player, block, level } = event;
    if (!player) return;
    // 立即破坏方块
    block.set('minecraft:air');
    // 给予玩家钥匙
    player.give('ba_bt:core_monolith_key');
    // 播放音效
    level.playSound(null, block.x, block.y, block.z, 'block.stone.break', 'blocks', 1.0, 1.0);
});


//烹饪锅
ServerEvents.recipes(e => {
    let smoking_items = {

        'twilightforest:hydra_chop': ['{quality_food:{effects:[],quality:1}}', 300], //其他
        'better_minoshroomtaur:warrior_mushroom_stew': ['{quality_food:{effects:[],quality:2}}', 300],
        'twilightforest:meef_stroganoff': ['{quality_food:{effects:[],quality:1}}', 300],
        'twilightforest:maze_wafer': ['{quality_food:{effects:[],quality:1}}', 300],
        'the_bumblezone:royal_jelly_bottle': ['{quality_food:{effects:[],quality:2}}', 300],
        'queen_bee:stinger': ['{quality_food:{effects:[],quality:1}}', 300],
        'the_bumblezone:bee_soup': ['{quality_food:{effects:[],quality:2}}', 300],
        'the_bumblezone:bee_bread': ['{quality_food:{effects:[],quality:2}}', 300],
        'aethermobs:crabmeatcooked': ['{quality_food:{effects:[],quality:1}}', 300],
        'aether_redux:vanilla_gummy_swet': ['{quality_food:{effects:[],quality:1}}', 300],
        'cataclysm:blessed_amethyst_crab_meat': ['{quality_food:{effects:[],quality:2}}', 300],
        'berry_good:sweet_berry_meatballs': ['{quality_food:{effects:[],quality:1}}', 300],
        'aether:enchanted_berry': ['{quality_food:{effects:[],quality:1}}', 300],
        'aether:blue_gummy_swet': ['{quality_food:{effects:[],quality:1}}', 300],
        'aether:golden_gummy_swet': ['{quality_food:{effects:[],quality:1}}', 300],
        'aether_redux:blueberry_pie': ['{quality_food:{effects:[],quality:1}}', 300],
        'aether_redux:enchanted_blueberry_pie': ['{quality_food:{effects:[],quality:1}}', 300],
        'aether_redux:wynd_bagel': ['{quality_food:{effects:[],quality:1}}', 300],
        'aether_redux:oatmeal': ['{quality_food:{effects:[],quality:1}}', 300],

        'crockpot:ceviche': ['{quality_food:{effects:[],quality:2}}', 300], //烹饪锅
        'crockpot:candy': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:california_roll': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:bunny_stew': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:breakfast_skillet': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:bone_stew': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:bone_soup': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:bacon_eggs': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:asparagus_soup': ['{quality_food:{effects:[],quality:2}}', 300],

        'crockpot:honey_ham': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:gummy_cake': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:glow_berry_mousse': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:gazpacho': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:fruit_medley': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:froggle_bunwich': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:flower_salad': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:fish_tacos': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:fish_sticks': ['{quality_food:{effects:[],quality:2}}', 300],

        'crockpot:meat_balls': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:mashed_potatoes': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:kabobs': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:jammy_preserves': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:iced_tea': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:ice_cream': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:hot_cocoa': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:hot_chili': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:honey_nuggets': ['{quality_food:{effects:[],quality:2}}', 300],

        'crockpot:potato_souffle': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:plain_omelette': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:perogies': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:pepper_popper': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:watermelon_icle': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:mushy_cake': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:moqueca': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:monster_tartare': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:monster_lasagna': ['{quality_food:{effects:[],quality:2}}', 300],

        'crockpot:potato_tornado': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:pow_cake': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:pumpkin_cookie': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:ratatouille': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:salmon_sushi': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:salsa': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:scotch_egg': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:seafood_gumbo': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:snake_bone_soup': ['{quality_food:{effects:[],quality:2}}', 300],

        'crockpot:wet_goop': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:veg_stinger': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:tropical_bouillabaisse': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:tea': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:taffy': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:surf_n_turf': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:stuffed_eggplant': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:volt_goat_jelly': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:steamed_ham_sandwich': ['{quality_food:{effects:[],quality:2}}', 300],
        'crockpot:turkey_dinner': ['{quality_food:{effects:[],quality:2}}', 300],

        
    }

    for(const [item, value] of Object.entries(smoking_items)){
        let nbt = value[0]
        let time = value[1]
        e.smoking(Item.of(item, 1,nbt), item).cookingTime(time)
    }
})

//本整合包由绘(Silentmo)制作
//感谢(笨蛋)林芝酱提供的kubejs支持

EntityEvents.spawned(function(event) {
    var entity = event.entity;  
    if (!entity || !entity.level) {
        return;
    }
    var MY_NETHER_ID = "minecraft:the_nether";
    var dimensionId = "未知";
    try {
        if (entity.level.dimension) {
            if (entity.level.dimension.id) {
                dimensionId = entity.level.dimension.id;
            } else if (entity.level.dimension.toString) {
                dimensionId = entity.level.dimension.toString();
            }
        }
    } catch (e) {
        return;
    }
    var isNether = (dimensionId === MY_NETHER_ID); //是否在下界
    var entityType = "未知";
    try {
        if (entity.identifier) {
            entityType = entity.identifier;
        } else if (entity.type && entity.type.id) {
            entityType = entity.type.id;
        } else if (entity.getType) {
            entityType = entity.getType().toString();
        }
    } catch (e) {
        return;
    }
    var targetMonsters = ["bosses_of_mass_destruction:lich", "bosses_of_mass_destruction:void_blossom", "bosses_of_mass_destruction:gauntlet", "bosses_of_mass_destruction:obsidilith"];
    var isTargetMonster = false;
    for (var i = 0; i < targetMonsters.length; i++) {
        if (entityType.indexOf(targetMonsters[i]) !== -1) {
            isTargetMonster = true;
            break;
        }
    }
    var isLiving = false;
    try {
        isLiving = entity.isLiving();
    } catch (e) {
        isLiving = false;
    }
    if (isLiving && isTargetMonster) { //isNether
        try {
            //var randomHealth = Math.floor(Math.random() * (400 - 200 + 1)) + 300;//最大值 - 最小值+1 +最小值     //随机最大生命值
            //if (entity.setMaxHealth) {
            //    entity.setMaxHealth(randomHealth);
            //} else if (entity.attributes && entity.attributes.has("minecraft:generic.max_health")) {
            //    entity.attributes.setBaseValue("minecraft:generic.max_health", randomHealth);
            //}            
            //if (entity.setHealth) {
            //    entity.setHealth(randomHealth);
            //}
            if (entity.potionEffects) {
                entity.potionEffects.add('kubejs:fictional', -1, 2,false,false); //虚饰的空白
                entity.potionEffects.add('minecraft:regeneration', -1, 0,false,false); //生命回复
                entity.potionEffects.add('minecraft:resistance', -1, 1,false,false); //抗性提升
                entity.potionEffects.add('hostility_magic_resistance', -1, 1,false,false); //魔法抗性
                entity.potionEffects.add('minecraft:glowing', -1, 0,false,false); //发光
            }
        } catch (e) {
        }
    }
});


EntityEvents.spawned(function(event) {
    var entity = event.entity;  
    if (!entity || !entity.level) {
        return;}
    var entityType = "未知";
    try {
        if (entity.identifier) {
            entityType = entity.identifier;
        } else if (entity.type && entity.type.id) {
            entityType = entity.type.id;
        } else if (entity.getType) {
            entityType = entity.getType().toString();}
    } catch (e) {return;}
    var targetMonsters = ["radiation_zone_reborn:silver_calamity"]; //银质灾祸
    var isTargetMonster = false;
    for (var i = 0; i < targetMonsters.length; i++) {
        if (entityType.indexOf(targetMonsters[i]) !== -1) {isTargetMonster = true;break;}}
    var isLiving = false;
    try {isLiving = entity.isLiving();} catch (e) {isLiving = false;}
    if (isLiving && isTargetMonster) { 
        try {
            if (entity.potionEffects) {
                entity.potionEffects.add('kubejs:fictional', -1, 1,false,false); 
            }} catch (e) {}}
});

EntityEvents.spawned(function(event) {
    var entity = event.entity;  
    if (!entity || !entity.level) {
        return;}
    var entityType = "未知";
    try {
        if (entity.identifier) {
            entityType = entity.identifier;
        } else if (entity.type && entity.type.id) {
            entityType = entity.type.id;
        } else if (entity.getType) {
            entityType = entity.getType().toString();}
    } catch (e) {return;}
    var targetMonsters = ["mutantmore:rodling"]; //小火蝠
    var isTargetMonster = false;
    for (var i = 0; i < targetMonsters.length; i++) {
        if (entityType.indexOf(targetMonsters[i]) !== -1) {isTargetMonster = true;break;}}
    var isLiving = false;
    try {isLiving = entity.isLiving();} catch (e) {isLiving = false;}
    if (isLiving && isTargetMonster) { 
        try {
            if (entity.potionEffects) {
                entity.potionEffects.add('minecraft:regeneration', -1, 1,false,false); //生命回复
                entity.potionEffects.add('minecraft:resistance', -1, 1,false,false); //抗性提升
            }} catch (e) {}}
});

const itemRcMap = {//注册右击事件
    'kubejs:golden_feather': e => golden_feather(e.player, e.item),
	  'kubejs:enchanted_golden_feather': e => golden_feather(e.player, e.item)
};
Object.keys(itemRcMap).forEach(key => ItemEvents.rightClicked(key, e => itemRcMap[key](e)))

const golden_feathers = {//金羽毛
	'kubejs:golden_feather': {time:'5', amp:'10'},
	'kubejs:enchanted_golden_feather': {time:'7', amp:'30'},
};
function golden_feather(player, item) {
	const {server} = player;
	const info = golden_feathers[item.id];

	player.potionEffects.add('levitation', 20, info.amp, true, false);
	player.potionEffects.add('slow_falling', 160, info.amp, true, false);
	global.sound(player, 'block.amethyst_cluster.break', 1, 1, 0.14);

	item.count -= player.isCreative() ? 0 : 1;
}

//召唤紫水晶巨蟹
BlockEvents.rightClicked('cataclysm:altar_of_amethyst', event => {//右键方块
    if (event.hand == "OFF_HAND") return;
    const player = event.player;
    if (!player) return;
 
    const mainHandItem = player.getMainHandItem();
    if (mainHandItem.getId() === 'friendsandfoes:crab_claw') {//召唤所需的物品
        const moyingg = event.level.createEntity('cataclysm:amethyst_crab');//被召唤的生物
        moyingg.setPosition(
            player.x + 0,
            player.y + 2,
            player.z + 0
        );
        moyingg.spawn();
        if (!player.isCreative()) {
            mainHandItem.shrink(1);
            player.setMainHandItem(mainHandItem);
        };
    }
});

//三发弓
ItemEvents.firstRightClicked('twilightforest:triple_bow', event => {
  //从事件中解构出对象待用
  const { player, level } = event;
  if (player.cooldowns.isOnCooldown('twilightforest:triple_bow')) {return;} // 冷却返回
  player.addItemCooldown('twilightforest:triple_bow', 6);
  });

//孔雀羽扇 - 4方向发射
ItemEvents.rightClicked('twilightforest:peacock_feather_fan', event => {
  shootMultiProjectile(event, 'twilightforest:peacock_feather_fan', 'minecraft:llama_spit', [
    { x: 1.4, y: 0, z: 0 },
    { x: 0, y: 1.2, z: 0 },
    { x: 0, y: 0.2, z: 0 },
    { x: -1.4, y: 0, z: 0 }
  ], { velocity: 5, nbt: { pickup: 2, damage: 8, PierceLevel: 5 } });
});



//召唤砷铅铁傀儡
BlockEvents.rightClicked('minecraft:iron_block', event => {//右键方块
    if (event.hand == "OFF_HAND") return;
    const player = event.player;
    if (!player) return;
 
    const mainHandItem = player.getMainHandItem();
    if (mainHandItem.getId() === 'twilightforest:carminite') {//召唤所需的物品
        const moyingg = event.level.createEntity('twilightforest:carminite_golem');//被召唤的生物
        moyingg.setPosition(
            player.x + 4,
            player.y + 1,
            player.z + 4
        );
        moyingg.spawn();
        if (!player.isCreative()) {
            mainHandItem.shrink(1);
            player.setMainHandItem(mainHandItem);
        };
    }
});

ServerEvents.recipes(event => {

  //聚晶强效
  event.recipes.kubejs.shapeless(Item.of('minecraft:enchanted_book', 
"{RepairCost:0,display:{Name:'{\"text\":\"给聚晶附魔\"}'}}").enchant('goety:potency', 1),
    ['#goety:focuses','goety:forbidden_fragment']
    //输入合成物品
    ).modifyResult((inputItem,outputItem)=>{
        let items = inputItem.findAll('#goety:focuses');
        for (let i = 0; i < items.length; i++) 
        {//判断是否拥有对应附魔
            if (!items[i].hasEnchantment('goety:potency',1))
            { //不符合条件则输出物品                   
           let ci =  items[0].copy().enchant('goety:potency', 1);
           ci.count = 1;
           return ci
            }
        }
        return "air";//符合条件则不输出物品
    }),

  //灾变武器锋利
  event.recipes.kubejs.shapeless(Item.of('minecraft:enchanted_book', 
"{RepairCost:0,display:{Name:'{\"text\":\"给灾变武器附魔\"}'}}").enchant('minecraft:sharpness', 5),
    ['#fictional:cataclysmenchant','cataclysm:ignitium_upgrade_smithing_template']
    //输入合成物品
    ).modifyResult((inputItem,outputItem)=>{
        let items = inputItem.findAll('#fictional:cataclysmenchant');
        for (let i = 0; i < items.length; i++) 
        {//判断是否拥有对应附魔
            if (!items[i].hasEnchantment('minecraft:sharpness',5))
            { //不符合条件则输出物品                   
           let ci =  items[0].copy().enchant('minecraft:sharpness', 5);
           ci.count = 1;
           return ci
            }
        }
        return "air";//符合条件则不输出物品
    }),
  //灾变武器抢夺
  event.recipes.kubejs.shapeless(Item.of('minecraft:enchanted_book', 
"{RepairCost:0,display:{Name:'{\"text\":\"给灾变武器附魔\"}'}}").enchant('minecraft:looting', 3),
    ['#fictional:cataclysmenchant','deep_aether:stratus_smithing_template']
    //输入合成物品
    ).modifyResult((inputItem,outputItem)=>{
        let items = inputItem.findAll('#fictional:cataclysmenchant');
        for (let i = 0; i < items.length; i++) 
        {//判断是否拥有对应附魔
            if (!items[i].hasEnchantment('minecraft:looting', 3))
            { //不符合条件则输出物品                   
           let ci =  items[0].copy().enchant('minecraft:looting', 3);
           ci.count = 1;
           return ci
            }
        }
        return "air";//符合条件则不输出物品
    }),

  //灾变武器亡灵杀手
  event.recipes.kubejs.shapeless(Item.of('minecraft:enchanted_book', 
"{RepairCost:0,display:{Name:'{\"text\":\"给灾变武器附魔\"}'}}").enchant('minecraft:smite', 5),
    ['#fictional:cataclysmenchant','cataclysm:cursium_upgrade_smithing_template']
    //输入合成物品
    ).modifyResult((inputItem,outputItem)=>{
        let items = inputItem.findAll('#fictional:cataclysmenchant');
        for (let i = 0; i < items.length; i++) 
        {//判断是否拥有对应附魔
            if (!items[i].hasEnchantment('minecraft:smite',5))
            { //不符合条件则输出物品                   
           let ci =  items[0].copy().enchant('minecraft:smite', 5);
           ci.count = 1;
           return ci
            }
        }
        return "air";//符合条件则不输出物品
    }),
  //灾变武器人类杀手
  event.recipes.kubejs.shapeless(Item.of('minecraft:enchanted_book', 
"{RepairCost:0,display:{Name:'{\"text\":\"给灾变武器附魔\"}'}}").enchant('majruszsenchantments:misanthropy', 5),
    ['#fictional:cataclysmenchant','royalvariations:royal_upgrade_smithing_template']
    //输入合成物品
    ).modifyResult((inputItem,outputItem)=>{
        let items = inputItem.findAll('#fictional:cataclysmenchant');
        for (let i = 0; i < items.length; i++) 
        {//判断是否拥有对应附魔
            if (!items[i].hasEnchantment('majruszsenchantments:misanthropy',5))
            { //不符合条件则输出物品                   
           let ci =  items[0].copy().enchant('majruszsenchantments:misanthropy', 5);
           ci.count = 1;
           return ci
            }
        }
        return "air";//符合条件则不输出物品
    }),
  //灾变武器截肢杀手
  event.recipes.kubejs.shapeless(Item.of('minecraft:enchanted_book', 
"{RepairCost:0,display:{Name:'{\"text\":\"给灾变武器附魔\"}'}}").enchant('minecraft:bane_of_arthropods', 5),
    ['#fictional:cataclysmenchant','enderitemod:enderite_upgrade_smithing_template']
    //输入合成物品
    ).modifyResult((inputItem,outputItem)=>{
        let items = inputItem.findAll('#fictional:cataclysmenchant');
        for (let i = 0; i < items.length; i++) 
        {//判断是否拥有对应附魔
            if (!items[i].hasEnchantment('minecraft:bane_of_arthropods',5))
            { //不符合条件则输出物品                   
           let ci =  items[0].copy().enchant('minecraft:bane_of_arthropods', 5);
           ci.count = 1;
           return ci
            }
        }
        return "air";//符合条件则不输出物品
    }),
  //灾变武器汲取
  event.recipes.kubejs.shapeless(Item.of('minecraft:enchanted_book', 
"{RepairCost:0,display:{Name:'{\"text\":\"给灾变武器附魔\"}'}}").enchant('majruszsenchantments:leech', 1),
    ['#fictional:cataclysmenchant','minecraft:netherite_upgrade_smithing_template']
    //输入合成物品
    ).modifyResult((inputItem,outputItem)=>{
        let items = inputItem.findAll('#fictional:cataclysmenchant');
        for (let i = 0; i < items.length; i++) 
        {//判断是否拥有对应附魔
            if (!items[i].hasEnchantment('majruszsenchantments:leech',1))
            { //不符合条件则输出物品                   
           let ci =  items[0].copy().enchant('majruszsenchantments:leech', 1);
           ci.count = 1;
           return ci
            }
        }
        return "air";//符合条件则不输出物品
    }),

  //炽热之泪火焰附加
  event.recipes.kubejs.shapeless(Item.of('minecraft:enchanted_book', 
"{RepairCost:0,display:{Name:'{\"text\":\"给工具附魔\"}'}}").enchant('minecraft:fire_aspect', 3),
    ['#minecraft:tools','twilightforest:fiery_tears']
    //输入合成物品
    ).modifyResult((inputItem,outputItem)=>{
        let items = inputItem.findAll('#minecraft:tools');
        for (let i = 0; i < items.length; i++) 
        {//判断是否拥有对应附魔
            if (!items[i].hasEnchantment('minecraft:fire_aspect',3))
            { //不符合条件则输出物品                   
           let ci =  items[0].copy().enchant('minecraft:fire_aspect', 3);
           ci.count = 1;
           return ci
            }
        }
        return "air";//符合条件则不输出物品
    }),
  //炽热的血液火焰保护
  event.recipes.kubejs.shapeless(Item.of('minecraft:enchanted_book', 
"{RepairCost:0,display:{Name:'{\"text\":\"给防具附魔\"}'}}").enchant('minecraft:fire_protection', 4),
    ['#forge:armors','twilightforest:fiery_blood']
    //输入合成物品
    ).modifyResult((inputItem,outputItem)=>{
        let items = inputItem.findAll('#forge:armors');
        for (let i = 0; i < items.length; i++) 
        {//判断是否拥有对应附魔
            if (!items[i].hasEnchantment('minecraft:fire_protection',4))
            { //不符合条件则输出物品                   
           let ci =  items[0].copy().enchant('minecraft:fire_protection', 4);
           ci.count = 1;
           return ci
            }
        }
        return "air";//符合条件则不输出物品
    }),
  //活根耐久
  event.recipes.kubejs.shapeless(Item.of('minecraft:enchanted_book', 
"{RepairCost:0,display:{Name:'{\"text\":\"给工具附魔\"}'}}").enchant('minecraft:unbreaking', 2),
    ['#minecraft:tools','twilightforest:liveroot']
    //输入合成物品
    ).modifyResult((inputItem,outputItem)=>{
        let items = inputItem.findAll('#minecraft:tools');
        for (let i = 0; i < items.length; i++) 
        {//判断是否拥有对应附魔
            if (!items[i].hasEnchantment('minecraft:unbreaking',2))
            { //不符合条件则输出物品                   
           let ci =  items[0].copy().enchant('minecraft:unbreaking', 2);
           ci.count = 1;
           return ci
            }
        }
        return "air";//符合条件则不输出物品
    }),
  //蜂蜜结晶耐久
  event.recipes.kubejs.shapeless(Item.of('minecraft:enchanted_book', 
"{RepairCost:0,display:{Name:'{\"text\":\"给防具附魔\"}'}}").enchant('minecraft:unbreaking', 2),
    ['#forge:armors','the_bumblezone:honey_crystal_shards']
    //输入合成物品
    ).modifyResult((inputItem,outputItem)=>{
        let items = inputItem.findAll('#forge:armors');
        for (let i = 0; i < items.length; i++) 
        {//判断是否拥有对应附魔
            if (!items[i].hasEnchantment('minecraft:unbreaking',2))
            { //不符合条件则输出物品                   
           let ci =  items[0].copy().enchant('minecraft:unbreaking', 2);
           ci.count = 1;
           return ci
            }
        }
        return "air";//符合条件则不输出物品
    }),
  //迷宫钻石耐久
  event.recipes.kubejs.shapeless(Item.of('minecraft:enchanted_book', 
"{RepairCost:0,display:{Name:'{\"text\":\"给防具附魔\"}'}}").enchant('minecraft:unbreaking', 5),
    ['#forge:armors','better_minoshroomtaur:maze_diamond']
    //输入合成物品
    ).modifyResult((inputItem,outputItem)=>{
        let items = inputItem.findAll('#forge:armors');
        for (let i = 0; i < items.length; i++) 
        {//判断是否拥有对应附魔
            if (!items[i].hasEnchantment('minecraft:unbreaking',5))
            { //不符合条件则输出物品                   
           let ci =  items[0].copy().enchant('minecraft:unbreaking', 5);
           ci.count = 1;
           return ci
            }
        }
        return "air";//符合条件则不输出物品
    }),
  //钢叶保护
  event.recipes.kubejs.shapeless(Item.of('minecraft:enchanted_book', 
"{RepairCost:0,display:{Name:'{\"text\":\"给防具附魔\"}'}}").enchant('minecraft:protection', 2),
    ['#forge:armors','twilightforest:steeleaf_ingot']
    //输入合成物品
    ).modifyResult((inputItem,outputItem)=>{
        let items = inputItem.findAll('#forge:armors');
        for (let i = 0; i < items.length; i++) 
        {//判断是否拥有对应附魔
            if (!items[i].hasEnchantment('minecraft:protection',2))
            { //不符合条件则输出物品                   
           let ci =  items[0].copy().enchant('minecraft:protection', 2);
           ci.count = 1;
           return ci
            }
        }
        return "air";//符合条件则不输出物品
    }),
  //钢叶块保护
  event.recipes.kubejs.shapeless(Item.of('minecraft:enchanted_book', 
"{RepairCost:0,display:{Name:'{\"text\":\"给防具附魔\"}'}}").enchant('minecraft:protection', 4),
    ['#forge:armors','twilightforest:steeleaf_block']
    //输入合成物品
    ).modifyResult((inputItem,outputItem)=>{
        let items = inputItem.findAll('#forge:armors');
        for (let i = 0; i < items.length; i++) 
        {//判断是否拥有对应附魔
            if (!items[i].hasEnchantment('minecraft:protection',4))
            { //不符合条件则输出物品                   
           let ci =  items[0].copy().enchant('minecraft:protection', 4);
           ci.count = 1;
           return ci
            }
        }
        return "air";//符合条件则不输出物品
    }),
  //回响碎片经验修补
  event.recipes.kubejs.shapeless(Item.of('minecraft:enchanted_book', 
"{RepairCost:0,display:{Name:'{\"text\":\"给工具附魔\"}'}}").enchant('minecraft:mending', 1),
    ['#minecraft:tools','minecraft:echo_shard']
    //输入合成物品
    ).modifyResult((inputItem,outputItem)=>{
        let items = inputItem.findAll('#minecraft:tools');
        for (let i = 0; i < items.length; i++) 
        {//判断是否拥有对应附魔
            if (!items[i].hasEnchantment('minecraft:mending',1))
            { //不符合条件则输出物品                   
           let ci =  items[0].copy().enchant('minecraft:mending', 1);
           ci.count = 1;
           return ci
            }
        }
        return "air";//符合条件则不输出物品
    }),
  //娜迦鳞片经验修补
  event.recipes.kubejs.shapeless(Item.of('minecraft:enchanted_book', 
"{RepairCost:0,display:{Name:'{\"text\":\"给防具附魔\"}'}}").enchant('minecraft:mending', 1),
    ['#forge:armors','twilightforest:naga_scale']
    //输入合成物品
    ).modifyResult((inputItem,outputItem)=>{
        let items = inputItem.findAll('#forge:armors');
        for (let i = 0; i < items.length; i++) 
        {//判断是否拥有对应附魔
            if (!items[i].hasEnchantment('minecraft:mending',1))
            { //不符合条件则输出物品                   
           let ci =  items[0].copy().enchant('minecraft:mending', 1);
           ci.count = 1;
           return ci
            }
        }
        return "air";//符合条件则不输出物品
    }),
  //冰霜炸弹凛寒气场
  event.recipes.kubejs.shapeless(Item.of('minecraft:enchanted_book', 
"{RepairCost:0,display:{Name:'{\"text\":\"给防具附魔\"}'}}").enchant('twilightforest:chill_aura', 3),
    ['#forge:armors','twilightforest:ice_bomb']
    //输入合成物品
    ).modifyResult((inputItem,outputItem)=>{
        let items = inputItem.findAll('#forge:armors');
        for (let i = 0; i < items.length; i++) 
        {//判断是否拥有对应附魔
            if (!items[i].hasEnchantment('twilightforest:chill_aura',3))
            {//不符合条件则输出物品               
           let ci =  items[0].copy().enchant('twilightforest:chill_aura', 3);
           ci.count = 1;
           return ci
            }
        }
        return "air";//符合条件则不输出物品
    })

})

// ==================== 权杖系列通用配置 ====================
const scepterPositions = [
  { x: 0, y: 0.2, z: -2.5 },
  { x: 0, y: 0.2, z: 2.5 },
  { x: 2.5, y: 0.2, z: 0 },
  { x: -2.5, y: 0.2, z: 0 }
];

const scepterNbt = { pickup: 4, damage: 6, PierceLevel: 10 };

//黄昏权杖
ItemEvents.rightClicked('twilightforest:twilight_scepter', event => {
  shootMultiProjectile(event, 'twilightforest:twilight_scepter', 'minecraft:evoker_fangs', scepterPositions, {
    velocity: 4,
    nbt: scepterNbt
  });
});

//吸血权杖
ItemEvents.rightClicked('twilightforest:lifedrain_scepter', event => {
  shootMultiProjectile(event, 'twilightforest:lifedrain_scepter', 'minecraft:evoker_fangs', scepterPositions, {
    velocity: 4,
    nbt: scepterNbt
  });
});

//僵尸权杖
ItemEvents.rightClicked('twilightforest:zombie_scepter', event => {
  shootMultiProjectile(event, 'twilightforest:zombie_scepter', 'minecraft:evoker_fangs', scepterPositions, {
    velocity: 4,
    nbt: scepterNbt
  });
});

//护盾权杖
ItemEvents.rightClicked('twilightforest:fortification_scepter', event => {
  shootMultiProjectile(event, 'twilightforest:fortification_scepter', 'minecraft:evoker_fangs', scepterPositions, {
    velocity: 4,
    nbt: scepterNbt
  });
});

