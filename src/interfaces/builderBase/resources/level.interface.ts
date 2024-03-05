import ResourceLevel from '@ICommon/resources/level.interface'

interface Level extends ResourceLevel {
	productionRatePerHr?: number
	timeToFillSec?: number
	timeToFillMin?: number
	timeToFillHour?: number
	timeToFillDay?: number
	productionRatePerDay?: number
	productionTimePerGemSec?: number
	productionTimePerGemMin?: number
	productionTimePerGemHour?: number
	productionTimePerGemDay?: number
	upgradeRequirement?: string
	builderHallLevelRequired?: number
}

export default Level
