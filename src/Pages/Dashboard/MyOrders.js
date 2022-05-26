import React from 'react';

const MyOrders = () => {
    return (
        <div>
            <h2>my order</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Parts Name</th>
        <th>order Quantity</th>
        <th>Button</th>
      </tr>
    </thead>
    <tbody>
 
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>shjdl@gmail.com</td>
        <td>Quality Control Specialist</td>
        <td>150</td>
        <td><button class="btn btn-secondary">Cancel</button></td>
      </tr>

      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Asjdl@gmail.com</td>
        <td>Desktop Support Technician</td>
        <td>100</td>
        <td><button class="btn btn-secondary">Cancel</button></td>
      </tr>

      <tr>
        <th>3</th>
        <td>Aice Swyre</td>
        <td>hjdl@gmail.com</td>
        <td>Tax Accountant</td>
        <td>200</td>
        <td><button class="btn btn-secondary">Cancel</button></td>
      </tr>
      <tr>
        <th>4</th>
        <td>Furjf Swyre</td>
        <td>ddjdl@gmail.com</td>
        <td>Tax Accountant</td>
        <td>150</td>
        <td><button class="btn btn-secondary">Cancel</button></td>
      </tr>
      <tr>
        <th>5</th>
        <td>Dfkfg Swyre</td>
        <td>shjdl@gmail.com</td>
        <td>Tax Accountant</td>
        <td>300</td>
        <td><button class="btn btn-secondary">Cancel</button></td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;