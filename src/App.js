
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import ConnectWallet from "./pages/ConnectWallet";
import AllNFT from "./pages/AllNFT";
import NFT from "./pages/NFT";
import Exchange from "./pages/Exchange";
import Buttons from "./pages/Buttons";
import ProofOfConcept from "./pages/ProofOfConcept";
import NftCollection from "./pages/NftCollection";
import BuyOffers from "./pages/BuyOffers";


function App() {
  return (
    <>
<Logo/>
<Switch>


    <Route path='/' exact>
        <Home/>
    </Route>
    
    <Route path='/NFT' >
        <NFT/>
    </Route>

    <Route path='/ConnectWallet' >
        <ConnectWallet/>
    </Route>

    <Route path='/AllNFT' >
        <AllNFT/>
    </Route>
    <Route path='/Exchange' >
        <Exchange/>
    </Route>
    <Route path='/Buttons' >
        <Buttons/>
    </Route>

    <Route path='/ProofOfConcept'>
        <ProofOfConcept/>
    </Route>
    
    <Route path='/NftCollection'>
        <NftCollection/>
    </Route>

    <Route path='/BuyOffers'>
        <BuyOffers/>
    </Route>


</Switch>

<Footer/>

    </>
  );
}

export default App;
