/** @jsx h */
/** @jsxFrag Fragment */

import { h, Fragment } from "preact";
import { Head } from "$fresh/runtime.ts";
import Layout from "../components/layouts/default/index.tsx";
import { UnknownPageProps } from "$fresh/server.ts";

const NotFoundPage = ({ url }: UnknownPageProps) => {
  return <> 
    <Head>
      <title>404 Error</title>
    </Head>
    <Layout>
      <div class="h-full flex flex-col justify-center items-center">
        <h1 class="text(6xl) font-bold py-4">404</h1>
        <p class="text(2xl) py-2">Not found: {url.pathname}</p>
        <a href="/" class="text(blue-500)">
          to Main
        </a>
      </div>
    </Layout>
  </>;
}

export default NotFoundPage;
