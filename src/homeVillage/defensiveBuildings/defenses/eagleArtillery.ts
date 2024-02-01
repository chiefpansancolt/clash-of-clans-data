import * as Constants from '@/constants'
import Defense from '@IHomeVillage/defenses/eagleArtillery/defense.interface'
import Level from '@IHomeVillage/defenses/eagleArtillery/level.interface'
import TownHallDetails from '@IHomeVillage/townHall/details.interface'

const eagleArtillery: Defense = {
	name: 'Eagle Artillery',
	description:
		"The Eagle Artillery has nearly unlimited range and targets tough enemies with exploding shells. However, it won't activate until a large amount of troops have been deployed.",
	maxCount: 1,
	width: 4,
	height: 4,
	maxLevel: 6,
	mode: {
		name: Constants.mainMode,
		damageType: Constants.splash,
		unitTypeTarget: Constants.groundAndAir,
		minRange: 7,
		maxRange: 50,
		tiles: 0.75,
		tilesShockwave: 3,
		attackSpeed: 10,
		activationHousingSpace: 200,
		shotsPerBurst: 3,
		favoriteTarget: Constants.any,
		numberOfRounds: 90,
	},
	townHallDetails: [
		{ townHallLevel: 1, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 2, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 3, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 4, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 5, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 6, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 7, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 8, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 9, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 10, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 11, availableCount: 1, maxLevel: 2 },
		{ townHallLevel: 12, availableCount: 1, maxLevel: 3 },
		{ townHallLevel: 13, availableCount: 1, maxLevel: 4 },
		{ townHallLevel: 14, availableCount: 1, maxLevel: 5 },
		{ townHallLevel: 15, availableCount: 1, maxLevel: 6 },
		{ townHallLevel: 16, availableCount: 1, maxLevel: 6 },
	],
	achievement: {
		name: 'Anti-Artillery',
		village: Constants.builderBase,
		levels: [
			{
				info: 'Destroy 20 Eagle Artilleries',
				exp: 100,
				gems: 150,
				stars: 1,
				target: 20,
			},
			{
				info: 'Destroy 200 Eagle Artilleries',
				exp: 800,
				gems: 300,
				stars: 2,
				target: 200,
			},
			{
				info: 'Destroy 2,000 Eagle Artilleries',
				exp: 5000,
				gems: 1000,
				stars: 3,
				target: 2000,
			},
		],
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 275,
			damagePerShot: 82.5,
			shockwaveDamage: 20,
			hitpoints: 4000,
			buildCost: 6000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 5,
			exp: 657,
			townHallLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4f/Eagle_Artillery1.png/revision/latest/scale-to-width-down/140?cb=20200906074022',
			activeImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/1a/Eagle_Artillery1_Head_Down.png/revision/latest/scale-to-width-down/140?cb=20200906060328',
			depletedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/77/Eagle_Artillery1_Unloaded.png/revision/latest/scale-to-width-down/85?cb=20200909053923',
		},
		{
			level: 2,
			damagePerSecond: 325,
			damagePerShot: 97.5,
			shockwaveDamage: 25,
			hitpoints: 4400,
			buildCost: 8000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 5,
			exp: 657,
			townHallLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4a/Eagle_Artillery2.png/revision/latest/scale-to-width-down/140?cb=20200906055433',
			activeImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5d/Eagle_Artillery2_Head_Down.png/revision/latest/scale-to-width-down/140?cb=20200911232513',
			depletedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f1/Eagle_Artillery2_Unloaded.png/revision/latest/scale-to-width-down/85?cb=20200909053924',
		},
		{
			level: 3,
			damagePerSecond: 375,
			damagePerShot: 112.5,
			shockwaveDamage: 30,
			hitpoints: 4800,
			buildCost: 10000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 9,
			exp: 881,
			townHallLevelRequired: 12,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d7/Eagle_Artillery3.png/revision/latest/scale-to-width-down/140?cb=20200906055417',
			activeImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/23/Eagle_Artillery3_Head_Down.png/revision/latest/scale-to-width-down/140?cb=20200906055257',
			depletedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f9/Eagle_Artillery3_Unloaded.png/revision/latest/scale-to-width-down/85?cb=20200909053924',
		},
		{
			level: 4,
			damagePerSecond: 425,
			damagePerShot: 127.5,
			shockwaveDamage: 35,
			hitpoints: 5200,
			buildCost: 13000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 10,
			exp: 929,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/65/Eagle_Artillery4.png/revision/latest/scale-to-width-down/140?cb=20200906055404',
			activeImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/58/Eagle_Artillery4_Head_Down.png/revision/latest/scale-to-width-down/140?cb=20200906055229',
			depletedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/31/Eagle_Artillery4_Unloaded.png/revision/latest/scale-to-width-down/85?cb=20200909053924',
		},
		{
			level: 5,
			damagePerSecond: 475,
			damagePerShot: 142.5,
			shockwaveDamage: 40,
			hitpoints: 5600,
			buildCost: 17000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 13,
			exp: 1059,
			townHallLevelRequired: 14,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/78/Eagle_Artillery5.png/revision/latest/scale-to-width-down/140?cb=20210412222407',
			activeImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/65/Eagle_Artillery5_Head_Down.png/revision/latest/scale-to-width-down/140?cb=20210412222406',
			depletedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/47/Eagle_Artillery5_Unloaded.png/revision/latest/scale-to-width-down/85?cb=20210412222407',
		},
		{
			level: 6,
			damagePerSecond: 500,
			damagePerShot: 150,
			shockwaveDamage: 45,
			hitpoints: 5900,
			buildCost: 21500000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 14,
			exp: 1099,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/ab/Eagle_Artillery6.png/revision/latest/scale-to-width-down/140?cb=20230613000944',
			activeImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/cc/Eagle_Artillery6_Head_Down.png/revision/latest/scale-to-width-down/140?cb=20230613000942',
			depletedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/56/Eagle_Artillery6_Unloaded.png/revision/latest/scale-to-width-down/85?cb=20230613000943',
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
	getTownHallLevel(level: number): TownHallDetails | undefined {
		if (level >= 1 && level <= this.townHallDetails.length) {
			return this.townHallDetails[level - 1]
		} else {
			console.error(`Invalid Town Hall level: ${level}`)
			return undefined
		}
	},
}

export default eagleArtillery
