export const registerPCs = () => {
    NJH.pcs = NJH.pcs || {};

    NJH.pcs.rollStats = async function () {
        const firstName = NJH.pcUtils.randomFromArray(NJH.data.characters.firstNames);
        const lastName = NJH.pcUtils.randomFromArray(NJH.data.characters.lastNames);

        let [rolls, total] = NJH.pcUtils.rollStats();

        // Re-rolls stats if the total of the retainer's modifiers is less than -2
        while (total < -2) {
            [rolls, total] = NJH.pcUtils.rollStats();
        }

        let conMod = 0;
        for (let roll of rolls) {
            if (roll.att === "CO") {
                conMod = roll.mod;
            }
        };

        const classes = NJH.pcUtils.classes(rolls);
        let classMessage = ``;
        for(let i = 0; i < classes.length; i++) {
          classMessage += `<div style="margin: 5px;">@Macro[PickClass](${classes[i]} ${conMod}){${classes[i]}}</div>`;
        };

        const msgContent = `
        ${NJH.chatMessage.name(firstName, lastName)}
        ${NJH.chatMessage.roll(rolls)}
          <div style="display: flex; flex-wrap: wrap; padding: 10px 0 10px 0;  border-bottom: 1px solid var(--color-underline-header);"><strong style="margin: 5px;">Eligible classes:</strong> ${classMessage}</div>
        `;

        ChatMessage.create({ content: msgContent });
    }

    NJH.pcs.create = async function(pcClass, conMod) {
      const torchesGoldAndRations = NJH.pcUtils.torchesGoldAndRations();
      const allGear = NJH.data.gear.basic.concat(torchesGoldAndRations).concat(NJH.pcUtils.adventuringGear());
      const mapping = NJH.data.gear.byClass[pcClass];
      const armour = NJH.pcUtils.armour(mapping);
      const weapons = NJH.pcUtils.weapons(mapping);

      const msgContent = `
        <div style="display: flex; flex-wrap: wrap;">
          <table>
            ${NJH.chatMessage.hp(pcClass, parseInt(conMod))}
            ${NJH.chatMessage.fluff(pcClass)}
          </table>
        </div>
        ${NJH.chatMessage.gear(allGear)}
        ${NJH.chatMessage.armour(armour)}
        ${NJH.chatMessage.weapons(weapons)}
      `;

      ChatMessage.create({ content: msgContent });
    }
};