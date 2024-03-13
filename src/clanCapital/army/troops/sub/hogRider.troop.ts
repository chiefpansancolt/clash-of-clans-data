import * as Constants from '@/constants'
import Army from '@IClanCapital/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Hog Rider',
	description:
		'Lose the Glider, and you are left with two original daredevils. This dynamic duo also has zero problems getting over walls.',
	maxLevel: 5,
	mode: {
		attackType: Constants.melee,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.defenses,
		minRange: 0,
		maxRange: 0.75,
		attackSpeed: 1,
		movementSpeed: 20,
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 130,
			damagePerAttack: 130,
			hitpoints: 880,
			barrackLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a5/Hog_Rider1.png/revision/latest?cb=20230613101441',
		},
		{
			level: 2,
			damagePerSecond: 145,
			damagePerAttack: 145,
			hitpoints: 960,
			barrackLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a5/Hog_Rider1.png/revision/latest?cb=20230613101441',
		},
		{
			level: 3,
			damagePerSecond: 160,
			damagePerAttack: 160,
			hitpoints: 1040,
			barrackLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a5/Hog_Rider1.png/revision/latest?cb=20230613101441',
		},
		{
			level: 4,
			damagePerSecond: 175,
			damagePerAttack: 175,
			hitpoints: 1120,
			barrackLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a5/Hog_Rider1.png/revision/latest?cb=20230613101441',
		},
		{
			level: 5,
			damagePerSecond: 190,
			damagePerAttack: 190,
			hitpoints: 1200,
			barrackLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a5/Hog_Rider1.png/revision/latest?cb=20230613101441',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
