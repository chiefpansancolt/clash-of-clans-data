import * as Constants from '@/constants'
import ArmyBuilding from '@IHomeVillage/army/army.interface'
import { getHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: ArmyBuilding = {
	name: 'Grand Warden Alter',
	description:
		'This veteran battle-scholar seeks out groups of friendly troops to fight behind and boost with his Life Aura and assumes the form of a tower on Building. Attacking, he can walk over walls or fly high, and can make nearby troops immune to damage once his Eternal Tome ability is unlocked!',
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
		{ townHallLevel: 9, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 10, availableCount: 0, maxLevel: 0 },
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
			unlockedUnit: 'Grand Warden',
			hitpoints: 250,
			buildCost: 1000000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			townHallLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/eb/GrandWarden_Altar.png/revision/latest?cb=20201018085628',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getTownHallLevel: (level: number) => getHallLevel(building.townHallDetails, level, 'townHallLevel'),
}

export default building
