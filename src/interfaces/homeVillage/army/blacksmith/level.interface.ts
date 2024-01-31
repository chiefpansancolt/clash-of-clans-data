import ArmyLevel from '@IHomeVillage/army/level.interface'

interface Level extends ArmyLevel {
	equipmentUnlocked: string
	shinyOreCapacity: number
	glowyOreCapacity: number
	starryOreCapacity: number
}

export default Level
