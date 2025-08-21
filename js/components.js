// function loadComponent(id, file) {
//   fetch(file)
//     .then((res) => res.text())
//     .then((html) => {
//       document.getElementById(id).innerHTML = html;
//     });
// }
// components.js
async function loadComponent(targetId, url) {
  const box = document.getElementById(targetId);
  const html = await fetch(url).then((r) => r.text());
  box.innerHTML = html;

  // (tùy chọn) kích hoạt script bên trong fragment nếu có
  box.querySelectorAll("script").forEach((old) => {
    const s = document.createElement("script");
    if (old.src) s.src = old.src;
    else s.textContent = old.textContent;
    document.head.appendChild(s);
    s.remove();
  });

  // báo đã xong
  box.dispatchEvent(
    new CustomEvent("component:loaded", { detail: { id: targetId, url } })
  );
  return box;
}
