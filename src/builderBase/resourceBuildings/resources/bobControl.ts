import * as Constants from '@/constants'
import Resource from '@IBuilderBase/resources/bobControl/resource.interface'
import Level from '@IBuilderBase/resources/bobControl/level.interface'
import TownHallDetails from '@ICommon/townHall/details.interface'

const bobControl: Resource = {
	name: 'B.O.B Control',
	description:
		"Control center for Master Builder's latest invention! Once fully upgraded, B.O.B becomes an additional builder in the Home Village!",
	maxCount: 1,
	width: 2,
	height: 2,
	maxLevel: 5,
	townHallDetails: [
		{ townHall: 1, availableCount: 0, maxLevel: 0 },
		{ townHall: 2, availableCount: 0, maxLevel: 0 },
		{ townHall: 3, availableCount: 0, maxLevel: 0 },
		{ townHall: 4, availableCount: 0, maxLevel: 0 },
		{ townHall: 5, availableCount: 0, maxLevel: 0 },
		{ townHall: 6, availableCount: 0, maxLevel: 0 },
		{ townHall: 7, availableCount: 0, maxLevel: 0 },
		{ townHall: 8, availableCount: 0, maxLevel: 0 },
		{ townHall: 9, availableCount: 1, maxLevel: 5 },
		{ townHall: 10, availableCount: 1, maxLevel: 5 },
	],
	achievement: [],
	levels: [
		{
			level: 1,
			hitpoints: 250,
			buildCost: 100000,
			buildResource: Constants.builderGold,
			upgradeRequirement: 'N/A',
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/95/O.T.T.O_Hut1.png/revision/latest/scale-to-width-down/100?cb=20190621205325',
		},
		{
			level: 2,
			hitpoints: 250,
			buildCost: 0,
			buildResource: 'N/A',
			upgradeRequirement: 'Gear Up all 3 buildings: Cannon, Archer Tower, Mortar',
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a7/O.T.T.O_Hut2.png/revision/latest/scale-to-width-down/100?cb=20190621205325',
		},
		{
			level: 3,
			hitpoints: 250,
			buildCost: 0,
			buildResource: 'N/A',
			upgradeRequirement: 'Upgrade any troop to level 18',
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/2e/O.T.T.O_Hut3.png/revision/latest/scale-to-width-down/100?cb=20190621205326',
		},
		{
			level: 4,
			hitpoints: 250,
			buildCost: 0,
			buildResource: 'N/A',
			upgradeRequirement: 'Upgrade any defense to level 9',
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6b/O.T.T.O_Hut4.png/revision/latest/scale-to-width-down/100?cb=20190621205326',
		},
		{
			level: 5,
			hitpoints: 250,
			buildCost: 0,
			buildResource: 'N/A',
			upgradeRequirement: 'Upgrade Battle Machine and Battle Copter to a total level of 45',
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/80/O.T.T.O_Hut5.png/revision/latest/scale-to-width-down/100?cb=20190621205327',
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

export default bobControl
