import type { TRegisterOption } from "./type";

const isServer = typeof window === "undefined" ? true : false;

export const defaultSettings: TRegisterOption = {
  element: isServer ? null : document,
};
