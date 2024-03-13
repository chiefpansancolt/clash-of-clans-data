import * as Constants from '@/constants'
import Army from '@IClanCapital/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Flying Fortress',
	description:
		"You'd think putting wings on a castle would result in disaster, but those rules don't apply to the Flying Fortress. With a payload of Skeleton Gliders, this aerial acropolis delivers punishing bombardments.",
	maxLevel: 5,
	housingSpace: 100,
	buildingName: 'Flying Fortress Yard',
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/9/99/Avatar_Flying_Fortress.png/revision/latest/scale-to-width-down/120?cb=20220811090941',
	mode: {
		attackType: Constants.singleTarget,
		unitTypeTarget: Constants.groundAndAir,
		preferredTarget: Constants.defenses,
		minRange: 0,
		maxRange: 4.5,
		attackSpeed: 2,
		movementSpeed: 9,
		specialAbility: Constants.skeletonCrew,
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 300,
			damagePerAttack: 600,
			spawnedSkeletonGliders: 10,
			spawnedSkeletonsUponDeath: 22,
			hitpoints: 12000,
			barrackLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/98/Skeleton_Barrel1.png/revision/latest/scale-to-width-down/80?cb=20181024111435',
		},
		{
			level: 2,
			damagePerSecond: 325,
			damagePerAttack: 650,
			spawnedSkeletonGliders: 12,
			spawnedSkeletonsUponDeath: 24,
			hitpoints: 13500,
			barrackLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/98/Skeleton_Barrel1.png/revision/latest/scale-to-width-down/80?cb=20181024111435',
		},
		{
			level: 3,
			damagePerSecond: 350,
			damagePerAttack: 700,
			spawnedSkeletonGliders: 14,
			spawnedSkeletonsUponDeath: 26,
			hitpoints: 15000,
			barrackLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/98/Skeleton_Barrel1.png/revision/latest/scale-to-width-down/80?cb=20181024111435',
		},
		{
			level: 4,
			damagePerSecond: 375,
			damagePerAttack: 750,
			spawnedSkeletonGliders: 16,
			spawnedSkeletonsUponDeath: 28,
			hitpoints: 16500,
			barrackLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/98/Skeleton_Barrel1.png/revision/latest/scale-to-width-down/80?cb=20181024111435',
		},
		{
			level: 5,
			damagePerSecond: 400,
			damagePerAttack: 800,
			spawnedSkeletonGliders: 18,
			spawnedSkeletonsUponDeath: 30,
			hitpoints: 18000,
			barrackLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/98/Skeleton_Barrel1.png/revision/latest/scale-to-width-down/80?cb=20181024111435',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
