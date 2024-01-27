interface SubLevel {
	level: number
	buildCost: number
	buildCostResource: string
	damagePerSecondPerTarget: number
	damagePerShotPerTarget: number
	numberOfTargets: number
	damageWhenDestroyed: number
	slowdownTimeWhenDestroyed: number
	speedDecrease: number
	attackRateDecrease: number
	poisonMaxDPS: number
	poisonDurationWhenDestroyed: number
	deathDamageRadius: number
	buildTimeSec: number
	buildTimeMin: number
	buildTimeHour: number
	buildTimeDay: number
	exp: number
	townHallLevelRequired: number
	baseImgUrl: string
}

export default SubLevel
