import { env } from '$env/dynamic/public';
export const api = (path, opts = undefined) => fetch(`${env.PUBLIC_API_URL}${path}`, {
    ...opts,
});
