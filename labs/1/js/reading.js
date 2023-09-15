
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


function addTextArea(text = "dd") {
  const textareaDiv = document.createElement("div");
  textareaDiv.id = "writing-set";
  const newTextArea = document.createElement("textarea");
  newTextArea.value = text;
  newTextArea.setAttribute("readonly", "true"); // Make the textarea read-only
 
  textareaDiv.appendChild(newTextArea);
  textareaDiv.appendChild(document.createElement("br"));
  document.getElementById("textarea").appendChild(textareaDiv);
  console.log("working?");
}

document.addEventListener("DOMContentLoaded", function () {
  init()
});