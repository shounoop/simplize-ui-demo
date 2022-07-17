import classNames from 'classnames/bind';
import styles from './NewsModal.module.scss'

import { Modal } from 'antd'
import convertHtmlToReact from '@hedgedoc/html-to-react';

const cx = classNames.bind(styles)

function NewsModal({ isModalVisible, onCancel, newsItem }) {
  
  function transform(node) {
    if (node.type === 'text' && node.data === ' ')
      return null
  }

  return (
    <Modal title={(newsItem.ticker && `${newsItem.ticker} | ${newsItem.companyName}`) || null}
      visible={isModalVisible}
      width={944}
      footer={null}
      onCancel={onCancel}
    >
      <div className={cx('container')}>
        <div className={cx('publication')}>
          <div className={cx('publisher')}>{newsItem.sourceNameDisplay}</div>
          <div className={cx('separation')}>|</div>
          <div className={cx('date')}>{newsItem.createdDate}</div>
        </div>
        <div className={cx('title')}>{newsItem.title}</div>
        <div className={cx('content')}>{convertHtmlToReact(newsItem.content, {decodeEntities: true, transform})}</div>

        {newsItem.ticker && <button className={cx('btn')}>Xem phân tích</button>}
      </div>
    </Modal>
  );
}

export default NewsModal;