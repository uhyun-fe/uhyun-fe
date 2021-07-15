import { createElement } from "../util/createElement.js";
import { advice } from "../assets/data/text.js";
import SectionTitle from "../components/SectionTitle.js";

export default class AdviceSection {
   constructor({ $target }) {
      this.section = createElement("section", "advice-section");

      new SectionTitle({ $target: this.section, title: advice.title });

      const $button = createElement("a", "btn");
      $button.innerText = advice.btn_text;
      $button.href = "#contact";

      this.section.appendChild($button);
      $target.appendChild(this.section);
   }
}
