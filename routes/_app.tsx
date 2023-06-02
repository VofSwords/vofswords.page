import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

const App = ({ Component }: AppProps) => {
  const tVHScript = `
    function tVH() {
      document.body.style.setProperty('--tVH', (window.innerHeight / 100) + 'px')
    };
    tVH();
    window.addEventListener('resize', tVH);
  `;
  const baseStyle = `
    .app-wrapper {
      height: calc(100 * var(--tVH));
      min-height: calc(100 * var(--tVH));
      max-height: calc(100 * var(--tVH));
      overflow: auto;
    }
  `;
  return (
    <html class="light" lang="en">
      <Head>
        <style>
          { baseStyle }
        </style>
      </Head>
      <body>
        <script type="text/javascript">
          { tVHScript }
        </script>
        <div class="app-wrapper">
          <Component />
        </div>
      </body>
    </html>
  )
}


export default App;
