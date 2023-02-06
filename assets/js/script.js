const menuItens = document.querySelectorAll(".menu-item");
const messageNotifications = document.querySelector("#messages-notification");
const messages = document.querySelector(".messages");
const message = document.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontSize = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");
const colorPalette = document.querySelectorAll(".choose-color span");
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");

function addClassActive(item) {
  menuItens.forEach((item) => {
    item.classList.remove("active");
  });
  this.classList.add("active");

  if (this.id != "notifications") {
    document.querySelector(".notifications-popup").style.display = "none";
  } else {
    document.querySelector(".notifications-popup").style.display = "block";
    document.querySelector("#notifications .notification-count").style.display =
      "none";
  }
}

menuItens.forEach((item) => {
  item.addEventListener("click", addClassActive);
});

messageNotifications.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messageNotifications.querySelector(".notification-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

const searchMessage = () => {
  const valueSearch = messageSearch.value.toLowerCase();
  message.forEach((user) => {
    let name = user.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(valueSearch) != -1) {
      user.style.display = "flex";
    } else {
      user.style.display = "none";
    }
  });
};

messageSearch.addEventListener("keyup", searchMessage);

/*    eventos do modal     */

const openThemeModal = () => {
  themeModal.style.display = "grid";
};

const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};

theme.addEventListener("click", openThemeModal);
themeModal.addEventListener("click", closeThemeModal);

const removeSizeSelector = () => {
  fontSize.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSize.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle("active");

    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("----sticky-top-left", "-2rem");
      root.style.setProperty("----sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("----sticky-top-left", "-5rem");
      root.style.setProperty("----sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("----sticky-top-left", "-10rem");
      root.style.setProperty("----sticky-top-right", "-33rem");
    }

    document.querySelector("html").style.fontSize = fontSize;
  });
});

const removeActiveColor = () => {
  colorPalette.forEach((colorPick) => {
    colorPick.classList.remove("active");
  });
};

colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    let primaryHue;
    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }

    removeActiveColor();
    color.classList.add("active");
    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const chanheBG = () => {
  root.style.setProperty('--light-color-lightness',lightColorLightness)
  root.style.setProperty('--white-color-lightness',whiteColorLightness)
  root.style.setProperty('--dark-color-lightness',darkColorLightness)
}

bg1.addEventListener("click", () => {
  lightColorLightness ='95%'
  whiteColorLightness ='100%'
  darkColorLightness ='17%'

  bg3.classList.remove('active')
  bg2.classList.remove('active')
  chanheBG()
});


bg2.addEventListener("click", () => {
  lightColorLightness ='15%'
  whiteColorLightness ='20%'
  darkColorLightness ='95%'
  bg2.classList.add('active')

  bg1.classList.remove('active')
  bg3.classList.remove('active')
  chanheBG()
});


bg3.addEventListener("click", () => {
  lightColorLightness ='0%'
  whiteColorLightness ='10%'
  darkColorLightness ='95%'
  bg3.classList.add('active')

  bg1.classList.remove('active')
  bg2.classList.remove('active')
  chanheBG()
});
