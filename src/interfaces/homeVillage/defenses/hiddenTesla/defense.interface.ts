import HomeVillageDefense from '@IHomeVillage/defense.interface'
import Mode from '@IHomeVillage/defenses/hiddenTesla/mode.interface'

interface Defense extends HomeVillageDefense {
	modes: Mode[]
}

export default Defense
