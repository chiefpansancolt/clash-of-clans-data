import * as Constants from '@/constants'
import Army from '@IClanCapital/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Super Giant',
	description:
		'Super Giants are bigger than their ordinary cousins and are great at punching their way through walls. The belt is from the annual village eating contest.',
	maxLevel: 5,
	housingSpace: 10,
	buildingName: 'Super Giant Barracks',
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/6/6b/Avatar_Super_Giant.png/revision/latest/scale-to-width-down/120?cb=20200913075731',
	mode: {
		attackType: Constants.melee,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.defenses,
		minRange: 0,
		maxRange: 0.75,
		attackSpeed: 2,
		movementSpeed: 9,
		specialAbility: Constants.wallBuster,
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 100,
			damagePerAttack: 200,
			damageVsWalls: 1000,
			hitpoints: 3000,
			barrackLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/71/Sneaky_Archer1.png/revision/latest?cb=20170709085228',
		},
		{
			level: 2,
			damagePerSecond: 110,
			damagePerAttack: 220,
			damageVsWalls: 1100,
			hitpoints: 3300,
			barrackLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/71/Sneaky_Archer1.png/revision/latest?cb=20170709085228',
		},
		{
			level: 3,
			damagePerSecond: 120,
			damagePerAttack: 240,
			damageVsWalls: 1200,
			hitpoints: 3600,
			barrackLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/71/Sneaky_Archer1.png/revision/latest?cb=20170709085228',
		},
		{
			level: 4,
			damagePerSecond: 130,
			damagePerAttack: 260,
			damageVsWalls: 1300,
			hitpoints: 4000,
			barrackLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/71/Sneaky_Archer1.png/revision/latest?cb=20170709085228',
		},
		{
			level: 5,
			damagePerSecond: 140,
			damagePerAttack: 280,
			damageVsWalls: 1400,
			hitpoints: 4400,
			barrackLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/71/Sneaky_Archer1.png/revision/latest?cb=20170709085228',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
