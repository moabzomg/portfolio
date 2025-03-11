export const metadata = {
  title: "Articles & Media",
  description: "Interviews, articles, and media appearances featuring me",
};

export default function Page() {
  return (
    <section id="articles" className="py-16 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-semibold mb-6 text-center text-teal-400">
        Articles & Media
      </h2>

      <div className="max-w-4xl mx-auto">
        {/* Articles Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-teal-400">
            Featured Articles
          </h3>
          <ul className="list-disc ml-6 mt-4 text-lg opacity-80">
            <li>
              <a
                href="https://www.focus.cuhk.edu.hk/en/20230419/over-the-hills-and-fast-away/021-en/"
                className="text-blue-800 font-semibold hover:underline hover:text-blue-700 transition-transform duration-300 transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                Over the Hills and Fast Away - Focus CUHK
              </a>
            </li>
            <li>
              <a
                href="https://www.hk01.com/%E8%B7%91%E6%AD%A5/871305/%E6%AF%85%E8%A1%8C%E8%80%85-%E8%83%A1%E6%96%87%E6%B4%A5%E9%A6%96%E6%88%B0100%E5%85%AC%E9%87%8C%E5%8D%B3%E8%B4%8F%E5%86%A0%E8%BB%8D-%E7%94%B1%E9%A0%AD%E7%97%9B%E5%88%B0%E5%B0%BE%E9%9D%A0%E8%BC%95%E9%AC%86%E5%BF%83%E6%85%8B%E9%A0%82%E4%BD%8F"
                className="text-blue-800 font-semibold hover:underline hover:text-blue-700 transition-transform duration-300 transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                HK01 Article - (Chinese Version)
              </a>
            </li>
            <li>
              <a
                href="https://tokyo2020.sportsroad.hk/2020/01/%E3%80%90%E8%B7%91%E6%AD%A5%EF%BC%8E%E5%B0%88%E8%A8%AA%E3%80%91%E3%80%8C%E8%B7%91%E6%AD%A5%E6%95%99%E6%9C%83%E6%88%91%E5%A0%85%E6%8C%81%EF%BC%81%E3%80%8D%E5%A4%9A%E6%A3%B2%E8%B7%91%E6%89%8B%E5%91%A8/"
                className="text-blue-800 font-semibold hover:underline hover:text-blue-700 transition-transform duration-300 transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sportsroad Article (Chinese Version)
              </a>
            </li>
          </ul>
        </div>

        {/* Videos Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-teal-400">Videos</h3>
          <ul className="list-disc ml-6 mt-4 text-lg opacity-80">
            <li>
              <a
                href="https://www.youtube.com/watch?v=9z2wJraIad4"
                className="text-blue-800 font-semibold hover:underline hover:text-blue-700 transition-transform duration-300 transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                Interview Video (Chinese Version)
              </a>
            </li>
          </ul>
        </div>

        {/* Podcasts Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-teal-400">Podcasts</h3>
          <ul className="list-disc ml-6 mt-4 text-lg opacity-80">
            <li>
              <a
                href="https://www.instagram.com/sportunes_by_sportsoho/p/CqFlTD1vKzF/"
                className="text-blue-800 font-semibold hover:underline hover:text-blue-700 transition-transform duration-300 transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                Podcast Interview (Chinese Version)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
