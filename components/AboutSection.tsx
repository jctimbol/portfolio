import Image from "next/image";
import birds from "../public/birds.png";
import cat from "../public/cat.png";
import phone from "../public/phone.png";
import wings from "../public/wings.png";

export default function AboutSection() {
  return (
    <>
      <section
        className="about-section"
        style={{
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "relative", width: "100vw", minHeight: "100vh" }}>
          <h1
            style={{
              fontFamily: "Miama",
              fontWeight: "normal",
              fontSize: "clamp(4rem, 12vw, 10rem)",
              textAlign: "center",
              margin: 0,
              paddingTop: "4rem",
              WebkitTextStroke: "2px currentColor",
            }}
          >
            about me
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "3rem",
            }}
          >
            <Image
              src={birds}
              alt="Birds"
              style={{
                width: "clamp(430px, 55vw, 1030px)",
                height: "auto",
                marginLeft: "-8vw",
                marginTop: "clamp(-4rem, calc(-8vw + 6rem), 3rem)",
                opacity: 0.95,
              }}
            />
          </div>
          <p className="about-intro-text">
            hi! i&apos;m jay and i&apos;m a 2nd year
            <br />
            software engineering major @ sjsu.
          </p>
          <Image
            src={cat}
            alt="Cat"
            priority
            style={{
              position: "absolute",
              right: "clamp(1.5rem, 4vw, 4rem)",
              bottom: "clamp(-1.75rem, -2.4vw, -0.75rem)",
              width: "clamp(150px, 20vw, 300px)",
              height: "auto",
              zIndex: 2,
            }}
          />
        </div>
      </section>

      <section
        className="about-section"
        style={{
          minHeight: "100vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "clamp(3rem, 8vw, 8rem) clamp(1.5rem, 5vw, 6rem)",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(2rem, 6vw, 6rem)",
            width: "100%",
            maxWidth: "1320px",
          }}
        >
          <div
            style={{
              flex: "1 1 320px",
              maxWidth: "620px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontFamily: "'Charis SIL', serif",
                fontWeight: "bold",
                fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
                letterSpacing: "-0.05em",
                lineHeight: 1.5,
                margin: "0 0 2rem",
                maxWidth: "34ch",
              }}
            >
              i build full-stack systems, incorporating tech like ai/ml,
              networks, and mobile devices.
            </p>
            <Image
              src={phone}
              alt="Phone"
              style={{
                width: "clamp(200px, 42vw, 600px)",
                height: "auto",
                maxHeight: "50vh",
                transform: "scaleX(-1)",
                opacity: 0.95,
              }}
            />
            <p
              style={{
                fontFamily: "'Abyssinica SIL', serif",
                fontSize: "clamp(1.2rem, 1.8vw, 2rem)",
                letterSpacing: "-0.05em",
                lineHeight: 1.5,
                margin: "2rem 0 0",
                textAlign: "center",
              }}
            >
              (i also like making things that look cool)
            </p>
          </div>

          <div
            style={{
              position: "relative",
              flex: "1 1 360px",
              maxWidth: "760px",
            }}
          >
            <Image
              src={wings}
              alt="Wings"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "90vh",
                display: "block",
                opacity: 0.2,
              }}
            />
            <p
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                margin: 0,
                fontFamily: "'Charis SIL', serif",
                fontWeight: "bold",
                fontSize: "clamp(1rem, 1.4vw, 1.6rem)",
                letterSpacing: "-0.05em",
                lineHeight: 1.6,
                textAlign: "center",
                width: "min(34ch, 90%)",
              }}
            >
              currently, i do systems research + tutoring @ sjsu and am an
              incoming ai/ml fellow @ cornell tech!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
