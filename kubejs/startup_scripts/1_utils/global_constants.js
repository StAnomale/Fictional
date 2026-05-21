//priority: 15
global.Block = Utils.getRegistry('minecraft:block')

global.Enchantments = Utils.getRegistry('enchantment')

const MeleeAttackGoal = Java.loadClass('net.minecraft.world.entity.ai.goal.MeleeAttackGoal')

const $ClipContext = Java.loadClass('net.minecraft.world.level.ClipContext')
const $ProjectileUtil = Java.loadClass('net.minecraft.world.entity.projectile.ProjectileUtil')
