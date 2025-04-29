import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import AboutMePage from './pages/aboutme/AboutMePage';

function App() {
  return (
        <BrowserRouter>
             <div className="App">
                <header className="app-header">
                  <Header />
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about-me" element={<AboutMePage />} />
                        {/* <Routes path="/gallery" element={<GalleryPage />} />
                        <Routes path="/blog" element={<BlogPage />} />
                        <Routes path="/my-stroy" element={<MyStoryPage />} /> */}
                    </Routes>
                    <footer className="app-footer">
                        <Footer />
                    </footer>
                </main>
             </div>
        </BrowserRouter>
  );
}

export default App;
