window .onload = () => {
    var result = document .querySelector( '.display-result' ) ,
        video = new Element(),
        urlVideo = '/video/el-alumno-vence-al-maestro.webm';
    
    result .appendChild( video .createExternalControls() );
    result .appendChild( video .createVideoElement( urlVideo ) );
    
}

/** Clase */
class Element {
    constructor() {
        this .videoEl;
    }
    
    createVideoElement( url ) {
        this .videoEl = document .createElement( 'video' );
        this .sourceEl = document .createElement( 'source' );

        this .videoEl .setAttribute( 'id', 'data-video' );
        this .sourceEl .setAttribute( 'src', url );
        this .sourceEl .setAttribute( 'type', 'video/webm' );
        this .videoEl .controls = true;

        this .videoEl .appendChild( this .sourceEl );
        this .videoEl .appendChild( document .createTextNode( 'Tu nagegador no soporta el tag de video' ) );

        return this .videoEl;
    }

    createExternalControls() {
        let actions = new Array( 'Play', 'Pause', 'Stop', 'Rebobinar', 'Avanzar', 'Subir', 'Bajar', 'Silenciar' ),
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
                if( actions[ i ] .getAttribute( 'class' ) == 'play' ) {
                    this .videoPlay();
                }
                if( actions[ i ] .getAttribute( 'class' ) == 'stop' ) {
                    this .videoStop();
                }
                if( actions[ i ] .getAttribute( 'class' ) == 'pause' ) {
                    this .videoPause();
                }
                if( actions[ i ] .getAttribute( 'class' ) == 'rebobinar' ) {
                    // TODO: Retrazar video
                    console .log( 'Rebobina' );         
                }
                if( actions[ i ] .getAttribute( 'class' ) == 'avanzar' ) {
                    // TODO: Adelantar video
                    console .log( 'Avanza' );
                }
                if( actions[ i ] .getAttribute( 'class' ) == 'subir' ) {
                    volumen = this .videoVolume( true );
                    console .log( 'Sube volumen', volumen );
                }
                if( actions[ i ] .getAttribute( 'class' ) == 'bajar' ) {
                    volumen = this .videoVolume( false );
                    console .log( 'Baja volumen', volumen );
                }
                if( actions[ i ] .getAttribute( 'class' ) == 'silenciar' ) {
                    volumen = this .videoVolume();
                    console .log( 'Silenciado', volumen );
                }
            });
            
        }
    }

    /** Acciones de cada botón */
    videoPlay() {
        console .log( 'Play' );
        this .videoEl .play();
    }

    videoPause() {
        console .log( 'Pause' );
        this .videoEl .pause();
    }

    videoStop() {
        console .log( 'Stop' );
        this .videoEl .pause();
        this .videoEl .currentTime = 0;
    }

    videoVolume( order ) {
        
        if( order != undefined ) {
            if( order ) {
                
                return this .videoEl .volume += 0.1;
            }

            return this .videoEl .volume -= 0.1;
        } 
        else {

            return this .videoEl .volume = 0.0;
        }
        
    }
}
