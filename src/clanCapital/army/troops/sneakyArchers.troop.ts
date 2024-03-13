import * as Constants from '@/constants'
import Army from '@IClanCapital/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Sneaky Archers',
	description:
		'A squad of stealthy Archers is a surefire way to take out important targets. Until they get revealed, that is.',
	maxLevel: 5,
	housingSpace: 10,
	buildingName: 'Sneaky Archer Barracks',
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/c/ca/Avatar_Sneaky_Archers.png/revision/latest/scale-to-width-down/120?cb=20220811090948',
	mode: {
		attackType: Constants.ranged,
		unitTypeTarget: Constants.groundAndAir,
		preferredTarget: Constants.none,
		minRange: 0,
		maxRange: 2.75,
		attackSpeed: 1,
		movementSpeed: 14,
		specialAbility: Constants.cloak,
		troopCount: 5,
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 60,
			damagePerAttack: 60,
			hitpoints: 100,
			barrackLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/71/Sneaky_Archer1.png/revision/latest?cb=20170709085228',
		},
		{
			level: 2,
			damagePerSecond: 64,
			damagePerAttack: 64,
			hitpoints: 120,
			barrackLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/71/Sneaky_Archer1.png/revision/latest?cb=20170709085228',
		},
		{
			level: 3,
			damagePerSecond: 68,
			damagePerAttack: 68,
			hitpoints: 140,
			barrackLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/71/Sneaky_Archer1.png/revision/latest?cb=20170709085228',
		},
		{
			level: 4,
			damagePerSecond: 71,
			damagePerAttack: 71,
			hitpoints: 160,
			barrackLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/71/Sneaky_Archer1.png/revision/latest?cb=20170709085228',
		},
		{
			level: 5,
			damagePerSecond: 74,
			damagePerAttack: 74,
			hitpoints: 180,
			barrackLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/71/Sneaky_Archer1.png/revision/latest?cb=20170709085228',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
