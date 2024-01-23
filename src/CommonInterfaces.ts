export interface Level {
	level: number
	damagePerSecond: number
	damagePerShot: number
	hitpoints: number
	buildCost: number
	buildCostResource: string
	baseImgUrl: string
}

export interface HomeVillageLevel extends Level {
	buildTimeSec: number
	buildTimeMin: number
	buildTimeHour: number
	buildTimeDay: number
	exp: number
	townHallLevelRequired: number
}

export interface BuilderBaseLevel extends Level {
	buildTimeSec: number
	buildTimeMin: number
	buildTimeHour: number
	buildTimeDay: number
	exp: number
	townHallLevelRequired: number
}

export interface ClanCapitalLevel extends Level {
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
	maxCount: number
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

export interface HomeVillageDefense extends Defense {
	levels: HomeVillageLevel[]
	townHallDetails: TownHallDefense[]
	achievements: Achievement[]

	getLevel(levelr: number): HomeVillageLevel | undefined
	getTownHallLevel(level: number): TownHallDefense | undefined
	getAchievementLevel(level: number, count: number): AchievementLevel | undefined
}

export interface BuilderBaseDefense extends Defense {
	shots: number
	levels: BuilderBaseLevel[]
	townHallDetails: TownHallDefense[]
	achievements: Achievement[]

	getLevel(levelr: number): BuilderBaseLevel | undefined
	getTownHallLevel(level: number): TownHallDefense | undefined
	getAchievementLevel(level: number, count: number): AchievementLevel | undefined
}

export interface ClanCapitalDefense extends Defense {
	levels: ClanCapitalLevel[]
	capitalHallDetails: CapitalHallDefense[]

	getLevel(levelr: number): ClanCapitalLevel | undefined
	getCapitalHallLevel(name: string, level: number): TownHallDefense | undefined
}
