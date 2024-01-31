import * as Constants from '@/constants'
import Building from '@IHomeVillage/army/spellFactory/army.interface'
import Level from '@IHomeVillage/army/spellFactory/level.interface'
import TownHallDetails from '@ICommon/hall/details.interface'

const spellFactory: Building = {
	name: 'Spell Factory',
	description:
		'The Spell Factory is home to veteran Wizards who are better suited to creating magical weapons than front-line combat. Use their powerful Attack Spells to turn the tide of a battle in your favor!',
	maxCount: 1,
	width: 3,
	height: 3,
	maxLevel: 7,
	townHallDetails: [
		{ townHall: 1, availableCount: 0, maxLevel: 0 },
		{ townHall: 2, availableCount: 0, maxLevel: 0 },
		{ townHall: 3, availableCount: 0, maxLevel: 0 },
		{ townHall: 4, availableCount: 0, maxLevel: 0 },
		{ townHall: 5, availableCount: 1, maxLevel: 1 },
		{ townHall: 6, availableCount: 1, maxLevel: 2 },
		{ townHall: 7, availableCount: 1, maxLevel: 3 },
		{ townHall: 8, availableCount: 1, maxLevel: 3 },
		{ townHall: 9, availableCount: 1, maxLevel: 4 },
		{ townHall: 10, availableCount: 1, maxLevel: 5 },
		{ townHall: 11, availableCount: 1, maxLevel: 6 },
		{ townHall: 12, availableCount: 1, maxLevel: 6 },
		{ townHall: 13, availableCount: 1, maxLevel: 7 },
		{ townHall: 14, availableCount: 1, maxLevel: 7 },
		{ townHall: 15, availableCount: 1, maxLevel: 7 },
		{ townHall: 16, availableCount: 1, maxLevel: 7 },
	],
	achievement: [],
	levels: [
		{
			level: 1,
			hitpoints: 425,
			spellUnlocked: 'Lightning Spell',
			spellStorageCapacity: 2,
			buildCost: 150000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 8,
			buildTimeDay: 0,
			exp: 169,
			townHallLevelRequired: 5,
			activeImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e4/Spell_Factory1_Active.png/revision/latest/scale-to-width-down/110?cb=20210116211357',
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/ca/Spell_Factory1.png/revision/latest/scale-to-width-down/110?cb=20210116211444',
		},
		{
			level: 2,
			hitpoints: 470,
			spellUnlocked: 'Healing Spell',
			spellStorageCapacity: 4,
			buildCost: 300000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			townHallLevelRequired: 6,
			activeImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/34/Spell_Factory2_Active.png/revision/latest/scale-to-width-down/110?cb=20210116211321',
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/07/Spell_Factory2.png/revision/latest/scale-to-width-down/110?cb=20210116211512',
		},
		{
			level: 3,
			hitpoints: 520,
			spellUnlocked: 'Rage Spell',
			spellStorageCapacity: 6,
			buildCost: 600000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 7,
			activeImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/01/Spell_Factory3_Active.png/revision/latest/scale-to-width-down/110?cb=20210116211253',
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/af/Spell_Factory3.png/revision/latest/scale-to-width-down/110?cb=20210116211541',
		},
		{
			level: 4,
			hitpoints: 600,
			spellUnlocked: ['Jump Spell', 'Freeze Spell'],
			spellStorageCapacity: 8,
			buildCost: 1200000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 3,
			exp: 549,
			townHallLevelRequired: 9,
			activeImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a3/Spell_Factory4_Active.png/revision/latest/scale-to-width-down/110?cb=20210116211210',
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/42/Spell_Factory4.png/revision/latest/scale-to-width-down/110?cb=20210116211640',
		},
		{
			level: 5,
			hitpoints: 720,
			spellUnlocked: 'Clone Spell',
			spellStorageCapacity: 10,
			buildCost: 2000000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 6,
			buildTimeDay: 4,
			exp: 605,
			townHallLevelRequired: 10,
			activeImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/2a/Spell_Factory5_Active.png/revision/latest/scale-to-width-down/110?cb=20201208061420',
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4c/Spell_Factory5.png/revision/latest/scale-to-width-down/110?cb=20201208061541',
		},
		{
			level: 6,
			hitpoints: 840,
			spellUnlocked: 'Invisibility Spell',
			spellStorageCapacity: 10,
			buildCost: 3500000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 5,
			exp: 657,
			townHallLevelRequired: 11,
			activeImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/9c/Spell_Factory6_Active.png/revision/latest/scale-to-width-down/110?cb=20201208061506',
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c1/Spell_Factory6.png/revision/latest/scale-to-width-down/110?cb=20201208033430',
		},
		{
			level: 7,
			hitpoints: 960,
			spellUnlocked: 'Recall Spell',
			spellStorageCapacity: 10,
			buildCost: 9000000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 8,
			exp: 831,
			townHallLevelRequired: 13,
			activeImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6b/Spell_Factory7_Active.png/revision/latest/scale-to-width-down/110?cb=20221125050025',
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/aa/Spell_Factory7.png/revision/latest/scale-to-width-down/110?cb=20221125050011',
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

export default spellFactory
