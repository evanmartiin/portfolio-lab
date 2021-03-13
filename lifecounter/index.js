var naissance, deces, guerre;
var timeout;

function go() {
  var negative = document.getElementsByClassName("negative")[0];
  var jour = document.getElementsByClassName("jour")[0].value;
  var mois = document.getElementsByClassName("mois")[0].value;
  var annee = document.getElementsByClassName("annee")[0].value;

  if (
    !jour ||
    !mois ||
    (jour > new Date().getDate() &&
      mois >= new Date().getMonth() + 1 &&
      annee >= new Date().getFullYear())
  ) {
    gsap.to(negative, { duration: 1, top: "0px" });
    gsap.to(negative, { duration: 1, delay: 5, top: "-200px" });
  } else {
    var anniversaire = new Date(annee, mois - 1, jour);
    const diffTime = Math.abs(Date.now() - anniversaire);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const secsSince =
      new Date().getHours() * 3600 +
      new Date().getMinutes() * 60 +
      new Date().getSeconds();

    naissance = diffDays * 380000 + secsSince * (380000 / 86400);
    deces = diffDays * 160000 + secsSince * (160000 / 86400);
    if (annee < 1919) guerre = 2;
    else if (annee < 1946) guerre = 1;
    else guerre = 0;
    if (diffDays < 10585) twingo = diffDays * 378 + secsSince * (378 / 86400);
    else twingo = 4016493 + secsSince * (378 / 86400);

    document.getElementsByClassName("naissance")[0].innerHTML = addCommas(
      naissance
    );
    document.getElementsByClassName("deces")[0].innerHTML = addCommas(deces);
    document.getElementsByClassName("guerre")[0].innerHTML = guerre;
    document.getElementsByClassName("twingo")[0].innerHTML = addCommas(
      Math.floor(twingo)
    );

    document.getElementsByClassName("intro")[0].style.display = "block";
    document.getElementsByClassName("scroll-container")[0].style.display = "block";
    document.getElementsByTagName("footer")[0].style.opacity = "1";
    var cards = document.getElementsByClassName("info");
    for (var i = 0; i < cards.length; i++) {
      cards[i].style.display = "flex";
    }

    clearTimeout(timeout);
    timeUpdate();

    const element = document.getElementsByClassName("intro")[0];
    const topPos = element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: topPos,
      behavior: "smooth"
    });

    location.hash = "#intro";
  }
}

function timeUpdate() {
  naissance += 380000 / 864000;
  deces += 160000 / 864000;
  twingo += 378 / 864000;

  document.getElementsByClassName("naissance")[0].innerHTML = addCommas(
    Math.floor(naissance)
  );
  document.getElementsByClassName("deces")[0].innerHTML = addCommas(
    Math.floor(deces)
  );
  document.getElementsByClassName("twingo")[0].innerHTML = addCommas(
    Math.floor(twingo)
  );

  timeout = setTimeout(() => {
    timeUpdate();
  }, 100);
}

function addCommas(number) {
  number += "";
  x = number.split(".");
  x1 = x[0];
  x2 = x.length > 1 ? "." + x[1] : "";
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + " " + "$2");
  }
  return x1 + x2;
}

const threshold = 0.5;
const options = {
  root: null,
  rootMargin: "0px",
  threshold,
};

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > threshold) {
      entry.target.classList.remove("reveal");
      entry.target.classList.add("reveal-visible");
      observer.unobserve(entry.target);
    }
  });
};

document.documentElement.classList.add("reveal-loaded");

window.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(handleIntersect, options);
  const targets = document.querySelectorAll(".reveal");
  targets.forEach(function (target) {
    observer.observe(target);
  });
});
