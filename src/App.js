// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import MainContainer from './MainContainer';
import Footer from './Footer';
import { LoginProvider } from './Login';

function App() {
  return (
    <LoginProvider>
      <div className="App">
          <NavBar/>
        <MainContainer/>
        <Footer/>
      </div>
    </LoginProvider>
  );
}

export default App;
