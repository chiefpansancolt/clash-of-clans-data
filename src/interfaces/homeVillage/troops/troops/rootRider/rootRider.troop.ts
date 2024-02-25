import HomeVillageTroop from '@IHomeVillage/troops/troops/troop.interface'
import Mode from '@IHomeVillage/troops/troops/rootRider/rootRider.mode'

interface Troop extends HomeVillageTroop {
    mode: Mode | Mode[]
    
}