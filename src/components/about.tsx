// Career start — keeps the "N years of experience" line from going stale.
const CAREER_START = new Date("2023-07-01");

function yearsOfExperience() {
  const years = (Date.now() - CAREER_START.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
  return Math.floor(years);
}

export default function About() {
  const years = yearsOfExperience();
  return (
    <section id="about">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#101820]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div className="space-y-4">
        <p>
          Hi there! I graduated with a Master’s in Computer Applications in 2023, and I’ve been
          solving problems through programming ever since. My route into web development was a
          final-year college project — I had C, C++ and Java behind me, but chose to build a web
          application for my submission. That decision changed everything.
        </p>
        <p>
          I started with PHP, HTML, CSS and JavaScript, then settled into TypeScript and never
          really left. These days I build with React and Next.js on the front, NestJS and Express
          on the back, Expo for mobile, and PostgreSQL or MongoDB underneath — and I deploy and
          maintain the result rather than handing it off.
        </p>
        <p>
          Most recently I’ve been working on the two things that interest me most: automation and
          AI. I write scheduled Playwright pipelines in Python that pull operational data out of
          systems with no API and into Postgres, and I build LLM-backed features — RAG chatbots,
          agents with tool calling, assistants that answer questions over a company’s own data.
          I’ve also spent real time on the infrastructure side: Docker, AWS Lambda, EC2 and S3.
        </p>
        <p>
          With {`${years}+`} years of professional experience, I’ve shipped everything from small
          marketing sites to production systems that businesses run on daily. I’m still at{" "}
          <a className="text-slate-200" href="https://androcoders.in" target="_blank">
            Androcoders
          </a>{" "}
          — deliberately, because the variety of problems there keeps teaching me something. If you
          need anything, reach out via{" "}
          <a href="mailto:saqlainmohd639@gmail.com" className="text-slate-200">
            email
          </a>{" "}
          or my social media.
        </p>
      </div>
    </section>
  );
}
