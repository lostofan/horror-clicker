export type DrawAction = {
    name: string;
}

export type ActionKillerType = {
    name: string;
    multiplier: number;
}
export type ActionWeaponType = {
    name: string;
    value: number;
}
export type ActionChangeCount = {
    value: number;
    isAsync: boolean;
}
export type ActionBuy = {
    value: number;
}
export type ActionCoordinates = {
    x: number;
    y: number;
}