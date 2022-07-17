import classNames from "classnames/bind";
import styles from './NewsItem.module.scss'

import { dot } from '../../assets/images'
import React from 'react';

const cx = classNames.bind(styles)

function NewsItem({ newsItem, onClick }) {

  return (
    <div className={cx('wrapper')} onClick={onClick}>
      <div className={cx('container')}>
        <div className={cx('main')}>
          <div className={cx('title')}>{newsItem.title}</div>
          <div className={cx('description')}>{newsItem.description}</div>
          <div className={cx('footer')}>
            <div className={cx('newspaper-name')}>{newsItem.sourceNameDisplay}</div>
            <div className={cx('dot-icon')}>
              <img src={dot} alt=""></img>
            </div>
            <div className={cx('time')}>{newsItem.createdDateTimeAgo}</div>
          </div>
        </div>

        <div className={cx('image')}>
          <img src={newsItem.thumbUrl} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;