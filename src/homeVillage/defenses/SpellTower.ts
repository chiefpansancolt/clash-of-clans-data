import * as Constants from '../../Constats'
import {
	TownHallDefense,
	AchievementLevel,
	HomeVillageLevel,
	HomeVillageDefense,
	DefenseMode,
} from '../../CommonInterfaces'

interface SpellTowerMode extends DefenseMode {
	spellRadius: number
	spellDurationInSec: number
	damageIncrease: number
	rechargeTimeInSec: number
	trigger: string
	deployPosition: string
	maxDamagePerSecond: number
	speedIncrease: number
	attackRateDecrease: number
}

interface SpellTowerLevel extends HomeVillageLevel {
	unlocks: string
	poisonSpellImgUrl: string
	invisibilitySpellImgUrl: string
}

interface SpellTower extends HomeVillageDefense {
	levels: SpellTowerLevel[]
	modes: SpellTowerMode[]

	getLevel(level: number): SpellTowerLevel | undefined
}

const spellTower: SpellTower = {
	name: 'Spell Tower',
	description:
		"For years, Wizards alone brought magic to the battlefield one fireball at a time. Now they've developed a fully automated way to give your village more ways to mess up attackers with magic!",
	maxCount: 2,
	width: 2,
	height: 2,
	maxLevel: 3,
	modes: [
		{
			name: 'Rage Spell Tower',
			damageType: '',
			unitTypeTarget: Constants.groundAndAir,
			minRange: 0,
			maxRange: 9,
			attackSpeed: 0,
			spellRadius: 5,
			spellDurationInSec: 18,
			damageIncrease: 60,
			rechargeTimeInSec: 70,
			trigger: Constants.targetInRange,
			deployPosition: Constants.spellTower,
			maxDamagePerSecond: 0,
			speedIncrease: 0,
			attackRateDecrease: 0,
		},
		{
			name: 'Poison Spell Tower',
			damageType: Constants.singleTarget,
			unitTypeTarget: Constants.groundAndAir,
			minRange: 0,
			maxRange: 9,
			attackSpeed: 0,
			spellRadius: 5,
			spellDurationInSec: 12,
			damageIncrease: 0,
			rechargeTimeInSec: 70,
			trigger: Constants.targetInRange,
			deployPosition: Constants.target,
			maxDamagePerSecond: 60,
			speedIncrease: 35,
			attackRateDecrease: 25,
		},
		{
			name: 'Invisibility Spell Tower',
			damageType: Constants.singleTarget,
			unitTypeTarget: Constants.groundAndAir,
			minRange: 0,
			maxRange: 4.5,
			attackSpeed: 0,
			spellRadius: 4.5,
			spellDurationInSec: 4.5,
			damageIncrease: 0,
			rechargeTimeInSec: 50,
			trigger: Constants.buildingInRange,
			deployPosition: Constants.spellTower,
			maxDamagePerSecond: 0,
			speedIncrease: 0,
			attackRateDecrease: 0,
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
		{ townHall: 13, availableCount: 0, maxLevel: 0 },
		{ townHall: 14, availableCount: 0, maxLevel: 0 },
		{ townHall: 15, availableCount: 2, maxLevel: 3 },
		{ townHall: 16, availableCount: 2, maxLevel: 3 },
	],
	achievements: [
		{
			name: 'Counterspell',
			village: Constants.homeVillage,
			levels: [
				{
					info: 'Destroy 40 Spell Towers',
					exp: 100,
					gems: 100,
					stars: 1,
					target: 40,
				},
				{
					info: 'Destroy 400 Spell Towers',
					exp: 800,
					gems: 250,
					stars: 2,
					target: 400,
				},
				{
					info: 'Destroy 4,000 Spell Towers',
					exp: 5000,
					gems: 500,
					stars: 3,
					target: 4000,
				},
			],
		},
	],
	levels: [
		{
			level: 1,
			damagePerSecond: 0,
			damagePerShot: 0,
			unlocks: 'Rage Spell',
			hitpoints: 2500,
			buildCost: 14000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 12,
			exp: 1018,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8e/Spell_Tower1_Rage.png/revision/latest/scale-to-width-down/100?cb=20221120080125',
			poisonSpellImgUrl: '',
			invisibilitySpellImgUrl: '',
		},
		{
			level: 2,
			damagePerSecond: 0,
			damagePerShot: 0,
			unlocks: 'Poison Spell',
			hitpoints: 2800,
			buildCost: 16000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 12,
			exp: 1039,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a7/Spell_Tower2_Rage.png/revision/latest/scale-to-width-down/100?cb=20221120080134',
			poisonSpellImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e4/Spell_Tower2_Poison.png/revision/latest/scale-to-width-down/100?cb=20221120080210',
			invisibilitySpellImgUrl: '',
		},
		{
			level: 3,
			damagePerSecond: 0,
			damagePerShot: 0,
			unlocks: 'Invisibility Spell',
			hitpoints: 3100,
			buildCost: 18000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 13,
			exp: 1080,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/cd/Spell_Tower3_Rage.png/revision/latest/scale-to-width-down/100?cb=20221120080143',
			poisonSpellImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/04/Spell_Tower3_Poison.png/revision/latest/scale-to-width-down/100?cb=20221120080218',
			invisibilitySpellImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f0/Spell_Tower3_Invisibility.png/revision/latest/scale-to-width-down/100?cb=20221120080246',
		},
	],
	getSize(): string {
		return `${this.width}x${this.height}`
	},
	getLevel(level: number): SpellTowerLevel | undefined {
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

export default spellTower
