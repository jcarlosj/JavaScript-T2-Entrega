window .onload = () => {
    var result = document .querySelector( '.display-result' ),
        image = new Element(),
        urlImage = './images/landscape.jpg';

        result .appendChild( image .createControls() );
        result .appendChild( image .createImageElement( urlImage ) );
}

/** Clase */
class Element {
    constructor() {
        this .image;
        this .range = 20;
        this .percentage = 160;
    }
    createImageElement( url ) {
        this .image = document .createElement( 'div' );
        this .image .style .backgroundSize = `${ this .percentage }%`;

        this .image .setAttribute( 'class', 'image' );
        this .image .style .backgroundImage = `url('${ url }')`;

        return this .image;
    }

    createControls() {
        let actions = new Array( 'in', 'out' ),
            controls = document .createElement( 'div' );

        controls .setAttribute( 'class', 'controls' );

        actions .forEach( action => {
            controls .appendChild( this .createButtonElement( action ) );
        });

        this .addEventControls( controls );

        return controls;
    }

    createButtonElement( action ) {
        let buttonList = document .createElement( 'button' ),
            content = document .createTextNode( action );
        
        buttonList .setAttribute( 'class', action .toLowerCase() );
        buttonList .appendChild( content );
        //console .log( buttonList );

        return buttonList;
    }

    addEventControls( controls ) {
        let actions = controls .children,
        volumen;

        console .log( actions );
        
        for( let i = 0; i < actions .length; i++ ) {
            //console .log( actions[ i ] );
            actions[ i ] .addEventListener( 'click', () => {
                if( actions[ i ] .getAttribute( 'class' ) == 'in' ) {
                    // console .log( 'Nos acercamos!' );
                    this .percentage += this .range;
                }
                if( actions[ i ] .getAttribute( 'class' ) == 'out' ) {
                    if( this .isOriginalSize( this .percentage ) ) {
                        // console .log( 'Nos alejamos!' );
                        this .percentage -= this .range;
                    }
                }

                this .image .style .backgroundSize = `${ this .percentage }% auto`;
                console .log( this .image .style .backgroundSize );
            });
            
        }
    }

    isOriginalSize( size ) {
        return this .percentage >= 120;
    }

}