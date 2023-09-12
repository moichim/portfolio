import { MdxProp } from "./types"

const Para: React.FC<MdxProp> = ( { children } ) => {
    return <p>{children}</p>
}

export default Para;