import * as Constants from '@/constants'
import Defense from '@IHomeVillage/other/otherBuilding.interface'
import { getHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: Defense = {
	name: "B.O.B's Hut",
	description:
		'B.O.B, a totally normal Builder, lives here among us. Definitely not a robot controlled from the Builder Base.',
	maxCount: 1,
	width: 2,
	height: 2,
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
			hitpoints: 250,
			buildCost: 0,
			buildCostResource: Constants.gold,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/80/O.T.T.O_Hut5.png/revision/latest/scale-to-width-down/120?cb=20190621205327',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getTownHallLevel: (level: number) => getHallLevel(building.townHallDetails, level, 'townHallLevel'),
}

export default building
