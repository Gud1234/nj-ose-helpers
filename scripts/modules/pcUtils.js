export const registerPcUtils = () => {
  NJH.pcUtils = NJH.pcUtils || {};

  NJH.pcUtils.rollStats = function () {
    function getMod(stat, total) {
      const mods = NJH.data.stats.mods;
      return mods[stat].reduce((acc, cur) => acc += (total >= cur.lo && total <= cur.hi) ? cur.mod : 0, 0)
    };

    const stats = NJH.data.stats.ids;

    let generatedStats = stats.map((st) => {
      let roll = new Roll(`3d6`)._evaluateSync();

      return { att: st, val: roll.total, mod: getMod(st, roll.total) }
    });

    return [generatedStats, generatedStats.reduce((acc, cur) => acc += cur.mod, 0)];
  };

  NJH.pcUtils.classes = function (rolls) {
    const allClasses = NJH.data.classes;
    const classRanges = NJH.data.classRanges;

    let inelligableClasses = [];
    for (let roll of rolls) {
      if (roll.val < 9) {
        inelligableClasses = inelligableClasses.concat(classRanges[roll.att]);
      }
    }

    console.log(inelligableClasses);
    return allClasses.filter(x => !inelligableClasses.includes(x));
  };

  NJH.pcUtils.randomFromArray = function (arr) {
    length = arr.length;
    return arr[Math.floor(Math.random() * length)];
  }

  NJH.pcUtils.adventuringGear = function (pcClass) {
    const gear = NJH.data.gear.adventuring;

    return [NJH.pcUtils.randomFromArray(gear), NJH.pcUtils.randomFromArray(gear)];
  }

  NJH.pcUtils.armour = function (pcClassGearMapping) {
    const armourTable = NJH.data.gear.armour;
    if (pcClassGearMapping.armour.roll) {
      return NJH.pcUtils.getGear(pcClassGearMapping.armour.value, armourTable);
    } else {
      return pcClassGearMapping.armour.value;
    }
  }

  NJH.pcUtils.weapons = function (pcClassGearMapping) {
    const weaponsTable = pcClassGearMapping.weapon.table;
    if (pcClassGearMapping.weapon.roll) {
      return [
        NJH.pcUtils.getGear(pcClassGearMapping.weapon.value, weaponsTable),
        NJH.pcUtils.getGear(pcClassGearMapping.weapon.value, weaponsTable)
      ];
    } else {
      return [pcClassGearMapping.weapon.value];
    }
  }

  NJH.pcUtils.getGear = function (roll, table) {
    return table[new Roll(roll)._evaluateSync().total - 1];
  }

  NJH.pcUtils.hp = function (diceRoll, conMod) {
    let roll = new Roll(`${diceRoll}`)._evaluateSync();

    if (roll === 1) {
      roll = new Roll(`${diceRoll}`)._evaluateSync();
    }

    const total = roll.total + conMod;
    return total > 0 ? total : 1;
  }
};