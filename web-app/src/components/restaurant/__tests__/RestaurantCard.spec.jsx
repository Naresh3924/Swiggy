import { render } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";

describe("TestCase for RestaurantCard", () => {
  test("should render RestaurantCard component", () => {
    render(<RestaurantCard />);
  });
});
