import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Rocket Balloon',
	description:
		'Retrofitted with two carefully safety-inspected booster rockets, the Rocket Balloon gets a flying start to every battle!',
	maxLevel: 11,
	housingSpace: 8,
	buildingName: Constants.barracks,
	troopUnlockLevel: 8,
	boostCost: 25000,
	boostResource: Constants.darkElixir,
	boostDurationDays: 3,
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/e/ed/Avatar_Rocket_Balloon.png/revision/latest/scale-to-width-down/137?cb=20210618061142',
	training: {
		barracksAvailableSec: 48,
		barracksAvailableMin: 0,
		barracksUpgradingSec: 36,
		barracksUpgradingMin: 1,
	},
	mode: {
		attackType: Constants.areaSplash,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.defenses,
		minRange: 0,
		maxRange: 0.5,
		attackSpeed: 3,
		movementSpeed: 12,
		specialAbility: Constants.boosters,
		deathDamageRadius: 1.2,
	},
	levels: [
		{
			level: 8,
			damagePerSecond: 236,
			damagePerAttack: 708,
			damageUponDeath: 400,
			hitpoints: 840,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/3f/Rocket_Balloon8.png/revision/latest/scale-to-width-down/130?cb=20210731070454',
		},
		{
			level: 9,
			damagePerSecond: 256,
			damagePerAttack: 768,
			damageUponDeath: 500,
			hitpoints: 940,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/3f/Rocket_Balloon8.png/revision/latest/scale-to-width-down/130?cb=20210731070454',
		},
		{
			level: 10,
			damagePerSecond: 276,
			damagePerAttack: 828,
			damageUponDeath: 600,
			hitpoints: 1040,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/3f/Rocket_Balloon8.png/revision/latest/scale-to-width-down/130?cb=20210731070454',
		},
		{
			level: 11,
			damagePerSecond: 290,
			damagePerAttack: 870,
			damageUponDeath: 700,
			hitpoints: 1140,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/3f/Rocket_Balloon8.png/revision/latest/scale-to-width-down/130?cb=20210731070454',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
