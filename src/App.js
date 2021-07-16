import { createElement, createStyleLink } from "./util/createElement.js";
import { Navigation, HomeSection, AboutmeSection, SkillSection, AdviceSection, ContactSection, Footer } from "./views/index.js";
import { contact } from "./assets/data/text.js";

export default class App {
   constructor($target) {
      this.$target = $target;
      this.nowUrl = window.location.href.split("#")[0];

      createStyleLink(this.$target, this.nowUrl + "src/css/nav.css");
      createStyleLink(this.$target, this.nowUrl + "src/css/home.css");
      createStyleLink(this.$target, this.nowUrl + "src/css/aboutme.css");
      createStyleLink(this.$target, this.nowUrl + "src/css/skill.css");
      createStyleLink(this.$target, this.nowUrl + "src/css/advice.css");
      createStyleLink(this.$target, this.nowUrl + "src/css/contact.css");

      emailjs.init(contact.emailjs.user_id); // send email setting

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
      const skillSection = new SkillSection({ $target, nowUrl: this.nowUrl });
      const adviceSection = new AdviceSection({ $target });
      this.contactSection = new ContactSection({ $target, nowUrl: this.nowUrl });
      const footer = new Footer({ $target });

      // onclick event
      $target.addEventListener("click", ({ path }) => {
         const sendBtn = path.find((p) => p.className === "btn contact-btn");
         if (sendBtn) {
            const data = this.contactSection.getMessageInfo();
            if (data) {
               if (!window.confirm(contact.message_confirm_alert)) return;
               this.sendEmail(data);
            }
         }
      });
   }

   sendEmail(data) {
      const section = this.contactSection;
      section.setLoading(true);
      emailjs.send(contact.emailjs.service_id, contact.emailjs.templete_id, data).then(
         function (response) {
            if (response.status === 200) {
               alert(contact.message_success_alert);
               section.refreshValue();
               section.setLoading(false);
            }
         },
         function (error) {
            alert(contact.message_error_alert);
            section.setLoading(false);
            console.log("FAILED...", error);
         }
      );
   }
}
