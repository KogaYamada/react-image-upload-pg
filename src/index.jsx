import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import ImageUpload from './ImageUpdload';
import List from './List';
import ImageUp from './react-images-upload';

const App = () => {
  const [images, setImages] = useState([]);
  return (
    <>
      <ImageUp />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
