import * as Constants from '@/constants'
import ArmyBuilding from '@IHomeVillage/army/army.interface'
import { getHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: ArmyBuilding = {
	name: 'Barbarian King Alter',
	description:
		'This colossal menace soaks up huge amounts of damage and bashes everything in his path. He guards his territory fiercely when defending, and can launch into a devastating rage when attacking once his Iron Fist ability is unlocked!',
	maxCount: 1,
	width: 3,
	height: 3,
	maxLevel: 1,
	townHallDetails: [
		{ townHallLevel: 1, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 2, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 3, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 4, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 5, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 6, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 7, availableCount: 1, maxLevel: 1 },
		{ townHallLevel: 8, availableCount: 1, maxLevel: 1 },
		{ townHallLevel: 9, availableCount: 1, maxLevel: 1 },
		{ townHallLevel: 10, availableCount: 1, maxLevel: 1 },
		{ townHallLevel: 11, availableCount: 1, maxLevel: 1 },
		{ townHallLevel: 12, availableCount: 1, maxLevel: 1 },
		{ townHallLevel: 13, availableCount: 1, maxLevel: 1 },
		{ townHallLevel: 14, availableCount: 1, maxLevel: 1 },
		{ townHallLevel: 15, availableCount: 1, maxLevel: 1 },
		{ townHallLevel: 16, availableCount: 1, maxLevel: 1 },
	],
	levels: [
		{
			level: 1,
			unlockedUnit: 'Barbarian King',
			hitpoints: 250,
			buildCost: 5000,
			buildCostResource: Constants.darkElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/86/BarbarianKing_Altar.png/revision/latest?cb=20171206125643',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getTownHallLevel: (level: number) => getHallLevel(building.townHallDetails, level, 'townHallLevel'),
}

export default building
