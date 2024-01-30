import ResourceLevel from '@ICommon/resources/level.interface'

interface Level extends ResourceLevel {
	productionRatePerHr: number
	timeToFillSec: number
	timeToFillMin: number
	timeToFillHour: number
	timeToFillDay: number
}

export default Level
