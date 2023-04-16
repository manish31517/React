module.exports = {
  
   module: {
    rules:[
        {
            test: /\.js$/,
            exclude: /node_moduels/,
            use : {
                loader: 'babel-loader'
            },
        },
    ],
   },
};

/*
Meaning of above code
For every file that have extensio .js exluding node_module , use the babel-loader on it and babel is going to pick up the configuration
that we just did for babel and compile all the moder javascript into something that  your targeted browsers are going to understand.
*/