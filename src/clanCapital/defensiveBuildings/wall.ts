import * as Constants from '@/constants'
import WallBuilding from '@IClanCapital/wall/wall.interface'
import { getDistrictHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: WallBuilding = {
	name: 'Walls',
	description:
		'Walls protect districts and keep enemies at bay. A district’s Walls are always the same level and upgrade at the same time. Build together, battle together, upgrade walls together!',
	width: 1,
	height: 1,
	maxLevel: 5,
	districtHallDetails: [
		{
			name: Constants.capitalPeak,
			levels: [
				{ districtHallLevel: 1, availableCount: 80, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 120, maxLevel: 1 },
				{ districtHallLevel: 3, availableCount: 160, maxLevel: 2 },
				{ districtHallLevel: 4, availableCount: 180, maxLevel: 2 },
				{ districtHallLevel: 5, availableCount: 200, maxLevel: 3 },
				{ districtHallLevel: 6, availableCount: 220, maxLevel: 3 },
				{ districtHallLevel: 7, availableCount: 240, maxLevel: 4 },
				{ districtHallLevel: 8, availableCount: 260, maxLevel: 4 },
				{ districtHallLevel: 9, availableCount: 280, maxLevel: 5 },
				{ districtHallLevel: 10, availableCount: 280, maxLevel: 5 },
			],
		},
		{
			name: Constants.barbarianCamp,
			levels: [
				{ districtHallLevel: 1, availableCount: 50, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 100, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 140, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 180, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 200, maxLevel: 5 },
			],
		},
		{
			name: Constants.wizardValley,
			levels: [
				{ districtHallLevel: 1, availableCount: 80, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 120, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 140, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 160, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 180, maxLevel: 5 },
			],
		},
		{
			name: Constants.ballonLagoon,
			levels: [
				{ districtHallLevel: 1, availableCount: 60, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 80, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 100, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 120, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 120, maxLevel: 5 },
			],
		},
		{
			name: Constants.builderWorkshop,
			levels: [
				{ districtHallLevel: 1, availableCount: 100, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 120, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 140, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 160, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 180, maxLevel: 5 },
			],
		},
		{
			name: Constants.dragonCliffs,
			levels: [
				{ districtHallLevel: 1, availableCount: 80, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 100, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 120, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 140, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 140, maxLevel: 5 },
			],
		},
		{
			name: Constants.golemQuarry,
			levels: [
				{ districtHallLevel: 1, availableCount: 60, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 100, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 120, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 140, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 160, maxLevel: 5 },
			],
		},
		{
			name: Constants.skeletonPark,
			levels: [
				{ districtHallLevel: 1, availableCount: 80, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 80, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 80, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 100, maxLevel: 4 },
			],
		},
		{
			name: Constants.goblinMines,
			levels: [
				{ districtHallLevel: 1, availableCount: 30, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 60, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 80, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 100, maxLevel: 4 },
			],
		},
	],
	levels: [
		{
			level: 1,
			hitpoints: 5000,
			buildCost: 0,
			cumulativeCost: 0,
			clanCapitalLevel: 1,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d2/Wall1C.png/revision/latest/scale-to-width-down/100?cb=20220504055855',
			groupImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/28/Wall1C_Corner.png/revision/latest/scale-to-width-down/100?cb=20220504055849',
		},
		{
			level: 2,
			hitpoints: 6500,
			buildCost: 500,
			cumulativeCost: 500,
			clanCapitalLevel: 3,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6c/Wall2C.png/revision/latest/scale-to-width-down/100?cb=20220504055856',
			groupImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f0/Wall2C_Corner.png/revision/latest/scale-to-width-down/100?cb=20220504055849',
		},
		{
			level: 3,
			hitpoints: 8000,
			buildCost: 1500,
			cumulativeCost: 2000,
			clanCapitalLevel: 5,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/3e/Wall3C.png/revision/latest/scale-to-width-down/100?cb=20220504055856',
			groupImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c0/Wall3C_Corner.png/revision/latest/scale-to-width-down/100?cb=20220504055850',
		},
		{
			level: 4,
			hitpoints: 9500,
			buildCost: 3500,
			cumulativeCost: 5500,
			clanCapitalLevel: 7,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a3/Wall4C.png/revision/latest/scale-to-width-down/100?cb=20220504055857',
			groupImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b8/Wall4C_Corner.png/revision/latest/scale-to-width-down/100?cb=20220504055851',
		},
		{
			level: 5,
			hitpoints: 11000,
			buildCost: 6000,
			cumulativeCost: 11500,
			clanCapitalLevel: 9,
			districtHallLevel: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f9/Wall5C.png/revision/latest/scale-to-width-down/100?cb=20220504055858',
			groupImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f5/Wall5C_Corner.png/revision/latest/scale-to-width-down/100?cb=20220504055852',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel: (name: string, level: number) =>
		getDistrictHallLevel(building.districtHallDetails, name, level),
}

export default building
