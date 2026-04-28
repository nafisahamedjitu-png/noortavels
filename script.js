function printTicket(i) {
  let t = tickets[i];

  let content = `
  <style>
    @page { size: A4; margin: 20mm; }
    body { font-family: Arial; }
    .copy {
      border: 2px dashed black;
      padding: 15px;
      margin-bottom: 20px;
    }
    h2 { text-align: center; margin: 0; }
    .row { margin: 5px 0; }
    .sign {
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
    }
    .sign div {
      border-top: 1px solid black;
      width: 40%;
      text-align: center;
      padding-top: 5px;
    }
  </style>

  <div class="copy">
    <h2>Travel Office - Customer Copy</h2>
    <hr>
    <div class="row">Name: ${t.name}</div>
    <div class="row">Phone: ${t.phone}</div>
    <div class="row">Sector: ${t.sector}</div>
    <div class="row">Ticket Date: ${t.ticketDate}</div>
    <div class="row">Flight Date: ${t.flightDate}</div>
    <div class="row">Total: ${t.total}</div>
    <div class="row">Paid: ${t.paid}</div>
    <div class="row">Due: ${t.due}</div>
    <div class="row">Payment: ${t.payment}</div>
    <div class="row">Status: ${t.status}</div>

    <div class="sign">
      <div>Customer Signature</div>
      <div>Office Signature</div>
    </div>
  </div>

  <div class="copy">
    <h2>Travel Office - Office Copy</h2>
    <hr>
    <div class="row">Name: ${t.name}</div>
    <div class="row">Phone: ${t.phone}</div>
    <div class="row">Sector: ${t.sector}</div>
    <div class="row">Ticket Date: ${t.ticketDate}</div>
    <div class="row">Flight Date: ${t.flightDate}</div>
    <div class="row">Total: ${t.total}</div>
    <div class="row">Paid: ${t.paid}</div>
    <div class="row">Due: ${t.due}</div>
    <div class="row">Payment: ${t.payment}</div>
    <div class="row">Status: ${t.status}</div>

    <div class="sign">
      <div>Customer Signature</div>
      <div>Office Signature</div>
    </div>
  </div>
  `;

  let win = window.open('', '', 'width=900,height=700');
  win.document.write(content);
  win.document.close();
  win.print();
}