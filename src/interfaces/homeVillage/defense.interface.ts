import Defense from '../common/defense.interface'
import HomeVillageLevel from '../homeVillage/level.interface'
import TownHallDefense from '../common/townHallDefense.interface'
import Achievement from '../common/achievement.interface'
import AchievementLevel from '../common/achievementLevel.interface'

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
