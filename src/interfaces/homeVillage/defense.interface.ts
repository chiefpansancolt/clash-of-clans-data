import Defense from '@ICommon/defense.interface'
import HomeVillageLevel from '@IHomeVillage/level.interface'
import TownHallDefense from '@ICommon/townHallDefense.interface'
import Achievement from '@ICommon/achievement.interface'
import AchievementLevel from '@ICommon/achievementLevel.interface'

interface HomeVillageDefense extends Defense {
	maxCount: number
	levels: HomeVillageLevel[]
	townHallDetails: TownHallDefense[]
	achievements: Achievement[]

	getLevel(level: number): HomeVillageLevel | undefined
	getTownHallLevel(level: number): TownHallDefense | undefined
	getAchievementLevel(level: number, count: number): AchievementLevel | undefined
}

export default HomeVillageDefense
