window .onload = () => {
    actionsOfMenu();
}

function actionsOfMenu() {
    var ul = document .getElementById( 'menu' ),            // Obtiene el elemento UL con id 'menu'
        listOfUl = ul .children,                            // Obtiene los elementos hijos de UL, Equivale a: ul .getElementsByTagName( 'li' );   
        el = new Element();                                 // Instancia la clase Element

    // Itera cada uno de los elementos LI dentro del UL
    for( let li of listOfUl ) {
        //console .log( li .lastChild .id ); 

        // Agrega evento para todos los elementos 'li'
        li .addEventListener( 'click', () => {
            // Valida elemento 'a', hijo del elemento 'li' con un valor de 'id' específico
            if( li .lastChild .id == 'link-add' ) {
                console .log( 'Agrega elemento' );
                el .newElement();
            }
            if( li .lastChild .id == 'link-delete-all' ) {
                console .log( 'Elimina todos los elementos' );
                el .deleteAllElements();
            }
            if( li .lastChild .id == 'link-delete-odd' ) {
                console .log( 'Elimina todos los elementos impares' );
                el .oddElements();
            }
            if( li .lastChild .id == 'link-delete-this' ) {
                console .log( 'Elimina elemento seleccionado' );
                el  .deleteSelectedElement();
            }
        });
    }

}
class Element {
    constructor() {
        this .counter = 0;
        this .lastNodeSelected = null;
        this .dataId = null;
        this .result = document .querySelector( '.display-result' );
    }

    newElement() {
        this .counter++;
        let node = document .createElement( 'div' ),
            attrDataId = document .createAttribute( 'data-id' ),
            attrClass = document .createAttribute( 'class' ),
            textNode = document .createTextNode( this .counter );

        node .appendChild( textNode );
        attrDataId .value = `${ this .counter }`;    
        attrClass .value = `box box-${ this .counter }`;    
        node .setAttributeNode( attrDataId );
        node .setAttributeNode( attrClass );                 // Diferente a: node .setAtribute() que requiere dos parámetros

        // Agrega Evento Click al elemento creado
        node .addEventListener( 'click', () => {
            console .log( `Le diste click al elemento ${ node .getAttribute( 'data-id' ) }` );
            this .dataId = node .getAttribute( 'data-id' );
            this .changeColor( node );
        });
        
        console .log( node );
        this .result .appendChild( node );
    }
    deleteAllElements() {
        // Itera el nodo que contiene los elementos agregados 
        while ( this .result .hasChildNodes() ) {       
           this .result .removeChild( this .result .firstChild );
        }
    }
    oddElements() {
        //console .log( this .result .children );

        // Itera el nodo que contiene los elementos agregados 
        for ( const el of this .result .children ) {
            if( el .textContent % 2 != 0 ) {
                console .log( ' > ', el );
                console .log( ' > ', el .textContent );
                this .result .removeChild( el );
            }   
        }

    }
    deleteSelectedElement() {
        console .log( `Elimina ${ this .dataId }` );
        
        // Itera el nodo que contiene los elementos agregados 
        for ( const el of this .result .children ) {
            //console. log( el .getAttribute( 'data-id' ) );
            
            // Valida que el elemento eliminado sea el que se seleccionó previamente
            if( this .dataId == el .getAttribute( 'data-id' ) ) {
                //console .log( ' > ', el );
                
                this .result .removeChild( el );
                this .dataId = null;
            }   
        }

    }
    changeColor( node ) {
        node .style .backgroundColor = '#F1F1F1';
    }
}
