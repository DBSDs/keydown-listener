import type { RegisterOption } from "../";

const isServer = typeof window === "undefined" ? true : false;

export const defaultSettings: RegisterOption = {
  element: isServer ? null : document,
};
