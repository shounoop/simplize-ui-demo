import classNames from "classnames/bind";
import styles from './Blog.module.scss'
import Banner from '../../layouts/components/Banner'
import Category from '../../components/CategoryItem/CategoryItem';
import { newPost1, newPost2, newPost3, newPost4, newPost5, newPost6, cat11, cat12, cat13, cat21, cat22, cat23, cat24, cat31, cat32, cat33, cat34, cat35, cat36, blogImg } from '../../assets/images'

const cx = classNames.bind(styles)

function Blog() {
  const newPosts = {
    title: "Bài viết mới nhất",
    to: "/",
    items: [
      {
        imgSrc: newPost1,
        title: "Tiêu đề bài viết tiêu đề bài viết"
      },
      {
        imgSrc: newPost2,
        title: "Tiêu đề bài viết tiêu đề bài viết"
      },
      {
        imgSrc: newPost3,
        title: "Tiêu đề bài viết tiêu đề bài viết"
      },
      {
        imgSrc: newPost4,
        title: "Tiêu đề bài viết tiêu đề bài viết"
      },
      {
        imgSrc: newPost5,
        title: "Tiêu đề bài viết tiêu đề bài viết"
      },
      {
        imgSrc: newPost6,
        title: "Tiêu đề bài viết tiêu đề bài viết"
      }
    ]
  }

  const category1 = {
    title: "Category 1",
    to: "/",
    items: [
      {
        imgSrc: cat11,
        small: true,
        title: "Tiêu đề bài viết tiêu đề bài viết",
        brief: "Lorem ipsum dolor sit amet, con adipiscing elit, sed do eiusmod..."
      },
      {
        imgSrc: cat12,
        large: true,
        title: "Tiêu đề bài viết tiêu đề bài viết tiêu đề bài viết",
        brief: "Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        imgSrc: cat13,
        small: true,
        title: "Tiêu đề bài viết tiêu đề bài viết",
        brief: "Lorem ipsum dolor sit amet, con adipiscing elit, sed do eiusmod..."
      }
    ]
  }

  const category2 = {
    title: "Category 2",
    to: "/",
    items: [
      {
        imgSrc: cat21,
        title: "Tiêu đề bài viết tiêu đề bài viết",
        brief: "Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempo...",
        df: true
      },
      {
        imgSrc: cat22,
        title: "Tiêu đề bài viết tiêu đề bài viết",
        brief: "Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempo...",
        df: true
      },
      {
        imgSrc: cat23,
        title: "Tiêu đề bài viết tiêu đề bài viết",
        brief: "Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempo...",
        df: true
      },
      {
        imgSrc: cat24,
        title: "Tiêu đề bài viết tiêu đề bài viết",
        brief: "Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempo...",
        df: true
      }
    ]
  }

  const category3 = {
    title: "Category 3",
    to: "/",
    items: [
      {
        imgSrc: cat31,
        title: "Tiêu đề bài viết tiêu đề bài viết"
      },
      {
        imgSrc: cat32,
        title: "Tiêu đề bài viết tiêu đề bài viết"
      },
      {
        imgSrc: cat33,
        title: "Tiêu đề bài viết tiêu đề bài viết"
      },
      {
        imgSrc: cat34,
        title: "Tiêu đề bài viết tiêu đề bài viết"
      },
      {
        imgSrc: cat35,
        title: "Tiêu đề bài viết tiêu đề bài viết"
      },
      {
        imgSrc: cat36,
        title: "Tiêu đề bài viết tiêu đề bài viết"
      }
    ]
  }

  const intros = [
    "Simplize giúp bạn loại bỏ cảm xúc khi mua bán, xây dựng chiến lược đầu tư và phân tích mọi cổ phiếu."
  ]

  return (
    <div className={cx('wrapper')} >
      <Banner title="Blog" intros={intros} imgSrc={blogImg} />
      <div className={cx('posts')}>
        <Category category={newPosts} />
        <Category category={category1} />
        <Category category={category2} />
        <Category category={category3} />
      </div>
    </div>
  );
}

export default Blog;