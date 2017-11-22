exports.config = {
    bundles: [
        {components: ['vt-echo-stencil']}
    ],
    srcDir: 'src/stencil',
    wwwDir: 'stencil-output',
    publicPath: '/build',
    appNamespace: '/vt-ech-stencil'
};

exports.devServer = {
    root: '.',
    watchGlob: '**/*'
}


