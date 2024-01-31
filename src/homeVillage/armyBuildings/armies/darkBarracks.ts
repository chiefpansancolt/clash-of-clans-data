import * as Constants from '@/constants'
import Building from '@IHomeVillage/army/darkBarracks/army.interface'
import Level from '@IHomeVillage/army/darkBarracks/level.interface'
import TownHallDetails from '@ICommon/townHall/details.interface'

const darkBarracks: Building = {
	name: 'Dark Barracks',
	description:
		'The Dark Barracks will open doors for creatures born out of Dark Elixir. Upgrade the barracks to unlock more troops with unique battle skills.',
	maxCount: 1,
	width: 3,
	height: 3,
	maxLevel: 10,
	townHallDetails: [
		{ townHall: 1, availableCount: 0, maxLevel: 0 },
		{ townHall: 2, availableCount: 0, maxLevel: 0 },
		{ townHall: 3, availableCount: 0, maxLevel: 0 },
		{ townHall: 4, availableCount: 0, maxLevel: 0 },
		{ townHall: 5, availableCount: 0, maxLevel: 0 },
		{ townHall: 6, availableCount: 0, maxLevel: 0 },
		{ townHall: 7, availableCount: 1, maxLevel: 2 },
		{ townHall: 8, availableCount: 1, maxLevel: 4 },
		{ townHall: 9, availableCount: 1, maxLevel: 6 },
		{ townHall: 10, availableCount: 1, maxLevel: 7 },
		{ townHall: 11, availableCount: 1, maxLevel: 8 },
		{ townHall: 12, availableCount: 1, maxLevel: 9 },
		{ townHall: 13, availableCount: 1, maxLevel: 10 },
		{ townHall: 14, availableCount: 1, maxLevel: 10 },
		{ townHall: 15, availableCount: 1, maxLevel: 10 },
		{ townHall: 16, availableCount: 1, maxLevel: 10 },
	],
	achievement: [],
	levels: [
		{
			level: 1,
			unlockedUnit: 'Minion',
			hitpoints: 500,
			buildCost: 200000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 8,
			buildTimeDay: 0,
			exp: 169,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f6/Dark_Barracks1.png/revision/latest/scale-to-width-down/110?cb=20230105081803',
		},
		{
			level: 2,
			unlockedUnit: 'Hog Rider',
			hitpoints: 550,
			buildCost: 600000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/dd/Dark_Barracks2.png/revision/latest/scale-to-width-down/110?cb=20230105081814',
		},
		{
			level: 3,
			unlockedUnit: 'Valkyrie',
			hitpoints: 600,
			buildCost: 1000000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 1,
			exp: 360,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f0/Dark_Barracks3.png/revision/latest/scale-to-width-down/110?cb=20230105081822',
		},
		{
			level: 4,
			unlockedUnit: 'Golem',
			hitpoints: 650,
			buildCost: 1600000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/1e/Dark_Barracks4.png/revision/latest/scale-to-width-down/110?cb=20230105081828',
		},
		{
			level: 5,
			unlockedUnit: 'Witch',
			hitpoints: 700,
			buildCost: 2200000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 3,
			exp: 549,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/60/Dark_Barracks5.png/revision/latest/scale-to-width-down/110?cb=20230105081835',
		},
		{
			level: 6,
			unlockedUnit: 'Lava Hound',
			hitpoints: 750,
			buildCost: 2900000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 4,
			exp: 623,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/54/Dark_Barracks6.png/revision/latest/scale-to-width-down/110?cb=20230105081843',
		},
		{
			level: 7,
			unlockedUnit: 'Bowler',
			hitpoints: 800,
			buildCost: 4000000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 6,
			exp: 749,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b4/Dark_Barracks7.png/revision/latest/scale-to-width-down/110?cb=20230105081849',
		},
		{
			level: 8,
			unlockedUnit: 'Ice Golem',
			hitpoints: 850,
			buildCost: 7500000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 8,
			exp: 831,
			townHallLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/30/Dark_Barracks8.png/revision/latest/scale-to-width-down/110?cb=20230105081902',
		},
		{
			level: 9,
			unlockedUnit: 'Headhunter',
			hitpoints: 900,
			buildCost: 9000000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 10,
			exp: 929,
			townHallLevelRequired: 12,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c5/Dark_Barracks9.png/revision/latest/scale-to-width-down/110?cb=20230105081917',
		},
		{
			level: 10,
			unlockedUnit: 'Apprentice Warden',
			hitpoints: 950,
			buildCost: 13000000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 13,
			exp: 1059,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c9/Dark_Barracks10.png/revision/latest/scale-to-width-down/110?cb=20230613000755',
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

export default darkBarracks
