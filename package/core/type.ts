export type TRegisterOption = {
  element?: Element | Document;
  onkeydown?: (val: Omit<TKeyListener, "unbind">) => void;
  onkeyup?: (val: Omit<TKeyListener, "unbind">) => void;
};

export type TKeyListener = {
  keys: string[];
  events: KeyboardEvent[];
  unbind: () => void;
};
