import { fireEvent, render, screen } from "@testing-library/react";
import SidebarMenu from "../SidebarMenu";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

describe("TestCase for SidebarMenu", () => {
  const mockFunction = jest.fn();
  test("should render SidebarMenu component", () => {
    render(<SidebarMenu />);
    const searchtextinput = screen.getByTestId("searchtext");
    fireEvent.change(searchtextinput, { target: { value: "searchText" } });
    expect(mockFunction).toHaveBeenCalledTimes(0);
  });
});
