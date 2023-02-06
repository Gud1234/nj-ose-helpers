export const registerDowntime = () => {
    NJH.downtime = NJH.downtime || {};
    NJH.downtime.type = NJH.downtime.type || {
        default: "0",
        carousing: "1",
        weaponTraining: "2",
        magicResearch: "3",
        skillTraining: "4",
    }

    NJH.downtime.action = async function() {
        const downtimeMessage = NJH.chatMessage.downtime();

        ChatMessage.create({ content: downtimeMessage });
    }

    NJH.downtime.perform = async function(type, title, message) {
        switch(type) {
          case NJH.downtime.type.carousing:
            NJH.dialog.downtimeCarousing();
            break;
          case NJH.downtime.type.skillTraining:
            NJH.dialog.downtimeSkills();
            break;
          case NJH.downtime.type.weaponTraining:
            NJH.dialog.downtimeTraining('Weapon Training', 'Train LONGBOW', '1d100', '50');
            break;
          case NJH.downtime.type.magicResearch:
            NJH.dialog.downtimeTraining('Magic Research', 'Learn SLEEP', '1d100', '85');
            break;
          default:
            NJH.dialog.downtimeDefault(title, message);
        }
    }
}