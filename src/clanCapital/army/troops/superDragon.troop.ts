import * as Constants from '@/constants'
import Army from '@IClanCapital/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Super Dragon',
	description:
		"Sometimes having a fire inside of you isn't enough. The Super Dragon has fires on the inside, outside, and if he gets to do his thing, all around him!",
	maxLevel: 5,
	housingSpace: 40,
	buildingName: 'Super Dragon Barracks',
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/0/0f/Avatar_Super_Dragon.png/revision/latest/scale-to-width-down/120?cb=20211209194802',
	mode: {
		attackType: Constants.areaSplash,
		unitTypeTarget: Constants.groundAndAir,
		preferredTarget: Constants.none,
		minRange: 0,
		maxRange: 4.5,
		attackSpeed: 1.8,
		movementSpeed: 10,
		specialAbility: Constants.roast,
		timeBetweenSots: 0.192,
		timeBetweenBursts: 1.8,
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 400,
			damagePerAttack: 151.2,
			hitpoints: 5800,
			barrackLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c4/Super_Dragon7.png/revision/latest/scale-to-width-down/120?cb=20211209195922',
		},
		{
			level: 2,
			damagePerSecond: 438,
			damagePerAttack: 165.6,
			hitpoints: 6300,
			barrackLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c4/Super_Dragon7.png/revision/latest/scale-to-width-down/120?cb=20211209195922',
		},
		{
			level: 3,
			damagePerSecond: 476,
			damagePerAttack: 180,
			hitpoints: 6800,
			barrackLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c4/Super_Dragon7.png/revision/latest/scale-to-width-down/120?cb=20211209195922',
		},
		{
			level: 4,
			damagePerSecond: 514,
			damagePerAttack: 194.4,
			hitpoints: 7200,
			barrackLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c4/Super_Dragon7.png/revision/latest/scale-to-width-down/120?cb=20211209195922',
		},
		{
			level: 5,
			damagePerSecond: 552,
			damagePerAttack: 208.8,
			hitpoints: 7600,
			barrackLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c4/Super_Dragon7.png/revision/latest/scale-to-width-down/120?cb=20211209195922',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
