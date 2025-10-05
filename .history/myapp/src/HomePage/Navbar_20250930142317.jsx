import styles from "./Navbar.module.css";

export default function Navbar() {

 const links = [
  { id: "home", name: "Home" },
  { id: "find-doctor", name: "Find a doctor" },
  { id: "apps", name: "Apps" },
  { id: "testimonials", name: "Testimonials" },
  { id: "about-us", name: "About us" }
];

    return (
        <div className="flex gap-10  justify-end font-bold text-[#1F1534] font-mulish  fixed  right-0 border-2 min-w-full pr-[8%] h-14 pt-3 rounded-lgbg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800">
        {
            links.map((link)=>(
                <a
                    key={link.id}
                     href={`#${link.id}`}
                    className={styles.navlink}
                >
                    {link.name}
                </a>
            ))
        }
        </div>
    )
}