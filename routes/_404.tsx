import { Head } from "$fresh/runtime.ts";
import { UnknownPageProps } from "$fresh/server.ts";

const NotFoundPage = ({ url }: UnknownPageProps) => {
  return (
    <>
      <Head>
        <title>404 - Not found</title>
      </Head>
      <main>
        <h2 class="text-xl font-bold">404</h2>
        <p>
          Not found: {url.pathname}
        </p>
        <a
          href="/"
          target="_self"
          class="underline"
        >
          Back
        </a>
      </main>
    </>
  );
};

export default NotFoundPage;
