import ResourceLevel from '@ICommon/resources/level.interface'

interface Level extends ResourceLevel {
	productionRatePerDay: number
	productionTimePerGemSec: number
	productionTimePerGemMin: number
	productionTimePerGemHour: number
	productionTimePerGemDay: number
	timeToFillSec: number
	timeToFillMin: number
	timeToFillHour: number
	timeToFillDay: number
}

export default Level
