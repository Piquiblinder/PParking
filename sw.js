// sw.js

// 1. Instalación: El SW se instala y toma el control
self.addEventListener('install', (event) => {
    console.log('Service Worker: Instalado');
    self.skipWaiting();
});

// 2. Activación: El SW toma el control de la página
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activado');
    event.waitUntil(clients.claim());
});

// 3. Notificación de 5 minutos (Lógica básica)
// Nota: Para que funcione correctamente, usaremos una lógica que verifica el estado
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'CHECK_TIMER') {
        // Aquí es donde en el futuro enviaremos la alerta
        console.log('Verificando tiempo para notificaciones...');
    }
});
