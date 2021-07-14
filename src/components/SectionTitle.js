import { createElement } from "../util/createElement.js";

export default class SectionTitle {
   constructor({ $target, title, text_order }) {
      this.section = createElement("div", "section-title");
      if (text_order === "left") this.section.classList.add("left");
      this.$h2 = createElement("h2");
      this.$h2.innerText = title;
      this.line = createElement("span", "title-line");

      this.section.appendChild(this.$h2);
      this.section.appendChild(this.line);
      $target.appendChild(this.section);
   }
}
