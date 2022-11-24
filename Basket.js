export function Basket(){
  return(
    <div style={{display:'none'}} className="overlay">
    <div className="drawer">

    <h2 className="basket_delete"> Basket <img className="deletedouble" src="/img/deletedouble.svg" width={20} height={20}></img> </h2>

    <div className="cart_item">

      <div style={{backgroundImage:"url(/img/bear2.jpg)"}} className="img_bear"></div>
     
      <div className="mb-5">
      <p >Toy Teddy Bear</p>
      <b> $ 24.00 USD </b>
      </div>
      <img className="delete" src="/img/delete.png" alt="delete" width={13} height={13}></img>
      </div>

      <div className="cart_item">

      <div style={{backgroundImage:"url(/img/bear2.jpg)"}} className="img_bear"></div>
     
      <div className="mb-5">
      <p >Toy Teddy Bear</p>
      <b> $ 24.00 USD </b>
      </div>
      <img className="delete" src="/img/delete.png" alt="delete" width={13} height={13}></img>
      </div>

     <div className="items_under_cards">
     <ul className="cart_block_cost">
        <li className="li_items">
        <span className="basket_text">In All:</span>
        <div></div>
        <b> $ 40.00 USD</b>
      </li>
     </ul>

     <ul className="cart_block_cost">
     <li className="li_items">
        <span className="basket_text"> Tax 5%:</span>
        <div></div>
        <b> $ 2.00 USD</b>
        </li>
     </ul>

     <button className="button_basket"> Place an order
      </button>

     </div>
   </div>
  </div>
  )
}