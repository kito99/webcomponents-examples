exports.config = {
    bundles: [
        {components: ['vt-echo-stencil']}
    ],
    collections: [
        {name: '@stencil/router'}
    ],
    srcDir: '.',
    buildDir: 'build',
    wwwDir: 'stencil-output'
};

exports.devServer = {
    root: '.',
    watchGlob: 'vt-echo-stencil*'
}

