import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import CollectionMenu from "./components/CollectionMenu";
import { createBrowserRouter, Outlet } from "react-router-dom";
import TopRestaurantMenu from "./components/TopRestaurantMenu";
import RestaurantMenu from "./components/RestaurantMenu";
import Footer from "./components/Footer";
import { Fragment } from "react/jsx-runtime";

function App() {

  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
}

export const AppRouder = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/collectionmenu/:resId",
        element: <CollectionMenu />,
      },
      {
        path: "/toprestaurantMenu",
        element: <TopRestaurantMenu />,
      },
      {
        path: "/restaurantmenu",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

export default App;
