import Signin from "../Signin";

const { render, screen, fireEvent } = require("@testing-library/react");

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

describe("Testcase for signIn Component", () => {
  const mockFunction = jest.fn();

  //   it("should dispatch togglesigninbar(true) on AiOutlineClose click", () => {
  //     const mockDispatch = jest.fn();
  //     const useDispatch = jest.fn();
  //     useDispatch.mockReturnValue(mockDispatch);
  //     render(<Signin />);

  //     const outlineClose = screen.getByTestId("outlineclose"); // ✅ make sure this exists
  //     fireEvent.click(outlineClose);
  //     expect(mockDispatch).toHaveBeenCalledTimes(0);
  //   });

  test("testCase for input and button in signin component", () => {
    render(<Signin onClick={mockFunction} onChange={mockFunction} />);

    const phonenumber = screen.getByTestId("phonenumber");
    fireEvent.change(phonenumber, { target: { value: "Naresh" } });
    expect(mockFunction).toHaveBeenCalledTimes(0);

    const submitbutton = screen.getByTestId("submit");
    fireEvent.click(submitbutton);
    expect(mockFunction).toHaveBeenCalledTimes(0);

    const termscondition = screen.getByTestId("terms");
    fireEvent.click(termscondition);
    expect(mockFunction).toHaveBeenCalledTimes(0);
  });
});
