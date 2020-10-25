import { Form } from "./form";

export class BookList {
  constructor($selector) {
    this.$el = document.querySelector($selector);
    this.books = JSON.parse(localStorage.getItem("books")) ?? [];
  }
  init() {
    this.addBook();
    this.updateUI();
  }
  addBook() {
    const form = new Form("#form");
    if (!form.getInfoFromForm()) return;
    this.books.push(form.getInfoFromForm());
  }
  updateUI() {
    this.showAllBook();
    localStorage.setItem("books", JSON.stringify(this.books));
  }

  showAllBook() {
    this.$el.innerHTML = "";
    this.books.forEach((book) => {
      const sample = `
      <li>
        <div class="item-book">
          <div class="item-book__main-info">
            <div class="name">${book.name}</div>
            <div class="author">${book.author}</div>
          </div>
        <div class="item-book__other-info">
          <div class="rating">Rating: ${book.rating}</div>
          <div class="edit">
            <svg
              width="23"
              height="21"
              viewBox="0 0 23 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7031 3.78125C15.5469 3.625 15.3125 3.625 15.1562 3.78125L6.64062 12.2969L6.25 15.9297C6.17188 16.3984 6.60156 16.8281 7.07031 16.75L10.7031 16.3594L19.2188 7.84375C19.375 7.6875 19.375 7.45312 19.2188 7.29688L15.7031 3.78125ZM22.0312 2.88281L20.1172 0.96875C19.5312 0.382812 18.5547 0.382812 17.9688 0.96875L16.6016 2.33594C16.4453 2.49219 16.4453 2.72656 16.6016 2.88281L20.1172 6.39844C20.2734 6.55469 20.5078 6.55469 20.6641 6.39844L22.0312 5.03125C22.6172 4.44531 22.6172 3.46875 22.0312 2.88281ZM15 14.0547V18H2.5V5.5H11.4453C11.6016 5.5 11.7188 5.46094 11.7969 5.38281L13.3594 3.82031C13.6328 3.50781 13.4375 3 13.0078 3H1.875C0.820312 3 0 3.85938 0 4.875V18.625C0 19.6797 0.820312 20.5 1.875 20.5H15.625C16.6406 20.5 17.5 19.6797 17.5 18.625V12.4922C17.5 12.0625 16.9922 11.8672 16.6797 12.1406L15.1172 13.7031C15.0391 13.7812 15 13.8984 15 14.0547Z"
                fill="#0D152A"
              />
            </svg>
          </div>
          <div class="delete">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.4531 7.5L14.3594 3.59375C14.8672 3.125 14.8672 2.34375 14.3594 1.875L13.5 1.01562C13.0312 0.507812 12.25 0.507812 11.7812 1.01562L7.875 4.92188L3.92969 1.01562C3.46094 0.507812 2.67969 0.507812 2.21094 1.01562L1.35156 1.875C0.84375 2.34375 0.84375 3.125 1.35156 3.59375L5.25781 7.5L1.35156 11.4453C0.84375 11.9141 0.84375 12.6953 1.35156 13.1641L2.21094 14.0234C2.67969 14.5312 3.46094 14.5312 3.92969 14.0234L7.875 10.1172L11.7812 14.0234C12.25 14.5312 13.0312 14.5312 13.5 14.0234L14.3594 13.1641C14.8672 12.6953 14.8672 11.9141 14.3594 11.4453L10.4531 7.5Z"
                fill="#0D152A"
              />
            </svg>
          </div>
        </div>
      </div>
    </li>
      `;
      this.$el.insertAdjacentHTML("beforeend", sample);
    });
  }
}
