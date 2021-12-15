import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from './components/Home';
import Posts from './components/Posts';
import PostDetails from './containers/PostDetails';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <main className="container mt-5">
          {/* ideal place for us to have router config's  */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:postId" element={<PostDetails />} />  {/* postId is URL Param */}
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
