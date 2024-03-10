import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Super Giant',
	description:
		'Super Giants are bigger than their ordinary cousins and are great at punching their way through walls. The belt is from the annual village eating contest.',
	maxLevel: 12,
	housingSpace: 10,
	buildingName: Constants.barracks,
	troopUnlockLevel: 9,
	boostCost: 25000,
	boostResource: Constants.darkElixir,
	boostDurationDays: 3,
	training: {
		barracksAvailableSec: 0,
		barracksAvailableMin: 1,
		barracksUpgradingSec: 0,
		barracksUpgradingMin: 2,
	},
	mode: {
		attackType: Constants.melee,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.defenses,
		minRange: 0,
		maxRange: 0.6,
		attackSpeed: 2,
		movementSpeed: 12,
		specialAbility: Constants.wallBuster,
	},
	levels: [
		{
			level: 9,
			damagePerSecond: 130,
			damagePerAttack: 260,
			damageVsWalls: 1300,
			hitpoints: 4000,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/02/Super_Giant9.png/revision/latest/scale-to-width-down/90?cb=20200904092846',
		},
		{
			level: 10,
			damagePerSecond: 140,
			damagePerAttack: 280,
			damageVsWalls: 1400,
			hitpoints: 4200,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/02/Super_Giant9.png/revision/latest/scale-to-width-down/90?cb=20200904092846',
		},
		{
			level: 11,
			damagePerSecond: 150,
			damagePerAttack: 300,
			damageVsWalls: 1500,
			hitpoints: 4400,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/02/Super_Giant9.png/revision/latest/scale-to-width-down/90?cb=20200904092846',
		},
		{
			level: 12,
			damagePerSecond: 160,
			damagePerAttack: 320,
			damageVsWalls: 1600,
			hitpoints: 4600,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/02/Super_Giant9.png/revision/latest/scale-to-width-down/90?cb=20200904092846',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
