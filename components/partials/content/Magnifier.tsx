import { usePageContext } from '@/context/project/ProjectContext';
import clsx from 'clsx';
import React from 'react';
import Zoom, { Controlled, UncontrolledProps} from 'react-medium-image-zoom';

type MagnifierProps = React.PropsWithChildren & UncontrolledProps & {}

const Magnifier: React.FC<MagnifierProps> = ({children, ...props}) => {

    const [isClosing, setIsClosing] = React.useState<boolean>( false );
    const [ isOpen, setIsOpen ] = React.useState<boolean>( false );

    const context = usePageContext();

    const handleZoomChange = (shouldZoom: boolean) => {

        if ( shouldZoom ) {

            setIsOpen( true );

        } else  {

            setIsClosing( true );
            context.setIsZoomed( false );
            
            setTimeout( () => {
                setIsOpen( false );
                setIsClosing( false );
            }, 400 );

        }
    };

    React.useEffect(() => {

        if ( context.isZoomed === true ) {
            // setIsClosing( false );
        }

        context.setIsZoomed( isOpen );

    }, [isOpen]);

    return <Controlled
        isZoomed={ isOpen }
        onZoomChange={handleZoomChange}
        classDialog={ isClosing ? "closing" : "idle" }
        {...props}
    >{children}</Controlled>

}

export default Magnifier;