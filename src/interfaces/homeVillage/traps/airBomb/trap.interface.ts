import HomeVillageTrap from '@IHomeVillage/traps/trap.interface'
import Level from '@IHomeVillage/traps/airBomb/level.interface'
import Mode from '@IHomeVillage/traps/airBomb/mode.interface'

interface Trap extends HomeVillageTrap {
	mode: Mode | Mode[]
	levels: Level[]

	getLevel(level: number): Level | undefined
}

export default Trap
