function updateNickname() {
  let wordsList = document.querySelectorAll(".inputs");
  let nickname = "";
  const capitalizationType = document.querySelector("#capitalization").value;
  let words = [];

  wordsList.forEach((inputs) => {
    let word = inputs.querySelector(".word").value;
    let len = inputs.querySelector(".slider").value;

    words.push(word.substring(0, len));
  });

  switch (capitalizationType) {
    case "only_first":
      words.forEach((word) => {
        nickname += word.toLowerCase();
      });

      nickname = nickname.charAt(0).toUpperCase() + nickname.slice(1);

      break;
    case "all_firsts":
      words.forEach((word) => {
        let temp = "";

        temp += word.charAt(0).toUpperCase();

        for (let i = 1; i < word.length; i++) {
          temp += word.charAt(i).toLowerCase();
        }

        nickname += temp;
      });
      break;
    case "no_upper":
      words.forEach((word) => {
        nickname += word.toLowerCase();
      });
      break;
    default:
      words.forEach((word) => {
        nickname += word;
      });
      break;
  }

  if (nickname === "") nickname = "Waiting for words...";

  document.querySelector("#nickname").innerHTML = nickname;
}

function createWord() {
  let container = document.createElement("div");
  container.classList.add("inputs");

  let inputWord = document.createElement("input");
  inputWord.type = "text";
  inputWord.placeholder = "Enter a word...";
  inputWord.classList.add("word");
  inputWord.addEventListener("input", (e) => {
    const newMax = e.target.value.length;
    let slider = e.target.nextSibling;

    slider.max = newMax;
    slider.nextSibling.innerHTML = slider.value;

    updateNickname();
  });

  let inputSlidingWordLength = document.createElement("input");
  inputSlidingWordLength.type = "range";
  inputSlidingWordLength.classList.add("slider");
  inputSlidingWordLength.min = 0;
  inputSlidingWordLength.max = 0;
  inputSlidingWordLength.addEventListener("input", (e) => {
    e.target.nextSibling.innerHTML = e.target.value;
    updateNickname();
  });

  let divRangeValue = document.createElement("div");
  divRangeValue.innerHTML = "0";

  let buttonDelete = document.createElement("button");
  buttonDelete.classList.add("delete");
  buttonDelete.innerHTML = "Delete";
  buttonDelete.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });

  container.appendChild(inputWord);
  container.appendChild(inputSlidingWordLength);
  container.appendChild(divRangeValue);
  container.appendChild(buttonDelete);

  document.querySelector("#words").appendChild(container);
}

module.exports = {
  updateNickname,
  createWord,
};
