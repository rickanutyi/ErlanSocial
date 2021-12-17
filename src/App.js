import { collection, query } from 'firebase/firestore';
import './App.css';
import { db } from './firebase';
import MainRoutes from './MainRouter';

function App() {

    const q = query(collection(db, "users"));


    

    return ( 
        <div>
                <MainRoutes />
        </div>
    );
}

export default App;