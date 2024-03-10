import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Inferno Dragon',
	description:
		'Not getting upset over being alone anymore, the Inferno Dragon has learned to focus its rage into a very powerful beam that builds up over time!',
	maxLevel: 10,
	housingSpace: 15,
	buildingName: Constants.barracks,
	troopUnlockLevel: 6,
	boostCost: 25000,
	boostResource: Constants.darkElixir,
	boostDurationDays: 3,
	training: {
		barracksAvailableSec: 15,
		barracksAvailableMin: 2,
		barracksUpgradingSec: 30,
		barracksUpgradingMin: 4,
	},
	mode: {
		attackType: Constants.singleTarget,
		unitTypeTarget: Constants.groundAndAir,
		preferredTarget: Constants.none,
		minRange: 0,
		maxRange: 4,
		attackSpeed: 0.128,
		movementSpeed: 18,
		specialAbility: Constants.infernoBeam,
	},
	levels: [
		{
			level: 6,
			damagePerSecondStage1: 75,
			damagePerSecondStage2: 150,
			damagePerSecondStage3: 1500,
			hitpoints: 1900,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b8/Inferno_Dragon6.png/revision/latest/scale-to-width-down/100?cb=20200630111528',
		},
		{
			level: 7,
			damagePerSecondStage1: 79,
			damagePerSecondStage2: 158,
			damagePerSecondStage3: 1580,
			hitpoints: 2050,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b8/Inferno_Dragon6.png/revision/latest/scale-to-width-down/100?cb=20200630111528',
		},
		{
			level: 8,
			damagePerSecondStage1: 83,
			damagePerSecondStage2: 166,
			damagePerSecondStage3: 1660,
			hitpoints: 2200,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b8/Inferno_Dragon6.png/revision/latest/scale-to-width-down/100?cb=20200630111528',
		},
		{
			level: 9,
			damagePerSecondStage1: 85,
			damagePerSecondStage2: 170,
			damagePerSecondStage3: 1700,
			hitpoints: 2300,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b8/Inferno_Dragon6.png/revision/latest/scale-to-width-down/100?cb=20200630111528',
		},
		{
			level: 10,
			damagePerSecondStage1: 86,
			damagePerSecondStage2: 174,
			damagePerSecondStage3: 1740,
			hitpoints: 2400,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b8/Inferno_Dragon6.png/revision/latest/scale-to-width-down/100?cb=20200630111528',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
