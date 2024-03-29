import League from '@IHomeVillage/leagues/league.interface'
import Level from '@IHomeVillage/leagues/level.interface'

const trophies: League = {
	levels: [
		{
			name: 'Unranked',
			leagueImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c0/Unranked_League.png/revision/latest/scale-to-width-down/25?cb=20171003011534',
			minTrophyRange: 0,
			maxTrophyRange: 399,
			demotionTrophyCount: 0,
			promotionTrophyCount: 400,
			maxGoldLeagueBonus: 0,
			maxElixirLeagueBonus: 0,
			maxDarkElixirLeagueBonus: 0,
			starBonusGold: 50000,
			starBonusElixir: 50000,
			starBonusDarkElixir: 0,
			starBonusShinyOre: 0,
			starBonusGlowyOre: 0,
		},
		{
			name: 'Bronze III',
			leagueImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/9e/Bronze3.png/revision/latest/scale-to-width-down/25?cb=20160401050941',
			minTrophyRange: 400,
			maxTrophyRange: 499,
			demotionTrophyCount: 300,
			promotionTrophyCount: 500,
			maxGoldLeagueBonus: 700,
			maxElixirLeagueBonus: 700,
			maxDarkElixirLeagueBonus: 0,
			starBonusGold: 100000,
			starBonusElixir: 100000,
			starBonusDarkElixir: 250,
			starBonusShinyOre: 125,
			starBonusGlowyOre: 6,
		},
		{
			name: 'Bronze II',
			leagueImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/82/Bronze2.png/revision/latest/scale-to-width-down/25?cb=20160401050940',
			minTrophyRange: 500,
			maxTrophyRange: 599,
			demotionTrophyCount: 450,
			promotionTrophyCount: 600,
			maxGoldLeagueBonus: 1000,
			maxElixirLeagueBonus: 1000,
			maxDarkElixirLeagueBonus: 0,
			starBonusGold: 150000,
			starBonusElixir: 150000,
			starBonusDarkElixir: 500,
			starBonusShinyOre: 175,
			starBonusGlowyOre: 7,
		},
		{
			name: 'Bronze I',
			leagueImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fa/Bronze1.png/revision/latest/scale-to-width-down/25?cb=20160401050940',
			minTrophyRange: 600,
			maxTrophyRange: 799,
			demotionTrophyCount: 550,
			promotionTrophyCount: 800,
			maxGoldLeagueBonus: 1300,
			maxElixirLeagueBonus: 1300,
			maxDarkElixirLeagueBonus: 0,
			starBonusGold: 200000,
			starBonusElixir: 200000,
			starBonusDarkElixir: 750,
			starBonusShinyOre: 175,
			starBonusGlowyOre: 8,
		},
		{
			name: 'Silver III',
			leagueImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/1f/Silver3.png/revision/latest/scale-to-width-down/25?cb=20160401051818',
			minTrophyRange: 800,
			maxTrophyRange: 999,
			demotionTrophyCount: 700,
			promotionTrophyCount: 1000,
			maxGoldLeagueBonus: 2600,
			maxElixirLeagueBonus: 2600,
			maxDarkElixirLeagueBonus: 0,
			starBonusGold: 250000,
			starBonusElixir: 250000,
			starBonusDarkElixir: 1000,
			starBonusShinyOre: 200,
			starBonusGlowyOre: 9,
		},
		{
			name: 'Silver II',
			leagueImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/91/Silver2.png/revision/latest/scale-to-width-down/25?cb=20160401051818',
			minTrophyRange: 1000,
			maxTrophyRange: 1199,
			demotionTrophyCount: 900,
			promotionTrophyCount: 1200,
			maxGoldLeagueBonus: 3700,
			maxElixirLeagueBonus: 3700,
			maxDarkElixirLeagueBonus: 0,
			starBonusGold: 300000,
			starBonusElixir: 300000,
			starBonusDarkElixir: 1250,
			starBonusShinyOre: 250,
			starBonusGlowyOre: 10,
		},
		{
			name: 'Silver I',
			leagueImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/80/Silver1.png/revision/latest/scale-to-width-down/25?cb=20160401051818',
			minTrophyRange: 1200,
			maxTrophyRange: 1399,
			demotionTrophyCount: 1100,
			promotionTrophyCount: 1400,
			maxGoldLeagueBonus: 4800,
			maxElixirLeagueBonus: 4800,
			maxDarkElixirLeagueBonus: 0,
			starBonusGold: 350000,
			starBonusElixir: 350000,
			starBonusDarkElixir: 1500,
			starBonusShinyOre: 275,
			starBonusGlowyOre: 11,
		},
		{
			name: 'Gold III',
			leagueImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b7/Gold3.png/revision/latest/scale-to-width-down/25?cb=20160401051112',
			minTrophyRange: 1400,
			maxTrophyRange: 1599,
			demotionTrophyCount: 1300,
			promotionTrophyCount: 1600,
			maxGoldLeagueBonus: 10000,
			maxElixirLeagueBonus: 10000,
			maxDarkElixirLeagueBonus: 0,
			starBonusGold: 400000,
			starBonusElixir: 400000,
			starBonusDarkElixir: 1750,
			starBonusShinyOre: 300,
			starBonusGlowyOre: 12,
		},
		{
			name: 'Gold II',
			leagueImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ec/Gold2.png/revision/latest/scale-to-width-down/25?cb=20160401051112',
			minTrophyRange: 1600,
			maxTrophyRange: 1799,
			demotionTrophyCount: 1500,
			promotionTrophyCount: 1800,
			maxGoldLeagueBonus: 13500,
			maxElixirLeagueBonus: 13500,
			maxDarkElixirLeagueBonus: 0,
			starBonusGold: 450000,
			starBonusElixir: 450000,
			starBonusDarkElixir: 2000,
			starBonusShinyOre: 325,
			starBonusGlowyOre: 14,
		},
		{
			name: 'Gold I',
			leagueImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d8/Gold1.png/revision/latest/scale-to-width-down/25?cb=20160401051112',
			minTrophyRange: 1800,
			maxTrophyRange: 1999,
			demotionTrophyCount: 1700,
			promotionTrophyCount: 2000,
			maxGoldLeagueBonus: 17000,
			maxElixirLeagueBonus: 17000,
			maxDarkElixirLeagueBonus: 0,
			starBonusGold: 500000,
			starBonusElixir: 500000,
			starBonusDarkElixir: 2250,
			starBonusShinyOre: 350,
			starBonusGlowyOre: 16,
		},
		{
			name: 'Crystal III',
			leagueImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/56/Crystal3.png/revision/latest/scale-to-width-down/25?cb=20160401051112',
			minTrophyRange: 2000,
			maxTrophyRange: 2199,
			demotionTrophyCount: 1900,
			promotionTrophyCount: 2200,
			maxGoldLeagueBonus: 40000,
			maxElixirLeagueBonus: 40000,
			maxDarkElixirLeagueBonus: 120,
			starBonusGold: 550000,
			starBonusElixir: 550000,
			starBonusDarkElixir: 2500,
			starBonusShinyOre: 375,
			starBonusGlowyOre: 18,
		},
		{
			name: 'Crystal II',
			leagueImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/12/Crystal2.png/revision/latest/scale-to-width-down/25?cb=20160401051111',
			minTrophyRange: 2200,
			maxTrophyRange: 2399,
			demotionTrophyCount: 2100,
			promotionTrophyCount: 2400,
			maxGoldLeagueBonus: 55000,
			maxElixirLeagueBonus: 55000,
			maxDarkElixirLeagueBonus: 220,
			starBonusGold: 600000,
			starBonusElixir: 600000,
			starBonusDarkElixir: 2750,
			starBonusShinyOre: 400,
			starBonusGlowyOre: 20,
		},
		{
			name: 'Crystal I',
			leagueImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/df/Crystal1.png/revision/latest/scale-to-width-down/25?cb=20160401051111',
			minTrophyRange: 2400,
			maxTrophyRange: 2599,
			demotionTrophyCount: 2300,
			promotionTrophyCount: 2600,
			maxGoldLeagueBonus: 70000,
			maxElixirLeagueBonus: 70000,
			maxDarkElixirLeagueBonus: 320,
			starBonusGold: 650000,
			starBonusElixir: 650000,
			starBonusDarkElixir: 3000,
			starBonusShinyOre: 425,
			starBonusGlowyOre: 22,
		},
		{
			name: 'Master III',
			leagueImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/46/Master3.png/revision/latest/scale-to-width-down/25?cb=20160401051817',
			minTrophyRange: 2600,
			maxTrophyRange: 2799,
			demotionTrophyCount: 2500,
			promotionTrophyCount: 2800,
			maxGoldLeagueBonus: 110000,
			maxElixirLeagueBonus: 110000,
			maxDarkElixirLeagueBonus: 560,
			starBonusGold: 700000,
			starBonusElixir: 700000,
			starBonusDarkElixir: 3250,
			starBonusShinyOre: 450,
			starBonusGlowyOre: 24,
		},
		{
			name: 'Master II',
			leagueImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f4/Master2.png/revision/latest/scale-to-width-down/25?cb=20160401051817',
			minTrophyRange: 2800,
			maxTrophyRange: 2999,
			demotionTrophyCount: 2700,
			promotionTrophyCount: 3000,
			maxGoldLeagueBonus: 135000,
			maxElixirLeagueBonus: 135000,
			maxDarkElixirLeagueBonus: 740,
			starBonusGold: 750000,
			starBonusElixir: 750000,
			starBonusDarkElixir: 3500,
			starBonusShinyOre: 500,
			starBonusGlowyOre: 26,
		},
		{
			name: 'Master I',
			leagueImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/86/Master1.png/revision/latest/scale-to-width-down/25?cb=20160401051113',
			minTrophyRange: 3000,
			maxTrophyRange: 3199,
			demotionTrophyCount: 2900,
			promotionTrophyCount: 3200,
			maxGoldLeagueBonus: 160000,
			maxElixirLeagueBonus: 160000,
			maxDarkElixirLeagueBonus: 920,
			starBonusGold: 800000,
			starBonusElixir: 800000,
			starBonusDarkElixir: 3750,
			starBonusShinyOre: 525,
			starBonusGlowyOre: 28,
		},
		{
			name: 'Champion III',
			leagueImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/44/Champion3.png/revision/latest/scale-to-width-down/25?cb=20160401050941',
			minTrophyRange: 3200,
			maxTrophyRange: 3499,
			demotionTrophyCount: 3100,
			promotionTrophyCount: 3500,
			maxGoldLeagueBonus: 200000,
			maxElixirLeagueBonus: 200000,
			maxDarkElixirLeagueBonus: 1220,
			starBonusGold: 850000,
			starBonusElixir: 850000,
			starBonusDarkElixir: 4000,
			starBonusShinyOre: 550,
			starBonusGlowyOre: 30,
		},
		{
			name: 'Champion II',
			leagueImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/77/Champion2.png/revision/latest/scale-to-width-down/25?cb=20160401050941',
			minTrophyRange: 3500,
			maxTrophyRange: 3799,
			demotionTrophyCount: 3400,
			promotionTrophyCount: 3800,
			maxGoldLeagueBonus: 225000,
			maxElixirLeagueBonus: 225000,
			maxDarkElixirLeagueBonus: 1400,
			starBonusGold: 900000,
			starBonusElixir: 900000,
			starBonusDarkElixir: 4250,
			starBonusShinyOre: 625,
			starBonusGlowyOre: 34,
		},
		{
			name: 'Champion I',
			leagueImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f0/Champion1.png/revision/latest/scale-to-width-down/25?cb=20160401050941',
			minTrophyRange: 3800,
			maxTrophyRange: 4099,
			demotionTrophyCount: 3700,
			promotionTrophyCount: 4100,
			maxGoldLeagueBonus: 250000,
			maxElixirLeagueBonus: 250000,
			maxDarkElixirLeagueBonus: 1580,
			starBonusGold: 940000,
			starBonusElixir: 940000,
			starBonusDarkElixir: 4500,
			starBonusShinyOre: 700,
			starBonusGlowyOre: 38,
		},
		{
			name: 'Titan III',
			leagueImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/3e/Titan3.png/revision/latest/scale-to-width-down/25?cb=20160401051819',
			minTrophyRange: 4100,
			maxTrophyRange: 4399,
			demotionTrophyCount: 4000,
			promotionTrophyCount: 4400,
			maxGoldLeagueBonus: 280000,
			maxElixirLeagueBonus: 280000,
			maxDarkElixirLeagueBonus: 1880,
			starBonusGold: 980000,
			starBonusElixir: 980000,
			starBonusDarkElixir: 4750,
			starBonusShinyOre: 775,
			starBonusGlowyOre: 42,
		},
		{
			name: 'Titan II',
			leagueImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/60/Titan2.png/revision/latest/scale-to-width-down/25?cb=20160401051819',
			minTrophyRange: 4400,
			maxTrophyRange: 4699,
			demotionTrophyCount: 4300,
			promotionTrophyCount: 4700,
			maxGoldLeagueBonus: 300000,
			maxElixirLeagueBonus: 300000,
			maxDarkElixirLeagueBonus: 2060,
			starBonusGold: 1020000,
			starBonusElixir: 1020000,
			starBonusDarkElixir: 5000,
			starBonusShinyOre: 850,
			starBonusGlowyOre: 46,
		},
		{
			name: 'Titan I',
			leagueImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/61/Titan1.png/revision/latest/scale-to-width-down/25?cb=20160401051818',
			minTrophyRange: 4700,
			maxTrophyRange: 4999,
			demotionTrophyCount: 4600,
			promotionTrophyCount: 5000,
			maxGoldLeagueBonus: 320000,
			maxElixirLeagueBonus: 320000,
			maxDarkElixirLeagueBonus: 2240,
			starBonusGold: 1060000,
			starBonusElixir: 1060000,
			starBonusDarkElixir: 5250,
			starBonusShinyOre: 925,
			starBonusGlowyOre: 50,
		},
		{
			name: 'Legend',
			leagueImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/10/Legend.png/revision/latest/scale-to-width-down/25?cb=20160401051113',
			minTrophyRange: 5000,
			maxTrophyRange: 99999,
			demotionTrophyCount: 4900,
			promotionTrophyCount: 0,
			maxGoldLeagueBonus: 340000,
			maxElixirLeagueBonus: 340000,
			maxDarkElixirLeagueBonus: 2400,
			starBonusGold: 1100000,
			starBonusElixir: 1100000,
			starBonusDarkElixir: 5500,
			starBonusShinyOre: 1000,
			starBonusGlowyOre: 54,
		},
	],
	getLeagueByName(name: string): Level | undefined {
		const leagueResult = this.levels.find((level) => level.name === name)

		if (leagueResult) {
			return leagueResult
		} else {
			console.error(`League not found by name used ${name}`)
			return undefined
		}
	},
	getLeagueByTrophy(trophy: number): Level | undefined {
		const leagueResult = this.levels.find(
			(level) => level.minTrophyRange >= trophy && level.maxTrophyRange <= trophy
		)

		if (leagueResult) {
			return leagueResult
		} else {
			console.error(`League not found by trophy count used ${trophy}`)
			return undefined
		}
	},
}

export default trophies
