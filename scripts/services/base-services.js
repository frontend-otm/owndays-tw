$(function () {
  setServiceMenus();
});

function setServiceMenus () {
  const menus = [
    { key: "services", text: "服務", href: "/tw/zh_tw/services" },
    { key: "lens", text: "鏡片", href: "/tw/zh_tw/services/lens" },
    { key: "lens-replacement", text: "鏡片更換", href: "/tw/zh_tw/services/lens-replacement" },
    { key: "warranty", text: "OWNDAYS安心保證", href: "/tw/zh_tw/services/warranty" },
    { key: "staff", text: "人員", href: "/tw/zh_tw/services/staff" },
  ];

  const currentPath = window.location.pathname;
  const currentKey = currentPath
  .replace(/\/$/, "")
  .split("/")
  .pop()
  .replace(".html", "");

  function renderMenu(container) {
    const ul = document.createElement("ul");

    menus.forEach(menu => {
      const li = document.createElement("li");
      const a = document.createElement("a");

      a.href = menu.href;
      a.textContent = menu.text;

      if (currentKey === menu.key) {
        li.classList.add("active");
      }

      li.appendChild(a);
      ul.appendChild(li);
    });

    container.appendChild(ul);
  }

  document
    .querySelectorAll(".base-services__menu")
    .forEach(renderMenu);
}
