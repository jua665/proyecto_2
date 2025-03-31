const CACHE_NAME = "safehelmet-cache-v7"; // Cambia el nombre del caché en cada actualización
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
  self.skipWaiting();
});
function InsertIndexedDB(data){
  let db = indexedDB.open("database"); // Eliminamos window.

  db.onupgradeneeded = event => {
      let db = event.target.result;
      if (!db.objectStoreNames.contains("Usuarios")) {
          db.createObjectStore("Usuarios", { keyPath: "id", autoIncrement: true });
      }
  };

  db.onsuccess=event=>
  {
      let result=event.target.result;

      let transaction=result.transaction("Usuarios","readwrite");
      let obj=transaction.objectStore("Usuarios");

      const resultado=obj.add(data);

      resultado.onsuccess=event2=>
      {
          //console.log("insersion",event2.target.result);
          self.registration.sync.register("syncUsuarios");
      }
  }
  
  db.onerror = event => {
      console.error("Error al abrir IndexedDB:", event.target.error);
  };
}


self.addEventListener("activate",event=>{
  caches.delete("appShell-v5");
  caches.delete("dinamico-v5");
});



self.addEventListener("fetch", event => {
  if (!event.request.url.startsWith("http")) return; // Evita errores con extensiones

  if (event.request.method === "POST") {
      event.respondWith(
          event.request.clone().text() // Usa .text() en lugar de .json()
              .then(bodyText => {
                  try {
                      let body = JSON.parse(bodyText);
                      return fetch(event.request).catch(() => {
                          InsertIndexedDB(body);
                          return new Response(JSON.stringify({ message: "Datos guardados offline" }), {
                              status: 200,
                              headers: { "Content-Type": "application/json" }
                          });
                      });
                  } catch (err) {
                      console.error("❌ Error al procesar el body del POST:", err);
                      return new Response(JSON.stringify({ error: "Error procesando la solicitud" }), {
                          status: 400,
                          headers: { "Content-Type": "application/json" }
                      });
                  }
              })
      );
  } else {
      event.respondWith(
          fetch(event.request)
              .then(resp => {
                  if (!resp || !resp.ok) { // Validamos que resp sea un objeto Response válido
                      return caches.match(event.request).then(cacheResp => {
                          return cacheResp || new Response("Contenido no disponible en caché", {
                              status: 503,
                              statusText: "Servicio no disponible"
                          });
                      });
                  }

                  return caches.open("dinamico-v6").then(cache => {
                      cache.put(event.request, resp.clone()); // Guardamos la respuesta en caché
                      return resp;
                  });
              })
              .catch(error => {
                  console.error("❌ Error en fetch:", error);
                  return caches.match(event.request).then(cacheResp => {
                      return cacheResp || new Response("Error al obtener los datos", {
                          status: 500,
                          statusText: "Error interno"
                      });
                  });
              })
      );
  }
});



self.addEventListener("push", (event) => {

  let options={
      body:event.data.text(),
      icon:"/icon.png",
      Image:"/icon.png",
  }
  
  self.registration.showNotification("Titulo",options); 
   
});


// Escuchar evento de sincronización
self.addEventListener('sync', event => {
  if (event.tag === "syncUsuarios") {
      event.waitUntil(
          new Promise((resolve, reject) => {
              let dbRequest = indexedDB.open("database", 1);

              dbRequest.onsuccess = event => {
                  let db = event.target.result;
                  let transaction = db.transaction("Usuarios", "readonly");
                  let store = transaction.objectStore("Usuarios");

                  let getAllRequest = store.getAll();

                  getAllRequest.onsuccess = () => {
                      let Usuarios = getAllRequest.result;
                      console.log("🔄 Intentando sincronizar usuarios:", Usuarios);

                      if (Usuarios.length === 0) {
                          console.log("✅ No hay usuarios pendientes de sincronización.");

                          resolve();
                          return;
                      }

                      let postPromises = Usuarios.map(Usuarios =>
                          fetch('https://servertest-tnt7.onrender.com/api/users/registro', {
                              method: 'POST',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify(Usuarios)
                          })
                      );

                      Promise.all(postPromises)
                          .then(() => {
                              console.log("✅ Usuarios sincronizados con éxito.");

                              let deleteTransaction = db.transaction("Usuarios", "readwrite");
                              let deleteStore = deleteTransaction.objectStore("Usuarios");
                              deleteStore.clear();
                              resolve();
                          })
                          .catch(reject);
                  };
              };

              dbRequest.onerror = reject;
          })
      );
  }
});