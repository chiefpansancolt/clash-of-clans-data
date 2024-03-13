import * as Constants from '@/constants'
import Army from '@IClanCapital/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Super Miner',
	description:
		'Armed with a powerful drill and a magnificent moustache, Super Miner is ready to undermine any rival Village!',
	maxLevel: 4,
	housingSpace: 25,
	buildingName: 'Super Miner Barracks',
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/b/b3/Avatar_Super_Miner.png/revision/latest/scale-to-width-down/120?cb=20221212211242',
	mode: {
		attackType: Constants.singleTarget,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.any,
		minRange: 0,
		maxRange: 0.6,
		attackSpeed: 0.25,
		movementSpeed: 24,
		specialAbility: Constants.lastBlast,
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 160,
			damagePerSecondAfter15: 340,
			damagePerSecondAfter3: 630,
			damageUponDeath: 1400,
			hitpoints: 3300,
			barrackLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/64/Super_Miner7.png/revision/latest/scale-to-width-down/100?cb=20221212210817',
		},
		{
			level: 2,
			damagePerSecond: 170,
			damagePerSecondAfter15: 370,
			damagePerSecondAfter3: 660,
			damageUponDeath: 1700,
			hitpoints: 3500,
			barrackLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/64/Super_Miner7.png/revision/latest/scale-to-width-down/100?cb=20221212210817',
		},
		{
			level: 3,
			damagePerSecond: 180,
			damagePerSecondAfter15: 400,
			damagePerSecondAfter3: 690,
			damageUponDeath: 2000,
			hitpoints: 3700,
			barrackLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/64/Super_Miner7.png/revision/latest/scale-to-width-down/100?cb=20221212210817',
		},
		{
			level: 4,
			damagePerSecond: 190,
			damagePerSecondAfter15: 430,
			damagePerSecondAfter3: 720,
			damageUponDeath: 2300,
			hitpoints: 3900,
			barrackLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/64/Super_Miner7.png/revision/latest/scale-to-width-down/100?cb=20221212210817',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
