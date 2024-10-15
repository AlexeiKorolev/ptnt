import React from 'react';


function App() {

  return (<Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newpage" element={<NewPage />} />
    </Routes>
  </Router>);

  
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
}

export default App;