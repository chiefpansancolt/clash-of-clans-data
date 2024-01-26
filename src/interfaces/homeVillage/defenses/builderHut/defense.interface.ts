import HomeVillageDefense from '@IHomeVillage/defense.interface'
import Cost from '@IHomeVillage/defenses/builderHut/cost.interface'
import Mode from '@IHomeVillage/defenses/builderHut/mode.interface'
import Level from '@IHomeVillage/defenses/builderHut/level.interface'

interface Defense extends HomeVillageDefense {
	modes: Mode[]
	costs: Cost[]
	levels: Level[]

	getLevel(level: number): Level | undefined
}

export default Defense
