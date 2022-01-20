import Search from "./search";
import React from "react";

const Header = () => {
    return (
        <div className="header">
            <div className="header_logo-box">
                <div className="img-logo-box">
                    <img className="img-logo" src='https://cdn.zeplin.io/60ba3ca70f21c9a5abfe2d14/assets/09CE886B-BD49-44C8-AD82-7C83F6F45619.svg' alt='logo'></img>
                </div>
                <button className="name_logo">
                    PestRadar
                </button>
            </div>
            <div className="header_interaction-box">
                <Search />
                <div className="profile_interaction-box">
                    <div className="profile_box">
                        <div className="profile_img-logo-box">
                            <img className="profile_img-logo" src='https://cdn.zeplin.io/60ba3ca70f21c9a5abfe2d14/assets/F0B22D0D-30B9-4E9D-8C6C-24B3A82B9A96.png' alt='img'></img>
                        </div>
                        <button className="profile_name">
                            Astarta Company
                        </button>
                    </div>
                    <button className="profile_log-out">
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;