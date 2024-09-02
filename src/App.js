//import logo from './logo.svg';
import './App.css';
import AddBlog from './components/AddBlog';
import ViewBlogs from './components/ViewBlogs';
//import Course from './components/Course';
//import { Button } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import Home from "./components/Home";
import Navbar from './components/navbar';
import { Container, Row, Col } from 'reactstrap';
import Sidebar from './components/Sidebar';
//import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConnectWithUs from './components/ConnectWithUs';
import Achievements from './components/Achievement';


function App() {

  return (
    <>
      <Router>
        <ToastContainer />
        <Navbar />

        <Container>
          <Row>
            <Col md={2}>
              <Sidebar />
            </Col>
            <Col md={10}>
              <Routes>
                <Route path='/' Component={Home} exact />
                <Route path='/add-blog' Component={AddBlog} exact />
                <Route path='/all-blogs' Component={ViewBlogs} exact />
                <Route path='/connect' Component={ConnectWithUs} exact />
                <Route path='/achievement' Component={Achievements} exact />

              </Routes>

            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
}

export default App;
