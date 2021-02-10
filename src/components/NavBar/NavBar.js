import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import RightMenu from './RightMenu';
import BottomMenu from './BottomMenu';
import './NavBar.css';
import 'antd/dist/antd.css';
import '../input.css';

function NavBar() {
    const [Search, setSearch] = useState('');

    const onSearchHandler = (e) => {
        setSearch(e.currentTarget.value);
    };

    return (
        <div>
            <div className="navbar">
                <div className="navbar-top"></div>
                <div className="navbar-middle">
                    <div className="left_item">
                        <Link to="/">
                            <h1>J2KB STORE</h1>
                        </Link>
                        <form>
                            <Input
                                className={'searchInput'}
                                value={Search}
                                onChange={onSearchHandler}
                                bordered={false}
                            />
                        </form>
                    </div>
                    <RightMenu />
                </div>
                <BottomMenu />
            </div>
        </div>
    );
}

export default NavBar;
