import * as Constants from '@/constants'
import Building from '@IHomeVillage/army/barracks/army.interface'
import Level from '@IHomeVillage/army/barracks/level.interface'
import TownHallDetails from '@IHomeVillage/townHall/details.interface'

const barracks: Building = {
	name: 'Barracks',
	description:
		'The Barracks allow you to train troops to attack your enemies. Upgrade the Barracks to unlock advanced units that can win epic battles.',
	maxCount: 1,
	width: 3,
	height: 3,
	maxLevel: 17,
	townHallDetails: [
		{ townHallLevel: 1, availableCount: 1, maxLevel: 1 },
		{ townHallLevel: 2, availableCount: 1, maxLevel: 4 },
		{ townHallLevel: 3, availableCount: 1, maxLevel: 5 },
		{ townHallLevel: 4, availableCount: 1, maxLevel: 6 },
		{ townHallLevel: 5, availableCount: 1, maxLevel: 7 },
		{ townHallLevel: 6, availableCount: 1, maxLevel: 8 },
		{ townHallLevel: 7, availableCount: 1, maxLevel: 9 },
		{ townHallLevel: 8, availableCount: 1, maxLevel: 10 },
		{ townHallLevel: 9, availableCount: 1, maxLevel: 11 },
		{ townHallLevel: 10, availableCount: 1, maxLevel: 12 },
		{ townHallLevel: 11, availableCount: 1, maxLevel: 13 },
		{ townHallLevel: 12, availableCount: 1, maxLevel: 14 },
		{ townHallLevel: 13, availableCount: 1, maxLevel: 15 },
		{ townHallLevel: 14, availableCount: 1, maxLevel: 16 },
		{ townHallLevel: 15, availableCount: 1, maxLevel: 17 },
		{ townHallLevel: 16, availableCount: 1, maxLevel: 17 },
	],
	achievement: {
		name: 'Discover New Troops',
		village: Constants.homeVillage,
		levels: [
			{
				info: 'Unlock Archer in Barracks',
				exp: 10,
				gems: 5,
				stars: 1,
				target: 0,
			},
			{
				info: 'Unlock Wall Breaker in Barracks',
				exp: 100,
				gems: 10,
				stars: 2,
				target: 0,
			},
			{
				info: 'Unlock Dragon in Barracks',
				exp: 1000,
				gems: 20,
				stars: 3,
				target: 0,
			},
		],
	},
	levels: [
		{
			level: 1,
			unlockedUnit: 'Barbarian',
			hitpoints: 250,
			buildCost: 100,
			buildCostResource: Constants.elixir,
			buildTimeSec: 10,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 3,
			townHallLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/2c/Barracks1.png/revision/latest/scale-to-width-down/110?cb=20230105080228',
		},
		{
			level: 2,
			unlockedUnit: 'Archer',
			hitpoints: 290,
			buildCost: 500,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 1,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 7,
			townHallLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f0/Barracks2.png/revision/latest/scale-to-width-down/110?cb=20230105080243',
		},
		{
			level: 3,
			unlockedUnit: 'Giant',
			hitpoints: 330,
			buildCost: 2500,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 10,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 24,
			townHallLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/54/Barracks3.png/revision/latest/scale-to-width-down/110?cb=20230105080258',
		},
		{
			level: 4,
			unlockedUnit: 'Goblin',
			hitpoints: 370,
			buildCost: 5000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 1,
			buildTimeDay: 0,
			exp: 60,
			townHallLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/84/Barracks4.png/revision/latest/scale-to-width-down/110?cb=20230105080307',
		},
		{
			level: 5,
			unlockedUnit: 'Wall Breaker',
			hitpoints: 420,
			buildCost: 20000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 8,
			buildTimeDay: 0,
			exp: 169,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/66/Barracks5.png/revision/latest/scale-to-width-down/110?cb=20230105080316',
		},
		{
			level: 6,
			unlockedUnit: 'Balloon',
			hitpoints: 470,
			buildCost: 120000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 0,
			exp: 207,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4c/Barracks6.png/revision/latest/scale-to-width-down/110?cb=20230105080325',
		},
		{
			level: 7,
			unlockedUnit: 'Wizard',
			hitpoints: 520,
			buildCost: 270000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 18,
			buildTimeDay: 0,
			exp: 254,
			townHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/29/Barracks7.png/revision/latest/scale-to-width-down/110?cb=20230105080333',
		},
		{
			level: 8,
			unlockedUnit: 'Healer',
			hitpoints: 580,
			buildCost: 800000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/85/Barracks8.png/revision/latest/scale-to-width-down/110?cb=20230105080339',
		},
		{
			level: 9,
			unlockedUnit: 'Dragon',
			hitpoints: 650,
			buildCost: 1000000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 1,
			exp: 360,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/39/Barracks9.png/revision/latest/scale-to-width-down/110?cb=20230105080349',
		},
		{
			level: 10,
			unlockedUnit: 'P.E.K.K.A',
			hitpoints: 730,
			buildCost: 1400000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 2,
			exp: 464,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6a/Barracks10.png/revision/latest/scale-to-width-down/110?cb=20230105080358',
		},
		{
			level: 11,
			unlockedUnit: 'Baby Dragon',
			hitpoints: 810,
			buildCost: 2600000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 4,
			exp: 587,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/89/Barracks11.png/revision/latest/scale-to-width-down/110?cb=20230105080412',
		},
		{
			level: 12,
			unlockedUnit: 'Miner',
			hitpoints: 900,
			buildCost: 3700000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 5,
			exp: 689,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f4/Barracks12.png/revision/latest/scale-to-width-down/110?cb=20230105080418',
		},
		{
			level: 13,
			unlockedUnit: 'Electro Dragon',
			hitpoints: 980,
			buildCost: 6500000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 7,
			exp: 804,
			townHallLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d5/Barracks13.png/revision/latest/scale-to-width-down/110?cb=20230105080430',
		},
		{
			level: 14,
			unlockedUnit: 'Yeti',
			hitpoints: 1050,
			buildCost: 8000000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 9,
			exp: 881,
			townHallLevelRequired: 12,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/41/Barracks14.png/revision/latest/scale-to-width-down/110?cb=20230105080437',
		},
		{
			level: 15,
			unlockedUnit: 'Dragon Rider',
			hitpoints: 1150,
			buildCost: 10000000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 9,
			exp: 905,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/0c/Barracks15.png/revision/latest/scale-to-width-down/110?cb=20230105080448',
		},
		{
			level: 16,
			unlockedUnit: 'Electro Titan',
			hitpoints: 1250,
			buildCost: 12000000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 12,
			exp: 1018,
			townHallLevelRequired: 14,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/21/Barracks16.png/revision/latest/scale-to-width-down/110?cb=20230105080503',
		},
		{
			level: 17,
			unlockedUnit: 'Root Rider',
			hitpoints: 1350,
			buildCost: 16000000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 14,
			exp: 1099,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4e/Barracks17.png/revision/latest/scale-to-width-down/110?cb=20231211073653',
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

export default barracks
