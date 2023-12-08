import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
import "@clerk/clerk-js";
const clerk = writable(null);
const ClerkLoaded = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $clerk, $$unsubscribe_clerk;
  $$unsubscribe_clerk = subscribe(clerk, (value) => $clerk = value);
  $$unsubscribe_clerk();
  return `${$clerk ? `${slots.default ? slots.default({ clerk: $clerk }) : ``}` : ``}`;
});
const SignedIn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(ClerkLoaded, "ClerkLoaded").$$render($$result, {}, {}, {
    default: ({ clerk: clerk2 }) => {
      return `${clerk2 && clerk2.user ? `${slots.default ? slots.default({ user: clerk2.user }) : ``}` : ``}`;
    }
  })}`;
});
const SignedOut = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(ClerkLoaded, "ClerkLoaded").$$render($$result, {}, {}, {
    default: ({ clerk: clerk2 }) => {
      return `${clerk2 && !clerk2.user ? `${slots.default ? slots.default({}) : ``}` : ``}`;
    }
  })}`;
});
const UserButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_clerk;
  $$unsubscribe_clerk = subscribe(clerk, (value) => value);
  $$unsubscribe_clerk();
  return `<div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_clerk;
  $$unsubscribe_clerk = subscribe(clerk, (value) => value);
  $$unsubscribe_clerk();
  return `${validate_component(SignedIn, "SignedIn").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(UserButton, "UserButton").$$render($$result, { afterSignOutUrl: "/" }, {}, {})} <button data-svelte-h="svelte-1cs4qmm">Test</button>`;
    }
  })} ${validate_component(SignedOut, "SignedOut").$$render($$result, {}, {}, {
    default: () => {
      return `<a href="/signin" data-svelte-h="svelte-1iuplsv">Sign in</a> <span data-svelte-h="svelte-1e2i4m">|</span> <a href="/signup" data-svelte-h="svelte-tb1kzj">Sign up</a> `;
    }
  })}`;
});
export {
  Page as default
};
