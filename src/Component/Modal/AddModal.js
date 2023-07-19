import React, { useState } from 'react'
import css from './AddModal.module.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {
    AiOutlineClose,
    AiOutlineMan,
    AiOutlineWoman
} from "react-icons/ai";
import { goldArray1, goldArray2 } from '../InGold/Gold';
import ImageUploading from 'react-images-uploading';
import { BiImageAdd } from "react-icons/bi";

const AddModal = ({ setGold, gold }) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [images, setImages] = React.useState([]);
    const [value, setValue] = useState('')

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    const maxNumber = 1;
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList)
    };

    return (
        <div className={css.blk02}>
            <Button style={{
                width: '100%',
                height: '100%',
                background: 'white',
                fontSize: '35px',
                color: 'grey',
                border: 'none',
                borderRadius: '5px',
                fontFamily: '"Courier New", Courier, monospace',
                boxShadow: '0 0 3px 0 black',
                cursor: 'pointer'
            }} onClick={() => {
                handleOpen()
            }}>+</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Добавить категорию
                        </Typography>
                        <button className={css.but03} onClick={() => { handleClose() }}>
                            <AiOutlineClose className={css.icons2} />
                        </button>
                    </div>
                    <div className={css.blk03}>
                        <button className={css.but04} onClick={() => { setGold(goldArray1) }}>
                            <AiOutlineWoman className={css.icons1} />
                            <p>Женский</p>
                        </button>
                        <button className={css.but04} onClick={() => {
                            setGold(goldArray2)
                        }}>
                            <AiOutlineMan className={css.icons1} />
                            <p>Мужской</p>
                        </button>
                        <input type='text' placeholder='Категория' value={value} className={css.input01} onChange={(ev) => {
                            setValue(ev.target.value)
                        }} />
                        <div className={css.upload01}>
                            <ImageUploading
                                multiple
                                value={images}
                                onChange={onChange}
                                maxNumber={maxNumber}
                                dataURLKey="data_url"
                                img={images}
                            >
                                {({
                                    imageList,
                                    onImageUpload,
                                    onImageRemoveAll,
                                    onImageUpdate,
                                    onImageRemove,
                                    isDragging,
                                    dragProps,
                                }) => (
                                    // write your building UI
                                    <div className="upload__image-wrapper" style={{
                                        width: '100%',
                                        height: '100%',
                                        cursor: 'pointer',
                                        position: 'relative',
                                        // background: 'red'
                                    }}>
                                        <div
                                            style={isDragging ? { color: 'red' } : undefined}
                                            onClick={onImageUpload}
                                            {...dragProps}
                                            className={css.upload02}
                                        >
                                            <BiImageAdd className={css.icon01} />
                                            <p>Загрузить</p> <span>Фото</span>
                                        </div>
                                        &nbsp;
                                        {
                                            imageList.map((image, index) => (
                                                <div key={index} className="image-item" style={{
                                                    minHeight: '150px',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    gap: '18px',
                                                    position: 'absolute',
                                                    top: '0'
                                                }}>
                                                    <img src={image['data_url']} alt="" style={{
                                                        width: "50%",
                                                        minHeight: '150px'
                                                    }} />
                                                    <button className={css.but05} onClick={() => {
                                                        gold === goldArray1 && value.trim() ? (
                                                            setGold(
                                                                [...gold,
                                                                {
                                                                    id: Math.random(),
                                                                    img: image['data_url'],
                                                                    name: value,
                                                                    path: `woman/${value}`
                                                                }
                                                                ]
                                                            )
                                                        ) : (
                                                            setGold(
                                                                [...gold,
                                                                {
                                                                    id: Math.random(),
                                                                    img: image['data_url'],
                                                                    name: value,
                                                                    path: `man/${value}`
                                                                }
                                                                ]
                                                            )
                                                        )
                                                        setValue('')
                                                        handleClose()
                                                        setImages([])
                                                    }}>Добавить</button>
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                                }
                            </ImageUploading >
                        </div >
                    </div>
                </Box>
            </Modal>
        </div >
    )
}

export default AddModal