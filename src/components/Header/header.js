import Search from "./search";

const Header = () => {
    return (
        <div className="header">
            <div className="headerLogoBox">
                <div className="imgLogoBox">
                    <img className="imgLogo" src='https://cdn.zeplin.io/60ba3ca70f21c9a5abfe2d14/assets/09CE886B-BD49-44C8-AD82-7C83F6F45619.svg' alt='logo'></img>
                </div>
                <button className="nameLogo">
                    PestRadar
                </button>
            </div>
            <div className="headerInteractionBox">
                <Search />
                <div className="profileInteractionBox">
                    <div className="profileBox">
                        <div className="profileImgLogoBox">
                            <img className="profileImgLogo" src='https://cdn.zeplin.io/60ba3ca70f21c9a5abfe2d14/assets/F0B22D0D-30B9-4E9D-8C6C-24B3A82B9A96.png' alt='img'></img>
                        </div>
                        <button className="profileName">
                            Astarta Company
                        </button>
                    </div>
                    <button className="profileLogOut">
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header;