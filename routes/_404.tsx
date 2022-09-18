/** @jsx h */
import { h } from "preact";
import { UnknownPageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

const NotFoundPage = ({ url }: UnknownPageProps) => {
  return (
    <div>
      <Head>
        <title>404 Error</title>
      </Head>
      <h1>404</h1>
      <p>Not found: {url.pathname}</p>
      <a href="/" class="text(blue-500)">
        to Main
      </a>
    </div>
  )
}

export default NotFoundPage;
