function Header(){
    return(
        <div className="header">
            <div className="content">
                <div class="item">
                    <img src='/weather-sun.png' alt="logo" />
                    <span> Weather 99 </span>
                </div>
                <div class="item">
                    <img src="/refresh-circle.png" alt="refreshIcon"/>
                    <span> Refresh </span>
                </div>
            </div>
        </div>
    )
}


export default Header