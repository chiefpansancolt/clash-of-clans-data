import Building from '@IClanCapital/army/army.interface'
import Level from '@IClanCapital/army/armyCamp/level.interface'

interface ArmyCamp extends Building {
	levels: Level[]

	getLevel(level: number): Level | undefined
}

export default ArmyCamp
