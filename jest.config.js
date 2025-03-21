export default {
	testEnvironment: "jest-environment-jsdom",
	transform: {
		"^.+\\.(js|jsx)$": [
			"babel-jest",
			{ presets: ["@babel/preset-env", "@babel/preset-react"] },
		],
	},
	moduleFileExtensions: ["js", "jsx"],
};
