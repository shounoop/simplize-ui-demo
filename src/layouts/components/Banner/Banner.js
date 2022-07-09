import classNames from "classnames/bind";
import styles from './Banner.module.scss'
import { blogImg } from '../../../assets/images'

const cx = classNames.bind(styles)

function Banner() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        <div className={cx('brief')}>
          <div className={cx('brief-content')}>
            <h2>Blog</h2>
            <h1>Blog</h1>
            <p>Simplize giúp bạn loại bỏ cảm xúc khi mua bán, xây dựng chiến lược đầu tư và phân tích mọi cổ phiếu.</p>
            <button>Bắt đầu ngay</button>
          </div>
        </div>
        <div className={cx('image')}>
          <img src={blogImg} alt='blog'></img>
        </div>
      </div>
    </div>
  );
}

export default Banner;