import { AppProps } from "$fresh/server.ts";

const App = ({ Component }: AppProps) => {
  // const tVHScript = `
  //   function tVH() {
  //     document.body.style.setProperty('--tVH', (window.innerHeight / 100) + 'px')
  //   };
  //   tVH();
  //   window.addEventListener('resize', tVH);
  // `;
  // const baseStyle = `
  //   .app-wrapper {
  //     height: calc(100 * var(--tVH));
  //     min-height: calc(100 * var(--tVH));
  //     max-height: calc(100 * var(--tVH));
  //     overflow: auto;
  //   }
  // `;
  return (
    <html class="light" lang="en">
      <body style="--tVH: 1vh;">
        <head>
          <nav>
            <a href="/" target="_self">
              <h1 class="text-3xl font-bold">
                VofSwords
              </h1>
            </a>
          </nav>
        </head>
        <Component />
        <br />
        <footer>
          <nav>
            <pre>
              <a
                href="https://github.com/VofSwords/vofswords.page"
                target="_blank"
                class="underline"
              >
                Source 🡕
              </a>
              <span>    </span>
              <a
                href="https://fresh.deno.dev"
                target="_blank"
                class="underline"
              >
                Made with Fresh 🡕
              </a>
            </pre>
          </nav>
        </footer>
      </body>
    </html>
  );
};

export default App;
