const JapFoodMenu = ({ Home, AboutUs, OurMenu, ContactUs}) => {
    return (
        <nav>
            <ul id="menu">
                <li><a href="#">{Home}</a></li>
                <li><a href="#">{AboutUs}</a></li>
                <li><a href="#">{OurMenu}</a></li>
                <li><a href="#">{ContactUs}</a></li>
            </ul>
        </nav>
    );
}

export default JapFoodMenu;