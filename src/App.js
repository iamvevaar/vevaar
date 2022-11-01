import { Header ,About , Contact , Experiences , Footer , Navbar , Portfolio , Footermain} from "./components/main"
function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <About/>
      <Experiences/>
      {/* <Services/> */}
      <Portfolio/>
      <Contact/>
      <Footermain/>
      <Footer/>
    </div>
  );
}

export default App;
