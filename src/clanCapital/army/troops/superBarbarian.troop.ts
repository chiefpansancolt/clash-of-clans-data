import * as Constants from '@/constants'
import Army from '@IClanCapital/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Super Barbarian',
	description:
		'Superior in health, power, speed and most importantly, hair, the Super Barbarians are what regular Barbarians dream of becoming!',
	maxLevel: 5,
	housingSpace: 5,
	buildingName: 'Super Barbarian Barracks',
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/8/81/Avatar_Super_Barbarian.png/revision/latest/scale-to-width-down/120?cb=20200913075458',
	mode: {
		attackType: Constants.melee,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.none,
		minRange: 0,
		maxRange: 0.45,
		attackSpeed: 0.8,
		movementSpeed: 14,
		specialAbility: Constants.rage,
		rageMovementIncrease: 16,
		rageDamageIncrease: 70,
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 120,
			damagePerAttack: 96,
			hitpoints: 800,
			barrackLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/06/Spirit_Fox_field.png/revision/latest/scale-to-width-down/100?cb=20231211145946',
		},
		{
			level: 2,
			damagePerSecond: 140,
			damagePerAttack: 112,
			hitpoints: 900,
			barrackLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/06/Spirit_Fox_field.png/revision/latest/scale-to-width-down/100?cb=20231211145946',
		},
		{
			level: 3,
			damagePerSecond: 160,
			damagePerAttack: 128,
			hitpoints: 1000,
			barrackLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/06/Spirit_Fox_field.png/revision/latest/scale-to-width-down/100?cb=20231211145946',
		},
		{
			level: 4,
			damagePerSecond: 180,
			damagePerAttack: 144,
			hitpoints: 1120,
			barrackLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/06/Spirit_Fox_field.png/revision/latest/scale-to-width-down/100?cb=20231211145946',
		},
		{
			level: 5,
			damagePerSecond: 200,
			damagePerAttack: 160,
			hitpoints: 1240,
			barrackLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/06/Spirit_Fox_field.png/revision/latest/scale-to-width-down/100?cb=20231211145946',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
