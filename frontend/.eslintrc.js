module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'next/core-web-vitals',
    'prettier',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['simple-import-sort', 'prettier', '@typescript-eslint'],
  rules: {
    'sort-imports': [2, { ignoreCase: true, ignoreDeclarationSort: true }],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/no-non-null-asserted-optional-chain': 1,
    'no-empty': 1,
    'simple-import-sort/imports': [
      2,
      {
        groups: [
          [
            `^(${require('module').builtinModules.join('|')})(/|$)`,
            '^react',
            '^@?\\w',
          ],
          [
            '^layout(/.*|$)',
            '^common(/.*|$)',
            '^components(/.*|$)',
            '^containers(/.*|$)',
          ],
          ['^utils(/.*|$)', '^hooks(/.*|$)'],
          ['^\\.'],
          ['^models(/.*|$)'],
          ['^.+\\.s?css$'],
        ],
      },
    ],
  },
};
