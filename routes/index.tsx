/** @jsx h */
/** @jsxFrag Fragment */

import { h, Fragment } from "preact";
import { Head } from "$fresh/runtime.ts";
import Layout from "../components/layouts/default/index.tsx";

const Main = () => {
  return <>
    <Head>
      <title>VofSwords</title>
    </Head>
    <Layout>
      <div class="h-full flex justify-center items-center">
        <div class="flex justify-center items-center -mx-2">
          <div class="text(6xl) font-bold px-2">
            VofSwords
          </div>
        </div>
      </div>
    </Layout>
  </>;
}

export default Main;
