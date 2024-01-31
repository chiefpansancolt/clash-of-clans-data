import ArmyLevel from '@IHomeVillage/army/level.interface'

interface Level extends ArmyLevel {
	spellUnlocked: string | string[]
	spellStorageCapacity: number
	activeImgUrl: string
}

export default Level
