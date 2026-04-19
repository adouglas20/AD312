import './App.css';
import Gallery from './Gallery.jsx';
import Counter from './Counter.jsx';
import UserProfile from './UserProfile.jsx';

function App() {
    return (
        <>
            <div>
                <h1 className="nestedStateHeading">Nested State</h1>
                <UserProfile />
            </div>
            <div>
                <h1 className="dynamicGalleryHeading">
                    Dynamic Recipe Gallery
                </h1>
                <Gallery />
            </div>
            <div>
                <h1 className="stateHeading">State Management</h1>
                <Counter />
            </div>
        </>
    );
}

export default App;
