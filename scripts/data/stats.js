export const registerStatData = () => {
    NJH.data.modRanges = {
        std: [{ lo: 3, hi: 3, mod: -3 }, { lo: 4, hi: 5, mod: -2 }, { lo: 6, hi: 8, mod: -1 }, { lo: 9, hi: 12, mod: 0 }, { lo: 13, hi: 15, mod: +1 }, { lo: 16, hi: 17, mod: +2 }, { lo: 18, hi: 18, mod: +3 }],
        int: [{ lo: 3, hi: 18, mod: 0 }],
        cha: [{ lo: 3, hi: 3, mod: -3 }, { lo: 4, hi: 5, mod: -2 }, { lo: 6, hi: 8, mod: -1 }, { lo: 9, hi: 12, mod: 0 }, { lo: 13, hi: 15, mod: +1 }, { lo: 16, hi: 17, mod: +1 }, { lo: 18, hi: 18, mod: +2 }]
    }

    NJH.data.stats = {
        ids: ['ST', 'IN', 'WI', 'DE', 'CO', 'CH'],
        mods: { 'ST': NJH.data.modRanges.std, 'IN': NJH.data.modRanges.int, 'WI': NJH.data.modRanges.std, 'DE': NJH.data.modRanges.std, 'CO': NJH.data.modRanges.std, 'CH': NJH.data.modRanges.cha }
    }
};