import * as cs from "./constants.js";

export const registerClasses = () => {
    
    NJH.data.classes = [
        cs.acrobat, cs.assasin, cs.barbarian, cs.bard, cs.cleric, cs.drow, cs.druid, cs.duegar, cs.dwarf, cs.elf,
        cs.fighter, cs.gnome, cs.halfElf, cs.halfling, cs.halfOrc, cs.illusionist, cs.knight, cs.mu, cs.paladin, 
        cs.ranger, cs.svirfneblin, cs.thief
    ]

    NJH.data.classRanges = {
        'IN': [cs.bard, cs.drow, cs.duegar, cs.elf],
        'WI': [cs.ranger],
        'DE': [cs.barbarian, cs.bard, cs.halfling, cs.illusionist, cs.knight],
        'CO': [cs.duegar, cs.dwarf, cs.gnome, cs.halfElf, cs.halfling, cs.knight, cs.ranger, cs.svirfneblin],
        'CH': [cs.halfElf, cs.paladin]
    }
    
    NJH.data.classData = {};
    NJH.data.classData[cs.acrobat] = { hd: `1d4`, prime: ["DE"] };
    NJH.data.classData[cs.assasin] = { hd: `1d4`, prime: ["DE"] };
    NJH.data.classData[cs.barbarian]= { hd: `1d8`, prime: ["ST", "CO"] };
    NJH.data.classData[cs.bard]= { hd: `1d6`, prime: ["CH"] };
    NJH.data.classData[cs.cleric]= { hd: `1d6`, prime: ["WI"] };
    NJH.data.classData[cs.drow]= { hd: `1d6`, prime: ["ST", "WI"] };
    NJH.data.classData[cs.druid]= { hd: `1d6`, prime: ["WI"] };
    NJH.data.classData[cs.duegar]= { hd: `1d6`, prime: ["ST"] };
    NJH.data.classData[cs.dwarf]= { hd: `1d8`, prime: ["ST"] };
    NJH.data.classData[cs.elf]= { hd: `1d6`, prime: ["ST", "IN"] };
    NJH.data.classData[cs.fighter]= { hd: `1d8`, prime: ["ST"] };
    NJH.data.classData[cs.gnome]= { hd: `1d4`, prime: ["IN", "DE"] };
    NJH.data.classData[cs.halfElf]= { hd: `1d6`, prime: ["ST", "IN"] };
    NJH.data.classData[cs.halfOrc]= { hd: `1d6`, prime: ["ST", "DE"] };
    NJH.data.classData[cs.halfling]= { hd: `1d6`, prime: ["ST", "DE"] };
    NJH.data.classData[cs.illusionist]= { hd: `1d4`, prime: ["IN"] };
    NJH.data.classData[cs.knight]= { hd: `1d8`, prime: ["ST"] };
    NJH.data.classData[cs.mu]= { hd: `1d4`, prime: ["IN"] };
    NJH.data.classData[cs.paladin]= { hd: `1d8`, prime: ["ST", "WI"] };
    NJH.data.classData[cs.ranger]= { hd: `1d8`, prime: ["ST"] };
    NJH.data.classData[cs.svirfneblin]= { hd: `1d6`, prime: ["ST"] };
    NJH.data.classData[cs.thief]= { hd: `1d4`, prime: ["DE"] };
};