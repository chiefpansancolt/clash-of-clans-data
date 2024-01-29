import Defense from '@ICommon/defenses/defense.interface'
import Level from '@IBuilderBase/defenses/level.interface'
import TownHallDetails from '@ICommon/townHall/details.interface'
import Achievement from '@ICommon/achievement/achievement.interface'

interface BuilderBaseDefense extends Defense {
	maxCount: number
	levels: Level[]
	townHallDetails: TownHallDetails[]
	achievement: Achievement | Achievement[]

	getLevel(level: number): Level | undefined
	getTownHallLevel(level: number): TownHallDetails | undefined
}

export default BuilderBaseDefense
