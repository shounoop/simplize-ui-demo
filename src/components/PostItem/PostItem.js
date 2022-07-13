import { dot } from '../../assets/images'
import classNames from "classnames/bind";
import styles from './PostItem.module.scss'

const cx = classNames.bind(styles);

function PostItem({ 
  imgSrc,
  slideBar,
  fullWidth,
  df,
  small,
  medium,
  large,
  title,
  brief
}) {
  return (
    <div className={cx('post', { slideBar, fullWidth, df, small, medium, large })} >
      <div className={cx('image')}>
        <img src={imgSrc} alt=""></img>
      </div>

      <div className={cx('des')}>
        <h4 className={cx('title')}>{title}</h4>
        {brief && <p className={cx('brief')}>{brief}</p>}
        <div className={cx('info')}>
          <h5 className={cx('author')}>Tác giả</h5>
          <span className={cx('dot-icon')}>
            <img src={dot} alt="dot"></img>
          </span>
          <h5 className={cx('date')}>Jan 11, 2022</h5>
        </div>
        <div className={cx('buttons')}>
          <button></button>
          <button></button>
        </div>
      </div>
    </div>
  );
}

export default PostItem;