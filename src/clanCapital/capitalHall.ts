import * as Constants from '@/constants'
import Level from '@IClanCapital/capitalHall/level.interface'
import CapitalHall from '@IClanCapital/capitalHall/capitalHall.interface'

const capitalHall: CapitalHall = {
	name: 'Capital Hall',
	description:
		'The heart of the Capital! Upgrade to unlock new Districts and additional building upgrades in Capital Peak.',
	width: 6,
	height: 6,
	maxLevel: 10,
	mode: {
		name: Constants.mainMode,
		minRange: 0,
		maxRange: 15,
		attackSpeed: 8,
		damageType: Constants.areaSplash,
		unitTypeTarget: Constants.groundAndAir,
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 0,
			damagePerShot: 0,
			hitpoints: 10000,
			buildCost: 0,
			buildCostResource: Constants.capitalGold,
			capitalUpgradesRequired: 0,
			newCapitalUpgradesRequired: 0,
			maximumNumberOfBuildingsAvailable: 63,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ed/Capital_Hall1.png/revision/latest/scale-to-width-down/120?cb=20221125041038',
			activeImgUrl: '',
		},
		{
			level: 2,
			damagePerSecond: 80,
			damagePerShot: 640,
			hitpoints: 14000,
			buildCost: 50000,
			buildCostResource: Constants.capitalGold,
			capitalUpgradesRequired: 15,
			newCapitalUpgradesRequired: 15,
			maximumNumberOfBuildingsAvailable: 66,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ea/Capital_Hall2.png/revision/latest/scale-to-width-down/120?cb=20221125041046',
			activeImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ed/Capital_Hall2_Active.png/revision/latest/scale-to-width-down/120?cb=20221125041258',
		},
		{
			level: 3,
			damagePerSecond: 100,
			damagePerShot: 800,
			hitpoints: 18000,
			buildCost: 75000,
			buildCostResource: Constants.capitalGold,
			capitalUpgradesRequired: 65,
			newCapitalUpgradesRequired: 50,
			maximumNumberOfBuildingsAvailable: 71,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fb/Capital_Hall3.png/revision/latest/scale-to-width-down/120?cb=20221125041103',
			activeImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c6/Capital_Hall3_Active.png/revision/latest/scale-to-width-down/120?cb=20221125041259',
		},
		{
			level: 4,
			damagePerSecond: 120,
			damagePerShot: 960,
			hitpoints: 22000,
			buildCost: 100000,
			buildCostResource: Constants.capitalGold,
			capitalUpgradesRequired: 165,
			newCapitalUpgradesRequired: 100,
			maximumNumberOfBuildingsAvailable: 77,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fa/Capital_Hall4.png/revision/latest/scale-to-width-down/120?cb=20221125041119',
			activeImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/65/Capital_Hall4_Active.png/revision/latest/scale-to-width-down/120?cb=20221125041300',
		},
		{
			level: 5,
			damagePerSecond: 140,
			damagePerShot: 1120,
			hitpoints: 25000,
			buildCost: 150000,
			buildCostResource: Constants.capitalGold,
			capitalUpgradesRequired: 285,
			newCapitalUpgradesRequired: 120,
			maximumNumberOfBuildingsAvailable: 83,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/86/Capital_Hall5.png/revision/latest/scale-to-width-down/120?cb=20221125041133',
			activeImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b7/Capital_Hall5_Active.png/revision/latest/scale-to-width-down/120?cb=20221125041301',
		},
		{
			level: 6,
			damagePerSecond: 160,
			damagePerShot: 1280,
			hitpoints: 28000,
			buildCost: 200000,
			buildCostResource: Constants.capitalGold,
			capitalUpgradesRequired: 480,
			newCapitalUpgradesRequired: 195,
			maximumNumberOfBuildingsAvailable: 89,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d2/Capital_Hall6.png/revision/latest/scale-to-width-down/120?cb=20221125041146',
			activeImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/21/Capital_Hall6_Active.png/revision/latest/scale-to-width-down/120?cb=20221125041302',
		},
		{
			level: 7,
			damagePerSecond: 190,
			damagePerShot: 1520,
			hitpoints: 31000,
			buildCost: 400000,
			buildCostResource: Constants.capitalGold,
			capitalUpgradesRequired: 670,
			newCapitalUpgradesRequired: 190,
			maximumNumberOfBuildingsAvailable: 94,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a5/Capital_Hall7.png/revision/latest/scale-to-width-down/120?cb=20221125041158',
			activeImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/36/Capital_Hall7_Active.png/revision/latest/scale-to-width-down/120?cb=20221125041303',
		},
		{
			level: 8,
			damagePerSecond: 220,
			damagePerShot: 1760,
			hitpoints: 34000,
			buildCost: 600000,
			buildCostResource: Constants.capitalGold,
			capitalUpgradesRequired: 1090,
			newCapitalUpgradesRequired: 420,
			maximumNumberOfBuildingsAvailable: 96,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/14/Capital_Hall8.png/revision/latest/scale-to-width-down/120?cb=20221125041210',
			activeImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/12/Capital_Hall8_Active.png/revision/latest/scale-to-width-down/120?cb=20221125041304',
		},
		{
			level: 9,
			damagePerSecond: 250,
			damagePerShot: 2000,
			hitpoints: 37000,
			buildCost: 800000,
			buildCostResource: Constants.capitalGold,
			capitalUpgradesRequired: 1500,
			newCapitalUpgradesRequired: 410,
			maximumNumberOfBuildingsAvailable: 98,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/46/Capital_Hall9.png/revision/latest/scale-to-width-down/120?cb=20221125041226',
			activeImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/2c/Capital_Hall9_Active.png/revision/latest/scale-to-width-down/120?cb=20221125041305',
		},
		{
			level: 10,
			damagePerSecond: 280,
			damagePerShot: 2240,
			hitpoints: 40000,
			buildCost: 1000000,
			buildCostResource: Constants.capitalGold,
			capitalUpgradesRequired: 2000,
			newCapitalUpgradesRequired: 500,
			maximumNumberOfBuildingsAvailable: 100,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/2c/Capital_Hall10.png/revision/latest/scale-to-width-down/120?cb=20221125041238',
			activeImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/1b/Capital_Hall10_Active.png/revision/latest/scale-to-width-down/120?cb=20221125041307',
		},
	],
	getSize(): string {
		return `${this.width}x${this.height}`
	},
	getLevel(level: number): Level | undefined {
		if (level >= 1 && level <= this.levels.length) {
			return this.levels[level - 1]
		} else {
			console.error(`Invalid ${this.name} level: ${level}`)
			return undefined
		}
	},
}

export default capitalHall
