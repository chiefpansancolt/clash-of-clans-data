import * as Constants from '@/constants'
import Army from '@IClanCapital/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'
import HogRider from '@ClanCapital/army/troops/sub/hogRider.troop'

const troop: Army = {
	name: 'Hog Raiders',
	description: "A beautiful reunion of Riders and Gliders, it's the Hog Raiding Party!",
	maxLevel: 5,
	housingSpace: 15,
	buildingName: 'Hog Raiders Barracks',
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/0/0f/Avatar_Hog_Raiders.png/revision/latest/scale-to-width-down/120?cb=20220811090942',
	mode: {
		attackType: Constants.melee,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.defenses,
		minRange: 0,
		maxRange: 0.25,
		movementSpeed: 18,
		specialAbility: Constants.stunningGlide,
		troopCount: 2,
	},
	levels: [
		{
			level: 1,
			damage: 120,
			hitpoints: 650,
			barrackLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/10/Hog_Glider15.png/revision/latest/scale-to-width-down/140?cb=20190615155640',
		},
		{
			level: 2,
			damage: 130,
			hitpoints: 700,
			barrackLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/10/Hog_Glider15.png/revision/latest/scale-to-width-down/140?cb=20190615155640',
		},
		{
			level: 3,
			damage: 140,
			hitpoints: 750,
			barrackLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/10/Hog_Glider15.png/revision/latest/scale-to-width-down/140?cb=20190615155640',
		},
		{
			level: 4,
			damage: 150,
			hitpoints: 800,
			barrackLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/10/Hog_Glider15.png/revision/latest/scale-to-width-down/140?cb=20190615155640',
		},
		{
			level: 5,
			damage: 160,
			hitpoints: 850,
			barrackLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/10/Hog_Glider15.png/revision/latest/scale-to-width-down/140?cb=20190615155640',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export { troop, HogRider }
