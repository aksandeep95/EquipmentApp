// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const uri = 'http://localhost:61651/api/equipment';


let equipmentlist = [];


function getequipment() {
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


function addequipment() {

    const equipment = {

        equipmentname: document.getElementById('equipmentname').value,
        equipmentamount: document.getElementById('equipmentamount').value,
        equipmentpurchasedate: document.getElementById('equipmentdate').value

    };

    fetch(uri, {

        method: 'Post',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*'

        },
        body: JSON.stringify(equipment)

    })

        .then(Response => Response.json())
        .then(() => {
            Redirecttolist();
        })
        .catch(error => console.error('unable to add item', error));

}


function _displayitems(data) {
    debugger;
    const tbody = document.getElementById('equipmentlist');
    tbody.innerHTML = '';

    const button = document.createElement('button');

    data.forEach(item => {

        let labelforequipmentname = document.createElement('label');
        labelforequipmentname.innerHTML = item.equipmentName;

        let labelforequipmentamount = document.createElement('label');
        labelforequipmentamount.innerHTML = item.equipmentAmount;

        date = new Date(item.equipmentPurchaseDate);
        formattedDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

        let labelforequipmentdate = document.createElement('label');
        labelforequipmentdate.innerHTML = formattedDate;

        let editbutton = button.cloneNode(false);
        editbutton.innerText = 'Edit';
        editbutton.setAttribute('onclick', `displayeditform(${item.equipmentId})`);

        let deletebutton = button.cloneNode(false);
        deletebutton.innerText = 'Delete';
        deletebutton.setAttribute('onclick', `displaydeleteform(${item.equipmentId})`);


        let tr = tbody.insertRow();

        let td1 = tr.insertCell(0);
        td1.appendChild(labelforequipmentname);

        let td2 = tr.insertCell(1);
        td2.appendChild(labelforequipmentamount);

        let td3 = tr.insertCell(2);
        td3.appendChild(labelforequipmentdate);

        let td4 = tr.insertCell(3);
        td4.appendChild(editbutton);

        let td5 = tr.insertCell(4);
        td5.appendChild(deletebutton);

      

    })
   
    equipmentlist = data;
    closebutton();
    closedeletebutton();
}


function displayeditform(id) {

    debugger;

    const item = equipmentlist.find(item => item.equipmentId === id);

    document.getElementById('editequipmentid').value = item.equipmentId;
    document.getElementById('editequipmentname').value = item.equipmentName;
    document.getElementById('editequipmentamount').value = item.equipmentAmount;
    document.getElementById('editequipmentdate').value = item.equipmentPurchaseDate;
    document.getElementById('editform').style.display = 'block';
    //Redirecttoedit();

}


function updateequipment() {
    debugger;

    const equipment = {

        equipmentId: parseInt(document.getElementById('editequipmentid').value),
        equipmentName: document.getElementById('editequipmentname').value,
        equipmentAmount: document.getElementById('editequipmentamount').value,
        equipmentPurchaseDate: document.getElementById('editequipmentdate').value

    };

    fetch(uri, {

        method: 'Put',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*'

        },
        body: JSON.stringify(equipment)

    })

        .then(Response => Response.json())
        .then(() => {
            getequipment();
        })
        .catch(error => console.error('unable to update item', error));

}


function mydelete() {
    debugger;
    let id = document.getElementById('deleteequipmentid').value;
    deleteitem(id);
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
            getequipment();
        })
        .catch(error => console.error('unable to add item', error));


}


function displaydeleteform(id) {

    debugger;
 
    const item = equipmentlist.find(item => item.equipmentId === id);
  
    document.getElementById('deleteequipmentid').value = item.equipmentId;
    document.getElementById('deleteequipmentname').innerHTML = item.equipmentName;
    document.getElementById('deleteequipmentamount').innerHTML = item.equipmentAmount;
    document.getElementById('deleteform').style.display = 'block';
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






