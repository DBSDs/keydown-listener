/**
 * @jest-environment jsdom
 */
import keydownListener from "../dist";
import { fireEvent } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";

const callback = jest.fn();

afterEach(() => {
  callback.mockClear();
});

describe("React page test", () => {
  it("test single key", () => {
    let keyGen;
    const { unmount } = renderHook(() => (keyGen = keydownListener()));

    fireEvent.keyDown(document, { key: "c" });
    expect(keyGen.keys).toEqual(["c"]);

    fireEvent.keyUp(document, { key: "c" });
    expect(keyGen.keys).toEqual([]);

    fireEvent.keyDown(document, { key: "c" });
    fireEvent.keyDown(document, { key: "shift" });
    expect(keyGen.keys).toEqual(["c", "shift"]);
    unmount();
  });

  it("test multiple keys", () => {
    let keyGen;
    const { unmount } = renderHook(() => (keyGen = keydownListener()));

    fireEvent.keyDown(document, { key: "c" });
    fireEvent.keyDown(document, { key: "shift" });
    expect(keyGen.keys).toEqual(["c", "shift"]);
    fireEvent.keyUp(document, { key: "c" });
    fireEvent.keyUp(document, { key: "shift" });
    expect(keyGen.keys).toEqual([]);
    unmount();
  });
});
