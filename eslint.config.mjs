import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
	js.configs.recommended,
	{
		files: ["src/**/*.{js,jsx}"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			globals: {
				...globals.browser,
			},
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		plugins: {
			react,
			"react-hooks": reactHooks,
		},
		settings: {
			react: {
				version: "detect",
			},
		},
		rules: {
			...react.configs.recommended.rules,
			...react.configs["jsx-runtime"].rules,
			...reactHooks.configs.recommended.rules,
			"no-prototype-builtins": "off",
			"react/prop-types": "off",
			"react-hooks/immutability": "off",
			"react-hooks/purity": "off",
			"react-hooks/refs": "off",
			"react-hooks/set-state-in-effect": "off",
			"react/jsx-key": "off",
			"react/no-unescaped-entities": "off",
			"react/no-unknown-property": "off",
			"no-unused-vars": [
				"warn",
				{ varsIgnorePattern: "^React$", argsIgnorePattern: "^_", caughtErrors: "none" },
			],
		},
	},
];
