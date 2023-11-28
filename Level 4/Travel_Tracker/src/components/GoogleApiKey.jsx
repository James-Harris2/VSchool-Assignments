import { Fragment } from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';


function GoogleApiKey() {
    const { isLoaded } = useLoadScript ({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP-API-KEY,
    });

    

  return (
    <Fragment>
        <div className="container">
        <h1 className="text-center">Hello World</h1>
        <div style={{ width: "100%", height: "90vh"}}>
            {isLoaded ? (
                <GoogleMap 
                    center={{lat:36.26751,  lng: 115.29456 }} z
                    zoom={10} 
                mapContainerStyle={{
                    width: '100%',
                    height: '90vh',
                    }}
                >
                {/* MARKERS GO HERE JamesE  :)*/}
            </GoogleMap>
            ) : null}
        </div>
    </div>
    </Fragment>

    );
}

export default GoogleApiKey