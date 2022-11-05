import type { TRegisterOption } from "./type";

let isServer: boolean = true;

if (typeof process === "undefined") {
  isServer = false;
}

export const defaultSettings: TRegisterOption = {
  element: isServer ? null : document,
};
