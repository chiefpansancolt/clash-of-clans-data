import * as Constants from '@/constants'
import Army from '@IClanCapital/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Super Wizard',
	description:
		"Super Wizard is positively charged with magical energy! He's either the smartest person in the room... or else he blows the whole room to bits.",
	maxLevel: 5,
	housingSpace: 10,
	buildingName: 'Super Wizard Barracks',
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/f/f9/Avatar_Super_Wizard.png/revision/latest/scale-to-width-down/120?cb=20201207184826',
	mode: {
		attackType: Constants.singleTarget,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.none,
		minRange: 0,
		maxRange: 3,
		attackSpeed: 2,
		movementSpeed: 13,
		specialAbility: Constants.chainMagic,
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 160,
			damagePerAttack: 320,
			secondatdChainDamage: 128,
			hitpoints: 600,
			barrackLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d0/Super_Wizard9.png/revision/latest?cb=20201205195307',
		},
		{
			level: 2,
			damagePerSecond: 180,
			damagePerAttack: 360,
			secondatdChainDamage: 144,
			hitpoints: 700,
			barrackLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d0/Super_Wizard9.png/revision/latest?cb=20201205195307',
		},
		{
			level: 3,
			damagePerSecond: 200,
			damagePerAttack: 400,
			secondatdChainDamage: 160,
			hitpoints: 800,
			barrackLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d0/Super_Wizard9.png/revision/latest?cb=20201205195307',
		},
		{
			level: 4,
			damagePerSecond: 220,
			damagePerAttack: 440,
			secondatdChainDamage: 176,
			hitpoints: 900,
			barrackLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d0/Super_Wizard9.png/revision/latest?cb=20201205195307',
		},
		{
			level: 5,
			damagePerSecond: 240,
			damagePerAttack: 480,
			secondatdChainDamage: 192,
			hitpoints: 1000,
			barrackLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d0/Super_Wizard9.png/revision/latest?cb=20201205195307',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
