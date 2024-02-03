import HomeVillageDefense from '@IHomeVillage/defenses/defense.interface'
import Mode from '@IHomeVillage/defenses/wizardTower/mode.interface'

interface Defense extends HomeVillageDefense {
	mode?: Mode | Mode[]
}

export default Defense
