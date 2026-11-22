const CACHE_NAME = 'jimpitan-digital-push-v1';

self.addEventListener('install', event => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('push', event => {
  let data = {};

  try {
    data = event.data ? event.data.json() : {};
  } catch (error) {
    data = {
      body: event.data
        ? event.data.text()
        : 'Ada pembaruan Jimpitan Digital.'
    };
  }

  const title = data.title || 'Jimpitan Digital';

  const options = {
    body: data.body ||
      'Ada pembaruan baru. Buka aplikasi untuk melihat detail.',
    icon: './icons/icon-192.png',
    badge: './icons/icon-192.png',
    tag: data.tag || ('jimpitan-' + Date.now()),
    renotify: true,
    data: {
      url: data.url || './'
    },
    vibrate: [180, 90, 180]
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();

  const target = new URL(
    event.notification.data?.url || './',
    self.location.origin
  ).href;

  event.waitUntil((async () => {
    const windows = await self.clients.matchAll({
      type: 'window',
      includeUncontrolled: true
    });

    for (const client of windows) {
      if ('focus' in client) {
        await client.focus();

        if ('navigate' in client) {
          await client.navigate(target);
        }

        return;
      }
    }

    if (self.clients.openWindow) {
      await self.clients.openWindow(target);
    }
  })());
});

self.addEventListener('pushsubscriptionchange', event => {
  // Buka aplikasi dan aktifkan Notifikasi kembali
  // jika browser mengganti langganan Push.
});
