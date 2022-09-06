import { useTranslation } from "react-i18next"
import { FaCheck } from "react-icons/fa"
import Mugs from "../../assets/mugs.png"
export default function HomeSection() {
  const { t } = useTranslation()
  return (
    <div name="home" className="h-screen">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center h-screen px-7 md:flex-row">
        <div className="flex flex-col md:flex-row h-screen items-center">
          <div className="flex flex-col justify-center md:h-full h-full">
            <h2 className="text-4xl sm:text-7xl font-bold text-[#000000] py-10">
              {t("home_title")}
            </h2>
            <ul className="py-4 max-w-md">
              {t("home_descrepiton").map((a) => (
                <div className="flex md:w-2/3 w-3/4 justify-between items-center">
                  <FaCheck className="" color="#D64933" />
                  <li className="font-extrabold text-xl justify-start mr-4 md:w-full w-full text-[#7C7C7C]">
                    {a}
                  </li>
                </div>
              ))}
            </ul>
          </div>
          <div className="w-full md:h-auto h-2/3">
            <img src={Mugs} alt="mugs" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
