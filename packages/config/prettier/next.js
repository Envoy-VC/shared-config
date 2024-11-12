/** @type {import('prettier').Config} */
module.exports = {
  singleQuote: true,
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  useTabs: false,
  jsxSingleQuote: true,
  endOfLine: 'lf',
  printWidth: 80,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    'prettier-plugin-packagejson',
    '@trivago/prettier-plugin-sort-imports',
  ],
  importOrder: [
    '^next/(.*)$',
    '^react/(.*)$',
    '^~/lib/hooks/(.*)$',
    '^~/lib/helpers/(.*)$',
    '^~/lib/data/(.*)$',
    '^~/lib/(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^~/assets/(.*)$',
    '^[./]',
    '^~/types/(.*)$',
  ],
};
