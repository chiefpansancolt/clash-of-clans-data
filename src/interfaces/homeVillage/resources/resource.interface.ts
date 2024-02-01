import ResourceBase from '@ICommon/resources/resource.interface'
import TownHallDetails from '@IHomeVillage/townHall/details.interface'

interface Resource extends ResourceBase {
	townHallDetails: TownHallDetails[]

	getTownHallLevel(level: number): TownHallDetails | undefined
}

export default Resource
