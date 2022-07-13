import classNames from "classnames/bind";
import PostItem from "../PostItem";
import styles from './SlideBar.module.scss'
import { slideBar1, slideBar2, slideBar3, slideBar4, slideBar5 } from "../../assets/images";

const cx = classNames.bind(styles);

function SlideBar({ title }) {
  const newsTitle = "Tiêu đề bài viết tiêu đề bài viết tiêu đề"

  return (
    <div className={cx('wrapper')}>
      <h3 className={cx('title')}>{title}</h3>
      <div className={cx('posts')}>
        <PostItem imgSrc={slideBar1} title={newsTitle} df fullWidth slideBar />
        <PostItem imgSrc={slideBar2} title={newsTitle} df fullWidth slideBar />
        <PostItem imgSrc={slideBar3} title={newsTitle} df fullWidth slideBar />
        <PostItem imgSrc={slideBar4} title={newsTitle} df fullWidth slideBar />
        <PostItem imgSrc={slideBar5} title={newsTitle} df fullWidth slideBar />
      </div>
    </div>
  );
}

export default SlideBar;