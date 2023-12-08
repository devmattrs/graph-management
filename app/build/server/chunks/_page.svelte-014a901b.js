import { c as create_ssr_component, v as validate_component } from './ssr-76eabed7.js';
import { S as SignX } from './SignX-bf4e1fdf.js';
import './clerk-0f162d20.js';

const SignUp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SignX, "SignX").$$render($$result, Object.assign({}, { x: "up" }, $$props), {}, {})}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="full center">${validate_component(SignUp, "SignUp").$$render($$result, {}, {}, {})}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-014a901b.js.map
