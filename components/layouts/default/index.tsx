/** @jsx h */

import { h, ComponentChildren } from "preact";

const layout = ({ children }: { children: ComponentChildren }) => {
  const child = Array.isArray(children) ? children[0] : children;

  return (
   <div class="h-full flex flex-col flex-nowrap">
      <div class="flex-grow">
        { child }
      </div>
      <footer class="h-[60px] px-8 overflow-hidden">
        <div class="h-full flex justify-right items-center -mx-4">
          <div class="px-4">
            <a class="text(gray-600)" href="https://github.com/VofSwords/vofswords.page" target="_blank">
              Source
            </a>
          </div>
          <div class="px-4">
            <a href="https://fresh.deno.dev" target="_blank">
               <img width="197" height="37" src="https://fresh.deno.dev/fresh-badge.svg" alt="Made with Fresh" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default layout;
