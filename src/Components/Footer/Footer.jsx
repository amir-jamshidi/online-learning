import { AiFillHeart } from 'react-icons/ai';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="header-content">
        <div className="container-fluid">

            <div className="row">

                <div className="col-12">
                    <h1 className='footer-title'>دوامیر</h1>
                    <p className='footer-sub-title'>تمامی حقوق سایت محفوظ می باشد &copy;</p>
                    <div className='footer-end-parent'>
                        <p className= 'footer-text-end'>طراحی شده با </p>
                        <AiFillHeart className='footer-icon'/>
                    </div>
                </div>

            </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
