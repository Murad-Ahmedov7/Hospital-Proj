import styles from "./Navbar.module.css";

export default function Navbar() {

    const links = [
        { id: "home", name: "Home" },
        { id: "details", name: "Details" },
        { id: "shop", name: "Shop" },
        { id: "contact", name: "Contact" }
    ]
    return (

        <div className="flex gap-10  justify-end font-bold text-[#1F1534] font-mulish mr-20 pt-12">
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