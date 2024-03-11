import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Vampstache',
	description: 'Every time the Barbarian King attacks, he heals himself',
	maxLevel: 18,
	hero: Constants.barbarianKing,
	abilityType: Constants.passive,
	rarity: Constants.common,
	unlockRequirement: Constants.blacksmithLevel3,
	levels: [
		{
			level: 1,
			abilityAttribute: {
				healPerHit: 60,
			},
			heroBoost: {
				damagePerSecondIncrease: 9,
				attackSpeedIncrease: 5,
			},
			shinyOreUpgradeCost: 0,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6d/Vampstache.png/revision/latest/scale-to-width-down/200?cb=20231211153806',
		},
		{
			level: 2,
			abilityAttribute: {
				healPerHit: 60,
			},
			heroBoost: {
				damagePerSecondIncrease: 10,
				attackSpeedIncrease: 6,
			},
			shinyOreUpgradeCost: 120,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6d/Vampstache.png/revision/latest/scale-to-width-down/200?cb=20231211153806',
		},
		{
			level: 3,
			abilityAttribute: {
				healPerHit: 90,
			},
			heroBoost: {
				damagePerSecondIncrease: 12,
				attackSpeedIncrease: 7,
			},
			shinyOreUpgradeCost: 240,
			glowyOreUpgradeCost: 20,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6d/Vampstache.png/revision/latest/scale-to-width-down/200?cb=20231211153806',
		},
		{
			level: 4,
			abilityAttribute: {
				healPerHit: 90,
			},
			heroBoost: {
				damagePerSecondIncrease: 13,
				attackSpeedIncrease: 8,
			},
			shinyOreUpgradeCost: 400,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6d/Vampstache.png/revision/latest/scale-to-width-down/200?cb=20231211153806',
		},
		{
			level: 5,
			abilityAttribute: {
				healPerHit: 90,
			},
			heroBoost: {
				damagePerSecondIncrease: 15,
				attackSpeedIncrease: 9,
			},
			shinyOreUpgradeCost: 600,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6d/Vampstache.png/revision/latest/scale-to-width-down/200?cb=20231211153806',
		},
		{
			level: 6,
			abilityAttribute: {
				healPerHit: 120,
			},
			heroBoost: {
				damagePerSecondIncrease: 16,
				attackSpeedIncrease: 10,
			},
			shinyOreUpgradeCost: 840,
			glowyOreUpgradeCost: 100,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6d/Vampstache.png/revision/latest/scale-to-width-down/200?cb=20231211153806',
		},
		{
			level: 7,
			abilityAttribute: {
				healPerHit: 120,
			},
			heroBoost: {
				damagePerSecondIncrease: 18,
				attackSpeedIncrease: 11,
			},
			shinyOreUpgradeCost: 1120,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6d/Vampstache.png/revision/latest/scale-to-width-down/200?cb=20231211153806',
		},
		{
			level: 8,
			abilityAttribute: {
				healPerHit: 120,
			},
			heroBoost: {
				damagePerSecondIncrease: 19,
				attackSpeedIncrease: 12,
			},
			shinyOreUpgradeCost: 1440,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6d/Vampstache.png/revision/latest/scale-to-width-down/200?cb=20231211153806',
		},
		{
			level: 9,
			abilityAttribute: {
				healPerHit: 160,
			},
			heroBoost: {
				damagePerSecondIncrease: 22,
				attackSpeedIncrease: 13,
			},
			shinyOreUpgradeCost: 1800,
			glowyOreUpgradeCost: 200,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6d/Vampstache.png/revision/latest/scale-to-width-down/200?cb=20231211153806',
		},
		{
			level: 10,
			abilityAttribute: {
				healPerHit: 160,
			},
			heroBoost: {
				damagePerSecondIncrease: 27,
				attackSpeedIncrease: 14,
			},
			shinyOreUpgradeCost: 1900,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6d/Vampstache.png/revision/latest/scale-to-width-down/200?cb=20231211153806',
		},
		{
			level: 11,
			abilityAttribute: {
				healPerHit: 160,
			},
			heroBoost: {
				damagePerSecondIncrease: 32,
				attackSpeedIncrease: 15,
			},
			shinyOreUpgradeCost: 2000,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6d/Vampstache.png/revision/latest/scale-to-width-down/200?cb=20231211153806',
		},
		{
			level: 12,
			abilityAttribute: {
				healPerHit: 200,
			},
			heroBoost: {
				damagePerSecondIncrease: 37,
				attackSpeedIncrease: 16,
			},
			shinyOreUpgradeCost: 2100,
			glowyOreUpgradeCost: 400,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6d/Vampstache.png/revision/latest/scale-to-width-down/200?cb=20231211153806',
		},
		{
			level: 13,
			abilityAttribute: {
				healPerHit: 200,
			},
			heroBoost: {
				damagePerSecondIncrease: 42,
				attackSpeedIncrease: 17,
			},
			shinyOreUpgradeCost: 2200,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6d/Vampstache.png/revision/latest/scale-to-width-down/200?cb=20231211153806',
		},
		{
			level: 14,
			abilityAttribute: {
				healPerHit: 200,
			},
			heroBoost: {
				damagePerSecondIncrease: 48,
				attackSpeedIncrease: 18,
			},
			shinyOreUpgradeCost: 2300,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6d/Vampstache.png/revision/latest/scale-to-width-down/200?cb=20231211153806',
		},
		{
			level: 15,
			abilityAttribute: {
				healPerHit: 250,
			},
			heroBoost: {
				damagePerSecondIncrease: 53,
				attackSpeedIncrease: 19,
			},
			shinyOreUpgradeCost: 2400,
			glowyOreUpgradeCost: 600,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6d/Vampstache.png/revision/latest/scale-to-width-down/200?cb=20231211153806',
		},
		{
			level: 16,
			abilityAttribute: {
				healPerHit: 250,
			},
			heroBoost: {
				damagePerSecondIncrease: 58,
				attackSpeedIncrease: 20,
			},
			shinyOreUpgradeCost: 2500,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6d/Vampstache.png/revision/latest/scale-to-width-down/200?cb=20231211153806',
		},
		{
			level: 17,
			abilityAttribute: {
				healPerHit: 250,
			},
			heroBoost: {
				damagePerSecondIncrease: 63,
				attackSpeedIncrease: 21,
			},
			shinyOreUpgradeCost: 2600,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6d/Vampstache.png/revision/latest/scale-to-width-down/200?cb=20231211153806',
		},
		{
			level: 18,
			abilityAttribute: {
				healPerHit: 300,
			},
			heroBoost: {
				damagePerSecondIncrease: 68,
				attackSpeedIncrease: 22,
			},
			shinyOreUpgradeCost: 2700,
			glowyOreUpgradeCost: 600,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6d/Vampstache.png/revision/latest/scale-to-width-down/200?cb=20231211153806',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
