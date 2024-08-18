import { EventCallable, Scope } from "effector";

export type { Component }

import type { ComponentPublicInstance } from 'vue'

type Component = ComponentPublicInstance // https://stackoverflow.com/questions/63985658/how-to-type-vue-instance-out-of-definecomponent-in-vue-3/63986086#63986086
type Page = Component

// https://vike.dev/pageContext#typescript
declare global {
  namespace Vike {
    interface PageContext {
      Page: Page
      data?: {
        /** Value for <title> defined dynamically by /pages/some-page/+data.js */
        title?: string;
        /** Value for <meta name="description"> defined dynamically */
        description?: string;
      }
      config: {
        /** Value for <title> defined statically by /pages/some-page/+title.js (or by `export default { title }` in /pages/some-page/+config.js) */
        title?: string;
        /** Value for <meta name="description"> defined statically */
        description?: string;
        pageStarted?: EventCallable<{ params: Record<string, string>; data: unknown }>;
      }
      /** https://vike.dev/render */
      abortReason?: string;

      // https://effector.dev/en/api/effector/scope/
      scope?: Scope;
      scopeValues?: Record<string, unknown>;
    }
  }
}
