import { Outlet } from "react-router-dom";
import Header from "../header/Header";

const CommonLayouts = () => {
  return (
    <>
     
        <Header />
        <Outlet />
      
    </> 
  );
}

export default CommonLayouts