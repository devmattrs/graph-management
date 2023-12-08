import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { S as SignX } from "../../../chunks/SignX.js";
const SignIn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SignX, "SignX").$$render($$result, Object.assign({}, { x: "in" }, $$props), {}, {})}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-full border center h-[50vh]">hello
	${validate_component(SignIn, "SignIn").$$render($$result, { redirectUrl: "/" }, {}, {})}</div>`;
});
export {
  Page as default
};
