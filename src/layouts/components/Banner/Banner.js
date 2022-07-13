import classNames from "classnames/bind";
import styles from './Banner.module.scss'

const cx = classNames.bind(styles)

function Banner({ title, intros, small, imgSrc }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        <div className={cx('brief')}>
          <div className={cx('brief-content')}>
            {title === "Blog" ? <h2>Blog</h2> : null}
            <h1 className={cx('title')}>{title}</h1>
            <div className={cx('intros', { small })}>
              {intros.map((intro, index) => {
                return <p className={cx('intro')} key={index}>{intro}</p>
              })}
            </div>
            {title === "Blog" ? <button>Bắt đầu ngay</button> : null}
          </div>
        </div>
        <div className={cx('image')}>
          <img src={imgSrc} alt='blog'></img>
        </div>
      </div>
    </div>
  );
}

export default Banner;