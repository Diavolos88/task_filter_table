import './App.css';
import MainPageContainer from "./components/MainPage/MainPage";
import {Provider} from "react-redux";
import store from "./Redux/Redux";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <MainPageContainer/>
            </div>
        </Provider>
    );
}

export default App;
