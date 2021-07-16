import { createElement } from "../util/createElement.js";
import { nav_data } from "../assets/data/nav.js";

export default class Footer {
   constructor({ $target }) {
      this.section = createElement("section", "footer-section");

      const logo = createElement("h2", "logo");
      logo.innerText = nav_data.logo_text;

      const $p = createElement("p");
      $p.innerText = nav_data.footer_text;

      this.section.appendChild(logo);
      this.section.appendChild($p);
      $target.appendChild(this.section);
   }
}
