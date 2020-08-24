import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import ImageUpload from './ImageUpdload';
import List from './List';

const App = () => {
  const [images, setImages] = useState([]);
  return (
    <>
      <ImageUpload setImages={setImages} />
      <List images={images} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
