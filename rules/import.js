const { join } = require('path');

const packageJsonPath = join(process.cwd(), 'package.json');
const packageJson = require(packageJsonPath); // eslint-disable-line import/no-dynamic-require

const tsconfigPath = packageJson.workspaces
    ? packageJson.workspaces.map((workspace) => join(workspace, '/tsconfig.json'))
    : 'tsconfig.json';

module.exports = {
    rules: {
        'import/no-extraneous-dependencies': [2, {}],
        'import/no-default-export': 2,
        'import/prefer-default-export': 0,
        'import/order': [
            1,
            {
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                ],
                'newlines-between': 'never',
            },
        ],
    },
    settings: {
        'import/resolver': {
            node: {},
        },
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: ['plugin:import/typescript'],
            rules: {
                'import/extensions': [
                    'error',
                    'ignorePackages',
                    {
                        js: 'never',
                        jsx: 'never',
                        mjs: 'never',
                        ts: 'never',
                        tsx: 'never',
                    },
                ],
            },
            settings: {
                'import/parsers': {
                    '@typescript-eslint/parser': ['.ts', '.tsx'],
                },
                'import/resolver': {
                    node: {},
                    ts: {
                        directory: tsconfigPath,
                    },
                },
            },
        },
    ],
};