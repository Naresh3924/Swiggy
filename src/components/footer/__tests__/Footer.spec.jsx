import { fireEvent, render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("TestCase for Footer", () => {
  const mockFunction = jest.fn();
  test("should render Footer component", () => {
    render(<Footer onClick={mockFunction} />);
  });

  test("TestCase for playstore and appStore div", () => {
    render(<Footer onClick={mockFunction} />);

    const playstorelink = screen.getByTestId("playstorelink");
    fireEvent.click(playstorelink);
    expect(mockFunction).toHaveBeenCalledTimes(0);

    const appstorelink = screen.getByTestId("appstorelink");
    fireEvent.click(appstorelink);
    expect(mockFunction).toHaveBeenCalledTimes(0);
  });

  test("TestCase for socialicon div", () => {
    render(<Footer />);
    const facebookicon = screen.getByTestId("facebookicon");
    fireEvent.click(facebookicon);
    expect(mockFunction).toHaveBeenCalledTimes(0);

    const instagramicon = screen.getByTestId("instagramicon");
    fireEvent.click(instagramicon);
    expect(mockFunction).toHaveBeenCalledTimes(0);

    const twittericon = screen.getByTestId("twittericon");
    fireEvent.click(twittericon);
    expect(mockFunction).toHaveBeenCalledTimes(0);

    const pinteresticon = screen.getByTestId("pinteresticon");
    fireEvent.click(pinteresticon);
    expect(mockFunction).toHaveBeenCalledTimes(0);
  });
  
});
