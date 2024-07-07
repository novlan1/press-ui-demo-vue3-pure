// import type { Plugin } from 'vite'
import fs from 'fs'

export const esbuildPatchPlugin = {
  name: "react-virtualized-",
  // transform(source, id) {
  //   return source;
  // },
  setup(build) {
    build.onLoad(
      // {
      //   filter:
      //     // /react-virtualized\/dist\/es\/WindowScroller\/utils\/onScroll.js$/,
      //     /press-ui(.*).js/
      // },
      async (args) => {
        console.log('args', args)
        const text = await fs.promises.readFile(args.path, "utf8");
        console.log('text', text)
        return {
          contents: text.replace(
            'import { bpfrpt_proptype_WindowScroller } from "../WindowScroller.js";',
            ""
          ),
        };
      }
    );
  },
  // setup(build) {
  //   build.onLoad(
  //     {
  //       filter:
  //         /react-virtualized\/dist\/es\/WindowScroller\/utils\/onScroll.js$/,
  //     },
  //     async (args) => {
  //       const text = await fs.promises.readFile(args.path, "utf8");

  //       return {
  //         contents: text.replace(
  //           'import { bpfrpt_proptype_WindowScroller } from "../WindowScroller.js";',
  //           ""
  //         ),
  //       };
  //     }
  //   );
  // },
}