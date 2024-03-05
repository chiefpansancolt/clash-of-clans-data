import DefenseMode from '@ICommon/defenses/mode.interface'

interface Mode extends DefenseMode {
	tiles?: number
	movementSpeed?: number
	activationHousingSpace?: number
	shotsPerBurst?: number
	tilesShockwave?: number
	favoriteTarget?: string
	numberOfRounds?: number
	triggerRange?: number
	numberOfTargets?: number
	spellRadius?: number
	spellDurationInSec?: number
	damageIncrease?: number
	rechargeTimeInSec?: number
	trigger?: string
	deployPosition?: string
	maxDamagePerSecond?: number
	speedIncrease?: number
	attackRateDecrease?: number
}

export default Mode
