interface Level {
	level: number
	hitpoints: number
	healingPerSecond: number
	healingPerPulse: number
	healingPerSecondOnHeroes: number
	researchCost: number
	researchCostResource: string
	researchTimeSec: number
	researchTimeMin: number
	researchTimeHour: number
	researchTimeDay: number
	laboratoryLevelRequired: number
	baseImgUrl: string
}

export default Level
