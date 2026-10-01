import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Sparkles, Heart } from "lucide-react";

const values = [
    { icon: Sparkles, title: "Wear it your way", text: "Style should feel personal. We choose versatile pieces that leave room for your point of view." },
    { icon: Leaf, title: "Buy with intention", text: "Thoughtful edits over endless choice: quality-led favourites designed to earn their place." },
    { icon: Heart, title: "Made for real life", text: "Comfort, confidence and a little joy belong in the everyday, not just special occasions." },
];

function About() {
    return (
        <main className="bg-[#faf9f6] text-[#211b17]">
            <section className="relative min-h-[440px] overflow-hidden bg-[#d9c8b8]">
                <img src="/Herobackground.png" alt="A glimpse of the StyleHub collection" className="absolute inset-0 h-full w-full object-cover object-center" />
                <div className="absolute inset-0 bg-[#211b17]/35" />
                <div className="relative mx-auto flex min-h-[440px] max-w-7xl flex-col justify-end px-7 pb-14 sm:px-12 lg:px-20 lg:pb-20">
                    <p className="text-[10px] font-semibold tracking-[3px] text-white">A LITTLE ABOUT US</p>
                    <h1 className="mt-4 max-w-2xl font-serif text-5xl leading-tight text-white sm:text-6xl">A wardrobe should feel like you.</h1>
                    <p className="mt-5 max-w-lg text-sm leading-7 text-white/90">StyleHub is a considered edit of clothing and accessories for the lives we actually live.</p>
                </div>
            </section>

            <section className="mx-auto grid max-w-7xl gap-10 px-7 py-16 sm:px-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:py-24">
                <div>
                    <p className="text-[10px] font-semibold tracking-[2px] text-[#8b4a20]">OUR POINT OF VIEW</p>
                    <h2 className="mt-4 font-serif text-4xl leading-tight">Less noise.<br />More of what works.</h2>
                </div>
                <div className="space-y-5 text-sm leading-7 text-[#6d625b]">
                    <p>Getting dressed is part of every day. We believe the best wardrobe is not the biggest one: it is the one that makes you feel comfortable, confident and entirely yourself.</p>
                    <p>That is why we bring together wearable shapes, thoughtful details and easy-to-style favourites for women and men. From first coffee to last-minute plans, StyleHub is here for the in-between moments as much as the big ones.</p>
                    <Link to="/shop" className="mt-3 inline-flex items-center gap-2 border-b border-[#8b4a20] pb-1 font-medium text-[#8b4a20]">Find your next favourite <ArrowRight size={15} /></Link>
                </div>
            </section>

            <section className="border-y border-[#e6e0da] bg-white">
                <div className="mx-auto max-w-7xl px-7 py-14 sm:px-12 lg:py-16">
                    <div className="mb-10 max-w-lg">
                        <p className="text-[10px] font-semibold tracking-[2px] text-[#8b4a20]">WHAT MATTERS TO US</p>
                        <h2 className="mt-3 font-serif text-3xl">The feeling behind the clothes</h2>
                    </div>
                    <div className="grid gap-9 sm:grid-cols-3 sm:gap-12">
                        {values.map(({ icon: Icon, title, text }) => (
                            <article key={title} className="border-t border-[#d9cec4] pt-5">
                                <Icon size={21} strokeWidth={1.5} className="text-[#8b4a20]" />
                                <h3 className="mt-5 text-sm font-semibold">{title}</h3>
                                <p className="mt-2 text-sm leading-6 text-[#756b64]">{text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default About;