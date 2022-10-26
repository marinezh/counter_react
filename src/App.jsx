
import './App.css';
import './Header.css';
import './Main.css';
import './Footer.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';




const App= () => {
  return (
    <div className="App">
      <Header name = "marGit"/>
      {/* <Header name="marGit" /> */}
      {/* <header /> */}
      <Main />
      
      <Footer />
  
    </div>
    
  );
}

export default App;
