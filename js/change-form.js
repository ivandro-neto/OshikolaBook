const linkPage = document.querySelector("#page");
const loginPage = document.querySelector("#login");
const validationPage = document.querySelector("#validation");
const changePassPage = document.querySelector("#newpass");

const pages = [loginPage, validationPage, changePassPage];

function defaulting() {
  showPage(pages, "login");
}

function showPage(page, name) {
  HideAll();

  switch (name) {
    case "login":
      page[0].style.display = "flex";
      linkPage.innerHTML = "Ativar Conta";
      linkPage.addEventListener("click", () => showPage(pages, "validation"));
      break;

    case "validation":
      page[1].style.display = "flex";
      linkPage.innerHTML = "Mudar de senha";
      linkPage.addEventListener("click", () => showPage(pages, "changePass"));
      break;

    case "changePass":
      page[2].style.display = "flex";
      linkPage.innerHTML = "Login";
      linkPage.addEventListener("click", () => showPage(pages, "login"));
      break;

    default:
      page[0].style.display = "flex";
      break;
  }
}

function HideAll() {
  pages.forEach((element) => (element.style.display = "none"));
}
