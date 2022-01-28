import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorHandleComponent from './components/errorHandleComponent/ErrorHandleComponent';
import HomeComponent from './components/home/HomeComponent';
import HeaderComponent from './components/header/HeaderComponent';

function App() {
  const urlPath = window.location.pathname;
  let isFlag = 0;
  if (urlPath === '/') {
    isFlag = 1;
  }
  return (
    <div className="App">
      <HeaderComponent />
      <BrowserRouter>
        {isFlag === 1 ? (
          <Routes>
            <Route path="/" element={<HomeComponent />} />
          </Routes>
        ) : (
          <Routes>
            <Route path={urlPath} element={<ErrorHandleComponent />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
