function registerListener(element: Element | Document = document) {
  const keys: string[] = [];
  const events: KeyboardEvent[] = [];

  function keydwonHandle(e: KeyboardEvent) {
    if (!keys.includes(e.key)) {
      events.push(e);
      keys.push(e.key);
    }
  }

  function keyupHandle(e: KeyboardEvent) {
    const keyIdx = keys.findIndex((k) => k === e.key);
    if (keyIdx !== -1) {
      keys.splice(keyIdx, 1);
      events.splice(keyIdx, 1);
    }
  }

  document.addEventListener("keydown", keydwonHandle);
  document.addEventListener("keyup", keyupHandle);

  const KeyPressWatch = {
    keys,
    events,
    unbind: function () {
      document?.removeEventListener("keydown", keydwonHandle);
      document?.removeEventListener("keyup", keyupHandle);
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
