
import CartTotals from './CartTotals'
import './Cart.css'
import CartCoupon from './CartCoupon'
import CartProgress from './CartProgress'
import CartTable from './CartTable'

const Cart = () => {
  
  return (
    <section className="cart-page">
    <div className="container">
        <div className="cart-page-wrapper">
            <form className="cart-form">
               <CartProgress />
                <div className="shop-table-wrapper">
                    <CartTable />
                    <CartCoupon />
                </div>
            </form>
            <div className="cart-collaterals">
               <CartTotals/>
            </div>
        </div>
    </div>
</section>
  )
}

export default Cart