import ArmyLevel from '@IHomeVillage/army/level.interface'

interface Level extends ArmyLevel {
	unlockedSiegeMachine: string
	siegeMachineCapacity: number
}

export default Level
