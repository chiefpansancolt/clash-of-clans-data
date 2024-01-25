import Defense from '@ICommon/defense.interface'
import HomeVillageModeLevel from '@IHomeVillage/modeLevel.interface'
import HomeVillageLevel from '@IHomeVillage/level.interface'
import TownHallDefense from '@ICommon/townHallDefense.interface'
import Achievement from '@ICommon/achievement.interface'
import AchievementLevel from '@ICommon/achievementLevel.interface'

interface HomeVillageModeDefense extends Defense {
	maxCount: number
	levels: HomeVillageModeLevel[]
	townHallDetails: TownHallDefense[]
	achievements: Achievement[]

	getLevel(mode: string, level: number): HomeVillageLevel | undefined
	getTownHallLevel(level: number): TownHallDefense | undefined
	getAchievementLevel(level: number, count: number): AchievementLevel | undefined
}

export default HomeVillageModeDefense
