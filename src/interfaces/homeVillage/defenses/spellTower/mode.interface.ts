import DefenseMode from '@ICommon/defenses/mode.interface'

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
