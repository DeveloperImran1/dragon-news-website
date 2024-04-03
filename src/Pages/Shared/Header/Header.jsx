import logo from "../../../../src/assets/logo.png"
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <img src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format('LLLL')}</p>
        </div>
    );
};

export default Header;