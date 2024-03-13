import * as Constants from '@/constants'
import Army from '@IClanCapital/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Mountain Golem',
	description:
		'This monstrous mountain may move as slow as molasses, but do not underestimate his mineralized mitts. Mountain Golem mauls his enemies with the might of...well...a mountain. Literally.',
	maxLevel: 5,
	housingSpace: 160,
	buildingName: 'Mountain Golem Barracks',
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/c/c8/Avatar_Mountain_Golem.png/revision/latest/scale-to-width-down/120?cb=20220811090945',
	mode: {
		attackType: Constants.splash,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.any,
		minRange: 0,
		maxRange: 2,
		attackSpeed: 3,
		movementSpeed: 6,
		specialAbility: Constants.crush,
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 800,
			damagePerAttack: 2400,
			damageUponDeath: 300,
			hitpoints: 30000,
			barrackLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/23/Mountain_Golem1.png/revision/latest/scale-to-width-down/150?cb=20220504101933',
		},
		{
			level: 2,
			damagePerSecond: 900,
			damagePerAttack: 2700,
			damageUponDeath: 350,
			hitpoints: 33500,
			barrackLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/23/Mountain_Golem1.png/revision/latest/scale-to-width-down/150?cb=20220504101933',
		},
		{
			level: 3,
			damagePerSecond: 1000,
			damagePerAttack: 3000,
			damageUponDeath: 400,
			hitpoints: 37000,
			barrackLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/23/Mountain_Golem1.png/revision/latest/scale-to-width-down/150?cb=20220504101933',
		},
		{
			level: 4,
			damagePerSecond: 1100,
			damagePerAttack: 3300,
			damageUponDeath: 450,
			hitpoints: 40500,
			barrackLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/23/Mountain_Golem1.png/revision/latest/scale-to-width-down/150?cb=20220504101933',
		},
		{
			level: 5,
			damagePerSecond: 1200,
			damagePerAttack: 3600,
			damageUponDeath: 500,
			hitpoints: 44000,
			barrackLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/23/Mountain_Golem1.png/revision/latest/scale-to-width-down/150?cb=20220504101933',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
