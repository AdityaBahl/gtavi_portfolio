import { testimonials } from "@/data/portfolio"

export function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-[#120a20] py-28">
      <div className="section-number">06</div>
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="reveal-up mb-14 flex items-end justify-between" data-reveal>
          <div>
            <p className="eyebrow">Word on the street</p>
            <h2 className="display mt-2 text-6xl sm:text-8xl">
              REP <span className="text-outline-small">SHEET</span>
            </h2>
          </div>
          <span className="hidden font-mono text-xs text-white/25 sm:block">
            06 — TESTIMONIALS
          </span>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <figure
              key={item.name}
              className="testimonial-card reveal-up"
              data-reveal
              style={{ transitionDelay: `${(index % 3) * 90}ms` }}
            >
              <span className="testimonial-quote-mark" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className="testimonial-quote">{item.quote}</blockquote>
              <figcaption className="testimonial-person">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="testimonial-avatar"
                  loading="lazy"
                />
                <div>
                  <p className="testimonial-name">{item.name}</p>
                  <p className="testimonial-role">{item.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
