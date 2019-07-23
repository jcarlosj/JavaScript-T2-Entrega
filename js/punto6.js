window .onload = () => {
    var shapes = Array( 'circle', 'eq-triangle', 'egg', 'parallelogram', 'octagon', 'square', 'circle', 'eq-triangle', 'egg', 'parallelogram', 'octagon', 'square' ),
        words = [ 'Elisa', 'Cristina' ,'Sofía', 'Ana', 'Juliana', 'Luisa' ];
    
    console .log( 'shapes', shapes .length );
    parentElement = new Element( words .sort() );
}

class Element {
    constructor( data ) {  
        this .result = document .querySelector( '.display-result' );
        
        this .processData( data );
        this .createNestedElement();
    }
    createElement( value = null ) {
        let el = document .createElement( 'div' ),
            elTextNode;
    
        if( value ) {
            elTextNode = document .createTextNode( value );
            el .className = `item item-${ value .toLowerCase() }`;
            el .appendChild( elTextNode );
        }
    
        return el;
    }
    processData( dataArray ) {
        let data;
        
        data = dataArray .map( data => {
            return [
                data .charAt( 0 ),
                data
            ]
        });

        console .log( data );
        this .nodeList = data;
    }
    createNestedElement() {
        let mainEl,
            secondaryEl;

        for( let i = 0; i < this .nodeList .length; i++ ) {
            mainEl = this .createElement();
            mainEl .className = `box box-${ ( i + 1 ) .toString() } ${ shapes[ i ] }`;
            
            this .nodeList[ i ] .push( ( i + 1 ) .toString() );

            for( let j = 0; j < this .nodeList[ 0 ] .length; j++ ) {
                secondaryEl = this .createElement( this.nodeList[ i ][ j ] );
                //console .log( secondaryEl );
                mainEl .appendChild( secondaryEl );
                
            }
            console .log( mainEl );
            this .result .appendChild( mainEl );
        }
    }
}