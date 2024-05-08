import './Footer.css';
import companyLogo from '../../assets/company-logo.jpeg';

const Footer = () => {
    return (
        <footer>
            <img src={companyLogo} />
            <h3> My Company </h3>
            <p> Bucharest, Romania </p>
            <p> Lascar Catargiu 31 </p>
        </footer>
    )
}

export default Footer;