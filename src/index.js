import "./styles.css";
import { updateNickname, createWord } from "./module";

document.querySelector("#add_word").addEventListener("click", createWord);

document
  .querySelector("#capitalization")
  .addEventListener("change", updateNickname);
