import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { Fragment } from "react/jsx-runtime";
import Searchcontainer from "./components/Searchcontainer";
import RestaurantDetail from "./components/RestaurantDetail";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

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
        path: "/restaurantdetail/:resId",
        element: <RestaurantDetail />,
      },
      {
        path: "/search",
        element: <Searchcontainer />,
      },
    ],
  },
]);

export default App;
