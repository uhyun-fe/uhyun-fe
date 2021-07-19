import { createElement } from "../util/createElement.js";
import { aboutme } from "../assets/data/text.js";
import SectionTitle from "../components/SectionTitle.js";

export default class AboutmeSection {
   constructor({ $target }) {
      this.section = createElement("section", "aboutme-section");
      this.section.setAttribute("id", "aboutme");
      this.titleBox = createElement("div", "title-box");
      this.descBox = createElement("div", "desc-box");
      this.buttonBox = createElement("div", "button-box");

      new SectionTitle({ $target: this.titleBox, title: aboutme.title, text_order: "left" });

      const desc = createElement("p");
      desc.innerText = aboutme.desc;
      const btn1 = createElement("button", "btn");
      btn1.innerText = aboutme.btn1_text;
      const btn2 = createElement("button", "btn");
      btn2.innerText = aboutme.btn2_text;

      this.buttonBox.appendChild(btn1);
      this.buttonBox.appendChild(btn2);
      this.descBox.appendChild(desc);
      this.descBox.appendChild(this.buttonBox);
      this.section.appendChild(this.titleBox);
      this.section.appendChild(this.descBox);
      $target.appendChild(this.section);
   }
}
