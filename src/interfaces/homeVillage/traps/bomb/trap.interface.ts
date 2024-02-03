import HomeVillageTrap from '@IHomeVillage/traps/trap.interface'
import Level from '@IHomeVillage/traps/bomb/level.interface'
import Mode from '@IHomeVillage/traps/bomb/mode.interface'

interface Trap extends HomeVillageTrap {
	mode?: Mode | Mode[]
	levels: Level[]

	getLevel(level: number): Level | undefined
}

export default Trap
