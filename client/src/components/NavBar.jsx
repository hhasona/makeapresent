import React, { useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import i18next from "i18next"
import cookies from "js-cookie"
import Logo from "../assets/logo.png"

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
  const currentLanguageCode = cookies.get("i18next") || "ar"
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    console.log("Setting page stuff")
    document.title = t("app_title")
  }, [currentLanguage, t])
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
            link: "how-to-work-with",
          },
          {
            id: 3,
            name: "من نحن",
            link: "about-us",
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
            link: "how-to-work-with",
          },
          {
            id: 3,
            name: "אודות",
            link: "about-us",
          },
        ]
  return (
    <div className="flex justify-between items-center w-full h-20 text-[#353535] fixed bg-white px-4">
      <img
        onClick={() => navigate("/")}
        className="ml-2 w-[10%]  hover:cursor-pointer"
        src={Logo}
        alt="logo"
      />

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
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden cursor-pointer pr-4 z-10 text-gray-500"
      >
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      <div className="md:flex items-center justify-between hidden">
        <ul className="hidden md:flex">
          {languages.map(({ code, name, country_code }) => (
            <>
              <li
                className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
                onClick={() => {
                  i18next.changeLanguage(code)
                }}
                key={country_code}
              >
                {name}
              </li>
              <span>|</span>
            </>
          ))}
        </ul>
      </div>
      {isOpen && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              onClick={() => {
                navigate(`${link}`)
                setIsOpen(!isOpen)
              }}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default NavBar
