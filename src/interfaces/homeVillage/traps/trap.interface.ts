import Level from '@IHomeVillage/traps/level.interface'
import Trap from '@ICommon/traps/trap.interface'
import Mode from '@IHomeVillage/traps/mode.interface'
import TownHallDetails from '@IHomeVillage/townHall/details.interface'

interface HomeVillageTrap extends Trap {
	maxCount: number
	levels: Level[]
	mode?: Mode | Mode[]
	townHallDetails: TownHallDetails[]

	getLevel(level: number): Level | undefined
	getTownHallLevel(level: number): TownHallDetails | undefined
}

export default HomeVillageTrap
