let classesToAdd = document.querySelector(".classes-to-add");
let classesToRemove = document.querySelector(".classes-to-remove");
let buttonAdd = document.querySelector(".one");
let buttonRemove = document.querySelector(".two");
let div = document.querySelector(".classes-list").querySelector("div");
let clear = document.querySelector(".three")
let span;
let spanText;

let NoClassesToShow = function () {
    if (div.children.length === 0){
    let span = document.createElement("span");
    spanText = document.createTextNode("No Classes To Show");
    span.appendChild(spanText);
    span.style.cssText="background:#ff5722"
    div.appendChild(span);
    }
}

buttonAdd.onclick = function () {
    let text = classesToAdd.value.trim()
    if (text.length > 0)
    {
        if (text.split(" ").length === 1){
        span = document.createElement("span");
        spanText = document.createTextNode(`${text.toLowerCase()}`);
        span.appendChild(spanText);
        div.appendChild(span);
            } else {
        let i = 0;
        let size = text.split(" ").length;
        while (i < size) {
            let arr = text.split(" ").sort();
            span = document.createElement("span");
            spanText = document.createTextNode(`${arr[i].toLowerCase()}`);
            span.appendChild(spanText);
            div.appendChild(span);
            i++;
            }
        }
        classesToAdd.value = '';
    } else {
        alert("The word must consist of one or more letters !");
    }

}
buttonRemove.onclick = function () {
    let text = classesToRemove.value;
    let size = div.children.length;
    let i = 0
    if (text.split(" ").length === 1) {
        do {
            if (text === div.children[i].innerHTML) {
                div.children[i].remove();
                size--;
            } else {
                alert("This name is not in the class list !");
            }
            i++;
        } while (i < size)
    } else {
        let arr = text.split(" ").sort();
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < size; j++) {
                if (arr[i] === div.children[j].innerHTML) {
                    div.children[j].remove();
                    size--;
                } else {
                    alert("This name is not in the class list !");
                }
            }
        }
        classesToRemove.value = '';
        NoClassesToShow();
    }
}



clear.onclick = function () {
    if (div.children.length <= 0) {
        alert("There are no items to delete !")
    } else {
        div.innerHTML = "";
    }
}
