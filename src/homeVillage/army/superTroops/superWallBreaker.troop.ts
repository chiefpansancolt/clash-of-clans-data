import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Super Wall Breaker',
	description:
		'Who knew that rolling was so much superior to running? Super Wall Breakers use pre-ignited bombs that blow up under all circumstances! No more duds!',
	maxLevel: 12,
	housingSpace: 8,
	buildingName: Constants.barracks,
	troopUnlockLevel: 7,
	boostCost: 25000,
	boostResource: Constants.darkElixir,
	boostDurationDays: 3,
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/c/ca/Avatar_Super_Wall_Breaker.png/revision/latest/scale-to-width-down/137?cb=20210101081415',
	training: {
		barracksAvailableSec: 0,
		barracksAvailableMin: 1,
		barracksUpgradingSec: 0,
		barracksUpgradingMin: 2,
	},
	mode: {
		attackType: Constants.melee,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.walls,
		minRange: 0,
		maxRange: 0.6,
		movementSpeed: 28,
		tiles: 1.6,
		specialAbility: Constants.megaBomb,
	},
	levels: [
		{
			level: 7,
			damagePerAttack: 78,
			damageUponDeath: 175,
			damageVsWalls: 3120,
			damageWhenDestroyedVsWalls: 7000,
			hitpoints: 350,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/12/Super_Wall_Breaker7.png/revision/latest?cb=20200401131313',
		},
		{
			level: 8,
			damagePerAttack: 100,
			damageUponDeath: 225,
			damageVsWalls: 4000,
			damageWhenDestroyedVsWalls: 9000,
			hitpoints: 400,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/12/Super_Wall_Breaker7.png/revision/latest?cb=20200401131313',
		},
		{
			level: 9,
			damagePerAttack: 120,
			damageUponDeath: 275,
			damageVsWalls: 4800,
			damageWhenDestroyedVsWalls: 11000,
			hitpoints: 450,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/12/Super_Wall_Breaker7.png/revision/latest?cb=20200401131313',
		},
		{
			level: 10,
			damagePerAttack: 130,
			damageUponDeath: 313,
			damageVsWalls: 5200,
			damageWhenDestroyedVsWalls: 12500,
			hitpoints: 475,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/12/Super_Wall_Breaker7.png/revision/latest?cb=20200401131313',
		},
		{
			level: 11,
			damagePerAttack: 140,
			damageUponDeath: 338,
			damageVsWalls: 5600,
			damageWhenDestroyedVsWalls: 13520,
			hitpoints: 500,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/12/Super_Wall_Breaker7.png/revision/latest?cb=20200401131313',
		},
		{
			level: 12,
			damagePerAttack: 150,
			damageUponDeath: 363,
			damageVsWalls: 6000,
			damageWhenDestroyedVsWalls: 14520,
			hitpoints: 525,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/12/Super_Wall_Breaker7.png/revision/latest?cb=20200401131313',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
