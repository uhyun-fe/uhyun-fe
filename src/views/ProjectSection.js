import SectionTitle from "../components/SectionTitle.js";
import { createElement } from "../util/createElement.js";
import { project } from "../assets/data/text.js";

export default class ProjectSection {
   constructor({ $target }) {
      this.section = createElement("section", "project-section");
      this.section.setAttribute("id", "portfolio");

      new SectionTitle({ $target: this.section, title: project.title });

      $target.appendChild(this.section);
   }
}
