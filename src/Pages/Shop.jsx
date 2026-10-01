import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Search, ShoppingBag, SlidersHorizontal } from "lucide-react";

const products = [
    { name: "The Sunday Dress", category: "Women", type: "Dresses", price: 68, oldPrice: 86, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85" },
    { name: "Weekend Overshirt", category: "Men", type: "Outerwear", price: 82, oldPrice: 105, image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=85" },
    { name: "The Everyday Tote", category: "Accessories", type: "Bags", price: 58, oldPrice: 74, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85" },
    { name: "Florence Midi", category: "Women", type: "Dresses", price: 76, oldPrice: 95, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85" },
    { name: "Relaxed Denim", category: "Men", type: "Denim", price: 64, oldPrice: 82, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85" },
    { name: "Weekend Frames", category: "Accessories", type: "Accessories", price: 36, oldPrice: 48, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85" },
    { name: "Soft Structure Blazer", category: "Women", type: "New arrivals", price: 94, oldPrice: 120, image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=900&q=85" },
    { name: "Everyday White Tee", category: "Men", type: "Essentials", price: 28, oldPrice: 36, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85" },
    { name: "Soft Leather Crossbody", category: "Accessories", type: "Bags", price: 72, oldPrice: 92, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85" },
    { name: "Everyday Knit Top", category: "Women", type: "Knitwear", price: 42, oldPrice: 56, image: "https://images.unsplash.com/photo-1564257577-d18b1bf6e7f8?auto=format&fit=crop&w=900&q=85" },
    { name: "City Low Sneakers", category: "Men", type: "Footwear", price: 78, oldPrice: 98, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85" },
    { name: "City Walker", category: "Accessories", type: "Footwear", price: 78, oldPrice: 98, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85" },
];

const categories = ["All pieces", "Women", "Men", "Accessories"];

function Shop({ setCart }) {
    const [activeCategory, setActiveCategory] = useState("All pieces");
    const [search, setSearch] = useState("");
    const [sortOrder, setSortOrder] = useState("featured");
    const [likedProducts, setLikedProducts] = useState([]);

    const visibleProducts = useMemo(() => {
        const matching = products.filter((product) =>
            (activeCategory === "All pieces" || product.category === activeCategory) &&
            `${product.name} ${product.type}`.toLowerCase().includes(search.toLowerCase())
        );

        if (sortOrder === "low") return matching.sort((first, second) => first.price - second.price);
        if (sortOrder === "high") return matching.sort((first, second) => second.price - first.price);
        return matching;
    }, [activeCategory, search, sortOrder]);

    return (
        <main className="bg-[#faf9f6] text-[#211b17]">
            <section className="relative isolate grid min-h-[500px] overflow-hidden bg-[#efe7dd] md:grid-cols-2">
                <img src="/Herobackground.png" alt="" aria-hidden="true" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                <div className="flex items-center px-7 py-14 sm:px-12 lg:px-20">
                    <div className="max-w-lg">
                        <p className="text-[10px] font-semibold tracking-[3px] text-[#6f432e]">THE STYLEHUB EDIT / 01</p>
                        <h1 className="mt-5 max-w-lg font-serif text-5xl leading-[1.06] sm:text-6xl">Find the pieces that feel like you.</h1>
                        <p className="mt-5 max-w-md text-sm leading-7 text-[#4b4541]">A thoughtful mix of everyday favourites, fresh arrivals and finishing touches.</p>
                        <a href="#shop-grid" className="mt-7 inline-flex w-fit items-center gap-2 bg-[#3a2118] px-6 py-3.5 text-sm font-medium text-white hover:bg-[#5b3829]">Explore the edit <ArrowRight size={16} /></a>
                    </div>
                </div>
                <div className="flex min-h-[300px] items-end justify-center px-4 pt-4 md:min-h-[500px]">
                    <img src="/girl.png" alt="StyleHub seasonal fashion look" className="max-h-[490px] max-w-full object-contain object-bottom" />
                </div>
            </section>

            <section className="border-b border-[#e6e0da] bg-white">
                <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 py-6 sm:grid-cols-4 sm:px-10">
                    {[["01", "Thoughtful edits"], ["02", "Easy everyday style"], ["03", "Secure checkout"], ["04", "30-day returns"]].map(([number, label]) => (
                        <div key={number} className="flex items-center gap-3 border-[#e6e0da] px-2 py-3 sm:border-r sm:px-5 last:border-0">
                            <span className="font-serif text-xl text-[#a6785c]">{number}</span><span className="text-xs text-[#62574f]">{label}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section id="shop-grid" className="mx-auto max-w-7xl px-5 py-12 sm:px-10 lg:py-16">
                <div className="flex flex-col justify-between gap-6 border-b border-[#e6e0da] pb-6 lg:flex-row lg:items-end">
                    <div>
                        <p className="text-[10px] font-semibold tracking-[2px] text-[#8b4a20]">SHOP THE COLLECTION</p>
                        <h2 className="mt-2 font-serif text-3xl">Good things, gathered</h2>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                        <label className="relative block">
                            <span className="sr-only">Search products</span>
                            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#84786f]" />
                            <input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search pieces" className="w-full border border-[#d9d0c8] bg-white py-2.5 pl-9 pr-3 text-xs outline-none focus:border-[#8b4a20] sm:w-48" />
                        </label>
                        <label className="flex items-center gap-2 border border-[#d9d0c8] bg-white px-3">
                            <SlidersHorizontal size={15} className="text-[#84786f]" />
                            <span className="sr-only">Sort products</span>
                            <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value)} className="bg-transparent py-2.5 text-xs outline-none">
                                <option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option>
                            </select>
                        </label>
                    </div>
                </div>

                <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
                    {categories.map((category) => (
                        <button key={category} type="button" onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category} className={`shrink-0 border px-4 py-2 text-xs transition ${activeCategory === category ? "border-[#3a2118] bg-[#3a2118] text-white" : "border-[#d9d0c8] bg-white hover:border-[#3a2118]"}`}>
                            {category}
                        </button>
                    ))}
                </div>

                <p className="mt-6 text-xs text-[#756b64]">Showing {visibleProducts.length} {visibleProducts.length === 1 ? "piece" : "pieces"}</p>
                {visibleProducts.length > 0 ? (
                    <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-9 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4">
                        {visibleProducts.map((product) => (
                            <article key={product.name} className="group">
                                <div className="relative aspect-[4/5] overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/Herobackground.png')" }}>
                                    <img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-cover mix-blend-multiply transition duration-500 group-hover:scale-[1.04]" />
                                    <span className="absolute left-3 top-3 bg-white/90 px-2.5 py-1.5 text-[9px] uppercase tracking-[1px]">New edit</span>
                                    <button type="button" aria-label={`${likedProducts.includes(product.name) ? "Remove" : "Add"} ${product.name} ${likedProducts.includes(product.name) ? "from" : "to"} wishlist`} aria-pressed={likedProducts.includes(product.name)} onClick={() => setLikedProducts((current) => current.includes(product.name) ? current.filter((name) => name !== product.name) : [...current, product.name])} className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-white/90">
                                        <Heart size={17} strokeWidth={1.6} fill={likedProducts.includes(product.name) ? "#8b4a20" : "none"} color={likedProducts.includes(product.name) ? "#8b4a20" : "currentColor"} />
                                    </button>
                                </div>
                                <p className="mt-4 text-[10px] uppercase tracking-[1.5px] text-[#84786f]">{product.category} / {product.type}</p>
                                <div className="mt-1 flex items-start justify-between gap-2"><h3 className="text-sm font-medium">{product.name}</h3><span className="shrink-0 text-sm">${product.price}.00</span></div>
                                <p className="mt-1 text-xs text-[#9c9189] line-through">${product.oldPrice}.00</p>
                                <button type="button" onClick={() => setCart((cart) => [...cart, { ...product, price: product.price, image: product.image }])} className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-[#6b3b20] hover:text-[#211b17]"><ShoppingBag size={14} /> Add to bag</button>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center"><p className="font-serif text-2xl">No pieces found</p><p className="mt-2 text-sm text-[#756b64]">Try another search or category.</p></div>
                )}
            </section>

            <section className="relative mx-5 mb-14 min-h-[250px] overflow-hidden bg-[#403329] sm:mx-10 lg:mx-auto lg:max-w-7xl">
                <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1500&q=85" alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-35" />
                <div className="relative flex min-h-[250px] flex-col justify-center px-7 py-10 sm:px-12 lg:px-16">
                    <p className="text-[10px] font-semibold tracking-[2px] text-white/75">A GOOD PLACE TO START</p>
                    <h2 className="mt-3 max-w-lg font-serif text-4xl text-white">Find your kind of style.</h2>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <Link to="/women" className="bg-white px-5 py-3 text-xs font-medium text-[#211b17]">Shop Women</Link>
                        <Link to="/men" className="border border-white/70 px-5 py-3 text-xs font-medium text-white">Shop Men</Link>
                        <Link to="/accessories" className="border border-white/70 px-5 py-3 text-xs font-medium text-white">Accessories</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Shop;