import { usePageContext } from "@/context/project/ProjectContext";
import Hamburger from "hamburger-react";

const MenuTrigger: React.FC = () => {

    const navigation = usePageContext();

    return <Hamburger size={25} rounded toggled={navigation.isExpanded} toggle={navigation.setIsExpanded} />;

}

export default MenuTrigger;