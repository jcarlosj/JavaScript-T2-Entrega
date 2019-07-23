window .onload = () => {
    var result = document .querySelector( '.display-result' ),
        bg = new Element();

        result .appendChild( bg .createControls() );
}

class Element {
    constructor() {
        this .elList = document .getElementsByTagName( 'body' );
    }

    createControls() {
        let colors = [ 'blue', 'white', 'pink', 'orange', 'black', 'green', 'purple', 'yellow', 'gray', 'greenyellow' ],
            controls = document .createElement( 'div' );
    
        controls .setAttribute( 'class', 'controls' );
    
        colors .forEach( color => {
            controls .appendChild( this .createColorElement( color ) );
        });
    
        this .addEventControls( controls );
    
        return controls;
    }

    createColorElement( color ) {
        let boxColor = document .createElement( 'div' );
        
        boxColor .setAttribute( 'class', color .toLowerCase() );
        boxColor .style .backgroundColor = color .toLowerCase();
        //console .log( boxColor );

        return boxColor;
    }

    addEventControls( controls ) {
        let colors = controls .children,
        bgColor;

        console .log( colors );
        
        for( let i = 0; i < colors .length; i++ ) {
            //console .log( colors[ i ] );

            colors[ i ] .addEventListener( 'mouseover', () => {
                bgColor = colors[ i ] .getAttribute( 'class' );
                this .elList[ 0 ] .style .background = `${ bgColor }`;
                console .log( this .elList[ 0 ] );
            });
            
        }
    }

}
