import { createElement } from "../util/createElement.js";
import { contact } from "../assets/data/text.js";
import SectionTitle from "../components/SectionTitle.js";

export default class ContactSection {
   constructor({ $target, nowUrl }) {
      this.contactValue = {
         name: null,
         phone: null,
         email: null,
         message: null,
      };
      this.section = createElement("section", "contact-section");
      this.section.setAttribute("id", "contact");
      this.backBox = createElement("div", "back-box");
      this.infoBox = createElement("div", "info-box");
      this.messageBox = createElement("div", "message-box");

      new SectionTitle({ $target: this.section, title: contact.title });

      /* contact info area */
      const $h4 = createElement("h4", "info-title");
      $h4.innerText = contact.contact_info.title;
      this.infoBox.appendChild($h4);
      new ContactItem({ $target: this.infoBox, img_src: `${nowUrl}src/assets/images/logo.png`, text: contact.contact_info.name });
      new ContactItem({ $target: this.infoBox, img_src: `${nowUrl}src/assets/images/phone.png`, text: contact.contact_info.phone });
      new ContactItem({ $target: this.infoBox, img_src: `${nowUrl}src/assets/images/email.png`, text: contact.contact_info.email });
      new ContactItem({
         $target: this.infoBox,
         img_src: `${nowUrl}src/assets/images/github.png`,
         text: contact.contact_info.github,
         href: "https://github.com/uhyun-fe",
      });

      /* message area */
      this.contactValue.name = new MessageItem({ $target: this.messageBox, title: "NAME" });
      this.contactValue.phone = new MessageItem({ $target: this.messageBox, title: "PHONE NUMBER" });
      this.contactValue.email = new MessageItem({ $target: this.messageBox, title: "EMAIL", placeholder: "email address" });
      this.contactValue.message = new MessageItem({ $target: this.messageBox, title: "YOUR MESSAGE", placeholder: "message here", type: "textarea" });
      this.$button = createElement("button", "btn");
      this.$button.classList.add("contact-btn");
      this.$button.innerText = contact.btn_text;
      this.messageBox.appendChild(this.$button);

      this.backBox.appendChild(this.infoBox);
      this.backBox.appendChild(this.messageBox);
      this.section.appendChild(this.backBox);
      $target.appendChild(this.section);
   }

   getMessageInfo() {
      const data = {
         name: this.contactValue.name.render(),
         phone: this.contactValue.phone.render(),
         email: this.contactValue.email.render(),
         message: this.contactValue.message.render(),
      };
      let is_posible = true;

      Object.keys(data).forEach((d) => {
         this.contactValue[d].setGuideDisplayed(!data[d]);
         if (!data[d]) is_posible = false;
      });

      return is_posible ? data : null;
   }

   refreshValue() {
      Object.keys(this.contactValue).forEach((v) => {
         this.contactValue[v].refreshInput();
      });
   }

   setLoading(boolean) {
      if (boolean) this.$button.classList.add("sending");
      else this.$button.classList.remove("sending");
      this.$button.innerText = boolean ? "Sending..." : contact.btn_text;
      this.$button.disabled = boolean;
   }
}

// contact info item
class ContactItem {
   constructor({ $target, img_src, text, href }) {
      this.item = createElement("div", "info-item");
      this.$img = createElement("img");
      this.$img.src = img_src;
      this.$span = createElement("a");
      this.$span.innerText = text;
      if (href) {
         this.$span.className = "is_link";
         this.$span.href = href;
      }

      this.item.appendChild(this.$img);
      this.item.appendChild(this.$span);
      $target.appendChild(this.item);
   }
}

// contact message input item
class MessageItem {
   constructor({ $target, title, placeholder, type }) {
      this.data = "";

      this.item = createElement("div", "message-item");
      this.title = createElement("p", "input-title");
      this.title.innerText = title;
      this.$input = createElement(type || "input");
      this.$input.setAttribute("placeholder", `Type your ${placeholder || title.toLowerCase()}`);
      this.guide = createElement("span", "guide");
      this.guide.classList.add("hidden");
      this.guide.innerText = contact.guide_text;

      this.item.appendChild(this.title);
      this.item.appendChild(this.$input);
      this.item.appendChild(this.guide);
      $target.appendChild(this.item);
   }

   setGuideDisplayed(boolean) {
      if (boolean) this.guide.classList.remove("hidden");
      else this.guide.classList.add("hidden");
   }

   refreshInput() {
      this.$input.value = "";
   }

   render() {
      return this.$input.value;
   }
}
