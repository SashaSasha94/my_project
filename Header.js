export function Header(){
  return(
    <header>
    <div className="header_left">
   <img src="/img/image bear.png" width={110} height={90}></img>
    <div className="header_info">
     <h3>
      React ToyStore
     </h3>
      <p> The best toys shop </p>
     </div>
    </div>
    <ul className="header_right">
      <li>
       <img width={18} height={18} src="/img/cart-icon.svg"></img>
      <span> 1205 p. </span>
      </li>
      <li>
       <img width={20} height={20} src="/img/Frame.svg"></img>
      </li>
    </ul>
  </header>
  )
}