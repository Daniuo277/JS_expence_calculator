function addExpences() {
  var exp_name = document.getElementById('expence_name');
  var exp_amount = document.getElementById('expence_amount');
  var exp_date = document.getElementById('expence_date');
  //   console.log(exp_name, exp_amount, exp_date);

  var exp_container = document.getElementById('expences_container');

  if (exp_amount.value && exp_name.value && exp_date.value) {
    exp_container.innerHTML +=
      '<tr><td>' +
      exp_name.value +
      '</td><td>' +
      exp_amount.value +
      '</td><td>' +
      exp_date.value +
      '</td></tr>';

    exp_name.value = '';
    exp_amount.value = '';
    exp_date.value = '';
  } else {
    //Add an error showing info about not filling form
  }
}
