import Defense from '@ICommon/defense.interface'
import BuilderBaseLevel from '@IBuilderBase/level.interface'
import TownHallDefense from '@ICommon/townHallDefense.interface'
import Achievement from '@ICommon/achievement.interface'
import AchievementLevel from '@ICommon/achievementLevel.interface'

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
