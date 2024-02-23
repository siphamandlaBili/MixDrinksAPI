import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { Landing,Newsletter,Error,HomeLayout,Cocktail,About } from "./pages/index";

const router = createBrowserRouter([
  {
    path:"/",
    element:<HomeLayout/>,
    children:[
      {
        index:true,
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
