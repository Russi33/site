const giftList = [
  "https://br.shp.ee/EUAar5y", "https://br.shp.ee/u3bpmvU", "https://br.shp.ee/iqTKN8y",
  "https://br.shp.ee/tod7Tvp", "https://br.shp.ee/CzxmMQx", "https://br.shp.ee/SuvDPai",
  "https://br.shp.ee/nVdZTKU", "https://br.shp.ee/M28TqXp", "https://br.shp.ee/CafbrYW",
  "https://br.shp.ee/e7ByrSS", "https://br.shp.ee/Ud8M2So", "https://br.shp.ee/YNjN7W6",
  "https://br.shp.ee/3sEGQTf", "https://br.shp.ee/AUQA79r", "https://br.shp.ee/AeRfs8p",
  "https://br.shp.ee/VhPuPXw", "https://br.shp.ee/Xac3Z75", "https://br.shp.ee/7DxPTfk",
  "https://br.shp.ee/nhUKnVg", "https://br.shp.ee/n7aNmJq", "https://br.shp.ee/rZcyeqb",
  "https://br.shp.ee/d7EZEQ2", "https://br.shp.ee/kTKsvtQ", "https://br.shp.ee/MQ74ohn",
  "https://br.shp.ee/uS4T8Yt", "https://br.shp.ee/65nWRGG", "https://br.shp.ee/oGsRPRm",
  "https://br.shp.ee/UXoh15W", "https://br.shp.ee/fCrDGzh", "https://br.shp.ee/rZ9hvfP",
  "https://br.shp.ee/hV5x2se", "https://br.shp.ee/A5BQ3YH", "https://br.shp.ee/CmQebLa",
  "https://br.shp.ee/XVxB6Eo", "https://br.shp.ee/srbQSbU", "https://br.shp.ee/P1Sw2mn",
  "https://br.shp.ee/nok8ZZW", "https://br.shp.ee/uoAYr5f", "https://br.shp.ee/RKaH54L",
  "https://br.shp.ee/mvBbk6k", "https://br.shp.ee/2u1juWq", "https://br.shp.ee/ficFBn9",
  "https://br.shp.ee/qnSvVoA", "https://br.shp.ee/Uo9sF9s"
];

const listContainer = document.getElementById("gift-list");
const userNameInput = document.getElementById("userName");
const resetBtn = document.getElementById("resetBtn");

let chosenGifts = JSON.parse(localStorage.getItem("chosenGifts")) || {};

function renderGiftList() {
  listContainer.innerHTML = ""; // limpa a lista
  giftList.forEach((url, index) => {
    const id = `gift${index + 1}`;
    const li = document.createElement("li");

    if (chosenGifts[id]) {
      const span = document.createElement("span");
      span.classList.add("chosen");
      span.textContent = `Presente ${index + 1} - escolhido por ${chosenGifts[id]}`;
      li.appendChild(span);
    } else {
      const a = document.createElement("a");
      a.href = url;
      a.innerText = `Presente ${index + 1}`;
      a.dataset.id = id;
      a.target = "_blank";

      a.addEventListener("click", (e) => {
        const name = userNameInput.value.trim();
        if (!name) {
          e.preventDefault();
          alert("Por favor, digite seu nome antes de escolher o presente.");
          return;
        }

        chosenGifts[id] = name;
        localStorage.setItem("chosenGifts", JSON.stringify(chosenGifts));
        renderGiftList();
      });

      li.appendChild(a);
    }

    listContainer.appendChild(li);
  });
}

resetBtn.addEventListener("click", () => {
  if (confirm("Tem certeza que deseja resetar todas as escolhas?")) {
    localStorage.removeItem("chosenGifts");
    chosenGifts = {};
    renderGiftList();
  }
});

renderGiftList();
