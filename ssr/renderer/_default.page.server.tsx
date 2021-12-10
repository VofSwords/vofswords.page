//  *******************************************
//  * VofSwords' personal portfolio website   *
//  * Copyright (C) 2021-present VofSwords    *
//  *******************************************

import ReactDOMServer from "react-dom/server";
import React from "react";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, HelmetData } from "react-helmet-async";

export { render };

async function render(pageContext) {
  const { Page, pageProps, url } = pageContext;
  const credits = `
    <!--  ******************************************* -->
    <!--  * VofSwords' personal portfolio website *** -->
    <!--  * Copyright (C) 2021-present VofSwords **** -->
    <!--  ******************************************* -->
  `;

  const dse = dangerouslySkipEscape;
  
  const helmetContext: {helmet?: HelmetData} = {};

  console.log(url);

  const viewHtml = ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <Page />
      </StaticRouter>
    </HelmetProvider>
  );
  const { helmet } = helmetContext;

  return escapeInject`<!DOCTYPE html>
  <html lang="en">
    <head>
      ${dse(credits)}
      ${dse(helmet.title.toString())}
      ${dse(helmet.meta.toString())}
      ${dse(helmet.link.toString())}
    </head>
    <body>
      <div id="root">${dse(viewHtml)}</div>
    </body>
  </html>`;
}