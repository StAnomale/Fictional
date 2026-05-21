// priority: 0

// Visit the wiki for more info - https://kubejs.com/
// priority: 500

const bow = {
    'minecraft:bow': { maxCharge: 24 },
    'minecraft:crossbow': { maxCharge: 26 },
    'aether:phoenix_bow': { maxCharge: 24 },
    'deep_aether:storm_bow': { maxCharge: 24 },
    'aether_redux:subzero_crossbow': { maxCharge: 26 },
    'enderitemod:enderite_crossbow': { maxCharge: 36 },
    'enderitemod:enderite_bow': { maxCharge: 30 },
    'twilightforest:triple_bow': { maxCharge: 24 },
    'royalvariations:royal_bow': { maxCharge: 24 },
    'cataclysm:cursed_bow': { maxCharge: 24 },
    'cataclysm:wrath_of_the_desert': { maxCharge: 20 },
    'cataclysm:ceraunus': { maxCharge: 12 },
    'the_bumblezone:crystal_cannon': { maxCharge: 20 },
    'twilightforest:ice_bow': { maxCharge: 24 },
    'twilightforest:seeker_bow': { maxCharge: 24 },
    'cataclysm:wither_assault_shoulder_weapon': { maxCharge: 20 },
    'cataclysm:void_assault_shoulder_weapon': { maxCharge: 20 },
    'aether:hammer_of_kingbdogz': { maxCharge: 20 },
    'aether:cloud_staff': { maxCharge: 4 },
    'deep_aether:afterburner': { maxCharge: 30 },
    'mutantmore:adaptive_crossbow': { maxCharge: 20 },
    'goety:hunters_bow': { maxCharge: 20 },
    'goetyawaken:dark_netherite_bow': { maxCharge: 20 },
    'goetyawaken:harp_crossbow': { maxCharge: 28 },
    'cataclysm:laser_gatling': { maxCharge: 10 },
    //'minecraft:trident':{} 
}
//弓蓄力自动射出，按住shift则保持瞄准
PlayerEvents.tick(event => {
    let player = event.player
    if (!player) return;
    if (!event.entity || !event.entity.level) return;
    let covenantItems = [ //猎人盟约
        'goetyawaken:gatling_charm', 'kubejs:covenant_gunpowder1', 'kubejs:covenant_gunpowder2', 'kubejs:covenant_gunpowder3', 'kubejs:covenant_gunpowder4', 'kubejs:covenant_gunpowder5',
    ]; 
    let hasCovenant = false; 
    for (let item of covenantItems) {if (player.isCuriosEquipped(item)) {hasCovenant = true;break;}} if (!hasCovenant) return; 
    if (!player.isUsingItem()) return //返回减少tick开销
    if (player.crouching) return
    let item = player.getMainHandItem()
    if (!item) return
    let bows = bow[item.id]
    if (!bows) return 
    let useDuration = player.getTicksUsingItem()
    if (useDuration >= bows.maxCharge * 0.99) {
        player.releaseUsingItem()
    }
})