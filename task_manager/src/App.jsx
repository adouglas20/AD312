import './App.css';
import Counter from './Counter.jsx';
import Gallery from './Gallery.jsx';
import UserProfile from './UserProfile.jsx';
import TaskManager from './TaskManager.jsx';
function App() {
    return (
        <>
            <div>
                <h1 className="taskManagerHeading">Task Manager</ h1>
                <TaskManager />
            </div>
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
