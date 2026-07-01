// // priority: 0

// // Visit the wiki for more info - https://kubejs.com/

// const InteractionResultHolder = Java.loadClass('net.minecraft.world.InteractionResultHolder');
// const UseAnim = Java.loadClass('net.minecraft.world.item.UseAnim');
// const InteractionResult = Java.loadClass('net.minecraft.world.InteractionResult');

// ItemEvents.modification(event => {
//     event.modify('minecraft:stick', item => {
//         item.fictional$getPosture() //获取架势数据
//         //设置最大使用时间，当useOnRelease为true时，这个时间影响使用动画的时间和useTick的触发，实际不会中断使用
//         //当useOnRelease为false时，使用超过这个时间会触发finishUsingItem方法
//         .maxDuration(200) 
//         .use((level, player, hand, stack) => {
//             //使用，如果要激活使用，这个代码是必须照抄的（如果你有更好的逻辑你自己做主）
//             player.startUsingItem(hand);
//             return InteractionResultHolder.consume(stack);
//         }).finishUsingItem((stack, level, entity) => {
//             //使用完成时，仅当useOnRelease返回false的时候会触发
//             //当useOnRelease为true的时候，这个方法并不会触发，除非你手动触发...（实际上这么做会因为神秘犀牛而崩溃）
//             if(level.isClientSide()) return;
//             stack.hurtAndBreak(1, entity, entity => {});
//             if(entity.isPlayer()) {
//                 /**
//                  * @type {Internal.Player}
//                  */
//                 let player = entity;
//                 //如果不加冷却，使用结束后会开始新一轮的使用（像吃东西一样）
//                 player.addItemCooldown(stack.getItem(), 20);
//             }
//             return stack;
//         }).onUseTick((level, entity, stack, useTick) => {
//             //使用中的每tick
//             if(level.isClientSide()) return;
//             entity.tell('使用' + stack + '，还剩余' + useTick + '刻结束');
//         }).getUseAnimation(stack => {
//             //物品使用动画
//             //不可以使用字符串的格式，必须使用类调用
//             return UseAnim.BOW;
//         }).useOn(context => {
//             //玩家手持物品右键的瞬间，如果点到了方块或实体就不会触发use方法

//             //当返回PASS时，右键实体或者方块不会交互实体，而是触发使用
//             //否则返回COMSUME消耗结果触发交互就行了
//             if(!context.level.isClientSide()) {
//                 context.player.tell('右键使用' + context.itemInHand + '时，点击的位置：' + context.clickLocation);
//             }
            
//             //不可以使用字符串的格式，必须使用类调用
//             return InteractionResult.PASS;
//         }).releaseUsing((stack, level, entity, tick) => {
//             //玩家使用中松开鼠标的瞬间
//             if(level.isClientSide()) return;
//             entity.tell('松开鼠标右键时，' + stack.toString() + '剩余的duration tick:' + tick);
//         }).useOnRelease(stack => {
//             //当为true时 松开鼠标直接视为使用成功，即使没有完全使用完
//             return false;
//         });
//         //给木棍设置耐久度100，堆叠数最大1
//         item.maxDamage = 100;
//         item.maxStackSize = 1;

//     })
// })