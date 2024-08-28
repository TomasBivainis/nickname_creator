import "./styles.css";

document.querySelector("#add_word").addEventListener("click", () => {
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

  container.appendChild(inputWord);
  container.appendChild(inputSlidingWordLength);
  container.appendChild(divRangeValue);

  document.querySelector("#words").appendChild(container);
});

function updateNickname() {
  let wordsList = document.querySelectorAll(".inputs");
  let nickname = "";

  wordsList.forEach((inputs) => {
    console.log(inputs);
    let word = inputs.querySelector(".word").value;
    let len = inputs.querySelector(".slider").value;

    nickname += word.substring(0, len);
  });

  document.querySelector("#nickname").innerHTML = nickname;
}
