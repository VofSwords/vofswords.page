/** @jsx h */
import { h } from "preact";
import { Head } from "$fresh/runtime.ts"

const Main = () => {
  return (
    <div>
      <Head>
        <title>VofSwords</title>
      </Head>
      <div>Hello, VofSwords!</div>
    </div>
  );
}

export default Main;
