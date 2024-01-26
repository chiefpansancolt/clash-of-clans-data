import DefenseMode from '@ICommon/defenseMode.interface'

interface Mode extends DefenseMode {
	spellRadius: number
	spellDurationInSec: number
	damageIncrease: number
	rechargeTimeInSec: number
	trigger: string
	deployPosition: string
	maxDamagePerSecond: number
	speedIncrease: number
	attackRateDecrease: number
}

export default Mode
