import { render } from "@testing-library/react";
import TopResAccordion from "../TopResAccordion";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

describe("TestCase for TopResAccordion", () => {
  test("should render TopResAccordion component", () => {
    render(<TopResAccordion />);
  });
});
