// const LeftClickEmptyEvent = Java.loadClass('net.minecraftforge.event.entity.player.PlayerInteractEvent$LeftClickEmpty');

// NativeEvents.onEvent(LeftClickEmptyEvent, 
//     /**
//      * 
//      * @param {Internal.PlayerInteractEvent$LeftClickEmpty} event 
//      */
//     event => {
//         console.log(event.entity.level.isClientSide());
        
//     }
// )

// NetworkEvents.dataReceived('kjs_left_click', event => {
//     console.log(event.entity.level.isClientSide());
    
// })

// const LeftClickInUsingEvent = Java.loadClass('io.zershyan.fictional.common.event.LeftClickInUsingEvent');

// NativeEvents.onEvent(LeftClickInUsingEvent, 
//     /**
//      * 
//      * @param {Internal.LeftClickInUsingEvent} event 
//      */
//     event => {
//         /**
//          * @type {Internal.ItemStack}
//          */
//         let stack = event.getUsingItem();
//         if(stack) {
//             event.setStopUsing(true);
//             event.entity.tell('你使用了一次' + stack + '的架势左键');
//             /**
//              * @type {Internal.Player}
//              */
//             let player = event.entity;
//             player.addItemCooldown(stack.getItem(), 20);
//         }
//     }
// )