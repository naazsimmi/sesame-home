import {
  Hammer,
  Leaf,
  Menu,
  Shield,
  ShoppingCart,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { SiFacebook, SiInstagram, SiPinterest } from "react-icons/si";

function useFadeInOnScroll() {
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in-section");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        }
      },
      { threshold: 0.1 },
    );
    for (const s of sections) observer.observe(s);
    return () => observer.disconnect();
  }, []);
}

const categories = [
  {
    label: "Living Room",
    image: "/assets/generated/cat-living.dim_600x700.jpg",
  },
  { label: "Dining", image: "/assets/generated/cat-dining.dim_600x700.jpg" },
  { label: "Bedroom", image: "/assets/generated/cat-bedroom.dim_600x700.jpg" },
  { label: "Outdoor", image: "/assets/generated/cat-outdoor.dim_600x700.jpg" },
];

const products = [
  {
    name: "Aria Linen Sofa",
    price: "$1,290",
    desc: "Deep-seated comfort with solid oak legs and premium linen upholstery.",
    image: "/assets/generated/product-sofa.dim_600x500.jpg",
  },
  {
    name: "Oslo Dining Table",
    price: "$890",
    desc: "Hand-finished oak with a live-edge top. Seats up to 6 comfortably.",
    image: "/assets/generated/product-table.dim_600x500.jpg",
  },
  {
    name: "Haven Platform Bed",
    price: "$1,450",
    desc: "Walnut frame, linen headboard, and a cloud-like sleep surface.",
    image: "/assets/generated/product-bed.dim_600x500.jpg",
  },
  {
    name: "Croft Open Shelving",
    price: "$640",
    desc: "Modular solid oak shelves with an open, airy Scandinavian silhouette.",
    image: "/assets/generated/product-shelf.dim_600x500.jpg",
  },
];

const galleryImages = [
  { src: "/assets/generated/gallery-1.dim_400x400.jpg", id: "g1" },
  { src: "/assets/generated/gallery-2.dim_400x500.jpg", id: "g2" },
  { src: "/assets/generated/gallery-3.dim_400x400.jpg", id: "g3" },
  { src: "/assets/generated/gallery-4.dim_400x500.jpg", id: "g4" },
  { src: "/assets/generated/gallery-5.dim_400x400.jpg", id: "g5" },
  { src: "/assets/generated/gallery-6.dim_400x400.jpg", id: "g6" },
];

const reviews = [
  {
    name: "Priya M.",
    location: "Mumbai, India",
    text: "The Aria Sofa transformed our living room completely. The quality is exceptional — you can feel the craftsmanship in every detail.",
    stars: 5,
  },
  {
    name: "James T.",
    location: "London, UK",
    text: "Our Oslo dining table is the centrepiece of every dinner party. Guests always ask where we got it. Sesame Home never disappoints.",
    stars: 5,
  },
  {
    name: "Ananya R.",
    location: "Bangalore, India",
    text: "Fast delivery, impeccable packaging, and the Haven Bed is even more beautiful in person. I'm ordering the nightstands next.",
    stars: 5,
  },
  {
    name: "Marco S.",
    location: "Milan, Italy",
    text: "Sustainable, beautiful, and built to last. These pieces will be heirlooms. Sesame Home is my only furniture brand now.",
    stars: 4,
  },
];

const usps = [
  {
    Icon: Leaf,
    title: "Sustainable Materials",
    desc: "FSC-certified woods and natural textiles sourced responsibly.",
  },
  {
    Icon: Hammer,
    title: "Handcrafted Quality",
    desc: "Every joint, curve, and finish shaped by skilled artisans.",
  },
  {
    Icon: Shield,
    title: "Durable & Long-lasting",
    desc: "Built to endure decades, not seasons. Heirloom-grade construction.",
  },
  {
    Icon: Sparkles,
    title: "Elegant Designs",
    desc: "Timeless aesthetics that transcend trends and complement any home.",
  },
];

const STAR_KEYS = ["s1", "s2", "s3", "s4", "s5"];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {STAR_KEYS.map((k, i) => (
        <Star
          key={k}
          className={`w-4 h-4 ${i < count ? "fill-oak text-oak" : "fill-warmgray text-warmgray"}`}
        />
      ))}
    </div>
  );
}

const GALLERY_OCIDS = [
  "gallery.item.1",
  "gallery.item.2",
  "gallery.item.3",
  "gallery.item.4",
  "gallery.item.5",
  "gallery.item.6",
];

export default function App() {
  useFadeInOnScroll();
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [enquirySent, setEnquirySent] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleEnquirySubmit(e: React.FormEvent) {
    e.preventDefault();
    setEnquirySent(true);
  }

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    setSubscribed(true);
  }

  const navLinks = ["Home", "Sofas", "Dining", "Bedroom", "Outdoor"];

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* STICKY NAV */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navScrolled ? "bg-white shadow-warm" : "bg-transparent"}`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
          <a
            href="#home"
            className={`font-serif text-lg lg:text-xl font-semibold tracking-[0.18em] uppercase transition-colors ${navScrolled ? "text-charcoal" : "text-white"}`}
            data-ocid="nav.link"
          >
            Sesame Home
          </a>
          <ul className="hidden lg:flex gap-8 items-center">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className={`text-xs font-medium uppercase tracking-widest transition-colors hover:text-oak ${navScrolled ? "text-charcoal" : "text-white/90"}`}
                  data-ocid="nav.link"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <button
              className={`transition-colors ${navScrolled ? "text-charcoal" : "text-white"} hover:text-oak`}
              aria-label="Cart"
              data-ocid="nav.button"
              type="button"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button
              type="button"
              className={`lg:hidden transition-colors ${navScrolled ? "text-charcoal" : "text-white"}`}
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen((v) => !v)}
              data-ocid="nav.toggle"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-border px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs font-medium uppercase tracking-widest text-charcoal hover:text-oak transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                data-ocid="nav.link"
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-bg.dim_1920x800.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <p className="text-xs font-medium uppercase tracking-[0.25em] mb-5 bg-oak/80 inline-block px-4 py-1.5">
            Flat 20% Off on New Arrivals
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-semibold leading-tight mb-6 uppercase tracking-wide">
            Transform Your Home with Timeless Furniture
          </h1>
          <p className="text-base sm:text-lg font-light text-white/80 mb-10 tracking-wide">
            Handcrafted quality. Sustainable materials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#bestsellers"
              className="px-8 py-3.5 bg-white text-charcoal text-xs font-semibold uppercase tracking-widest border border-white hover:bg-bone transition-colors"
              data-ocid="hero.primary_button"
            >
              Shop Now
            </a>
            <a
              href="#categories"
              className="px-8 py-3.5 bg-transparent text-white text-xs font-semibold uppercase tracking-widest border border-white/70 hover:bg-white/10 transition-colors"
              data-ocid="hero.secondary_button"
            >
              Explore Collection
            </a>
          </div>
        </div>
      </section>

      {/* SHOP BY SPACE */}
      <section id="categories" className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12 fade-in-section">
            <p className="text-xs uppercase tracking-[0.25em] text-softgray mb-2">
              Browse
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold uppercase tracking-wide text-charcoal">
              Shop by Space
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 fade-in-section">
            {categories.map((cat, i) => (
              <div
                key={cat.label}
                className={`relative overflow-hidden group cursor-pointer stagger-${i + 1}`}
                style={{ aspectRatio: "4/5" }}
                data-ocid={`categories.item.${i + 1}`}
              >
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-serif text-xl font-medium uppercase tracking-wider">
                    {cat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section id="bestsellers" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12 fade-in-section">
            <p className="text-xs uppercase tracking-[0.25em] text-softgray mb-2">
              Featured
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold uppercase tracking-wide text-charcoal">
              Best Sellers
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 fade-in-section">
            {products.map((product, i) => (
              <div
                key={product.name}
                className={`group bg-background border border-border hover:shadow-lift transition-all duration-300 hover:-translate-y-1 stagger-${i + 1}`}
                data-ocid={`products.item.${i + 1}`}
              >
                <div className="overflow-hidden aspect-[5/4]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-medium text-charcoal mb-1">
                    {product.name}
                  </h3>
                  <p className="text-oak font-semibold text-sm mb-2">
                    {product.price}
                  </p>
                  <p className="text-softgray text-xs leading-relaxed mb-4">
                    {product.desc}
                  </p>
                  <button
                    type="button"
                    className="w-full py-2.5 text-xs font-semibold uppercase tracking-widest border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-colors"
                    data-ocid={`products.button.${i + 1}`}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND STORY + USP */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mx-auto text-center mb-16 fade-in-section">
            <p className="text-xs uppercase tracking-[0.25em] text-softgray mb-2">
              Our Story
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold uppercase tracking-wide text-charcoal mb-6">
              Crafted with Intent
            </h2>
            <p className="text-softgray leading-relaxed text-sm">
              Sesame Home was born from a belief that furniture should tell a
              story — of the forests it comes from, the hands that shaped it,
              and the homes it inhabits. Every piece is designed to outlast
              trends, crafted with materials that respect the planet, and
              finished with an attention to detail that only comes from genuine
              care.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 fade-in-section">
            {usps.map(({ Icon, title, desc }, i) => (
              <div key={title} className={`text-center stagger-${i + 1}`}>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-oak/10 mb-4">
                  <Icon className="w-6 h-6 text-oak" />
                </div>
                <h3 className="font-serif text-base font-semibold text-charcoal mb-2">
                  {title}
                </h3>
                <p className="text-softgray text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOOKBOOK GALLERY */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12 fade-in-section">
            <p className="text-xs uppercase tracking-[0.25em] text-softgray mb-2">
              Inspiration
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold uppercase tracking-wide text-charcoal">
              Lookbook
            </h2>
          </div>
          <div className="columns-2 lg:columns-3 gap-4 space-y-4 fade-in-section">
            {galleryImages.map(({ src, id }, i) => (
              <div
                key={id}
                className="overflow-hidden group break-inside-avoid"
                data-ocid={GALLERY_OCIDS[i]}
              >
                <img
                  src={src}
                  alt={`Lookbook scene ${i + 1}`}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12 fade-in-section">
            <p className="text-xs uppercase tracking-[0.25em] text-softgray mb-2">
              Testimonials
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold uppercase tracking-wide text-charcoal">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 fade-in-section">
            {reviews.map((review, i) => (
              <div
                key={review.name}
                className={`bg-white border border-border p-6 flex flex-col gap-3 stagger-${i + 1}`}
                data-ocid={`reviews.item.${i + 1}`}
              >
                <Stars count={review.stars} />
                <p className="text-softgray text-sm leading-relaxed flex-1">
                  “{review.text}”
                </p>
                <div>
                  <p className="font-medium text-charcoal text-sm">
                    {review.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {review.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-20 lg:py-28 bg-white">
        <div className="max-w-2xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-10 fade-in-section">
            <p className="text-xs uppercase tracking-[0.25em] text-softgray mb-2">
              Contact
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold uppercase tracking-wide text-charcoal">
              Get In Touch
            </h2>
          </div>
          <div className="bg-background border border-border p-8 shadow-warm fade-in-section">
            {enquirySent ? (
              <div
                className="text-center py-10"
                data-ocid="contact.success_state"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-oak/10 mb-4">
                  <Sparkles className="w-7 h-7 text-oak" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                  Thank you!
                </h3>
                <p className="text-softgray text-sm">
                  We’ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleEnquirySubmit}
                className="flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs uppercase tracking-widest text-charcoal mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={enquiryForm.name}
                      onChange={(e) =>
                        setEnquiryForm((p) => ({ ...p, name: e.target.value }))
                      }
                      className="w-full bg-white border border-border px-4 py-2.5 text-sm text-charcoal placeholder-muted-foreground focus:outline-none focus:border-oak transition-colors"
                      placeholder="Your name"
                      data-ocid="contact.input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs uppercase tracking-widest text-charcoal mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={enquiryForm.email}
                      onChange={(e) =>
                        setEnquiryForm((p) => ({ ...p, email: e.target.value }))
                      }
                      className="w-full bg-white border border-border px-4 py-2.5 text-sm text-charcoal placeholder-muted-foreground focus:outline-none focus:border-oak transition-colors"
                      placeholder="your@email.com"
                      data-ocid="contact.input"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-xs uppercase tracking-widest text-charcoal mb-1.5"
                  >
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={enquiryForm.phone}
                    onChange={(e) =>
                      setEnquiryForm((p) => ({ ...p, phone: e.target.value }))
                    }
                    className="w-full bg-white border border-border px-4 py-2.5 text-sm text-charcoal placeholder-muted-foreground focus:outline-none focus:border-oak transition-colors"
                    placeholder="+91 98765 43210"
                    data-ocid="contact.input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs uppercase tracking-widest text-charcoal mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={enquiryForm.message}
                    onChange={(e) =>
                      setEnquiryForm((p) => ({ ...p, message: e.target.value }))
                    }
                    className="w-full bg-white border border-border px-4 py-2.5 text-sm text-charcoal placeholder-muted-foreground focus:outline-none focus:border-oak transition-colors resize-none"
                    placeholder="Tell us about your space..."
                    data-ocid="contact.textarea"
                  />
                </div>
                <button
                  type="submit"
                  className="py-3 px-8 bg-charcoal text-white text-xs font-semibold uppercase tracking-widest hover:bg-oak transition-colors self-start"
                  data-ocid="contact.submit_button"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* PROMO BANNER */}
      <section className="py-20 lg:py-28 bg-promo">
        <div className="max-w-2xl mx-auto px-6 lg:px-10 text-center fade-in-section">
          <p className="text-xs uppercase tracking-[0.25em] text-oak mb-3">
            Exclusive Offer
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-white uppercase tracking-wide mb-4">
            Get 10% Off Your First Order
          </h2>
          <p className="text-white/60 text-sm mb-8">
            Join our community and receive curated design inspiration, early
            access to new collections, and your welcome discount.
          </p>
          {subscribed ? (
            <p
              className="text-oak font-medium tracking-wide"
              data-ocid="promo.success_state"
            >
              ✓ Welcome aboard! Check your inbox for your discount code.
            </p>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 px-5 py-3 text-sm focus:outline-none focus:border-oak transition-colors max-w-sm"
                data-ocid="promo.input"
              />
              <button
                type="submit"
                className="px-7 py-3 bg-oak text-white text-xs font-semibold uppercase tracking-widest hover:bg-oak/80 transition-colors whitespace-nowrap"
                data-ocid="promo.submit_button"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <h3 className="font-serif text-xl font-semibold tracking-[0.15em] uppercase text-charcoal mb-4">
                Sesame Home
              </h3>
              <p className="text-softgray text-xs leading-relaxed mb-6">
                Thoughtfully designed furniture crafted from sustainable
                materials — built to transform your home and last a lifetime.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  aria-label="Instagram"
                  className="text-softgray hover:text-oak transition-colors"
                  data-ocid="footer.link"
                >
                  <SiInstagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  aria-label="Facebook"
                  className="text-softgray hover:text-oak transition-colors"
                  data-ocid="footer.link"
                >
                  <SiFacebook className="w-4 h-4" />
                </a>
                <a
                  href="https://pinterest.com"
                  aria-label="Pinterest"
                  className="text-softgray hover:text-oak transition-colors"
                  data-ocid="footer.link"
                >
                  <SiPinterest className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-charcoal mb-4">
                Shop
              </h4>
              <ul className="flex flex-col gap-2">
                {[
                  "Living Room",
                  "Dining",
                  "Bedroom",
                  "Outdoor",
                  "New Arrivals",
                  "Best Sellers",
                ].map((l) => (
                  <li key={l}>
                    <a
                      href="#categories"
                      className="text-xs text-softgray hover:text-charcoal transition-colors"
                      data-ocid="footer.link"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-charcoal mb-4">
                Company
              </h4>
              <ul className="flex flex-col gap-2">
                {[
                  "Our Story",
                  "Sustainability",
                  "Craftsmanship",
                  "Press",
                  "Careers",
                  "Contact",
                ].map((l) => (
                  <li key={l}>
                    <a
                      href="#contact"
                      className="text-xs text-softgray hover:text-charcoal transition-colors"
                      data-ocid="footer.link"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-charcoal mb-4">
                Contact
              </h4>
              <address className="not-italic flex flex-col gap-2">
                <p className="text-xs text-softgray">
                  12 Artisan Lane, Design District
                </p>
                <p className="text-xs text-softgray">
                  Mumbai, Maharashtra 400001
                </p>
                <a
                  href="mailto:hello@sesamehome.com"
                  className="text-xs text-softgray hover:text-charcoal transition-colors"
                >
                  hello@sesamehome.com
                </a>
                <a
                  href="tel:+919876543210"
                  className="text-xs text-softgray hover:text-charcoal transition-colors"
                >
                  +91 98765 43210
                </a>
              </address>
            </div>
          </div>
          <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Sesame Home. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Built with ♥ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-charcoal transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
