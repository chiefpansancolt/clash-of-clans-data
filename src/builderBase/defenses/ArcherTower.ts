import * as Constants from '../../Constats'
import {
  TownHallDefense,
  BuilderBaseLevel,
  BuilderBaseDefense,
  AchievementLevel,
} from '../../CommonInterfaces'

const cannon: BuilderBaseDefense = {
  name: 'Archer Tower',
  description:
    "No foe can escape the Archer's arrows. This tower has a special switch - choose long range or fast attack!",
  maxCount: 3,
  minRange: 10,
  maxRange: 10,
  tiles: 0,
  attackSpeed: 1,
  width: 3,
  height: 3,
  damageType: Constants.singleTarget,
  unitTypeTarget: Constants.groundAndAir,
  maxLevel: 10,
  townHallDetails: [
    { townHall: 1, availableCount: 0, maxLevel: 0 },
    { townHall: 2, availableCount: 1, maxLevel: 1 },
    { townHall: 3, availableCount: 1, maxLevel: 3 },
    { townHall: 4, availableCount: 2, maxLevel: 4 },
    { townHall: 5, availableCount: 2, maxLevel: 5 },
    { townHall: 6, availableCount: 3, maxLevel: 6 },
    { townHall: 7, availableCount: 3, maxLevel: 7 },
    { townHall: 8, availableCount: 3, maxLevel: 8 },
    { townHall: 9, availableCount: 3, maxLevel: 9 },
    { townHall: 10, availableCount: 3, maxLevel: 10 },
  ],
  achievements: [],
  levels: [
    {
      level: 1,
      damagePerSecond: 40,
      damagePerShot: 40,
      hitpoints: 500,
      buildCost: 12000,
      buildCostResource: Constants.builderGold,
      buildTimeSec: 0,
      buildTimeMin: 5,
      buildTimeHour: 0,
      buildTimeDay: 0,
      exp: 17,
      townHallLevelRequired: 2,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/c/cd/Archer_Tower1B.png/revision/latest/scale-to-width-down/100?cb=20171108194356',
    },
    {
      level: 2,
      damagePerSecond: 44,
      damagePerShot: 44,
      hitpoints: 575,
      buildCost: 30000,
      buildCostResource: Constants.builderGold,
      buildTimeSec: 0,
      buildTimeMin: 15,
      buildTimeHour: 0,
      buildTimeDay: 0,
      exp: 30,
      townHallLevelRequired: 3,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/e/e9/Archer_Tower2B.png/revision/latest/scale-to-width-down/100?cb=20171108194356',
    },
    {
      level: 3,
      damagePerSecond: 48,
      damagePerShot: 48,
      hitpoints: 660,
      buildCost: 60000,
      buildCostResource: Constants.builderGold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 2,
      buildTimeDay: 0,
      exp: 84,
      townHallLevelRequired: 3,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/5/51/Archer_Tower3B.png/revision/latest/scale-to-width-down/100?cb=20171108194357',
    },
    {
      level: 4,
      damagePerSecond: 53,
      damagePerShot: 53,
      hitpoints: 760,
      buildCost: 250000,
      buildCostResource: Constants.builderGold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 8,
      buildTimeDay: 0,
      exp: 169,
      townHallLevelRequired: 4,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/e/ed/Archer_Tower4B.png/revision/latest/scale-to-width-down/100?cb=20171108194357',
    },
    {
      level: 5,
      damagePerSecond: 59,
      damagePerShot: 59,
      hitpoints: 875,
      buildCost: 800000,
      buildCostResource: Constants.builderGold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 0,
      buildTimeDay: 1,
      exp: 293,
      townHallLevelRequired: 5,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/8/8d/Archer_Tower5B.png/revision/latest/scale-to-width-down/100?cb=20171108194357',
    },
    {
      level: 6,
      damagePerSecond: 64,
      damagePerShot: 64,
      hitpoints: 1050,
      buildCost: 1200000,
      buildCostResource: Constants.builderGold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 0,
      buildTimeDay: 2,
      exp: 415,
      townHallLevelRequired: 6,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/1/1d/Archer_Tower6B.png/revision/latest/scale-to-width-down/100?cb=20171108194358',
    },
    {
      level: 7,
      damagePerSecond: 71,
      damagePerShot: 71,
      hitpoints: 1250,
      buildCost: 2000000,
      buildCostResource: Constants.builderGold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 0,
      buildTimeDay: 4,
      exp: 587,
      townHallLevelRequired: 7,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/4/44/Archer_Tower7B.png/revision/latest/scale-to-width-down/100?cb=20171108194358',
    },
    {
      level: 8,
      damagePerSecond: 78,
      damagePerShot: 78,
      hitpoints: 1450,
      buildCost: 2800000,
      buildCostResource: Constants.builderGold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 0,
      buildTimeDay: 6,
      exp: 720,
      townHallLevelRequired: 8,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/2/28/Archer_Tower8B.png/revision/latest/scale-to-width-down/100?cb=20171108194359',
    },
    {
      level: 9,
      damagePerSecond: 86,
      damagePerShot: 86,
      hitpoints: 1650,
      buildCost: 3600000,
      buildCostResource: Constants.builderGold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 0,
      buildTimeDay: 8,
      exp: 831,
      townHallLevelRequired: 9,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/0/0c/Archer_Tower9B.png/revision/latest/scale-to-width-down/100?cb=20190616220059',
    },
    {
      level: 10,
      damagePerSecond: 94,
      damagePerShot: 94,
      hitpoints: 1850,
      buildCost: 4600000,
      buildCostResource: Constants.builderGold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 0,
      buildTimeDay: 9,
      exp: 881,
      townHallLevelRequired: 10,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/4/4c/Archer_Tower10B.png/revision/latest/scale-to-width-down/100?cb=20230516045047',
    },
  ],
  getSize(): string {
    return `${this.width}x${this.height}`
  },
  getLevel(level: number): BuilderBaseLevel | undefined {
    if (level >= 1 && level <= this.levels.length) {
      return this.levels[level - 1]
    } else {
      console.error(`Invalid Archer Tower level: ${level}`)
      return undefined
    }
  },
  getTownHallLevel(level: number): TownHallDefense | undefined {
    if (level >= 1 && level <= this.townHallDetails.length) {
      return this.townHallDetails[level - 1]
    } else {
      console.error(`Invalid Town Hall level: ${level}`)
      return undefined
    }
  },
  getAchievementLevel(
    level: number,
    count: number
  ): AchievementLevel | undefined {
    if (level && level >= 1 && level <= this.achievements[0].levels.length) {
      return this.achievements[0].levels[level - 1]
    } else if (count) {
      for (const achievementLevel of this.achievements[0].levels) {
        if (count < achievementLevel.target) {
          return achievementLevel
        }
      }

      return this.achievements[0].levels[this.achievements[0].levels.length - 1]
    } else {
      console.error(
        `Invalid Achievement level: ${level} or Invalid Count used: ${count}`
      )
      return undefined
    }
  },
}

export default cannon
