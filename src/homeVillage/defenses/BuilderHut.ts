import * as Constants from '@/Constats'
import Level from '@IHomeVillage/defenses/builderHut/level.interface'
import Defense from '@IHomeVillage/defenses/builderHut/defense.interface'
import TownHallDefense from '@ICommon/townHallDefense.interface'
import AchievementLevel from '@ICommon/achievementLevel.interface'

const builderHut: Defense = {
	name: "Builder's Hut",
	description:
		'Nothing gets done around here without Builders! You can hire more Builders to start multiple construction projects, or speed up their work by using green gems.',
	maxCount: 5,
	width: 2,
	height: 2,
	maxLevel: 5,
	costs: [
		{
			name: 'First',
			cost: 0,
			resourceType: Constants.gems,
		},
		{
			name: 'Second',
			cost: 250,
			resourceType: Constants.gems,
		},
		{
			name: 'Third',
			cost: 500,
			resourceType: Constants.gems,
		},
		{
			name: 'Fourth',
			cost: 1000,
			resourceType: Constants.gems,
		},
		{
			name: 'Fifth',
			cost: 2000,
			resourceType: Constants.gems,
		},
	],
	modes: [
		{
			name: Constants.mainMode,
			damageType: Constants.singleTarget,
			unitTypeTarget: Constants.groundAndAir,
			minRange: 0,
			maxRange: 7,
			attackSpeed: 0.4,
			movementSpeed: 0,
		},
		{
			name: Constants.builderMode,
			damageType: Constants.singleTarget,
			unitTypeTarget: Constants.buildings,
			minRange: 0,
			maxRange: 7,
			attackSpeed: 0.75,
			movementSpeed: 28,
		},
	],
	townHallDetails: [
		{ townHall: 1, availableCount: 5, maxLevel: 1 },
		{ townHall: 2, availableCount: 5, maxLevel: 1 },
		{ townHall: 3, availableCount: 5, maxLevel: 1 },
		{ townHall: 4, availableCount: 5, maxLevel: 1 },
		{ townHall: 5, availableCount: 5, maxLevel: 1 },
		{ townHall: 6, availableCount: 5, maxLevel: 1 },
		{ townHall: 7, availableCount: 5, maxLevel: 1 },
		{ townHall: 8, availableCount: 5, maxLevel: 1 },
		{ townHall: 9, availableCount: 5, maxLevel: 1 },
		{ townHall: 10, availableCount: 5, maxLevel: 1 },
		{ townHall: 11, availableCount: 5, maxLevel: 1 },
		{ townHall: 12, availableCount: 5, maxLevel: 1 },
		{ townHall: 13, availableCount: 5, maxLevel: 1 },
		{ townHall: 14, availableCount: 5, maxLevel: 5 },
		{ townHall: 15, availableCount: 5, maxLevel: 5 },
		{ townHall: 16, availableCount: 5, maxLevel: 5 },
	],
	achievements: [
		{
			name: 'Union Buster',
			village: Constants.homeVillage,
			levels: [
				{
					info: "Destroy 25 Builder's Huts",
					exp: 10,
					gems: 5,
					stars: 1,
					target: 25,
				},
				{
					info: "Destroy 250 Builder's Huts",
					exp: 100,
					gems: 10,
					stars: 2,
					target: 250,
				},
				{
					info: "Destroy 2,500 Builder's Huts",
					exp: 1000,
					gems: 30,
					stars: 3,
					target: 2500,
				},
			],
		},
		{
			name: 'Bust This!',
			village: Constants.homeVillage,
			levels: [
				{
					info: "Destroy 25 weaponized Builder's Huts",
					exp: 10,
					gems: 10,
					stars: 1,
					target: 25,
				},
				{
					info: "Destroy 250 weaponized Builder's Huts",
					exp: 100,
					gems: 30,
					stars: 2,
					target: 250,
				},
				{
					info: "Destroy 2,500 weaponized Builder's Huts",
					exp: 1000,
					gems: 100,
					stars: 3,
					target: 2500,
				},
			],
		},
	],
	levels: [
		{
			level: 1,
			damagePerSecond: 0,
			damagePerShot: 0,
			repairPerSecond: 0,
			repairPerHit: 0,
			hitpoints: 250,
			buildCost: 0,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			townHallLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/10/Builders_Hut.png/revision/latest/scale-to-width-down/75?cb=20171106183136',
			attackingImgUrl: '',
		},
		{
			level: 2,
			damagePerSecond: 80,
			damagePerShot: 32,
			repairPerSecond: 50,
			repairPerHit: 37.5,
			hitpoints: 1000,
			buildCost: 8000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 9,
			exp: 905,
			townHallLevelRequired: 14,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a0/Builders_Hut2.png/revision/latest/scale-to-width-down/100?cb=20230613001440',
			attackingImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e0/Builders_Hut2_Active.png/revision/latest/scale-to-width-down/100?cb=20230613001438',
		},
		{
			level: 3,
			damagePerSecond: 100,
			damagePerShot: 40,
			repairPerSecond: 60,
			repairPerHit: 45,
			hitpoints: 1300,
			buildCost: 10000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 11,
			exp: 996,
			townHallLevelRequired: 14,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f9/Builders_Hut3.png/revision/latest/scale-to-width-down/100?cb=20230613001445',
			attackingImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a6/Builders_Hut3_Active.png/revision/latest/scale-to-width-down/100?cb=20230613001443',
		},
		{
			level: 4,
			damagePerSecond: 120,
			damagePerShot: 48,
			repairPerSecond: 70,
			repairPerHit: 52.5,
			hitpoints: 1600,
			buildCost: 12000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 6,
			buildTimeDay: 13,
			exp: 1069,
			townHallLevelRequired: 14,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b4/Builders_Hut4.png/revision/latest/scale-to-width-down/100?cb=20230613001500',
			attackingImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/31/Builders_Hut4_Active.png/revision/latest/scale-to-width-down/100?cb=20230613001448',
		},
		{
			level: 5,
			damagePerSecond: 135,
			damagePerShot: 54,
			repairPerSecond: 80,
			repairPerHit: 60,
			hitpoints: 1800,
			buildCost: 17000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 6,
			buildTimeDay: 14,
			exp: 1109,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e7/Builders_Hut5.png/revision/latest/scale-to-width-down/100?cb=20230613001516',
			attackingImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/04/Builders_Hut5_Active.png/revision/latest/scale-to-width-down/100?cb=20230613001515',
		},
	],
	getSize(): string {
		return `${this.width}x${this.height}`
	},
	getLevel(level: number): Level | undefined {
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

export default builderHut
