import { render } from "@testing-library/react";
import CartItem from "../CartItem";

describe("Test case for CartItem compoenents", () => {
  test("Should CartItem render", () => {
    render(<CartItem />);
  });
});
