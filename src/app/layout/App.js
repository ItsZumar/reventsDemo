import { Container } from "@material-ui/core";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Container style={{ marginTop: 45 }}>
        <EventDashboard />
      </Container>
    </>
  );
}

export default App;
