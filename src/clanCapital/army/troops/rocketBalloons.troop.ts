import * as Constants from '@/constants'
import Army from '@IClanCapital/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Rocket Ballons',
	description:
		"When terrain is working against you, a swarm of Rocket Balloons can probably get the job done... if their boosters don't run out first.",
	maxLevel: 5,
	housingSpace: 15,
	buildingName: 'Rocket Balloon Barracks',
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/8/8b/Avatar_Rocket_Balloons.png/revision/latest/scale-to-width-down/120?cb=20220811090946',
	mode: {
		attackType: Constants.areaSplash,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.defenses,
		minRange: 0,
		maxRange: 1,
		attackSpeed: 3,
		movementSpeed: 9,
		specialAbility: Constants.boosters,
		troopCount: 2,
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 175,
			damagePerAttack: 525,
			damageUponDeath: 400,
			hitpoints: 720,
			barrackLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/3f/Rocket_Balloon8.png/revision/latest/scale-to-width-down/100?cb=20210731070454',
		},
		{
			level: 2,
			damagePerSecond: 200,
			damagePerAttack: 600,
			damageUponDeath: 450,
			hitpoints: 800,
			barrackLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/3f/Rocket_Balloon8.png/revision/latest/scale-to-width-down/100?cb=20210731070454',
		},
		{
			level: 3,
			damagePerSecond: 225,
			damagePerAttack: 675,
			damageUponDeath: 500,
			hitpoints: 880,
			barrackLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/3f/Rocket_Balloon8.png/revision/latest/scale-to-width-down/100?cb=20210731070454',
		},
		{
			level: 4,
			damagePerSecond: 250,
			damagePerAttack: 750,
			damageUponDeath: 550,
			hitpoints: 960,
			barrackLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/3f/Rocket_Balloon8.png/revision/latest/scale-to-width-down/100?cb=20210731070454',
		},
		{
			level: 5,
			damagePerSecond: 275,
			damagePerAttack: 825,
			damageUponDeath: 600,
			hitpoints: 1040,
			barrackLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/3f/Rocket_Balloon8.png/revision/latest/scale-to-width-down/100?cb=20210731070454',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
