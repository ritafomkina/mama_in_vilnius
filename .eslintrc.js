/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    root: true,
    ignorePatterns: [
        "*.js",
        "*.json",
        "*.jpg",
        "*.svg",
        "*.json",
        "*.less",
        "*.scss",
        "*.txt",
        "*.png",
        "*.jpg",
        "*.pdf",
        "*.mp3",
        "*.ogv",
        "*.mp4",
        "*.ico",
        "*.xml",
        "*.md",
        "scripts/**",
        "*.html",
    ],
    extends: [
        "./scripts/eslint/naming-convention.js",
        "./scripts/eslint/no-restricted-syntax.js",
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        project: [require.resolve("./tsconfig.eslint.json")],
    },
    parser: "@typescript-eslint/parser",
    overrides: [
        {
            files: ["*.ts"],
            parser: "@typescript-eslint/parser",
            plugins: ["@typescript-eslint"],
            rules: {
                "@typescript-eslint/explicit-member-accessibility": [
                    "warn",
                    {
                        accessibility: "no-public",
                    },
                ],
            },
        },
    ],
};
