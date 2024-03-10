import AbilityLevel from '@IBuilderBase/troops/abilityLevel.interface'

interface Ability {
	chargeLevel: number
	attackType: string
	chainDamageDecay?: number
	tiles?: number
	levels: AbilityLevel[]
}

export default Ability
