import type { AppProps } from "next/app";

import React, { useState } from "react";

import Navbar from "../src/Components/Navbar"

import "../css/main.css";
import Layout from "../src/Components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  
  return (
         <Layout>
          <Component {...pageProps} />
         </Layout>
        
     
  );
}
