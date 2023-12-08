

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.a330dd45.js","_app/immutable/chunks/scheduler.d23b7513.js","_app/immutable/chunks/index.dfb5f55f.js"];
export const stylesheets = ["_app/immutable/assets/0.020bfcef.css"];
export const fonts = [];
