export interface Level {
	level: number
	hitpoints: number
	buildCost: number
	buildCostResource: string
	baseImgUrl: string
}

export interface HomeVillagePushLevel extends Level {
	pushStrength: number
	buildTimeSec: number
	buildTimeMin: number
	buildTimeHour: number
	buildTimeDay: number
	exp: number
	townHallLevelRequired: number
}

export interface HomeVillageLevel extends Level {
	damagePerSecond: number
	damagePerShot: number
	buildTimeSec: number
	buildTimeMin: number
	buildTimeHour: number
	buildTimeDay: number
	exp: number
	townHallLevelRequired: number
}

export interface BuilderBaseLevel extends Level {
	damagePerSecond: number
	damagePerShot: number
	buildTimeSec: number
	buildTimeMin: number
	buildTimeHour: number
	buildTimeDay: number
	exp: number
	townHallLevelRequired: number
}

export interface ClanCapitalLevel extends Level {
	damagePerSecond: number
	damagePerShot: number
	clanCapitalLevel: number
	districtHallLevel: number
}

export interface GearUp {
	buildCost: number
	buildTimeSec: number
	buildTimeMin: number
	buildTimeHour: number
	buildTimeDay: number
	homeVillageLevelRequired: number
	builderBaseDefenseLevelRequired: number
}

export interface TownHallDefense {
	townHall: number
	availableCount: number
	maxLevel: number
}

export interface CapitalHallDefense {
	name: string
	levels: TownHallDefense[]
}

export interface Achievement {
	name: string
	village: string
	levels: AchievementLevel[]
}

export interface AchievementLevel {
	info: string
	exp: number
	gems: number
	stars: number
	target: number
}

export interface Defense {
	name: string
	description: string
	width: number
	height: number
	minRange: number
	maxRange: number
	attackSpeed: number
	damageType: string
	tiles: number
	unitTypeTarget: string
	maxLevel: number

	getSize(): string
}

export interface HomeVillagePushDefense extends Defense {
	maxCount: number
	levels: HomeVillagePushLevel[]
	townHallDetails: TownHallDefense[]
	achievements: Achievement[]

	getLevel(level: number): HomeVillagePushLevel | undefined
	getTownHallLevel(level: number): TownHallDefense | undefined
	getAchievementLevel(level: number, count: number): AchievementLevel | undefined
}

export interface HomeVillageDefense extends Defense {
	maxCount: number
	levels: HomeVillageLevel[]
	townHallDetails: TownHallDefense[]
	achievements: Achievement[]

	getLevel(level: number): HomeVillageLevel | undefined
	getTownHallLevel(level: number): TownHallDefense | undefined
	getAchievementLevel(level: number, count: number): AchievementLevel | undefined
}

export interface BuilderBaseDefense extends Defense {
	maxCount: number
	shots: number
	levels: BuilderBaseLevel[]
	townHallDetails: TownHallDefense[]
	achievements: Achievement[]

	getLevel(level: number): BuilderBaseLevel | undefined
	getTownHallLevel(level: number): TownHallDefense | undefined
	getAchievementLevel(level: number, count: number): AchievementLevel | undefined
}

export interface ClanCapitalDefense extends Defense {
	levels: ClanCapitalLevel[]
	capitalHallDetails: CapitalHallDefense[]

	getLevel(levelr: number): ClanCapitalLevel | undefined
	getCapitalHallLevel(name: string, level: number): TownHallDefense | undefined
}
