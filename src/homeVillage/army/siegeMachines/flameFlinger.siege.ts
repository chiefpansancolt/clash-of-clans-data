import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Flame Flinger',
	description:
		'This little charmer flings bundle of Fire Spirits that both hit hard and leave behind a burning mess. Its long range helps it stay out of trouble, but beware of longer range defenses and traps! Immune to spell effects.',
	maxLevel: 4,
	housingSpace: 1,
	buildingLevelRequired: 6,
	buildingName: Constants.workshop,
	baseImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/e/e4/Avatar_Flame_Flinger.png/revision/latest/scale-to-width-down/120?cb=20211209130933',
	training: {
		barracksAvailableSec: 0,
		barracksAvailableMin: 20,
		barracksUpgradingSec: 0,
		barracksUpgradingMin: 40,
	},
	mode: {
		attackType: Constants.areaSplash,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.defenses,
		minRange: 0,
		maxRange: 11,
		attackSpeed: 5,
		movementSpeed: 6,
		hitpointDecayPerSecond: 17,
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 135,
			damagePerAttack: 675,
			flameMaxiumDamagePerSecond: 80,
			lifetime: 100,
			hitpoints: 1700,
			researchCost: 0,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 0,
			laboratoryLevelRequired: 0,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/2f/Flame_Flinger1.png/revision/latest/scale-to-width-down/100?cb=20211209201112',
		},
		{
			level: 2,
			damagePerSecond: 150,
			damagePerAttack: 750,
			flameMaxiumDamagePerSecond: 95,
			lifetime: 105.88,
			hitpoints: 1800,
			researchCost: 7600000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 12,
			researchTimeDay: 7,
			laboratoryLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a7/Flame_Flinger2.png/revision/latest/scale-to-width-down/100?cb=20211209201116',
		},
		{
			level: 3,
			damagePerSecond: 165,
			damagePerAttack: 825,
			flameMaxiumDamagePerSecond: 105,
			lifetime: 111.76,
			hitpoints: 1900,
			researchCost: 10500000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 12,
			laboratoryLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5b/Flame_Flinger3.png/revision/latest/scale-to-width-down/100?cb=20211209201119',
		},
		{
			level: 4,
			damagePerSecond: 180,
			damagePerAttack: 900,
			flameMaxiumDamagePerSecond: 120,
			lifetime: 117.64,
			hitpoints: 2000,
			researchCost: 13300000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 12,
			researchTimeDay: 12,
			laboratoryLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/42/Flame_Flinger4.png/revision/latest/scale-to-width-down/100?cb=20211209201123',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
