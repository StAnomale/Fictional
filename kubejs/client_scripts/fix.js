// let wasHidden = false;
// let storedOffhand = null;
 
// ClientEvents.tick(event => {
//     const player = event.player;
//     if (!player) return;
    
//     // 定义需要隐藏副手的物品
//     const hideItems = ['aether:phoenix_bow', 'deep_aether:storm_bow', 'eeeabsmobs:immortal_staff', 'twilightforest:ender_bow', 'enderitemod:enderite_bow', 'twilightforest:triple_bow', 'royalvariations:royal_bow', 'twilightforest:seeker_bow', 'twilightforest:ice_bow'];
//     const mainHand = player.getMainHandItem().id;
    
//     const shouldHide = hideItems.includes(mainHand);
//     const offHand = player.getOffHandItem();
    
//     if (shouldHide && !wasHidden && !offHand.isEmpty()) {
//         // 存储并隐藏
//         storedOffhand = offHand.copy();
//         player.setOffHandItem(Item.of('minecraft:air'));
//         wasHidden = true;
//     } else if (!shouldHide && wasHidden) {
//         // 恢复
//         player.setOffHandItem(storedOffhand);
//         storedOffhand = null;
//         wasHidden = false;
//     }
// });

const UsingSlownessEvent = Java.loadClass('io.zershyan.fictional.common.event.UsingSlownessEvent');

NativeEvents.onEvent(UsingSlownessEvent,
    /**
     * 
     * @param {Internal.UsingSlownessEvent} event 
     */
    event => {
    const { player } = event;
    
    if (!player.player) return;
    if(!player.isCuriosEquipped('quark:dragon_scale')) return;

    event.setCanceled(true);
    //console.log;
})
