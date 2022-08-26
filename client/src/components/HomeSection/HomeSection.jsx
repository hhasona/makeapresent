import Mugs from "../../assets/mugs.png"
import { useTranslation } from "react-i18next"
export default function HomeSection() {
  const { t } = useTranslation()
  return (
    <div
      name="home"
      className="h-screen bg-gradient-to-b from-[#353535] via-[#BDBBB0] to-[#8A897C]"
    >
      <div className="container mx-auto flex flex-col items-center h-screen px-10 md:flex-row">
        <div className="flex flex-col justify-center md:h-full h-3/5">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">{t("app_title")}</p>

          <div>
            {/* <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link> */}
          </div>
        </div>
        <img
          src={Mugs}
          alt="mugs"
          className="rounded-2xl mx-auto w-full md:w-2/3"
        />
      </div>
    </div>
  )
}
