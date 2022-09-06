import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import i18next from "i18next"
import cookies from "js-cookie"
import Logo from "../../assets/logo.png"

const languages = [
  {
    code: "he",
    name: "עברית",
    country_code: "he",
  },
  {
    code: "ar",
    name: "العربية",
    country_code: "sa",
  },
]

function NavBar() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const links =
    cookies.get("i18next") === "ar"
      ? [
          {
            id: 1,
            name: "كتالوج",
            link: "/catalog",
          },
          {
            id: 2,
            name: "طريقة ألعمل",
            link: "/how-to-work-with",
          },
          {
            id: 3,
            name: "من نحن",
            link: "/about-us",
          },
          {
            id: 4,
            name: "التسجيل",
            link: "/app/login",
          },
        ]
      : [
          {
            id: 1,
            name: "קטלוג מוצרים",
            link: "/catalog",
          },
          {
            id: 2,
            name: "איך זה עובד",
            link: "/how-to-work-with",
          },
          {
            id: 3,
            name: "אודות",
            link: "/about-us",
          },
          {
            id: 4,
            name: "הרשמה",
            link: "/app/login",
          },
        ]
  return (
    <div className="w-full h-20 text-[#353535] fixed bg-white z-10 border-b-[1px]">
      <div className="flex max-w-screen-xl px-4 h-full items-center justify-between m-auto ">
        <div className="flex items-center">
          {/* img start */}
          <img
            onClick={() => {
              i18next.changeLanguage("ar")
              navigate("/")
            }}
            className="ml-2 sm:w-[20%] w-40  hover:cursor-pointer"
            src={Logo}
            alt="logo"
          />
          {/* img tag ends */}
          {/* Links desktop starts */}
          <ul className="hidden sm:flex ">
            {links.map(({ name, id, link }) => (
              <li
                onClick={() => navigate(`${link}`)}
                key={id}
                className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
              >
                {name}
              </li>
            ))}
          </ul>
          {/* Links desktop ends */}
        </div>

        {/* Fa bars for responsive design */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden cursor-pointer pr-4 z-40 text-gray-500"
        >
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {/* languages desktop */}
        <div className="md:flex items-center justify-between hidden">
          <ul className="hidden md:flex ">
            {languages.map(({ code, name, country_code }) => (
              <div className="flex" key={country_code}>
                <li
                  className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
                  onClick={() => {
                    i18next.changeLanguage(code)
                  }}
                >
                  {name}
                </li>
                <span>|</span>
              </div>
            ))}
          </ul>
        </div>
        {isOpen && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({ id, link, name }) => (
              <li
                key={id}
                onClick={() => {
                  navigate(`${link}`)
                  setIsOpen(!isOpen)
                }}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                {name}
              </li>
            ))}
            <ul className="flex absolute bottom-10">
              {languages.map(({ code, name, country_code }) => (
                <>
                  <li
                    className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200"
                    onClick={() => {
                      i18next.changeLanguage(code)
                      navigate(`/${code}`)
                    }}
                    key={country_code}
                  >
                    {name}
                  </li>
                  <span>|</span>
                </>
              ))}
            </ul>
          </ul>
        )}
      </div>
    </div>
  )
}

export default NavBar
