import * as Constants from '@/constants'
import TrapBuilding from '@IClanCapital/traps/trap.interface'
import { getDistrictHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: TrapBuilding = {
	name: 'Mine',
	description: 'Plan an explosive surprise for troops that get too close. Choose air or ground!',
	width: 2,
	height: 2,
	maxLevel: 5,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/d/df/Small_Trap_Ruin.png/revision/latest/scale-to-width-down/80?cb=20220510203732',
	mode: {
		damageType: Constants.areaSplash,
		unitTypeTarget: Constants.groundOrAir,
		minTriggerRange: 0,
		maxTriggerRange: 1.5,
		damageRadius: 3,
		favoriteTarget: Constants.any,
	},
	districtHallDetails: [
		{
			name: Constants.capitalPeak,
			levels: [
				{ districtHallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 4, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 6, maxLevel: 2 },
				{ districtHallLevel: 4, availableCount: 8, maxLevel: 3 },
				{ districtHallLevel: 5, availableCount: 8, maxLevel: 3 },
				{ districtHallLevel: 6, availableCount: 8, maxLevel: 4 },
				{ districtHallLevel: 7, availableCount: 8, maxLevel: 4 },
				{ districtHallLevel: 8, availableCount: 8, maxLevel: 4 },
				{ districtHallLevel: 9, availableCount: 8, maxLevel: 5 },
				{ districtHallLevel: 10, availableCount: 8, maxLevel: 5 },
			],
		},
		{
			name: Constants.barbarianCamp,
			levels: [
				{ districtHallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 4, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 6, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 7, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 8, maxLevel: 5 },
			],
		},
		{
			name: Constants.wizardValley,
			levels: [
				{ districtHallLevel: 1, availableCount: 4, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 4, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 5, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 6, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 6, maxLevel: 5 },
			],
		},
		{
			name: Constants.ballonLagoon,
			levels: [
				{ districtHallLevel: 1, availableCount: 6, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 8, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 9, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 10, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 10, maxLevel: 5 },
			],
		},
		{
			name: Constants.builderWorkshop,
			levels: [
				{ districtHallLevel: 1, availableCount: 5, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 6, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 7, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 7, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 7, maxLevel: 5 },
			],
		},
		{
			name: Constants.dragonCliffs,
			levels: [
				{ districtHallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 4, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 5, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 6, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 7, maxLevel: 5 },
			],
		},
		{
			name: Constants.golemQuarry,
			levels: [
				{ districtHallLevel: 1, availableCount: 3, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 4, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 5, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 6, maxLevel: 4 },
				{ districtHallLevel: 5, availableCount: 7, maxLevel: 5 },
			],
		},
		{
			name: Constants.skeletonPark,
			levels: [
				{ districtHallLevel: 1, availableCount: 7, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 8, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 9, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 9, maxLevel: 4 },
			],
		},
		{
			name: Constants.goblinMines,
			levels: [
				{ districtHallLevel: 1, availableCount: 3, maxLevel: 1 },
				{ districtHallLevel: 2, availableCount: 3, maxLevel: 2 },
				{ districtHallLevel: 3, availableCount: 3, maxLevel: 3 },
				{ districtHallLevel: 4, availableCount: 4, maxLevel: 4 },
			],
		},
	],
	levels: [
		{
			level: 1,
			damage: 120,
			buildCost: 1000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 1,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/69/Mine1_Ground.png/revision/latest/scale-to-width-down/80?cb=20171130165533',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a4/Mine1_Air.png/revision/latest/scale-to-width-down/80?cb=20171130171508',
		},
		{
			level: 2,
			damage: 140,
			buildCost: 2000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 2,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/9c/Mine2_Ground.png/revision/latest/scale-to-width-down/80?cb=20171130165533',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/bf/Mine2_Air.png/revision/latest/scale-to-width-down/80?cb=20171130171508',
		},
		{
			level: 3,
			damage: 160,
			buildCost: 4000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 4,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/85/Mine3_Ground.png/revision/latest/scale-to-width-down/80?cb=20171130165533',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/30/Mine3_Air.png/revision/latest/scale-to-width-down/80?cb=20171130171509',
		},
		{
			level: 4,
			damage: 180,
			buildCost: 9000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 6,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/10/Mine4_Ground.png/revision/latest/scale-to-width-down/80?cb=20171130165532',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/28/Mine4_Air.png/revision/latest/scale-to-width-down/80?cb=20171130171509',
		},
		{
			level: 5,
			damage: 200,
			buildCost: 15000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 9,
			districtHallLevel: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b5/Mine5_Ground.png/revision/latest/scale-to-width-down/80?cb=20171130165532',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/26/Mine5_Air.png/revision/latest/scale-to-width-down/80?cb=20171130171510',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel: (name: string, level: number) =>
		getDistrictHallLevel(building.districtHallDetails, name, level),
}

export default building
