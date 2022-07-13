import classNames from 'classnames/bind'
import styles from './Knowledge.module.scss'
import Button from '../../components/Button'
import PostItem from '../../components/PostItem/PostItem';
import { hotNews1, hotNews2, hotNews3, hotNews4, hotNews5, hotNews6, hotNews7, hotNews8, hotNews9 } from '../../assets/images';
import SlideBar from '../../components/SlideBar/SlideBar';

const cx = classNames.bind(styles);

function Knowledge() {
  const title = "Tiêu đề bài viết tiêu đề bài viết tiêu đề bài viết"
  const brief = "Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incididunt ut labore..."

  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>
        <h2>Thư viện kiến thức</h2>
        <h1>Simplize</h1>
      </div>
      <div className={cx('container')}>
        <nav className={cx('navbar')}>
          <Button outline>Tất cả</Button>
          <Button>Category 1</Button>
          <Button>Category 2</Button>
          <Button>Category 3</Button>
          <Button>Category 4</Button>
          <Button>Category 5</Button>
        </nav>
        <div className={cx('content')}>
          <div className={cx('hot-news')}>
            <PostItem imgSrc={hotNews1} title={title} brief={brief} fullWidth df />
            <PostItem imgSrc={hotNews2} title={title} brief={brief} fullWidth df />
            <PostItem imgSrc={hotNews3} title={title} brief={brief} fullWidth df />
            <PostItem imgSrc={hotNews4} title={title} brief={brief} fullWidth df />
            <PostItem imgSrc={hotNews5} title={title} brief={brief} fullWidth df />
            <PostItem imgSrc={hotNews6} title={title} brief={brief} fullWidth df />
            <PostItem imgSrc={hotNews7} title={title} brief={brief} fullWidth df />
            <PostItem imgSrc={hotNews8} title={title} brief={brief} fullWidth df />
            <PostItem imgSrc={hotNews9} title={title} brief={brief} fullWidth df />

          </div>
          <div className={cx('other-news')}>
            <SlideBar title="Bài viết được quan tâm" />
            <SlideBar title="Bài viết mới nhất" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Knowledge;