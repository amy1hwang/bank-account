//Back End
function BankAccount (name, deposit) {
  this.name = name;
  this.balance = parseInt(deposit)
  // this.history = [];
  // this.history.push("initial deposit" + deposit);
};

BankAccount.prototype.deposit = function() {
  this.balance += parseInt(deposit);
  return this.balance;
};

BankAccount.prototype.withdrawal = function(withdrawal)  {
  this.balance -= parseInt(withdrawal);
  return this.balance;
};

//Front End
$(document).ready(function() {
  $("form#new-user-info").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-name").val();
    var inputtedInitial = parseInt($("input#new-initial").val());

    var newUserInfo = new UserInfo(inputtedName, inputtedInitial);

    $("#new-current").text(newUserInfo.initial)
  });
  $("form#new-deposit-withdrawal").submit(function(event) {
    event.preventDefault();
    $("#new-current").each(function() {
        var inputtedDeposit = parseInt($(this).find("input#new-deposit").val());
        var inputtedWithdrawal = parseInt($(this).find("input#new-withdrawal").val());
        var newBankAccount = new BankAccount(inputtedDeposit, inputtedWithdrawal);
        console.log(newBankAccount);
      });
    $("#new-current").text(newBankAccount.calculate());
  });
});
