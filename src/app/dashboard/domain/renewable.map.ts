import { Fuel } from "./fuel.enum";

export const renewableFuels: string[] = [
  Fuel.BIOMASS,
  Fuel.HYDRO,
  Fuel.SOLAR,
  Fuel.WIND,
];

export const nonRenewableFuels: string[] = [
  Fuel.COAL,
  Fuel.GAS,
  Fuel.NUCLEAR,
  Fuel.IMPORTS,
  Fuel.OTHER,
];
