module.exports = {
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-await-in-loop': 'error',
        'no-dupe-else-if': 'error',
        'no-import-assign': 'error',
        'no-template-curly-in-string': 'error',
    }
};
