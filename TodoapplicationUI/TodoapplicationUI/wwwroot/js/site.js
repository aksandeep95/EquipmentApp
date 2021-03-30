// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


const uri = 'http://localhost:61651/api/todo';


let todolist = [];


function gettodo() {
    debugger;
    fetch(uri, {

        method: 'Get',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*'

        },

    })

        .then(Response => Response.json())
        .then(data => _displayitems(data))
        .catch(error => console.error('unable to add item', error));


}


function addtodo() {
    debugger;
    const todo = {

        todoname: document.getElementById('todoname').value,
      

    };

    fetch(uri, {

        method: 'Post',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*'

        },
        body: JSON.stringify(todo)

    })

        .then(Response => Response.json())
        .then(() => {
            Redirecttolist();
        })
        .catch(error => console.error('unable to add item', error));

}



function _displayitems(data) {
    debugger;
    const tbody = document.getElementById('todolist');
    tbody.innerHTML = '';

    const button = document.createElement('button');

    data.forEach(item => {

        let labelfortodoname = document.createElement('label');
        labelfortodoname.innerHTML = item.todoName;

      

        let editbutton = button.cloneNode(false);
        editbutton.innerText = 'Edit';
        editbutton.setAttribute('onclick', `displayeditform(${item.todoId})`);

        let deletebutton = button.cloneNode(false);
        deletebutton.innerText = 'Delete';
        deletebutton.setAttribute('onclick', `displaydeleteform(${item.todoId})`);


        let tr = tbody.insertRow();

        let td1 = tr.insertCell(0);
        td1.appendChild(labelfortodoname);



        let td4 = tr.insertCell(3);
        td4.appendChild(editbutton);

        let td5 = tr.insertCell(4);
        td5.appendChild(deletebutton);



    })

    todolist = data;
    closebutton();
    closedeletebutton();
}


function displayeditform(id) {


    debugger;



    const item = todolist.find(item => item.todoId === id);

    document.getElementById('edittodoid').value = item.todoId;
    document.getElementById('edittodoname').value = item.todoName;
  
    document.getElementById('editform').style.display = 'block';
    //Redirecttoedit();
    closedeletebutton();

}


function updatetodo() {
    debugger;


    const todo = {

        todoId: parseInt(document.getElementById('edittodoid').value),
        todoName: document.getElementById('edittodoname').value,
       

    };

    fetch(uri, {

        method: 'Put',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*'

        },
        body: JSON.stringify(todo)

    })

        .then(Response => Response.json())
        .then(() => {
            gettodo();
        })
        .catch(error => console.error('unable to update item', error));

}


function deleteitem(id) {

    debugger;


    fetch(`${uri}/${id}`, {

        method: 'Delete',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*'

        },

    })


        .then(() => {
            gettodo();
        })
        .catch(error => console.error('unable to add item', error));


}



function closebutton() {

    document.getElementById('editform').style.display = 'none';
}


function closedeletebutton() {

    document.getElementById('deleteform').style.display = 'none';
}


function Redirecttolist() {
    window.location = "http://localhost:62451/Home/List";
}
