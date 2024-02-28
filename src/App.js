import React , {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Error from "./components/Error";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";


 const Grocery = lazy(() => import("./components/Grocery"))

const Footer = () => {
  return(
    <div><h4>Footer</h4></div>
  )
}


const AppLayout = () => {
   return (<div className="app">
    <Header/>
    <Outlet/>
    {/* <Body/>
    <Footer/> */}
   </div>)
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

