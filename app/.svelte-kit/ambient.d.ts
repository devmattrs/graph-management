
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const CLERK_SECRET_KEY: string;
	export const NVM_INC: string;
	export const npm_package_devDependencies_prettier: string;
	export const STARSHIP_SHELL: string;
	export const npm_package_devDependencies_eslint_plugin_svelte: string;
	export const TERM_PROGRAM: string;
	export const NODE: string;
	export const INIT_CWD: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const NVM_CD_FLAGS: string;
	export const npm_package_dependencies__tanstack_svelte_query: string;
	export const npm_package_devDependencies_vite: string;
	export const TERM: string;
	export const SHELL: string;
	export const TMPDIR: string;
	export const npm_package_scripts_lint: string;
	export const CONDA_SHLVL: string;
	export const DOCKER_HOST: string;
	export const npm_config_global_prefix: string;
	export const TERM_PROGRAM_VERSION: string;
	export const CONDA_PROMPT_MODIFIER: string;
	export const npm_package_scripts_dev: string;
	export const npm_package_dependencies_typescript_svelte_plugin: string;
	export const npm_package_scripts_prepublishOnly: string;
	export const TERM_SESSION_ID: string;
	export const COLOR: string;
	export const npm_config_registry: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_config_noproxy: string;
	export const PNPM_HOME: string;
	export const npm_config_local_prefix: string;
	export const USER: string;
	export const NVM_DIR: string;
	export const npm_package_scripts_check_watch: string;
	export const COMMAND_MODE: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const CONDA_EXE: string;
	export const npm_config_globalconfig: string;
	export const npm_package_dependencies_clerk_sveltekit: string;
	export const SSH_AUTH_SOCK: string;
	export const npm_package_devDependencies_postcss: string;
	export const npm_package_devDependencies_eslint: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_execpath: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_config_frozen_lockfile: string;
	export const _CE_CONDA: string;
	export const npm_package_devDependencies__typescript_eslint_parser: string;
	export const PATH: string;
	export const npm_config_engine_strict: string;
	export const npm_package_dependencies__sveltejs_adapter_node: string;
	export const npm_package_json: string;
	export const __CFBundleIdentifier: string;
	export const CONDA_PREFIX: string;
	export const npm_config_init_module: string;
	export const npm_config_userconfig: string;
	export const npm_command: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const PWD: string;
	export const npm_package_devDependencies_publint: string;
	export const npm_package_devDependencies__sveltejs_package: string;
	export const npm_package_scripts_preview: string;
	export const npm_lifecycle_event: string;
	export const EDITOR: string;
	export const npm_package_name: string;
	export const LANG: string;
	export const ITERM_PROFILE: string;
	export const npm_package_scripts_build: string;
	export const npm_package_scripts_start: string;
	export const NODE_PATH: string;
	export const XPC_FLAGS: string;
	export const npm_config_npm_version: string;
	export const npm_package_engines_node: string;
	export const npm_config_node_gyp: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const npm_package_version: string;
	export const XPC_SERVICE_NAME: string;
	export const _CE_M: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const npm_package_type: string;
	export const SHLVL: string;
	export const HOME: string;
	export const COLORFGBG: string;
	export const npm_package_dependencies_dotenv: string;
	export const LC_TERMINAL_VERSION: string;
	export const ITERM_SESSION_ID: string;
	export const npm_package_scripts_format: string;
	export const LOGNAME: string;
	export const STARSHIP_SESSION_KEY: string;
	export const CONDA_PYTHON_EXE: string;
	export const npm_config_cache: string;
	export const npm_lifecycle_script: string;
	export const npm_package_peerDependencies_svelte: string;
	export const npm_package_scripts_package: string;
	export const BUN_INSTALL: string;
	export const CONDA_DEFAULT_ENV: string;
	export const NVM_BIN: string;
	export const npm_config_user_agent: string;
	export const LC_TERMINAL: string;
	export const npm_package_dependencies__xyflow_svelte: string;
	export const npm_package_scripts_check: string;
	export const HOMEBREW_NO_ENV_HINTS: string;
	export const npm_node_execpath: string;
	export const COLORTERM: string;
	export const npm_config_prefix: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	export const PUBLIC_CLERK_PUBLISHABLE_KEY: string;
	export const PUBLIC_API_URL: string;
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		CLERK_SECRET_KEY: string;
		NVM_INC: string;
		npm_package_devDependencies_prettier: string;
		STARSHIP_SHELL: string;
		npm_package_devDependencies_eslint_plugin_svelte: string;
		TERM_PROGRAM: string;
		NODE: string;
		INIT_CWD: string;
		npm_package_devDependencies_typescript: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		NVM_CD_FLAGS: string;
		npm_package_dependencies__tanstack_svelte_query: string;
		npm_package_devDependencies_vite: string;
		TERM: string;
		SHELL: string;
		TMPDIR: string;
		npm_package_scripts_lint: string;
		CONDA_SHLVL: string;
		DOCKER_HOST: string;
		npm_config_global_prefix: string;
		TERM_PROGRAM_VERSION: string;
		CONDA_PROMPT_MODIFIER: string;
		npm_package_scripts_dev: string;
		npm_package_dependencies_typescript_svelte_plugin: string;
		npm_package_scripts_prepublishOnly: string;
		TERM_SESSION_ID: string;
		COLOR: string;
		npm_config_registry: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_config_noproxy: string;
		PNPM_HOME: string;
		npm_config_local_prefix: string;
		USER: string;
		NVM_DIR: string;
		npm_package_scripts_check_watch: string;
		COMMAND_MODE: string;
		PNPM_SCRIPT_SRC_DIR: string;
		CONDA_EXE: string;
		npm_config_globalconfig: string;
		npm_package_dependencies_clerk_sveltekit: string;
		SSH_AUTH_SOCK: string;
		npm_package_devDependencies_postcss: string;
		npm_package_devDependencies_eslint: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_execpath: string;
		npm_package_devDependencies_tslib: string;
		npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
		npm_package_devDependencies_svelte: string;
		npm_config_frozen_lockfile: string;
		_CE_CONDA: string;
		npm_package_devDependencies__typescript_eslint_parser: string;
		PATH: string;
		npm_config_engine_strict: string;
		npm_package_dependencies__sveltejs_adapter_node: string;
		npm_package_json: string;
		__CFBundleIdentifier: string;
		CONDA_PREFIX: string;
		npm_config_init_module: string;
		npm_config_userconfig: string;
		npm_command: string;
		npm_package_devDependencies_tailwindcss: string;
		PWD: string;
		npm_package_devDependencies_publint: string;
		npm_package_devDependencies__sveltejs_package: string;
		npm_package_scripts_preview: string;
		npm_lifecycle_event: string;
		EDITOR: string;
		npm_package_name: string;
		LANG: string;
		ITERM_PROFILE: string;
		npm_package_scripts_build: string;
		npm_package_scripts_start: string;
		NODE_PATH: string;
		XPC_FLAGS: string;
		npm_config_npm_version: string;
		npm_package_engines_node: string;
		npm_config_node_gyp: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		npm_package_version: string;
		XPC_SERVICE_NAME: string;
		_CE_M: string;
		npm_package_devDependencies_svelte_check: string;
		npm_package_devDependencies_autoprefixer: string;
		npm_package_type: string;
		SHLVL: string;
		HOME: string;
		COLORFGBG: string;
		npm_package_dependencies_dotenv: string;
		LC_TERMINAL_VERSION: string;
		ITERM_SESSION_ID: string;
		npm_package_scripts_format: string;
		LOGNAME: string;
		STARSHIP_SESSION_KEY: string;
		CONDA_PYTHON_EXE: string;
		npm_config_cache: string;
		npm_lifecycle_script: string;
		npm_package_peerDependencies_svelte: string;
		npm_package_scripts_package: string;
		BUN_INSTALL: string;
		CONDA_DEFAULT_ENV: string;
		NVM_BIN: string;
		npm_config_user_agent: string;
		LC_TERMINAL: string;
		npm_package_dependencies__xyflow_svelte: string;
		npm_package_scripts_check: string;
		HOMEBREW_NO_ENV_HINTS: string;
		npm_node_execpath: string;
		COLORTERM: string;
		npm_config_prefix: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		PUBLIC_CLERK_PUBLISHABLE_KEY: string;
		PUBLIC_API_URL: string;
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
