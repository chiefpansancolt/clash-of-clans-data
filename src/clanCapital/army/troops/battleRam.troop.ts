import * as Constants from '@/constants'
import Army from '@IClanCapital/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'
import Barbarian from '@ClanCapital/army/troops/sub/barbarian.troop'

const troop: Army = {
	name: 'Battle Ram',
	description:
		'Four Barbarians holding a big log race ahead to batter down their target, dealing big bonus damage if they connect; then they fight on with their swords!',
	maxLevel: 5,
	housingSpace: 5,
	buildingName: 'Battle Ram Barracks',
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/e/e6/Avatar_Battle_Ram.png/revision/latest/scale-to-width-down/120?cb=20200913074930',
	mode: {
		attackType: Constants.areaSplash,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.walls,
		minRange: 0,
		maxRange: 0.75,
		attackSpeed: 0.75,
		movementSpeed: 16,
		troopCount: 4,
	},
	levels: [
		{
			level: 1,
			damagePerAttack: 125,
			damageVsWalls: 5000,
			hitpoints: 800,
			barrackLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e4/Battle_Ram1.png/revision/latest/scale-to-width-down/80?cb=20170804124817',
		},
		{
			level: 2,
			damagePerAttack: 163,
			damageVsWalls: 6520,
			hitpoints: 900,
			barrackLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e4/Battle_Ram1.png/revision/latest/scale-to-width-down/80?cb=20170804124817',
		},
		{
			level: 3,
			damagePerAttack: 200,
			damageVsWalls: 8000,
			hitpoints: 1000,
			barrackLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e4/Battle_Ram1.png/revision/latest/scale-to-width-down/80?cb=20170804124817',
		},
		{
			level: 4,
			damagePerAttack: 238,
			damageVsWalls: 9520,
			hitpoints: 1100,
			barrackLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e4/Battle_Ram1.png/revision/latest/scale-to-width-down/80?cb=20170804124817',
		},
		{
			level: 5,
			damagePerAttack: 275,
			damageVsWalls: 11000,
			hitpoints: 1200,
			barrackLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e4/Battle_Ram1.png/revision/latest/scale-to-width-down/80?cb=20170804124817',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export { troop, Barbarian }
