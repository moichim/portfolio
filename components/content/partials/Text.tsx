import Partial, { PartialProps } from "./Partial";

const Text: React.FC<PartialProps> = props => {
    return <Partial {...props} type="text">
        {props.children}
    </Partial>;
}

export default Text;