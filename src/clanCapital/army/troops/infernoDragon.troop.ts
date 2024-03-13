import * as Constants from '@/constants'
import Army from '@IClanCapital/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Inferno Dragon',
	description:
		'Not getting upset over being alone anymore, the Inferno Dragon has learned to focus its rage into a very powerful beam that builds up over time!',
	maxLevel: 4,
	housingSpace: 15,
	buildingName: 'Inferno Dragon Barracks',
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/0/0b/Avatar_Inferno_Dragon.png/revision/latest/scale-to-width-down/120?cb=20200913075841',
	mode: {
		attackType: Constants.singleTarget,
		unitTypeTarget: Constants.groundAndAir,
		preferredTarget: Constants.any,
		minRange: 0,
		maxRange: 3,
		attackSpeed: 0.128,
		movementSpeed: 13,
		specialAbility: Constants.infernoBeam,
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 65,
			damagePerSecondAfter17: 130,
			damagePerSecondAfter32: 1300,
			hitpoints: 1700,
			barrackLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b8/Inferno_Dragon6.png/revision/latest/scale-to-width-down/100?cb=20200630111528',
		},
		{
			level: 2,
			damagePerSecond: 70,
			damagePerSecondAfter17: 140,
			damagePerSecondAfter32: 1400,
			hitpoints: 1900,
			barrackLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b8/Inferno_Dragon6.png/revision/latest/scale-to-width-down/100?cb=20200630111528',
		},
		{
			level: 3,
			damagePerSecond: 75,
			damagePerSecondAfter17: 150,
			damagePerSecondAfter32: 1500,
			hitpoints: 2100,
			barrackLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b8/Inferno_Dragon6.png/revision/latest/scale-to-width-down/100?cb=20200630111528',
		},
		{
			level: 4,
			damagePerSecond: 80,
			damagePerSecondAfter17: 160,
			damagePerSecondAfter32: 1600,
			hitpoints: 2300,
			barrackLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b8/Inferno_Dragon6.png/revision/latest/scale-to-width-down/100?cb=20200630111528',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
