import axios from 'axios';
import classNames from 'classnames/bind'
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import NewsItem from '../../components/NewsItem/NewsItem';
import NewsModal from '../../components/NewsModal/NewsModal';
import styles from './News.module.scss'

const cx = classNames.bind(styles);

function News() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newsItems, setNewsItems] = useState([]);
  const [newsId, setNewsId] = useState(null)
  const [currentNews, setCurrentNews] = useState(null);
  const [page, setPage] = useState(0)

  useEffect(() => {
    const accessToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0aGFva2lldXZhbkBnbWFpbC5jb20iLCJhdXRoIjoiUk9MRV9VU0VSLFJPTEVfQURNSU4iLCJ1aWQiOjQ1LCJleHAiOjE2NTgyOTkwMTl9.z6YKLl-YoyVL8NXCszluoV7s4JuWctCSDjvyFLDcJU9TgVfhhGMZB68rnoaqFBw1MVqWjVDTck5wFz5qzFORRA"

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
    const accessToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0aGFva2lldXZhbkBnbWFpbC5jb20iLCJhdXRoIjoiUk9MRV9VU0VSLFJPTEVfQURNSU4iLCJ1aWQiOjQ1LCJleHAiOjE2NTgyOTkwMTl9.z6YKLl-YoyVL8NXCszluoV7s4JuWctCSDjvyFLDcJU9TgVfhhGMZB68rnoaqFBw1MVqWjVDTck5wFz5qzFORRA"

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
    setCurrentNews(null);
  };

  const fetMoreData = () => {
    setPage(page + 1)
    console.log(page)

    const accessToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0aGFva2lldXZhbkBnbWFpbC5jb20iLCJhdXRoIjoiUk9MRV9VU0VSLFJPTEVfQURNSU4iLCJ1aWQiOjQ1LCJleHAiOjE2NTgyOTkwMTl9.z6YKLl-YoyVL8NXCszluoV7s4JuWctCSDjvyFLDcJU9TgVfhhGMZB68rnoaqFBw1MVqWjVDTck5wFz5qzFORRA"

    axios({
      method: "get",
      url: `https://api.simplize.dev/api/company/news-event/list?page=${page}&size=15`,
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    })
      .then(res => {
        console.log(res.data);
        const data = res.data.data
        setNewsItems([...newsItems, ...data]);
      })
  }

  return (
    <div className={cx('wrapper')}>
      <InfiniteScroll
        dataLength={newsItems.length}
        next={fetMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {
          newsItems.map((newsItem, index) => (
            <NewsItem
              newsItem={newsItem}
              onClick={() => showModal(newsItem.id)}
              key={index}
            />
          ))
        }
      </InfiniteScroll>

      {currentNews && <NewsModal
        isModalVisible={isModalVisible}
        onCancel={handleCancel}
        newsItem={currentNews}
      />}
    </div>
  )
}

export default News;