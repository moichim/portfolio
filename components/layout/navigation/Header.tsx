import ThemeSwitch from "@/components/ui/ThemeSwitch";
import Link from "next/link";

const Header: React.FC = () => {

    return <header>
        <Link href="/">Jan Jáchim</Link>
        <ThemeSwitch />
    </header>

}

export default Header;