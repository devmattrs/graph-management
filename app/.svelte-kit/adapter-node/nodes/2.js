

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.b5a89404.js","_app/immutable/chunks/scheduler.d23b7513.js","_app/immutable/chunks/index.dfb5f55f.js","_app/immutable/chunks/public.11294112.js","_app/immutable/chunks/index.f2bc2b55.js","_app/immutable/chunks/index.0d243ee4.js","_app/immutable/chunks/SignedOut.07f955ac.js"];
export const stylesheets = [];
export const fonts = [];
