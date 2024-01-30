import Capacity from '@IHomeVillage/resources/clanCastle/treasuryCapacity.interface'

interface Treasury {
	name: string
	level: number
	capacityLevels: Capacity[]
}

export default Treasury
