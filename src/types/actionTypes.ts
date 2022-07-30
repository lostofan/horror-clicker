export type ActionKillerType = {
    name: string;
}
export type ActionWeaponType = {
    name: string;
    value: number;
}
export type ActionChangeCount = {
    value: number;
    killerName?: string;
}
export type ActionCoordinates = {
    x: number;
    y: number;
}