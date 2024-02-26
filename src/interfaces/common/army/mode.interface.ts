interface Mode {
	preferredTarget?: string
	attackType?: string
	effectType?: string
	unitTypeTarget: string
	movementSpeed: number
	attackSpeed?: number
	healSpeed?: number
	tiles?: number
	minRange: number
	maxRange: number
	damageRadius?: number
}

export default Mode
