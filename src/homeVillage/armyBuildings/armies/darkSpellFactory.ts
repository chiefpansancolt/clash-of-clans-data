import * as Constants from '@/constants'
import Building from '@IHomeVillage/army/darkSpellFactory/army.interface'
import Level from '@IHomeVillage/army/darkSpellFactory/level.interface'
import TownHallDetails from '@ICommon/hall/details.interface'

const darkSpellFactory: Building = {
	name: 'Dark Spell Factory',
	description:
		'Only the most brilliant or reckless Master Wizards dabble in Dark Elixir brewery. Their compact Dark Spells require keen insight to master, but provide unique tactical advantages.',
	maxCount: 1,
	width: 3,
	height: 3,
	maxLevel: 5,
	townHallDetails: [
		{ townHall: 1, availableCount: 0, maxLevel: 0 },
		{ townHall: 2, availableCount: 0, maxLevel: 0 },
		{ townHall: 3, availableCount: 0, maxLevel: 0 },
		{ townHall: 4, availableCount: 0, maxLevel: 0 },
		{ townHall: 5, availableCount: 0, maxLevel: 0 },
		{ townHall: 6, availableCount: 0, maxLevel: 0 },
		{ townHall: 7, availableCount: 0, maxLevel: 0 },
		{ townHall: 8, availableCount: 1, maxLevel: 2 },
		{ townHall: 9, availableCount: 1, maxLevel: 4 },
		{ townHall: 10, availableCount: 1, maxLevel: 5 },
		{ townHall: 11, availableCount: 1, maxLevel: 5 },
		{ townHall: 12, availableCount: 1, maxLevel: 5 },
		{ townHall: 13, availableCount: 1, maxLevel: 5 },
		{ townHall: 14, availableCount: 1, maxLevel: 5 },
		{ townHall: 15, availableCount: 1, maxLevel: 5 },
		{ townHall: 16, availableCount: 1, maxLevel: 5 },
	],
	achievement: [],
	levels: [
		{
			level: 1,
			hitpoints: 600,
			spellUnlocked: 'Poison Spell',
			spellStorageCapacity: 1,
			buildCost: 130000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 6,
			buildTimeDay: 0,
			exp: 146,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/3e/Dark_Spell_Factory1.png/revision/latest/scale-to-width-down/110?cb=20200925094341',
			activeImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b1/Dark_Spell_Factory1_Active.png/revision/latest/scale-to-width-down/110?cb=20200925094758',
		},
		{
			level: 2,
			hitpoints: 660,
			spellUnlocked: 'Earthquake Spell',
			spellStorageCapacity: 1,
			buildCost: 260000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 18,
			buildTimeDay: 0,
			exp: 254,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/9a/Dark_Spell_Factory2.png/revision/latest/scale-to-width-down/110?cb=20200925094432',
			activeImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a8/Dark_Spell_Factory2_Active.png/revision/latest/scale-to-width-down/110?cb=20200925094759',
		},
		{
			level: 3,
			hitpoints: 720,
			spellUnlocked: 'Haste Spell',
			spellStorageCapacity: 1,
			buildCost: 600000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/91/Dark_Spell_Factory3.png/revision/latest/scale-to-width-down/110?cb=20200925094452',
			activeImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f2/Dark_Spell_Factory3_Active.png/revision/latest/scale-to-width-down/110?cb=20200925094759',
		},
		{
			level: 4,
			hitpoints: 780,
			spellUnlocked: 'Skeleton Spell',
			spellStorageCapacity: 1,
			buildCost: 1200000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 4,
			exp: 587,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/cf/Dark_Spell_Factory4.png/revision/latest/scale-to-width-down/110?cb=20200925094521',
			activeImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b3/Dark_Spell_Factory4_Active.png/revision/latest/scale-to-width-down/110?cb=20200925094800',
		},
		{
			level: 5,
			hitpoints: 840,
			spellUnlocked: 'Bat Spell',
			spellStorageCapacity: 1,
			buildCost: 2500000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 6,
			exp: 720,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/27/Dark_Spell_Factory5.png/revision/latest/scale-to-width-down/110?cb=20200925095051',
			activeImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/ac/Dark_Spell_Factory5_Active.png/revision/latest/scale-to-width-down/110?cb=20200925094800',
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

export default darkSpellFactory
