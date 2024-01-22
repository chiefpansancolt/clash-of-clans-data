export interface Level {
  level: number
  damagePerSecond: number
  damagePerShot: number
  hitpoints: number
  buildCost: number
  buildCostResource: string
  buildTimeSec: number
  buildTimeMin: number
  buildTimeHour: number
  buildTimeDay: number
  exp: number
  townHallLevelRequired: number
  baseImgUrl: string
}

export interface GearUp {
  buildCost: number
  buildTimeSec: number
  buildTimeMin: number
  buildTimeHour: number
  buildTimeDay: number
  homeVillageCannonLevelRequired: number
  doubleCannonLevelRequired: number
}

export interface TownHallDefense {
  townHall: number
  availableCount: number
  maxLevel: number
}

export interface Achievement {
  name: string
  village: string
  levels: AchievementLevel[]
}

export interface AchievementLevel {
  info: string
  exp: number
  gems: number
  stars: number
  target: number
}

export interface Defense {
  name: string
  description: string
  maxCount: number
  width: number
  height: number
  range: number
  attackSpeed: number
  damageType: string
  unitTypeTarget: string
  maxLevel: number
  townHallDetails: TownHallDefense[]
  levels: Level[]
  achievements: Achievement[]

  getSize(): string
  getLevel(levelr: number): Level | undefined
  getTownHallLevel(level: number): TownHallDefense | undefined
  getAchievementLevel(
    level: number,
    count: number
  ): AchievementLevel | undefined
}
