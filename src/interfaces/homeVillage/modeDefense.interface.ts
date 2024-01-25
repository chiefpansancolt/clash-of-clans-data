import Defense from '../common/defense.interface'
import HomeVillageModeLevel from '../homeVillage/modeLevel.interface'
import HomeVillageLevel from '../homeVillage/level.interface'
import TownHallDefense from '../common/townHallDefense.interface'
import Achievement from '../common/achievement.interface'
import AchievementLevel from '../common/achievementLevel.interface'

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
