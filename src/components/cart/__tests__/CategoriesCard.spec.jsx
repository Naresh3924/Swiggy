import { render } from "@testing-library/react";
import CategoriesCard from "../CategoriesCard";

describe("TestCases for CategoriesCard componenent", () => {
  test("should render CategoriesCard cmponent", () => {
    render(<CategoriesCard />);
  });
});
