import React, { useState } from 'react';
import ImageUploader from 'react-images-upload';
import shortid from 'shortid';

export default () => {
  const [images, setImages] = useState([]);
  const deleteImageIds = [];
  const createObjectURL =
    (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;
  console.log(images);
  const upImage = (files) => {
    console.log(files);
    const newImages = images.concat({
      imgFile: files[files.length - 1],
      id: shortid.generate(),
    });
    setImages(newImages);
  };
  const deleteImage = (id) => {
    deleteImageIds.push(id);
    console.log(deleteImageIds);
    setImages(
      images.filter((image) => {
        const result = deleteImageIds.includes(image.id);
        return !result;
      })
    );
  };
  return (
    <>
      <ImageUploader
        withPreview
        name={'image'}
        buttonText="hello"
        label="upload image"
        withIcon={true}
        onChange={upImage}
        imgExtension={['.jpg', '.gif', '.png', '.gif']}
        maxFileSize={5242880}
      />
      <div style={{ display: 'flex' }}>
        {images.map((image, index) => {
          const imageUrl = createObjectURL(image.imgFile);
          return (
            <div key={index}>
              <div style={{ width: '300px' }}>
                <img style={{ width: '300px' }} alt="image" src={imageUrl} />
              </div>
              <button
                onClick={() => {
                  deleteImage(image.id);
                }}>
                削除
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
