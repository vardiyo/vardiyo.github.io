'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "43b686b2f10dbbacb1fed8b8ef1fa005",
"assets/FontManifest.json": "f9513c32d638ff42a8195fe0fc078ad1",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/MyIcons.ttf": "04b6214a2d9d86ca5709f4793a23603c",
"assets/LICENSE": "23e392a6b2e37da7a2a0004d6cf936c6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "962483299a5fb5783956db6ffa2d3647",
"/": "962483299a5fb5783956db6ffa2d3647",
"main.dart.js": "e3e9590184ac85fc8a6e6813dcbf8883",
"manifest.json": "3e610c337bb3e4eeb7fd312e396ffe1f"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
