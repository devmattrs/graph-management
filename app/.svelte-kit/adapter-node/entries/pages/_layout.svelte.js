import { s as setContext, c as create_ssr_component, o as onDestroy, v as validate_component } from "../../chunks/ssr.js";
import { B as BROWSER } from "../../chunks/prod-ssr.js";
import { QueryClient } from "@tanstack/query-core";
const browser = BROWSER;
const _contextKey = "$$_queryClient";
const setQueryClientContext = (client) => {
  setContext(_contextKey, client);
};
const QueryClientProvider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { client = new QueryClient() } = $$props;
  setQueryClientContext(client);
  onDestroy(() => {
    client.unmount();
  });
  if ($$props.client === void 0 && $$bindings.client && client !== void 0)
    $$bindings.client(client);
  return `${slots.default ? slots.default({}) : ``}`;
});
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false, enabled: browser }
    }
  });
  return `${validate_component(QueryClientProvider, "QueryClientProvider").$$render($$result, { client: queryClient }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  Layout as default
};
