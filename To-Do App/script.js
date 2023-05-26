const submit = document.getElementById('add')
const listContainer = document.getElementById('list-container')
const input = document.getElementById('input-box')
const tbody = document.getElementById('listDisplay')

function addTask(){
    if(input.value === ''){
        alert("Please enter a task");
    }else{
        let li = document.createElement('li');
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement('span')
        // creates the 'x' that will be used to delete the list item
        span.innerHTML = '\u00d7';
        li.appendChild(span)
    }
    input.value = '';
    // when adding a task, this function will be called and will save the entry to the browser
    saveData();
}

listContainer.addEventListener('click', function(e){
    // if we have clicked on the li tag,
    if(e.target.tagName === 'LI'){
    // it will check the box
        e.target.classList.toggle('checked');
        saveData();
        // if the clicked target has a span tag,
    } else if(e.target.tagName === 'SPAN'){
        // it will remove the parent element which is the 'li' element
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// saves listContainer items in browser so that when you close and reopen, the list does not clear
// call this everytime there is a change to the list: when adding, deleting, or checking off an entry
function saveData(){
    localStorage.setItem('data', listContainer.innerHTML)
}

// this function displays the list after closing and reopening the browser
// without it, when closing the browser, the list will be blank
function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();