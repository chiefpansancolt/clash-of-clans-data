import Defense from '@ICommon/defenses/defense.interface'
import Level from '@IBuilderBase/defenses/guardTower/level.interface'
import Troop from '@ICommon/defenses/troop.interface'
import TownHallDetails from '@ICommon/hall/details.interface'
import Achievement from '@ICommon/achievement/achievement.interface'

interface BuilderBaseDefense extends Defense {
	maxCount: number
	troops: Troop[]
	levels: Level[]
	townHallDetails: TownHallDetails[]
	achievement: Achievement | Achievement[]

	getLevel(level: number): Level | undefined
	getTownHallLevel(level: number): TownHallDetails | undefined
}

export default BuilderBaseDefense
