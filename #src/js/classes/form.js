class Form {
  constructor($selector) {
    this.$el = document.querySelector($selector);
  }

  //Validation rules
  isAllInputsFull() {
    const $inputs = this.$el.querySelectorAll("input");
    const arrayOfInputFullness = [...$inputs].map(
      (input) => input.value.length > 0
    );

    $inputs.forEach((input, index) => {
      if (arrayOfInputFullness[index] === false) {
        this.showError(input, "full");
      } else {
        this.removeError(input);
      }
    });

    return arrayOfInputFullness.every((bool) => bool == true);
  }

  checkAuthor() {
    const $authorInput = this.$el.querySelector("#author-input");
    const isNumberInInput = [...$authorInput.value].some(
      (letter) => !isNaN(letter)
    );
    if (isNumberInInput) {
      this.showError($authorInput, "author");
    } else {
      this.removeError($authorInput);
    }
  }

  checkISBN() {
    const $ISBNInput = this.$el.querySelector("#isbn-input");
    const ISBNLength = [10, 13];
    const ISBNValue = $ISBNInput.value;

    if ([...ISBNValue].some((letter) => isNaN(letter))) {
      this.showError($ISBNInput, "letter");
      return;
    } else {
      this.removeError($ISBNInput);
    }

    ISBNLength.forEach((num) => {
      if (num != ISBNValue.length) {
        this.showError($ISBNInput, "ISBN Length");
      } else {
        this.removeError($ISBNInput);
      }
    });
  }

  checkRating() {
    const $ratingInput = this.$el.querySelector("#rating-input");
    const ratingLength = [1, 2, 3, 4, 5];
    const ratingValue = $ratingInput.value;

    if ([...ratingValue].some((letter) => isNaN(letter))) {
      this.showError($ratingInput, "letter");
      return;
    } else {
      this.removeError($ratingInput);
    }

    const isRatingCorrect = ratingLength.some(
      (num) => num === Number(ratingValue)
    );
    if (!isRatingCorrect) {
      this.showError($ratingInput, "rating Length");
    } else {
      this.removeError($ratingInput);
    }
  }

  checkCategory() {
    const $categorySelect = this.$el.querySelector("#category-select");
    const selectOptions = [...$categorySelect.options].slice(1);
    // selected отвечает если вібран
    const isOptionSelected = [...selectOptions].some(
      (option) => option.selected
    );
    if (!isOptionSelected) {
      this.showError($categorySelect, "option");
    } else {
      this.removeError($categorySelect);
    }
  }

  validate() {
    if (this.isAllInputsFull()) {
      this.checkAuthor();
      this.checkISBN();
      this.checkRating();
    }
    this.checkCategory();
  }
  // Error Functions
  showError(input, typeOfError) {
    const $inputErrorField = input.nextElementSibling;
    switch (typeOfError) {
      case "full":
        $inputErrorField.classList.add("show");
        $inputErrorField.innerHTML = "<p>Please full the field</p>";
        return;
      case "author":
        $inputErrorField.classList.add("show");
        $inputErrorField.innerHTML = "<p>Please, enter only letters</p>";
        return;
      case "letter":
        $inputErrorField.classList.add("show");
        $inputErrorField.innerHTML = "<p>Please, enter only numbers</p>";
        return;
      case "ISBN Length":
        $inputErrorField.classList.add("show");
        $inputErrorField.innerHTML =
          "<p>ISBN can contains only 10 or 13 numbers</p>";
        return;
      case "rating Length":
        $inputErrorField.classList.add("show");
        $inputErrorField.innerHTML = "<p>Rating can be only from 1 to 5</p>";
        return;
      case "option":
        $inputErrorField.classList.add("show");
        $inputErrorField.innerHTML = "<p>Please select the category</p>";
        return;
    }
  }

  removeError(input) {
    const $inputErrorField = input.nextElementSibling;
    if (!$inputErrorField.classList.contains("show")) return;
    $inputErrorField.classList.remove("show");
  }

  // clear function
  clearElements() {
    const $allInput = this.$el.querySelectorAll("input");
    const $select = this.$el.querySelector("select");
    const $errorFields = this.$el.querySelectorAll(".error-field");

    const isErrorFieldsShow = [...$errorFields].some((errorField) =>
      errorField.classList.contains("show")
    );

    if (!isErrorFieldsShow) {
      // clear inputs
      $allInput.forEach((input) => {
        input.value = "";
      });
      // clear select
      $select.options[0].selected = true;
    } else {
      return;
    }
  }
}
