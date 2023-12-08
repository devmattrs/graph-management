

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.fa833fe6.js","_app/immutable/chunks/scheduler.d23b7513.js","_app/immutable/chunks/index.dfb5f55f.js","_app/immutable/chunks/singletons.13c62b57.js","_app/immutable/chunks/index.0d243ee4.js"];
export const stylesheets = [];
export const fonts = [];
