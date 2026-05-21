// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')

EntityJSEvents.attributes(event => { //修改实体已有的属性
  function modify_attack_damage(entity_id,number){
    return event.modify(entity_id, attributes => {
      attributes.add("minecraft:generic.attack_damage", number) //攻击伤害
    });
  }
  function modify_attack_speed(entity_id,number){
    return event.modify(entity_id, attributes => {
      attributes.add("minecraft:generic.attack_speed", number) //攻击速度
    });
  }
  function modify_max_health(entity_id,number){
    return event.modify(entity_id, attributes => {
      attributes.add("minecraft:generic.max_health", number) //最大生命
    });
  }
  function modify_armor(entity_id,number){
    return event.modify(entity_id, attributes => {
      attributes.add("minecraft:generic.armor", number) //护甲值
    });
  }
  function modify_armor_toughness(entity_id,number){
    return event.modify(entity_id, attributes => {
      attributes.add("minecraft:generic.armor_toughness", number) //盔甲韧性
      });
  }
  function modify_movement_speed(entity_id,number){
    return event.modify(entity_id, attributes => {
      attributes.add("minecraft:generic.movement_speed", number) //移动速度
    });
  }
  function modify_spell_potency(entity_id,number){
    return event.modify(entity_id, attributes => {
      attributes.add("goety:void_potency", number) //巫法法术强效（加法）
    });
  }
  function modify_soul_discount(entity_id,number){
    return event.modify(entity_id, attributes => {
      attributes.add("goety:soul_discount", number) //巫法灵魂缩减（加法）
    });
  }
  function modify_cooldown_discount(entity_id,number){
    return event.modify(entity_id, attributes => {
      attributes.add("goety:cooldown_discount", number) //巫法冷却缩减（加法）
    });
  }
  function modify_spell_durationy(entity_id,number){
    return event.modify(entity_id, attributes => {
      attributes.add("goety:spell_duration", number) //巫法持续时间
    });
  }
  function modify_knockback_resistance(entity_id,number){
    return event.modify(entity_id, attributes => {
      attributes.add("minecraft:generic.knockback_resistance", number) //击退抗性
    });
  }
  function modify_healing_power(entity_id,number){
    return event.modify(entity_id, attributes => {
      attributes.add("obscure_api:healing_power", number) //治疗效果
    });
  }
  function modify_magic_damage(entity_id,number){
    return event.modify(entity_id, attributes => {
      attributes.add("obscure_api:magic_damage", number)  //附加伤害（加法/最终乘算）
    });
  }
  function modify_dodge(entity_id,number){
    return event.modify(entity_id, attributes => {
      attributes.add("obscure_api:dodge", number)  //闪避率（加法）
    });
  }
  function modify_accuracy(entity_id,number){
    return event.modify(entity_id, attributes => {
      attributes.add("obscure_api:accuracy", number)  //命中率（加法）
    });
  }
  function modify_critical_hit(entity_id,number){
    return event.modify(entity_id, attributes => {
      attributes.add("obscure_api:critical_hit", number)  //暴击率（加法）
    });
  }
  function modify_critical_damage(entity_id,number){
    return event.modify(entity_id, attributes => {
      attributes.add("obscure_api:critical_damage", number)  //暴击伤害（加法）
    });
  }
  function modify_penetration(entity_id,number){
    return event.modify(entity_id, attributes => {
      attributes.add("obscure_api:penetration", number)  //护甲穿透（加法）
    });
  }
  function modify_resilience(entity_id,number){
    return event.modify(entity_id, attributes => {
      attributes.add("obscure_api:resilience", number)  //暴击抗性（加法）
    });
  }
  function modify_swim_speed(entity_id,number){
    return event.modify(entity_id, attributes => {
      attributes.add("forge:swim_speed", number)  //游泳速度
    });
  }
  function modify_step_height_addition(entity_id,number){
    return event.modify(entity_id, attributes => {
      attributes.add("forge:step_height_addition", number)  //台阶高度（加法）
    });
  }
  function modify_entity_reach(entity_id,number){
    return event.modify(entity_id, attributes => {
      attributes.add("forge:entity_reach", number)  //实体触及距离
    });
  }
  function modify_block_reach(entity_id,number){
    return event.modify(entity_id, attributes => {
      attributes.add("forge:block_reach", number)  //方块触及距离
    });
  }
  function modify_experience_boost(entity_id,number){
    return event.modify(entity_id, attributes => {
      attributes.add("functionalarmortrim:experience_boost", number)  //经验获取
    });
  }
  function modify_luck(entity_id,number){
    return event.modify(entity_id, attributes => {
      attributes.add("minecraft:generic.luck", number)  //幸运值（加法）
    });
  }
  function modify_damage_total(entity_id,number){
    return event.modify(entity_id, attributes => {
      attributes.add("gunswithoutroses:gwr.damage_total", number)  //弹丸伤害
    });
  }
  function modify_magic_resistance(entity_id,number){
    return event.modify(entity_id, attributes => {
      attributes.add("obscure_api:magic_resistance", number)  //魔法抗性
    });
  }

  event.modify('bosses_of_mass_destruction:lich', attributes =>{ //暗夜巫妖
    attributes.add("minecraft:generic.attack_damage", 20)
    attributes.add("minecraft:generic.armor", 10)
    attributes.add("minecraft:generic.movement_speed", 0.15)
    attributes.add("forge:step_height_addition", 5)
    attributes.add("forge:swim_speed", 5)
    attributes.add("minecraft:generic.knockback_resistance", 5)
  });

  event.modify('minecraft:ender_dragon', attributes =>{ //末影龙
    attributes.add("minecraft:generic.armor", 8)
    attributes.add("minecraft:generic.armor_toughness", 10)
    attributes.add("minecraft:generic.max_health", 100)
    attributes.add("minecraft:generic.knockback_resistance", 10)
  });

  event.modify('masquerader_mod:masquerader', attributes =>{ //假面愚者
    attributes.add("minecraft:generic.armor", 24)
    attributes.add("minecraft:generic.armor_toughness", 10)
    attributes.add("minecraft:generic.attack_damage", 20)
    attributes.add("minecraft:generic.max_health", 800)
    attributes.add("minecraft:generic.movement_speed", 0.45)
    attributes.add("minecraft:generic.knockback_resistance", 10)
    attributes.add("forge:swim_speed", 10)
  });

  event.modify('illageandspillage:magispeller', attributes =>{ //魔法师
    attributes.add("minecraft:generic.armor", 10)
    attributes.add("minecraft:generic.armor_toughness", 4)
    attributes.add("minecraft:generic.knockback_resistance", 10)
    attributes.add("forge:swim_speed", 10)
  });

  event.modify('illageandspillage:spiritcaller', attributes =>{ //灵魂感应师
    attributes.add("minecraft:generic.armor", 10)
    attributes.add("minecraft:generic.armor_toughness", 4)
    attributes.add("minecraft:generic.knockback_resistance", 10)
    attributes.add("forge:swim_speed", 10)
  });

  event.modify('illageandspillage:freakager', attributes =>{ //怪人
    attributes.add("minecraft:generic.armor", 10)
    attributes.add("minecraft:generic.armor_toughness", 10)
    attributes.add("minecraft:generic.knockback_resistance", 10)
    attributes.add("forge:swim_speed", 10)
  });

  event.modify('aether:slider', attributes =>{ //滑行魔石
    attributes.add("minecraft:generic.max_health", 150)
    attributes.add("minecraft:generic.attack_damage", 30)
    attributes.add("minecraft:generic.movement_speed", 0.25)
    attributes.add("minecraft:generic.knockback_resistance", 10)
    attributes.add("forge:swim_speed", 10)
    attributes.add("minecraft:generic.armor", 20)
  });

  event.modify('aethermobs:spirit', attributes =>{ //灯壶之灵
    attributes.add("minecraft:generic.max_health", 250)
    attributes.add("forge:swim_speed", 3)
    attributes.add("forge:step_height_addition", 4)
    attributes.add("minecraft:generic.armor", 10)
    attributes.add("minecraft:generic.armor_toughness", 4)
  });

  event.modify('aethermobs:saltcrabking', attributes =>{ //盐蟹之王
    attributes.add("minecraft:generic.max_health", 300)
    attributes.add("forge:swim_speed", 3)
    attributes.add("forge:step_height_addition", 10)
    attributes.add("minecraft:generic.movement_speed", 0.35)
    attributes.add("minecraft:generic.armor", 16)
    attributes.add("minecraft:generic.armor_toughness", 4)
  });

  event.modify('aethermobs:crystalitegolem', attributes =>{ //晶岩魔像
    attributes.add("minecraft:generic.max_health", 400)
    attributes.add("forge:swim_speed", 3)
    attributes.add("forge:step_height_addition", 5)
    attributes.add("minecraft:generic.movement_speed", 0.4)
    attributes.add("minecraft:generic.armor", 20)
    attributes.add("minecraft:generic.armor_toughness", 10)
  });
  event.modify('aethermobs:crystaliteminion', attributes =>{ //晶岩仆从
    attributes.add("minecraft:generic.max_health", 10)
    attributes.add("minecraft:generic.attack_damage", 10)
    attributes.add("forge:swim_speed", 3)
    attributes.add("minecraft:generic.movement_speed", 0.25)
    attributes.add("minecraft:generic.armor", 10)
  });

  event.modify('aethermobs:aether_naga', attributes =>{ //天境娜迦
    attributes.add("minecraft:generic.max_health", 600)
    attributes.add("forge:swim_speed", 3)
    attributes.add("minecraft:generic.movement_speed", 0.45)
    attributes.add("minecraft:generic.armor", 10)
    attributes.add("minecraft:generic.armor_toughness", 10)
  });

  event.modify('aethermobs:eldershulker', attributes =>{ //远古潜影贝
    attributes.add("minecraft:generic.max_health", 800)
    attributes.add("minecraft:generic.knockback_resistance", 10)
    attributes.add("forge:swim_speed", 3)
    attributes.add("forge:step_height_addition", 10)
    attributes.add("minecraft:generic.movement_speed", 0.5)
    attributes.add("minecraft:generic.armor", 30)
    attributes.add("minecraft:generic.armor_toughness", 4)
  });

  event.modify('deep_aether:eots_controller', attributes =>{ //狂瞳龙卷（战斗前）
    attributes.add("minecraft:generic.max_health", 500)
    attributes.add("minecraft:generic.attack_damage", 12)
    attributes.add("minecraft:generic.armor", 10)
    attributes.add("minecraft:generic.armor_toughness", 10)
  });

  event.modify('deep_aether:eots_segment', attributes =>{ //狂瞳龙卷（每一节）
    attributes.add("minecraft:generic.max_health", 40)
    attributes.add("minecraft:generic.attack_damage", 12)
    attributes.add("minecraft:generic.armor", 4)
    attributes.add("minecraft:generic.armor_toughness", 4)
  });

  event.modify('lost_aether_content:aerwhale_king', attributes =>{ //帝王云鲸
    attributes.add("minecraft:generic.max_health", 300)
    attributes.add("minecraft:generic.attack_damage", 24)
    attributes.add("minecraft:generic.knockback_resistance", 10)
    attributes.add("forge:swim_speed", 3)
    attributes.add("minecraft:generic.movement_speed", 0.001)
    attributes.add("minecraft:generic.armor", 10)
  });

  event.modify('aether:valkyrie', attributes =>{ //女武神
    attributes.add("minecraft:generic.max_health", 100)
    attributes.add("minecraft:generic.attack_damage", 12)
    attributes.add("forge:swim_speed", 3)
    attributes.add("forge:step_height_addition", 2)
    attributes.add("minecraft:generic.armor", 8)
    attributes.add("minecraft:generic.armor_toughness", 8)
  });

  event.modify('cataclysm:koboleton', attributes =>{ //骸龙
    attributes.add("minecraft:generic.max_health", 40)
    attributes.add("minecraft:generic.attack_damage", 12)
    attributes.add("forge:swim_speed", 3)
    attributes.add("forge:step_height_addition", 2)
    attributes.add("minecraft:generic.armor", 8)
  });

  event.modify('minecraft:blaze', attributes =>{ //烈焰人
    attributes.add("minecraft:generic.max_health", 40)
    attributes.add("minecraft:generic.attack_damage", 12)
    attributes.add("forge:swim_speed", 3)
    attributes.add("forge:step_height_addition", 2)
    attributes.add("minecraft:generic.armor", 10)
  });

  event.modify('twilightforest:minotaur', attributes =>{ //牛头人
    attributes.add("minecraft:generic.max_health", 40)
    attributes.add("minecraft:generic.attack_damage", 12)
    attributes.add("forge:swim_speed", 3)
    attributes.add("forge:step_height_addition", 2)
    attributes.add("minecraft:generic.armor", 10)
  });

  event.modify('minecraft:wither_skeleton', attributes =>{ //凋灵骷髅
    attributes.add("minecraft:generic.max_health", 20)
    attributes.add("minecraft:generic.attack_damage", 12)
    attributes.add("forge:swim_speed", 3)
    attributes.add("forge:step_height_addition", 2)
    attributes.add("minecraft:generic.armor", 10)
  });

  event.modify('mutantmonsters:mutant_skeleton', attributes =>{ //骷髅突变体
    attributes.add("minecraft:generic.max_health", 300)
    attributes.add("minecraft:generic.attack_damage", 12)
    attributes.add("forge:swim_speed", 3)
    attributes.add("forge:step_height_addition", 2)
    attributes.add("minecraft:generic.armor", 8)
    attributes.add("minecraft:generic.armor_toughness", 8)
  });

  event.modify('aethermobs:mutatedcritter', attributes =>{ //变异生物
    attributes.add("minecraft:generic.max_health", 100)
    attributes.add("minecraft:generic.attack_damage", 12)
    attributes.add("forge:swim_speed", 3)
    attributes.add("forge:step_height_addition", 2)
    attributes.add("minecraft:generic.armor", 10)
  });

  event.modify('minecraft:warden', attributes =>{ //监守者
    attributes.add("minecraft:generic.max_health", 1000)
    attributes.add("minecraft:generic.armor", 12)
  });

  event.modify('quark:wraith', attributes =>{ //游魂
    attributes.add("minecraft:generic.max_health", 40)
    attributes.add("minecraft:generic.attack_damage", 12)
    attributes.add("forge:swim_speed", 3)
    attributes.add("forge:step_height_addition", 2)
    attributes.add("minecraft:generic.armor", 10)
  });
  //修改更多突变生物会导致内存泄漏
  //event.modify('mutantmore:mutant_frozen_zombie', attributes =>{ //突变冰封僵尸
  //  attributes.add("minecraft:generic.max_health", 200)
  //  attributes.add("minecraft:generic.attack_damage", 16)
  //  attributes.add("forge:swim_speed", 3)
  //  attributes.add("forge:step_height_addition", 2)
  //  attributes.add("minecraft:generic.movement_speed", 0.3)
  //  attributes.add("minecraft:generic.armor", 12)
  //});
  //event.modify('mutantmore:mutant_jungle_zombie', attributes =>{ //突变丛林僵尸
  //  attributes.add("minecraft:generic.max_health", 150)
  //  attributes.add("minecraft:generic.attack_damage", 16)
  //  attributes.add("forge:swim_speed", 3)
  // attributes.add("forge:step_height_addition", 2)
  //  attributes.add("minecraft:generic.movement_speed", 0.3)
  //  attributes.add("minecraft:generic.armor", 12)
  //});
  //event.modify('mutantmore:mutant_husk', attributes =>{ //突变尸壳
  //  attributes.add("minecraft:generic.max_health", 250)
  //  attributes.add("minecraft:generic.attack_damage", 16)
  //  attributes.add("forge:swim_speed", 3)
  //  attributes.add("forge:step_height_addition", 2)
  //  attributes.add("minecraft:generic.movement_speed", 0.3)
  //  attributes.add("minecraft:generic.armor", 12)
  //});

  //event.modify('mutantmore:mutant_wither_skeleton', attributes =>{ //突变凋零骷髅
  //  attributes.add("minecraft:generic.max_health", 400)
  //  attributes.add("minecraft:generic.attack_damage", 20)
  //  attributes.add("forge:swim_speed", 3)
  //  attributes.add("forge:step_height_addition", 6)
  //  attributes.add("minecraft:generic.armor", 8)
  //});

  event.modify('radiation_zone_reborn:radiation_skeleton', attributes =>{ //辐化骷髅
    attributes.add("minecraft:generic.max_health", 60)
    attributes.add("minecraft:generic.attack_damage", 12)
    attributes.add("forge:swim_speed", 3)
    attributes.add("forge:step_height_addition", 2)
    attributes.add("minecraft:generic.armor", 16)
  });

  event.modify('radiation_zone_reborn:dustorm', attributes =>{ //沙尘人
    attributes.add("minecraft:generic.max_health", 60)
    attributes.add("minecraft:generic.attack_damage", 12)
    attributes.add("forge:swim_speed", 3)
    attributes.add("forge:step_height_addition", 2)
    attributes.add("minecraft:generic.armor", 8)
  });

  event.modify('minecraft:enderman', attributes =>{ //末影人
    attributes.add("minecraft:generic.max_health", 80)
    attributes.add("minecraft:generic.attack_damage", 14)
    attributes.add("forge:step_height_addition", 2)
    attributes.add("minecraft:generic.armor", 8)
  });

  event.modify('goety:tormentor', attributes =>{ //折磨
    attributes.add("minecraft:generic.max_health", 80)
    attributes.add("minecraft:generic.attack_damage", 14)
    attributes.add("forge:step_height_addition", 2)
    attributes.add("minecraft:generic.armor", 8)
  });

  event.modify('radiation_zone_reborn:greater_dustorm', attributes =>{ //大型沙尘人
    attributes.add("minecraft:generic.max_health", 300)
    attributes.add("minecraft:generic.attack_damage", 16)
    attributes.add("forge:swim_speed", 3)
    attributes.add("forge:step_height_addition", 2)
    attributes.add("minecraft:generic.armor", 24)
  });

  event.modify('radiation_zone_reborn:sandstone_wither', attributes =>{ //砂岩凋灵
    attributes.add("minecraft:generic.max_health", 800)
    attributes.add("minecraft:generic.attack_damage", 16)
    attributes.add("forge:swim_speed", 3)
    attributes.add("forge:step_height_addition", 2)
    attributes.add("minecraft:generic.armor", 24)
  });

  event.modify('radiation_zone_reborn:fluorescence', attributes =>{ //荧光人
    attributes.add("minecraft:generic.max_health", 60)
    attributes.add("minecraft:generic.attack_damage", 12)
    attributes.add("forge:swim_speed", 3)
    attributes.add("forge:step_height_addition", 2)
    attributes.add("minecraft:generic.armor", 12)
  });

  event.modify('radiation_zone_reborn:irradiant', attributes =>{ //荧烁
    attributes.add("minecraft:generic.max_health", 150)
    attributes.add("minecraft:generic.attack_damage", 12)
    attributes.add("forge:swim_speed", 3)
    attributes.add("forge:step_height_addition", 2)
    attributes.add("minecraft:generic.armor", 12)
  });

  event.modify('radiation_zone_reborn:silver_calamity', attributes =>{ //银质灾祸
    attributes.add("minecraft:generic.max_health", 2000)
    attributes.add("minecraft:generic.knockback_resistance", 10)
    attributes.add("minecraft:generic.attack_damage", 10)
    attributes.add("forge:swim_speed", 3)
    attributes.add("forge:step_height_addition", 3)
    attributes.add("minecraft:generic.movement_speed", 1.0)
    attributes.add("minecraft:generic.armor", 8)
  });

  event.modify('radiation_zone_reborn:decayed_totem', attributes =>{ //腐衰图腾
    attributes.add("minecraft:generic.max_health", 300)
    attributes.add("minecraft:generic.attack_damage", 12)
    attributes.add("minecraft:generic.movement_speed", 0.3)
    attributes.add("forge:swim_speed", 3)
    attributes.add("forge:step_height_addition", 2)
    attributes.add("minecraft:generic.armor", 24)
  });

  event.modify('radiation_zone_reborn:wastelands_tyrant', attributes =>{ //荒原龙
    attributes.add("minecraft:generic.max_health", 600)
    attributes.add("minecraft:generic.attack_damage", 6)
    attributes.add("minecraft:generic.movement_speed", 0.35)
    attributes.add("forge:swim_speed", 3)
    attributes.add("forge:step_height_addition", 2)
    attributes.add("minecraft:generic.armor", 24)
    attributes.add("minecraft:generic.armor_toughness", 20)
  });

  event.modify('radiation_zone_reborn:radien', attributes =>{ //放射人
    attributes.add("minecraft:generic.max_health", 100)
    attributes.add("minecraft:generic.attack_damage", 12)
    attributes.add("forge:swim_speed", 3)
    attributes.add("forge:step_height_addition", 2)
    attributes.add("minecraft:generic.armor", 12)
  });

  event.modify('radiation_zone_reborn:decayed_stone_creeper', attributes =>{ //衰败石苦力怕
    attributes.add("minecraft:generic.max_health", 80)
    attributes.add("minecraft:generic.attack_damage", 12)
    attributes.add("forge:swim_speed", 3)
    attributes.add("forge:step_height_addition", 2)
    attributes.add("minecraft:generic.armor", 12)
  });

  event.modify('radiation_zone_reborn:decayed_giant', attributes =>{ //衰败石像
    attributes.add("minecraft:generic.max_health", 240)
    attributes.add("minecraft:generic.attack_damage", 16)
    attributes.add("forge:swim_speed", 3)
    attributes.add("forge:step_height_addition", 2)
    attributes.add("minecraft:generic.armor", 24)
  });

  event.modify('minecraft:shulker', attributes =>{ //潜影贝
    attributes.add("minecraft:generic.max_health", 100)
    attributes.add("minecraft:generic.attack_damage", 16)
    attributes.add("forge:swim_speed", 3)
    attributes.add("forge:step_height_addition", 2)
    attributes.add("minecraft:generic.armor", 20)
    attributes.add("minecraft:generic.armor_toughness", 20)
  });

  event.modify('cataclysm:endermaptera', attributes =>{ //末影甲虫
    attributes.add("minecraft:generic.max_health", 40)
    attributes.add("minecraft:generic.attack_damage", 16)
    attributes.add("forge:swim_speed", 3)
    attributes.add("forge:step_height_addition", 2)
    attributes.add("minecraft:generic.armor", 10)
  });

  event.modify('twilightforest:naga', attributes =>{ //娜迦
    attributes.add("minecraft:generic.max_health", 200)
    attributes.add("forge:swim_speed", 3)
    attributes.add("minecraft:generic.knockback_resistance", 0.5)
    attributes.add("minecraft:generic.armor", 4)
    attributes.add("minecraft:generic.armor_toughness", 4)
  });

  event.modify('crockpot:volt_goat', attributes =>{ //伏特羊
    attributes.add("minecraft:generic.max_health", 200)
    attributes.add("minecraft:generic.attack_damage", 20)
    attributes.add("minecraft:generic.knockback_resistance", 10)
    attributes.add("forge:swim_speed", 3)
    attributes.add("forge:step_height_addition", 3)
    attributes.add("minecraft:generic.movement_speed", 0.35)
    attributes.add("minecraft:generic.armor", 12)
    attributes.add("minecraft:generic.armor_toughness", 12)
  });

  event.modify('aether:cockatrice', attributes =>{ //鸡蛇
    attributes.add("minecraft:generic.max_health", 60)
    attributes.add("minecraft:generic.attack_damage", 12)
    attributes.add("minecraft:generic.knockback_resistance", 10)
    attributes.add("forge:swim_speed", 3)
    attributes.add("forge:step_height_addition", 2)
    attributes.add("minecraft:generic.movement_speed", 0.35)
    attributes.add("minecraft:generic.armor", 12)
  });

  event.modify('aether:sentry', attributes =>{ //爆破哨石
    attributes.add("minecraft:generic.max_health", 40)
    attributes.add("minecraft:generic.attack_damage", 12)
    attributes.add("minecraft:generic.knockback_resistance", 2)
    attributes.add("forge:swim_speed", 3)
    attributes.add("minecraft:generic.movement_speed", 0.3)
    attributes.add("minecraft:generic.armor", 10)
  });

  event.modify('aether:mimic', attributes =>{ //拟箱怪
    attributes.add("minecraft:generic.max_health", 60)
    attributes.add("minecraft:generic.attack_damage", 12)
    attributes.add("minecraft:generic.knockback_resistance", 2)
    attributes.add("forge:swim_speed", 3)
    attributes.add("minecraft:generic.movement_speed", 0.3)
    attributes.add("minecraft:generic.armor", 10)
  });

  event.modify('twilightforest:troll', attributes =>{ //洞穴巨魔
    attributes.add("minecraft:generic.max_health", 60)
    attributes.add("minecraft:generic.attack_damage", 12)
    attributes.add("minecraft:generic.knockback_resistance", 2)
    attributes.add("forge:swim_speed", 3)
    attributes.add("minecraft:generic.movement_speed", 0.3)
    attributes.add("minecraft:generic.armor", 10)
  });

  event.modify('aethermobs:guardianangel', attributes =>{ //守护天使
    attributes.add("minecraft:generic.max_health", 100)
    attributes.add("minecraft:generic.attack_damage", 20)
    attributes.add("minecraft:generic.knockback_resistance", 10)
    attributes.add("forge:swim_speed", 3)
    attributes.add("forge:step_height_addition", 4)
    attributes.add("minecraft:generic.movement_speed", 0.38)
    attributes.add("minecraft:generic.armor", 10)
    attributes.add("minecraft:generic.armor_toughness", 10)
  });
  event.modify('aethermobs:aetherdragon', attributes =>{ //天境巨龙
    attributes.add("minecraft:generic.max_health", 600)
    attributes.add("minecraft:generic.attack_damage", 20)
    attributes.add("minecraft:generic.knockback_resistance", 10)
    attributes.add("forge:swim_speed", 3)
    attributes.add("minecraft:generic.movement_speed", 0.5)
    attributes.add("minecraft:generic.armor", 10)
    attributes.add("minecraft:generic.armor_toughness", 10)
  });
  event.modify('aethermobs:aetherdragonphase_2', attributes =>{ //天境巨龙二阶段
    attributes.add("minecraft:generic.max_health", 600)
    attributes.add("minecraft:generic.attack_damage", 20)
    attributes.add("minecraft:generic.knockback_resistance", 10)
    attributes.add("forge:swim_speed", 3)
    attributes.add("forge:step_height_addition", 10)
    attributes.add("minecraft:generic.movement_speed", 0.5)
    attributes.add("minecraft:generic.armor", 20)
    attributes.add("minecraft:generic.armor_toughness", 10)
  });

  event.modify('aether:valkyrie_queen', attributes =>{ //武神女王
    attributes.add("minecraft:generic.max_health", 600)
    attributes.add("minecraft:generic.knockback_resistance", 10)
    attributes.add("minecraft:generic.armor", 20)
    attributes.add("minecraft:generic.armor_toughness", 20)
    attributes.add("forge:step_height_addition", 10)
    attributes.add("minecraft:generic.movement_speed", 0.4)
    attributes.add("forge:swim_speed", 10)
  });

  event.modify('aether:fire_minion', attributes =>{ //烈阳仆从
    attributes.add("minecraft:generic.max_health", 200)
    attributes.add("minecraft:generic.attack_damage", 20)
    attributes.add("minecraft:generic.movement_speed", 0.3)
    attributes.add("minecraft:generic.armor", 4)
    attributes.add("minecraft:generic.armor_toughness", 4)
    attributes.add("forge:step_height_addition", 4)
    attributes.add("forge:swim_speed", 10)
  });

  event.modify('aether:sun_spirit', attributes =>{ //烈阳巨灵
    attributes.add("minecraft:generic.armor", 4)
    attributes.add("minecraft:generic.armor_toughness", 4)
  });

  event.modify('ba_bt:land_golem', attributes =>{ //大地守卫
    attributes.add("minecraft:generic.attack_damage", 2)
  });

  event.modify('minecraft:wither', attributes =>{ //凋灵
    attributes.add("minecraft:generic.max_health", 200)
    attributes.add("minecraft:generic.armor", 4)
    attributes.add("minecraft:generic.knockback_resistance", 10)
  });

  event.modify('eeeabsmobs:corpse_warlock', attributes =>{ //死尸术士
    attributes.add("minecraft:generic.max_health", 300)
    attributes.add("minecraft:generic.armor", 4)
    attributes.add("minecraft:generic.armor_toughness", 4)
  });

  event.modify('twilightforest:minoshroom', attributes =>{ //米诺菇
    attributes.add("minecraft:generic.max_health", 200)
    attributes.add("minecraft:generic.armor", 12)
    attributes.add("minecraft:generic.armor_toughness", 4)
    attributes.add("minecraft:generic.attack_damage", 12)
    attributes.add("minecraft:generic.movement_speed", 0.4)
    attributes.add("forge:step_height_addition", 5)
    attributes.add("forge:swim_speed", 10)
  });

  event.modify('better_minoshroomtaur:better_minoshroomtaur', attributes =>{ //超级米诺菇
    attributes.add("minecraft:generic.max_health", 250)
    attributes.add("minecraft:generic.armor", 10)
    attributes.add("minecraft:generic.armor_toughness", 4)
    attributes.add("minecraft:generic.attack_damage", 6)
    attributes.add("minecraft:generic.movement_speed", 0.3)
    attributes.add("forge:step_height_addition", 5)
    attributes.add("forge:swim_speed", 10)
  });

  event.modify('royalvariations:royal_zombie', attributes =>{ //皇家僵尸
    attributes.add("minecraft:generic.armor", 8)
    attributes.add("minecraft:generic.armor_toughness", 8)
    attributes.add("minecraft:generic.max_health", 100)
  });

  event.modify('royalvariations:royal_skeleton', attributes =>{ //皇家骷髅
    attributes.add("minecraft:generic.armor", 4)
    attributes.add("minecraft:generic.armor_toughness", 8)
    attributes.add("minecraft:generic.max_health", 80)
  });

  event.modify('twilightforest:king_spider', attributes =>{ //国王蜘蛛
    attributes.add("minecraft:generic.armor", 4)
    attributes.add("minecraft:generic.armor_toughness", 8)
    attributes.add("minecraft:generic.max_health", 60)
  });

  event.modify('twilightforest:armored_giant', attributes =>{ //武装巨人
    attributes.add("minecraft:generic.armor", 8)
    attributes.add("minecraft:generic.armor_toughness", 8)
    attributes.add("minecraft:generic.max_health", 200)
  });

  event.modify('twilightforest:giant_miner', attributes =>{ //巨人矿工
    attributes.add("minecraft:generic.armor", 4)
    attributes.add("minecraft:generic.armor_toughness", 4)
    attributes.add("minecraft:generic.max_health", 200)
  });

  event.modify('twilightforest:lich', attributes =>{ //巫妖
    attributes.add("minecraft:generic.armor", 4)
    attributes.add("minecraft:generic.armor_toughness", 8)
    attributes.add("minecraft:generic.max_health", 200)
  });

  event.modify('twilightforest:alpha_yeti', attributes =>{ //雪怪首领
    attributes.add("minecraft:generic.armor", 8)
    attributes.add("minecraft:generic.armor_toughness", 8)
    attributes.add("minecraft:generic.max_health", 250)
  });

  event.modify('twilightforest:snow_queen', attributes =>{ //冰雪女王
    attributes.add("minecraft:generic.armor", 4)
    attributes.add("minecraft:generic.armor_toughness", 8)
    attributes.add("minecraft:generic.max_health", 250)
  });

  event.modify('twilightforest:hydra', attributes =>{ //九头蛇
    attributes.add("minecraft:generic.max_health", 250)
    attributes.add("minecraft:generic.armor", 4)
  });

  event.modify('twilightforest:ur_ghast', attributes =>{ //暮初恶魂
    attributes.add("minecraft:generic.max_health", 250)
    attributes.add("minecraft:generic.armor", 8)
  });

  event.modify('eeeabsmobs:guling_sentinel_heavy', attributes =>{ //古陵哨兵-重型
    attributes.add("minecraft:generic.armor", 20)
    attributes.add("minecraft:generic.movement_speed", 0.35)
    attributes.add("forge:swim_speed", 3)
    attributes.add("forge:step_height_addition", 5)
    attributes.add("minecraft:generic.knockback_resistance", 5)
  });

  event.modify('cataclysm:deepling_priest', attributes =>{ //渊灵祭司
    attributes.add("minecraft:generic.max_health", 200)
    attributes.add("minecraft:generic.armor", 10)
  });

  event.modify('cataclysm:deepling_warlock', attributes =>{ //渊灵术士
    attributes.add("minecraft:generic.max_health", 200)
    attributes.add("minecraft:generic.armor", 10)
  });

  event.modify('cataclysm:coralssus', attributes =>{ //珊瑚巨像
    attributes.add("minecraft:generic.armor", 20)
    attributes.add("minecraft:generic.movement_speed", 0.35)
    attributes.add("forge:swim_speed", 3)
    attributes.add("forge:step_height_addition", 5)
    attributes.add("minecraft:generic.knockback_resistance", 5)
  });
  event.modify('cataclysm:coral_golem', attributes =>{ //珊瑚傀儡
    attributes.add("minecraft:generic.armor", 20)
    attributes.add("minecraft:generic.movement_speed", 0.35)
    attributes.add("forge:swim_speed", 3)
    attributes.add("forge:step_height_addition", 5)
    attributes.add("minecraft:generic.knockback_resistance", 5)
  });

  event.modify('meetyourfight:rosalyne', attributes =>{ //罗莎琳
    attributes.add("minecraft:generic.armor", 10)
    attributes.add("minecraft:generic.armor_toughness", 10)
    attributes.add("minecraft:generic.knockback_resistance", 5)
  });
  event.modify('eeeabsmobs:nameless_guardian', attributes =>{ //无名守卫者
    attributes.add("minecraft:generic.armor", 10)
    attributes.add("minecraft:generic.armor_toughness", 4)
    attributes.add("minecraft:generic.movement_speed", 0.35)
    attributes.add("forge:swim_speed", 3)
    attributes.add("forge:step_height_addition", 5)
    attributes.add("minecraft:generic.knockback_resistance", 5)
  });

  event.modify('cataclysm:ender_guardian', attributes =>{ //末影守卫
    attributes.add("minecraft:generic.armor", 20)
    attributes.add("minecraft:generic.movement_speed", 0.4)
    attributes.add("forge:swim_speed", 3)
    attributes.add("forge:step_height_addition", 5)
    attributes.add("minecraft:generic.knockback_resistance", 5)
  });
  event.modify('cataclysm:ignis', attributes =>{ //焰魔
    attributes.add("minecraft:generic.armor_toughness", 10)
    attributes.add("forge:step_height_addition", 5)
    attributes.add("minecraft:generic.movement_speed", 0.45)
    attributes.add("minecraft:generic.knockback_resistance", 5)
  });
  event.modify('cataclysm:netherite_monstrosity', attributes =>{ //下界合金巨兽
    attributes.add("minecraft:generic.armor", 20)
    attributes.add("forge:step_height_addition", 5)
    attributes.add("minecraft:generic.movement_speed", 0.4)
    attributes.add("minecraft:generic.knockback_resistance", 5)
  });
  event.modify('cataclysm:the_harbinger', attributes =>{ //先驱者
    attributes.add("minecraft:generic.armor", 12)
    attributes.add("minecraft:generic.knockback_resistance", 5)
  });
  event.modify('cataclysm:ancient_remnant', attributes =>{ //远古遗魂
    attributes.add("minecraft:generic.armor", 24)
    attributes.add("forge:step_height_addition", 5)
    attributes.add("minecraft:generic.movement_speed", 0.4)
    attributes.add("minecraft:generic.knockback_resistance", 5)
  });
  event.modify('cataclysm:the_leviathan', attributes =>{ //利维坦
    attributes.add("minecraft:generic.armor", 20)
    attributes.add("minecraft:generic.armor_toughness", 4)
    attributes.add("minecraft:generic.knockback_resistance", 5)
  });
  event.modify('cataclysm:maledictus', attributes =>{ //咒翼灵骸
    attributes.add("minecraft:generic.armor", 20)
    attributes.add("minecraft:generic.armor_toughness", 4)
    attributes.add("minecraft:generic.movement_speed", 0.5)
    attributes.add("forge:step_height_addition", 5)
    attributes.add("minecraft:generic.knockback_resistance", 5)
  });
  event.modify('cataclysm:scylla', attributes =>{ //斯库拉
    attributes.add("minecraft:generic.armor", 24)
    attributes.add("minecraft:generic.armor_toughness", 10)
    attributes.add("minecraft:generic.movement_speed", 0.45)
    attributes.add("forge:step_height_addition", 5)
    attributes.add("minecraft:generic.knockback_resistance", 5)
  });



})


