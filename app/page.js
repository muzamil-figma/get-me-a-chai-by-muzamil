import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center text-white min-h-[50vh] px-4 text-center">
        <div className="font-bold flex flex-wrap justify-center items-center text-2xl sm:text-3xl md:text-5xl gap-2 sm:gap-4">
          <span>Get Chai with</span>
          <span className="flex items-center gap-2">
            <span className="text-yellow-400 font-semibold">Muzamil Nawaz Khan</span>
            <img className="invertImg" src="/tea.gif" width={48} alt="tea" />
          </span>
        </div>

        <p className="mt-4 text-sm sm:text-base max-w-xl">
          A crowdfunding platform for creators to fund their projects.
        </p>
        <p className="text-sm sm:text-base max-w-xl mt-1">
          A place where your fans can buy you a chai. Unleash the power of your fans and get your projects funded.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link href={"/login"}>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Start Here
            </button>
          </Link>

          <Link href="/about">
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Read More
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10 my-10" />

      {/* Fans Section */}
      <div className="text-white container mx-auto pb-32 pt-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Your Fans can buy you a Chai</h2>
        <div className="flex flex-col md:flex-row justify-center gap-10 items-center">
          {/* Item 1 */}
          <div className="space-y-3 flex flex-col items-center justify-center text-center">
            <img className="bg-slate-400 rounded-full p-2" width={88} src="/man.gif" alt="man" />
            <p className="font-bold">Fans want to help</p>
            <p>Your fans are available to support you</p>
          </div>
          {/* Item 2 */}
          <div className="space-y-3 flex flex-col items-center justify-center text-center">
            <img className="bg-slate-400 rounded-full p-2" width={88} src="/coin.gif" alt="coin" />
            <p className="font-bold">Fans want to contribute</p>
            <p>Your fans are willing to contribute financially</p>
          </div>
          {/* Item 3 */}
          <div className="space-y-3 flex flex-col items-center justify-center text-center">
            <img className="bg-slate-400 rounded-full p-2" width={88} src="/group.gif" alt="group" />
            <p className="font-bold">Fans want to collaborate</p>
            <p>Your fans are ready to collaborate with you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10 my-10" />

      {/* About Project Section */}
      <div className="text-white container mx-auto pb-32 pt-10 flex flex-col items-center justify-center px-4">
        <h2 className="text-3xl font-bold text-center mb-10">🚀 About This Project</h2>

        <ul className="text-sm sm:text-base md:text-lg space-y-4 max-w-4xl w-full px-2">
          <li className="flex items-start gap-2">
            <span className="text-green-400 font-bold">✔</span>
            <span>Built with <strong>Next.js</strong> and <strong>Tailwind CSS</strong> to showcase real project design.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-400 font-bold">🔒</span>
            <span>Backend & database are <strong>temporarily disabled</strong> due to security and client restrictions.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400 font-bold">📦</span>
            <span>Database and API structure is integrated but <strong>currently disconnected</strong>.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-pink-400 font-bold">🧪</span>
            <span>Design built for <strong>local client demos</strong> and ongoing projects.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-400 font-bold">🚫</span>
            <span>No data is collected — purely a <strong>visual and UI demonstration</strong>.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400 font-bold">📱</span>
            <span>Fully responsive and functional across all modern devices.</span>
          </li>
        </ul>
      </div>
    </>
  );
}
