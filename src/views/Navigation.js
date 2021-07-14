import { createElement } from "../util/createElement.js";
import { nav_data } from "../assets/data/nav.js";

export default class Navigation {
   constructor({ $target, nowUrl }) {
      this.section = createElement("section", "nav-section");
      this.navBox = createElement("div", "nav-box");

      const logo = createElement("h1", "logo");
      const logo_a = createElement("a");
      logo_a.setAttribute("href", nowUrl);
      logo_a.innerText = nav_data.logo_text;
      logo.appendChild(logo_a);

      const $nav = createElement("nav");
      const $ul = createElement("ul", "nav-ul");
      nav_data.nav_list.forEach((n, i) => {
         const $li = createElement("li", "nav-li");
         if (!i) $li.classList.add("active");
         const $a = createElement("a");
         $a.setAttribute("href", `#${n.code}`);
         $a.innerText = n.title;
         $li.appendChild($a);
         $ul.appendChild($li);
      });
      $nav.appendChild($ul);

      this.navBox.appendChild(logo);
      this.navBox.appendChild($nav);
      this.section.appendChild(this.navBox);
      $target.appendChild(this.section);
   }
}
