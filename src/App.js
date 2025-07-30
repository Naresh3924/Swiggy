import "./App.css";
import Header from "./components/header/Header";
import Body from "./pages/Body";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import { Fragment } from "react/jsx-runtime";
import Searchcontainer from "./components/searchContainer/Searchcontainer";
import RestaurantDetail from "./components/restauranDetails/RestaurantDetail";
import CollectionDetail from "./components/collection/CollectionDetail";
import Cart from "./components/cart/Cart";

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
      },{
        path:"/collectiondetail/:resId",
        element:<CollectionDetail/>
      },

      {
        path: "/search",
        element: <Searchcontainer />,
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
  },
]);

export default App;
