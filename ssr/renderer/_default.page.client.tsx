//  *******************************************
//  * VofSwords' personal portfolio website   *
//  * Copyright (C) 2021-present VofSwords    *
//  *******************************************

import ReactDOM from "react-dom";
import React from "react";
import { getPage } from "vite-plugin-ssr/client";
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

hydrate();

async function hydrate() {
  const pageContext = await getPage(); // (`pageContext` is preloaded in production)
  const { Page } = pageContext;

  ReactDOM.hydrate(
    <HelmetProvider>
      <Router>
        <Page />
      </Router>
    </HelmetProvider>,
    document.getElementById("root")
  );
};