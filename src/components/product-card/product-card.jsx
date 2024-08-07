import './product-card.scss'
import { Button } from "../button/button"
import { ItemCount } from "../item-count/item-count"
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'

export function ProductCard({ product }) {

  const { name, price, promotionPrice, image, stock } = product
  const { addItemToCart } = useContext(CartContext)

  const addProductToCart = () => addItemToCart(product)

  return (
    <div className='product-card-container'>
      <img src={image} alt={`${name}`} />
      <div className='product-description'>
        <p className='product-name'>{name}</p>
        <p className='product-price'>R$ {price.toFixed(2).toString().replace(".", ",")}</p>
        <p className='product-promotion-price'>Por R$ {promotionPrice.toFixed(2).toString().replace(".", ",")}</p>
      </div>
      <div className="product-buttons">
        <ItemCount />
        <Button typeButton="inverted" onClick={addProductToCart}>Comprar</Button>
      </div>
      <div className='product-stock-container'>
        <p className='product-stock'>Estoque: {stock} unid.</p>
      </div>
    </div>
  )
}