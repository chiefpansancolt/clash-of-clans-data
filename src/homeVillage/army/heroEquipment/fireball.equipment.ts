import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Fireball',
	description: 'Throws a giant exploding fireball at the closest defense.',
	maxLevel: 27,
	hero: Constants.grandWarden,
	abilityType: Constants.active,
	rarity: Constants.epic,
	unlockRequirement: Constants.superDragonSpotlight,
	levels: [
		{
			level: 1,
			abilityAttribute: {
				damageArea: 4,
				damage: 1500,
			},
			heroBoost: {
				damagePerSecondIncrease: 21,
			},
			shinyOreUpgradeCost: 0,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/49/Fireball_Equipment.png/revision/latest/scale-to-width-down/199?cb=20240310155549',
		},
		{
			level: 2,
			abilityAttribute: {
				damageArea: 4,
				damage: 1500,
			},
			heroBoost: {
				damagePerSecondIncrease: 24,
			},
			shinyOreUpgradeCost: 120,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/49/Fireball_Equipment.png/revision/latest/scale-to-width-down/199?cb=20240310155549',
		},
		{
			level: 3,
			abilityAttribute: {
				damageArea: 4,
				damage: 1700,
			},
			heroBoost: {
				damagePerSecondIncrease: 27,
			},
			shinyOreUpgradeCost: 240,
			glowyOreUpgradeCost: 20,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/49/Fireball_Equipment.png/revision/latest/scale-to-width-down/199?cb=20240310155549',
		},
		{
			level: 4,
			abilityAttribute: {
				damageArea: 4,
				damage: 1700,
			},
			heroBoost: {
				damagePerSecondIncrease: 30,
			},
			shinyOreUpgradeCost: 400,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/49/Fireball_Equipment.png/revision/latest/scale-to-width-down/199?cb=20240310155549',
		},
		{
			level: 5,
			abilityAttribute: {
				damageArea: 4,
				damage: 1800,
			},
			heroBoost: {
				damagePerSecondIncrease: 33,
			},
			shinyOreUpgradeCost: 600,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/49/Fireball_Equipment.png/revision/latest/scale-to-width-down/199?cb=20240310155549',
		},
		{
			level: 6,
			abilityAttribute: {
				damageArea: 4,
				damage: 1950,
			},
			heroBoost: {
				damagePerSecondIncrease: 36,
			},
			shinyOreUpgradeCost: 840,
			glowyOreUpgradeCost: 100,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/49/Fireball_Equipment.png/revision/latest/scale-to-width-down/199?cb=20240310155549',
		},
		{
			level: 7,
			abilityAttribute: {
				damageArea: 4,
				damage: 1950,
			},
			heroBoost: {
				damagePerSecondIncrease: 40,
			},
			shinyOreUpgradeCost: 1120,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/49/Fireball_Equipment.png/revision/latest/scale-to-width-down/199?cb=20240310155549',
		},
		{
			level: 8,
			abilityAttribute: {
				damageArea: 4,
				damage: 2050,
			},
			heroBoost: {
				damagePerSecondIncrease: 44,
			},
			shinyOreUpgradeCost: 1440,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/49/Fireball_Equipment.png/revision/latest/scale-to-width-down/199?cb=20240310155549',
		},
		{
			level: 9,
			abilityAttribute: {
				damageArea: 5,
				damage: 2200,
			},
			heroBoost: {
				damagePerSecondIncrease: 47,
			},
			shinyOreUpgradeCost: 1800,
			glowyOreUpgradeCost: 200,
			starryOreUpgradeCost: 10,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/49/Fireball_Equipment.png/revision/latest/scale-to-width-down/199?cb=20240310155549',
		},
		{
			level: 10,
			abilityAttribute: {
				damageArea: 5,
				damage: 2200,
			},
			heroBoost: {
				damagePerSecondIncrease: 51,
			},
			shinyOreUpgradeCost: 1900,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/49/Fireball_Equipment.png/revision/latest/scale-to-width-down/199?cb=20240310155549',
		},
		{
			level: 11,
			abilityAttribute: {
				damageArea: 5,
				damage: 2350,
			},
			heroBoost: {
				damagePerSecondIncrease: 56,
			},
			shinyOreUpgradeCost: 2000,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/49/Fireball_Equipment.png/revision/latest/scale-to-width-down/199?cb=20240310155549',
		},
		{
			level: 12,
			abilityAttribute: {
				damageArea: 5,
				damage: 2650,
			},
			heroBoost: {
				damagePerSecondIncrease: 60,
			},
			shinyOreUpgradeCost: 2100,
			glowyOreUpgradeCost: 400,
			starryOreUpgradeCost: 20,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/49/Fireball_Equipment.png/revision/latest/scale-to-width-down/199?cb=20240310155549',
		},
		{
			level: 13,
			abilityAttribute: {
				damageArea: 5,
				damage: 2650,
			},
			heroBoost: {
				damagePerSecondIncrease: 63,
			},
			shinyOreUpgradeCost: 2200,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/49/Fireball_Equipment.png/revision/latest/scale-to-width-down/199?cb=20240310155549',
		},
		{
			level: 14,
			abilityAttribute: {
				damageArea: 5,
				damage: 2750,
			},
			heroBoost: {
				damagePerSecondIncrease: 67,
			},
			shinyOreUpgradeCost: 2300,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/49/Fireball_Equipment.png/revision/latest/scale-to-width-down/199?cb=20240310155549',
		},
		{
			level: 15,
			abilityAttribute: {
				damageArea: 5,
				damage: 3100,
			},
			heroBoost: {
				damagePerSecondIncrease: 71,
			},
			shinyOreUpgradeCost: 2400,
			glowyOreUpgradeCost: 600,
			starryOreUpgradeCost: 30,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/49/Fireball_Equipment.png/revision/latest/scale-to-width-down/199?cb=20240310155549',
		},
		{
			level: 16,
			abilityAttribute: {
				damageArea: 5,
				damage: 3100,
			},
			heroBoost: {
				damagePerSecondIncrease: 74,
			},
			shinyOreUpgradeCost: 2500,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/49/Fireball_Equipment.png/revision/latest/scale-to-width-down/199?cb=20240310155549',
		},
		{
			level: 17,
			abilityAttribute: {
				damageArea: 5,
				damage: 3250,
			},
			heroBoost: {
				damagePerSecondIncrease: 77,
			},
			shinyOreUpgradeCost: 2600,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/49/Fireball_Equipment.png/revision/latest/scale-to-width-down/199?cb=20240310155549',
		},
		{
			level: 18,
			abilityAttribute: {
				damageArea: 6,
				damage: 3400,
			},
			heroBoost: {
				damagePerSecondIncrease: 80,
			},
			shinyOreUpgradeCost: 2700,
			glowyOreUpgradeCost: 600,
			starryOreUpgradeCost: 50,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/49/Fireball_Equipment.png/revision/latest/scale-to-width-down/199?cb=20240310155549',
		},
		{
			level: 19,
			abilityAttribute: {
				damageArea: 6,
				damage: 3400,
			},
			heroBoost: {
				damagePerSecondIncrease: 82,
			},
			shinyOreUpgradeCost: 2800,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/49/Fireball_Equipment.png/revision/latest/scale-to-width-down/199?cb=20240310155549',
		},
		{
			level: 20,
			abilityAttribute: {
				damageArea: 6,
				damage: 3500,
			},
			heroBoost: {
				damagePerSecondIncrease: 84,
			},
			shinyOreUpgradeCost: 2900,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/49/Fireball_Equipment.png/revision/latest/scale-to-width-down/199?cb=20240310155549',
		},
		{
			level: 21,
			abilityAttribute: {
				damageArea: 6,
				damage: 3650,
			},
			heroBoost: {
				damagePerSecondIncrease: 87,
			},
			shinyOreUpgradeCost: 3000,
			glowyOreUpgradeCost: 600,
			starryOreUpgradeCost: 100,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/49/Fireball_Equipment.png/revision/latest/scale-to-width-down/199?cb=20240310155549',
		},
		{
			level: 22,
			abilityAttribute: {
				damageArea: 6,
				damage: 3650,
			},
			heroBoost: {
				damagePerSecondIncrease: 89,
			},
			shinyOreUpgradeCost: 3100,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/49/Fireball_Equipment.png/revision/latest/scale-to-width-down/199?cb=20240310155549',
		},
		{
			level: 23,
			abilityAttribute: {
				damageArea: 6,
				damage: 3750,
			},
			heroBoost: {
				damagePerSecondIncrease: 92,
			},
			shinyOreUpgradeCost: 3200,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/49/Fireball_Equipment.png/revision/latest/scale-to-width-down/199?cb=20240310155549',
		},
		{
			level: 24,
			abilityAttribute: {
				damageArea: 6,
				damage: 3900,
			},
			heroBoost: {
				damagePerSecondIncrease: 94,
			},
			shinyOreUpgradeCost: 3300,
			glowyOreUpgradeCost: 600,
			starryOreUpgradeCost: 120,
			blacksmithLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/49/Fireball_Equipment.png/revision/latest/scale-to-width-down/199?cb=20240310155549',
		},
		{
			level: 25,
			abilityAttribute: {
				damageArea: 6,
				damage: 3900,
			},
			heroBoost: {
				damagePerSecondIncrease: 96,
			},
			shinyOreUpgradeCost: 3400,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/49/Fireball_Equipment.png/revision/latest/scale-to-width-down/199?cb=20240310155549',
		},
		{
			level: 26,
			abilityAttribute: {
				damageArea: 6,
				damage: 3950,
			},
			heroBoost: {
				damagePerSecondIncrease: 99,
			},
			shinyOreUpgradeCost: 3500,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/49/Fireball_Equipment.png/revision/latest/scale-to-width-down/199?cb=20240310155549',
		},
		{
			level: 27,
			abilityAttribute: {
				damageArea: 6,
				damage: 4100,
			},
			heroBoost: {
				damagePerSecondIncrease: 101,
			},
			shinyOreUpgradeCost: 3600,
			glowyOreUpgradeCost: 600,
			starryOreUpgradeCost: 150,
			blacksmithLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/49/Fireball_Equipment.png/revision/latest/scale-to-width-down/199?cb=20240310155549',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
