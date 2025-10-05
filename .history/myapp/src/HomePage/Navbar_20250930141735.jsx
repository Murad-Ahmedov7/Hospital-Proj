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
        <div className="flex gap-10  justify-end font-bold text-[#1F1534] font-mulish   fixed top-5 right-0 border-2 min-w-full pr-[8%] pt-5 rounded-lg   ">
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