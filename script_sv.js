const array_size_slider = document.getElementById("array_size")
const size_set = document.getElementById("size_set")
const sorting_box = document.getElementById("sortingbox")
const sorting_code = document.getElementById("sorting-code")
const space_complexity = document.getElementById("space-complexity")
const time_complexity = document.getElementById("time-complexity")

const bs = document.getElementById("BubbleSort")
const is = document.getElementById("InsertionSort")
const ss = document.getElementById("SelectionSort")
const ms = document.getElementById("MergeSort")
const qs = document.getElementById("QuickSort")

const bs1 = document.getElementById("BubbleSort1")
const is1 = document.getElementById("InsertionSort1")
const ss1 = document.getElementById("SelectionSort1")
const ms1 = document.getElementById("MergeSort1")
const qs1 = document.getElementById("QuickSort1")

const bs2 = document.getElementById("BubbleSort2")
const is2 = document.getElementById("InsertionSort2")
const ss2 = document.getElementById("SelectionSort2")
const ms2 = document.getElementById("MergeSort2")
const qs2 = document.getElementById("QuickSort2")



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
for (let i = 0; i < 50; i++) {
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


////////////////////////////////////////////////////////////////////////////////////
// making sorting button divs work as radio buttons
let selected_btn = "insertion_sort";
setInformation("insertion_sort")
const sorting_buttons = document.querySelectorAll(".btn")
sorting_buttons[0].style.backgroundColor = "black"
sorting_buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        if (do_start) {
            sorting_buttons.forEach(function (buttons) {
                buttons.style.backgroundColor = "#002e23"
            })
            this.style.backgroundColor = "black"
            selected_btn = button.id
            setInformation(selected_btn)
        }
    })
})


// sorting program
let do_start = true; // with this, we do not perform any operation multiple clicking of start button
const start_sorting = document.getElementById("start_button")
start_sorting.addEventListener("click", function () {
    if (do_start) {
        do_start = false
        switch (selected_btn) {
            case "insertion_sort":
                insertion_sort()
                break;
            case "bubble_sort":
                bubble_sort()
                break;
            case "selection_sort":
                selection_sort()
                break;
            case "merge_sort":
                merge_sort()
                break;
            case "quick_sort":
                quick_sort()
                break;

            default:
                console.log("SOME ERROR OCCURRING...");
                break;
        }
    }
})


function setInformation(method) {
    is.style.display = "none"
    ss.style.display = "none"
    bs.style.display = "none"
    ms.style.display = "none"
    qs.style.display = "none"

    is1.style.display = "none"
    ss1.style.display = "none"
    bs1.style.display = "none"
    ms1.style.display = "none"
    qs1.style.display = "none"

    is2.style.display = "none"
    ss2.style.display = "none"
    bs2.style.display = "none"
    ms2.style.display = "none"
    qs2.style.display = "none"
    switch (method) {
        case "insertion_sort":
            is.style.display = "block"
            is1.style.display = "block"
            is2.style.display = "block"
            break;
        case "bubble_sort":
            bs.style.display = "block"
            bs1.style.display = "block"
            bs2.style.display = "block"
            break;
        case "selection_sort":
            ss.style.display = "block"
            ss1.style.display = "block"
            ss2.style.display = "block"
            break;
        case "merge_sort":
            ms.style.display = "block"
            ms1.style.display = "block"
            ms2.style.display = "block"
            break;
        case "quick_sort":
            qs.style.display = "block"
            qs1.style.display = "block"
            qs2.style.display = "block"
            break;

    }
}

// Bubble Sorting()
async function bubble_sort() {
    let i, j
    for (i = 0; i < org_array.length; i++) {
        for (j = 0; j < org_array.length - i - 1; j++) {
            let a = parseInt(org_array[j].innerText)
            let b = parseInt(org_array[j + 1].innerText)
            org_array[j].style.backgroundColor = "yellow";
            org_array[j].style.border = "4px solid white"
            org_array[j + 1].style.backgroundColor = "yellow";
            org_array[j + 1].style.border = "4px solid white"
            await delay(sorting_speed);
            if (a > b) {
                org_array[j].style.backgroundColor = "red";
                await delay(sorting_speed);
                org_array[j].style.backgroundColor = "yellow";
                swapElements(org_array[j], org_array[j + 1])
                org_array[j + 1].style.backgroundColor = "red";
                await delay(sorting_speed);
            }
            else {
                org_array[j + 1].style.backgroundColor = "red";
                await delay(sorting_speed);
            }
            org_array[j].style.backgroundColor = "#00ffe5";
            org_array[j + 1].style.backgroundColor = "green";
            org_array[j].style.border = "1px solid black"
            org_array[j + 1].style.border = "1px solid black"
        }
    }
    // last sorted array effect
    effect()
}

// Selection Sorting()
async function selection_sort() {
    let i, j, min
    for (i = 0; i < org_array.length; i++) {
        min = i;
        for (j = i + 1; j < org_array.length; j++) {
            let a = parseInt(org_array[min].innerText)
            let b = parseInt(org_array[j].innerText)
            org_array[j].style.backgroundColor = "yellow";
            org_array[j].style.border = "4px solid white"
            org_array[min].style.backgroundColor = "yellow";
            org_array[min].style.border = "4px solid white"
            await delay(sorting_speed);
            if (a > b) {
                org_array[j].style.backgroundColor = "red";
                await delay(sorting_speed);
                org_array[min].style.backgroundColor = "#00ffe5";
                org_array[min].style.border = "1px solid black"
                min = j;
                org_array[j].style.backgroundColor = "#00ffe5";
                org_array[j].style.border = "1px solid black"
            }
            else {
                org_array[min].style.backgroundColor = "red";
                await delay(sorting_speed);
                org_array[j].style.backgroundColor = "#00ffe5";
                org_array[min].style.backgroundColor = "#00ffe5";
                org_array[j].style.border = "1px solid black"
                org_array[min].style.border = "1px solid black"
            }
        }
        if (min != i) {
            swapElements(org_array[i], org_array[min])
        }
        org_array[i].style.backgroundColor = "green"
    }
    // last sorted array effect
    effect()
}

// Insertion Sorting()
async function insertion_sort() {
    let i, j;
    for (i = 1; i < org_array.length; i++) {
        j = i;
        await delay(sorting_speed);
        for (k = 0; k < i - 1; k++) {
            org_array[k].style.backgroundColor = "green";
        }
        await delay(sorting_speed);
        const key = parseInt(org_array[i].style.height);
        let a = parseInt(org_array[j - 1].style.height);
        while (j > 0 && a > key) {
            org_array[j].style.backgroundColor = "yellow";
            org_array[j].style.border = "4px solid white"
            org_array[j - 1].style.backgroundColor = "yellow";
            org_array[j - 1].style.border = "4px solid white"
            await delay(sorting_speed);
            org_array[j].style.height = org_array[j - 1].style.height;
            org_array[j].innerText = a
            await delay(sorting_speed);
            org_array[j].style.backgroundColor = "green";
            org_array[j - 1].style.backgroundColor = "green";
            org_array[j].style.border = "1px solid black"
            org_array[j - 1].style.border = "1px solid black"
            j--;
            if (j > 0) a = parseInt(org_array[j - 1].style.height);
        }
        org_array[j].style.height = key + "px";
        org_array[j].innerText = key
        org_array[j].style.backgroundColor = "red";
        org_array[j].style.border = "1px solid black"
    }
    // last sorted array effect
    effect()
}

// Merge Sorting()
function merge_sort() {
    mergeSort(org_array, 0, org_array.length - 1);
}
async function mergeSort(arr, left, right) {
    if (left < right) {
        let mid = Math.floor((left + right) / 2);

        await mergeSort(arr, left, mid);
        await mergeSort(arr, mid + 1, right);
        await merge(arr, left, mid, right);
    }
    if (left === 0 && right === org_array.length - 1) {
        effect()
    }
}
async function merge(arr, left, mid, right) {
    let n1 = mid - left + 1;
    let n2 = right - mid;

    let leftArr = [];
    let rightArr = [];

    for (let i = 0; i < n1; i++) {
        leftArr.push(parseInt(arr[left + i].innerText));
    }
    for (let i = 0; i < n2; i++) {
        rightArr.push(parseInt(arr[mid + 1 + i].innerText));
    }

    let i = 0, j = 0, k = left;

    while (i < n1 && j < n2) {
        arr[k].style.backgroundColor = "#00ffe5";
        arr[k].style.border = "1px solid black"
        await delay(sorting_speed);
        if (leftArr[i] <= rightArr[j]) {
            arr[k].style.backgroundColor = "yellow";
            arr[k].style.border = "4px solid white";
            arr[k].style.height = leftArr[i] + "px";
            arr[k].innerText = leftArr[i];
            i++;
        } else {
            arr[k].style.backgroundColor = "yellow";
            arr[k].style.border = "4px solid white";
            arr[k].style.height = rightArr[j] + "px";
            arr[k].innerText = rightArr[j];
            j++;
        }
        k++;
    }
    while (i < n1) {
        arr[k].style.backgroundColor = "#00ffe5";
        arr[k].style.border = "1px solid black"
        await delay(sorting_speed);
        arr[k].style.backgroundColor = "yellow";
        arr[k].style.border = "4px solid white";
        arr[k].style.height = leftArr[i] + "px";
        arr[k].innerText = leftArr[i];
        i++;
        k++;
    }
    while (j < n2) {
        arr[k].style.backgroundColor = "#00ffe5";
        arr[k].style.border = "1px solid black"
        await delay(sorting_speed);
        arr[k].style.backgroundColor = "yellow";
        arr[k].style.border = "4px solid white";
        arr[k].style.height = rightArr[j] + "px";
        arr[k].innerText = rightArr[j];
        j++;
        k++;
    }
    // Reset color after merging
    for (let x = left; x <= right; x++) {
        await delay(sorting_speed);
        arr[x].style.backgroundColor = "green";
        arr[x].style.border = "1px solid black"
    }
}

// Quick sorting()
async function quick_sort() {
    await quickSort(org_array, 0, org_array.length - 1);
    effect();
}
async function quickSort(arr, start, end) {
    if (start < end) {
        let pivotIndex = await quickSortPartition(arr, start, end);
        await quickSort(arr, start, pivotIndex - 1);
        await quickSort(arr, pivotIndex + 1, end);
    }
}
async function quickSortPartition(arr, start, end) {
    let pivot = parseInt(arr[end].innerText);
    arr[end].style.backgroundColor = "red";
    let index = start - 1;
    for (let j = start; j < end; j++) {
        await delay(sorting_speed);
        arr[j].style.backgroundColor = "yellow";
        arr[end].style.backgroundColor = "yellow";
        await delay(sorting_speed);
        let a = parseInt(arr[j].innerText);
        if (a <= pivot) {
            index++;
            arr[index].style.backgroundColor = "blue";
            await delay(sorting_speed);
            swapElements(arr[j], arr[index]);
        }
        arr[j].style.backgroundColor = "#00ffe5";
        arr[end].style.backgroundColor = "red";
    }
    index++;
    swapElements(arr[index], arr[end]);
    arr[end].style.backgroundColor = "#00ffe5";
    arr[index].style.backgroundColor = "green";
    await delay(sorting_speed);
    return index;
}

// Swap Function ()
function swapElements(element1, element2) {
    let h1 = element1.innerText
    let h2 = element2.innerText
    element1.style.height = h2 + "px"
    element2.style.height = h1 + "px"
    element1.innerText = h2
    element2.innerText = h1
}

// this is delay function for visulization of sortings
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function effect() {
    // last sorted array effect
    for (ele of org_array) {
        ele.style.backgroundColor = "green"
    }
    await delay(100)
    for (ele of org_array) {
        ele.style.backgroundColor = "#00ffe5"
    }
    await delay(300)
    for (ele of org_array) {
        ele.style.backgroundColor = "green"
    }
    await delay(500)
    for (ele of org_array) {
        ele.style.backgroundColor = "#00ffe5"
    }
    do_start = true
}