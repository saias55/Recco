import {MdKeyboardArrowRight} from 'react-icons/md'

import './index.css'

const OrderIdPage = () => (
  <div className="order-bgc-space-between">
    <div className="order-display-flex">
      <p>Orders</p>
      <MdKeyboardArrowRight
        size="20"
        color="black"
        className="details-of-logo"
      />
      <p className="order-id-details">Order 32457ABC</p>
    </div>
    <div className="order-id-buttons-space-between">
      <div>
        <h1 className="order-head">Order 32457ABC</h1>
      </div>
      <div>
        <button type="button" className="back-button-details">
          Back
        </button>
        <button type="button" className="approve-order-button-details">
          Approve Order
        </button>
      </div>
    </div>
  </div>
)

export default OrderIdPage
