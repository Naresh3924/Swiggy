import { render } from "@testing-library/react";

import {
  CollectionDetailapiCall,
  RestaurantapiCall,
  RestaurantDetailapiCall,
} from "../util";

const mockDispatch = jest.fn();
const dispatch = { mockDispatch };

describe("TestCase for  RestaurantapiCall", () => {
  test("RestaurantapiCall function with dispatch", async () => {
    render(RestaurantapiCall({ dispatch }));
  });
});

describe("TestCase for  RestaurantDetailapiCall", () => {
  test("RestaurantDetailapiCall  function with dispatch", () => {
    render(RestaurantDetailapiCall({ dispatch }));
  });
});

describe("TestCase for  CollectionDetailapiCall", () => {
  test("CollectionDetailapiCall   function with dispatch", () => {
    render(CollectionDetailapiCall({ dispatch }));
  });
});
