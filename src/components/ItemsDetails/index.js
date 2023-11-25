import {Component} from 'react'
import {FiPrinter} from 'react-icons/fi'

import ProductPage from '../ProductPage'
import './index.css'

const itemDetails = [
  {
    id: 1,
    productName: 'chicken Breast',
    brand: 'Hormel Black Label',
    price: 300,
    quantity: 5,
    imageUrl:
      'https://res.cloudinary.com/dojn2omox/image/upload/v1700898983/eng8ycu2i7wipfh4ixeu.jpg',
  },
  {
    id: 2,
    productName: 'chicken Lollipop',
    brand: 'Hormel Black Label',
    price: 200,
    quantity: 6,
    imageUrl:
      'https://res.cloudinary.com/dojn2omox/image/upload/v1700898983/eng8ycu2i7wipfh4ixeu.jpg',
  },
  {
    id: 3,
    productName: 'chicken Kebabs',
    brand: 'Hormel Black Label',
    price: 500,
    quantity: 3,
    imageUrl:
      'https://res.cloudinary.com/dojn2omox/image/upload/v1700898983/eng8ycu2i7wipfh4ixeu.jpg',
  },
  {
    id: 4,
    productName: 'Biryani',
    brand: 'Hormel Black Label',
    price: 200,
    quantity: 2,
    imageUrl:
      'https://res.cloudinary.com/dojn2omox/image/upload/v1700898983/eng8ycu2i7wipfh4ixeu.jpg',
  },
]

class ItemsDetails extends Component {
  state = {initialList: itemDetails, searchValue: ''}

  onChangingSearchInput = event =>
    this.setState({searchValue: event.target.value})

  render() {
    const {initialList, searchValue} = this.state
    const filteredOne = initialList.filter(eachFilter =>
      eachFilter.productName.toLowerCase().includes(searchValue.toLowerCase()),
    )
    return (
      <div className="items-bgc">
        <div className="input-button-flex">
          <input
            type="search"
            value={searchValue}
            onChange={this.onChangingSearchInput}
            className="input-details"
            placeholder="Search..."
          />
          <div className="flex-button">
            <button type="button" className="button-details-item">
              Add Item
            </button>
            <div>
              <FiPrinter size="25" className="printer-details" />
            </div>
          </div>
        </div>
        <div>
          <ul>
            <li className="header-details-flex">
              <p className="width-of-product">Product name</p>
              <p className="width-of-remaning-b">Brand</p>
              <p className="width-of-remaning-header">Price</p>
              <p className="width-of-remaning-header">Quantity</p>
              <p className="width-of-remaning-header">Total</p>
              <p className="width-of-remaning-header">Status</p>
            </li>
            {filteredOne.map(eachItem => (
              <ProductPage eachItem={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default ItemsDetails
