    var c_balance=0;
    var count=0;
    var s_no =1;


    function calculation(){
    var salary=document.getElementById("salary_text").value;
    salary=Number(salary);
    var expense=document.getElementById("amt_text").value;
    expense=Number(expense);
    var category=document.getElementById("expcat_text");

    // displaying current salary 
    document.getElementById("current_salary").innerHTML = `${salary}/-`;

    // displaying current balance
    if (count==0){
        c_balance=salary-expense;
        document.getElementById("current_balance").innerHTML = `${c_balance}/-`;
        count+=1;

    }
    else{
        c_balance-=expense;
        document.getElementById("current_balance").innerHTML = `${c_balance}/-`;

    }

    // for key-indications
    if (c_balance <= (1/2) * salary) {
        var textElement = document.getElementById("indicate");
        textElement.style.color = "red";
        textElement.style.backgroundColor = "#f99e9ecf";
        textElement.innerHTML = "Spend Wisely :)";
    }
    else if(c_balance > (1/2) * salary){
        var textElement = document.getElementById("indicate");
        textElement.style.color = "Green";
        textElement.style.backgroundColor = "#91d1ac";
        textElement.innerHTML = "Good Going :)";
    }
    
    // delay in indications
    document.getElementById("calc-exp").addEventListener("click", function() {
    setTimeout(function() {
        document.getElementById("indicate").style.display = "block";
    }, 500); // 5000 milliseconds = 5 seconds
});
}

// for adding in table
    function table_cal() {
    var category = document.getElementById("expcat_text").value;
    var expense = document.getElementById("amt_text").value;
    var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
  
    // Create cells and add input value to each cell
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    cell1.innerHTML = s_no;
    cell2.innerHTML = category; // You can add more columns here
    cell3.innerHTML = expense;
    
    //making a textbox nd appending in last cell
    let textBox = document.createElement("input");
    textBox.type = "text";
    cell4.appendChild(textBox);
    [cell1, cell2, cell3, cell4].forEach(cell => {
        cell.style.textAlign = "center";
        cell.style.padding = "10px";
        cell.style.color = " rgb(98, 1, 140)";
    });
    s_no+=1
  }

//   for displaying bills and all
    const fileInput = document.getElementById('fileInput');
    const fileContainer = document.getElementById('fileContainer');

    fileInput.addEventListener('change', function() {
    const file = this.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        if (file.type.includes('image')) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.width = "200px"; // Set the width of the image
            img.style.height = "150px"; // Set the height of the image
            img.style.objectFit = "contain"; 
            fileContainer.appendChild(img);
        } else if (file.type === 'application/pdf') {
            const embed = document.createElement('embed');
            embed.src = e.target.result;
            embed.width = "200px";
            embed.height = "300px";
            fileContainer.appendChild(embed);
        }
    };

    reader.readAsDataURL(file);
});

// to excel
function tableToExcel(){
    var table2excel = new Table2Excel();
    table2excel.export(document.querySelectorAll("table.tablefunc"));
}
