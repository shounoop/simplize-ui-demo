import { useState } from 'react'

import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'

const cx = classNames.bind(styles)

function Header() {
  const [active, setActive] = useState('/');

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('content')}>
          <div className={cx('logo')}>
            <img src='https://simplize.vn/static/media/logosimwhite2.242547.png' alt="icon"></img>
          </div>
          <nav className={cx('nav')}>
            <Link className={(active === '/') ? cx('active') : ""} to="/" onClick={() => setActive('/')}>Trang chủ</Link>
            <Link className={(active === '/blog') ? cx('active') : ""} to="/blog" onClick={() => setActive('/blog')}>Blog</Link>
            <Link className={(active === '/knowledge') ? cx('active') : ""} to="/knowledge" onClick={() => setActive('/knowledge')}>Kiến thức</Link>
            <Link className={(active === '/hello') ? cx('active') : ""} to="/hello" onClick={() => setActive('/hello')}>Xin chào</Link>
            <Link className={(active === '/blog-detail') ? cx('active') : ""} to="/blog-detail" onClick={() => setActive('/blog-detail')}>Chi tiết</Link>
          </nav>
          <div className={cx('actions')}>
            <button className={cx('sign-in')}>Đăng nhập</button>
            <button className={cx('sign-up')}>Đăng ký</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;