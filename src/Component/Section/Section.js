import css from './Section.module.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { goldArray1, goldArray2 } from '../InGold/Gold';
import {
    AiOutlineMan,
    AiOutlineWoman
} from "react-icons/ai";
import AddModal from '../Modal/AddModal';

const Section = () => {

    const [gold, setGold] = useState(goldArray1)

    return (
        <div className={css.section}>
            <div className={css.blk01}>
                <div className={css.blk02}>
                    <button className={css.but01} onClick={() => {
                        setGold(goldArray1)
                    }}>
                        <AiOutlineWoman className={css.icons} />
                    </button>
                    <button className={css.but01} onClick={() => {
                        setGold(goldArray2)
                    }}>
                        <AiOutlineMan className={css.icons} />
                    </button>
                </div>
                <ul className={css.ul01}>
                    {
                        gold.map(({ id, name, path, img }) => {
                            return (
                                <li key={id} className={css.li01}>
                                    <Link to={path} style={{
                                        width: '100%',
                                        height: '90%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-around',
                                        alignItems: 'center',
                                        color: 'black'
                                    }}>
                                        <img src={img} alt='404' style={{ width: '70px' }} />
                                        {name}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <AddModal setGold={setGold} gold={gold} />
            </div >
        </div >
    )
}

export default Section