import styles from "./Navbar.module.css";

export default function Navbar() {

    const links = [
        { id: "home", name: "Home" },
        { id: "", name: "Find a doctor" },
        { id: "", name: "Find a doctor" },

        { id: "apps", name: "Testimonials" },
        { id: "contact", name: "About us" }
    ]
    return (
        <div className="flex gap-10  justify-end font-bold text-[#1F1534] font-mulish mr-15 pt-10">
        {
            links.map((link)=>(
                <p
                    key={link.id}
                    id={link.id}
                    className={styles.navlink}
                >
                    {link.name}
                </p>
            ))
        }
        </div>
    )
}