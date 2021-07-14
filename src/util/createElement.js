export function createElement(type, className) {
   const element = document.createElement(type);
   if (className) element.className = className;
   return element;
}

export function createStyleLink($target, url) {
   const $link = document.createElement("link");
   $link.rel = "stylesheet";
   $link.type = "text/css";
   $link.href = url;
   $target.appendChild($link);
}
