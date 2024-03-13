import * as Constants from '@/constants'
import Army from '@IClanCapital/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Skeleton Barrels',
	description:
		"Did someone say Barrel Parade? It's a Skeleton party in the sky, until all the balloons pop... then it's a Skeleton party on the ground!",
	maxLevel: 5,
	housingSpace: 0,
	buildingName: 'Skeleton Barrel Barracks',
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/3/33/Avatar_Skeleton_Barrels.png/revision/latest/scale-to-width-down/120?cb=20220811090947',
	mode: {
		attackType: Constants.melee,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.defenses,
		minRange: 0,
		maxRange: 1,
		movementSpeed: 8,
		troopCount: 3,
	},
	levels: [
		{
			level: 1,
			damage: 324,
			spawnedSkeletons: 8,
			hitpoints: 700,
			barrackLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/98/Skeleton_Barrel1.png/revision/latest/scale-to-width-down/80?cb=20181024111435',
		},
		{
			level: 2,
			damage: 486,
			spawnedSkeletons: 9,
			hitpoints: 800,
			barrackLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/98/Skeleton_Barrel1.png/revision/latest/scale-to-width-down/80?cb=20181024111435',
		},
		{
			level: 3,
			damage: 594,
			spawnedSkeletons: 10,
			hitpoints: 850,
			barrackLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/98/Skeleton_Barrel1.png/revision/latest/scale-to-width-down/80?cb=20181024111435',
		},
		{
			level: 4,
			damage: 708,
			spawnedSkeletons: 11,
			hitpoints: 1050,
			barrackLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/98/Skeleton_Barrel1.png/revision/latest/scale-to-width-down/80?cb=20181024111435',
		},
		{
			level: 5,
			damage: 768,
			spawnedSkeletons: 12,
			hitpoints: 1200,
			barrackLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/98/Skeleton_Barrel1.png/revision/latest/scale-to-width-down/80?cb=20181024111435',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
