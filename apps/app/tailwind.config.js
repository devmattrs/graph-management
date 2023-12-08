const colors = require("tailwindcss/colors");
const fontFamily = require("tailwindcss/defaultTheme").fontFamily;

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./layout/**/*.{js,ts,jsx,tsx}",
		"!./node_modules", // 👈
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	variants: {
		display: ["group-hover", "group-nav"],
	},
	safelist: [
		"status-0",
		"status-1",
		"status-2",
		"status-3",
		"status-4",
		"priority-0",
		"priority-1",
		"priority-2",
		"priority-3",
		"after:w-[0%]",
		"after:w-[10%]",
		"after:w-[20%]",
		"after:w-[30%]",
		"after:w-[40%]",
		"after:w-[50%]",
		"after:w-[60%]",
		"after:w-[70%]",
		"after:w-[80%]",
		"after:w-[90%]",
		"after:w-[100%]",
		{
			pattern: /[!]?(outline|border|shadow|bg)-(status|priority)-([01234])/,
		},
	],

	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				"priority-0": colors.red[200],
				"priority-1": colors.red[300],
				"priority-2": colors.red[500],
				"priority-3": colors.red[700],
				// archived
				"status-0": colors.slate["300"],
				// backlog
				"status-1": colors.orange["300"],
				// progress
				"status-2": colors.yellow["300"],
				// review
				"status-3": colors.sky["300"],
				// complete
				"status-4": colors.teal["300"],
				blue: colors.slate,
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			transitionProperty: {
				size: "width, height",
			},
			borderWidth: {
				1: "1px",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/forms")],
};
