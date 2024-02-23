import { Link,Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const HomeLayout = ()=>{
    return <>
        <Navbar/>
        {/* <Link to='/about'>about page</Link> */}
        <Outlet />
    </>
}

export default HomeLayout;