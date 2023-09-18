import { useLayoutContext } from "@/context/layout/LayoutContext";
import Hamburger from "hamburger-react";

const MenuTrigger: React.FC = () => {

    const navigation = useLayoutContext();

    return <Hamburger size={25} rounded toggled={navigation.isExpanded} toggle={navigation.setIsExpanded} />;

}

export default MenuTrigger;