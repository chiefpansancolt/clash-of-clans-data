import * as Constants from '@/constants'
import Building from '@IBuilderBase/army/barracks/army.interface'
import Level from '@IBuilderBase/army/barracks/level.interface'
import BuilderHallDetails from '@IBuilderBase/builderHall/details.interface'

const builderBarracks: Building = {
	name: 'Building Barracks',
	description:
		'The Builder Barracks trains troops for Builder Battles! You can also quickly swap troops immediately before attacking. Upgrade the Builder Barracks to unlock more troop types!',
	maxCount: 1,
	width: 3,
	height: 3,
	maxLevel: 12,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/5/50/Builder_Barracks_Ruin.png/revision/latest/scale-to-width-down/100?cb=20180501142509',
	builderHallDetails: [
		{
			builderHallLevel: 1,
			availableCount: 1,
			maxLevel: 0,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 2,
			availableCount: 1,
			maxLevel: 2,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 3,
			availableCount: 1,
			maxLevel: 4,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 4,
			availableCount: 1,
			maxLevel: 6,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 5,
			availableCount: 1,
			maxLevel: 7,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 6,
			availableCount: 1,
			maxLevel: 8,
			stage1MaxCount: 1,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 7,
			availableCount: 1,
			maxLevel: 9,
			stage1MaxCount: 1,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 8,
			availableCount: 1,
			maxLevel: 10,
			stage1MaxCount: 1,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 9,
			availableCount: 1,
			maxLevel: 11,
			stage1MaxCount: 1,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 10,
			availableCount: 1,
			maxLevel: 12,
			stage1MaxCount: 1,
			stage2MaxCount: 0,
		},
	],
	achievement: {
		name: 'Next Generation Model',
		village: Constants.builderBase,
		levels: [
			{
				info: 'Unlock Sneaky Archer in the Builder Barracks	',
				exp: 20,
				gems: 10,
				stars: 1,
				target: 0,
			},
			{
				info: 'Unlock Cannon Cart in the Builder Barracks',
				exp: 200,
				gems: 30,
				stars: 2,
				target: 0,
			},
			{
				info: 'Unlock Power P.E.K.K.A in the Builder Barracks',
				exp: 2000,
				gems: 50,
				stars: 3,
				target: 0,
			},
		],
	},
	levels: [
		{
			level: 1,
			unlockedUnit: 'Raged Barbarian',
			hitpoints: 300,
			buildCost: 1000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			townHallLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/ce/Builder_Barracks1.png/revision/latest/scale-to-width-down/100?cb=20180501142536',
		},
		{
			level: 2,
			unlockedUnit: 'Sneaky Archer',
			hitpoints: 350,
			buildCost: 4000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 1,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 7,
			townHallLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c2/Builder_Barracks2.png/revision/latest/scale-to-width-down/100?cb=20180501142551',
		},
		{
			level: 3,
			unlockedUnit: 'Boxer Giant',
			hitpoints: 400,
			buildCost: 10000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 10,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 24,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/74/Builder_Barracks3.png/revision/latest/scale-to-width-down/100?cb=20180501142604',
		},
		{
			level: 4,
			unlockedUnit: 'Beta Minion',
			hitpoints: 460,
			buildCost: 25000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 30,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 42,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/1e/Builder_Barracks4.png/revision/latest/scale-to-width-down/100?cb=20180501142619',
		},
		{
			level: 5,
			unlockedUnit: 'Bomber',
			hitpoints: 550,
			buildCost: 100000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 3,
			buildTimeDay: 0,
			exp: 103,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e3/Builder_Barracks5.png/revision/latest/scale-to-width-down/100?cb=20180501142637',
		},
		{
			level: 6,
			unlockedUnit: 'Baby Dragon',
			hitpoints: 650,
			buildCost: 150000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 6,
			buildTimeDay: 0,
			exp: 146,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f4/Builder_Barracks6.png/revision/latest/scale-to-width-down/100?cb=20180501142650',
		},
		{
			level: 7,
			unlockedUnit: 'Cannon Cart',
			hitpoints: 750,
			buildCost: 300000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 9,
			buildTimeDay: 0,
			exp: 180,
			townHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/91/Builder_Barracks7.png/revision/latest/scale-to-width-down/100?cb=20180501142704',
		},
		{
			level: 8,
			unlockedUnit: 'Night Witch',
			hitpoints: 850,
			buildCost: 500000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/03/Builder_Barracks8.png/revision/latest/scale-to-width-down/100?cb=20180501142720',
		},
		{
			level: 9,
			unlockedUnit: 'Drop Ship',
			hitpoints: 1000,
			buildCost: 1000000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e2/Builder_Barracks9.png/revision/latest/scale-to-width-down/100?cb=20180501142745',
		},
		{
			level: 10,
			unlockedUnit: 'Power P.E.K.K.A',
			hitpoints: 1150,
			buildCost: 1500000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 3,
			exp: 509,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b9/Builder_Barracks10.png/revision/latest/scale-to-width-down/100?cb=20180501142759',
		},
		{
			level: 11,
			unlockedUnit: 'Hog Glider',
			hitpoints: 1300,
			buildCost: 2000000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 4,
			exp: 587,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/05/Builder_Barracks11.png/revision/latest/scale-to-width-down/100?cb=20190617025509',
		},
		{
			level: 12,
			unlockedUnit: 'Electrofire Wizard',
			hitpoints: 1450,
			buildCost: 3000000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 5,
			exp: 657,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/94/Builder_Barracks12.png/revision/latest/scale-to-width-down/100?cb=20230518075724',
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
	getBuilderHallLevel(level: number): BuilderHallDetails | undefined {
		if (level >= 1 && level <= this.builderHallDetails.length) {
			return this.builderHallDetails[level - 1]
		} else {
			console.error(`Invalid Town Hall level: ${level}`)
			return undefined
		}
	},
}

export default builderBarracks
