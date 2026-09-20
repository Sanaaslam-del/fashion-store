import { Link } from "react-router-dom";
import { Search, Heart, User, ShoppingCart } from "lucide-react";

function Navbar({cart}) {
  return (
    <nav className="sticky top-0 z-50 bg-white px-14 py-6 flex items-center justify-between shadow-sm">

      {/* Logo */}
      <div>
        <img
          src="/logo.png"
          alt="StyleHub Logo"
          className="w-32 h-auto"
        />
      </div>

      {/* Links */}
      <div className="flex items-center gap-10 text-[16px] font-bold">

        <a
          href="/"
          className="text-[#8B4A20] border-b-[3px] border-[#8B4A20] "
        >
          Home
        </a>

        <a
          href="/shop"
          className="hover:text-[#8B4A20] transition-colors"
        >
          Shop
        </a>

        <a
          href="/women"
          className="hover:text-[#8B4A20] transition-colors"
        >
          Women
        </a>

        <a
          href="/men"
          className="hover:text-[#8B4A20] transition-colors"
        >
          Men
        </a>

        <a
          href="/accessories"
          className="hover:text-[#8B4A20] transition-colors"
        >
          Accessories
        </a>

        <a
          href="/about"
          className="hover:text-[#8B4A20] transition-colors"
        >
          About
        </a>

        <a
          href="/contact"
          className="hover:text-[#8B4A20] transition-colors"
        >
          Contact
        </a>

      </div>

      {/* Icons */}
      <div className="flex items-center gap-6">

        <Search
          size={24}
          strokeWidth={1.8}
          className="cursor-pointer hover:text-[#8B4A20] transition-colors"
        />

        <Heart
          size={24}
          strokeWidth={1.8}
          className="cursor-pointer hover:text-[#8B4A20] transition-colors"
        />

        <User
          size={24}
          strokeWidth={1.8}
          className="cursor-pointer hover:text-[#8B4A20] transition-colors"
        />
<Link to="/cart" className="relative">
  <ShoppingCart
    size={24}
    strokeWidth={1.8}
    className="cursor-pointer hover:text-[#8B4A20] transition-colors"
  />

  {cart.length > 0 && (
    <span className="absolute -top-2 -right-2 bg-[#8B4A20] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
      {cart.length}
    </span>
  )}
</Link>

      </div>

    </nav>
  );
}

export default Navbar;

