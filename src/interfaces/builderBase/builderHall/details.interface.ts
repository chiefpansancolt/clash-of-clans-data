import HallDetails from '@ICommon/hall/details.interface'

interface BuilderHallDetails extends HallDetails {
	builderHallLevel: number
	stage1MaxCount: number
	stage2MaxCount: number
}

export default BuilderHallDetails
