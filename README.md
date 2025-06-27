This is a basic example cart in Javascript for the [null0](https://notnull.games/null0) game-engine.

## usage

Carts run natively, and on the web. This repo will auto-publish to github-pages on push, so users can check out your cart without installing anything.

They can also install [the native runtime](https://github.com/notnullgames/null0/releases) and use it to run your cart.

## github

There are 2 actions:

- Publish demo to github-pages - this happens on any push
- Attach current version of your cart to any releases that are created (like [here](https://github.com/notnullgames/cart_js/releases/))

## developing

Then you can do this:

```sh
# start a local updating web-server that builds
npm start
```

You will find your cart in `webroot/mygame.null0`

If you have node installed, you can also get a nice watching-webseerver, locally:

```
npm start
```

After this, create a github-release, and your cart will show up on releases (like [here](https://github.com/notnullgames/cart_js/releases/)).

