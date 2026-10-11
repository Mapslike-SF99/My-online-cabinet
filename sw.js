// 설치/업데이트 즉시 적용
self.addEventListener('install', () => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { e.waitUntil(self.clients.claim()); });

// 화면(HTML) 요청은 브라우저에 남은 옛 복사본 대신, 항상 서버에 최신 여부를 확인해서 가져옴
self.addEventListener('fetch', (e) => {
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request.url, { cache: 'no-cache' }).catch(() => fetch(e.request)));
  }
});
