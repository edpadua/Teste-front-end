

import { ReactNode } from "react";
import Navbar from "../Navbar";

import Header from "../Header";
import Footer from "../Footer";

interface LayoutProps {
    children: ReactNode;
  }

function Layout({ children }: LayoutProps) {
  return (
    <>
    
      <Navbar/>
      {children}
      <Footer/>
      
    
    </>
  )
}

export default Layout
