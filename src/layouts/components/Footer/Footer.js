import classNames from 'classnames/bind'
import styles from './Footer.module.scss'
import { logo } from '../../../assets/images'
import { facebook, email, youtube } from '../../../assets/icons'

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('inner')}>
          <div className={cx('info')}>
            <div className={cx('logo')}>
              <img src={logo} alt="logo"></img>
            </div>
            <p className={cx('name')}>CÔNG TY CỔ PHẦN SIMPLIZE</p>
            <p className={cx('mst')}>MST: 0109620361</p>
            <p className={cx('address')}>Số 25 ngõ 198 Thái Hà, P. Trung Liệt, Q. Đống Đa, TP. Hà Nội, Việt Nam</p>
            <p className={cx('copyright')}>Copyright © 2021 Simplize | Powered by Simplize</p>
          </div>

          <div className={cx('contact')}>
            <div className={cx('about-rules')}>
              <span className={cx('about-us')}>Về chúng tôi</span>
              <span className={cx('rules')}>Điều khoản sử dụng</span>
            </div>

            <div className={cx('packet-policy')}>
              <span className={cx('packet')}>Hội viên</span>
              <span className={cx('policy')}>Chính sách bảo mật</span>
            </div>

            <div className={cx('contact-socials')}>
              <span className={cx('contact-us')}>Liên hệ với chúng tôi!</span>
              <div className={cx('socials')}>
                <div className={cx('social-icon', 'facebook')}>
                  <img src={facebook} alt=""></img>
                </div>
                <div className={cx('social-icon', 'email')}>
                  <img src={email} alt=""></img>
                </div>
                <div className={cx('social-icon', 'youtube')}>
                  <img src={youtube} alt=""></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;