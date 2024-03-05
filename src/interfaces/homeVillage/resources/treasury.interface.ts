import Capacity from '@IHomeVillage/resources/treasuryCapacity.interface'

interface Treasury {
	name: string
	level: number
	capacityLevels: Capacity[]
}

export default Treasury
