export default class LocalStorage {
  constructor() {
    this._storageList = [];
  }

  getList() {
    return this._storageList;
  }

  clearList() {
    this._storageList = [];
  }

  addItem(itemObj) {
    this._storageList.push(itemObj);
  }

  removeItem(id) {
    const list = this._storageList;
    for (let i = 0; i < list.length; i++) {
      if (list[i].id == id) {
        console.log(list)
        list.splice(i, 1);
        break;
      }
    }
  }
}





// code from the local storage activity durring week 4

// function loadStory() {
//   let storyName = document.getElementById("name_input").value;
//   let storyHTML = localStorage.getItem(storyName);
//   document.getElementById("story_editor").value = storyHTML;
// }
// function saveStory() {
//   let storyName = document.getElementById("name_input").value;
//   let storyHTML = document.getElementById("story_editor").value;
//   localStorage.setItem(storyName, storyHTML);
// }
// function displayStory() {
//   console.log(story_editor)
//   let storyHTML = document.getElementById("story_editor").value;
//   document.getElementById("story_display").innerHTML = storyHTML;
// }