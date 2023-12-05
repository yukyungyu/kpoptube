import React from "react";

import Header from "./Header";
import Footer from "./Footer";
// SEO 작업
import { Helmet, HelmetProvider } from "react-helmet-async";

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
        {props.children}
      </main>
      <Footer />
    </HelmetProvider>
  );
};

export default Main;
