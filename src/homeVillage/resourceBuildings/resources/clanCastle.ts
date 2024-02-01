import * as Constants from '@/constants'
import Resource from '@IHomeVillage/resources/clanCastle/resource.interface'
import Level from '@IHomeVillage/resources/clanCastle/level.interface'
import TownHallDetails from '@IHomeVillage/townHall/details.interface'
import TreasuryCapacity from '@IHomeVillage/resources/clanCastle/treasuryCapacity.interface'

const clanCastle: Resource = {
	name: 'Clan Castle',
	description:
		'The Clan Castle houses your Treasury and any reinforcement troops or spells sent by your clanmates.',
	maxCount: 1,
	width: 3,
	height: 3,
	maxLevel: 11,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/7/76/Clan_Castle_Ruin.png/revision/latest/scale-to-width-down/100?cb=20171027141100',
	mode: {
		triggerRadius: 13,
	},
	townHallDetails: [
		{ townHallLevel: 1, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 2, availableCount: 1, maxLevel: 1 },
		{ townHallLevel: 3, availableCount: 1, maxLevel: 1 },
		{ townHallLevel: 4, availableCount: 1, maxLevel: 2 },
		{ townHallLevel: 5, availableCount: 1, maxLevel: 2 },
		{ townHallLevel: 6, availableCount: 1, maxLevel: 3 },
		{ townHallLevel: 7, availableCount: 1, maxLevel: 3 },
		{ townHallLevel: 8, availableCount: 1, maxLevel: 4 },
		{ townHallLevel: 9, availableCount: 1, maxLevel: 5 },
		{ townHallLevel: 10, availableCount: 1, maxLevel: 6 },
		{ townHallLevel: 11, availableCount: 1, maxLevel: 7 },
		{ townHallLevel: 12, availableCount: 1, maxLevel: 8 },
		{ townHallLevel: 13, availableCount: 1, maxLevel: 9 },
		{ townHallLevel: 14, availableCount: 1, maxLevel: 10 },
		{ townHallLevel: 15, availableCount: 1, maxLevel: 11 },
		{ townHallLevel: 16, availableCount: 1, maxLevel: 11 },
	],
	achievement: [
		{
			name: 'Empire Builder',
			village: Constants.homeVillage,
			levels: [
				{
					info: 'Rebuild your Clan Castle',
					exp: 10,
					gems: 5,
					stars: 1,
					target: 1,
				},
				{
					info: 'Upgrade your Clan Castle to level 2',
					exp: 100,
					gems: 10,
					stars: 2,
					target: 2,
				},
				{
					info: 'Upgrade your Clan Castle to level 4',
					exp: 1000,
					gems: 20,
					stars: 3,
					target: 4,
				},
			],
		},
		{
			name: 'Clan War Wealth',
			village: Constants.homeVillage,
			levels: [
				{
					info: 'Collect 800,000 gold from the Clan Castle',
					exp: 25,
					gems: 100,
					stars: 1,
					target: 800000,
				},
				{
					info: 'Collect 15,000,000 gold from the Clan Castle',
					exp: 500,
					gems: 100,
					stars: 2,
					target: 15000000,
				},
				{
					info: 'Collect 100,000,000 gold from the Clan Castle',
					exp: 5000,
					gems: 500,
					stars: 3,
					target: 100000000,
				},
			],
		},
		{
			name: 'Friend in Need',
			village: Constants.homeVillage,
			levels: [
				{
					info: 'Donate 100 capacity worth of reinforcements to Clanmates',
					exp: 10,
					gems: 5,
					stars: 1,
					target: 100,
				},
				{
					info: 'Donate 5,000 capacity worth of reinforcements to Clanmates',
					exp: 100,
					gems: 25,
					stars: 2,
					target: 5000,
				},
				{
					info: 'Donate 25,000 capacity worth of reinforcements to Clanmates',
					exp: 1000,
					gems: 250,
					stars: 3,
					target: 25000,
				},
			],
		},
		{
			name: 'Sharing is caring',
			village: Constants.homeVillage,
			levels: [
				{
					info: 'Donate 100 spell storage capacity worth of spells',
					exp: 20,
					gems: 20,
					stars: 1,
					target: 100,
				},
				{
					info: 'Donate 2,000 spell storage capacity worth of spells',
					exp: 200,
					gems: 100,
					stars: 2,
					target: 2000,
				},
				{
					info: 'Donate 10,000 spell storage capacity worth of spells',
					exp: 2000,
					gems: 500,
					stars: 3,
					target: 10000,
				},
			],
		},
		{
			name: 'Siege Sharer',
			village: Constants.homeVillage,
			levels: [
				{
					info: 'Donate 50 Siege Machines',
					exp: 20,
					gems: 20,
					stars: 1,
					target: 50,
				},
				{
					info: 'Donate 1,000 Siege Machines',
					exp: 200,
					gems: 100,
					stars: 2,
					target: 1000,
				},
				{
					info: 'Donate 5,000 Siege Machines',
					exp: 2000,
					gems: 500,
					stars: 3,
					target: 5000,
				},
			],
		},
	],
	treasuryCapacities: [
		{
			name: 'No Clan or Level 1 Clan',
			level: 1,
			capacityLevels: [
				{
					townHallLevel: 1,
					goldCapacity: 50000,
					elixirCapacity: 50000,
					darkElixirCapacity: 0,
				},
				{
					townHallLevel: 2,
					goldCapacity: 200000,
					elixirCapacity: 200000,
					darkElixirCapacity: 0,
				},
				{
					townHallLevel: 3,
					goldCapacity: 400000,
					elixirCapacity: 400000,
					darkElixirCapacity: 0,
				},
				{
					townHallLevel: 4,
					goldCapacity: 600000,
					elixirCapacity: 600000,
					darkElixirCapacity: 0,
				},
				{
					townHallLevel: 5,
					goldCapacity: 800000,
					elixirCapacity: 800000,
					darkElixirCapacity: 0,
				},
				{
					townHallLevel: 6,
					goldCapacity: 1200000,
					elixirCapacity: 1200000,
					darkElixirCapacity: 0,
				},
				{
					townHallLevel: 7,
					goldCapacity: 1600000,
					elixirCapacity: 1600000,
					darkElixirCapacity: 8000,
				},
				{
					townHallLevel: 8,
					goldCapacity: 2000000,
					elixirCapacity: 2000000,
					darkElixirCapacity: 10000,
				},
				{
					townHallLevel: 9,
					goldCapacity: 2400000,
					elixirCapacity: 2400000,
					darkElixirCapacity: 12000,
				},
				{
					townHallLevel: 10,
					goldCapacity: 2800000,
					elixirCapacity: 2800000,
					darkElixirCapacity: 14000,
				},
				{
					townHallLevel: 11,
					goldCapacity: 3200000,
					elixirCapacity: 3200000,
					darkElixirCapacity: 16000,
				},
				{
					townHallLevel: 12,
					goldCapacity: 3600000,
					elixirCapacity: 3600000,
					darkElixirCapacity: 18000,
				},
				{
					townHallLevel: 13,
					goldCapacity: 4000000,
					elixirCapacity: 4000000,
					darkElixirCapacity: 20000,
				},
				{
					townHallLevel: 14,
					goldCapacity: 4400000,
					elixirCapacity: 4400000,
					darkElixirCapacity: 22000,
				},
				{
					townHallLevel: 15,
					goldCapacity: 4800000,
					elixirCapacity: 4800000,
					darkElixirCapacity: 24000,
				},
			],
		},
		{
			name: 'Level 2-3 Clan',
			level: 2,
			capacityLevels: [
				{
					townHallLevel: 1,
					goldCapacity: 55000,
					elixirCapacity: 55000,
					darkElixirCapacity: 0,
				},
				{
					townHallLevel: 2,
					goldCapacity: 220000,
					elixirCapacity: 220000,
					darkElixirCapacity: 0,
				},
				{
					townHallLevel: 3,
					goldCapacity: 440000,
					elixirCapacity: 440000,
					darkElixirCapacity: 0,
				},
				{
					townHallLevel: 4,
					goldCapacity: 660000,
					elixirCapacity: 660000,
					darkElixirCapacity: 0,
				},
				{
					townHallLevel: 5,
					goldCapacity: 880000,
					elixirCapacity: 880000,
					darkElixirCapacity: 0,
				},
				{
					townHallLevel: 6,
					goldCapacity: 1320000,
					elixirCapacity: 1320000,
					darkElixirCapacity: 0,
				},
				{
					townHallLevel: 7,
					goldCapacity: 1760000,
					elixirCapacity: 1760000,
					darkElixirCapacity: 8800,
				},
				{
					townHallLevel: 8,
					goldCapacity: 2200000,
					elixirCapacity: 2200000,
					darkElixirCapacity: 11000,
				},
				{
					townHallLevel: 9,
					goldCapacity: 2640000,
					elixirCapacity: 2640000,
					darkElixirCapacity: 13200,
				},
				{
					townHallLevel: 10,
					goldCapacity: 3080000,
					elixirCapacity: 3080000,
					darkElixirCapacity: 15400,
				},
				{
					townHallLevel: 11,
					goldCapacity: 3520000,
					elixirCapacity: 3520000,
					darkElixirCapacity: 17600,
				},
				{
					townHallLevel: 12,
					goldCapacity: 3960000,
					elixirCapacity: 3960000,
					darkElixirCapacity: 19800,
				},
				{
					townHallLevel: 13,
					goldCapacity: 4400000,
					elixirCapacity: 4400000,
					darkElixirCapacity: 22000,
				},
				{
					townHallLevel: 14,
					goldCapacity: 4840000,
					elixirCapacity: 4840000,
					darkElixirCapacity: 24200,
				},
				{
					townHallLevel: 15,
					goldCapacity: 5280000,
					elixirCapacity: 5280000,
					darkElixirCapacity: 26400,
				},
			],
		},
		{
			name: 'Level 4-5 Clan',
			level: 4,
			capacityLevels: [
				{
					townHallLevel: 1,
					goldCapacity: 60000,
					elixirCapacity: 60000,
					darkElixirCapacity: 0,
				},
				{
					townHallLevel: 2,
					goldCapacity: 240000,
					elixirCapacity: 240000,
					darkElixirCapacity: 0,
				},
				{
					townHallLevel: 3,
					goldCapacity: 480000,
					elixirCapacity: 480000,
					darkElixirCapacity: 0,
				},
				{
					townHallLevel: 4,
					goldCapacity: 720000,
					elixirCapacity: 720000,
					darkElixirCapacity: 0,
				},
				{
					townHallLevel: 5,
					goldCapacity: 960000,
					elixirCapacity: 960000,
					darkElixirCapacity: 0,
				},
				{
					townHallLevel: 6,
					goldCapacity: 1440000,
					elixirCapacity: 1440000,
					darkElixirCapacity: 0,
				},
				{
					townHallLevel: 7,
					goldCapacity: 1920000,
					elixirCapacity: 1920000,
					darkElixirCapacity: 9600,
				},
				{
					townHallLevel: 8,
					goldCapacity: 2400000,
					elixirCapacity: 2400000,
					darkElixirCapacity: 12000,
				},
				{
					townHallLevel: 9,
					goldCapacity: 2880000,
					elixirCapacity: 2880000,
					darkElixirCapacity: 14400,
				},
				{
					townHallLevel: 10,
					goldCapacity: 3360000,
					elixirCapacity: 3360000,
					darkElixirCapacity: 16800,
				},
				{
					townHallLevel: 11,
					goldCapacity: 3840000,
					elixirCapacity: 3840000,
					darkElixirCapacity: 19200,
				},
				{
					townHallLevel: 12,
					goldCapacity: 4320000,
					elixirCapacity: 4320000,
					darkElixirCapacity: 21600,
				},
				{
					townHallLevel: 13,
					goldCapacity: 4800000,
					elixirCapacity: 4800000,
					darkElixirCapacity: 24000,
				},
				{
					townHallLevel: 14,
					goldCapacity: 5280000,
					elixirCapacity: 5280000,
					darkElixirCapacity: 26400,
				},
				{
					townHallLevel: 15,
					goldCapacity: 5760000,
					elixirCapacity: 5760000,
					darkElixirCapacity: 28800,
				},
			],
		},
		{
			name: 'Level 6-7 Clan',
			level: 6,
			capacityLevels: [
				{
					townHallLevel: 1,
					goldCapacity: 65000,
					elixirCapacity: 65000,
					darkElixirCapacity: 0,
				},
				{
					townHallLevel: 2,
					goldCapacity: 260000,
					elixirCapacity: 260000,
					darkElixirCapacity: 0,
				},
				{
					townHallLevel: 3,
					goldCapacity: 520000,
					elixirCapacity: 520000,
					darkElixirCapacity: 0,
				},
				{
					townHallLevel: 4,
					goldCapacity: 780000,
					elixirCapacity: 780000,
					darkElixirCapacity: 0,
				},
				{
					townHallLevel: 5,
					goldCapacity: 1040000,
					elixirCapacity: 1040000,
					darkElixirCapacity: 0,
				},
				{
					townHallLevel: 6,
					goldCapacity: 1560000,
					elixirCapacity: 1560000,
					darkElixirCapacity: 0,
				},
				{
					townHallLevel: 7,
					goldCapacity: 2080000,
					elixirCapacity: 2080000,
					darkElixirCapacity: 10400,
				},
				{
					townHallLevel: 8,
					goldCapacity: 2600000,
					elixirCapacity: 2600000,
					darkElixirCapacity: 13000,
				},
				{
					townHallLevel: 9,
					goldCapacity: 3120000,
					elixirCapacity: 3120000,
					darkElixirCapacity: 15600,
				},
				{
					townHallLevel: 10,
					goldCapacity: 3640000,
					elixirCapacity: 3640000,
					darkElixirCapacity: 18200,
				},
				{
					townHallLevel: 11,
					goldCapacity: 4160000,
					elixirCapacity: 4160000,
					darkElixirCapacity: 20800,
				},
				{
					townHallLevel: 12,
					goldCapacity: 4680000,
					elixirCapacity: 4680000,
					darkElixirCapacity: 23400,
				},
				{
					townHallLevel: 13,
					goldCapacity: 5200000,
					elixirCapacity: 5200000,
					darkElixirCapacity: 26000,
				},
				{
					townHallLevel: 14,
					goldCapacity: 5720000,
					elixirCapacity: 5720000,
					darkElixirCapacity: 28600,
				},
				{
					townHallLevel: 15,
					goldCapacity: 6240000,
					elixirCapacity: 6240000,
					darkElixirCapacity: 31200,
				},
			],
		},
		{
			name: 'Level 8-9 Clan',
			level: 8,
			capacityLevels: [
				{
					townHallLevel: 1,
					goldCapacity: 70000,
					elixirCapacity: 70000,
					darkElixirCapacity: 0,
				},
				{
					townHallLevel: 2,
					goldCapacity: 280000,
					elixirCapacity: 280000,
					darkElixirCapacity: 0,
				},
				{
					townHallLevel: 3,
					goldCapacity: 560000,
					elixirCapacity: 560000,
					darkElixirCapacity: 0,
				},
				{
					townHallLevel: 4,
					goldCapacity: 840000,
					elixirCapacity: 840000,
					darkElixirCapacity: 0,
				},
				{
					townHallLevel: 5,
					goldCapacity: 1120000,
					elixirCapacity: 1120000,
					darkElixirCapacity: 0,
				},
				{
					townHallLevel: 6,
					goldCapacity: 1680000,
					elixirCapacity: 1680000,
					darkElixirCapacity: 0,
				},
				{
					townHallLevel: 7,
					goldCapacity: 2240000,
					elixirCapacity: 2240000,
					darkElixirCapacity: 11200,
				},
				{
					townHallLevel: 8,
					goldCapacity: 2800000,
					elixirCapacity: 2800000,
					darkElixirCapacity: 14000,
				},
				{
					townHallLevel: 9,
					goldCapacity: 3360000,
					elixirCapacity: 3360000,
					darkElixirCapacity: 16800,
				},
				{
					townHallLevel: 10,
					goldCapacity: 3920000,
					elixirCapacity: 3920000,
					darkElixirCapacity: 19600,
				},
				{
					townHallLevel: 11,
					goldCapacity: 4480000,
					elixirCapacity: 4480000,
					darkElixirCapacity: 22400,
				},
				{
					townHallLevel: 12,
					goldCapacity: 5040000,
					elixirCapacity: 5040000,
					darkElixirCapacity: 25200,
				},
				{
					townHallLevel: 13,
					goldCapacity: 5600000,
					elixirCapacity: 5600000,
					darkElixirCapacity: 28000,
				},
				{
					townHallLevel: 14,
					goldCapacity: 6160000,
					elixirCapacity: 6160000,
					darkElixirCapacity: 30800,
				},
				{
					townHallLevel: 15,
					goldCapacity: 6720000,
					elixirCapacity: 6720000,
					darkElixirCapacity: 33600,
				},
			],
		},
		{
			name: 'Level 10+ Clan',
			level: 10,
			capacityLevels: [
				{
					townHallLevel: 1,
					goldCapacity: 75000,
					elixirCapacity: 75000,
					darkElixirCapacity: 0,
				},
				{
					townHallLevel: 2,
					goldCapacity: 300000,
					elixirCapacity: 300000,
					darkElixirCapacity: 0,
				},
				{
					townHallLevel: 3,
					goldCapacity: 600000,
					elixirCapacity: 600000,
					darkElixirCapacity: 0,
				},
				{
					townHallLevel: 4,
					goldCapacity: 900000,
					elixirCapacity: 900000,
					darkElixirCapacity: 0,
				},
				{
					townHallLevel: 5,
					goldCapacity: 1200000,
					elixirCapacity: 1200000,
					darkElixirCapacity: 0,
				},
				{
					townHallLevel: 6,
					goldCapacity: 1800000,
					elixirCapacity: 1800000,
					darkElixirCapacity: 0,
				},
				{
					townHallLevel: 7,
					goldCapacity: 2400000,
					elixirCapacity: 2400000,
					darkElixirCapacity: 12000,
				},
				{
					townHallLevel: 8,
					goldCapacity: 3000000,
					elixirCapacity: 3000000,
					darkElixirCapacity: 15000,
				},
				{
					townHallLevel: 9,
					goldCapacity: 3600000,
					elixirCapacity: 3600000,
					darkElixirCapacity: 18000,
				},
				{
					townHallLevel: 10,
					goldCapacity: 4200000,
					elixirCapacity: 4200000,
					darkElixirCapacity: 21000,
				},
				{
					townHallLevel: 11,
					goldCapacity: 4800000,
					elixirCapacity: 4800000,
					darkElixirCapacity: 24000,
				},
				{
					townHallLevel: 12,
					goldCapacity: 5400000,
					elixirCapacity: 5400000,
					darkElixirCapacity: 27000,
				},
				{
					townHallLevel: 13,
					goldCapacity: 6000000,
					elixirCapacity: 6000000,
					darkElixirCapacity: 30000,
				},
				{
					townHallLevel: 14,
					goldCapacity: 6600000,
					elixirCapacity: 6600000,
					darkElixirCapacity: 33000,
				},
				{
					townHallLevel: 15,
					goldCapacity: 7200000,
					elixirCapacity: 7200000,
					darkElixirCapacity: 36000,
				},
			],
		},
	],
	levels: [
		{
			level: 1,
			hitpoints: 1000,
			troopCapacity: 10,
			spellCapacity: 0,
			siegeMachineCapacity: 0,
			laboratoryLevelCap: 5,
			buildCost: 10000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			townHallLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4f/Clan_Castle1.png/revision/latest/scale-to-width-down/100?cb=20171027141101',
		},
		{
			level: 2,
			hitpoints: 1400,
			troopCapacity: 15,
			spellCapacity: 0,
			siegeMachineCapacity: 0,
			laboratoryLevelCap: 6,
			buildCost: 100000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 8,
			buildTimeDay: 0,
			exp: 169,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/40/Clan_Castle2.png/revision/latest/scale-to-width-down/100?cb=20171027141101',
		},
		{
			level: 3,
			hitpoints: 2000,
			troopCapacity: 20,
			spellCapacity: 0,
			siegeMachineCapacity: 0,
			laboratoryLevelCap: 7,
			buildCost: 800000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 0,
			exp: 207,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/14/Clan_Castle3.png/revision/latest/scale-to-width-down/100?cb=20171027141102',
		},
		{
			level: 4,
			hitpoints: 2600,
			troopCapacity: 25,
			spellCapacity: 1,
			siegeMachineCapacity: 0,
			laboratoryLevelCap: 8,
			buildCost: 1200000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/9c/Clan_Castle4.png/revision/latest/scale-to-width-down/100?cb=20171027141102',
		},
		{
			level: 5,
			hitpoints: 3000,
			troopCapacity: 30,
			spellCapacity: 1,
			siegeMachineCapacity: 0,
			laboratoryLevelCap: 9,
			buildCost: 2500000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/11/Clan_Castle5.png/revision/latest/scale-to-width-down/100?cb=20171027141103',
		},
		{
			level: 6,
			hitpoints: 3400,
			troopCapacity: 35,
			spellCapacity: 1,
			siegeMachineCapacity: 1,
			laboratoryLevelCap: 10,
			buildCost: 4200000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 5,
			exp: 657,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/59/Clan_Castle6.png/revision/latest/scale-to-width-down/100?cb=20171027141103',
		},
		{
			level: 7,
			hitpoints: 4000,
			troopCapacity: 35,
			spellCapacity: 2,
			siegeMachineCapacity: 1,
			laboratoryLevelCap: 11,
			buildCost: 5500000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 6,
			buildTimeDay: 6,
			exp: 734,
			townHallLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/92/Clan_Castle7.png/revision/latest/scale-to-width-down/100?cb=20171027141103',
		},
		{
			level: 8,
			hitpoints: 4400,
			troopCapacity: 40,
			spellCapacity: 2,
			siegeMachineCapacity: 1,
			laboratoryLevelCap: 12,
			buildCost: 8000000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 9,
			exp: 881,
			townHallLevelRequired: 12,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5e/Clan_Castle8.png/revision/latest/scale-to-width-down/100?cb=20180604165227',
		},
		{
			level: 9,
			hitpoints: 4800,
			troopCapacity: 45,
			spellCapacity: 2,
			siegeMachineCapacity: 1,
			laboratoryLevelCap: 13,
			buildCost: 10000000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 11,
			exp: 974,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5d/Clan_Castle9.png/revision/latest/scale-to-width-down/110?cb=20200906004338',
		},
		{
			level: 10,
			hitpoints: 5200,
			troopCapacity: 45,
			spellCapacity: 3,
			siegeMachineCapacity: 1,
			laboratoryLevelCap: 14,
			buildCost: 12600000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 13,
			exp: 1059,
			townHallLevelRequired: 14,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5a/Clan_Castle10.png/revision/latest/scale-to-width-down/100?cb=20210412214515',
		},
		{
			level: 11,
			hitpoints: 5400,
			troopCapacity: 50,
			spellCapacity: 3,
			siegeMachineCapacity: 1,
			laboratoryLevelCap: 14,
			buildCost: 20000000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 14,
			exp: 1099,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4a/Clan_Castle11.png/revision/latest/scale-to-width-down/110?cb=20221011064716',
		},
	],
	getSize(): string {
		return `${this.width}x${this.height}`
	},
	getLevel(level: number): Level | undefined {
		if (level >= 1 && level <= this.levels.length) {
			return this.levels[level - 1]
		} else {
			console.error(`Invalid ${this.name} level: ${level}`)
			return undefined
		}
	},
	getTownHallLevel(level: number): TownHallDetails | undefined {
		if (level >= 1 && level <= this.townHallDetails.length) {
			return this.townHallDetails[level - 1]
		} else {
			console.error(`Invalid Town Hall level: ${level}`)
			return undefined
		}
	},
	getTreasuryLevel(clanLevel: number, townHallLevel: number): TreasuryCapacity | undefined {
		let effectiveClanLevel = 1
		if (clanLevel >= 2 && clanLevel <= 3) {
			effectiveClanLevel = 2
		} else if (clanLevel >= 4 && clanLevel <= 5) {
			effectiveClanLevel = 4
		} else if (clanLevel >= 6 && clanLevel <= 7) {
			effectiveClanLevel = 6
		} else if (clanLevel >= 8 && clanLevel <= 9) {
			effectiveClanLevel = 8
		} else if (clanLevel >= 10) {
			effectiveClanLevel = 10
		}

		const capacityDetail = this.treasuryCapacities.find(
			(capacity) => capacity.level === effectiveClanLevel
		)

		const levelDetails = capacityDetail?.capacityLevels.find(
			(level) => level.townHallLevel === townHallLevel
		)

		if (levelDetails) {
			return levelDetails
		} else {
			console.error('Treasury capacity details not found for the given levels.')
			return undefined
		}
	},
}

export default clanCastle
