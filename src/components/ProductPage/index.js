import {IoMdClose} from 'react-icons/io'
import {FaCheck} from 'react-icons/fa'

import './index.css'

const ProductPage = props => {
  const {eachItem} = props
  const {productName, brand, price, quantity, imageUrl} = eachItem

  return (
    <div>
      <li className="items-in-flex">
        <img src={imageUrl} alt={productName} className="width-image" />
        <p className="product-width">{productName}</p>
        <p className="remain-items-b">{brand}</p>
        <p className="remain-items-width"> {price}</p>
        <p className="remain-items-width">{quantity}</p>
        <p className="remain-items-width">{price * quantity}</p>
        <div className="display-flex">
          <IoMdClose size="20" color="black" className="margin-top" />
          <FaCheck size="20" color="black" className="margin-top" />
          <button type="button" className="edit-button-details">
            Edit
          </button>
        </div>
      </li>
      <hr />
    </div>
  )
}

export default ProductPage
