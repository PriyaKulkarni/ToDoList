// To add work to-do in the ToDoListTable
function addList(myTable) {
    var table = document.getElementById(myTable);
    var numOfRows = table.rows.length;
    var row = table.insertRow(numOfRows);            

    //declare a variable to store input text
    var b = document.getElementById('txt1').value;
    var cell1 = row.insertCell(0);
    var content1 = document.createElement("input");
    content1.className = "form-control";
    content1.type = "text";
    content1.style = "width: 400px" ;
    content1.value = b;
    //append content1
    cell1.appendChild(content1);

    var cell2 = row.insertCell(1);
    var content2 = document.createElement("input");
    content2.type = "checkbox";
    //append content2
    cell2.appendChild(content2);

    document.getElementById('txt1').value="";
    document.getElementById('pTotal').innerHTML= numOfRows + 1;
    return false;
}

//To delete work done from the ToDoListTable
function deleteList(myTable) {
    var table = document.getElementById(myTable);
    var numOfRows = table.rows.length;
    var count = table.rows.length;
    
    //check if to-do list table is empty
    if( numOfRows === 0) {
        alert("To-do List is empty!\nPlease add to-dos/tasks.");
        return;
    }
    
    //delete checked tasks
    for(var i=0; i<numOfRows; i++) {
        var row = table.rows[i];
        var chkbox = row.cells[1].childNodes[0];
        //if checked, delete completed task
        if(null != chkbox && true == chkbox.checked) {
            table.deleteRow(i);
            numOfRows--;
            i--;
        }
    }
    //write number of pending tasks
    document.getElementById('pTotal').innerHTML= numOfRows;

    //check if no checkboxes are selected
    if ( numOfRows === count) {
        alert("No to-dos selected!\nPlease check corresponding checkboxes of to-dos for deletion.");
    }
}