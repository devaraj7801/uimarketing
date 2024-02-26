import{Route,Switch,BrowserRouter} from "react-router-dom"
import Signup from "./Components/Signup"
import Home from "./Components/Home"

function App (){
  return(
    <BrowserRouter>
    <Switch>
    <Route exact path="/signup" component={Signup} /> 
    <Route exact path="/" component={Home} />
    </Switch>
    </BrowserRouter>
    
  )
}

export default App