// sw.js
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'PROGRAMAR_AVISO') {
        const { delay } = event.data;
        
        // Usamos un timer dentro del Service Worker (más persistente)
        setTimeout(() => {
            self.registration.showNotification("PParking", {
                body: "Tu zona azul termina en 5 minutos. ¡Avisa si quieres ampliar!",
                icon: 'https://cdn-icons-png.flaticon.com/512/3203/3203926.png'
            });
        }, delay);
    }
});
