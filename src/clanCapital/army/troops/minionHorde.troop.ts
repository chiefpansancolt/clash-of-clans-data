import * as Constants from '@/constants'
import Army from '@IClanCapital/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Minion Horde',
	description: "Six fast, unarmored flying attackers. Three's a crowd, six is a horde!",
	maxLevel: 5,
	housingSpace: 10,
	buildingName: 'Minion Barracks',
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/1/10/Avatar_Minion_Horde.png/revision/latest/scale-to-width-down/120?cb=20220811090944',
	mode: {
		attackType: Constants.ranged,
		unitTypeTarget: Constants.groundAndAir,
		preferredTarget: Constants.none,
		minRange: 0,
		maxRange: 1.5,
		attackSpeed: 1,
		movementSpeed: 24,
		troopCount: 6,
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 56,
			damagePerAttack: 56,
			hitpoints: 60,
			barrackLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/94/Minion1.png/revision/latest?cb=20171007153257',
		},
		{
			level: 2,
			damagePerSecond: 62,
			damagePerAttack: 62,
			hitpoints: 70,
			barrackLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/94/Minion1.png/revision/latest?cb=20171007153257',
		},
		{
			level: 3,
			damagePerSecond: 68,
			damagePerAttack: 68,
			hitpoints: 80,
			barrackLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/94/Minion1.png/revision/latest?cb=20171007153257',
		},
		{
			level: 4,
			damagePerSecond: 74,
			damagePerAttack: 74,
			hitpoints: 90,
			barrackLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/94/Minion1.png/revision/latest?cb=20171007153257',
		},
		{
			level: 5,
			damagePerSecond: 80,
			damagePerAttack: 80,
			hitpoints: 100,
			barrackLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/94/Minion1.png/revision/latest?cb=20171007153257',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
