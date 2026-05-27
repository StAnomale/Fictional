const curiosHelper = Java.loadClass("top.theillusivec4.curios.api.CuriosApi").getCuriosHelper()
function isEquippedCurio(entity, curioId) {
  return curiosHelper.findFirstCurio(entity, curioId).isPresent()
}
let CuriosApi = Java.loadClass("top.theillusivec4.curios.api.CuriosApi")
let $SlotAttribute = Java.loadClass('top.theillusivec4.curios.api.SlotAttribute')
/**
* 在实体饰品栏中寻找饰品
* @param {Internal.Item} stack 饰品
* @param {Internal.LivingEntity_} entity 实体
*/
function hasCurio(entity, stack) {
  return CuriosApi.getCuriosHelper().findEquippedCurio(stack, entity).isPresent()
}

StartupEvents.registry("mob_effect",event =>{
    event.create('cooldown').beneficial().displayName("冷却");
	event.create('diamond').beneficial().displayName("钻石增幅");
	event.create('netherite').beneficial().displayName("下界增幅");
	event.create('enderite').beneficial().displayName("末影增幅");
    event.create('ice').beneficial().displayName("寒冰增幅");
    event.create('sun').beneficial().displayName("烈阳增幅");
    event.create('gold').beneficial().displayName("黄金增幅");

	event.create('fictional').beneficial().displayName("虚饰的空白")
    .modifyAttribute("obscure_api:magic_damage","test",1.0,"addition")
    .modifyAttribute("obscure_api:critical_hit","test",0.05,"addition")
    .modifyAttribute("obscure_api:magic_resistance","test",0.1,"addition")
    .modifyAttribute("obscure_api:resilience","test",0.05,"addition")
    .modifyAttribute("forge:swim_speed","test",1.0,"addition")
    .modifyAttribute("obscure_api:penetration","test",0.05,"addition")
    .modifyAttribute("forge:step_height_addition","test",1.0,"addition")
    .modifyAttribute("obscure_api:dodge","test",0.1,'addition');

    event.create('hostility_chaos').displayName("混乱")
    .modifyAttribute("gunswithoutroses:gwr.damage_total","test",-0.1,"multiply_total")
    .modifyAttribute("obscure_api:accuracy","test",-0.1,"multiply_total")
    .modifyAttribute("obscure_api:penetration","test",-0.1,"multiply_total")
    .modifyAttribute("obscure_api:critical_hit","test",-0.1,"multiply_total")
    .modifyAttribute("obscure_api:critical_damage","test",-0.1,"multiply_total")
    .modifyAttribute("obscure_api:magic_damage","test",-0.1,"multiply_total")
    .modifyAttribute("goety:soul_discount","test",-0.1,'multiply_total')
    .modifyAttribute("goety:cooldown_discount","test",-0.1,'multiply_total')
    .modifyAttribute("goety:void_potency","test",-0.1,'multiply_total');


    event.create('hostility_wounding').displayName("重创")
    .modifyAttribute("obscure_api:healing_power","test",-0.4,'multiply_total')
    .modifyAttribute("minecraft:generic.attack_damage","test",-0.1,'multiply_total')
    .modifyAttribute("minecraft:generic.movement_speed","test",-0.1,'multiply_total');

    event.create('hostility_magic_illness').beneficial().displayName("魔力病")
    .modifyAttribute("goety:cooldown_discount","test",-0.2,'multiply_total')
    .modifyAttribute("goety:void_potency","test",-0.5,'multiply_total');

    event.create('hostility_magic_resistance').beneficial().displayName("魔法抗性")
    .modifyAttribute("obscure_api:magic_resistance","test",0.2,'multiply_total');

    event.create('hostility_dynamic_resistance').beneficial().displayName("动态抗性")
    .modifyAttribute("obscure_api:magic_resistance","test",0.4,'multiply_total')

    event.create('hostility_critical_resilience').beneficial().displayName("暴击抗性")
    .modifyAttribute("obscure_api:resilience","test",0.2,'multiply_total');

    event.create('healing_power').beneficial().displayName("治疗加成")
    .modifyAttribute("obscure_api:healing_power","test",0.5,'addition')
    .modifyAttribute("obscure_api:regeneration","test",20.0,'addition');
})


StartupEvents.registry("item",event =>{
    event.create('cucumber2').rarity('uncommon').displayName("恐怖黄瓜人")
    event.create('cucumber1').rarity('uncommon').displayName("恐怖黄瓜人")
	event.create('golden_feather').rarity('uncommon').displayName("金羽毛")
	event.create('enchanted_golden_feather').rarity('rare').glow(true).texture('kubejs:item/golden_feather').displayName("附魔金羽毛")
	event.create('feigned_blank').rarity('uncommon').displayName("虚饰的空白")
    event.create('broken_pocketwatch').rarity('uncommon').displayName("破损的怀表")
    event.create('compressed_amethyst').rarity('uncommon').displayName("紫水晶币")
    event.create('restrictiontimer_pocketwatch').rarity('uncommon').displayName("缚时者的怀表")

    event.create('citlali_ingot').rarity('uncommon').displayName("黑曜石奶奶锭").tag("curios:charm")
    event.create('luckitten_pendant').rarity('uncommon').displayName("幸运猫吊坠").tag("curios:charm")
    event.create('saintwing_cucumberangel').rarity('uncommon').displayName("圣翼黄瓜使").tag("curios:hands")
    event.create('neutronium_densebone').rarity('uncommon').displayName("中子素致密骨头").tag("curios:charm")
    event.create('gold_heart').rarity('uncommon').displayName("黄金的国王心脏").tag("curios:body")
    event.create('corrupting_heart').rarity('epic').displayName("腐化之心").tag("curios:body")
    event.create('caerula_heart').rarity('rare').displayName("深蓝之心").tag("curios:body")
    event.create('taodix').rarity('rare').displayName("梦之笛").tag("curios:charm")
    
    event.create('covenant_purewhite').rarity('uncommon').displayName('纯白盟约').maxStackSize(1).tag("curios:covenant")
    event.create('covenant_sharpblade1').rarity('uncommon').displayName('利刃盟约·I').maxStackSize(1).tag("curios:covenant")
    event.create('covenant_sharpblade2').rarity('uncommon').displayName('利刃盟约·II').maxStackSize(1).tag("curios:covenant")
    event.create('covenant_sharpblade3').rarity('uncommon').displayName('利刃盟约·III').maxStackSize(1).tag("curios:covenant")
    event.create('covenant_sharpblade4').rarity('uncommon').displayName('利刃盟约·IV').maxStackSize(1).tag("curios:covenant")
    event.create('covenant_sharpblade5').rarity('epic').displayName('利刃盟约·V').maxStackSize(1).tag("curios:covenant")
    event.create('covenant_longbow1').rarity('uncommon').displayName('远见盟约·I').maxStackSize(1).tag("curios:covenant")
    event.create('covenant_longbow2').rarity('uncommon').displayName('远见盟约·II').maxStackSize(1).tag("curios:covenant")
    event.create('covenant_longbow3').rarity('uncommon').displayName('远见盟约·III').maxStackSize(1).tag("curios:covenant")
    event.create('covenant_longbow4').rarity('uncommon').displayName('远见盟约·IV').maxStackSize(1).tag("curios:covenant")
    event.create('covenant_longbow5').rarity('epic').displayName('远见盟约·V').maxStackSize(1).tag("curios:covenant")
    event.create('covenant_gunpowder1').rarity('uncommon').displayName('猎人盟约·I').maxStackSize(1).tag("curios:covenant")
    event.create('covenant_gunpowder2').rarity('uncommon').displayName('猎人盟约·II').maxStackSize(1).tag("curios:covenant")
    event.create('covenant_gunpowder3').rarity('uncommon').displayName('猎人盟约·III').maxStackSize(1).tag("curios:covenant")
    event.create('covenant_gunpowder4').rarity('uncommon').displayName('猎人盟约·IV').maxStackSize(1).tag("curios:covenant")
    event.create('covenant_gunpowder5').rarity('epic').displayName('猎人盟约·V').maxStackSize(1).tag("curios:covenant")

    event.create('paranoia_antidote_vessel1').rarity('epic').displayName('偏执解药瓶').maxStackSize(1).tag("curios:charm")
    .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .onEquip((slotContext,oldStack,newStack)=>{})
                .onUnequip((slotContext,oldStack,newStack)=>{})
                .canEquip((slotContext, stack) => {
                    const entity = slotContext.entity();
                    if (!entity) return true;
                    const curiosHelper = CuriosApi.getCuriosHelper();
                    const isAlreadyEquipped = curiosHelper.findEquippedCurio(stack, entity).isPresent();
                    return !isAlreadyEquipped;
                })
                .canUnequip((item, context) =>true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => false)
                .isEnderMask((slotContext, enderMan, stack) => false)
                .modifyAttribute(context => {
                    let { slotContext, uuid } = context
                    let identifier = slotContext.identifier() + slotContext.index()
                    context.modify($SlotAttribute.getOrCreate('charm'),uuid,identifier,1,'addition')
            })
        )

    event.create('paranoia_antidote_vessel2').rarity('epic').displayName('偏执解药瓶').maxStackSize(1).tag("curios:charm")
    .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .onEquip((slotContext,oldStack,newStack)=>{})
                .onUnequip((slotContext,oldStack,newStack)=>{})
                .canEquip((slotContext, stack) => {
                    const entity = slotContext.entity();
                    if (!entity) return true;
                    const curiosHelper = CuriosApi.getCuriosHelper();
                    const isAlreadyEquipped = curiosHelper.findEquippedCurio(stack, entity).isPresent();
                    return !isAlreadyEquipped;
                })
                .canUnequip((item, context) =>true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => false)
                .isEnderMask((slotContext, enderMan, stack) => false)
                .modifyAttribute(context => {
                    let { slotContext, uuid } = context
                    let identifier = slotContext.identifier() + slotContext.index()
                    context.modify($SlotAttribute.getOrCreate('charm'),uuid,identifier,1,'addition')
            })
        )

    event.create('divineblood_mechanizedcore').rarity('epic').displayName('神血机械核心').maxStackSize(1).tag("curios:charm")
    .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .onEquip((slotContext,oldStack,newStack)=>{})
                .onUnequip((slotContext,oldStack,newStack)=>{})
                .canEquip((slotContext, stack) => {
                    const entity = slotContext.entity();
                    if (!entity) return true;
                    const curiosHelper = CuriosApi.getCuriosHelper();
                    const isAlreadyEquipped = curiosHelper.findEquippedCurio(stack, entity).isPresent();
                    return !isAlreadyEquipped;
                })
                .canUnequip((item, context) =>true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => false)
                .isEnderMask((slotContext, enderMan, stack) => false)
                .modifyAttribute(context => {
                    let { slotContext, uuid } = context
                    let identifier = slotContext.identifier() + slotContext.index()
                    context.modify($SlotAttribute.getOrCreate('hands'),uuid,identifier,1,'addition')
            })
        )

    event.create('covenant_matt1').rarity('uncommon').displayName('无光盟约·I').maxStackSize(1).tag("curios:covenant")
    .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .onEquip((slotContext,oldStack,newStack)=>{})
                .onUnequip((slotContext,oldStack,newStack)=>{})
                .canEquip((slotContext, stack) => {
                    const entity = slotContext.entity();
                    if (!entity) return true;
                    const curiosHelper = CuriosApi.getCuriosHelper();
                    const isAlreadyEquipped = curiosHelper.findEquippedCurio(stack, entity).isPresent();
                    return !isAlreadyEquipped;
                })
                .canUnequip((item, context) =>true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => false)
                .isEnderMask((slotContext, enderMan, stack) => false)
        )

    event.create('covenant_matt2').rarity('uncommon').displayName('无光盟约·II').maxStackSize(1).tag("curios:covenant")
    .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .onEquip((slotContext,oldStack,newStack)=>{})
                .onUnequip((slotContext,oldStack,newStack)=>{})
                .canEquip((slotContext, stack) => {
                    const entity = slotContext.entity();
                    if (!entity) return true;
                    const curiosHelper = CuriosApi.getCuriosHelper();
                    const isAlreadyEquipped = curiosHelper.findEquippedCurio(stack, entity).isPresent();
                    return !isAlreadyEquipped;
                })
                .canUnequip((item, context) =>true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => false)
                .isEnderMask((slotContext, enderMan, stack) => false)
        )

    event.create('covenant_matt3').rarity('uncommon').displayName('无光盟约·III').maxStackSize(1).tag("curios:covenant")
    .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .onEquip((slotContext,oldStack,newStack)=>{})
                .onUnequip((slotContext,oldStack,newStack)=>{})
                .canEquip((slotContext, stack) => {
                    const entity = slotContext.entity();
                    if (!entity) return true;
                    const curiosHelper = CuriosApi.getCuriosHelper();
                    const isAlreadyEquipped = curiosHelper.findEquippedCurio(stack, entity).isPresent();
                    return !isAlreadyEquipped;
                })
                .canUnequip((item, context) =>true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => false)
                .isEnderMask((slotContext, enderMan, stack) => false)
        )

    event.create('covenant_matt4').rarity('uncommon').displayName('无光盟约·IV').maxStackSize(1).tag("curios:covenant")
    .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .onEquip((slotContext,oldStack,newStack)=>{})
                .onUnequip((slotContext,oldStack,newStack)=>{})
                .canEquip((slotContext, stack) => {
                    const entity = slotContext.entity();
                    if (!entity) return true;
                    const curiosHelper = CuriosApi.getCuriosHelper();
                    const isAlreadyEquipped = curiosHelper.findEquippedCurio(stack, entity).isPresent();
                    return !isAlreadyEquipped;
                })
                .canUnequip((item, context) =>true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => false)
                .isEnderMask((slotContext, enderMan, stack) => false)
        )

    event.create('covenant_matt5').rarity('epic').displayName('无光盟约·V').maxStackSize(1).tag("curios:covenant")
    .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .onEquip((slotContext,oldStack,newStack)=>{})
                .onUnequip((slotContext,oldStack,newStack)=>{})
                .canEquip((slotContext, stack) => {
                    const entity = slotContext.entity();
                    if (!entity) return true;
                    const curiosHelper = CuriosApi.getCuriosHelper();
                    const isAlreadyEquipped = curiosHelper.findEquippedCurio(stack, entity).isPresent();
                    return !isAlreadyEquipped;
                })
                .canUnequip((item, context) =>true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => false)
                .isEnderMask((slotContext, enderMan, stack) => false)
        )
        

    event.create('silver_protection').rarity('epic').displayName('银质加护').maxStackSize(1).tag("curios:curio")
    .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .onEquip((slotContext,oldStack,newStack)=>{})
                .onUnequip((slotContext,oldStack,newStack)=>{})
                .canEquip((slotContext, stack) => {
                    const entity = slotContext.entity();
                    if (!entity) return true;
                    const curiosHelper = CuriosApi.getCuriosHelper();
                    const isAlreadyEquipped = curiosHelper.findEquippedCurio(stack, entity).isPresent();
                    return !isAlreadyEquipped;
                })
                .canUnequip((item, context) =>true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => false)
                .isEnderMask((slotContext, enderMan, stack) => false)
                .modifyAttribute(context => {
                    let { slotContext, uuid } = context
                    let identifier = slotContext.identifier() + slotContext.index()
                    context.modify($SlotAttribute.getOrCreate('curio'),uuid,identifier,1,'addition')
            })
        )

    event.create('contrary_chronicle').rarity('uncommon').glow(true).displayName("空白编年史")
    .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .onEquip((slotContext,oldStack,newStack)=>{})
                .onUnequip((slotContext,oldStack,newStack)=>{})
                .canEquip((slotContext, stack) => {
                    const entity = slotContext.entity();
                    if (!entity) return true;
                    const curiosHelper = CuriosApi.getCuriosHelper();
                    const isAlreadyEquipped = curiosHelper.findEquippedCurio(stack, entity).isPresent();
                    return !isAlreadyEquipped;
                })
                .canUnequip((item, context) =>true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => false)
                .isEnderMask((slotContext, enderMan, stack) => false)
                .modifyAttribute(context => {
                    let { slotContext, uuid } = context
                    let identifier = slotContext.identifier() + slotContext.index()
                    context.modify($SlotAttribute.getOrCreate('charm'),uuid,identifier,1,'addition') //添加护符
            })
        )
        .maxStackSize(1)
        .tag("curios:charm")

	event.create('contrary_chronicle_easy').rarity('uncommon').displayName("反之编年史")
	.tooltip(' ')
	.tooltip('§7“她们的人生，已经彻底 ')
	.tooltip('§7挣脱反之编年史的束缚！” ')
	.tooltip(' ')
    .tooltip('§7■ 已选择 §a简单 §7难度 ')
    .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .onEquip((slotContext,oldStack,newStack)=>{})
                .onUnequip((slotContext,oldStack,newStack)=>{})
                .canEquip((slotContext, stack) => {
                    const entity = slotContext.entity();
                    if (!entity) return true;
                    const curiosHelper = CuriosApi.getCuriosHelper();
                    const isAlreadyEquipped = curiosHelper.findEquippedCurio(stack, entity).isPresent();
                    return !isAlreadyEquipped;
                })
                .canUnequip((item, context) => {return false})
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .addAttribute("minecraft:generic.max_health",UUID,1,'multiply_total')
                .addAttribute("obscure_api:healing_power",UUID,1,'multiply_total')
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => false)
                .isEnderMask((slotContext, enderMan, stack) => false)
                .modifyAttribute(context => {
                    let { slotContext, uuid } = context
                    let identifier = slotContext.identifier() + slotContext.index()
                    context.modify($SlotAttribute.getOrCreate('curio'),uuid,identifier,7,'addition') //添加护符
            })
        )
        .maxStackSize(1)
        .tag("curios:chronicle")

        event.create('contrary_chronicle_normal')
        .rarity('uncommon')
        .displayName("反之编年史")
        .tooltip(' ')
        .tooltip('§7“欢迎来到这片浩瀚的梦田，愿你 ')
        .tooltip('§7也能在这儿做上一段悠远的梦。” ')
        .tooltip(' ')
        .tooltip('§7■ 已选择 §f普通 §7难度 ')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .onEquip((slotContext,oldStack,newStack)=>{})
                .onUnequip((slotContext,oldStack,newStack)=>{})
                .canEquip((slotContext, stack) => {
                    const entity = slotContext.entity();
                    if (!entity) return true;
                    const curiosHelper = CuriosApi.getCuriosHelper();
                    const isAlreadyEquipped = curiosHelper.findEquippedCurio(stack, entity).isPresent();
                    return !isAlreadyEquipped;
                })
                .canUnequip((item, context) => {return false})
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .addAttribute("functionalarmortrim:experience_boost",UUID,0.1,'multiply_base')
                .addAttribute("obscure_api:healing_power",UUID,-0.1,'multiply_total')
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => false)
                .isEnderMask((slotContext, enderMan, stack) => false)
        )
        .maxStackSize(1)
        .tag("curios:chronicle");


	event.create('contrary_chronicle_hard').rarity('uncommon').displayName("反之编年史")
	.tooltip(' ')
	.tooltip('§7“从一天星斗的童话中醒来， ')
	.tooltip('§7一个孩子走进了墓园 —— ” ')
	.tooltip(' ')
    .tooltip('§7■ 已选择 §c困难 §7难度 ')
    .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .onEquip((slotContext,oldStack,newStack)=>{})
                .onUnequip((slotContext,oldStack,newStack)=>{})
                .canEquip((slotContext, stack) => {
                    const entity = slotContext.entity();
                    if (!entity) return true;
                    const curiosHelper = CuriosApi.getCuriosHelper();
                    const isAlreadyEquipped = curiosHelper.findEquippedCurio(stack, entity).isPresent();
                    return !isAlreadyEquipped;
                })
                .canUnequip((item, context) => {return false})
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => false)
                .isEnderMask((slotContext, enderMan, stack) => false)
        )
    .maxStackSize(1)
    .tag("curios:chronicle")

    event.create('contrary_chronicle_hostility').rarity('uncommon').displayName("反之编年史")
	.tooltip(' ')
	.tooltip('§7“如果甜味从这个世界上消失，而你恰好 ')
	.tooltip('§7找到了些过期糖果。 —— 那么，最好别吃。” ')
	.tooltip(' ')
    .tooltip('§7作为饰品佩戴时： ')
    .tooltip('§7■ 已选择 §d恶意 §7难度 ')
    .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .onEquip((slotContext,oldStack,newStack)=>{})
                .onUnequip((slotContext,oldStack,newStack)=>{})
                .canEquip((slotContext, stack) => {
                    const entity = slotContext.entity();
                    if (!entity) return true;
                    const curiosHelper = CuriosApi.getCuriosHelper();
                    const isAlreadyEquipped = curiosHelper.findEquippedCurio(stack, entity).isPresent();
                    return !isAlreadyEquipped;
                })
                .canUnequip((item, context) => {return false})
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => false)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => false)
                .isEnderMask((slotContext, enderMan, stack) => false)
                .modifyAttribute(context => {
                    let { slotContext, uuid } = context
                    let identifier = slotContext.identifier() + slotContext.index()
                    context.modify($SlotAttribute.getOrCreate('charm'),uuid,identifier,1,'addition') //添加护符
            })
        )
    .maxStackSize(1)
    .tag("curios:chronicle")

})

//priority: 3
function checkWithTime(entity, time) {
	if(!entity || entity.level.isClientSide() || entity.age % time) return true;
}

function onHitCheck(entity) {
	const target = entity.lastHurtMob;
	if(!target || target.hurtTime < 5 || !target.lastHurtByMob || target.lastHurtByMob != entity) return true;
}

function takeHitCheck(entity) {
	const attacker = entity.lastHurtByMob;
	if(entity.hurtTime <= 5 || !attacker || attacker == entity) return true;
}