import React from 'react';
import {Menu ,MenuItem, ProSidebar} from "react-pro-sidebar";
import {Link} from "react-router-dom";
import { AiFillDashboard, AiTwotoneApi } from "react-icons/ai";

const BurgerMenu = () => {
    return (
    <ProSidebar>
        <Menu iconShape="circle">
            <MenuItem icon={<AiFillDashboard />}>Dashboard<Link to="/dashboard"/></MenuItem>
            <MenuItem icon={<AiTwotoneApi />}>Habits <Link to="/habits"/></MenuItem>
        </Menu>
    </ProSidebar>
    )
};

export default BurgerMenu;
