import { createElement } from "../util/createElement.js";

export default class SkillBox {
   constructor({ $target, img_url, skill }) {
      this.section = createElement("div", "skill-box");

      this.bg = createElement("img", "bg");
      this.bg.src = img_url;

      this.textBox = createElement("div", "text-box");
      this.$h3 = createElement("h3", "title");
      this.$h3.innerText = skill.title;
      this.textBox.appendChild(this.$h3);

      skill.desc.forEach((d) => {
         const $p = createElement("p");
         $p.innerText = "- " + d;
         this.textBox.appendChild($p);
      });

      this.section.appendChild(this.bg);
      this.section.appendChild(this.textBox);
      $target.appendChild(this.section);
   }
}
