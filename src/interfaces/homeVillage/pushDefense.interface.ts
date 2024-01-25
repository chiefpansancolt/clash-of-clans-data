import Defense from '../common/defense.interface'
import HomeVillagePushLevel from '../homeVillage/pushLevel.interface'
import TownHallDefense from '../common/townHallDefense.interface'
import Achievement from '../common/achievement.interface'
import AchievementLevel from '../common/achievementLevel.interface'

interface HomeVillagePushDefense extends Defense {
	maxCount: number
	levels: HomeVillagePushLevel[]
	townHallDetails: TownHallDefense[]
	achievements: Achievement[]

	getLevel(level: number): HomeVillagePushLevel | undefined
	getTownHallLevel(level: number): TownHallDefense | undefined
	getAchievementLevel(level: number, count: number): AchievementLevel | undefined
}

export default HomeVillagePushDefense
