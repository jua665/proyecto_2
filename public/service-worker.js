CACHE_NAME = "safehelmet-cache-v6"; // Cambia el nombre del caché en cada actualización
const URLS_TO_CACHE = [
  "/",
  "/index.html",
  "/styles.css",
  "/static/js/main.js",  // El archivo principal de React
  "/static/js/bundle.js",  // Otro archivo importante en producción  
  "/icons/cap.png",
  "/icons/cap1.png",
  "/icons/192.png"
];

// Instalar Service Worker y cachear archivos esenciales
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

// Interceptar solicitudes y servir desde caché si no hay conexión
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch(() => {
        return caches.match("/index.html"); // Página de fallback
      });
    })
  );
});

// Eliminar cachés antiguos cuando se actualice el Service Worker
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});


// Forzar la actualización del Service Worker
self.addEventListener("message", (event) => {
    if (event.data === "SKIP_WAITING") {
      self.skipWaiting();
    }
  });


