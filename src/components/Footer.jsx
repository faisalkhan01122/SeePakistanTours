import React from "react";

const socialLinks = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/SeePakistanTours/",
    iconClass: "fab fa-facebook-f",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/see_pakistantours/",
    imgSrc: "https://seepakistantours.com//wp-content/uploads/2019/01/Instagram-Icon.png",
    imgAlt: "Instagram",
  },
  {
    title: "Pinterest",
    href: "https://www.pinterest.com/seepakistantours/",
    iconClass: "fab fa-pinterest-p",
  },
  {
    title: "Twitter",
    href: "https://twitter.com/seepakistantour",
    iconClass: "fab fa-twitter",
  },
];

const menuItems = [
  { href: "https://seepakistantours.com/", label: "Home" },
  { href: "/honeymoon-deals", label: "Honeymoons" },
  { href: "/destination/foreigner-tours", label: "Foreigner Tours" },
  { href: "/destination/1-day-tour", label: "1 Day Tours" },
  { href: "/car-rentals-2/", label: "Car Rentals" },
  // { href: "https://seepakistantours.com/traval-blog/", label: "Blog" },
  { href: "/destinations", label: "Destinations" },
  {
    href: "/destination/azad-kashmir-tours",
    label: "Azad Kashmir Tours",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#8DCDF1] via-[#014f86] to-[#8DCDF1] text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Logo + Description + Social */}
        <div>
          <a href="/">
            <img
              src="https://seepakistantours.com/wp-content/themes/seepakistanvt-child/img/spt-logo-web.png"
              alt="See Pakistan Tours"
              className="w-44 mb-4"
            />
          </a>
          <p className="text-sm text-slate-200 mb-4">
            Explore the beauty of Pakistan with our premium tour services. Trusted by thousands since 2012.
          </p>
          <div className="flex gap-4 mt-3">
            {socialLinks.map(({ title, href, iconClass, imgSrc, imgAlt }) => (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-600 transition"
                title={title}
              >
                {imgSrc ? (
                  <img src={imgSrc} alt={imgAlt} className="w-6 h-6" />
                ) : (
                  <i className={`${iconClass} text-lg`}></i>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-primary-600 pb-2">
            Contact Us
          </h3>
          <p className="text-sm font-medium mb-2 text-primary-600">Speak to our concierge team</p>
          <p className="text-sm mb-2">
            📞{" "}
            <a href="tel:+923480783052" className="hover:text-primary-400 transition">
              +92 348 0783 052 
            </a>
          </p>
          <p className="text-sm mb-5">
            ✉️{" "}
            <a href="mailto:sales@seepakistantours.com" className="hover:text-primary-400 transition">
              sales@seepakistantours.com
            </a>
          </p>
          <address className="text-sm text-slate-200 not-italic leading-relaxed">
            Office E2, 5th Floor, Khalifa Heights,
            <br />
            Chaklala Road near Committee Chowk, Rawalpindi
          </address>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-primary-600 pb-2">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {menuItems.map(({ href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Facebook Reviews */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-primary-600 pb-2">
            Facebook Reviews
          </h3>
          <a
            href="https://www.facebook.com/SeePakistanTours/"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            <img
              src="https://seepakistantours.com/wp-content/uploads/2019/10/spt-facebook-review.png"
              alt="Facebook Customer Reviews"
              className="rounded-xl w-full"
            />
          </a>
          <p className="mt-3 text-sm italic text-slate-200">
            Trusted by thousands of happy travelers.
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-16 text-center text-sm text-slate-300 border-t border-white/10 pt-6">
        <p className="mb-2 max-w-xl mx-auto">
          See Pakistan Tours brings an opportunity to visit Extraordinary Pakistan with supreme tour services. As pioneers of Tour Operators in Pakistan, we’ve offered top-notch services since 2012.
        </p>
        <p>
          <strong>Business Hours:</strong> Mon - Fri: 9am - 7pm | Sat - Sun: 9am - 6pm
        </p>
      </div>
    </footer>
  );
}
