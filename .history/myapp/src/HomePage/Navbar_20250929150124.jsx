
export default function Navbar() {

    const links = [
        { id: "home", name: "Home" },
        { id: "details", name: "Details" },
        { id: "shop", name: "Shop" },
        { id: "contact", name: "Contact" }
    ]
    return (

        <div className="flex gap-10 justify-end font-bold text-[#1F1534] font-mulish mr-20 pt-12">
            <p className="text-gray-700 hover:text-blue-600 transform hover:scale-125 transition-transform duration-300 ease-out">Home</p>
            <p>Find a doctor</p>
            <p>Apps</p>
            <p>Testimanials</p>
            <p>About us</p>

        </div>
    )
}