import { Trash2 } from "lucide-react";

function Cart({ cart, setCart }) {
  const removeFromCart = (indexToRemove) => {
    setCart((prevCart) =>
      prevCart.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div className="min-h-[70vh] bg-[#faf9f7] px-[6%] py-10">

      <h1 className="text-2xl font-semibold text-gray-900 mb-8">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-md p-10 text-center">
          <p className="text-gray-500 text-sm">
            Your cart is empty.
          </p>
        </div>
      ) : (
        <div className="max-w-3xl space-y-4">

          {cart.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-md p-4 flex items-center justify-between"
            >

              <div className="flex items-center gap-4">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-contain bg-[#f3eee8] rounded"
                />

                <div>
                  <h2 className="text-sm font-semibold text-gray-800">
                    {item.name}
                  </h2>

                  <p className="text-sm font-bold text-gray-900 mt-1">
                    ${item.price}.00
                  </p>
                </div>

              </div>

              <button
                onClick={() => removeFromCart(index)}
                className="text-gray-500 hover:text-red-600 transition-colors"
              >
                <Trash2 size={20} />
              </button>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default Cart;