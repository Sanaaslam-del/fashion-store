import { useState } from "react";
import { Mail, MapPin, Phone, ArrowRight, Check } from "lucide-react";

function Contact() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setSubmitted(true);
        event.currentTarget.reset();
    }

    return (
        <main className="min-h-[70vh] bg-[#faf9f6] text-[#211b17]">
            <section className="border-b border-[#e6e0da] bg-[#eee7df] px-7 py-14 sm:px-12 sm:py-20">
                <div className="mx-auto max-w-7xl">
                    <p className="text-[10px] font-semibold tracking-[3px] text-[#8b4a20]">WE'RE HERE FOR YOU</p>
                    <h1 className="mt-4 font-serif text-5xl sm:text-6xl">Let's talk.</h1>
                    <p className="mt-5 max-w-lg text-sm leading-7 text-[#6d625b]">A question about your order, sizing, or just need a hand? Send us a note and our team will get back to you.</p>
                </div>
            </section>

            <section className="mx-auto grid max-w-7xl gap-14 px-7 py-14 sm:px-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24 lg:py-20">
                <aside>
                    <h2 className="font-serif text-2xl">Good to know</h2>
                    <p className="mt-3 text-sm leading-6 text-[#756b64]">Our customer care team is around Monday to Friday, 9am–5pm.</p>
                    <div className="mt-8 space-y-6">
                        <a href="mailto:support@stylehub.com" className="flex items-start gap-4 text-sm hover:text-[#8b4a20]">
                            <Mail size={18} strokeWidth={1.6} className="mt-0.5 text-[#8b4a20]" />
                            <span><span className="block font-medium">Email us</span><span className="mt-1 block text-[#756b64]">support@stylehub.com</span></span>
                        </a>
                        <a href="tel:+923001234567" className="flex items-start gap-4 text-sm hover:text-[#8b4a20]">
                            <Phone size={18} strokeWidth={1.6} className="mt-0.5 text-[#8b4a20]" />
                            <span><span className="block font-medium">Call us</span><span className="mt-1 block text-[#756b64]">+92 300 1234567</span></span>
                        </a>
                        <div className="flex items-start gap-4 text-sm">
                            <MapPin size={18} strokeWidth={1.6} className="mt-0.5 text-[#8b4a20]" />
                            <span><span className="block font-medium">Based in</span><span className="mt-1 block text-[#756b64]">Pakistan</span></span>
                        </div>
                    </div>
                </aside>

                <form onSubmit={handleSubmit} onChange={() => setSubmitted(false)} className="space-y-5">
                    {submitted && <p role="status" className="flex items-center gap-2 border border-[#c8d6c7] bg-[#eff4ed] px-4 py-3 text-sm text-[#39543b]"><Check size={17} /> Thanks for reaching out. Your message is ready for our team.</p>}
                    <div className="grid gap-5 sm:grid-cols-2">
                        <label className="text-xs font-medium">Your name<input required name="name" autoComplete="name" className="mt-2 block w-full border border-[#d9d0c8] bg-white px-4 py-3 text-sm outline-none focus:border-[#8b4a20]" placeholder="Name" /></label>
                        <label className="text-xs font-medium">Email address<input required type="email" name="email" autoComplete="email" className="mt-2 block w-full border border-[#d9d0c8] bg-white px-4 py-3 text-sm outline-none focus:border-[#8b4a20]" placeholder="you@example.com" /></label>
                    </div>
                    <label className="block text-xs font-medium">Subject<input required name="subject" className="mt-2 block w-full border border-[#d9d0c8] bg-white px-4 py-3 text-sm outline-none focus:border-[#8b4a20]" placeholder="What can we help with?" /></label>
                    <label className="block text-xs font-medium">Your message<textarea required name="message" rows="5" className="mt-2 block w-full resize-y border border-[#d9d0c8] bg-white px-4 py-3 text-sm outline-none focus:border-[#8b4a20]" placeholder="Tell us a little more..." /></label>
                    <button type="submit" className="inline-flex items-center gap-3 bg-[#3a2118] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#5b3829]">Send message <ArrowRight size={16} /></button>
                    <p className="text-xs text-[#82776f]">This demo form shows an on-page confirmation; message delivery is not connected yet.</p>
                </form>
            </section>
        </main>
    );
}

export default Contact;