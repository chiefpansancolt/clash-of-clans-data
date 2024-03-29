import * as Constants from '@/constants'
import DefenseBuilding from '@IHomeVillage/defenses/defense.interface'
import { getHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: DefenseBuilding = {
	name: 'Monolith',
	description:
		"The Builder's first experiment in using Dark Elixir for a building resulted in something truly frightful. The stronger the Monolith's target, the more damage it does. Great to have defending your Village, but a little scary to attack against.",
	maxCount: 1,
	width: 3,
	height: 3,
	maxLevel: 2,
	mode: {
		damageType: Constants.singleTarget,
		unitTypeTarget: Constants.groundAndAir,
		minRange: 0,
		maxRange: 11,
		attackSpeed: 1.5,
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
		{ townHallLevel: 11, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 12, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 13, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 14, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 15, availableCount: 1, maxLevel: 2 },
		{ townHallLevel: 16, availableCount: 1, maxLevel: 2 },
	],
	achievement: {
		name: 'Monolith Masher',
		village: Constants.homeVillage,
		levels: [
			{
				info: 'Destroy 20 Monoliths',
				exp: 100,
				gems: 100,
				stars: 1,
				target: 20,
			},
			{
				info: 'Destroy 200 Monoliths',
				exp: 800,
				gems: 250,
				stars: 2,
				target: 200,
			},
			{
				info: 'Destroy 2,000 Monoliths',
				exp: 5000,
				gems: 500,
				stars: 3,
				target: 2000,
			},
		],
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 150,
			damagePerShot: 225,
			bonusDamagePerShot: 11,
			hitpoints: 4747,
			buildCost: 300000,
			buildCostResource: Constants.darkElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 13,
			exp: 1080,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/9a/Monolith1.png/revision/latest/scale-to-width-down/100?cb=20221120072556',
		},
		{
			level: 2,
			damagePerSecond: 175,
			damagePerShot: 262.5,
			bonusDamagePerShot: 12,
			hitpoints: 5050,
			buildCost: 360000,
			buildCostResource: Constants.darkElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 14,
			exp: 1099,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/95/Monolith2.png/revision/latest/scale-to-width-down/100?cb=20221120072613',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getTownHallLevel: (level: number) => getHallLevel(building.townHallDetails, level, 'townHallLevel'),
}

export default building
