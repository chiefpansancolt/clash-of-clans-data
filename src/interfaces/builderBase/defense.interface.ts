import Defense from '../common/defense.interface'
import BuilderBaseLevel from '../builderBase/level.interface'
import TownHallDefense from '../common/townHallDefense.interface'
import Achievement from '../common/achievement.interface'
import AchievementLevel from '../common/achievementLevel.interface'

interface BuilderBaseDefense extends Defense {
	maxCount: number
	levels: BuilderBaseLevel[]
	townHallDetails: TownHallDefense[]
	achievements: Achievement[]

	getLevel(level: number): BuilderBaseLevel | undefined
	getTownHallLevel(level: number): TownHallDefense | undefined
	getAchievementLevel(level: number, count: number): AchievementLevel | undefined
}

export default BuilderBaseDefense
