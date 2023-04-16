module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true,
    },
    extends: [
         'eslint:recommended',
         'plugin:react/recommended'
    ],
    parserOptions: {
        ecmaFeatures:{
            jsx:true,
        },
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        // You can do your customization here
        // For example, if you don't want to use  the props-type package
        // you can turn off the recommended rule with 'react/props-types:['off']
    }
    
}