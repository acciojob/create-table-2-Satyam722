function createTable() {
  let rn = prompt("Input number of rows");
  let cn = prompt("Input number of columns");

  // Convert to numbers
  rn = Number(rn);
  cn = Number(cn);

  // Validate input
  if (isNaN(rn) || isNaN(cn)) {
    alert("Please enter numeric values only.");
    return;
  }

  if (rn <= 0 || cn <= 0) {
    alert("Rows and columns must be positive numbers.");
    return;
  }

  // Get the table element
  const table = document.getElementById("myTable");

  // Clear previous table content
  table.innerHTML = "";

  // Create rows and columns
  for (let i = 0; i < rn; i++) {
    let row = document.createElement("tr");

    for (let j = 0; j < cn; j++) {
      let cell = document.createElement("td");
      cell.textContent = `Row-${i} Column-${j}`;
      row.appendChild(cell);
    }

    table.appendChild(row);
  }
}
