import React, { Fragment, Suspense, useEffect } from "react";
import "./App.css";
import { createBrowserRouter, Outlet, useLocation } from "react-router-dom";
import CheckOut from "./components/checkout/CheckOut";
import UpdatedHeader from "./components/header/UpdatedHeader";
import { useSelector } from "react-redux";

const Header = React.lazy(() => import("./components/header/Header"));
const Body = React.lazy(() => import("./pages/Body"));
const Footer = React.lazy(() => import("./components/footer/Footer"));
const Searchcontainer = React.lazy(() =>
  import("./components/searchContainer/Searchcontainer")
);

const RestaurantContainer = React.lazy(() =>
  import("./components/restauranDetails")
);
const CollectionDetail = React.lazy(() =>
  import("./components/collection/CollectionDetail")
);

const App = () => {
  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log("sorry smoething went wrong", error));
  }, []);

  const updatedheader = useSelector((store) => store?.restaurantDetail?.header);

  const location = useLocation();

  const isCheckoutPage = location.pathname === "/checkout";

  const iscollectiondetail =
    location.pathname === "/collectiondetail/:collectionId";

  return (
    <Fragment>
      {isCheckoutPage ? <UpdatedHeader /> : <Header />}
      <Outlet />
      {!updatedheader && iscollectiondetail ? <Footer /> : ""}
    </Fragment>
  );
};

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div></div>}>
        <App />
      </Suspense>
    ),
    errorElement: <div>Need to add Error component</div>,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div></div>}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/restaurantdetail/:resId",
        element: (
          <Suspense fallback={<div></div>}>
            <RestaurantContainer />
          </Suspense>
        ),
      },
      {
        path: "/collectiondetail/:collectionId",
        element: (
          <Suspense fallback={<div></div>}>
            <CollectionDetail />
          </Suspense>
        ),
      },

      {
        path: "/search",
        element: (
          <Suspense fallback={<div></div>}>
            <Searchcontainer />
          </Suspense>
        ),
      },
      {
        path: "/checkout",
        element: (
          <Suspense fallback={<div></div>}>
            <CheckOut />
          </Suspense>
        ),
      },
    ],
  },
]);

export default App;
