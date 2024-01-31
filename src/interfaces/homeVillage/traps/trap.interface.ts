import Level from '@IHomeVillage/traps/level.interface'
import Trap from '@ICommon/traps/trap.interface'
import TownHallDetails from '@ICommon/hall/details.interface'

interface HomeVillageTrap extends Trap {
	maxCount: number
	levels: Level[]
	townHallDetails: TownHallDetails[]

	getLevel(level: number): Level | undefined
	getTownHallLevel(level: number): TownHallDetails | undefined
}

export default HomeVillageTrap
