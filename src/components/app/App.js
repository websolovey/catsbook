import { Container} from "reactstrap";
import NavBar from "../navbar/navbar";

import MainBlock from "../main/main-block";
//Симуляция базы данных
localStorage.setItem('login', 'Barsik');
localStorage.setItem('password', '12345');
localStorage.setItem('isLogin', 'false');

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <MainBlock/>
      </Container>
    </>
  );
}

export default App;
