import HomeVillageTrap from '@IHomeVillage/traps/trap.interface'
import Level from '@IHomeVillage/traps/tornadoTrap/level.interface'
import Mode from '@IHomeVillage/traps/tornadoTrap/mode.interface'

interface Trap extends HomeVillageTrap {
	mode: Mode | Mode[]
	levels: Level[]

	getLevel(level: number): Level | undefined
}

export default Trap
