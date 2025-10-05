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
        <div className="flex gap-10  justify-end font-bold text-[#1F1534] font-mulish pt-9  fixed top-0 right-20  ">
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