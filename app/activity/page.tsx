export const metadata = {
  title: "Beyond work",
  description: "Beyond work",
};

export default function Page() {
  return (
    <section id="journey" className="py-16 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-8 text-center text-teal-400 animate-fade-in">
        🚀 My Journey & Achievements
      </h2>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Running Journey Section */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-teal-400 mb-4">
            🏃 Long-Distance Running: From the Track to the Trails
          </h3>
          <p className="text-lg opacity-80 leading-relaxed">
            Since 2009, I have pushed my limits in long-distance running,
            setting track records in 800m, 1500m, and 3000m at school sports
            events. Competing in inter-school cross-country and track races, I
            consistently finished in the top 3. As captain of my teams, I led
            training drills, pushing myself and my teammates to greater heights.
          </p>
          <p className="text-lg opacity-80 mt-4 leading-relaxed">
            In 2012, I took my training to the next level under Coach Wong Chun
            Wing, embracing rigorous programs that tested my endurance. However,
            the intense demands led to injuries, forcing me to rethink my
            approach.
          </p>

          <h3 className="text-xl font-semibold text-green-400 mt-6">
            🌿 A New Chapter: Trail Running
          </h3>
          <p className="text-lg opacity-80 leading-relaxed">
            Shifting from the track to the mountains, I found a new rhythm. The
            fresh air, peaceful landscapes, and slower pace gave me a fresh
            perspective on running. Trail running isn’t just a sport—it’s an
            escape. I can now run for an entire day, immersed in nature, free
            from the pressure of competition.
          </p>

          <h3 className="text-xl font-semibold text-yellow-400 mt-6">
            💪 Notable Achievement: Oxfam Trailwalker Hong Kong 2022
          </h3>
          <p className="text-lg opacity-80 leading-relaxed">
            I took on the 100km ultra-trail challenge, which earned me
            recognition in multiple media features. Check them out:
          </p>

          <ul className="list-disc ml-6 mt-4 space-y-2">
            {[
              {
                title: "📖 Over the Hills and Fast Away - Focus CUHK",
                url: "https://www.focus.cuhk.edu.hk/en/20230419/over-the-hills-and-fast-away/021-en/",
              },
              {
                title: "🎥 Interview Video (Chinese version only)",
                url: "https://www.youtube.com/watch?v=9z2wJraIad4",
              },
              {
                title: "📰 HK01 Article (Chinese version only)",
                url: "https://www.hk01.com/%E8%B7%91%E6%AD%A5/871305/%E6%AF%85%E8%A1%8C%E8%80%85-%E8%83%A1%E6%96%87%E6%B4%A5%E9%A6%96%E6%88%B0100%E5%85%AC%E9%87%8C%E5%8D%B3%E8%B4%8F%E5%86%A0%E8%BB%8D",
              },
              {
                title: "🎙️ Podcast (Chinese version only)",
                url: "https://www.instagram.com/sportunes_by_sportsoho/p/CqFlTD1vKzF/",
              },
              {
                title: "👣 Strava Link",
                url: "https://www.strava.com/activities/8614711811",
              },
            ].map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  className="text-blue-400 font-semibold hover:underline transition duration-300 transform hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold text-yellow-400 mt-6">
            💡 Did you know?
          </h3>
          <p className="text-lg opacity-80 leading-relaxed">
            I also built the website for my running coach’s Pro Running Club!
            Check it out:
          </p>
          <p className="text-lg opacity-80 mt-4">
            🔗{" "}
            <a
              href="https://www.prorunningclub.com"
              className="text-blue-400 font-semibold hover:underline transition duration-300 transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pro Running Club Website
            </a>
          </p>
        </div>

        {/* Christian Zheng Sheng Association Website */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-teal-400 mb-4">
            🏫 Christian Zheng Sheng Association Website
          </h3>
          <p className="text-lg opacity-80 leading-relaxed">
            I was responsible for updating the{" "}
            <strong>Christian Zheng Sheng Association</strong> website, ensuring
            it remained <strong>modern, user-friendly, and multilingual</strong>
            .
          </p>
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>
              ✅ Enhanced <strong>UX/UI</strong> for a better user experience
            </li>
            <li>
              ✅ Kept the website <strong>up to date</strong> with relevant
              information
            </li>
            <li>
              ✅ Added <strong>multilingual support</strong> for better
              accessibility
            </li>
          </ul>
          <p className="text-lg opacity-80 mt-4">
            🔗{" "}
            <a
              href="http://www.zhengsheng.org.hk/en/index.html"
              className="text-blue-400 font-semibold hover:underline transition duration-300 transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit the website
            </a>
          </p>
        </div>

        {/* Final Year Project Section */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-teal-400 mb-4">
            🎼 Final Year Project: Bringing Music to the Elderly
          </h3>
          <p className="text-lg opacity-80 leading-relaxed">
            For my award-winning final year project, I created a platform
            connecting teenagers and elderly homes through music.
          </p>

          <h3 className="text-xl font-semibold text-yellow-400 mt-6">
            ✨ Key Features:
          </h3>
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>
              ✅ Developed an Android app to streamline coordination for music
              performances.
            </li>
            <li>
              ✅ Partnered with community centers to arrange live shows, lifting
              the spirits of elderly residents.
            </li>
            <li>
              ✅ Overcame COVID-19 challenges to continue the initiative for two
              years.
            </li>
            <li>
              ✅ Personally performed as a musician while managing operations.
            </li>
          </ul>

          <p className="text-lg opacity-80 mt-4">
            🏆 Recognized as{" "}
            <span className="font-semibold text-yellow-400">
              Best Final Year Project
            </span>{" "}
            at Wu Yee Sun College.
          </p>

          <p className="text-lg opacity-80 mt-4">
            🌍 Learn more from this article about us:{" "}
            <a
              href="https://tokyo2020.sportsroad.hk/2020/01/%E3%80%90%E8%B7%91%E6%AD%A5%EF%BC%8E%E5%B0%88%E8%A8%AA%E3%80%91%E3%80%8C%E8%B7%91%E6%AD%A5%E6%95%99%E6%9C%83%E6%88%91%E5%A0%85%E6%8C%81%EF%BC%81%E3%80%8D%E5%A4%9A%E6%A3%B2%E8%B7%91%E6%89%8B%E5%91%A8/"
              className="text-blue-400 font-semibold hover:underline transition duration-300 transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              Interview by Sportsroad (Chinese version only)
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
