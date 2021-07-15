import { createElement } from "../util/createElement.js";
import { home } from "../assets/data/text.js";

export default class HomeSection {
   constructor({ $target }) {
      this.section = createElement("section", "home-section");
      this.section.setAttribute("id", "home");
      this.backBox = createElement("div", "back-box");
      this.leftBox = createElement("div", "left-box");
      this.textBox = createElement("div", "text-box");

      const $h2 = createElement("h2", "home-title");
      $h2.innerText = home.title;
      const desc = createElement("p", "home-desc");
      desc.innerText = home.desc;
      const $button = createElement("a", "btn");
      $button.innerText = home.btn_text;
      $button.href = "#contact";

      this.textBox.appendChild($h2);
      this.textBox.appendChild(desc);
      this.textBox.appendChild($button);
      this.leftBox.appendChild(this.textBox);
      this.backBox.appendChild(this.leftBox);
      this.section.appendChild(this.backBox);
      $target.appendChild(this.section);
   }
}
