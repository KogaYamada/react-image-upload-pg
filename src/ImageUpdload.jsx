import React from 'react';

const ImageUpload = ({ images, setImages }) => {
  let inputElement;
  const handleChange = (e) => {};
  const triggerFileUpload = () => {
    inputElement.click();
  };
  return (
    <form>
      <button onClick={triggerFileUpload}>ファイルアップロード</button>
      <input
        type="file"
        ref={(input) => {
          inputElement = input;
        }}
        onChange={handleChange}
        multiple={true}
      />
    </form>
  );
};

export default ImageUpload;
