module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:compat/recommended"
	],
	"overrides": [
		{
			"env": {
				"node": true,
				"avoidEscape": true
			},
			"files": [
				".eslintrc.{js,cjs}"
			],
			"parserOptions": {
				"sourceType": "script"
			}
		}
	],
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"rules": {
		"semi": ["error", "always"],
		"quotes": ["error", "double"]
	}
};
