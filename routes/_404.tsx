import { UnknownPageProps } from "$fresh/server.ts";

const NotFoundPage = ({ url }: UnknownPageProps) => {
  return (
    <div>
      <h1>404</h1>
      <p>Not found: {url.pathname}</p>
      <a href="/" class="text(blue-500)">
        to Main
      </a>
    </div>
  )
}

export default NotFoundPage;
