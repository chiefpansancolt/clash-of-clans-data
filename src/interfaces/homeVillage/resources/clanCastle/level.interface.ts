import LevelBase from '@ICommon/level.interface'

interface Level extends LevelBase {
	buildTimeSec: number
	buildTimeMin: number
	buildTimeHour: number
	buildTimeDay: number
	exp: number
	townHallLevelRequired: number
	troopCapacity: number
	spellCapacity: number
	siegeMachineCapacity: number
	laboratoryLevelCap: number
}

export default Level
