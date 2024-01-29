import HomeVillageTrap from '@IHomeVillage/traps/trap.interface'
import Level from '@IHomeVillage/traps/skeletonTrap/level.interface'
import Mode from '@IHomeVillage/traps/skeletonTrap/mode.interface'

interface Trap extends HomeVillageTrap {
	mode: Mode | Mode[]
	levels: Level[]

	getLevel(level: number): Level | undefined
}

export default Trap
