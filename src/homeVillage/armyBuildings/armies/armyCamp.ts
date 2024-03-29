import * as Constants from '@/constants'
import ArmyBuilding from '@IHomeVillage/army/army.interface'
import { getHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: ArmyBuilding = {
	name: 'Army Camp',
	description:
		'Your troops are stationed in Army Camps. Build more camps and upgrade them to muster a powerful army.',
	maxCount: 4,
	width: 4,
	height: 4,
	maxLevel: 12,
	townHallDetails: [
		{ townHallLevel: 1, availableCount: 1, maxLevel: 1 },
		{ townHallLevel: 2, availableCount: 1, maxLevel: 2 },
		{ townHallLevel: 3, availableCount: 2, maxLevel: 3 },
		{ townHallLevel: 4, availableCount: 2, maxLevel: 4 },
		{ townHallLevel: 5, availableCount: 3, maxLevel: 5 },
		{ townHallLevel: 6, availableCount: 3, maxLevel: 6 },
		{ townHallLevel: 7, availableCount: 4, maxLevel: 6 },
		{ townHallLevel: 8, availableCount: 4, maxLevel: 6 },
		{ townHallLevel: 9, availableCount: 4, maxLevel: 7 },
		{ townHallLevel: 10, availableCount: 4, maxLevel: 8 },
		{ townHallLevel: 11, availableCount: 4, maxLevel: 9 },
		{ townHallLevel: 12, availableCount: 4, maxLevel: 10 },
		{ townHallLevel: 13, availableCount: 4, maxLevel: 11 },
		{ townHallLevel: 14, availableCount: 4, maxLevel: 11 },
		{ townHallLevel: 15, availableCount: 4, maxLevel: 12 },
		{ townHallLevel: 16, availableCount: 4, maxLevel: 12 },
	],
	levels: [
		{
			level: 1,
			capacity: 20,
			hitpoints: 250,
			buildCost: 200,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 5,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 17,
			townHallLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/79/Army_Camp1.png/revision/latest/scale-to-width-down/100?cb=20171221130243',
		},
		{
			level: 2,
			capacity: 30,
			hitpoints: 270,
			buildCost: 2000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 15,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 30,
			townHallLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/92/Army_Camp2.png/revision/latest/scale-to-width-down/100?cb=20171221130257',
		},
		{
			level: 3,
			capacity: 35,
			hitpoints: 290,
			buildCost: 10000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 2,
			buildTimeDay: 0,
			exp: 84,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/ce/Army_Camp3.png/revision/latest/scale-to-width-down/100?cb=20171221130313',
		},
		{
			level: 4,
			capacity: 40,
			hitpoints: 310,
			buildCost: 100000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 5,
			buildTimeDay: 0,
			exp: 134,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e0/Army_Camp4.png/revision/latest/scale-to-width-down/100?cb=20171221130327',
		},
		{
			level: 5,
			capacity: 45,
			hitpoints: 330,
			buildCost: 250000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 8,
			buildTimeDay: 0,
			exp: 169,
			townHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/dc/Army_Camp5.png/revision/latest/scale-to-width-down/100?cb=20171221130341',
		},
		{
			level: 6,
			capacity: 50,
			hitpoints: 350,
			buildCost: 750000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 0,
			exp: 207,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/68/Army_Camp6.png/revision/latest/scale-to-width-down/100?cb=20171221130400',
		},
		{
			level: 7,
			capacity: 55,
			hitpoints: 400,
			buildCost: 1500000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fb/Army_Camp7.png/revision/latest/scale-to-width-down/100?cb=20171221130415',
		},
		{
			level: 8,
			capacity: 60,
			hitpoints: 500,
			buildCost: 2500000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 3,
			exp: 509,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/be/Army_Camp8.png/revision/latest/scale-to-width-down/100?cb=20171221130431',
		},
		{
			level: 9,
			capacity: 65,
			hitpoints: 600,
			buildCost: 4200000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 6,
			buildTimeDay: 6,
			exp: 734,
			townHallLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7d/Army_Camp9.png/revision/latest/scale-to-width-down/100?cb=20171221130455',
		},
		{
			level: 10,
			capacity: 70,
			hitpoints: 700,
			buildCost: 5700000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 18,
			buildTimeDay: 8,
			exp: 869,
			townHallLevelRequired: 12,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/1d/Army_Camp10.png/revision/latest/scale-to-width-down/100?cb=20180604160829',
		},
		{
			level: 11,
			capacity: 75,
			hitpoints: 800,
			buildCost: 9600000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 9,
			exp: 905,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/21/Army_Camp11.png/revision/latest/scale-to-width-down/100?cb=20201012183216',
		},
		{
			level: 12,
			capacity: 80,
			hitpoints: 850,
			buildCost: 19000000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 12,
			exp: 1039,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/19/Army_Camp12.png/revision/latest/scale-to-width-down/100?cb=20221011075437',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getTownHallLevel: (level: number) => getHallLevel(building.townHallDetails, level, 'townHallLevel'),
}

export default building
