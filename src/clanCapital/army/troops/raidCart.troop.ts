import * as Constants from '@/constants'
import Army from '@IClanCapital/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'
import Barbarian from '@ClanCapital/army/troops/sub/barbarian.troop'

const troop: Army = {
	name: 'Raid Cart',
	description:
		'Another Cannon on wheels?! It might lack the element of surprise, but makes up for it with lots of bulk, added firepower and an escort of rowdy Barbarians!',
	maxLevel: 5,
	housingSpace: 30,
	buildingName: 'Raid Cart Barracks',
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/2/28/Avatar_Raid_Cart.png/revision/latest/scale-to-width-down/120?cb=20220625221258',
	mode: {
		attackType: Constants.ranged,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.any,
		minRange: 0,
		maxRange: 4.5,
		attackSpeed: 2.5,
		movementSpeed: 9,
		specialAbility: Constants.lastStand,
		troopCount: 4,
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 240,
			damagePerAttack: 600,
			hitpoints: 2800,
			lastStandHitpoints: 1200,
			barrackLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/98/Skeleton_Barrel1.png/revision/latest/scale-to-width-down/80?cb=20181024111435',
		},
		{
			level: 2,
			damagePerSecond: 280,
			damagePerAttack: 700,
			hitpoints: 3100,
			lastStandHitpoints: 1400,
			barrackLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/98/Skeleton_Barrel1.png/revision/latest/scale-to-width-down/80?cb=20181024111435',
		},
		{
			level: 3,
			damagePerSecond: 320,
			damagePerAttack: 800,
			hitpoints: 3400,
			lastStandHitpoints: 1600,
			barrackLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/98/Skeleton_Barrel1.png/revision/latest/scale-to-width-down/80?cb=20181024111435',
		},
		{
			level: 4,
			damagePerSecond: 360,
			damagePerAttack: 900,
			hitpoints: 3700,
			lastStandHitpoints: 1800,
			barrackLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/98/Skeleton_Barrel1.png/revision/latest/scale-to-width-down/80?cb=20181024111435',
		},
		{
			level: 5,
			damagePerSecond: 400,
			damagePerAttack: 1000,
			hitpoints: 4000,
			lastStandHitpoints: 2000,
			barrackLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/98/Skeleton_Barrel1.png/revision/latest/scale-to-width-down/80?cb=20181024111435',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export { troop, Barbarian }
