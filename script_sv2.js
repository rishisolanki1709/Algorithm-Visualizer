const array_size_slider = document.getElementById("array_size")
const size_set = document.getElementById("size_set")
const sorting_box = document.getElementById("searching_box")
const given_number = document.getElementById("input-number")
const start_searching = document.getElementById("start_searching")
const msg = document.getElementById("msg")
let do_start = true;

array_size_slider.addEventListener("input", function () {
    size_set.textContent = array_size_slider.value
})
const speed = document.getElementById("speed");
const speed_set = document.getElementById("speed_set")
let sorting_speed = 150;
speed.addEventListener("input", function () {
    speed_set.textContent = speed.value
    if (speed.value == 1)
        sorting_speed = 1000;
    else if (speed.value == 2)
        sorting_speed = 500;
    else if (speed.value == 3)
        sorting_speed = 150;
    else if (speed.value == 4)
        sorting_speed = 50;
    else if (speed.value == 2)
        sorting_speed = 10;
    else
        sorting_speed = 4;
})

// Initializing the first step....
let org_array = [];
for (let i = 0; i < 38; i++) {
    const new_strip = document.createElement("div")
    new_strip.style.width = "280px"
    const num = randomNumber()
    new_strip.innerHTML = num
    org_array.push(new_strip)
    new_strip.style.backgroundColor = "#00ffe5"
    new_strip.style.border = "1px solid black"
    new_strip.style.borderRadius = "10px"
    new_strip.style.fontSize = "10px"
    new_strip.style.color = "black"
    new_strip.style.textAlign = "center"
    new_strip.style.alignContent = "center"
    new_strip.style.height = num + "px"
    sorting_box.appendChild(new_strip)
}


// this below method defines how the array will be change his size by adding or removing the strips of div
array_size_slider.addEventListener("input", function () {
    if (do_start) {
        sorting_box.textContent = ""
        org_array.length = ""
        for (let i = 0; i < array_size_slider.value; i++) {
            const new_strip = document.createElement("div")
            new_strip.style.width = "280px"
            const num = randomNumber()
            new_strip.innerHTML = num
            new_strip.style.fontSize = "0px"
            org_array.push(new_strip)
            if (array_size_slider.value < 75) {
                new_strip.style.fontSize = "10px"
                new_strip.style.color = "black"
                new_strip.style.textAlign = "center"
                new_strip.style.alignContent = "center"
            }
            new_strip.style.backgroundColor = "#00ffe5"
            new_strip.style.border = "1px solid black"
            new_strip.style.borderRadius = "10px"
            new_strip.style.height = num + "px"
            sorting_box.appendChild(new_strip)
        }
    }
})

// this below method create's new array after user click on new array
// create collection of new strips

new_array.addEventListener("click", function () {
    if (do_start) {
        sorting_box.textContent = ""
        org_array.length = ""
        for (let i = 0; i < array_size_slider.value; i++) {
            const new_strip = document.createElement("div")
            new_strip.style.width = "280px"
            const num = randomNumber()
            new_strip.innerHTML = num
            new_strip.style.fontSize = "0px"
            if (array_size_slider.value < 75) {
                new_strip.style.fontSize = "10px"
                new_strip.style.color = "black"
                new_strip.style.textAlign = "center"
                new_strip.style.alignContent = "center"
            }
            org_array.push(new_strip)
            new_strip.style.backgroundColor = "#00ffe5"
            new_strip.style.border = "1px solid black"
            new_strip.style.borderRadius = "10px"
            new_strip.style.height = num + "px"
            sorting_box.appendChild(new_strip)
        }
    }
})

// this below block code generates random number 
function randomNumber() {
    const number = Math.floor(Math.random() * (500 - 20 + 1)) + 20
    return number
}
let selected_btn = "linear_search";
let number_found = true;
start_searching.addEventListener("click", function () {
    for (const ele of org_array) {
        ele.style.backgroundColor = "#00ffe5"
    }
    let a = parseInt(given_number.value)
    if (a < 20 || a > 500) {
        msg.innerText = "Please enter a number between 20 and 500."
        msg.style.backgroundColor = "red"
    }
    else {
        msg.innerText = ""
        if (do_start) {
            do_start = false
            number_found = false;
            switch (selected_btn) {
                case "linear_search":
                    linear_search()
                    break;
                case "binary_search":
                    sort()
                    binary_search(org_array,0,org_array.length-1)
                    break;
                default:
                    console.log("SOME ERROR OCCURRING...");
                    break;
            }
        }
    }
})

// making sorting button divs work as radio buttons
const searching_buttons = document.querySelectorAll(".btn")
searching_buttons[0].style.backgroundColor = "black"
searching_buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        if (do_start) {
            searching_buttons.forEach(function (buttons) {
                buttons.style.backgroundColor = "#002e23"
            })
            this.style.backgroundColor = "black"
            selected_btn = button.id
        }
    })
})

// linear search algorithm
async function linear_search() {
    for (let i = 0; i < org_array.length; i++) {
        let a = parseInt(org_array[i].innerText)
        let b = parseInt(given_number.value)
        org_array[i].style.backgroundColor = "yellow"
        org_array[i].style.border = "1px solid white"
        await delay(sorting_speed);
        if (a == b) {
            await delay(sorting_speed);
            org_array[i].style.backgroundColor = "red"
            org_array[i].style.border = "1px solid white"
            msg.innerText = "Number Found ^ - ^"
            number_found = true;
            break;
        }
    }
    if (!number_found) {
        msg.innerText = given_number.value + " is Not present in Array!!"
    }
    do_start = true;
}
async function binary_search(array,start, end) {
    if (start > end) 
        {
            if (!number_found) {
                msg.innerText = given_number.value + " is Not present in Array!!"
                msg.style.backgroundColor = "red"
                do_start = true
            }
            return; // Base case: Value not found
        }
    let a = parseInt(org_array[start].innerText);
    let mid = Math.floor((start + end) / 2);
    let b = parseInt(org_array[mid].innerText);
    let c = parseInt(org_array[end].innerText);
    let value = parseInt(given_number.value);
    await delay(sorting_speed);
    org_array[start].style.backgroundColor = "yellow";
    if (a === value) {
        org_array[start].style.backgroundColor = "red"; // Highlight found element
        msg.innerText = "Number Found ^ - ^"
        number_found = true
        do_start = true
        return
    } 
    await delay(sorting_speed);
    org_array[end].style.backgroundColor = "yellow";
    if (c === value) {
        org_array[end].style.backgroundColor = "red";
        msg.innerText = "Number Found ^ - ^"
        number_found = true
        do_start = true
        return
    } 
    await delay(sorting_speed);
    org_array[mid].style.backgroundColor = "yellow";
    if (b === value) {
        org_array[mid].style.backgroundColor = "red";
        msg.innerText = "Number Found ^ - ^"
        number_found = true
        do_start = true
        return
    } 
    // await delay(sorting_speed);
    else {
        if (value < b) { // Compare with mid VALUE, not index
            binary_search(array,start+1, mid - 1);
        } else {
            binary_search(array,mid + 1, end-1);
        }
    }
}
// Sorting()
async function sort() {
    let i, j;
    for (i = 1; i < org_array.length; i++) {
        j = i;
        const key = parseInt(org_array[i].style.height);
        let a = parseInt(org_array[j - 1].style.height);
        while (j > 0 && a > key) {
            org_array[j].style.height = org_array[j - 1].style.height;
            org_array[j].innerText = a
            j--;
            if (j > 0) a = parseInt(org_array[j - 1].style.height);
        }
        org_array[j].style.height = key + "px";
        org_array[j].innerText = key
    }
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

