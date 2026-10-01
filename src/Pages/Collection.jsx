import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, ShoppingBag } from "lucide-react";

const collections = {
    women: {
        eyebrow: "THE WOMEN'S EDIT",
        title: "Made to move\nwith your mood.",
        description: "Considered layers, easy silhouettes and pieces that make getting dressed feel like you.",
        image: "/women.png",
        accent: "#d9b9a6",
        products: [
            { name: "The Sunday Dress", category: "Dresses", price: 68, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85" },
            { name: "Soft Structure Blazer", category: "New arrivals", price: 94, image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=900&q=85" },
            { name: "Everyday Knit Top", category: "Knitwear", price: 42, image: "https://images.unsplash.com/photo-1564257577-d18b1bf6e7f8?auto=format&fit=crop&w=900&q=85" },
            { name: "Florence Midi", category: "Dresses", price: 76, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85" },
        ],
    },
    men: {
        eyebrow: "THE MEN'S EDIT",
        title: "Good pieces.\nBetter together.",
        description: "Off-duty essentials and refined layers, built for wherever the day takes you.",
        image: "/mens.png",
        accent: "#b7c4ba",
        products: [
            { name: "Weekend Overshirt", category: "Outerwear", price: 82, image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=85" },
            { name: "Relaxed Denim", category: "Denim", price: 64, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85" },
            { name: "Everyday White Tee", category: "Essentials", price: 28, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85" },
            { name: "City Low Sneakers", category: "Footwear", price: 78, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85" },
        ],
    },
    accessories: {
        eyebrow: "THE FINISHING TOUCH",
        title: "Small details.\nA whole new feel.",
        description: "The everyday extras and forever favourites that bring your look together.",
        image: "/bags.png",
        accent: "#c9c3b0",
        products: [
            { name: "The Everyday Tote", category: "Bags", price: 58, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85" },
            { name: "Soft Leather Crossbody", category: "Bags", price: 72, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85" },
            { name: "Weekend Frames", category: "Accessories", price: 36, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85" },
            { name: "City Walker", category: "Footwear", price: 78, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85" },
        ],
    },
};

function Collection({ category, setCart }) {
    const collection = collections[category];
    const [likedProducts, setLikedProducts] = useState([]);

    return (
        <main className="bg-[#faf9f6] text-[#211b17]">
            <section className="relative isolate grid min-h-[540px] overflow-hidden bg-[#efe7dd] md:grid-cols-2">
                <img src="/Herobackground.png" alt="" aria-hidden="true" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                <div className="flex items-center px-7 py-14 sm:px-12 lg:px-20">
                    <div className="max-w-lg">
                        <p className="text-[11px] font-semibold tracking-[3px] text-[#6f432e]">{collection.eyebrow}</p>
                        <h1 className="mt-5 whitespace-pre-line font-serif text-5xl leading-[1.08] text-[#211b17] sm:text-6xl">{collection.title}</h1>
                        <p className="mt-5 max-w-md text-sm leading-7 text-[#4b4541]">{collection.description}</p>
                        <a href="#collection-products" className="mt-8 inline-flex w-fit items-center gap-3 bg-[#3a2118] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#5b3829]">
                            Explore the collection <ArrowRight size={16} />
                        </a>
                    </div>
                </div>
                <div className="flex min-h-[300px] items-end justify-center px-4 pt-4 md:min-h-[540px]">
                    <img src={collection.image} alt={`${category} fashion collection`} className="max-h-[530px] max-w-full object-contain object-bottom" />
                </div>
            </section>

            <section id="collection-products" className="mx-auto max-w-7xl px-5 py-16 sm:px-10 lg:py-20">
                <div className="mb-8 flex items-end justify-between gap-4 border-b border-[#e6e0da] pb-5">
                    <div>
                        <p className="text-[10px] font-semibold tracking-[2px] text-[#8b4a20]">CURATED FOR YOU</p>
                        <h2 className="mt-2 font-serif text-3xl">The latest favourites</h2>
                    </div>
                    <p className="pb-1 text-xs text-[#756b64]">{collection.products.length} considered pieces</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-6 lg:grid-cols-4">
                    {collection.products.map((product) => (
                        <article key={product.name} className="group">
                            <div className="relative aspect-[4/5] overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/Herobackground.png')" }}>
                                <img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-cover mix-blend-multiply transition duration-500 group-hover:scale-[1.04]" />
                                <button type="button" aria-label={`${likedProducts.includes(product.name) ? "Remove" : "Add"} ${product.name} ${likedProducts.includes(product.name) ? "from" : "to"} wishlist`} aria-pressed={likedProducts.includes(product.name)} onClick={() => setLikedProducts((current) => current.includes(product.name) ? current.filter((name) => name !== product.name) : [...current, product.name])} className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-white/90">
                                    <Heart size={17} strokeWidth={1.6} fill={likedProducts.includes(product.name) ? "#8b4a20" : "none"} color={likedProducts.includes(product.name) ? "#8b4a20" : "currentColor"} />
                                </button>
                            </div>
                            <p className="mt-4 text-[10px] uppercase tracking-[1.5px] text-[#84786f]">{product.category}</p>
                            <div className="mt-1 flex items-start justify-between gap-2">
                                <h3 className="text-sm font-medium">{product.name}</h3>
                                <span className="shrink-0 text-sm">${product.price}.00</span>
                            </div>
                            <button
                                type="button"
                                onClick={() => setCart((cart) => [...cart, { ...product, price: product.price, image: product.image }])}
                                className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-[#6b3b20] hover:text-[#211b17]"
                            >
                                <ShoppingBag size={14} /> Add to bag
                            </button>
                        </article>
                    ))}
                </div>
                <div className="mt-14 flex justify-center">
                    <Link to="/shop" className="inline-flex items-center gap-2 border border-[#211b17] px-6 py-3 text-xs font-medium hover:bg-[#211b17] hover:text-white">
                        Browse the full collection <ArrowRight size={15} />
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default Collection;