# Karma stuck on `aurelia-polyfills` with TS 2.3+

Setup based on JSPM 0.16. With TypeScript 2.3+ and `aurelia-polyfills` Karma will get stuck infinitely.

Try it yourself:

```
npm install
node_modules/.bin/karma start
```

Now comment out the `import "aurelia-polyfills";` line in `main.spec.ts` or downgrade TS to 2.2:

    npm install typescript@~2.2.0

And tests will work just fine.

Tested on Chrome and PhantomJS.
