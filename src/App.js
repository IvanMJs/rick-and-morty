import { BrowserRouter as Router, Route } from "react-router-dom";
import Characters from "./pages/Character";
import Location from "./pages/Location";
import { Tab, TabList, Tabs } from "@chakra-ui/tabs";
import { Stack } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

import Episode from "./pages/Episode";

import Switch from "./components/Switch";
import ShowEpisode from "./pages/Episode/showEpisode";
import ShowCharacter from "./pages/Character/viewCharacter";
import ShowLocation from "./pages/Location/showLocation";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Stack>
          <Tabs variant="unstyled" shadow="sm" align="center">
            <TabList>
              <Tab>
                <Link to="/episode">Episodios</Link>
              </Tab>
              <Tab>
                <Link to="/character">Personajes</Link>
              </Tab>
              <Tab>
                <Link to="/location">Lugares</Link>
              </Tab>
              <Switch />
            </TabList>
          </Tabs>
        </Stack>
        <Route path="/showEpisode" component={ShowEpisode} />
        <Route path="/showLocation" component={ShowLocation} />
        <Route path="/showCharacter" component={ShowCharacter} />
        <Route path="/episode" component={Episode} />
        <Route path="/character" component={Characters} />
        <Route path="/location" component={Location} />
        <Route path="/" component={Home} />
      </Router>
    </>
  );
}

export default App;
