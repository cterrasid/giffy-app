import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import useForm from "./useForm";

const setup = (params) => renderHook(() => useForm(params));

test("should change keyword", () => {
  const { result } = setup();
  act(() => {
    result.current.updateKeyword("matrix");
  });
  expect(result.current.keyword).toBe("matrix");
});

test("should use initial value", () => {
  const { result } = setup({
    initialKeyword: "spiderman",
  });
  expect(result.current.keyword).toBe("spiderman");
});

test("should update correctly times, when is used twice ", () => {
  const { result } = setup({
    initialKeyword: "matrix",
  });

  act(() => {
    result.current.updateKeyword("m");
    result.current.updateKeyword("ma");
  });

  expect(result.current.keyword).toBe("ma");
  expect(result.current.times).toBe(2);
});
