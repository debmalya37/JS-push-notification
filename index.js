const button = document.querySelector("button");

button.addEventListener("click", () => {
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      const notification = new Notification("example notification", {
        body: " body of the notificaion ",
        Data: { hello: " world" },
      });

      notification.addEventListener("error", (e) => {
        alert("error");
      });
    }
  });
});
