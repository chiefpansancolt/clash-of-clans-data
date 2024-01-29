import HomeVillageLevel from '@IHomeVillage/defenses/level.interface'

interface Level extends HomeVillageLevel {
	groundDepletedImgUrl: string
	airGroundImgUrl: string
	airGroundDepletedImgUrl: string
}

export default Level
