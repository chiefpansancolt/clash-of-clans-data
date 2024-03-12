import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Haste Vial',
	description: 'Casts Haste on the Royal Champion',
	maxLevel: 18,
	hero: Constants.royalChampion,
	abilityType: Constants.active,
	rarity: Constants.common,
	unlockRequirement: Constants.blacksmithLevel8,
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/3/32/Hog_Rider_Puppet.png/revision/latest/scale-to-width-down/200?cb=20240225143837',
	levels: [
		{
			level: 1,
			abilityAttribute: {
				abilityDuration: 9,
				movementSpeedIncrease: 18,
				attackSpeedIncrease: 60,
			},
			heroBoost: {
				damagePerSecondIncrease: 20,
				attackSpeedIncrease: 5,
			},
			shinyOreUpgradeCost: 0,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Hog_Rider_Puppet.png/revision/latest/scale-to-width-down/200?cb=20240225143837',
		},
		{
			level: 2,
			abilityAttribute: {
				abilityDuration: 9,
				movementSpeedIncrease: 18,
				attackSpeedIncrease: 60,
			},
			heroBoost: {
				damagePerSecondIncrease: 24,
				attackSpeedIncrease: 6,
			},
			shinyOreUpgradeCost: 120,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Hog_Rider_Puppet.png/revision/latest/scale-to-width-down/200?cb=20240225143837',
		},
		{
			level: 3,
			abilityAttribute: {
				abilityDuration: 9.5,
				movementSpeedIncrease: 22.3,
				attackSpeedIncrease: 60,
			},
			heroBoost: {
				damagePerSecondIncrease: 28,
				attackSpeedIncrease: 6,
			},
			shinyOreUpgradeCost: 240,
			glowyOreUpgradeCost: 20,
			blacksmithLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Hog_Rider_Puppet.png/revision/latest/scale-to-width-down/200?cb=20240225143837',
		},
		{
			level: 4,
			abilityAttribute: {
				abilityDuration: 9.5,
				movementSpeedIncrease: 22.3,
				attackSpeedIncrease: 60,
			},
			heroBoost: {
				damagePerSecondIncrease: 32,
				attackSpeedIncrease: 7,
			},
			shinyOreUpgradeCost: 400,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Hog_Rider_Puppet.png/revision/latest/scale-to-width-down/200?cb=20240225143837',
		},
		{
			level: 5,
			abilityAttribute: {
				abilityDuration: 9.5,
				movementSpeedIncrease: 22.3,
				attackSpeedIncrease: 60,
			},
			heroBoost: {
				damagePerSecondIncrease: 36,
				attackSpeedIncrease: 8,
			},
			shinyOreUpgradeCost: 600,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Hog_Rider_Puppet.png/revision/latest/scale-to-width-down/200?cb=20240225143837',
		},
		{
			level: 6,
			abilityAttribute: {
				abilityDuration: 10,
				movementSpeedIncrease: 25.5,
				attackSpeedIncrease: 80,
			},
			heroBoost: {
				damagePerSecondIncrease: 40,
				attackSpeedIncrease: 8,
			},
			shinyOreUpgradeCost: 840,
			glowyOreUpgradeCost: 100,
			blacksmithLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Hog_Rider_Puppet.png/revision/latest/scale-to-width-down/200?cb=20240225143837',
		},
		{
			level: 7,
			abilityAttribute: {
				abilityDuration: 10,
				movementSpeedIncrease: 25.5,
				attackSpeedIncrease: 80,
			},
			heroBoost: {
				damagePerSecondIncrease: 44,
				attackSpeedIncrease: 9,
			},
			shinyOreUpgradeCost: 1120,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Hog_Rider_Puppet.png/revision/latest/scale-to-width-down/200?cb=20240225143837',
		},
		{
			level: 8,
			abilityAttribute: {
				abilityDuration: 10,
				movementSpeedIncrease: 25.5,
				attackSpeedIncrease: 80,
			},
			heroBoost: {
				damagePerSecondIncrease: 48,
				attackSpeedIncrease: 10,
			},
			shinyOreUpgradeCost: 1440,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Hog_Rider_Puppet.png/revision/latest/scale-to-width-down/200?cb=20240225143837',
		},
		{
			level: 9,
			abilityAttribute: {
				abilityDuration: 10.5,
				movementSpeedIncrease: 28.7,
				attackSpeedIncrease: 80,
			},
			heroBoost: {
				damagePerSecondIncrease: 52,
				attackSpeedIncrease: 11,
			},
			shinyOreUpgradeCost: 1800,
			glowyOreUpgradeCost: 200,
			blacksmithLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Hog_Rider_Puppet.png/revision/latest/scale-to-width-down/200?cb=20240225143837',
		},
		{
			level: 10,
			abilityAttribute: {
				abilityDuration: 10.5,
				movementSpeedIncrease: 28.7,
				attackSpeedIncrease: 80,
			},
			heroBoost: {
				damagePerSecondIncrease: 56,
				attackSpeedIncrease: 12,
			},
			shinyOreUpgradeCost: 1900,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Hog_Rider_Puppet.png/revision/latest/scale-to-width-down/200?cb=20240225143837',
		},
		{
			level: 11,
			abilityAttribute: {
				abilityDuration: 10.5,
				movementSpeedIncrease: 28.7,
				attackSpeedIncrease: 80,
			},
			heroBoost: {
				damagePerSecondIncrease: 60,
				attackSpeedIncrease: 13,
			},
			shinyOreUpgradeCost: 2000,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Hog_Rider_Puppet.png/revision/latest/scale-to-width-down/200?cb=20240225143837',
		},
		{
			level: 12,
			abilityAttribute: {
				abilityDuration: 11,
				movementSpeedIncrease: 32,
				attackSpeedIncrease: 80,
			},
			heroBoost: {
				damagePerSecondIncrease: 64,
				attackSpeedIncrease: 13,
			},
			shinyOreUpgradeCost: 2100,
			glowyOreUpgradeCost: 400,
			blacksmithLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Hog_Rider_Puppet.png/revision/latest/scale-to-width-down/200?cb=20240225143837',
		},
		{
			level: 13,
			abilityAttribute: {
				abilityDuration: 11,
				movementSpeedIncrease: 32,
				attackSpeedIncrease: 80,
			},
			heroBoost: {
				damagePerSecondIncrease: 68,
				attackSpeedIncrease: 14,
			},
			shinyOreUpgradeCost: 2200,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Hog_Rider_Puppet.png/revision/latest/scale-to-width-down/200?cb=20240225143837',
		},
		{
			level: 14,
			abilityAttribute: {
				abilityDuration: 11,
				movementSpeedIncrease: 32,
				attackSpeedIncrease: 80,
			},
			heroBoost: {
				damagePerSecondIncrease: 72,
				attackSpeedIncrease: 15,
			},
			shinyOreUpgradeCost: 2300,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Hog_Rider_Puppet.png/revision/latest/scale-to-width-down/200?cb=20240225143837',
		},
		{
			level: 15,
			abilityAttribute: {
				abilityDuration: 11.5,
				movementSpeedIncrease: 35.1,
				attackSpeedIncrease: 100,
			},
			heroBoost: {
				damagePerSecondIncrease: 76,
				attackSpeedIncrease: 15,
			},
			shinyOreUpgradeCost: 2400,
			glowyOreUpgradeCost: 600,
			blacksmithLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Hog_Rider_Puppet.png/revision/latest/scale-to-width-down/200?cb=20240225143837',
		},
		{
			level: 16,
			abilityAttribute: {
				abilityDuration: 11.5,
				movementSpeedIncrease: 35.1,
				attackSpeedIncrease: 100,
			},
			heroBoost: {
				damagePerSecondIncrease: 80,
				attackSpeedIncrease: 16,
			},
			shinyOreUpgradeCost: 2500,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Hog_Rider_Puppet.png/revision/latest/scale-to-width-down/200?cb=20240225143837',
		},
		{
			level: 17,
			abilityAttribute: {
				abilityDuration: 11.5,
				movementSpeedIncrease: 35.1,
				attackSpeedIncrease: 100,
			},
			heroBoost: {
				damagePerSecondIncrease: 84,
				attackSpeedIncrease: 17,
			},
			shinyOreUpgradeCost: 2600,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Hog_Rider_Puppet.png/revision/latest/scale-to-width-down/200?cb=20240225143837',
		},
		{
			level: 18,
			abilityAttribute: {
				abilityDuration: 12,
				movementSpeedIncrease: 38.3,
				attackSpeedIncrease: 100,
			},
			heroBoost: {
				damagePerSecondIncrease: 88,
				attackSpeedIncrease: 18,
			},
			shinyOreUpgradeCost: 2700,
			glowyOreUpgradeCost: 600,
			blacksmithLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Hog_Rider_Puppet.png/revision/latest/scale-to-width-down/200?cb=20240225143837',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
