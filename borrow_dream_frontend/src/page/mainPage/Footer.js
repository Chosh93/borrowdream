import React from "react";
import './styles.css';

const Footer = () => {

    return (
        <div className="footer py-4">
            <div className="container-footer">
                <div className="row-footer footer-align-items-center">
                    <div className="col-lg-4 text-lg-start">Copyright &copy; Your Website 2023</div>
                    <div className="col-lg-4 text-lg-end">
                        <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                        <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;