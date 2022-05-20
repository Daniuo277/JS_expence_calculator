var id = 0;
var visible = 0;
var exp_total = 0;

function addExpenses() {
  var exp_name = document.getElementById('Expense_name');
  var exp_amount = document.getElementById('Expense_amount');
  var exp_date = document.getElementById('Expense_date');
  var exp_container = document.getElementById('Expenses_container');

  if (visible == 0) {
    var element = document.getElementById('Expenses');
    element.classList.toggle('hidden');
    visible = 1;
  }

  if (exp_amount.value && exp_name.value && exp_date.value) {
    exp_container.innerHTML +=
      '<tr id="element_' +
      id +
      '" class="table_elements"><td>' +
      exp_name.value +
      '</td><td>' +
      exp_date.value +
      '</td><td><span id="element_' +
      id +
      '_value">' +
      exp_amount.value +
      '</span>$</td>' +
      '<td><input type="button" value="remove" ' +
      '" onclick="remove_element(' +
      id +
      ')" /></td></tr>';

    totalExp(id, true);

    exp_name.value = '';
    exp_amount.value = '';
    exp_date.value = '';
    id++;
    checkTable();
  } else {
    checkTable();
    alert('check data you entered');
    //Add an error showing info about not filling form
  }
}

function remove_element(id) {
  totalExp(id, false);
  document.getElementById('element_' + id + '').remove();
  checkTable();
}

function totalExp(id, state) {
  var exp_minus = document.getElementById('element_' + id + '_value').innerHTML;
  exp_minus = parseFloat(exp_minus, 10);
  var exp_total_element = document.getElementById('exp_total');

  if (!state) {
    exp_total -= parseFloat(exp_minus, 10);
    exp_total_element.innerHTML = exp_total + '$';
  }
  if (state) {
    exp_total += parseFloat(exp_minus, 10);
    exp_total_element.innerHTML = exp_total + '$';
  }
}

function checkTable() {
  var exp_count = document.getElementsByClassName('table_elements');
  if (exp_count.length == 0) {
    visible = 0;
    var element = document.getElementById('Expenses');
    element.classList.toggle('hidden');
  }
}
