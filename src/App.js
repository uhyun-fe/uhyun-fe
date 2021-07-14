import { createElement, createStyleLink } from "./util/createElement.js";
import { Navigation, HomeSection, AboutmeSection, SkillSection } from "./views/index.js";

export default class App {
   constructor($target) {
      this.$target = $target;

      this.nowUrl = window.location.href.split("#")[0];

      createStyleLink(this.$target, this.nowUrl + "src/css/nav.css");
      createStyleLink(this.$target, this.nowUrl + "src/css/home.css");
      createStyleLink(this.$target, this.nowUrl + "src/css/aboutme.css");
      createStyleLink(this.$target, this.nowUrl + "src/css/skill.css");

      // 다크모드 예제 시작
      const darkCheck = createElement("button", "dark-btn");
      window.onload = () => {
         document.documentElement.setAttribute("dark-theme", "light");
         document.documentElement.setAttribute("color-theme", "yellow");
      };
      darkCheck.addEventListener("click", (e) => {
         if (e.screenX > 50) {
            document.documentElement.setAttribute("dark-theme", "dark");
            document.documentElement.setAttribute("color-theme", "orange");
         } else {
            document.documentElement.setAttribute("dark-theme", "light");
            document.documentElement.setAttribute("color-theme", "yellow");
         }
      });
      // $target.appendChild(darkCheck);
      // 다크모드 예제 끝

      const navigation = new Navigation({ $target, nowUrl: this.nowUrl });
      const homeSection = new HomeSection({ $target });
      const aboutmeSection = new AboutmeSection({ $target });
      const skills = new SkillSection({ $target, nowUrl: this.nowUrl });
   }
}
