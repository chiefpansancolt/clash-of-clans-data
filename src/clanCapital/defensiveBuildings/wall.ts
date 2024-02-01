import * as Constants from '@/constants'
import Level from '@IClanCapital/wall/level.interface'
import Wall from '@IClanCapital/wall/wall.interface'
import HallDetails from '@IClanCapital/hall/hallDetails.interface'

const wall: Wall = {
	name: 'Walls',
	description:
		'Walls protect districts and keep enemies at bay. A district’s Walls are always the same level and upgrade at the same time. Build together, battle together, upgrade walls together!',
	width: 1,
	height: 1,
	maxLevel: 5,
	clanCapitalDetails: [
		{
			name: Constants.capitalHall,
			levels: [
				{ hallLevel: 1, availableCount: 80, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 120, maxLevel: 1 },
				{ hallLevel: 3, availableCount: 160, maxLevel: 2 },
				{ hallLevel: 4, availableCount: 180, maxLevel: 2 },
				{ hallLevel: 5, availableCount: 200, maxLevel: 3 },
				{ hallLevel: 6, availableCount: 220, maxLevel: 3 },
				{ hallLevel: 7, availableCount: 240, maxLevel: 4 },
				{ hallLevel: 8, availableCount: 260, maxLevel: 4 },
				{ hallLevel: 9, availableCount: 280, maxLevel: 5 },
				{ hallLevel: 10, availableCount: 280, maxLevel: 5 },
			],
		},
		{
			name: Constants.barbarianCamp,
			levels: [
				{ hallLevel: 1, availableCount: 50, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 100, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 140, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 180, maxLevel: 4 },
				{ hallLevel: 5, availableCount: 200, maxLevel: 5 },
			],
		},
		{
			name: Constants.wizardValley,
			levels: [
				{ hallLevel: 1, availableCount: 80, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 120, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 140, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 160, maxLevel: 4 },
				{ hallLevel: 5, availableCount: 180, maxLevel: 5 },
			],
		},
		{
			name: Constants.ballonLagoon,
			levels: [
				{ hallLevel: 1, availableCount: 60, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 80, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 100, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 120, maxLevel: 4 },
				{ hallLevel: 5, availableCount: 120, maxLevel: 5 },
			],
		},
		{
			name: Constants.builderWorkshop,
			levels: [
				{ hallLevel: 1, availableCount: 100, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 120, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 140, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 160, maxLevel: 4 },
				{ hallLevel: 5, availableCount: 180, maxLevel: 5 },
			],
		},
		{
			name: Constants.dragonCliffs,
			levels: [
				{ hallLevel: 1, availableCount: 80, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 100, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 120, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 140, maxLevel: 4 },
				{ hallLevel: 5, availableCount: 140, maxLevel: 5 },
			],
		},
		{
			name: Constants.golemQuarry,
			levels: [
				{ hallLevel: 1, availableCount: 60, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 100, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 120, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 140, maxLevel: 4 },
				{ hallLevel: 5, availableCount: 160, maxLevel: 5 },
			],
		},
		{
			name: Constants.skeletonPark,
			levels: [
				{ hallLevel: 1, availableCount: 80, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 80, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 80, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 100, maxLevel: 4 },
			],
		},
		{
			name: Constants.goblinMines,
			levels: [
				{ hallLevel: 1, availableCount: 30, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 60, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 80, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 100, maxLevel: 4 },
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
	getHallLevel(name: string, level: number): HallDetails | undefined {
		const hallDetails = this.clanCapitalDetails.find(
			(detail: { name: string }) => detail.name === name
		)

		if (hallDetails && level >= 1 && level <= hallDetails.levels.length) {
			return hallDetails.levels[level - 1]
		} else {
			console.error(`Invalid Capital Hall level or name: ${level} or ${name}`)
			return undefined
		}
	},
}

export default wall
