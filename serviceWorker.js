const CACHE_NAME = 'pwa-cache'
const CACHED_URLS = [
  '/',
  '/index.html',
  '/site.css',
  '/app.js'
 ]

self.addEventListener('install',(event) => {
  event.waitUntil(
    caches.open('pwa-cache').then((cache) => {
      //cache.add('/index.html')
      cache.addAll(CACHED_URLS)
    })
  )
})

self.addEventListener('fetch',(event) => {

  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request).then((response) => {
        if(response) {
          return response
        }
      })
    })
  )

})
