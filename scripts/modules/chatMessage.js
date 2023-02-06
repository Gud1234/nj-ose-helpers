export const registerChatMessage = () => {
    NJH.chatMessage = NJH.chatMessage || {};

    NJH.chatMessage.name = function (firstName, lastName) {
        return `<h3 style="text-align: center;">${firstName} ${lastName}</h3>`;
    }

    NJH.chatMessage.roll = function (rolls) {
        let rollMessage = ``;
        for (let roll of rolls) {
            rollMessage += `<div style="min-width: 45px;"><strong>${roll.att}:</strong> ${roll.val}</div>`;
        };

        return `<div style="display: flex; flex-wrap: wrap;  padding: 0 0 10px 0; border-bottom: 1px solid var(--color-underline-header);">${rollMessage}</div>`;
    }

    NJH.chatMessage.hp = function (pcClass, conMod) {
        const classData = NJH.data.classData[pcClass];

        const hp = NJH.pcUtils.hp(classData.hd, conMod);
        let hpMessage = `
        <td><strong>Prime:</strong></td><td>${classData.prime}</td>
        `;

        if(classData.prime.includes("CO") === true) {
          hpMessage += `<td><strong>HP:</strong></td><td>${hp} + CON</td>`;
        } else {
          hpMessage += `<td><strong>HP:</strong></td><td>${hp}</td>`;
        }

        return `<tr>${hpMessage}</tr>`;
    }

    NJH.chatMessage.fluff = function(pcClass){
        const fluffMessage = `
            <tr>
            <td><strong>Cla:</strong></td><td>${pcClass}</td>
            <td><strong>App:</strong></td><td>${NJH.pcUtils.randomFromArray(NJH.data.characters.appearances)}</td>
            </tr>
            <tr>
            <td><strong>Tra:</strong></td><td>${NJH.pcUtils.randomFromArray(NJH.data.characters.traits)}</td>
            <td><strong>Tra:</strong></td><td>${NJH.pcUtils.randomFromArray(NJH.data.characters.traits)}</td>
            </tr>
            <tr>
            <td><strong>Mis:</strong></td><td>${NJH.pcUtils.randomFromArray(NJH.data.characters.misfortunes)}</td>
            <td><strong>Bg:</strong></td><td>${NJH.pcUtils.randomFromArray(NJH.data.characters.backgrounds)}</td>
            </tr>
            `;
        
        
        return fluffMessage;
    }

    NJH.chatMessage.gear = function(allGear) {
        let gearMessage = ``;
        for (let i = 0; i < allGear.length; i++) {
            gearMessage += `<div style="padding: 2px;">${allGear[i]},</div>`;
        }

        return `
           <div style="display: flex; flex-wrap: wrap; padding: 0 0 10px 0;  border-bottom: 1px solid var(--color-underline-header);"><strong style="padding: 2px;">Gear:</strong> ${gearMessage}</div>
        `;
    }

    NJH.chatMessage.armour = function(armour) {
        const armourMessage = `<div style="padding: 2px;">${armour}</div>`;

        return `
          <div style="display: flex; flex-wrap: wrap; padding: 10px 0 10px 0;border-bottom: 1px solid var(--color-underline-header);"><strong style="padding: 2px;">Armour:</strong> ${armourMessage}</div>
        `;
    }

    NJH.chatMessage.weapons = function(weapons){
        let weaponsMessage = ``;
        for (let i = 0; i < weapons.length; i++) {
            weaponsMessage += `<div style="padding: 2px;">${weapons[i]},</div>`;
        }

        return `
           <div style="display: flex; flex-wrap: wrap; padding: 10px 0 10px 0;"><strong style="padding: 2px;">Weapons:</strong> ${weaponsMessage}</div>
        `;
    }

    NJH.chatMessage.downtime = function() {
        return `
          <h3 style="text-align: center;">Downtime Activities</h3>
          <div style="display: flex; flex-wrap: wrap; padding: 10px 0 10px 0;  border-bottom: 1px solid var(--color-underline-header);">
            <div  style="margin: 5px;">@Macro[DowntimePerform](${NJH.downtime.type.carousing}){Carousing}</div>
            <div  style="margin: 5px;">@Macro[DowntimePerform](${NJH.downtime.type.skillTraining}){Skill Training}</div>
            <div  style="margin: 5px;">@Macro[DowntimePerform](${NJH.downtime.type.weaponTraining}){Weapon Training}</div>
            <div  style="margin: 5px;">@Macro[DowntimePerform](${NJH.downtime.type.magicResearch}){Magic Research}</div>
            <div  style="margin: 5px;">@Macro[DowntimePerform](${NJH.downtime.type.default} "Hospital Rest" "You spend time recuperating from major ailments.."){Hospital Rest}</div>
            <div  style="margin: 5px;">@Macro[DowntimePerform](${NJH.downtime.type.default} "Investigation" "Ask the GM for the outcome."){Investigation}</div>
          </div>

        `
    }

    NJH.chatMessage.downtimeResult = function(type, message, cost, hp, extraHtml = ``) {
        return `
          <h3 style="text-align: center;">${type}</h3>
          <div style="padding: 5px 0 10px 10px; text-align: center; border-bottom: 1px solid var(--color-underline-header);">${message}</div>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); padding: 5px 0;">
            <div style="padding: 5px 0 0 10px;"><strong>Cost</strong></div>
            <div style="padding: 5px 0 0 10px;">${cost} gp</div>
            <div style="padding: 5px 0 0 10px;"><strong>HP regained</strong></div>
            <div style="padding: 5px 0 0 10px;">${hp} hp</div>
          </div>
          ${extraHtml}
        `;
    }
};