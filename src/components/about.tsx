export default function About() {
  return (
    <section id="about">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#101820]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div className="space-y-4">
        <p>
        Hi there! I graduated with a Master’s in Computer Applications in 2023, and I’ve been passionate about solving problems through programming ever since. My journey into web development began during my final-year college project. Although I had experience with languages like C, C++, and Java, I decided to build a web application for my submission. That decision changed everything.
        </p>
        <p>
        Starting with PHP, HTML, CSS, and JavaScript, I explored the fascinating world of web development. Over time, I honed my skills in modern technologies like React, Next.js, MUI, Node.js, Express, NestJS, and MongoDB. What began as a college project has grown into a fulfilling career.
        </p>
        <p>
        Now, with 2 years of professional experience, I’ve had the opportunity to contribute to projects ranging from simple websites to production-level applications. It’s been an incredible journey, transforming my passion into a rewarding profession.
        </p>
        <p>
          I'm currently working with <a className="text-slate-200" href="https://androcoders.in"  target="_blank">Androcoder</a>.  If you need anything, feel free to reach out to me via my
          <a href="mailto:saqlainmohd639@gmail.com" className="text-slate-200">
            {" "}
            email
          </a>{" "}
          or through my social media.
        </p>
      </div>
    </section>
  );
}
