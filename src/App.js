import React , {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Error from "./components/Error";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext"; 
import { Provider } from "react-redux";
import appStore from "./utils/appStore";



 const Grocery = lazy(() => import("./components/Grocery"))

const Footer = () => {
  return(
    <div><h4>Footer</h4></div>
  )
}


const AppLayout = () => {

const [userName, setUserName] = useState();
//authntication
useEffect(()=>{
//make an api call and send username and password
const data = {
  name: "harika pk"
};
setUserName(data.name)
},[])
   return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
   <div className="app">
    <Header/>
    <Outlet/>
   </div>
   </UserContext.Provider>
   </Provider>
   )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      }, 
      {
        path: "/cart",
        element: <Cart/>
      }, 
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>loading...</h1>}><Grocery/></Suspense>
      }, 
       {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      }
    ],

    errorElement: <Error/>,
  },
])

const root = ReactDOM. createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)

