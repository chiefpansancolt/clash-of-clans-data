import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Super Miner',
	description:
		'Armed with a powerful drill and a magnificent moustache, Super Miner is ready to undermine any rival Village!',
	maxLevel: 10,
	housingSpace: 24,
	buildingName: Constants.barracks,
	troopUnlockLevel: 7,
	boostCost: 25000,
	boostResource: Constants.darkElixir,
	boostDurationDays: 3,
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/b/b3/Avatar_Super_Miner.png/revision/latest/scale-to-width-down/137?cb=20221212211242',
	training: {
		barracksAvailableSec: 0,
		barracksAvailableMin: 2,
		barracksUpgradingSec: 0,
		barracksUpgradingMin: 4,
	},
	mode: {
		attackType: Constants.singleTarget,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.defenses,
		minRange: 0,
		maxRange: 0.6,
		attackSpeed: 0.25,
		movementSpeed: 32,
		specialAbility: Constants.lastBlast,
	},
	levels: [
		{
			level: 7,
			damagePerSecondInitial: 170,
			damagePerSecondAfter1_5: 340,
			damagePerSecondAfter3: 520,
			damageUponDeath: 1400,
			hitpoints: 2900,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/64/Super_Miner7.png/revision/latest/scale-to-width-down/100?cb=20221212210817',
		},
		{
			level: 8,
			damagePerSecondInitial: 185,
			damagePerSecondAfter1_5: 370,
			damagePerSecondAfter3: 560,
			damageUponDeath: 1600,
			hitpoints: 3200,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/64/Super_Miner7.png/revision/latest/scale-to-width-down/100?cb=20221212210817',
		},
		{
			level: 9,
			damagePerSecondInitial: 200,
			damagePerSecondAfter1_5: 400,
			damagePerSecondAfter3: 600,
			damageUponDeath: 1800,
			hitpoints: 3500,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/64/Super_Miner7.png/revision/latest/scale-to-width-down/100?cb=20221212210817',
		},
		{
			level: 10,
			damagePerSecondInitial: 215,
			damagePerSecondAfter1_5: 430,
			damagePerSecondAfter3: 640,
			damageUponDeath: 2000,
			hitpoints: 3900,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/64/Super_Miner7.png/revision/latest/scale-to-width-down/100?cb=20221212210817',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
