import { render } from "@testing-library/react";
import SidebarMenu from "../SidebarMenu";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

describe("TestCase for SidebarMenu", () => {
  test("should render SidebarMenu component", () => {
    render(<SidebarMenu />);
  });
});
