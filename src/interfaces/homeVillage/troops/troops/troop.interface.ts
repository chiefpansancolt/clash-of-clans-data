import TroopMain from '@ICommon/army/troops/troop.interface'
import Mode from '@IHomeVillage/troops/troops/mode.interface'
import Training from '@ICommon/army/training.interface'

interface Troop extends TroopMain {
    mode: Mode | Mode[]
    training: Training
    researchCost: string
    researchCostResource: string
    researchTimeSec: number
    researchTimeMin: number
    researchTimeHour: number
    researchTimeDay: number
}

export default Troop
