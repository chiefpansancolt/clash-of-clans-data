import ResourceBase from '@ICommon/resources/resource.interface'
import TownHallDetails from '@IHomeVillage/townHall/details.interface'
import Level from '@IHomeVillage/resources/level.interface'
import Mode from '@IHomeVillage/resources/mode.interface'
import Treasury from '@IHomeVillage/resources/treasury.interface'
import TreasuryCapacity from '@IHomeVillage/resources/treasuryCapacity.interface'
import Achievement from '@ICommon/achievement/achievement.interface'

interface Resource extends ResourceBase {
	levels: Level[]
	townHallDetails: TownHallDetails[]
	ruinImgUrl?: string
	mode?: Mode | Mode[]
	treasuryCapacities?: Treasury[]
	achievement?: Achievement | Achievement[]

	getSize(): string
	getLevel(level: number): Level | undefined
	getTownHallLevel(level: number): TownHallDetails | undefined
	getTreasuryLevel?(clanLevel: number, townHallLevel: number): TreasuryCapacity | undefined
}

export default Resource
