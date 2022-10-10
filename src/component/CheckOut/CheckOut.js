import React, { useState } from 'react';
import { Toast } from 'react-bootstrap';
import './CheckOut.css'

const CheckOut = () => {

  let [confirmCheck,setConfirmCheck] = useState(true);

  let handleFormSubmit = (event) => {
    event.preventDefault()
    setConfirmCheck(false)
  }

  return (
    <div className="checkout-wrapper bg-gray">
{ confirmCheck? ( 
      <div className='mx-auto w-50 p-5'>

        <form onSubmit={handleFormSubmit} className='checkout-form'>
          <div class="row mb-4">
            <h2 className='text-center mb-4'>Confirm Your Trip</h2>
            <div class="form-outline mb-4">
              <label class="form-label" for="form6Example1" required>First name</label>
              <input type="text" id="form6Example1" class="form-control" />
            </div>
            <div class="form-outline">
              <label class="form-label" for="form6Example2" required>Last name</label>
              <input type="text" id="form6Example2" class="form-control" />
            </div>
          </div>

          <div class="form-outline mb-4">
            <label class="form-label" for="form6Example4">Address</label>
            <input type="text" id="form6Example4" class="form-control" required />
          </div>

          <div class="form-outline mb-4">
            <label class="form-label" for="form6Example6">Phone</label>
            <input type="number" id="form6Example6" class="form-control" required />
          </div>

          <div class="form-outline mb-4">
            <label class="form-label" for="form6Example7">Additional Information (Optional)</label>
            <textarea class="form-control" id="form6Example7" rows="4"></textarea>
          </div>

          <button type="submit" class="btn btn-primary btn-block mb-4">Place Order</button>
        </form>
      </div>
      ): (<h2 className='text-center p-5 text-success'> Thanks For Booking your Trip</h2> ) }
    </div>
  );
};

export default CheckOut;