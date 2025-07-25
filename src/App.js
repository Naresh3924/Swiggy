import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import SidebarMenu from "./components/SidebarMenu";
import CollectionMenu from "./components/CollectionMenu";
import { useSelector } from "react-redux";
import { createBrowserRouter, Outlet } from "react-router-dom";
import TopRestaurantMenu from "./components/TopRestaurantMenu";
import RestaurantMenu from "./components/RestaurantMenu";
import Footer from "./components/Footer";

function App() {
  const toggelsidebar = useSelector((store) => store.sidebar.sidebar);

  return (
    <div>
      {toggelsidebar && <SidebarMenu />}
      <Header />
      <Outlet />
      <Footer/>
    </div>
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
