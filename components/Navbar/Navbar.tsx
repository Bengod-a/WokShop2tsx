import { DrakMode } from "./DrakMode"
import DropDownListMenu from "./DropDownListMenu"
import Logo from "./Logo"
import Search from "./Search"

const Navbar = () => {
    return (
        <div>

            <div className="container flex flex-col justify-between py-8 sm:flex-row sm:items-center gap-4">
                {/* Logo */}
                <Logo />
                {/* Search */}
                <Search />
                {/* DrakMode & Profile */}
                <div className="flex gap-3 items-center">
                    <DrakMode />
                    <DropDownListMenu />
                </div>
            </div>


        </div>
    )
}
export default Navbar