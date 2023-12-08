import { c as create_ssr_component } from './ssr-76eabed7.js';
import './clerk-0f162d20.js';

const SignX = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let afterSignXUrl;
  let { x = "in" } = $$props;
  if ($$props.x === void 0 && $$bindings.x && x !== void 0)
    $$bindings.x(x);
  afterSignXUrl = x === "in" ? "afterSignInUrl" : "afterSignUpUrl";
  $$props.redirectUrl || $$props[afterSignXUrl] || "/";
  return `${``}`;
});

export { SignX as S };
//# sourceMappingURL=SignX-bf4e1fdf.js.map
