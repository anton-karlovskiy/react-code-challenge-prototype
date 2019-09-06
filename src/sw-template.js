
if ('function' === typeof importScripts) {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js'
  );
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded');

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([]);

    /* custom cache rules*/
    workbox.routing.registerNavigationRoute('/index.html', {
      blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/],
    });

    workbox.routing.registerRoute(
      /\.(?:png|gif|jpg|jpeg)$/,
      new workbox.strategies.CacheFirst({
        cacheName: 'images',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 60,
            maxAgeSeconds: 24 * 60 * 60, // 1 Day
          }),
        ],
      })
    );

    const matchFunction = ({url, event}) => {
      const cacheIdentifiers = [
        '/sw.js', // /sw.js
        'https://jsonplaceholder.typicode.com/photos', // https://jsonplaceholder.typicode.com/photos?_start=0&_limit=24
        '/manifest.json', // /manifest.json
        'https://fonts.googleapis.com/icon?family=Material+Icons', // https://fonts.googleapis.com/icon?family=Material+Icons
        'https://fonts.gstatic.com/s/materialicons' // https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2
      ];

      const requestURL = url.href;
      const checkShouldCacheURL = path => {
        let shouldCache = false;
        for (const cacheIdentifier of cacheIdentifiers) {
          shouldCache = path.includes(cacheIdentifier);
          if (shouldCache) break;
        }
        return shouldCache;
      };

      return new RegExp('^https://via\\.placeholder\\.com/').test(requestURL) || checkShouldCacheURL(requestURL);
    };

    const expirationPlugin = new workbox.expiration.Plugin({
      maxEntries: 60,
      maxAgeSeconds: 24 * 60 * 60
    });

    const cacheOpaqueResponsesPlugin = new workbox.cacheableResponse.Plugin({
      statuses: [0, 200]
    });
    
    workbox.routing.registerRoute(
      matchFunction,
      new workbox.strategies.CacheFirst({
        cacheName: 'gallery-images',
        plugins: [expirationPlugin, cacheOpaqueResponsesPlugin]
      })
    );
  } else {
    console.log('Workbox could not be loaded. No Offline support');
  }
}
