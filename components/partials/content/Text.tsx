import { PropsWithChildren } from "react";
import Partial, { PartialProps } from "./Partial";

const Text: React.FC<PartialProps> = props => {
    return <Partial {...props}>
        {props.children}
    </Partial>;
}

export default Text;