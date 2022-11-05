import type { TRegisterOption, TKeyListener } from "./type";
import { defaultSettings } from "./config";

const keys: string[] = [];
const events: KeyboardEvent[] = [];
let isInit: boolean = true;

function registerListener(options?: TRegisterOption): TKeyListener {
  options &&
    Object.keys(options).map((key) => {
      if (options[key] === undefined) {
        options[key] = defaultSettings[key];
      }
    });

  function keydwonHandle(e: KeyboardEvent) {
    if (!keys.includes(e.key)) {
      keys.push(e.key);
      events.push(e);
      !!options.onkeydown &&
        options.onkeydown({
          keys,
          events,
        });
    }
  }

  function keyupHandle(e: KeyboardEvent) {
    const keyIdx = keys.findIndex((k) => k === e.key);
    if (keyIdx !== -1) {
      keys.splice(keyIdx, 1);
      events.splice(keyIdx, 1);
      !!options.onkeydown &&
        options.onkeydown({
          keys,
          events,
        });
    }
  }

  if (isInit) {
    options.element.addEventListener("keydown", keydwonHandle);
    options.element.addEventListener("keyup", keyupHandle);
    isInit = false;
  }

  const KeyPressWatch = {
    keys,
    events,
    unbind: function () {
      options.element?.removeEventListener("keydown", keydwonHandle);
      options.element?.removeEventListener("keyup", keyupHandle);
    },
  };

  Object.defineProperty(KeyPressWatch, "keys", {
    get: () => [...keys],
  });

  Object.defineProperty(KeyPressWatch, "events", {
    get: () => [...events],
  });

  return KeyPressWatch;
}

export default registerListener;
