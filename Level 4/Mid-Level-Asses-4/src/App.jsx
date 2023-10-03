// Fetch and display data from API endPt
import { useContext } from 'react'
import { useEffect } from 'react';
import { ApiContext  } from './ApiContext'


function DataDisplay () {
    const { data, fetchData } = useContext(ApiContext);

    useEffect(() => {
        fetchData("https://unsplash.com/photos/DziZIYOGAHc");
    }, [fetchData]);
    
    return (
        <div>
            <h1>Data from API:</h1>
            <pre>{JSON.stringify(data,null,2)}</pre>
        </div>
    );
}

function App () {
    return (
        
            <div className="App">
                <DataDisplay />
            </div>
        
    );
}

export default App;