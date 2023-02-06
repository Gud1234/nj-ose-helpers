import * as cs from "./constants.js";

export const registerGear = () => {
    NJH.data.gear = NJH.data.gear || {};
    NJH.data.gear.weapons = NJH.data.gear.weapons || {};

    NJH.data.gear.basic = ["Backpack", "Tinder box", "Waterskin",
        '<a class="inline-roll roll" data-mode="roll" data-flavor="Rations" data-formula="1d6"><i class="fas fa-dice-d20"></i>1d6</a>  Iron Rations',
        '<a class="inline-roll roll" data-mode="roll" data-flavor="Torches" data-formula="1d6"><i class="fas fa-dice-d20"></i>1d6</a>  Torches',
        '<a class="inline-roll roll" data-mode="roll" data-flavor="Gold" data-formula="3d6"><i class="fas fa-dice-d20"></i>3d6</a>  Gold'
    ]

    NJH.data.gear.adventuring = [
        "Crowbar", "Hammer (small) + 12 iron spikes", "Holy water", "Lantern + 3 flasks of oil",
        "Mirror (hand-sized, steel)", "Pole (10' long, wooden)", "Rope (50')",
        "Rope (50') + grappling hook", "Sack (large)", "Sack (small)", "Stakes (3) + mallet",
        "Wolfsbane (1 bunch)"
    ]

    NJH.data.gear.armour = [
        "Leather", "Leather + shield", "Chainmail", "Chainmail + shield", "Plate mail", "Plate mail + shield"
    ];

    NJH.data.gear.weapons.default = [
        "Battle Axe", "Crossbow + 20 Bolts", "Hand Axe", "Mace", "Pole Arm", "Short Bow + 20 arrows",
        "Short Sword", "Silver Dagger", "Sling + 20 stones", "Spear", "Sword", "War Hammer"
    ];

    NJH.data.gear.weapons.acrobat = [
        "Pole arm", "Short bow + 20 arrows", "Spear", "Staff"
    ]

    NJH.data.gear.weapons.bard = [
        "Crossbow + 20 bolts", "Short Sword", "Sling + 20 stones", "Sword"
    ]

    NJH.data.gear.weapons.cleric = [
        "Mace", "Sling + 20 stones", "Staff", "Warhammer"
    ]

    NJH.data.gear.weapons.druid = [
        "Club", "Dagger", "Sling + 20 stones", "Staff"
    ]

    NJH.data.gear.weapons.knight = [
        "Lance", "Short sword", "Sword", "Warhammer"
    ]

    NJH.data.gear.byClass = {};

    NJH.data.gear.byClass[cs.acrobat] = {
        armour: { roll: false, value: 'Leather' },
        weapon: { roll: true, value: '1d4', table: NJH.data.gear.weapons.acrobat },
        extras: []
    };
    NJH.data.gear.byClass[cs.assasin] = {
        armour: { roll: false, value: 'Leather' },
        weapon: { roll: true, value: '1d12', table: NJH.data.gear.weapons.default },
        extras: []
    };
    NJH.data.gear.byClass[cs.barbarian] =
    {
        armour: { roll: true, value: '1d4' },
        weapon: { roll: true, value: '1d12', table: NJH.data.gear.weapons.default },
        extras: []
    };
    NJH.data.gear.byClass[cs.bard] = {
        armour: { roll: true, value: '1d4' },
        weapon: { roll: true, value: '1d4', table: NJH.data.gear.weapons.bard },
        extras: ['Ignore Shields']
    };
    NJH.data.gear.byClass[cs.cleric] = {
        armour: { roll: true, value: '1d6' },
        weapon: { roll: true, value: '1d4', table: NJH.data.gear.weapons.cleric },
        extras: ['Holy Symbol']
    };
    NJH.data.gear.byClass[cs.drow] = {
        armour: { roll: true, value: '1d6' },
        weapon: { roll: true, value: '1d12', table: NJH.data.gear.weapons.default },
        extras: ['Holy Symbol']
    };
    NJH.data.gear.byClass[cs.druid] = {
        armour: { roll: false, value: 'Leather' },
        weapon: { roll: true, value: '1d4', table: NJH.data.gear.weapons.druid },
        extras: []
    };
    NJH.data.gear.byClass[cs.duegar] =
    {
        armour: { roll: true, value: '1d6' },
        weapon: { roll: true, value: '1d12', table: NJH.data.gear.weapons.default },
        extras: []
    };
    NJH.data.gear.byClass[cs.dwarf] =
    {
        armour: { roll: true, value: '1d6' },
        weapon: { roll: true, value: '1d12', table: NJH.data.gear.weapons.default },
        extras: []
    };
    NJH.data.gear.byClass[cs.elf] =
    {
        armour: { roll: true, value: '1d6' },
        weapon: { roll: true, value: '1d12', table: NJH.data.gear.weapons.default },
        extras: []
    };
    NJH.data.gear.byClass[cs.fighter] =
    {
        armour: { roll: true, value: '1d6' },
        weapon: { roll: true, value: '1d12', table: NJH.data.gear.weapons.default },
        extras: []
    };
    NJH.data.gear.byClass[cs.gnome] = {
        armour: { roll: false, value: 'Leather' },
        weapon: { roll: true, value: '1d12', table: NJH.data.gear.weapons.default },
        extras: []
    };
    NJH.data.gear.byClass[cs.halfling] =
    {
        armour: { roll: true, value: '1d6' },
        weapon: { roll: true, value: '1d12', table: NJH.data.gear.weapons.default },
        extras: []
    };
    NJH.data.gear.byClass[cs.halfElf] =
    {
        armour: { roll: true, value: '1d6' },
        weapon: { roll: true, value: '1d12', table: NJH.data.gear.weapons.default },
        extras: []
    };
    NJH.data.gear.byClass[cs.halfOrc] =
    {
        armour: { roll: true, value: '1d6' },
        weapon: { roll: true, value: '1d12', table: NJH.data.gear.weapons.default },
        extras: []
    };
    NJH.data.gear.byClass[cs.illusionist] = {
        armour: { roll: false, value: 'None' },
        weapon: { roll: false, value: 'Dagger' },
        extras: []
    };
    NJH.data.gear.byClass[cs.knight] =
    {
        armour: { roll: true, value: '1d4+2' },
        weapon: { roll: true, value: '1d4', table: NJH.data.gear.weapons.knight },
        extras: []
    };
    NJH.data.gear.byClass[cs.mu] = {
        armour: { roll: false, value: 'None' },
        weapon: { roll: false, value: 'Dagger' },
        extras: []
    };
    NJH.data.gear.byClass[cs.paladin] =
    {
        armour: { roll: true, value: '1d6' },
        weapon: { roll: true, value: '1d12', table: NJH.data.gear.weapons.default },
        extras: ["Holy Symbol"]
    };
    NJH.data.gear.byClass[cs.ranger] =
    {
        armour: { roll: true, value: '1d6' },
        weapon: { roll: true, value: '1d12', table: NJH.data.gear.weapons.default },
        extras: []
    };
    NJH.data.gear.byClass[cs.svirfneblin] =
    {
        armour: { roll: true, value: '1d6' },
        weapon: { roll: true, value: '1d12', table: NJH.data.gear.weapons.default },
        extras: []
    };
    NJH.data.gear.byClass[cs.thief] = {
        armour: { roll: false, value: 'Leather' },
        weapon: { roll: true, value: '1d12', table: NJH.data.gear.weapons.default },
        extras: ["Thieve's Tools"]
    };
    
};