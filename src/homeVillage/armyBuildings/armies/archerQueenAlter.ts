import * as Constants from '@/constants'
import ArmyBuilding from '@IHomeVillage/army/army.interface'
import { getHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: ArmyBuilding = {
	name: 'Archer Queen Alter',
	description:
		'This graceful huntress is a master of destructive force, though modest in health. She snipes targets in her territory when defending, and can summon stealth and terrifying damage when attacking once her Royal Cloak ability is unlocked!',
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
		{ townHallLevel: 7, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 8, availableCount: 0, maxLevel: 0 },
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
			unlockedUnit: 'Archer Queen',
			hitpoints: 250,
			buildCost: 10000,
			buildCostResource: Constants.darkElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e8/ArcherQueen_Altar.png/revision/latest?cb=20171206125709',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getTownHallLevel: (level: number) => getHallLevel(building.townHallDetails, level, 'townHallLevel'),
}

export default building
