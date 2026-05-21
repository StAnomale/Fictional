ItemEvents.tooltip(event => {
//云朵瓶
event.addAdvanced("artifacts:cloud_in_a_bottle", (item, advanced, text) => {
    text.remove(1)
    })
//黑曜石头颅
event.addAdvanced("artifacts:obsidian_skull", (item, advanced, text) => {
    text.remove(1)
    })
//挖掘爪
event.addAdvanced("artifacts:digging_claws", (item, advanced, text) => {
    text.remove(1)
	text.remove(1)
    })
//解药瓶
event.addAdvanced("artifacts:antidote_vessel", (item, advanced, text) => {
    text.remove(1)
    })
//生命水晶
event.addAdvanced("artifacts:crystal_heart", (item, advanced, text) => {
    text.remove(1)
	text.remove(1)
	text.remove(1)
	text.remove(1)
    })
//紫菘图腾
event.addAdvanced("artifacts:chorus_totem", (item, advanced, text) => {
    text.remove(1)
    })
//强力磁铁
event.addAdvanced("artifacts:universal_attractor", (item, advanced, text) => {
    text.remove(1)
    })
//氦气火烈鸟
event.addAdvanced("artifacts:helium_flamingo", (item, advanced, text) => {
    text.remove(1)
	text.remove(1)
    })
//狂野爪
event.addAdvanced("artifacts:feral_claws", (item, advanced, text) => {
    text.remove(1)
	text.remove(1)
	text.remove(1)
	text.remove(1)
    })
//强力手套
event.addAdvanced("artifacts:power_glove", (item, advanced, text) => {
    text.remove(1)
	text.remove(1)
	text.remove(1)
	text.remove(1)
    })
//烈火手套
event.addAdvanced("artifacts:fire_gauntlet", (item, advanced, text) => {
    text.remove(1)
    })
//吸血手套
event.addAdvanced("artifacts:vampiric_glove", (item, advanced, text) => {
    text.remove(1)
    })
//冶矿手套
event.addAdvanced("artifacts:pickaxe_heater", (item, advanced, text) => {
    text.remove(1)
    })
//金钩手
event.addAdvanced("artifacts:golden_hook", (item, advanced, text) => {
    text.remove(1)
    })
//袖珍活塞
event.addAdvanced("artifacts:pocket_piston", (item, advanced, text) => {
    text.remove(1)
    })
//洋葱指环
event.addAdvanced("artifacts:onion_ring", (item, advanced, text) => {
    text.remove(1)
    })
//生长之靴
event.addAdvanced("artifacts:rooted_boots", (item, advanced, text) => {
    text.remove(1)
    })
//脚蹼
event.addAdvanced("artifacts:flippers", (item, advanced, text) => {
    text.remove(1)
	text.remove(1)
	text.remove(1)
	text.remove(1)
    })
//雪地鞋
event.addAdvanced("artifacts:snowshoes", (item, advanced, text) => {
    text.remove(1)
	text.remove(1)
    })
//海洋冲刺鞋
event.addAdvanced("artifacts:aqua_dashers", (item, advanced, text) => {
    text.remove(1)
    })
//牢固钉鞋
event.addAdvanced("artifacts:steadfast_spikes", (item, advanced, text) => {
    text.remove(1)
	text.remove(1)
	text.remove(1)
	text.remove(1)
    })
//猫咪拖鞋
event.addAdvanced("artifacts:kitty_slippers", (item, advanced, text) => {
    text.remove(1)
    })
//跃兔鞋
event.addAdvanced("artifacts:bunny_hoppers", (item, advanced, text) => {
    text.remove(1)
    })
//跑鞋
event.addAdvanced("artifacts:running_shoes", (item, advanced, text) => {
    text.remove(1)
	text.remove(1)
    })
//下沉护符
event.addAdvanced("artifacts:charm_of_sinking", (item, advanced, text) => {
    text.remove(1)
    })
//恐慌项链
event.addAdvanced("artifacts:panic_necklace", (item, advanced, text) => {
    text.remove(1)
    })
//十字项链
event.addAdvanced("artifacts:cross_necklace", (item, advanced, text) => {
    text.remove(1)
    })
//震颤吊坠
event.addAdvanced("artifacts:shock_pendant", (item, advanced, text) => {
    text.remove(1)
	text.remove(1)
    })
//荆棘吊坠
event.addAdvanced("artifacts:thorn_pendant", (item, advanced, text) => {
    text.remove(1)
    })
//烈焰吊坠
event.addAdvanced("artifacts:flame_pendant", (item, advanced, text) => {
    text.remove(1)
	text.remove(1)
    })
//隐身围巾
event.addAdvanced("artifacts:scarf_of_invisibility", (item, advanced, text) => {
    text.remove(1)
    })
//幸运围巾
event.addAdvanced("artifacts:lucky_scarf", (item, advanced, text) => {
    text.remove(1)
    })
//迷信之帽
event.addAdvanced("artifacts:superstitious_hat", (item, advanced, text) => {
    text.remove(1)
    })
//钓鱼佬帽
event.addAdvanced("artifacts:anglers_hat", (item, advanced, text) => {
    text.remove(1)
	text.remove(1)
    })
//牛仔帽
event.addAdvanced("artifacts:cowboy_hat", (item, advanced, text) => {
    text.remove(1)
    })
//村民草帽
event.addAdvanced("artifacts:villager_hat", (item, advanced, text) => {
    text.remove(1)
    })
//夜视镜
event.addAdvanced("artifacts:night_vision_goggles", (item, advanced, text) => {
    text.remove(1)
    })
//通气管
event.addAdvanced("artifacts:snorkel", (item, advanced, text) => {
    text.remove(1)
    })
//新颖饮水帽
event.addAdvanced("artifacts:novelty_drinking_hat", (item, advanced, text) => {
    text.remove(1)
	text.remove(1)
	text.remove(1)
    })
//塑料饮水帽
event.addAdvanced("artifacts:plastic_drinking_hat", (item, advanced, text) => {
    text.remove(1)
	text.remove(1)
    })
//整蛊坐垫
event.addAdvanced("artifacts:whoopee_cushion", (item, advanced, text) => {
    text.remove(1)
    })

})

ItemEvents.tooltip(e => {
//整蛊坐垫
e.add([       
	'artifacts:whoopee_cushion'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.whoopee_cushion1'),
	Text.translate('OEA.artifacts.whoopee_cushion2'),
	Text.translate('OEA.air'),
	])
//塑料饮水帽
e.add([       
	'artifacts:plastic_drinking_hat'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.plastic_drinking_hat1'),
	Text.translate('OEA.artifacts.plastic_drinking_hat2'),
	Text.translate('OEA.air'),
	])
//新颖饮水帽
e.add([       
	'artifacts:novelty_drinking_hat'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.novelty_drinking_hat1'),
	Text.translate('OEA.artifacts.novelty_drinking_hat2'),
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.novelty_drinking_hat3'),
	Text.translate('OEA.air'),
	])
//通气管
e.add([       
	'artifacts:snorkel'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.snorkel1'),
	Text.translate('OEA.artifacts.snorkel2'),
	Text.translate('OEA.artifacts.snorkel3'),
	Text.translate('OEA.air'),
	])	
//夜视镜
e.add([       
	'artifacts:night_vision_goggles'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.night_vision_goggles1'),
	Text.translate('OEA.artifacts.night_vision_goggles2'),
	Text.translate('OEA.artifacts.night_vision_goggles3'),
	Text.translate('OEA.air'),
	])	
//村民草帽
e.add([       
	'artifacts:villager_hat'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.villager_hat1'),
	Text.translate('OEA.artifacts.villager_hat2'),
	Text.translate('OEA.air'),
	])	
//牛仔帽
e.add([       
	'artifacts:cowboy_hat'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.cowboy_hat1'),
	Text.translate('OEA.artifacts.cowboy_hat2'),
	Text.translate('OEA.air'),
	])	
//钓鱼佬帽
e.add([       
	'artifacts:anglers_hat'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.anglers_hat1'),
	Text.translate('OEA.artifacts.anglers_hat2'),
	Text.translate('OEA.artifacts.anglers_hat3'),
	Text.translate('OEA.air'),
	])	
//迷信之帽
e.add([       
	'artifacts:superstitious_hat'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.superstitious_hat1'),
	Text.translate('OEA.artifacts.superstitious_hat2'),
	Text.translate('OEA.air'),
	])	
//幸运围巾
e.add([       
	'artifacts:lucky_scarf'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.lucky_scarf1'),
	Text.translate('OEA.artifacts.lucky_scarf2'),
	Text.translate('OEA.air'),
	])	
//隐身围巾
e.add([       
	'artifacts:scarf_of_invisibility'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.scarf_of_invisibility1'),
	Text.translate('OEA.artifacts.scarf_of_invisibility2'),
	Text.translate('OEA.air'),
	])
//烈焰吊坠
e.add([       
	'artifacts:flame_pendant'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.flame_pendant1'),
	Text.translate('OEA.artifacts.flame_pendant2'),
	Text.translate('OEA.artifacts.flame_pendant3'),
	Text.translate('OEA.artifacts.flame_pendant4'),
	Text.translate('OEA.air'),
	])	
//荆棘吊坠
e.add([       
	'artifacts:thorn_pendant'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.thorn_pendant1'),
	Text.translate('OEA.artifacts.thorn_pendant2'),
	Text.translate('OEA.air'),
	])
//震颤吊坠
e.add([       
	'artifacts:shock_pendant'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.shock_pendant1'),
	Text.translate('OEA.artifacts.shock_pendant2'),
	Text.translate('OEA.artifacts.shock_pendant3'),
	Text.translate('OEA.air'),
	])	
//十字项链
e.add([       
	'artifacts:cross_necklace'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.cross_necklace1'),
	Text.translate('OEA.artifacts.cross_necklace2'),
	Text.translate('OEA.air'),
	])
//恐慌项链
e.add([       
	'artifacts:panic_necklace'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.panic_necklace1'),
	Text.translate('OEA.artifacts.panic_necklace2'),
	Text.translate('OEA.air'),
	])
//下沉护符
e.add([       
	'artifacts:charm_of_sinking'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.charm_of_sinking1'),
	Text.translate('OEA.artifacts.charm_of_sinking2'),
	Text.translate('OEA.artifacts.charm_of_sinking3'),
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.charm_of_sinking4'),
	Text.translate('OEA.air'),
	])
//跑鞋
e.add([       
	'artifacts:running_shoes'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.running_shoes1'),
	Text.translate('OEA.artifacts.running_shoes2'),
	Text.translate('OEA.artifacts.running_shoes3'),
	Text.translate('OEA.air'),
	])
//跃兔鞋
e.add([       
	'artifacts:bunny_hoppers'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.bunny_hoppers1'),
	Text.translate('OEA.artifacts.bunny_hoppers2'),
	Text.translate('OEA.air'),
	])
//猫咪拖鞋
e.add([       
	'artifacts:kitty_slippers'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.kitty_slippers1'),
	Text.translate('OEA.artifacts.kitty_slippers2'),
	Text.translate('OEA.artifacts.kitty_slippers3'),
	Text.translate('OEA.air'),
	])
//牢固钉鞋
e.add([       
	'artifacts:steadfast_spikes'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.steadfast_spikes1'),
	Text.translate('OEA.artifacts.steadfast_spikes2'),
	Text.translate('OEA.air'),
	])
//海洋冲刺鞋
e.add([       
	'artifacts:aqua_dashers'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.aqua_dashers1'),
	Text.translate('OEA.artifacts.aqua_dashers2'),
	Text.translate('OEA.artifacts.aqua_dashers3'),
	Text.translate('OEA.air'),
	])
//雪地鞋
e.add([       
	'artifacts:snowshoes'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.snowshoes1'),
	Text.translate('OEA.artifacts.snowshoes2'),
	Text.translate('OEA.artifacts.snowshoes3'),
	Text.translate('OEA.air'),
	])
//脚蹼
e.add([       
	'artifacts:flippers'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.flippers1'),
	Text.translate('OEA.artifacts.flippers2'),
	Text.translate('OEA.artifacts.flippers3'),
	Text.translate('OEA.artifacts.flippers4'),
	Text.translate('OEA.air'),
	])
//生长之靴
e.add([       
	'artifacts:rooted_boots'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.rooted_boots1'),
	Text.translate('OEA.artifacts.rooted_boots2'),
	Text.translate('OEA.artifacts.rooted_boots3'),
	Text.translate('OEA.air'),
	])
//洋葱指环
e.add([       
	'artifacts:onion_ring'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.onion_ring1'),
	Text.translate('OEA.artifacts.onion_ring2'),
	Text.translate('OEA.air'),
	])
//袖珍活塞
e.add([       
	'artifacts:pocket_piston'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.pocket_piston1'),
	Text.translate('OEA.artifacts.pocket_piston2'),
	Text.translate('OEA.air'),
	])
//金钩手
e.add([       
	'artifacts:golden_hook'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.golden_hook1'),
	Text.translate('OEA.artifacts.golden_hook2'),
	Text.translate('OEA.artifacts.golden_hook3'),
	Text.translate('OEA.air'),
	])
//冶矿手套
e.add([       
	'artifacts:pickaxe_heater'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.pickaxe_heater1'),
	Text.translate('OEA.artifacts.pickaxe_heater2'),
	Text.translate('OEA.artifacts.pickaxe_heater3'),
	Text.translate('OEA.air'),
	])
//吸血手套
e.add([       
	'artifacts:vampiric_glove'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.vampiric_glove1'),
	Text.translate('OEA.artifacts.vampiric_glove2'),
	Text.translate('OEA.artifacts.vampiric_glove0'),
	Text.translate('OEA.air'),
	])
//烈火手套
e.add([       
	'artifacts:fire_gauntlet'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.fire_gauntlet1'),
	Text.translate('OEA.artifacts.fire_gauntlet2'),
	Text.translate('OEA.artifacts.fire_gauntlet3'),
	Text.translate('OEA.air'),
	])
//强力手套
e.add([       
	'artifacts:power_glove'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.power_glove1'),
	Text.translate('OEA.artifacts.power_glove2'),
	Text.translate('OEA.air'),
	])
//狂野爪
e.add([       
	'artifacts:feral_claws'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.feral_claws1'),
	Text.translate('OEA.artifacts.feral_claws2'),
	Text.translate('OEA.air'),
	])
//氦气火烈鸟
e.add([       
	'artifacts:helium_flamingo'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.helium_flamingo1'),
	Text.translate('OEA.artifacts.helium_flamingo2'),
	Text.translate('OEA.artifacts.helium_flamingo3'),
	Text.translate('OEA.air'),
	])
//强力磁铁
e.add([       
	'artifacts:universal_attractor'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.universal_attractor1'),
	Text.translate('OEA.artifacts.universal_attractor2'),
	Text.translate('OEA.artifacts.universal_attractor3'),
	Text.translate('OEA.air'),
	])
//紫菘图腾
e.add([       
	'artifacts:chorus_totem'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.chorus_totem1'),
	Text.translate('OEA.artifacts.chorus_totem2'),
	Text.translate('OEA.artifacts.chorus_totem3'),
	Text.translate('OEA.artifacts.chorus_totem4'),
	Text.translate('OEA.air'),
	])
//生命水晶
e.add([       
	'artifacts:crystal_heart'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.crystal_heart1'),
	Text.translate('OEA.artifacts.crystal_heart2'),
	Text.translate('OEA.air'),
	])
//云朵瓶
e.add([
	'artifacts:cloud_in_a_bottle'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.cloud_in_a_bottle1'),
	Text.translate('OEA.artifacts.cloud_in_a_bottle2'),
	Text.translate('OEA.air'),
	])
//黑曜石头颅
e.add([       
	'artifacts:obsidian_skull'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.obsidian_skull1'),
	Text.translate('OEA.artifacts.obsidian_skull2'),
	Text.translate('OEA.artifacts.obsidian_skull3'),
	Text.translate('OEA.air'),
	])
//挖掘爪
e.add([       
	'artifacts:digging_claws'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.digging_claws1'),
	Text.translate('OEA.artifacts.digging_claws2'),
	Text.translate('OEA.artifacts.digging_claws3'),
	Text.translate('OEA.artifacts.digging_claws4'),
	Text.translate('OEA.air'),
	])
//解药瓶
e.add([       
	'artifacts:antidote_vessel'], [
	Text.translate('OEA.air'),
	Text.translate('OEA.artifacts.antidote_vessel1'),
	Text.translate('OEA.artifacts.antidote_vessel2'),
	Text.translate('OEA.artifacts.antidote_vessel3'),
	Text.translate('OEA.air'),
	])



})