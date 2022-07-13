import { Fragment } from 'react';
import { Link } from 'react-router-dom'

import classNames from "classnames/bind";
import styles from "./Category.module.scss"
import PostItem from "../PostItem";
import { all, prev, next } from '../../assets/images'

const cx = classNames.bind(styles);

function Category({ category }) {
  return (
    <div className={cx('category')}>
      <div className={cx('bar')}>
        <h3>{category.title}</h3>
        <Link to={category.to}>
          Xem tất cả
          <span className={cx('all-icon')}>
            <img src={all} alt=""></img>
          </span>
        </Link>
      </div>
      <div className={cx('posts')}>
        {
          category.items.map((item, index) =>
            <PostItem key={index} {...item} />
          )
        }
        {
          category.title === "Category 1" ?
            (
              <Fragment>
                <i className={cx('nav-btn', 'prevBtn')}><img src={prev} alt=""></img></i>
                <i className={cx('nav-btn', 'nextBtn')}><img src={next} alt=""></img></i>
              </Fragment>
            ) : null
        }
      </div>
    </div>
  );
}

export default Category;