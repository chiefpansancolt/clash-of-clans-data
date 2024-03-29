import Level from '@ICommon/level.interface'

interface ResourceLevel extends Level {
	capacity?: number
	buildTimeSec?: number
	buildTimeMin?: number
	buildTimeHour?: number
	buildTimeDay?: number
	exp?: number
}

export default ResourceLevel
