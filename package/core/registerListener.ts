import type { RegisterOption, KeyDownListener } from "../";
import { defaultSettings } from "./config";

const keys: KeyDownListener["keys"] = [];
const events: KeyDownListener["events"] = [];
let isInit: boolean = true;

function registerListener(options?: RegisterOption): KeyDownListener {
  if (isInit) {
    if (options) {
      Object.keys(defaultSettings).map((key) => {
        if (options[key] === undefined) {
          options[key] = defaultSettings[key];
        }
      });
    } else {
      options = { ...defaultSettings };
    }
    options.element?.addEventListener("keydown", keydwonHandle);
    options.element?.addEventListener("keyup", keyupHandle);
    isInit = false;
  }

  function keydwonHandle(e: KeyboardEvent) {
    if (!keys.includes(e.key) && e.getModifierState(e.key)) {
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

  const KeyPressWatch: KeyDownListener = {
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
