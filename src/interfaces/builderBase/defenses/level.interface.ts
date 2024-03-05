import Level from '@ICommon/level.interface'

interface BuilderBaseLevel extends Level {
	damagePerSecond?: number
	damagePerShot?: number
	buildTimeSec: number
	buildTimeMin: number
	buildTimeHour: number
	buildTimeDay: number
	exp: number
	builderHallLevelRequired: number
	spawnedZappies?: number
	burstFireShots?: number
	troopLevel?: number
	airImgUrl?: string
}

export default BuilderBaseLevel
