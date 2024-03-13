import Level from '@IClanCapital/troops/level.interface'
import BaseArmy from '@ICommon/army/army.interface'
import Mode from '@IClanCapital/troops/mode.interface'

interface Army extends BaseArmy {
	housingSpace?: number
	levels: Level[]
	mode?: Mode | Mode[]
	buildingName?: string

	getLevel(level: number): Level | undefined
}

export default Army
