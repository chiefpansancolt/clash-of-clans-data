import * as Constants from '@/constants'
import DistrictHallBuilding from '@IClanCapital/districtHall/districtHall.interface'
import DetailLevel from '@IClanCapital/districtHall/detailLevel.interface'
import { getLevel, getSize } from '@Utils/buildings.utility'

const building: DistrictHallBuilding = {
	name: 'District Hall',
	description:
		'Villagers and the Grand Builder take care of this district from here. Upgrade to unlock additional building upgrades in this district.',
	width: 4,
	height: 4,
	maxLevel: 5,
	districtHallDetails: [
		{
			name: Constants.barbarianCamp,
			levels: [
				{ districtHallLevel: 1, capitalHallLevel: 2 },
				{ districtHallLevel: 2, capitalHallLevel: 3 },
				{ districtHallLevel: 3, capitalHallLevel: 5 },
				{ districtHallLevel: 4, capitalHallLevel: 7 },
				{ districtHallLevel: 5, capitalHallLevel: 9 },
			],
		},
		{
			name: Constants.wizardValley,
			levels: [
				{ districtHallLevel: 1, capitalHallLevel: 3 },
				{ districtHallLevel: 2, capitalHallLevel: 4 },
				{ districtHallLevel: 3, capitalHallLevel: 6 },
				{ districtHallLevel: 4, capitalHallLevel: 8 },
				{ districtHallLevel: 5, capitalHallLevel: 10 },
			],
		},
		{
			name: Constants.ballonLagoon,
			levels: [
				{ districtHallLevel: 1, capitalHallLevel: 4 },
				{ districtHallLevel: 2, capitalHallLevel: 5 },
				{ districtHallLevel: 3, capitalHallLevel: 7 },
				{ districtHallLevel: 4, capitalHallLevel: 8 },
				{ districtHallLevel: 5, capitalHallLevel: 10 },
			],
		},
		{
			name: Constants.builderWorkshop,
			levels: [
				{ districtHallLevel: 1, capitalHallLevel: 0 },
				{ districtHallLevel: 2, capitalHallLevel: 0 },
				{ districtHallLevel: 3, capitalHallLevel: 0 },
				{ districtHallLevel: 4, capitalHallLevel: 0 },
				{ districtHallLevel: 5, capitalHallLevel: 0 },
			],
		},
		{
			name: Constants.dragonCliffs,
			levels: [
				{ districtHallLevel: 1, capitalHallLevel: 5 },
				{ districtHallLevel: 2, capitalHallLevel: 6 },
				{ districtHallLevel: 3, capitalHallLevel: 7 },
				{ districtHallLevel: 4, capitalHallLevel: 9 },
				{ districtHallLevel: 5, capitalHallLevel: 10 },
			],
		},
		{
			name: Constants.golemQuarry,
			levels: [
				{ districtHallLevel: 1, capitalHallLevel: 7 },
				{ districtHallLevel: 2, capitalHallLevel: 7 },
				{ districtHallLevel: 3, capitalHallLevel: 8 },
				{ districtHallLevel: 4, capitalHallLevel: 9 },
				{ districtHallLevel: 5, capitalHallLevel: 10 },
			],
		},
		{
			name: Constants.skeletonPark,
			levels: [
				{ districtHallLevel: 1, capitalHallLevel: 8 },
				{ districtHallLevel: 2, capitalHallLevel: 8 },
				{ districtHallLevel: 3, capitalHallLevel: 9 },
				{ districtHallLevel: 4, capitalHallLevel: 10 },
			],
		},
		{
			name: Constants.goblinMines,
			levels: [
				{ districtHallLevel: 1, capitalHallLevel: 9 },
				{ districtHallLevel: 2, capitalHallLevel: 9 },
				{ districtHallLevel: 3, capitalHallLevel: 10 },
				{ districtHallLevel: 4, capitalHallLevel: 10 },
			],
		},
	],
	levels: [
		{
			level: 1,
			hitpoints: 6000,
			buildCost: 0,
			buildCostResource: Constants.capitalGold,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/dd/District_Hall1.png/revision/latest/scale-to-width-down/120?cb=20221125091949',
		},
		{
			level: 2,
			hitpoints: 7000,
			buildCost: 25000,
			buildCostResource: Constants.capitalGold,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/11/District_Hall2.png/revision/latest/scale-to-width-down/120?cb=20221125091955',
		},
		{
			level: 3,
			hitpoints: 8000,
			buildCost: 75000,
			buildCostResource: Constants.capitalGold,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/ce/District_Hall3.png/revision/latest/scale-to-width-down/120?cb=20221125092009',
		},
		{
			level: 4,
			hitpoints: 9000,
			buildCost: 150000,
			buildCostResource: Constants.capitalGold,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/9c/District_Hall4.png/revision/latest/scale-to-width-down/120?cb=20221125092023',
		},
		{
			level: 5,
			hitpoints: 10000,
			buildCost: 300000,
			buildCostResource: Constants.capitalGold,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/District_Hall5.png/revision/latest/scale-to-width-down/120?cb=20221125092032',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getDistrictHallLevel(name: string, level: number): DetailLevel | undefined {
		const hallDetails = this.districtHallDetails.find((detail: { name: string }) => detail.name === name)

		if (hallDetails && level >= 1 && level <= hallDetails.levels.length) {
			return hallDetails.levels[level - 1]
		} else {
			console.error(`Invalid Capital Hall level or name: ${level} or ${name}`)
			return undefined
		}
	},
}

export default building
