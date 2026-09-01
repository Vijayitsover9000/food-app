import { createRoot } from "react-dom/client";

import BodyComponent from "./BodyComponent";
import Header from "./Header";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import RestaurantPage from "./Pages/RestaurantPage";
import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router";
import loadRestaurantData from "../utils/loadRestaurantData";

const AppComponent = () => (
  <>
    <Header />
    <Outlet/>
    {/* <Footer /> */}
  </>
);
const router = createBrowserRouter([
  {
    path: "/",
    Component: AppComponent,
    children: [
      { 
        path: "/", 
        Component: BodyComponent,
      },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      {
        path: "/restaurant/:resId",
        Component: RestaurantPage,
        loader: loadRestaurantData
      }
    ],
  },
]);
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
