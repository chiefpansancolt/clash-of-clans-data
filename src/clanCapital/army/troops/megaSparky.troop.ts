import * as Constants from '@/constants'
import Army from '@IClanCapital/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Mega Sparky',
	description:
		'With no fear, this seemingly unstoppable machine, slowly but surely, takes out defenses with thunderous electrical shockwaves. Will the nightmare never end?',
	maxLevel: 4,
	housingSpace: 100,
	buildingName: 'Mega Sparky Workshop',
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/9/9e/Avatar_Mega_Sparky.png/revision/latest/scale-to-width-down/120?cb=20231210015633',
	mode: {
		attackType: Constants.areaSplash,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.defenses,
		minRange: 0,
		maxRange: 4,
		attackSpeed: 4,
		movementSpeed: 8,
		tiles: 3,
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 400,
			damagePerAttack: 1600,
			hitpoints: 10000,
			barrackLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ed/Mega_Sparky1.png/revision/latest/scale-to-width-down/100?cb=20231212001010',
		},
		{
			level: 2,
			damagePerSecond: 450,
			damagePerAttack: 1800,
			hitpoints: 11200,
			barrackLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ed/Mega_Sparky1.png/revision/latest/scale-to-width-down/100?cb=20231212001010',
		},
		{
			level: 3,
			damagePerSecond: 500,
			damagePerAttack: 2000,
			hitpoints: 12400,
			barrackLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ed/Mega_Sparky1.png/revision/latest/scale-to-width-down/100?cb=20231212001010',
		},
		{
			level: 4,
			damagePerSecond: 550,
			damagePerAttack: 2200,
			hitpoints: 13600,
			barrackLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ed/Mega_Sparky1.png/revision/latest/scale-to-width-down/100?cb=20231212001010',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
