import { Link } from "react-router-dom"


const Navigation = () => {
  const logoStyle = {
    width: 60,
    height: 60,
    marginRight: 5
  }
  const cartStyle = {
    width: 20,
    height: 20
  }
  return (
    <>
      <nav className="container mx-auto px-5 flex items-center justify-between" >
        <Link to="/">
          <div className="container flex items-center">
            <img src="/images/Logo.jpg" alt="Logo" style={logoStyle} />
            <h1 className="text-xl font-black">HIT<br />PIZZA</h1>
          </div>
        </Link>
        <ul className="flex items-center">
          <li><Link to="/">Home</Link></li>
          <li className="ml-5"><Link to="products">Products</Link></li>
          <li className="ml-5"
            ><Link to="Cart">
              <div className="container flex justify-around items-center border-2 border-black rounded-2xl p-1 m-1">
                <span>10</span>
                <img src="/images/cart.png" alt="cart" style={cartStyle}></img>
               </div>
            </Link>
          </li>
        </ul>
      </nav>

    </>
  )
}

export default Navigation

