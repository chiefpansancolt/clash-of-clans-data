import * as Constants from '@/constants'
import Army from '@IClanCapital/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Barbarian',
	description: 'Spawned from either the Battle Ram or Siege Cart',
	maxLevel: 5,
	mode: {
		attackType: Constants.melee,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.any,
		minRange: 0,
		maxRange: 0.4,
		attackSpeed: 1,
		movementSpeed: 12,
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 25,
			damagePerAttack: 25,
			hitpoints: 150,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d1/Barbarian1.png/revision/latest?cb=20171006161720',
		},
		{
			level: 2,
			damagePerSecond: 30,
			damagePerAttack: 30,
			hitpoints: 175,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d1/Barbarian1.png/revision/latest?cb=20171006161720',
		},
		{
			level: 3,
			damagePerSecond: 35,
			damagePerAttack: 35,
			hitpoints: 200,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d1/Barbarian1.png/revision/latest?cb=20171006161720',
		},
		{
			level: 4,
			damagePerSecond: 40,
			damagePerAttack: 40,
			hitpoints: 225,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d1/Barbarian1.png/revision/latest?cb=20171006161720',
		},
		{
			level: 5,
			damagePerSecond: 45,
			damagePerAttack: 45,
			hitpoints: 250,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d1/Barbarian1.png/revision/latest?cb=20171006161720',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
