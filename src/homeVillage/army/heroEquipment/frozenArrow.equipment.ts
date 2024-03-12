import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Frozen Arrow',
	description: 'Icy arrows slow down the targets they hit.',
	maxLevel: 27,
	hero: Constants.archerQueen,
	abilityType: Constants.passive,
	rarity: Constants.epic,
	unlockRequirement: Constants.dragonFestival,
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/2/23/Frozen_Arrow.png/revision/latest?cb=20240207193559',
	levels: [
		{
			level: 1,
			abilityAttribute: {
				slowDown: 30,
				slowDownDuration: 0.75,
			},
			heroBoost: {
				damagePerSecondIncrease: 35,
			},
			shinyOreUpgradeCost: 0,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/23/Frozen_Arrow.png/revision/latest?cb=20240207193559',
		},
		{
			level: 2,
			abilityAttribute: {
				slowDown: 30,
				slowDownDuration: 1,
			},
			heroBoost: {
				damagePerSecondIncrease: 40,
			},
			shinyOreUpgradeCost: 120,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/23/Frozen_Arrow.png/revision/latest?cb=20240207193559',
		},
		{
			level: 3,
			abilityAttribute: {
				slowDown: 35,
				slowDownDuration: 1,
			},
			heroBoost: {
				damagePerSecondIncrease: 45,
			},
			shinyOreUpgradeCost: 240,
			glowyOreUpgradeCost: 20,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/23/Frozen_Arrow.png/revision/latest?cb=20240207193559',
		},
		{
			level: 4,
			abilityAttribute: {
				slowDown: 35,
				slowDownDuration: 1,
			},
			heroBoost: {
				damagePerSecondIncrease: 50,
			},
			shinyOreUpgradeCost: 400,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/23/Frozen_Arrow.png/revision/latest?cb=20240207193559',
		},
		{
			level: 5,
			abilityAttribute: {
				slowDown: 35,
				slowDownDuration: 1.25,
			},
			heroBoost: {
				damagePerSecondIncrease: 55,
			},
			shinyOreUpgradeCost: 600,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/23/Frozen_Arrow.png/revision/latest?cb=20240207193559',
		},
		{
			level: 6,
			abilityAttribute: {
				slowDown: 40,
				slowDownDuration: 1.25,
			},
			heroBoost: {
				damagePerSecondIncrease: 60,
			},
			shinyOreUpgradeCost: 840,
			glowyOreUpgradeCost: 100,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/23/Frozen_Arrow.png/revision/latest?cb=20240207193559',
		},
		{
			level: 7,
			abilityAttribute: {
				slowDown: 40,
				slowDownDuration: 1.25,
			},
			heroBoost: {
				damagePerSecondIncrease: 66,
			},
			shinyOreUpgradeCost: 1120,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/23/Frozen_Arrow.png/revision/latest?cb=20240207193559',
		},
		{
			level: 8,
			abilityAttribute: {
				slowDown: 40,
				slowDownDuration: 1.5,
			},
			heroBoost: {
				damagePerSecondIncrease: 72,
			},
			shinyOreUpgradeCost: 1440,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/23/Frozen_Arrow.png/revision/latest?cb=20240207193559',
		},
		{
			level: 9,
			abilityAttribute: {
				slowDown: 45,
				slowDownDuration: 1.5,
			},
			heroBoost: {
				damagePerSecondIncrease: 78,
			},
			shinyOreUpgradeCost: 1800,
			glowyOreUpgradeCost: 200,
			starryOreUpgradeCost: 10,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/23/Frozen_Arrow.png/revision/latest?cb=20240207193559',
		},
		{
			level: 10,
			abilityAttribute: {
				slowDown: 45,
				slowDownDuration: 1.5,
			},
			heroBoost: {
				damagePerSecondIncrease: 85,
			},
			shinyOreUpgradeCost: 1900,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/23/Frozen_Arrow.png/revision/latest?cb=20240207193559',
		},
		{
			level: 11,
			abilityAttribute: {
				slowDown: 45,
				slowDownDuration: 1.75,
			},
			heroBoost: {
				damagePerSecondIncrease: 92,
			},
			shinyOreUpgradeCost: 2000,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/23/Frozen_Arrow.png/revision/latest?cb=20240207193559',
		},
		{
			level: 12,
			abilityAttribute: {
				slowDown: 50,
				slowDownDuration: 1.75,
			},
			heroBoost: {
				damagePerSecondIncrease: 99,
			},
			shinyOreUpgradeCost: 2100,
			glowyOreUpgradeCost: 400,
			starryOreUpgradeCost: 20,
			blacksmithLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/23/Frozen_Arrow.png/revision/latest?cb=20240207193559',
		},
		{
			level: 13,
			abilityAttribute: {
				slowDown: 50,
				slowDownDuration: 1.75,
			},
			heroBoost: {
				damagePerSecondIncrease: 105,
			},
			shinyOreUpgradeCost: 2200,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/23/Frozen_Arrow.png/revision/latest?cb=20240207193559',
		},
		{
			level: 14,
			abilityAttribute: {
				slowDown: 50,
				slowDownDuration: 2,
			},
			heroBoost: {
				damagePerSecondIncrease: 111,
			},
			shinyOreUpgradeCost: 2300,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/23/Frozen_Arrow.png/revision/latest?cb=20240207193559',
		},
		{
			level: 15,
			abilityAttribute: {
				slowDown: 55,
				slowDownDuration: 2,
			},
			heroBoost: {
				damagePerSecondIncrease: 117,
			},
			shinyOreUpgradeCost: 2400,
			glowyOreUpgradeCost: 600,
			starryOreUpgradeCost: 30,
			blacksmithLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/23/Frozen_Arrow.png/revision/latest?cb=20240207193559',
		},
		{
			level: 16,
			abilityAttribute: {
				slowDown: 55,
				slowDownDuration: 2,
			},
			heroBoost: {
				damagePerSecondIncrease: 122,
			},
			shinyOreUpgradeCost: 2500,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/23/Frozen_Arrow.png/revision/latest?cb=20240207193559',
		},
		{
			level: 17,
			abilityAttribute: {
				slowDown: 55,
				slowDownDuration: 2.25,
			},
			heroBoost: {
				damagePerSecondIncrease: 127,
			},
			shinyOreUpgradeCost: 2600,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/23/Frozen_Arrow.png/revision/latest?cb=20240207193559',
		},
		{
			level: 18,
			abilityAttribute: {
				slowDown: 60,
				slowDownDuration: 2.25,
			},
			heroBoost: {
				damagePerSecondIncrease: 132,
			},
			shinyOreUpgradeCost: 2700,
			glowyOreUpgradeCost: 600,
			starryOreUpgradeCost: 50,
			blacksmithLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/23/Frozen_Arrow.png/revision/latest?cb=20240207193559',
		},
		{
			level: 19,
			abilityAttribute: {
				slowDown: 60,
				slowDownDuration: 2.25,
			},
			heroBoost: {
				damagePerSecondIncrease: 136,
			},
			shinyOreUpgradeCost: 2800,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/23/Frozen_Arrow.png/revision/latest?cb=20240207193559',
		},
		{
			level: 20,
			abilityAttribute: {
				slowDown: 60,
				slowDownDuration: 2.5,
			},
			heroBoost: {
				damagePerSecondIncrease: 140,
			},
			shinyOreUpgradeCost: 2900,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/23/Frozen_Arrow.png/revision/latest?cb=20240207193559',
		},
		{
			level: 21,
			abilityAttribute: {
				slowDown: 65,
				slowDownDuration: 2.5,
			},
			heroBoost: {
				damagePerSecondIncrease: 144,
			},
			shinyOreUpgradeCost: 3000,
			glowyOreUpgradeCost: 600,
			starryOreUpgradeCost: 100,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/23/Frozen_Arrow.png/revision/latest?cb=20240207193559',
		},
		{
			level: 22,
			abilityAttribute: {
				slowDown: 65,
				slowDownDuration: 2.5,
			},
			heroBoost: {
				damagePerSecondIncrease: 148,
			},
			shinyOreUpgradeCost: 3100,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/23/Frozen_Arrow.png/revision/latest?cb=20240207193559',
		},
		{
			level: 23,
			abilityAttribute: {
				slowDown: 65,
				slowDownDuration: 2.75,
			},
			heroBoost: {
				damagePerSecondIncrease: 152,
			},
			shinyOreUpgradeCost: 3200,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/23/Frozen_Arrow.png/revision/latest?cb=20240207193559',
		},
		{
			level: 24,
			abilityAttribute: {
				slowDown: 70,
				slowDownDuration: 2.75,
			},
			heroBoost: {
				damagePerSecondIncrease: 156,
			},
			shinyOreUpgradeCost: 3300,
			glowyOreUpgradeCost: 600,
			starryOreUpgradeCost: 120,
			blacksmithLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/23/Frozen_Arrow.png/revision/latest?cb=20240207193559',
		},
		{
			level: 25,
			abilityAttribute: {
				slowDown: 70,
				slowDownDuration: 2.75,
			},
			heroBoost: {
				damagePerSecondIncrease: 160,
			},
			shinyOreUpgradeCost: 3400,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/23/Frozen_Arrow.png/revision/latest?cb=20240207193559',
		},
		{
			level: 26,
			abilityAttribute: {
				slowDown: 70,
				slowDownDuration: 3,
			},
			heroBoost: {
				damagePerSecondIncrease: 164,
			},
			shinyOreUpgradeCost: 3500,
			glowyOreUpgradeCost: 0,
			starryOreUpgradeCost: 0,
			blacksmithLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/23/Frozen_Arrow.png/revision/latest?cb=20240207193559',
		},
		{
			level: 27,
			abilityAttribute: {
				slowDown: 75,
				slowDownDuration: 3,
			},
			heroBoost: {
				damagePerSecondIncrease: 168,
			},
			shinyOreUpgradeCost: 3600,
			glowyOreUpgradeCost: 600,
			starryOreUpgradeCost: 150,
			blacksmithLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/23/Frozen_Arrow.png/revision/latest?cb=20240207193559',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
