import './index.css'

const OrderDetails = () => (
  <div className="order-details-flex">
    <div className="container-width">
      <p>Supplier</p>
      <p className="width-details">East coast fruits & Vegetables</p>
    </div>
    <div className="container-width">
      <p>Shipping Date</p>
      <p className="width-details">Thu FEB, 10</p>
    </div>
    <div className="container-width">
      <p>Total</p>
      <p className="width-details">$15,028.3</p>
    </div>
    <div className="container-width">
      <p>Category</p>
      <p className="width-details">Food Details</p>
    </div>
    <div className="container-width">
      <p>Department</p>
      <p className="width-details">300-444-678</p>
    </div>
    <div className="container-width">
      <p>status</p>
      <p className="width-details">Awaiting your Approvel</p>
    </div>
  </div>
)

export default OrderDetails
