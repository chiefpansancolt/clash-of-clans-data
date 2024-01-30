import Level from '@IHomeVillage/resources/clanCastle/level.interface'
import Mode from '@IHomeVillage/resources/clanCastle/mode.interface'
import Treasury from '@IHomeVillage/resources/clanCastle/treasury.interface'
import TreasuryCapacity from '@IHomeVillage/resources/clanCastle/treasuryCapacity.interface'
import TownHallDetails from '@ICommon/townHall/details.interface'
import Achievement from '@ICommon/achievement/achievement.interface'

interface Resource {
	name: string
	description: string
	width: number
	height: number
	maxLevel: number
	maxCount: number
	ruinImgUrl: string
	mode: Mode | Mode[]
	townHallDetails: TownHallDetails[]
	levels: Level[]
	treasuryCapacities: Treasury[]
	achievement: Achievement | Achievement[]

	getSize(): string
	getLevel(level: number): Level | undefined
	getTownHallLevel(level: number): TownHallDetails | undefined
	getTreasuryLevel(clanLevel: number, townHallLevel: number): TreasuryCapacity | undefined
}

export default Resource
