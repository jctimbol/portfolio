export default function AboutSection() {
  return (
    <>
      <section
        id="about"
        className="about-section"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "clamp(3rem, 8vw, 8rem) clamp(1.5rem, 5vw, 6rem)",
          boxSizing: "border-box",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "Miama",
            fontWeight: "normal",
            fontSize: "clamp(4rem, 12vw, 10rem)",
            margin: 0,
            WebkitTextStroke: "2px currentColor",
          }}
        >
          about me
        </h1>
        <p
          style={{
            fontFamily: "'Abyssinica SIL', serif",
            fontSize: "clamp(1.4rem, 2vw, 2.4rem)",
            letterSpacing: "-0.05em",
            lineHeight: 1.6,
            margin: "3rem 0 0",
            maxWidth: "36ch",
          }}
        >
          hi! i&apos;m jay and i&apos;m a 2nd year
          <br />
          software engineering major @ sjsu.
        </p>
      </section>

      <section
        className="about-section"
        style={{
          minHeight: "100vh",
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
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            width: "100%",
            maxWidth: "760px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Charis SIL', serif",
              fontWeight: "bold",
              fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
              letterSpacing: "-0.05em",
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            i build full-stack systems, incorporating tech like ai/ml,
            networks, and mobile devices.
          </p>
          <p
            style={{
              fontFamily: "'Charis SIL', serif",
              fontWeight: "bold",
              fontSize: "clamp(1rem, 1.4vw, 1.6rem)",
              letterSpacing: "-0.05em",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            currently, i do systems research + tutoring @ sjsu and am an
            incoming ai/ml fellow @ cornell tech!
          </p>
          <p
            style={{
              fontFamily: "'Abyssinica SIL', serif",
              fontSize: "clamp(1.2rem, 1.8vw, 2rem)",
              letterSpacing: "-0.05em",
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            (i also like making things that look cool)
          </p>
        </div>
      </section>
    </>
  );
}
