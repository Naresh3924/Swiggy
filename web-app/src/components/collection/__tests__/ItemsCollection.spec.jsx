import React from "react";

import { render } from "@testing-library/react";
import ItemsCollection from "../ItemsCollection";

describe("TestCase for CollectionDetail", () => {
  test("should render CollectionDetail component", () => {
    render(<ItemsCollection />);
  });
});
