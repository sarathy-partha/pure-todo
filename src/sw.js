var CACHE_NAME = 'my-todo-purejs';

self.addEventListener('install', event => {
    console.log("Service Worker Installed");
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache =>
                fetch("assets.manifest.json")
                    .then(response => response.json())
                    .then(assets =>
                        cache.addAll([
                            "/",
                            "https://fonts.googleapis.com/icon?family=Material+Icons",
                            "https://fonts.gstatic.com/s/materialicons/v31/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2"
                        ])
                    )
            ).then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', function(event) {
    
      var cacheWhitelist = [CACHE_NAME];
    
      event.waitUntil(
        caches.keys().then(function(cacheNames) {
          return Promise.all(
            cacheNames.map(function(cacheName) {
              if (cacheWhitelist.indexOf(cacheName) === -1) {
                return caches.delete(cacheName);
              }
            })
          );
        })
      );
    });

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (res) {
            if (res) {
                return res;
            }
            requestBackend(event);
        })
    )
});

function requestBackend(event) {
    var url = event.request.clone();
    return fetch(url).then(function (res) {
        //if not a valid response send the error
        if (!res || res.status !== 200 || res.type !== 'basic') {
            return res;
        }

        var response = res.clone();

        caches.open(CACHE_NAME).then(function (cache) {
            cache.put(event.request, response);
        });

        return res;
    })
}