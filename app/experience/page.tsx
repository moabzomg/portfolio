"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Page() {
  const [openPanel, setOpenPanel] = useState(null);

  const togglePanel = (index) => {
    setOpenPanel(openPanel === index ? null : index);
  };

  return (
    <div className="bg-gray-900 text-white">
      {/* Skills Section */}
      {/* 🚀 Programming Languages & Frameworks Panel */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-teal-700">
        <button
          className="w-full p-4 text-xl font-semibold text-teal-400 text-left bg-gray-700 rounded-t-lg flex justify-between items-center"
          onClick={() => togglePanel(1)}
        >
          Programming Languages & Frameworks
          {openPanel === 1 ? (
            <FaChevronUp className="text-teal-400" />
          ) : (
            <FaChevronDown className="text-teal-400" />
          )}
        </button>
        {openPanel === 1 && (
          <div className="p-4 text-lg text-opacity-80 space-y-2">
            <ul className="grid grid-cols-2 gap-2">
              <li>🔥 C / C++</li>
              <li>🐍 Python</li>
              <li>☕ Java</li>
              <li>📜 JavaScript (ES6+)</li>
              <li>⚙️ Perl</li>
              <li>🌐 PHP</li>
              <li>⚛️ ReactJS</li>
              <li>🌿 Spring Framework</li>
              <li>🚀 Node.js</li>
              <li>📄 JSP-based Systems</li>
              <li>🔄 AJAX</li>
            </ul>
          </div>
        )}
      </div>

      {/* 🔧 Tools & Technologies Panel */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-teal-700">
        <button
          className="w-full p-4 text-xl font-semibold text-teal-400 text-left bg-gray-700 rounded-t-lg flex justify-between items-center"
          onClick={() => togglePanel(2)}
        >
          Tools & Technologies
          {openPanel === 2 ? (
            <FaChevronUp className="text-teal-400" />
          ) : (
            <FaChevronDown className="text-teal-400" />
          )}
        </button>
        {openPanel === 2 && (
          <div className="p-4 text-lg text-opacity-80 space-y-2">
            <ul className="grid grid-cols-2 gap-2">
              <li>🖥️ Git & Subversion</li>
              <li>🐧 Linux (Ubuntu, CentOS, RHEL)</li>
              <li>📀 AIX</li>
              <li>☕ Spring Boot</li>
              <li>📊 Highcharts, LeafletJS</li>
              <li>🗄️ MS SQL Server, Oracle</li>
              <li>🌐 Apache Tomcat</li>
              <li>📦 Docker</li>
              <li>🚀 Jira</li>
              <li>📝 WordPress</li>
              <li>🏢 Infor M3</li>
              <li>📨 OpenText StreamServe</li>
            </ul>
          </div>
        )}
      </div>

      {/* 🎯 Soft Skills Panel */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-teal-700">
        <button
          className="w-full p-4 text-xl font-semibold text-teal-400 text-left bg-gray-700 rounded-t-lg flex justify-between items-center"
          onClick={() => togglePanel(3)}
        >
          Soft Skills
          {openPanel === 3 ? (
            <FaChevronUp className="text-teal-400" />
          ) : (
            <FaChevronDown className="text-teal-400" />
          )}
        </button>
        {openPanel === 3 && (
          <div className="p-4 text-lg text-opacity-80 space-y-2">
            <ul className="grid grid-cols-2 gap-2">
              <li>🔍 Keen Attention to Detail</li>
              <li>🛠️ Sharp Problem-Solving Skills</li>
              <li>👥 Team Leadership & Collaboration</li>
              <li>📝 Clear and Concise Documentation</li>
              <li>⏳ Strong Time Management</li>
              <li>🗣️ Effective & Professional Communication</li>
            </ul>
          </div>
        )}
      </div>

      {/* Work Experience Section */}
      <section
        id="work-experience"
        className="py-16 px-6 bg-gray-800 text-white"
      >
        <h2 className="text-4xl font-semibold mb-6 text-center text-teal-400 animate__animated animate__fadeIn">
          Work Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Work Experience Panels */}
          {[
            {
              title: "Software Developer @ SMC Coperation (UK)",
              date: "2025 Jun - Present",
              description:
                "Perform software devlopment of Infor M3 in the European IT department to facilitate operations between the subsidiaries, using a wide range to tools and framworks including IEC (M3 e-Collaborator), MOM (M3 Output Management) with OpenText StreamServe, M3 Adaptation Kit (MAK) and H5 scripts.",
              link: "https://www.smc.eu/en-gb",
            },
            {
              title:
                "Senior Programmer @ InfoTech Services (Hong Kong) Limited",
              date: "2023 Oct - 2024 Mar",
              description:
                "Enhanced payment modules for the Integrated Court Case Management System, optimized data workflows, and managed version control using Subversion.",
              link: "https://www.infotech.com.hk/",
            },
            {
              title: "System Developer @ Hong Kong Observatory",
              date: "2022 Sep - 2023 Sep",
              description:
                "Developed and maintained 300+ programs for the Aviation Nowcasting System, optimized data algorithms, and automated data transfers using SFTP and HTTPS.",
              link: "https://www.hko.gov.hk",
            },
            {
              title: "Solution Associate @ Automated Systems (H.K.) Limited",
              date: "2021 Jul - 2022 Sep",
              description:
                "Contributed to the cloud migration of the eTAX system, implemented Responsive Web Design (RWD) for the system, and managed Git version control for development.",
              link: "https://www1.asl.com.hk/",
            },
            {
              title: "Intern Student @ Hong Kong Observatory",
              date: "2018 Jan - 2018 Dec",
              description:
                "Developed algorithms for automatic weather forecasting, integrated weather data from multiple sources, and presented technical solutions to senior management.",
              link: "https://www.hko.gov.hk",
            },
          ].map((job, index) => (
            <div
              className="mb-6 transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
              key={index}
            >
              <h3 className="text-2xl font-semibold text-teal-400 hover:text-teal-500 transition duration-300">
                <a href={job.link} target="_blank" rel="noopener noreferrer">
                  {job.title}
                </a>
              </h3>
              <p className="text-lg opacity-80">{job.date}</p>
              <p className="text-lg opacity-80">{job.description}</p>
            </div>
          ))}

          <p className="mt-4 text-lg opacity-80">
            Contributed to a publication on weather data analysis:{" "}
            <a
              href="https://www.hko.gov.hk/en/publica/reprint/files/r1355.pdf"
              className="text-blue-800 font-semibold hover:underline hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Adjustment of Automatic Gridded Wind Field Forecasts in the
              Presence of Tropical Cyclones
            </a>
            .
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-6 bg-gray-900 text-white">
        <h2 className="text-4xl font-semibold mb-6 text-center text-teal-400 animate__animated animate__fadeIn">
          Education
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Education Panels */}
          {[
            {
              title: "Bachelor of Science in Physics",
              date: "2015-2020",
              university: "CUHK",
              link: "https://www.cuhk.edu.hk/",
              project:
                "Simulation of Rossby Wave Instability in the Accretion Disks",
              projectLink: "/PHYS4620_Wu_Man_Tsun.pdf",
            },
            {
              title: "Master of Science in Physics",
              date: "2020-2021",
              university: "CUHK",
              link: "https://www.cuhk.edu.hk/",
              project: "Computational Study of Astrophysical Accretion Disks",
              projectLink: "/PHYS4610.pdf",
            },
          ].map((edu, index) => (
            <div className="mb-6" key={index}>
              <h3 className="text-2xl font-semibold text-teal-400 hover:text-teal-500 transition duration-300">
                <a href={edu.link} target="_blank" rel="noopener noreferrer">
                  {edu.title}
                </a>
              </h3>
              <p className="text-lg opacity-80">
                {edu.date} |{" "}
                <a href={edu.link} className="text-teal-500 hover:underline">
                  {edu.university}
                </a>
              </p>
              <p className="mt-2 text-lg opacity-80">
                Project:{" "}
                <a
                  href={edu.projectLink}
                  className="text-blue-800 font-semibold hover:underline hover:text-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {edu.project}
                </a>
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
