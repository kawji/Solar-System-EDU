import Topnav from "../navbar/topnav"
import Mainnav from "../navbar/mainnav"

export default function Navbar() {
    return(
    <nav className="w-full h-auto ">
        <Topnav />  
        <Mainnav />

    </nav>
        
    )
}