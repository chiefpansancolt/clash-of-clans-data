import * as Constants from '@/constants'
import Wall from '@IHomeVillage/wall/wall.interface'
import Level from '@IHomeVillage/wall/level.interface'
import TownHallDetails from '@ICommon/townHall/details.interface'

const wall: Wall = {
	name: 'Walls',
	description:
		'Walls are great for keeping your village safe and your enemies in the line of fire.',
	maxCount: 325,
	width: 1,
	height: 1,
	maxLevel: 17,
	townHallDetails: [
		{ townHall: 1, availableCount: 0, maxLevel: 0 },
		{ townHall: 2, availableCount: 25, maxLevel: 2 },
		{ townHall: 3, availableCount: 50, maxLevel: 3 },
		{ townHall: 4, availableCount: 75, maxLevel: 4 },
		{ townHall: 5, availableCount: 100, maxLevel: 5 },
		{ townHall: 6, availableCount: 125, maxLevel: 6 },
		{ townHall: 7, availableCount: 175, maxLevel: 7 },
		{ townHall: 8, availableCount: 225, maxLevel: 8 },
		{ townHall: 9, availableCount: 250, maxLevel: 10 },
		{ townHall: 10, availableCount: 275, maxLevel: 11 },
		{ townHall: 11, availableCount: 300, maxLevel: 12 },
		{ townHall: 12, availableCount: 300, maxLevel: 13 },
		{ townHall: 13, availableCount: 300, maxLevel: 14 },
		{ townHall: 14, availableCount: 325, maxLevel: 15 },
		{ townHall: 15, availableCount: 325, maxLevel: 16 },
		{ townHall: 16, availableCount: 325, maxLevel: 17 },
	],
	achievement: {
		name: 'Wall Buster',
		village: Constants.homeVillage,
		levels: [
			{
				info: 'Destroy 10 Walls in Multiplayer battles',
				exp: 10,
				gems: 5,
				stars: 1,
				target: 10,
			},
			{
				info: 'Destroy 100 Walls in Multiplayer battles',
				exp: 100,
				gems: 10,
				stars: 2,
				target: 100,
			},
			{
				info: 'Destroy 2,000 Walls in Multiplayer battles',
				exp: 1000,
				gems: 20,
				stars: 3,
				target: 2000,
			},
		],
	},
	levels: [
		{
			level: 1,
			hitpoints: 300,
			goldBuildCost: 50,
			goldCumulativeCost: 50,
			elixirBuildCost: 0,
			elixirCumulativeCost: 0,
			wallRingCost: 0,
			townHallLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/74/Wall1.png/revision/latest/scale-to-width-down/75?cb=20171205125404',
		},
		{
			level: 2,
			hitpoints: 500,
			goldBuildCost: 1000,
			goldCumulativeCost: 1050,
			elixirBuildCost: 0,
			elixirCumulativeCost: 0,
			wallRingCost: 1,
			townHallLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/97/Wall2.png/revision/latest/scale-to-width-down/75?cb=20171205125418',
		},
		{
			level: 3,
			hitpoints: 700,
			goldBuildCost: 5000,
			goldCumulativeCost: 6050,
			elixirBuildCost: 0,
			elixirCumulativeCost: 0,
			wallRingCost: 1,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f5/Wall3.png/revision/latest/scale-to-width-down/75?cb=20171205125432',
		},
		{
			level: 4,
			hitpoints: 900,
			goldBuildCost: 10000,
			goldCumulativeCost: 16050,
			elixirBuildCost: 0,
			elixirCumulativeCost: 0,
			wallRingCost: 1,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/62/Wall4.png/revision/latest/scale-to-width-down/75?cb=20171205125448',
		},
		{
			level: 5,
			hitpoints: 1400,
			goldBuildCost: 20000,
			goldCumulativeCost: 36050,
			elixirBuildCost: 20000,
			elixirCumulativeCost: 20000,
			wallRingCost: 1,
			townHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c4/Wall5.png/revision/latest/scale-to-width-down/75?cb=20171205125503',
		},
		{
			level: 6,
			hitpoints: 2000,
			goldBuildCost: 30000,
			goldCumulativeCost: 66050,
			elixirBuildCost: 30000,
			elixirCumulativeCost: 50000,
			wallRingCost: 1,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c7/Wall6.png/revision/latest/scale-to-width-down/75?cb=20171205125519',
		},
		{
			level: 7,
			hitpoints: 2500,
			goldBuildCost: 50000,
			goldCumulativeCost: 116050,
			elixirBuildCost: 50000,
			elixirCumulativeCost: 100000,
			wallRingCost: 1,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/be/Wall7.png/revision/latest/scale-to-width-down/75?cb=20171205125539',
		},
		{
			level: 8,
			hitpoints: 3000,
			goldBuildCost: 75000,
			goldCumulativeCost: 191050,
			elixirBuildCost: 75000,
			elixirCumulativeCost: 175000,
			wallRingCost: 1,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/06/Wall8.png/revision/latest/scale-to-width-down/75?cb=20171205125553',
		},
		{
			level: 9,
			hitpoints: 3500,
			goldBuildCost: 100000,
			goldCumulativeCost: 291050,
			elixirBuildCost: 100000,
			elixirCumulativeCost: 275000,
			wallRingCost: 1,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/93/Wall9.png/revision/latest/scale-to-width-down/75?cb=20171205125607',
		},
		{
			level: 10,
			hitpoints: 4000,
			goldBuildCost: 200000,
			goldCumulativeCost: 491050,
			elixirBuildCost: 200000,
			elixirCumulativeCost: 475000,
			wallRingCost: 1,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8b/Wall10.png/revision/latest/scale-to-width-down/75?cb=20171205125626',
		},
		{
			level: 11,
			hitpoints: 5000,
			goldBuildCost: 500000,
			goldCumulativeCost: 991050,
			elixirBuildCost: 500000,
			elixirCumulativeCost: 975000,
			wallRingCost: 1,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/86/Wall11.png/revision/latest/scale-to-width-down/75?cb=20171205125639',
		},
		{
			level: 12,
			hitpoints: 7000,
			goldBuildCost: 1000000,
			goldCumulativeCost: 1991050,
			elixirBuildCost: 1000000,
			elixirCumulativeCost: 1975000,
			wallRingCost: 1,
			townHallLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/41/Wall12.png/revision/latest/scale-to-width-down/75?cb=20171205125655',
		},
		{
			level: 13,
			hitpoints: 9000,
			goldBuildCost: 2000000,
			goldCumulativeCost: 3991050,
			elixirBuildCost: 2000000,
			elixirCumulativeCost: 3975000,
			wallRingCost: 2,
			townHallLevelRequired: 12,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/23/Wall13.png/revision/latest/scale-to-width-down/75?cb=20180604155743',
		},
		{
			level: 14,
			hitpoints: 11000,
			goldBuildCost: 3000000,
			goldCumulativeCost: 6991050,
			elixirBuildCost: 3000000,
			elixirCumulativeCost: 6975000,
			wallRingCost: 4,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/53/Wall14.png/revision/latest/scale-to-width-down/75?cb=20201023201151',
		},
		{
			level: 15,
			hitpoints: 12500,
			goldBuildCost: 5000000,
			goldCumulativeCost: 11991050,
			elixirBuildCost: 5000000,
			elixirCumulativeCost: 11975000,
			wallRingCost: 7,
			townHallLevelRequired: 14,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/61/Wall15.png/revision/latest/scale-to-width-down/75?cb=20210413212225',
		},
		{
			level: 16,
			hitpoints: 13500,
			goldBuildCost: 8000000,
			goldCumulativeCost: 19991050,
			elixirBuildCost: 8000000,
			elixirCumulativeCost: 19975000,
			wallRingCost: 8,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/81/Wall16.png/revision/latest/scale-to-width-down/75?cb=20221010075457',
		},
		{
			level: 17,
			hitpoints: 14500,
			goldBuildCost: 9000000,
			goldCumulativeCost: 28991050,
			elixirBuildCost: 9000000,
			elixirCumulativeCost: 28975000,
			wallRingCost: 9,
			townHallLevelRequired: 16,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6c/Wall17.png/revision/latest/scale-to-width-down/52?cb=20231211074305',
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
}

export default wall