import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { Landing,Newsletter,Error,HomeLayout,Cocktail,About } from "./pages/index";
import { loader as LandingLoader } from "./pages/Landing";
import SinglePageError from "./pages/singlePageError";

const router = createBrowserRouter([
  {
    path:"/",
    element:<HomeLayout/>,
    errorElement: <Error/>,
    children:[
      {
        index:true,
        loader: LandingLoader,
        errorElement:<SinglePageError/>,
        element: <Landing/>
      },
      {
        path:"about",
        element: <About/>
      },{
        path:"newsletter",
        element: <Newsletter/>
      },
      {
        path:"error",
        element: <Error/>
      },
      {
        path:"cocktail",
        element: <Cocktail/>
      },
    ]
  }
])

const App = () => {
  return <RouterProvider router={router}/>;
};
export default App;
