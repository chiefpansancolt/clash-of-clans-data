import * as Constants from '@/constants'
import ResourceBuilding from '@IBuilderBase/resources/elixirCollector/resource.interface'
import { getHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: ResourceBuilding = {
	name: 'Elixir Collector',
	description:
		'Elixir is pumped from Ley Lines coursing underneath your village. Upgrade your Elixir Collectors to maximize elixir production.',
	maxCount: 3,
	width: 3,
	height: 3,
	maxLevel: 10,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/3/30/Elixir_Collector_Ruin.png/revision/latest/scale-to-width-down/70?cb=20170609150452',
	builderHallDetails: [
		{
			builderHallLevel: 1,
			availableCount: 1,
			maxLevel: 1,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 2,
			availableCount: 1,
			maxLevel: 3,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 3,
			availableCount: 1,
			maxLevel: 3,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 4,
			availableCount: 1,
			maxLevel: 4,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 5,
			availableCount: 1,
			maxLevel: 5,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 6,
			availableCount: 2,
			maxLevel: 6,
			stage1MaxCount: 1,
			stage2MaxCount: 1,
		},
		{
			builderHallLevel: 7,
			availableCount: 2,
			maxLevel: 7,
			stage1MaxCount: 1,
			stage2MaxCount: 1,
		},
		{
			builderHallLevel: 8,
			availableCount: 3,
			maxLevel: 8,
			stage1MaxCount: 1,
			stage2MaxCount: 2,
		},
		{
			builderHallLevel: 9,
			availableCount: 3,
			maxLevel: 9,
			stage1MaxCount: 1,
			stage2MaxCount: 2,
		},
		{
			builderHallLevel: 10,
			availableCount: 3,
			maxLevel: 10,
			stage1MaxCount: 1,
			stage2MaxCount: 2,
		},
	],
	achievement: [],
	levels: [
		{
			level: 1,
			capacity: 24000,
			productionRatePerHr: 1000,
			hitpoints: 300,
			timeToFillSec: 0,
			timeToFillMin: 0,
			timeToFillHour: 0,
			timeToFillDay: 1,
			buildCost: 1000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 10,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 24,
			builderHallLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c4/Elixir_Collector1B.png/revision/latest/scale-to-width-down/100?cb=20180109122754',
		},
		{
			level: 2,
			capacity: 28800,
			productionRatePerHr: 1200,
			hitpoints: 350,
			timeToFillSec: 0,
			timeToFillMin: 0,
			timeToFillHour: 0,
			timeToFillDay: 1,
			buildCost: 5000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 20,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 34,
			builderHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/19/Elixir_Collector2B.png/revision/latest/scale-to-width-down/100?cb=20180109122754',
		},
		{
			level: 3,
			capacity: 36000,
			productionRatePerHr: 1500,
			hitpoints: 400,
			timeToFillSec: 0,
			timeToFillMin: 0,
			timeToFillHour: 0,
			timeToFillDay: 1,
			buildCost: 10000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 40,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 48,
			builderHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a7/Elixir_Collector3B.png/revision/latest/scale-to-width-down/100?cb=20180109122755',
		},
		{
			level: 4,
			capacity: 43200,
			productionRatePerHr: 1800,
			hitpoints: 460,
			timeToFillSec: 0,
			timeToFillMin: 0,
			timeToFillHour: 0,
			timeToFillDay: 1,
			buildCost: 30000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 2,
			buildTimeDay: 0,
			exp: 84,
			builderHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/54/Elixir_Collector4B.png/revision/latest/scale-to-width-down/100?cb=20180109122755',
		},
		{
			level: 5,
			capacity: 50400,
			productionRatePerHr: 2100,
			hitpoints: 550,
			timeToFillSec: 0,
			timeToFillMin: 0,
			timeToFillHour: 0,
			timeToFillDay: 1,
			buildCost: 60000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 6,
			buildTimeDay: 0,
			exp: 134,
			builderHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ef/Elixir_Collector5B.png/revision/latest/scale-to-width-down/100?cb=20180109122756',
		},
		{
			level: 6,
			capacity: 60000,
			productionRatePerHr: 2500,
			hitpoints: 650,
			timeToFillSec: 0,
			timeToFillMin: 0,
			timeToFillHour: 0,
			timeToFillDay: 1,
			buildCost: 100000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			builderHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d4/Elixir_Collector6B.png/revision/latest/scale-to-width-down/100?cb=20180109122756',
		},
		{
			level: 7,
			capacity: 72000,
			productionRatePerHr: 3000,
			hitpoints: 750,
			timeToFillSec: 0,
			timeToFillMin: 0,
			timeToFillHour: 0,
			timeToFillDay: 1,
			buildCost: 200000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 1,
			exp: 360,
			builderHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8e/Elixir_Collector7B.png/revision/latest/scale-to-width-down/100?cb=20180109122757',
		},
		{
			level: 8,
			capacity: 84000,
			productionRatePerHr: 3500,
			hitpoints: 850,
			timeToFillSec: 0,
			timeToFillMin: 0,
			timeToFillHour: 0,
			timeToFillDay: 1,
			buildCost: 300000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			builderHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/15/Elixir_Collector8B.png/revision/latest/scale-to-width-down/100?cb=20180109122757',
		},
		{
			level: 9,
			capacity: 96000,
			productionRatePerHr: 4000,
			hitpoints: 1000,
			timeToFillSec: 0,
			timeToFillMin: 0,
			timeToFillHour: 0,
			timeToFillDay: 1,
			buildCost: 400000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 2,
			exp: 464,
			builderHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/3b/Elixir_Collector9B.png/revision/latest/scale-to-width-down/100?cb=20190616211335',
		},
		{
			level: 10,
			capacity: 108000,
			productionRatePerHr: 4500,
			hitpoints: 1150,
			timeToFillSec: 0,
			timeToFillMin: 0,
			timeToFillHour: 0,
			timeToFillDay: 1,
			buildCost: 800000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 3,
			exp: 509,
			builderHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Elixir_Collector10B.png/revision/latest/scale-to-width-down/100?cb=20230518051323',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getBuilderHallLevel: (level: number) => getHallLevel(building.builderHallDetails, level, 'builderHallLevel'),
}

export default building
