import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Hog Rider Puppet',
	description: 'Summons a stampede of Hog Riders.',
	maxLevel: 18,
	hero: Constants.royalChampion,
	abilityType: Constants.active,
	rarity: Constants.common,
	unlockRequirement: Constants.blacksmithLevel7,
	levels: [
		{
			level: 1,
			abilityAttribute: {
				summonedTroopCount: 7,
				summonedTroopLevel: 4,
				summonedTroop: Constants.hogRiders,
			},
			heroBoost: {
				hitpointIncrease: 60,
				hitpointRecoveryIncrease: 180,
			},
			shinyOreUpgradeCost: 0,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Hog_Rider_Puppet.png/revision/latest/scale-to-width-down/200?cb=20240225143837',
		},
		{
			level: 2,
			abilityAttribute: {
				summonedTroopCount: 7,
				summonedTroopLevel: 4,
				summonedTroop: Constants.hogRiders,
			},
			heroBoost: {
				hitpointIncrease: 90,
				hitpointRecoveryIncrease: 220,
			},
			shinyOreUpgradeCost: 120,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Hog_Rider_Puppet.png/revision/latest/scale-to-width-down/200?cb=20240225143837',
		},
		{
			level: 3,
			abilityAttribute: {
				summonedTroopCount: 7,
				summonedTroopLevel: 6,
				summonedTroop: Constants.hogRiders,
			},
			heroBoost: {
				hitpointIncrease: 120,
				hitpointRecoveryIncrease: 270,
			},
			shinyOreUpgradeCost: 240,
			glowyOreUpgradeCost: 20,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Hog_Rider_Puppet.png/revision/latest/scale-to-width-down/200?cb=20240225143837',
		},
		{
			level: 4,
			abilityAttribute: {
				summonedTroopCount: 7,
				summonedTroopLevel: 6,
				summonedTroop: Constants.hogRiders,
			},
			heroBoost: {
				hitpointIncrease: 150,
				hitpointRecoveryIncrease: 320,
			},
			shinyOreUpgradeCost: 400,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Hog_Rider_Puppet.png/revision/latest/scale-to-width-down/200?cb=20240225143837',
		},
		{
			level: 5,
			abilityAttribute: {
				summonedTroopCount: 7,
				summonedTroopLevel: 6,
				summonedTroop: Constants.hogRiders,
			},
			heroBoost: {
				hitpointIncrease: 180,
				hitpointRecoveryIncrease: 370,
			},
			shinyOreUpgradeCost: 600,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Hog_Rider_Puppet.png/revision/latest/scale-to-width-down/200?cb=20240225143837',
		},
		{
			level: 6,
			abilityAttribute: {
				summonedTroopCount: 8,
				summonedTroopLevel: 7,
				summonedTroop: Constants.hogRiders,
			},
			heroBoost: {
				hitpointIncrease: 210,
				hitpointRecoveryIncrease: 420,
			},
			shinyOreUpgradeCost: 840,
			glowyOreUpgradeCost: 100,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Hog_Rider_Puppet.png/revision/latest/scale-to-width-down/200?cb=20240225143837',
		},
		{
			level: 7,
			abilityAttribute: {
				summonedTroopCount: 8,
				summonedTroopLevel: 7,
				summonedTroop: Constants.hogRiders,
			},
			heroBoost: {
				hitpointIncrease: 240,
				hitpointRecoveryIncrease: 470,
			},
			shinyOreUpgradeCost: 1120,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Hog_Rider_Puppet.png/revision/latest/scale-to-width-down/200?cb=20240225143837',
		},
		{
			level: 8,
			abilityAttribute: {
				summonedTroopCount: 8,
				summonedTroopLevel: 7,
				summonedTroop: Constants.hogRiders,
			},
			heroBoost: {
				hitpointIncrease: 270,
				hitpointRecoveryIncrease: 520,
			},
			shinyOreUpgradeCost: 1440,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Hog_Rider_Puppet.png/revision/latest/scale-to-width-down/200?cb=20240225143837',
		},
		{
			level: 9,
			abilityAttribute: {
				summonedTroopCount: 8,
				summonedTroopLevel: 9,
				summonedTroop: Constants.hogRiders,
			},
			heroBoost: {
				hitpointIncrease: 300,
				hitpointRecoveryIncrease: 560,
			},
			shinyOreUpgradeCost: 1800,
			glowyOreUpgradeCost: 200,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Hog_Rider_Puppet.png/revision/latest/scale-to-width-down/200?cb=20240225143837',
		},
		{
			level: 10,
			abilityAttribute: {
				summonedTroopCount: 8,
				summonedTroopLevel: 9,
				summonedTroop: Constants.hogRiders,
			},
			heroBoost: {
				hitpointIncrease: 330,
				hitpointRecoveryIncrease: 610,
			},
			shinyOreUpgradeCost: 1900,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Hog_Rider_Puppet.png/revision/latest/scale-to-width-down/200?cb=20240225143837',
		},
		{
			level: 11,
			abilityAttribute: {
				summonedTroopCount: 8,
				summonedTroopLevel: 9,
				summonedTroop: Constants.hogRiders,
			},
			heroBoost: {
				hitpointIncrease: 360,
				hitpointRecoveryIncrease: 660,
			},
			shinyOreUpgradeCost: 2000,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Hog_Rider_Puppet.png/revision/latest/scale-to-width-down/200?cb=20240225143837',
		},
		{
			level: 12,
			abilityAttribute: {
				summonedTroopCount: 8,
				summonedTroopLevel: 11,
				summonedTroop: Constants.hogRiders,
			},
			heroBoost: {
				hitpointIncrease: 390,
				hitpointRecoveryIncrease: 700,
			},
			shinyOreUpgradeCost: 2100,
			glowyOreUpgradeCost: 400,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Hog_Rider_Puppet.png/revision/latest/scale-to-width-down/200?cb=20240225143837',
		},
		{
			level: 13,
			abilityAttribute: {
				summonedTroopCount: 8,
				summonedTroopLevel: 11,
				summonedTroop: Constants.hogRiders,
			},
			heroBoost: {
				hitpointIncrease: 420,
				hitpointRecoveryIncrease: 750,
			},
			shinyOreUpgradeCost: 2200,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Hog_Rider_Puppet.png/revision/latest/scale-to-width-down/200?cb=20240225143837',
		},
		{
			level: 14,
			abilityAttribute: {
				summonedTroopCount: 8,
				summonedTroopLevel: 11,
				summonedTroop: Constants.hogRiders,
			},
			heroBoost: {
				hitpointIncrease: 450,
				hitpointRecoveryIncrease: 800,
			},
			shinyOreUpgradeCost: 2300,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Hog_Rider_Puppet.png/revision/latest/scale-to-width-down/200?cb=20240225143837',
		},
		{
			level: 15,
			abilityAttribute: {
				summonedTroopCount: 9,
				summonedTroopLevel: 11,
				summonedTroop: Constants.hogRiders,
			},
			heroBoost: {
				hitpointIncrease: 480,
				hitpointRecoveryIncrease: 850,
			},
			shinyOreUpgradeCost: 2400,
			glowyOreUpgradeCost: 600,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Hog_Rider_Puppet.png/revision/latest/scale-to-width-down/200?cb=20240225143837',
		},
		{
			level: 16,
			abilityAttribute: {
				summonedTroopCount: 9,
				summonedTroopLevel: 11,
				summonedTroop: Constants.hogRiders,
			},
			heroBoost: {
				hitpointIncrease: 510,
				hitpointRecoveryIncrease: 900,
			},
			shinyOreUpgradeCost: 2500,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Hog_Rider_Puppet.png/revision/latest/scale-to-width-down/200?cb=20240225143837',
		},
		{
			level: 17,
			abilityAttribute: {
				summonedTroopCount: 9,
				summonedTroopLevel: 11,
				summonedTroop: Constants.hogRiders,
			},
			heroBoost: {
				hitpointIncrease: 540,
				hitpointRecoveryIncrease: 950,
			},
			shinyOreUpgradeCost: 2600,
			glowyOreUpgradeCost: 0,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Hog_Rider_Puppet.png/revision/latest/scale-to-width-down/200?cb=20240225143837',
		},
		{
			level: 18,
			abilityAttribute: {
				summonedTroopCount: 9,
				summonedTroopLevel: 13,
				summonedTroop: Constants.hogRiders,
			},
			heroBoost: {
				hitpointIncrease: 570,
				hitpointRecoveryIncrease: 1000,
			},
			shinyOreUpgradeCost: 2700,
			glowyOreUpgradeCost: 600,
			blacksmithLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Hog_Rider_Puppet.png/revision/latest/scale-to-width-down/200?cb=20240225143837',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
