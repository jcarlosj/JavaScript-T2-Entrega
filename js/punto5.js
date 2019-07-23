window .onload = () => {
    var result = document .querySelector( '.display-result' ),
        phraseList = new Array( 'FullStack JavaScript', 'Casa Bictia' ),
        hanged = new Hanged( phraseList );

    result .appendChild( hanged .createInputElement() );
    result .appendChild( hanged .getPhraseBoxes() );
}

class Hanged {

    constructor( phrases ) {
        this .phraseList = phrases;
        console .log( this .phraseList );

        this .phraseEl = this .createBoxes( this .phraseList[ 0 ] );
    }

    createBoxes( phrase ) {
        let characterEl = document .createElement( 'div' );

        characterEl .setAttribute( 'class', 'character' );

        for( const character of phrase )  {
            //console .log( character );
            characterEl .appendChild( this .createBoxElement( character ) );
            //console .log( 'characterEl', characterEl );
        }

        return characterEl;
    }

    createBoxElement( character ) {
        let characterList = document .createElement( 'div' ),
            content = document .createTextNode( character );
        
        characterList .appendChild( content );
        //console .log( characterList );

        return characterList;
    }

    getPhraseBoxes() {
        return this .phraseEl;
    }

    createInputElement() {
        let containerEl = document .createElement( 'div' ),
            inputEl = document .createElement( 'input' ),
            buttonEl = document .createElement( 'button' ),
            buttonContent = document .createTextNode( 'Enviar' );

        inputEl .setAttribute( 'type', 'text' );
        inputEl .setAttribute( 'maxlength', '1' );
        inputEl .setAttribute( 'size', '1' );
        inputEl .setAttribute( 'placeholder', 'Ingrese una letra' );

        buttonEl .setAttribute( 'class', 'send' );
        buttonEl .appendChild( buttonContent );

        containerEl .setAttribute( 'class', 'controls' );
        containerEl .appendChild( inputEl );
        containerEl .appendChild( buttonEl );
        console .log( containerEl );
    
        return containerEl;
    }
}