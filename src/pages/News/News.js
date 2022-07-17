import axios from 'axios';
import classNames from 'classnames/bind'
import { useEffect, useState } from 'react';

import NewsItem from '../../components/NewsItem/NewsItem';
import NewsModal from '../../components/NewsModal/NewsModal';
import styles from './News.module.scss'

const cx = classNames.bind(styles);

function News() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newsItems, setNewsItems] = useState([]);
  const [newsId, setNewsId] = useState(null)
  const [currentNews, setCurrentNews] = useState(null);

  useEffect(() => {
    const accessToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0aGFva2lldXZhbkBnbWFpbC5jb20iLCJhdXRoIjoiUk9MRV9VU0VSLFJPTEVfQURNSU4iLCJ1aWQiOjQ1LCJleHAiOjE2NTgxMjI4ODF9.z3Mf29hC8EPd-VZeendLnKTqW_GIUnYHi-dVdQDReJYxCVFiTXyJeH08uZs4vHRkYziUaDrA0WN9oo0DKzr5qA"

    axios({
      method: "get",
      url: 'https://api.simplize.dev/api/company/news-event/list?page=0&size=15',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    })
      .then(res => {
        const data = res.data.data
        setNewsItems(data);
      })
  }, [])

  useEffect(() => {
    const accessToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0aGFva2lldXZhbkBnbWFpbC5jb20iLCJhdXRoIjoiUk9MRV9VU0VSLFJPTEVfQURNSU4iLCJ1aWQiOjQ1LCJleHAiOjE2NTgxMjI4ODF9.z3Mf29hC8EPd-VZeendLnKTqW_GIUnYHi-dVdQDReJYxCVFiTXyJeH08uZs4vHRkYziUaDrA0WN9oo0DKzr5qA"

    if (newsId) {
      axios({
        method: 'get',
        url: `https://api.simplize.dev/api/company/news-event/detail/${newsId}`,
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
        .then(res => {
          const data = res.data.data
          setCurrentNews(data)
        })
    }

  }, [newsId])

  const showModal = (id) => {
    setNewsId(id)
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={cx('wrapper')}>
      {
        newsItems.map((newsItem, index) => (
          <NewsItem
            newsItem={newsItem}
            onClick={() => showModal(newsItem.id)}
            key={index}
          />
        ))
      }

      {currentNews && <NewsModal
        isModalVisible={isModalVisible}
        onCancel={handleCancel}
        newsItem={currentNews}
      />}
    </div>
  )
}

export default News;