import SectionTitle from "../components/SectionTitle.js";
import { createElement } from "../util/createElement.js";
import { project } from "../assets/data/text.js";

export default class ProjectSection {
   constructor({ $target }) {
      this.section = createElement("section", "project-section");
      this.section.setAttribute("id", "portfolio");

      const category_ul = createElement("ul", "project-categories");
      project.categories.forEach((c, i) => {
         const category_li = createElement("li");
         const $span = createElement("span", "project-category");
         if (!i) $span.classList.add("active");
         $span.innerText = c.title;
         category_li.appendChild($span);
         category_ul.appendChild(category_li);
      });

      new SectionTitle({ $target: this.section, title: project.title });

      this.section.appendChild(category_ul);
      $target.appendChild(this.section);
   }

   selectCategory({ $target }) {
      const selectedCategory = document.querySelector(".project-category.active");
      selectedCategory.classList.remove("active");
      $target.classList.add("active");
   }
}
