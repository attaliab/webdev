const submit = document.getElementById('submitBtn')
const input = document.getElementById('toDoInput')
const tbody = document.getElementById('listDisplay')


const toDoList = []
submit.addEventListener('click', function(event){
    event.preventDefault()
    let listItem = input.value;
    toDoList.push(listItem)
    console.log(toDoList)
    tbody.innerHTML += `<tr>
    <th scope="row"></th>
    <td>
        <div class="radio">
            <label><input type="checkbox" name="optradio" id="checkbox">  ${toDoList[toDoList.length - 1]}</label>
        </div>
    </td>
  </tr>`
    const checkbox = document.getElementById('checkbox')
    const checkboxStrike = () =>{
        if(checkbox.value === true){
            
        }
    }
})