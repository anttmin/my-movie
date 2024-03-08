import React from "react";

import Header from "./Pages/Header";
import Popular from "./Components/Popular";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Upcoming from "./Pages/Upcoming";
import Mainpage from "./Pages/Mainpage";
import Detail from "./Pages/Detail";
import { loader as ProductDetailsLoader } from "./Pages/Detail";
import Search from "./Pages/Search";
// import Navbar from "./Pages/Navbar";
import { loader as searchLoader} from "./Pages/Search";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", element: <Mainpage /> },
        { path: "/upcoming", element: <Upcoming /> },
        { path: "/header", element: <Header /> },
        { path: "/popular", element: <Popular /> },
        {
          path: "/detail/:id",
          element: <Detail />,
          loader: ProductDetailsLoader,
        },
        {
          path : "/search/:title",
          element : <Search />,
          loader : searchLoader


        }
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;


