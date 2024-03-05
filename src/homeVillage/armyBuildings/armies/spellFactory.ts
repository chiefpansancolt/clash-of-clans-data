import * as Constants from '@/constants'
import ArmyBuilding from '@IHomeVillage/army/army.interface'
import { getHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: ArmyBuilding = {
	name: 'Spell Factory',
	description:
		'The Spell Factory is home to veteran Wizards who are better suited to creating magical weapons than front-line combat. Use their powerful Attack Spells to turn the tide of a battle in your favor!',
	maxCount: 1,
	width: 3,
	height: 3,
	maxLevel: 7,
	townHallDetails: [
		{ townHallLevel: 1, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 2, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 3, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 4, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 5, availableCount: 1, maxLevel: 1 },
		{ townHallLevel: 6, availableCount: 1, maxLevel: 2 },
		{ townHallLevel: 7, availableCount: 1, maxLevel: 3 },
		{ townHallLevel: 8, availableCount: 1, maxLevel: 3 },
		{ townHallLevel: 9, availableCount: 1, maxLevel: 4 },
		{ townHallLevel: 10, availableCount: 1, maxLevel: 5 },
		{ townHallLevel: 11, availableCount: 1, maxLevel: 6 },
		{ townHallLevel: 12, availableCount: 1, maxLevel: 6 },
		{ townHallLevel: 13, availableCount: 1, maxLevel: 7 },
		{ townHallLevel: 14, availableCount: 1, maxLevel: 7 },
		{ townHallLevel: 15, availableCount: 1, maxLevel: 7 },
		{ townHallLevel: 16, availableCount: 1, maxLevel: 7 },
	],
	levels: [
		{
			level: 1,
			hitpoints: 425,
			unlockedUnit: 'Lightning Spell',
			capacity: 2,
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
			unlockedUnit: 'Healing Spell',
			capacity: 4,
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
			unlockedUnit: 'Rage Spell',
			capacity: 6,
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
			unlockedUnit: ['Jump Spell', 'Freeze Spell'],
			capacity: 8,
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
			unlockedUnit: 'Clone Spell',
			capacity: 10,
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
			unlockedUnit: 'Invisibility Spell',
			capacity: 10,
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
			unlockedUnit: 'Recall Spell',
			capacity: 10,
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
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getTownHallLevel: (level: number) => getHallLevel(building.townHallDetails, level, 'townHallLevel'),
}

export default building
