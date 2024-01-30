import LeagueLevel from '@ICommon/leagues/level.interface'

interface Level extends LeagueLevel {
	demotionTrophyCount: number
	promotionTrophyCount: number
	maxGoldLeagueBonus: number
	maxElixirLeagueBonus: number
	maxDarkElixirLeagueBonus: number
	starBonusGold: number
	starBonusElixir: number
	starBonusDarkElixir: number
	starBonusShinyOre: number
	starBonusGlowyOre: number
}

export default Level
