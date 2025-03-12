export const metadata = {
  title: "About",
  description: "About me",
};

export default function Page() {
  return (
    <section className="flex flex-col items-center py-16 px-6 min-h-screen bg-gray-900 text-white">
      <h1 className="font-semibold text-4xl mb-6 text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-pink-600 transform transition-all duration-500 hover:scale-110 hover:rotate-6">
        About Me
      </h1>
      {/* Image */}
      <div className="mb-8 relative">
        <img
          src="/images/p.png"
          alt="Woody Wu"
          className="w-48 h-48 object-cover rounded-full border-4 border-teal-400 shadow-xl transform transition-all duration-500 hover:scale-110 hover:rotate-6"
        />
      </div>
      <div className="max-w-3xl mb-8">
        <p className="text-xl mb-6 tracking-wide leading-relaxed opacity-80 transform transition-all duration-500 hover:scale-105 hover:text-teal-400">
          Hi, I'm <span className="font-bold text-teal-400">Woody Wu</span>, a
          passionate software developer with a deep interest in technology,
          problem-solving, and continuous improvement. I specialise in creating
          solutions that make a real-world impact, and I enjoy collaborating
          with teams to build high-quality, scalable systems.
        </p>

        <p className="text-xl mb-6 tracking-wide leading-relaxed opacity-80 transform transition-all duration-500 hover:scale-105 hover:text-teal-400">
          With a strong foundation in Physics and experience in developing web
          tools and systems for government services and aviation, I focus on
          delivering results through efficient, well-executed designs. I am also
          passionate about learning new technologies and frameworks to stay
          ahead in this ever-evolving field.
        </p>

        <p className="text-xl mb-6 tracking-wide leading-relaxed opacity-80 transform transition-all duration-500 hover:scale-105 hover:text-teal-400">
          As an avid long-distance runner, I apply the same determination and
          perseverance to my professional life. Every challenge is an
          opportunity to grow, and I thrive when pushing myself beyond limits.
        </p>
      </div>

      <div className="flex justify-center gap-8">
        <button className="px-6 py-3 bg-teal-600 text-white text-lg rounded-lg shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-teal-700 hover:shadow-xl">
          <a href="/experience">View Work Experience & Education</a>
        </button>
        <button className="px-6 py-3 bg-gray-700 text-white text-lg rounded-lg shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-gray-800 hover:shadow-xl">
          <a href="/activity">Beyond Work</a>
        </button>
      </div>

      <section className="py-16 px-6 min-h-screen bg-gray-900 text-white">
        <h1 className="font-semibold text-4xl mb-6 text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-pink-600 transform transition-all duration-500 hover:scale-110 hover:rotate-6">
          My Journey
        </h1>

        <div className="relative flex flex-col items-start max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 h-full w-1 bg-teal-400"></div>

          {/* Timeline Items */}
          {[
            {
              year: "2015 Sept",
              title: "Started at CUHK",
              description:
                "BSc. in Physics at the Chinese University of Hong Kong.",
              link: "/experience",
            },
            {
              year: "2018 Jan",
              title: "Gap Year: Intern at Hong Kong Observatory",
              description: "Worked on weather forecasting improvements.",
              link: "/experience",
            },
            {
              year: "2020 Apr",
              title: "Final Year Project at Wu Yee Sun College, CUHK",
              description: "Received the Best Final Year Project Award.",
              link: "/activity",
            },
            {
              year: "2020 Jul",
              title: "Graduated with BSc. in Physics",
              description:
                "Earned my undergraduate degree in Physics with Upper Second-Class Honours.",
              link: "/experience",
            },
            {
              year: "2020 Sept",
              title: "Started MSc. in Physics",
              description:
                "Specialised in Computational Astrophysical Fluid Dynamics.",
              link: "/experience",
            },
            {
              year: "2021 Jul",
              title: "Graduated with MSc. in Physics",
              description: "Completed my master’s degree.",
              link: "/experience",
            },

            {
              year: "2021 Jul",
              title: "Joined Automated Systems (H.K.) Limited",
              description:
                "Started as a Graduate Trainee, working on projects for the Inland Revenue Department and Education Bureau.",
              link: "/experience",
            },
            {
              year: "2021 Sept",
              title: "Tuen Ma Run Event",
              description:
                "Organised and completed the Tuen Ma Line Run challenge.",
              link: "/activity",
            },
            {
              year: "2022 Sept",
              title: "Left ASL and Joined Hong Kong Observatory",
              description:
                "Resigned as a Solution Associate and was promoted to System Developer in the Aviation Meteorology Branch.",
              link: "/experience",
            },
            {
              year: "2023 Feb",
              title: "Broke Hong Kong Resident Record in Oxfam Trailwalker",
              description:
                "Completed the 100km trail with 4,800m+ elevation, setting a new record and earning media recognition.",
              link: "/activity",
            },
            {
              year: "2023 Sept",
              title: "Left Hong Kong Observatory and Joined InfoTech Services",
              description:
                "Contract ended, and I joined InfoTech as a Senior Programmer, seconded to the Judiciary.",
              link: "/experience",
            },
            {
              year: "2024 March",
              title: "Left InfoTech and Moved to the UK",
              description: "Exploring new career opportunities and challenges.",
            },
          ].map((event, index) => (
            <div key={index} className="relative flex items-start mb-8 ml-14">
              {/* Dot */}
              <div className="absolute left-0 w-6 h-6 bg-teal-500 rounded-full"></div>

              {/* Year */}
              <div className="text-2xl font-semibold text-teal-400 mb-2 ml-10 w-32">
                {event.year}
              </div>

              {/* Content Box (Fixed Width for Alignment) */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-xl w-full ml-10 transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl font-semibold">
                  {event.link ? (
                    <a
                      href={event.link}
                      className="text-blue-800 font-semibold hover:underline hover:text-blue-700 transition-transform duration-300 transform hover:scale-105"
                    >
                      {event.title}
                    </a>
                  ) : (
                    event.title
                  )}
                </h3>
                <p className="text-lg opacity-80 mt-2">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
