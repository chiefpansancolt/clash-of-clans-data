import * as Constants from '@/constants'
import TrapBuilding from '@IClanCapital/traps/megaMine/trap.interface'
import { getDistrictHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: TrapBuilding = {
	name: 'Mega Mine',
	description: 'A hidden dose of heavy destruction. Choose air or ground!',
	width: 2,
	height: 2,
	maxLevel: 5,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/1/1e/Mega_Mine_Ruin.png/revision/latest/scale-to-width-down/80?cb=20220510204335',
	mode: {
		damageType: Constants.areaSplash,
		unitTypeTarget: Constants.groundOrAir,
		minTriggerRange: 0,
		maxTriggerRange: 2,
		damageRadius: 4,
		favoriteTarget: Constants.any,
	},
	districtHallDetails: [
		{
			name: Constants.capitalPeak,
			levels: [
				{ districtHallLevel: 1, availableCount: 0, maxLevel: 0 },
				{ districtHallLevel: 2, availableCount: 4, maxLevel: 1 },
				{ districtHallLevel: 3, availableCount: 5, maxLevel: 2 },
				{ districtHallLevel: 4, availableCount: 6, maxLevel: 2 },
				{ districtHallLevel: 5, availableCount: 7, maxLevel: 3 },
				{ districtHallLevel: 6, availableCount: 8, maxLevel: 3 },
				{ districtHallLevel: 7, availableCount: 9, maxLevel: 4 },
				{ districtHallLevel: 8, availableCount: 10, maxLevel: 4 },
				{ districtHallLevel: 9, availableCount: 11, maxLevel: 5 },
				{ districtHallLevel: 10, availableCount: 12, maxLevel: 5 },
			],
		},
		{
			name: Constants.barbarianCamp,
			levels: [
				{ districtHallLevel: 1, availableCount: 0, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 3, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 4, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 4, maxLevel: 5 },
			],
		},
		{
			name: Constants.wizardValley,
			levels: [
				{ districtHallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 4, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 5, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 6, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 6, maxLevel: 5 },
			],
		},
		{
			name: Constants.ballonLagoon,
			levels: [
				{ districtHallLevel: 1, availableCount: 0, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 0, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 1, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 2, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 3, maxLevel: 5 },
			],
		},
		{
			name: Constants.builderWorkshop,
			levels: [
				{ districtHallLevel: 1, availableCount: 0, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 0, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 1, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 2, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 3, maxLevel: 5 },
			],
		},
		{
			name: Constants.dragonCliffs,
			levels: [],
		},
		{
			name: Constants.golemQuarry,
			levels: [],
		},
		{
			name: Constants.skeletonPark,
			levels: [
				{ districtHallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 3, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 3, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 3, maxLevel: 4 },
			],
		},
		{
			name: Constants.goblinMines,
			levels: [
				{ districtHallLevel: 1, availableCount: 1, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 3, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 3, maxLevel: 4 },
			],
		},
	],
	levels: [
		{
			level: 1,
			damage: 400,
			buildCost: 2000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 2,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/51/Mega_Mine1_Ground.png/revision/latest/scale-to-width-down/80?cb=20171130180338',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/64/Mega_Mine1_Air.png/revision/latest/scale-to-width-down/80?cb=20171130180410',
		},
		{
			level: 2,
			damage: 450,
			buildCost: 4000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 3,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/29/Mega_Mine2_Ground.png/revision/latest/scale-to-width-down/80?cb=20171130180339',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/29/Mega_Mine2_Air.png/revision/latest/scale-to-width-down/80?cb=20171130180410',
		},
		{
			level: 3,
			damage: 500,
			buildCost: 8000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 5,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b9/Mega_Mine3_Ground.png/revision/latest/scale-to-width-down/80?cb=20171130180339',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/2e/Mega_Mine3_Air.png/revision/latest/scale-to-width-down/80?cb=20171130180411',
		},
		{
			level: 4,
			damage: 550,
			buildCost: 15000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 7,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c4/Mega_Mine4_Ground.png/revision/latest/scale-to-width-down/80?cb=20171130180339',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d6/Mega_Mine4_Air.png/revision/latest/scale-to-width-down/80?cb=20171130180411',
		},
		{
			level: 5,
			damage: 600,
			buildCost: 25000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 9,
			districtHallLevel: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/76/Mega_Mine5_Ground.png/revision/latest/scale-to-width-down/80?cb=20171130180340',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/cf/Mega_Mine5_Air.png/revision/latest/scale-to-width-down/80?cb=20171130180411',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel: (name: string, level: number) =>
		getDistrictHallLevel(building.districtHallDetails, name, level),
}

export default building
