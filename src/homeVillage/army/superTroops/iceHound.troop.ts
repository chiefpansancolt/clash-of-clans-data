import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Ice Hound',
	description:
		'Free from all the lava-induced indigestion, the Ice Hound is ready to freeze the flow of battle. Chill out, or else.',
	maxLevel: 6,
	housingSpace: 40,
	buildingName: Constants.darkBarracks,
	troopUnlockLevel: 5,
	boostCost: 25000,
	boostResource: Constants.darkElixir,
	boostDurationDays: 3,
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Avatar_Ice_Hound.png/revision/latest/scale-to-width-down/137?cb=20201207184828',
	training: {
		barracksAvailableSec: 40,
		barracksAvailableMin: 6,
		barracksUpgradingSec: 20,
		barracksUpgradingMin: 13,
	},
	mode: {
		attackType: Constants.melee,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.airDefense,
		minRange: 0,
		maxRange: 0.75,
		attackSpeed: 2,
		movementSpeed: 20,
		specialAbility: Constants.dishServedCold,
	},
	levels: [
		{
			level: 5,
			damagePerSecond: 10,
			damagePerAttack: 20,
			freezeTimeUponDeath: 3.5,
			icePupsSpawnedOnOffense: 10,
			icePupsSpawnedOnDefense: 10,
			hitpoints: 9500,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/21/Ice_Hound5.png/revision/latest/scale-to-width-down/80?cb=20201208034736',
		},
		{
			level: 6,
			damagePerSecond: 15,
			damagePerAttack: 30,
			freezeTimeUponDeath: 4.25,
			icePupsSpawnedOnOffense: 12,
			icePupsSpawnedOnDefense: 11,
			hitpoints: 10000,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/21/Ice_Hound5.png/revision/latest/scale-to-width-down/80?cb=20201208034736',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
