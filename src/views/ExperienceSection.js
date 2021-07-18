import SectionTitle from "../components/SectionTitle.js";
import { createElement } from "../util/createElement.js";
import { experience } from "../assets/data/text.js";

export default class ExperienceSection {
   constructor({ $target }) {
      this.section = createElement("section", "experience-section");

      new SectionTitle({ $target: this.section, title: experience.title });

      $target.appendChild(this.section);
   }
}
