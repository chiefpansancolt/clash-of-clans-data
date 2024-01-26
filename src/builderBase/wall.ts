import Level from '@IBuilderBase/wall/level.interface'
import Wall from '@IBuilderBase/wall/wall.interface'
import TownHallDefense from '@ICommon/townHallDefense.interface'
import AchievementLevel from '@ICommon/achievementLevel.interface'

const wall: Wall = {
	name: 'Walls',
	description:
		'Walls are great for keeping your village safe and your enemies in the line of fire.',
	maxCount: 180,
	width: 1,
	height: 1,
	maxLevel: 10,
	townHallDetails: [
		{ townHall: 1, availableCount: 10, maxLevel: 1 },
		{ townHall: 2, availableCount: 20, maxLevel: 3 },
		{ townHall: 3, availableCount: 50, maxLevel: 3 },
		{ townHall: 4, availableCount: 75, maxLevel: 4 },
		{ townHall: 5, availableCount: 100, maxLevel: 5 },
		{ townHall: 6, availableCount: 120, maxLevel: 6 },
		{ townHall: 7, availableCount: 140, maxLevel: 7 },
		{ townHall: 8, availableCount: 160, maxLevel: 8 },
		{ townHall: 9, availableCount: 180, maxLevel: 9 },
		{ townHall: 10, availableCount: 180, maxLevel: 10 },
	],
	achievements: [],
	levels: [
		{
			level: 1,
			hitpoints: 900,
			builderGoldBuildCost: 1000,
			builderGoldCumulativeCost: 1000,
			builderElixirBuildCost: 0,
			builderElixirCumulativeCost: 0,
			wallRingCost: 0,
			townHallLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fb/Wall1B.png/revision/latest/scale-to-width-down/55?cb=20170927102315',
		},
		{
			level: 2,
			hitpoints: 1100,
			builderGoldBuildCost: 2000,
			builderGoldCumulativeCost: 3000,
			builderElixirBuildCost: 0,
			builderElixirCumulativeCost: 0,
			wallRingCost: 1,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/99/Wall2B.png/revision/latest/scale-to-width-down/55?cb=20170927102333',
		},
		{
			level: 3,
			hitpoints: 1300,
			builderGoldBuildCost: 10000,
			builderGoldCumulativeCost: 13000,
			builderElixirBuildCost: 0,
			builderElixirCumulativeCost: 0,
			wallRingCost: 1,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/91/Wall3B.png/revision/latest/scale-to-width-down/55?cb=20170927102352',
		},
		{
			level: 4,
			hitpoints: 1600,
			builderGoldBuildCost: 50000,
			builderGoldCumulativeCost: 63000,
			builderElixirBuildCost: 0,
			builderElixirCumulativeCost: 0,
			wallRingCost: 1,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b6/Wall4B.png/revision/latest/scale-to-width-down/55?cb=20170927102413',
		},
		{
			level: 5,
			hitpoints: 1900,
			builderGoldBuildCost: 150000,
			builderGoldCumulativeCost: 213000,
			builderElixirBuildCost: 0,
			builderElixirCumulativeCost: 0,
			wallRingCost: 1,
			townHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4f/Wall5B.png/revision/latest/scale-to-width-down/55?cb=20170927102434',
		},
		{
			level: 6,
			hitpoints: 2200,
			builderGoldBuildCost: 240000,
			builderGoldCumulativeCost: 453000,
			builderElixirBuildCost: 0,
			builderElixirCumulativeCost: 0,
			wallRingCost: 1,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f3/Wall6B.png/revision/latest/scale-to-width-down/55?cb=20170927102501',
		},
		{
			level: 7,
			hitpoints: 2500,
			builderGoldBuildCost: 400000,
			builderGoldCumulativeCost: 853000,
			builderElixirBuildCost: 400000,
			builderElixirCumulativeCost: 400000,
			wallRingCost: 1,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a2/Wall7B.png/revision/latest/scale-to-width-down/55?cb=20170927102546',
		},
		{
			level: 8,
			hitpoints: 2750,
			builderGoldBuildCost: 600000,
			builderGoldCumulativeCost: 1453000,
			builderElixirBuildCost: 600000,
			builderElixirCumulativeCost: 1000000,
			wallRingCost: 2,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b7/Wall8B.png/revision/latest/scale-to-width-down/55?cb=20170927102606',
		},
		{
			level: 9,
			hitpoints: 3050,
			builderGoldBuildCost: 800000,
			builderGoldCumulativeCost: 2253000,
			builderElixirBuildCost: 800000,
			builderElixirCumulativeCost: 1800000,
			wallRingCost: 2,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/10/Wall9B.png/revision/latest/scale-to-width-down/55?cb=20190616234919',
		},
		{
			level: 10,
			hitpoints: 3350,
			builderGoldBuildCost: 1000000,
			builderGoldCumulativeCost: 3253000,
			builderElixirBuildCost: 1000000,
			builderElixirCumulativeCost: 2800000,
			wallRingCost: 2,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/10/Wall10B.png/revision/latest/scale-to-width-down/55?cb=20230517053328',
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
	getTownHallLevel(level: number): TownHallDefense | undefined {
		if (level >= 1 && level <= this.townHallDetails.length) {
			return this.townHallDetails[level - 1]
		} else {
			console.error(`Invalid Town Hall level: ${level}`)
			return undefined
		}
	},
	getAchievementLevel(level: number, count: number): AchievementLevel | undefined {
		if (level && level >= 1 && level <= this.achievements[0].levels.length) {
			return this.achievements[0].levels[level - 1]
		} else if (count) {
			for (const achievementLevel of this.achievements[0].levels) {
				if (count < achievementLevel.target) {
					return achievementLevel
				}
			}

			return this.achievements[0].levels[this.achievements[0].levels.length - 1]
		} else {
			console.error(`Invalid Achievement level: ${level} or Invalid Count used: ${count}`)
			return undefined
		}
	},
}

export default wall
