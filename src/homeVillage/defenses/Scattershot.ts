import * as Constants from '../../Constats'
import {
	TownHallDefense,
	AchievementLevel,
	HomeVillageLevel,
	HomeVillageDefense,
	DefenseMode,
} from '../../CommonInterfaces'

interface ScattershotMode extends DefenseMode {
	numberOfRounds: number
}

interface ScattershotLevel extends HomeVillageLevel {
	damagePerShotMax: number
	splashDamageMin: number
	splashDamageMax: number
	depletedImgUrl: string
}

interface Scattershot extends HomeVillageDefense {
	modes: ScattershotMode[]
	levels: ScattershotLevel[]

	getLevel(level: number): ScattershotLevel | undefined
}

const scattershot: Scattershot = {
	name: 'Scattershot',
	description:
		'The Scattershot heaves very heavy bundles of poorly tied together rocks at whoever happens to be closest. The bundles break apart on impact and deal additional damage to the troops behind.',
	maxCount: 2,
	width: 3,
	height: 3,
	maxLevel: 4,
	modes: [
		{
			name: Constants.mainMode,
			damageType: Constants.areaSplash,
			unitTypeTarget: Constants.groundAndAir,
			minRange: 3,
			maxRange: 10,
			attackSpeed: 3.228,
			numberOfRounds: 90,
		},
	],
	townHallDetails: [
		{ townHall: 1, availableCount: 0, maxLevel: 0 },
		{ townHall: 2, availableCount: 0, maxLevel: 0 },
		{ townHall: 3, availableCount: 0, maxLevel: 0 },
		{ townHall: 4, availableCount: 0, maxLevel: 0 },
		{ townHall: 5, availableCount: 0, maxLevel: 0 },
		{ townHall: 6, availableCount: 0, maxLevel: 0 },
		{ townHall: 7, availableCount: 0, maxLevel: 0 },
		{ townHall: 8, availableCount: 0, maxLevel: 0 },
		{ townHall: 9, availableCount: 0, maxLevel: 0 },
		{ townHall: 10, availableCount: 0, maxLevel: 0 },
		{ townHall: 11, availableCount: 0, maxLevel: 0 },
		{ townHall: 12, availableCount: 0, maxLevel: 0 },
		{ townHall: 13, availableCount: 2, maxLevel: 2 },
		{ townHall: 14, availableCount: 2, maxLevel: 3 },
		{ townHall: 15, availableCount: 2, maxLevel: 4 },
		{ townHall: 16, availableCount: 2, maxLevel: 4 },
	],
	achievements: [
		{
			name: 'Shattered and Scattered',
			village: Constants.homeVillage,
			levels: [
				{
					info: 'Destroy 40 Scattershots',
					exp: 100,
					gems: 150,
					stars: 1,
					target: 40,
				},
				{
					info: 'Destroy 400 Scattershots',
					exp: 800,
					gems: 300,
					stars: 2,
					target: 400,
				},
				{
					info: 'Destroy 4000 Scattershots',
					exp: 5000,
					gems: 1000,
					stars: 3,
					target: 4000,
				},
			],
		},
	],
	levels: [
		{
			level: 1,
			damagePerSecond: 125,
			damagePerShot: 300,
			damagePerShotMax: 403.5,
			splashDamageMin: 100,
			splashDamageMax: 300,
			hitpoints: 3600,
			buildCost: 11000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 10,
			exp: 929,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/67/Scattershot1.png/revision/latest/scale-to-width-down/120?cb=20200921071952',
			depletedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/ba/Scattershot1_Depleted.png/revision/latest/scale-to-width-down/120?cb=20200921071804',
		},
		{
			level: 2,
			damagePerSecond: 150,
			damagePerShot: 360,
			damagePerShotMax: 484.2,
			splashDamageMin: 120,
			splashDamageMax: 360,
			hitpoints: 4200,
			buildCost: 12000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 11,
			exp: 974,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/62/Scattershot2.png/revision/latest/scale-to-width-down/120?cb=20200921072106',
			depletedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e8/Scattershot2_Depleted.png/revision/latest/scale-to-width-down/120?cb=20200921071740',
		},
		{
			level: 3,
			damagePerSecond: 175,
			damagePerShot: 420,
			damagePerShotMax: 564.9,
			splashDamageMin: 140,
			splashDamageMax: 420,
			hitpoints: 4800,
			buildCost: 12600000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 13,
			exp: 1059,
			townHallLevelRequired: 14,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4c/Scattershot3.png/revision/latest/scale-to-width-down/120?cb=20210412215426',
			depletedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f8/Scattershot3_Depleted.png/revision/latest/scale-to-width-down/120?cb=20210412215425',
		},
		{
			level: 4,
			damagePerSecond: 185,
			damagePerShot: 450,
			damagePerShotMax: 597.18,
			splashDamageMin: 150,
			splashDamageMax: 450,
			hitpoints: 5100,
			buildCost: 21300000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 14,
			exp: 1099,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/38/Scattershot4.png/revision/latest/scale-to-width-down/120?cb=20230613001159',
			depletedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/08/Scattershot4_Depleted.png/revision/latest/scale-to-width-down/120?cb=20230613001158',
		},
	],
	getSize(): string {
		return `${this.width}x${this.height}`
	},
	getLevel(level: number): ScattershotLevel | undefined {
		if (level >= 1 && level <= this.levels.length) {
			return this.levels[level - 1]
		} else {
			console.error(`Invalid ${this.name} level: ${level}`)
			return undefined
		}
	},
	getTownHallLevel(level: number): TownHallDefense | undefined {
		if (level >= 1 && level <= this.townHallDetails.length) {
			return this.townHallDetails[level - 1]
		} else {
			console.error(`Invalid Town Hall level: ${level}`)
			return undefined
		}
	},
	getAchievementLevel(level: number, count: number): AchievementLevel | undefined {
		if (level && level >= 1 && level <= this.achievements[0].levels.length) {
			return this.achievements[0].levels[level - 1]
		} else if (count) {
			for (const achievementLevel of this.achievements[0].levels) {
				if (count < achievementLevel.target) {
					return achievementLevel
				}
			}

			return this.achievements[0].levels[this.achievements[0].levels.length - 1]
		} else {
			console.error(`Invalid Achievement level: ${level} or Invalid Count used: ${count}`)
			return undefined
		}
	},
}

export default scattershot
