import { c as create_ssr_component, v as validate_component } from './ssr-76eabed7.js';
import { S as SignX } from './SignX-bf4e1fdf.js';
import './clerk-0f162d20.js';

const SignIn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SignX, "SignX").$$render($$result, Object.assign({}, { x: "in" }, $$props), {}, {})}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-full border center h-[50vh]">hello
	${validate_component(SignIn, "SignIn").$$render($$result, { redirectUrl: "/" }, {}, {})}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-e7f67d3d.js.map
