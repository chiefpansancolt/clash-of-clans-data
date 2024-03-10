import ArmyLevel from '@ICommon/army/level.interface'

interface Level extends ArmyLevel {
	researchTimeSec?: number
	researchTimeMin?: number
	researchTimeHour?: number
	researchTimeDay?: number
	laboratoryLevelRequired?: number
	builderHallLevelRequired?: number
	baseImgUrl: string
	abilityLevel: number
}

export default Level
