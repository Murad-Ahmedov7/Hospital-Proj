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
<div className="fixed top-4 left-0 w-full flex justify-end items-center gap-10 bg-white h-14 px-8 rounded-3xl border-2 border-blue-500 z-50">
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