const links = [{
    label: "Week1 notes",
    url: "W01/"
}, {
    label: "Week2 notes",
    url: "W02/"
}, {
    label: "Week3 notes",
    url: "W02/"
}];



function createOL(array) {
    // Create list element
    var list = document.getElementById("list");

    for (var i = 0; i < array.length; i++) {
        // Create list item
        var li = document.createElement("li");
        // Set the Contents
        li.appendChild(document.createTextNode(array[i]));
        // Add to the list
        list.appendChild(li);
    }

    return list;
}

document.getElementById('list').appendChild(createOL(links));

createOL(links);