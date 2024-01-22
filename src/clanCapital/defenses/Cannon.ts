import * as Constants from '../../Constats'
import {
  ClanCapitalLevel,
  TownHallDefense,
  ClanCapitalDefense,
} from '../../CommonInterfaces'

const cannon: ClanCapitalDefense = {
  name: 'Cannon',
  description:
    "This cannon might be slow firing, but it makes up for it in punch. Additional drawback is that it doesn't tilt high enough to reach air targets.",
  maxCount: 3,
  minRange: 8.5,
  maxRange: 8.5,
  tiles: 0,
  attackSpeed: 0.8,
  width: 2,
  height: 2,
  damageType: Constants.singleTarget,
  unitTypeTarget: Constants.ground,
  maxLevel: 10,
  capitalHallDetails: [
    {
      name: Constants.capitalHall,
      levels: [
        { townHall: 1, availableCount: 4, maxLevel: 1 },
        { townHall: 2, availableCount: 4, maxLevel: 2 },
        { townHall: 3, availableCount: 4, maxLevel: 2 },
        { townHall: 4, availableCount: 4, maxLevel: 3 },
        { townHall: 5, availableCount: 4, maxLevel: 3 },
        { townHall: 6, availableCount: 5, maxLevel: 4 },
        { townHall: 7, availableCount: 6, maxLevel: 4 },
        { townHall: 8, availableCount: 6, maxLevel: 4 },
        { townHall: 9, availableCount: 6, maxLevel: 5 },
        { townHall: 10, availableCount: 6, maxLevel: 5 },
      ],
    },
    {
      name: Constants.barbarianCamp,
      levels: [
        { townHall: 1, availableCount: 4, maxLevel: 5 },
        { townHall: 2, availableCount: 6, maxLevel: 5 },
        { townHall: 3, availableCount: 8, maxLevel: 5 },
        { townHall: 4, availableCount: 9, maxLevel: 5 },
        { townHall: 5, availableCount: 9, maxLevel: 5 },
      ],
    },
    {
      name: Constants.wizardValley,
      levels: [
        { townHall: 1, availableCount: 4, maxLevel: 5 },
        { townHall: 2, availableCount: 5, maxLevel: 5 },
        { townHall: 3, availableCount: 6, maxLevel: 5 },
        { townHall: 4, availableCount: 7, maxLevel: 5 },
        { townHall: 5, availableCount: 7, maxLevel: 5 },
      ],
    },
    {
      name: Constants.ballonLagoon,
      levels: [
        { townHall: 1, availableCount: 8, maxLevel: 5 },
        { townHall: 2, availableCount: 12, maxLevel: 5 },
        { townHall: 3, availableCount: 14, maxLevel: 5 },
        { townHall: 4, availableCount: 15, maxLevel: 5 },
        { townHall: 5, availableCount: 16, maxLevel: 5 },
      ],
    },
    {
      name: Constants.builderWorkshop,
      levels: [
        { townHall: 1, availableCount: 5, maxLevel: 5 },
        { townHall: 2, availableCount: 6, maxLevel: 5 },
        { townHall: 3, availableCount: 7, maxLevel: 5 },
        { townHall: 4, availableCount: 8, maxLevel: 5 },
        { townHall: 5, availableCount: 8, maxLevel: 5 },
      ],
    },
    {
      name: Constants.dragonCliffs,
      levels: [
        { townHall: 1, availableCount: 5, maxLevel: 5 },
        { townHall: 2, availableCount: 6, maxLevel: 5 },
        { townHall: 3, availableCount: 7, maxLevel: 5 },
        { townHall: 4, availableCount: 8, maxLevel: 5 },
        { townHall: 5, availableCount: 8, maxLevel: 5 },
      ],
    },
    {
      name: Constants.golemQuarry,
      levels: [
        { townHall: 1, availableCount: 8, maxLevel: 5 },
        { townHall: 2, availableCount: 12, maxLevel: 5 },
        { townHall: 3, availableCount: 13, maxLevel: 5 },
        { townHall: 4, availableCount: 14, maxLevel: 5 },
        { townHall: 5, availableCount: 15, maxLevel: 5 },
      ],
    },
    {
      name: Constants.skeletonPark,
      levels: [
        { townHall: 1, availableCount: 5, maxLevel: 4 },
        { townHall: 2, availableCount: 5, maxLevel: 4 },
        { townHall: 3, availableCount: 5, maxLevel: 4 },
        { townHall: 4, availableCount: 6, maxLevel: 4 },
      ],
    },
    {
      name: Constants.goblinMines,
      levels: [
        { townHall: 1, availableCount: 1, maxLevel: 4 },
        { townHall: 2, availableCount: 3, maxLevel: 4 },
        { townHall: 3, availableCount: 5, maxLevel: 4 },
        { townHall: 4, availableCount: 7, maxLevel: 4 },
      ],
    },
  ],
  levels: [
    {
      level: 1,
      damagePerSecond: 130,
      damagePerShot: 195,
      hitpoints: 1250,
      buildCost: 2500,
      buildCostResource: Constants.capitalGold,
      clanCapitalLevel: 1,
      districtHallLevel: 1,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/a/a2/Cannon1C.png/revision/latest/scale-to-width-down/100?cb=20231217071931',
    },
    {
      level: 2,
      damagePerSecond: 150,
      damagePerShot: 225,
      hitpoints: 1450,
      buildCost: 5000,
      buildCostResource: Constants.capitalGold,
      clanCapitalLevel: 3,
      districtHallLevel: 2,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/3/30/Cannon2C.png/revision/latest/scale-to-width-down/100?cb=20231217071936',
    },
    {
      level: 3,
      damagePerSecond: 170,
      damagePerShot: 255,
      hitpoints: 1650,
      buildCost: 10000,
      buildCostResource: Constants.capitalGold,
      clanCapitalLevel: 3,
      districtHallLevel: 3,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/2/2f/Cannon3C.png/revision/latest/scale-to-width-down/100?cb=20231217071940',
    },
    {
      level: 4,
      damagePerSecond: 190,
      damagePerShot: 285,
      hitpoints: 1850,
      buildCost: 18000,
      buildCostResource: Constants.capitalGold,
      clanCapitalLevel: 4,
      districtHallLevel: 4,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/4/48/Cannon4C.png/revision/latest/scale-to-width-down/100?cb=20231217071941',
    },
    {
      level: 5,
      damagePerSecond: 210,
      damagePerShot: 315,
      hitpoints: 2050,
      buildCost: 30000,
      buildCostResource: Constants.capitalGold,
      clanCapitalLevel: 5,
      districtHallLevel: 5,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/9/9a/Cannon5C.png/revision/latest/scale-to-width-down/100?cb=20231217071942',
    },
  ],
  getSize(): string {
    return `${this.width}x${this.height}`
  },
  getLevel(level: number): ClanCapitalLevel | undefined {
    if (level >= 1 && level <= this.levels.length) {
      return this.levels[level - 1]
    } else {
      console.error(`Invalid ${this.name} level: ${level}`)
      return undefined
    }
  },
  getCapitalHallLevel(
    name: string,
    level: number
  ): TownHallDefense | undefined {
    const hallDetails = this.capitalHallDetails.find(
      (detail: { name: string }) => detail.name === name
    )

    if (hallDetails && level >= 1 && level <= hallDetails.levels.length) {
      return hallDetails.levels[level - 1]
    } else {
      console.error(`Invalid Capital Hall level or name: ${level} or ${name}`)
      return undefined
    }
  },
}

export default cannon
