import Container from "@/components/common/Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-16">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h2 className="text-2xl font-bold text-yellow-400">
              Creative Nexus
            </h2>

            <p className="mt-2 text-slate-400">
              Technology • Creativity • Education
            </p>
          </div>

          <p className="text-slate-500">
            © 2026 Creative Nexus. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}