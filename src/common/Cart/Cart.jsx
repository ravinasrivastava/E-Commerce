import React from "react"
import "./style.css"

const Cart = ({ CartItem }) => {
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)
  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>
          <div className='cart-details'>
            {CartItem.length === 0 && <h1 className='no-items product'>No items add in Cart</h1>}
            {CartItem.map((item) => {
              return (
                <div className='cart-list product d_flex' key={item.id}>
                  <div className='cart-items-function'>
                  </div>
                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>
          <div className='cart-total product'>
            <h2>Cart Summary</h2>
            <div className=' d_flex'>
              <h4>Total Price :</h4>
              <h3>${totalPrice}.00</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Cart;