import Defense from '@ICommon/defense.interface'
import HomeVillagePushLevel from '@IHomeVillage/pushLevel.interface'
import TownHallDefense from '@ICommon/townHallDefense.interface'
import Achievement from '@ICommon/achievement.interface'
import AchievementLevel from '@ICommon/achievementLevel.interface'

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
