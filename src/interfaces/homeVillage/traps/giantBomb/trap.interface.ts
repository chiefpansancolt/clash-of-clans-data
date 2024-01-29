import HomeVillageTrap from '@IHomeVillage/traps/trap.interface'
import Level from '@IHomeVillage/traps/giantBomb/level.interface'

interface Trap extends HomeVillageTrap {
	levels: Level[]

	getLevel(level: number): Level | undefined
}

export default Trap
