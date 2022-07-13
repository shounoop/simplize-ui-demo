import classNames from "classnames/bind";
import styles from './Home.module.scss'

const cx = classNames.bind(styles)

function Home() {
  return (
    <div className={cx('wrapper')}>
      <h1 className={cx('title')}>Home Page</h1>
    </div>
  );
}

export default Home;