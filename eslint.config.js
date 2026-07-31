const js = require('@eslint/js');
const globals = require('globals');

/*
 * Flat config, replacing .eslintrc (ESLint 10 no longer reads eslintrc).
 *
 * eslint-config-airbnb-base cannot run on ESLint 10 (it peers ^7 || ^8), so
 * the base is @eslint/js recommended. To avoid silently losing lint coverage,
 * the airbnb rules that were actually reporting problems in this codebase are
 * re-declared explicitly below, under "carried over from airbnb-base".
 */
module.exports = [
  {
    ignores: ['**/node_modules/**']
  },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'commonjs',
      globals: {
        ...globals.node
      }
    },
    rules: {
      // Previously set explicitly in .eslintrc
      'no-process-env': 'off',
      'no-console': 'warn',
      quotes: ['error', 'single'],
      'max-len': [
        'error',
        {
          code: 80,
          comments: 80,
          ignoreStrings: true,
          ignoreTemplateLiterals: true
        }
      ],
      'comma-dangle': ['error', 'never'],
      'no-await-in-loop': 'off',
      'no-return-await': 'off',
      'require-await': 'off',
      'prefer-destructuring': 'off',

      // Carried over from airbnb-base
      'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
      'consistent-return': 'error',
      'func-names': 'warn',
      'global-require': 'error',
      'guard-for-in': 'error',
      'implicit-arrow-linebreak': ['error', 'beside'],
      indent: ['error', 2, { SwitchCase: 1 }],
      'no-continue': 'error',
      'no-param-reassign': [
        'error',
        {
          props: true,
          // airbnb-base's allowlist; 'ctx' in particular is pervasive here
          ignorePropertyModificationsFor: [
            'acc',
            'accumulator',
            'e',
            'ctx',
            'context',
            'req',
            'request',
            'res',
            'response',
            '$scope',
            'staticContext'
          ]
        }
      ],
      'no-restricted-syntax': [
        'error',
        'ForInStatement',
        'ForOfStatement',
        'LabeledStatement',
        'WithStatement'
      ],
      'no-return-assign': ['error', 'always'],
      'no-shadow': 'error',
      'no-underscore-dangle': 'error'
    }
  },
  {
    // Replaces the /* eslint-env jest */ comments in the test files, which
    // ESLint 10 no longer supports.
    files: ['**/*.test.js'],
    languageOptions: {
      globals: {
        ...globals.jest
      }
    }
  },
  {
    // sdk/js runs its tests in the jsdom environment (see its jest config),
    // so those specs legitimately reference window.
    files: ['sdk/js/**/*.test.js'],
    languageOptions: {
      globals: {
        ...globals.browser
      }
    }
  }
];
