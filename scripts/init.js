import { registerPcUtils } from "./modules/pcUtils.js";
import { registerStatData } from "./data/stats.js";
import { registerCharData } from "./data/characters.js";
import { registerGear } from "./data/gear.js";
import { registerClasses } from "./data/classes.js";
import { registerChatMessage } from "./modules/chatMessage.js";
import { registerDowntime } from "./modules/downtime.js";
import { registerDialog } from "./modules/dialog.js";
import { registerRetainers } from "./modules/retainers.js";
import { registerPCs } from "./modules/pcs.js";

window.NJH = window.NJH || {
  moduleName: `nj-ose-helpers`,
  pcUtils: {},
  retainers: {},
  pcs: {},
  data: {},
};

Hooks.once('init', async function () {
  registerStatData();
  registerCharData();
  registerClasses();
  registerGear();
  registerPcUtils();

  registerChatMessage();
  registerDialog();

  registerDowntime();
  registerRetainers();
  registerPCs();
});
