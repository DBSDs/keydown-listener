import registerListener from "./core/registerListener";

export default registerListener;

export type RegisterOption = {
  element?: Element | Document;
  onkeydown?: (val: Omit<KeyDownListener, "unbind">) => void;
  onkeyup?: (val: Omit<KeyDownListener, "unbind">) => void;
};

export type KeyDownListener = {
  keys: string[];
  events: KeyboardEvent[];
  unbind: () => void;
};
