exports.config = {
    bundles: [
        {components: ['vt-echo-stencil']}
    ],
    collections: [
        {name: '@stencil/router'}
    ],
    srcDir: 'src/stencil',
    wwwDir: 'stencil-output'
};

exports.devServer = {
    root: '.',
    watchGlob: '**/*'
}


