import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

export default function WhoWeAre() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          title="Who We Are"
          subtitle="Creative Nexus is an African creative and technology platform committed to empowering individuals, educators, businesses, and organizations through innovation, education, and creativity."
        />

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-yellow-400">
              Our Mission
            </h3>

            <p className="mt-4 leading-8 text-slate-300">
              We create practical digital solutions, educational resources,
              and creative experiences that inspire growth, solve problems,
              and unlock opportunities.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-yellow-400">
              Our Vision
            </h3>

            <p className="mt-4 leading-8 text-slate-300">
              To become Africa's leading multidisciplinary platform where
              technology, creativity, and education work together to transform
              communities and empower the next generation.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}