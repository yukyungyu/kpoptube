import React from "react";

// SEO 작업
import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";

const Main = (props) => {
  return (
    <HelmetProvider>
      <Helmet
        titleTemplate="%s|KPOPtube"
        defaultTitle="Kpoop tube"
        defer={false}
      >
        {props.title && <title>{props.title}</title>}
        <meta name="description" content={props.description} />
      </Helmet>
      <Header />
      <main id="main" role="main">
        <Search />
        {props.children}
      </main>
      <Footer />
    </HelmetProvider>
  );
};

export default Main;
