module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['systemjs', 'jasmine'],
    systemjs: {
      baseURL: '/base/',
      configFile: 'config.js',
      config: {
        paths: {
          "typescript": "node_modules/typescript/lib/typescript.js",
          "systemjs": "node_modules/systemjs/dist/system.js",
          'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js'
        },
        packages: {
          '/base/src': {
            defaultExtension: 'ts'
          },
        },
        transpiler: 'typescript',
        typescriptOptions: {
          "module": "amd"
        }
      },
      serveFiles: [
        'jspm_packages/**/*.js'
      ]
    },
    files: [
      'src/main.spec.ts'
    ],
    port: 9876,
    browsers: ['Chrome'],  // or PhantomJS
    browserNoActivityTimeout: 15000,
    singleRun: true,
  });
};
