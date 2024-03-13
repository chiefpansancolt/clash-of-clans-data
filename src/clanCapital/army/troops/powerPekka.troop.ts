import * as Constants from '@/constants'
import Army from '@IClanCapital/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Power P.E.K.K.A',
	description: 'Unstable energy radiates from this powerful suit of dark armor, waiting to be unleashed!',
	maxLevel: 5,
	housingSpace: 40,
	buildingName: 'Power P.E.K.K.A Barracks',
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/3/3b/Avatar_Power_P.E.K.K.A.png/revision/latest/scale-to-width-down/120?cb=20200913200749',
	mode: {
		attackType: Constants.singleTarget,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.any,
		minRange: 0,
		maxRange: 1,
		attackSpeed: 1.8,
		movementSpeed: 12,
		specialAbility: Constants.overcharge,
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 680,
			damagePerAttack: 1224,
			damageUponDeath: 1000,
			hitpoints: 6800,
			barrackLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/cc/Power_P.E.K.K.A1.png/revision/latest?cb=20210128080909',
		},
		{
			level: 2,
			damagePerSecond: 760,
			damagePerAttack: 1368,
			damageUponDeath: 1200,
			hitpoints: 7600,
			barrackLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/cc/Power_P.E.K.K.A1.png/revision/latest?cb=20210128080909',
		},
		{
			level: 3,
			damagePerSecond: 840,
			damagePerAttack: 1512,
			damageUponDeath: 1400,
			hitpoints: 8500,
			barrackLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/cc/Power_P.E.K.K.A1.png/revision/latest?cb=20210128080909',
		},
		{
			level: 4,
			damagePerSecond: 920,
			damagePerAttack: 1656,
			damageUponDeath: 1600,
			hitpoints: 9400,
			barrackLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/cc/Power_P.E.K.K.A1.png/revision/latest?cb=20210128080909',
		},
		{
			level: 5,
			damagePerSecond: 1000,
			damagePerAttack: 1800,
			damageUponDeath: 1800,
			hitpoints: 10300,
			barrackLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/cc/Power_P.E.K.K.A1.png/revision/latest?cb=20210128080909',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
