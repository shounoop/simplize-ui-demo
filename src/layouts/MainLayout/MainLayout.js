import classNames from 'classnames/bind'
import styles from './MainLayout.module.scss'

import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const cx = classNames.bind(styles)

function MainLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <Banner />
      <div className={cx('container')}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;