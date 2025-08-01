import { render } from "@testing-library/react";
import RestaurantContainer from "../RestaurantContainer";

describe("TestCase for RestaurantContainer", () => {
  test("should render RestaurantContainer component", () => {
    render(<RestaurantContainer />);
  });
});
