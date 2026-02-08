// Register Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
    .then(() => console.log("Service Worker Registered"));
}

// Push Notification
document.getElementById("notify").addEventListener("click", () => {
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      new Notification("PWA Shop", {
        body: "🔥 New offers available!",
        icon: "icons/icon-192.png"
      });
    }
  });
});
