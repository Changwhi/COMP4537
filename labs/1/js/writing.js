import { Note } from "./note.js";
import { currentTime } from "./time.js";

function addTextArea(text = "dd") {
  const textareaDiv = document.createElement("div");
  textareaDiv.id = "writing-set";
  const newTextArea = document.createElement("textarea");
  newTextArea.value = text;
  const removeButton = document.createElement("button");
  removeButton.textContent = "remove";
  removeButton.addEventListener("click", function (element) {
    const selectedTextareaButton = element.target.closest('button') 
    if (selectedTextareaButton) {
      selectedTextareaButton.parentNode.remove();
      save();
    }
    // Remove the parent div when the "remove" button is clicked
  });
  textareaDiv.appendChild(newTextArea);
  textareaDiv.appendChild(removeButton);
  textareaDiv.appendChild(document.createElement("br"));
  document.getElementById("textarea").appendChild(textareaDiv);
  console.log("working?");
}

function save() {
  document.getElementById("time").innerHTML = currentTime();

  if (typeof Storage !== "undefined") {
    let notes = document.getElementById("textarea");
    let noteList = [];

    for (let i = 0; i < notes.children.length; i++) {
      let writingSet = notes.children.item(i);
      let content = writingSet.firstElementChild.value;
      let id = i;
      noteList.push(new Note(content, id));
    }
    localStorage.setItem("notes", JSON.stringify(noteList));
  } else {
    console.log("This browser does not support local storage");
    return;
  }
}
function init() {
  const notes = localStorage.getItem("notes");
  const parseNotes = JSON.parse(notes)
  console.log(notes);
  console.log(parseNotes)
  for (const x in parseNotes) {
  console.log(parseNotes[x].text)
  addTextArea(parseNotes[x].text)
  }

}

document.addEventListener("DOMContentLoaded", function () {
  init()
  setInterval(save, 2000);
  document.getElementById("NewButton").addEventListener("click", () => {addTextArea("")});
});
