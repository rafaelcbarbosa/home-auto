self.addEventListener('install', function(event) { 
    event.waitUntil( 
        caches.open('v1').then(function(cache) { 
            return cache.addAll([ 
                'https://rafaelcbarbosa.github.io/home-auto/css/style.css', 
                'https://rafaelcbarbosa.github.io/home-auto/js/main.js' 
            ]); 
        }) 
    ); 
}); 
 
self.addEventListener('fetch', function(event) { 
    event.respondWith(caches.match(event.request).then(function(response) { 
    // caches.match() always resolves 
    // but in case of success response will have value 
    if (response !== undefined) { 
        console.log('Message A'); 
        return response; 
    } else { 
        console.log('Message B'); 
        return fetch(event.request).then(function (response) { 
        // response may be used only once 
        // we need to save clone to put one copy in cache 
        // and serve second one 
        let responseClone = response.clone(); 
        console.log('Message C'); 

        caches.open('v1').then(function (cache) { 
        cache.put(event.request, responseClone); 
        console.log('Message D'); 
        }); 
        return response; 
        }).catch(function () { 
        console.log('Message E'); 
        return; 
        }); 
        } 
    })); 
