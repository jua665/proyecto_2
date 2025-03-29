const CACHE_NAME = "safehelmet-cache-v4"; // Incrementar versión en cada actualización
const URLS_TO_CACHE = [
  "/",
  "/index.html",
  "/styles.css",
  "/static/js/main.js",
  "/static/js/bundle.js",
  "/icons/cap.png",
  "/icons/cap1.png",
  "/icons/192.png"
];

// 🛠️ Instalar Service Worker y cachear archivos esenciales
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

// 🚀 Activar y eliminar cachés antiguos
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log(`🗑 Eliminando caché antiguo: ${cache}`);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// 🌐 Interceptar solicitudes y servir desde caché si no hay conexión
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch(() => {
        return caches.match("/index.html"); // Página de fallback en offline
      });
    })
  );
});

// 🔄 Sincronización en segundo plano (Background Sync)
self.addEventListener("sync", (event) => {
  if (event.tag === "syncUsuarios") {
    event.waitUntil(syncUsuarios());
  }
});

async function syncUsuarios() {
  if (!navigator.onLine) {
    console.warn("⚠️ Aún sin conexión. No se puede sincronizar.");
    return;
  }

  let dbRequest = indexedDB.open("database", 2);
  dbRequest.onsuccess = async (event) => {
    let db = event.target.result;
    let transaction = db.transaction("Usuarios", "readonly");
    let store = transaction.objectStore("Usuarios");

    let getAllRequest = store.getAll();
    getAllRequest.onsuccess = async () => {
      let usuarios = getAllRequest.result;
      if (usuarios.length === 0) {
        console.log("✅ No hay usuarios pendientes de sincronización.");
        return;
      }

      console.log("🔄 Intentando sincronizar usuarios:", usuarios);

      let syncPromises = usuarios.map((usuario) =>
        fetch('https://pwasb.onrender.com/api/subs/registro', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(usuario)
        })
      );

      try {
        await Promise.all(syncPromises);
        console.log("✅ Usuarios sincronizados con éxito.");
        
        let deleteTransaction = db.transaction("Usuarios", "readwrite");
        let deleteStore = deleteTransaction.objectStore("Usuarios");
        deleteStore.clear();
      } catch (error) {
        console.error("❌ Error al sincronizar usuarios:", error);
      }
    };
  };

  dbRequest.onerror = () => console.error("❌ Error al abrir IndexedDB");
}

// 📢 Enviar notificación cuando el usuario inicie sesión
self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") {
    self.skipWaiting();
  } else if (event.data.type === "LOGIN_SUCCESS") {
    self.registration.showNotification("SafeHelmet", {
      body: `Bienvenido ${event.data.username}!`,
      icon: "/icons/192.png",
      badge: "/icons/192.png",
    });
  }
});
