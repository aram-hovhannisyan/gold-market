// import React from 'react';
// import ImageUploading from 'react-images-uploading';
// import css from './ImgUploading.module.css'
// import { BiImageAdd } from "react-icons/bi";

// export function ImgUpload({ images, setImages }) {

//     const maxNumber = 1;

//     const onChange = (imageList, addUpdateIndex) => {
//         // data for submit
//         console.log(imageList, addUpdateIndex);
//         setImages(imageList)
//     };
//     return (
//         <div className={css.upload01}>
//             <ImageUploading
//                 multiple
//                 value={images}
//                 onChange={onChange}
//                 maxNumber={maxNumber}
//                 dataURLKey="data_url"
//                 img={images}
//             >
//                 {({
//                     imageList,
//                     onImageUpload,
//                     onImageRemoveAll,
//                     onImageUpdate,
//                     onImageRemove,
//                     isDragging,
//                     dragProps,
//                 }) => (
//                     // write your building UI
//                     <div className="upload__image-wrapper" style={{
//                         width: '100%',
//                         height: '100%',
//                         cursor: 'pointer',
//                         position: 'relative'
//                     }}>
//                         <div
//                             style={isDragging ? { color: 'red' } : undefined}
//                             onClick={onImageUpload}
//                             {...dragProps}
//                             className={css.upload02}
//                         >
//                             <BiImageAdd className={css.icon01} />
//                             <p>Загрузить</p> <span>Фото</span>
//                         </div>
//                         &nbsp;
//                         {
//                             imageList.map((image, index) => (
//                                 <div key={index} className="image-item" style={{
//                                     display: 'flex',
//                                     alignItems: 'center',
//                                     justifyContent: 'center',
//                                     position: 'absolute',
//                                     top: '0'
//                                 }}>
//                                     <img src={image['data_url']} alt="" width="60%" />
//                                 </div>
//                             ))
//                         }
//                     </div>
//                 )
//                 }
//             </ImageUploading >
//         </div >
//     );
// }