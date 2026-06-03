import Image from "next/image";
import phone from "../public/phone.png";

const contactRows = [
  {
    label: "EMAIL",
    href: "mailto:jlc.timbol@gmail.com",
    direction: "left",
  },
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/jaytimbol/",
    direction: "right",
  },
  {
    label: "GITHUB",
    href: "https://github.com/jctimbol",
    direction: "left",
  },
] as const;

const repeatedItems = Array.from({ length: 8 });

function ContactItem({ href, label }: { href: string; label: string }) {
  const externalProps = href.startsWith("mailto:")
    ? {}
    : { target: "_blank", rel: "noopener noreferrer" };

  return (
    <>
      <a className="contact-link" href={href} {...externalProps}>
        {label}
      </a>
      <span className="contact-separator" aria-hidden="true">
        {"\u2022"}
      </span>
    </>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <Image
        src={phone}
        alt=""
        aria-hidden="true"
        className="contact-phone-bg"
      />
      <h1 className="contact-title">contact info</h1>
      <div className="contact-marquees">
        {contactRows.map((row) => (
          <div
            className={`contact-marquee contact-marquee-${row.direction}`}
            key={row.label}
          >
            <div className="contact-track">
              <div className="contact-group">
                {repeatedItems.map((_, index) => (
                  <ContactItem
                    href={row.href}
                    label={row.label}
                    key={`${row.label}-primary-${index}`}
                  />
                ))}
              </div>
              <div className="contact-group" aria-hidden="true">
                {repeatedItems.map((_, index) => (
                  <ContactItem
                    href={row.href}
                    label={row.label}
                    key={`${row.label}-repeat-${index}`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
