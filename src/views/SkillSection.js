import { createElement } from "../util/createElement.js";
import { skill } from "../assets/data/text.js";
import SectionTitle from "../components/SectionTitle.js";
import SkillBox from "../components/SkillBox.js";

export default class SkillSection {
   constructor({ $target }) {
      this.section = createElement("section", "skill-section");
      this.section.setAttribute("id", "skills");
      this.itemBox = createElement("div", "skill-total-box");

      new SectionTitle({ $target: this.section, title: skill.title });

      skill.skill_list.forEach((s, i) => {
         new SkillBox({
            $target: this.itemBox,
            img_url: `src/assets/images/image${i + 1}.jpg`,
            skill: s,
         });
      });

      this.section.appendChild(this.itemBox);
      $target.appendChild(this.section);
   }
}
