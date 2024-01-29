import HomeVillageLevel from '@IHomeVillage/defenses/level.interface'

interface Level extends HomeVillageLevel {
	unlocks: string
	poisonSpellImgUrl: string
	invisibilitySpellImgUrl: string
}

export default Level
