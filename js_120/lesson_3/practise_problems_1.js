// 1
// Disadvantage of factory functions
// Requires a copy of each method for every object created
// No way to determine from which factory function an object was created, if any

// 2
function makeObj() {
  return {
    propA: 10,
    propB: 20,
  };
}

// 3
let invoice = {
  phone: 3000,
  internet: 6500
};

let payment = {
  phone: 1300,
  internet: 5500
};

// let invoiceTotal = invoice.phone + invoice.internet;
// let paymentTotal = payment.phone + payment.internet;
let remainingDue = invoiceTotal - paymentTotal;

console.log(paymentTotal);         // => 6800
console.log(remainingDue);         // => 2700

function createInvoice(services = {}) {
  let {phone, internet} = services;
  phone = phone || 3000;
  internet = internet || 5500;
  let amount = phone + internet;
  return {
    phone,
    internet,
    amount,
    total() {
      return this.amount;
    },
    addPayment(payment) {
      let {phone, internet, amount} = payment;
      this.phone -= phone || 0;
      this.internet -= internet || 0;
      this.amount -= amount || phone + internet || phone || internet || 0;
    },
    addPayments(payments) {
      payments.forEach(payment => this.addPayment(payment));
    },
    amountDue() {
      return this.amount;
    }
  }
}
function invoiceTotal(invoices) {
  let total = 0;

  for (let index = 0; index < invoices.length; index += 1) {
    total += invoices[index].total();
  }

  return total;
}

let invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({ internet: 6500 }));
invoices.push(createInvoice({ phone: 2000 }));
invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

console.log(invoiceTotal(invoices)); // 31000

// 4

function createPayment(services = {}) {
  // implement the factory function here
  let {internet, phone, amount} = services;
  internet = internet || 0;
  phone = phone || 0;
  amount = amount || internet + phone;
  return {
    internet,
    phone,
    amount,
    total() {
      return amount;
    }
  }
}

function paymentTotal(payments) {
  return payments.reduce((sum, payment)  => sum + payment.total(), 0);
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));      // => 24000

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

let payment3 = createPayment({ phone: 1000 });

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
invoice.amountDue();       // this should return 0

// 5
