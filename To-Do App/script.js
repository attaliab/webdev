const submit = document.getElementById('add')
const listContainer = document.getElementById('list-container')
const input = document.getElementById('input-box')
const tbody = document.getElementById('listDisplay')

function addTask(){
    if(input.value === ''){
        alert("Please enter a task");
    }else{
        let li = document.createElement('li');
        li.innerHTML = input.value\
        listContainer.appendChild(li);
    }
    input.value = '';
}

// const checkbox = document.getElementById('flexCheckDefault')
// const checkOrNoCheck = checkbox.value
// checkbox.addEventListener('click', function(){
//   if(checkOrNoCheck = true){

//   }
// })

// const toDoList = []
// submit.addEventListener('click', function(event){
//     event.preventDefault()
//     let listItem = input.value;
//     toDoList.push(listItem)
//     console.log(toDoList)
//     tbody.innerHTML += `<tr>
//     <th scope="row"></th>
//     <td> <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">${toDoList[toDoList.length - 1]}</td>
//   </tr>
//   `
// })