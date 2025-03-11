export const metadata = {
  title: "Work Experience & Education",
  description: "Work Experience & Education",
};

export default function Page() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Timeline Section */}
      <section className="py-16 px-6 min-h-screen bg-gray-900 text-white">
        <h1 className="font-semibold text-4xl mb-6 text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-pink-600 transform transition-all duration-500 hover:scale-110 hover:rotate-6">
          My Journey
        </h1>

        <div className="relative flex flex-col items-center">
          <div className="absolute left-0 top-0 h-full w-1 bg-teal-400 z-0"></div>
          <div className="relative space-y-8 z-10">
            {/* Timeline Entries */}
            <div className="flex flex-col items-center">
              <div className="text-2xl font-semibold text-teal-400 mb-4">
                2015
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl font-semibold">
                  Started at{" "}
                  <a
                    href="https://www.cuhk.edu.hk"
                    className="text-blue-800 font-semibold hover:underline hover:text-blue-700"
                    target="_blank"
                  >
                    CUHK (Chinese University of Hong Kong)
                  </a>{" "}
                </h3>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-2xl font-semibold text-teal-400 mb-4">
                2018
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl font-semibold">
                  Gap Year: 1-Year Placement at{" "}
                  <a
                    href="https://www.hko.gov.hk"
                    className="text-teal-500 font-semibold hover:underline hover:text-teal-400"
                    target="_blank"
                  >
                    Hong Kong Observatory
                  </a>{" "}
                  as an Intern
                </h3>
                <p className="text-lg opacity-80 mt-4">
                  During my 1-year placement at the Hong Kong Observatory, I
                  worked on a project titled{" "}
                  <a
                    href="https://www.hko.gov.hk/en/publica/reprint/files/r1355.pdf"
                    className="text-blue-800 font-semibold hover:underline hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Adjustment of Automatic Gridded Wind Field Forecasts in the
                    Presence of Tropical Cyclones
                  </a>
                  , alongside my supervisor. This work led to a publication
                  during my internship.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-2xl font-semibold text-teal-400 mb-4">
                2019-2020
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl font-semibold">
                  Final Year Project (FYP) at{" "}
                  <a
                    href="https://www.cuhk.edu.hk/english/aboutus/wu-yee-sun-college.html"
                    className="text-blue-800 font-semibold hover:underline hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Wu Yee Sun College, CUHK
                  </a>{" "}
                  - Computational Astrophysical Fluid Dynamics
                </h3>
                <p className="text-lg opacity-80">
                  Received the Best Final Year Project Award.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-2xl font-semibold text-teal-400 mb-4">
                2021-2024
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl font-semibold">
                  Worked in IT: Roles at{" "}
                  <a
                    href="https://www1.asl.com.hk/"
                    className="text-blue-800 font-semibold hover:underline hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Automated Systems (H.K.) Limited
                  </a>
                  ,{" "}
                  <a
                    href="https://www.hko.gov.hk"
                    className="text-teal-500 font-semibold hover:underline hover:text-teal-400"
                    target="_blank"
                  >
                    Hong Kong Observatory
                  </a>
                  ,{" "}
                  <a
                    href="https://www.infotech.com.hk/"
                    className="text-teal-500 font-semibold hover:underline hover:text-teal-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    InfoTech Services (Hong Kong) Limited
                  </a>
                </h3>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-2xl font-semibold text-teal-400 mb-4">
                May 2024
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl font-semibold">
                  Moved to the UK to explore new opportunities
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section
        id="work-experience"
        className="py-16 px-6 bg-gray-800 text-white"
      >
        <h2 className="text-4xl font-semibold mb-6 text-center text-teal-400">
          Work Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-teal-400">
              Solution Associate - Automated Systems (H.K.) Limited
            </h3>
            <p className="text-lg opacity-80">
              Worked with the{" "}
              <a
                href="https://www.ird.gov.hk/eng/paf/paf.htm"
                className="text-teal-500 font-semibold hover:underline hover:text-teal-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                Inland Revenue Department
              </a>{" "}
              and{" "}
              <a
                href="https://www.edb.gov.hk/en/index.html"
                className="text-blue-800 font-semibold hover:underline hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Education Bureau
              </a>{" "}
              on the eTax system and eForms projects, developing and integrating
              solutions.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-teal-400">
              System Developer -{" "}
              <a
                href="https://www.hko.gov.hk"
                className="text-teal-500 font-semibold hover:underline hover:text-teal-400"
                target="_blank"
              >
                Hong Kong Observatory
              </a>
            </h3>
            <p className="text-lg opacity-80">
              Contributed to meteorological systems, using technology for
              weather data retrieval and analysis. Worked on system integration
              and monitoring.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-teal-400">
              Senior Programmer -{" "}
              <a
                href="https://www.infotech.com.hk/"
                className="text-teal-500 font-semibold hover:underline hover:text-teal-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                InfoTech Services (Hong Kong) Limited
              </a>
            </h3>
            <p className="text-lg opacity-80">
              Seconded to the{" "}
              <a
                href="https://www.judiciary.hk/en/index/index.html"
                className="text-teal-500 font-semibold hover:underline hover:text-teal-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hong Kong Judiciary Information Technology Office
              </a>
              , developing and maintaining judicial systems and ensuring smooth
              operations.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-6 bg-gray-900 text-white">
        <h2 className="text-4xl font-semibold mb-6 text-center text-teal-400">
          Education
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-teal-400">
              MSc in Computational Astrophysical Fluid Dynamics - The Chinese
              University of Hong Kong
            </h3>
            <p className="text-lg opacity-80">
              Final Year Project:{" "}
              <a
                href="/PHYS4620_Wu_Man_Tsun.pdf"
                className="text-blue-800 font-semibold hover:underline hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Simulation of Rossby Wave Instability in the Accretion Disks
              </a>
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-teal-400">
              BSc in Physics - The Chinese University of Hong Kong
            </h3>
            <p className="text-lg opacity-80">
              Final Year Project:{" "}
              <a
                href="/PHYS4610.pdf"
                className="text-blue-800 font-semibold hover:underline hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Simulation of Astrophysical Fluid
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
