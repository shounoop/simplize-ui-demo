import { Link } from 'react-router-dom'
import classNames from "classnames/bind";

import styles from './Home.module.scss'
import { newPost1, newPost2, newPost3, newPost4, newPost5, newPost6, dot, cat11, cat12, cat13, cat21, cat22, cat23, cat24, cat31, cat32, cat33, cat34, cat35, cat36, all, prev, next } from '../../assets/images'


const cx = classNames.bind(styles)

function Home() {
  return (
    <div className={cx('content')}>
      {/* New posts */}
      <div className={cx('new-posts')}>
        <div className={cx('bar')}>
          <h3>Bài viết mới nhất</h3>
          <Link to="/">Xem tất cả <span className={cx('all-icon')}><img src={all} alt=""></img></span></Link>
        </div>
        <div className={cx('posts')}>
          <div className={cx('post')}>
            <div className={cx('image')}>
              <img src={newPost1} alt="new post 1"></img>
            </div>

            <div className={cx('des')}>
              <h4 className={cx('title')}>Tiêu đề bài viết tiêu đề bài viết</h4>
              <div className={cx('info')}>
                <h5 className={cx('author')}>Tác giả</h5>
                <span className={cx('dot-icon')}>
                  <img src={dot} alt="dot"></img>
                </span>
                <h5 className={cx('date')}>Jan 11, 2022</h5>
              </div>
              <div className={cx('buttons')}>
                <button></button>
                <button></button>
              </div>
            </div>
          </div>

          <div className={cx('post')}>
            <div className={cx('image')}>
              <img src={newPost2} alt="new post 2"></img>
            </div>

            <div className={cx('des')}>
              <h4 className={cx('title')}>Tiêu đề bài viết tiêu đề bài viết</h4>
              <div className={cx('info')}>
                <h5 className={cx('author')}>Tác giả</h5>
                <span className={cx('dot-icon')}>
                  <img src={dot} alt="dot"></img>
                </span>
                <h5 className={cx('date')}>Jan 11, 2022</h5>
              </div>
              <div className={cx('buttons')}>
                <button></button>
                <button></button>
              </div>
            </div>
          </div>

          <div className={cx('post')}>
            <div className={cx('image')}>
              <img src={newPost3} alt="new post 3"></img>
            </div>

            <div className={cx('des')}>
              <h4 className={cx('title')}>Tiêu đề bài viết tiêu đề bài viết</h4>
              <div className={cx('info')}>
                <h5 className={cx('author')}>Tác giả</h5>
                <span className={cx('dot-icon')}>
                  <img src={dot} alt="dot"></img>
                </span>
                <h5 className={cx('date')}>Jan 11, 2022</h5>
              </div>
              <div className={cx('buttons')}>
                <button></button>
                <button></button>
              </div>
            </div>
          </div>

          <div className={cx('post')}>
            <div className={cx('image')}>
              <img src={newPost4} alt="new post 4"></img>
            </div>

            <div className={cx('des')}>
              <h4 className={cx('title')}>Tiêu đề bài viết tiêu đề bài viết</h4>
              <div className={cx('info')}>
                <h5 className={cx('author')}>Tác giả</h5>
                <span className={cx('dot-icon')}>
                  <img src={dot} alt="dot"></img>
                </span>
                <h5 className={cx('date')}>Jan 11, 2022</h5>
              </div>
              <div className={cx('buttons')}>
                <button></button>
                <button></button>
              </div>
            </div>
          </div>

          <div className={cx('post')}>
            <div className={cx('image')}>
              <img src={newPost5} alt="new post 5"></img>
            </div>

            <div className={cx('des')}>
              <h4 className={cx('title')}>Tiêu đề bài viết tiêu đề bài viết</h4>
              <div className={cx('info')}>
                <h5 className={cx('author')}>Tác giả</h5>
                <span className={cx('dot-icon')}>
                  <img src={dot} alt="dot"></img>
                </span>
                <h5 className={cx('date')}>Jan 11, 2022</h5>
              </div>
              <div className={cx('buttons')}>
                <button></button>
                <button></button>
              </div>
            </div>
          </div>

          <div className={cx('post')}>
            <div className={cx('image')}>
              <img src={newPost6} alt="new post 6"></img>
            </div>

            <div className={cx('des')}>
              <h4 className={cx('title')}>Tiêu đề bài viết tiêu đề bài viết</h4>
              <div className={cx('info')}>
                <h5 className={cx('author')}>Tác giả</h5>
                <span className={cx('dot-icon')}>
                  <img src={dot} alt="dot"></img>
                </span>
                <h5 className={cx('date')}>Jan 11, 2022</h5>
              </div>
              <div className={cx('buttons')}>
                <button></button>
                <button></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category 1 */}
      <div className={cx('category-1')}>
        <div className={cx('bar')}>
          <h3>Category 1</h3>
          <Link to="/">Xem tất cả <span className={cx('all-icon')}><img src={all} alt=""></img></span></Link>
        </div>

        <div className={cx('posts')}>
          <div className={cx('post')}>
            <div className={cx('image')}>
              <img src={cat11} alt="cat 1-1"></img>
            </div>

            <div className={cx('des')}>
              <h4 className={cx('title')}>Tiêu đề bài viết tiêu đề bài viết</h4>
              <p className={cx('brief')}>Lorem ipsum dolor sit amet, con adipiscing elit, sed do eiusmod...</p>
              <div className={cx('info')}>
                <h5 className={cx('author')}>Tác giả</h5>
                <span className={cx('dot-icon')}>
                  <img src={dot} alt="dot"></img>
                </span>
                <h5 className={cx('date')}>Jan 11, 2022</h5>
              </div>
              <div className={cx('buttons')}>
                <button></button>
                <button></button>
              </div>
            </div>
          </div>

          <div className={cx('post', 'feature')}>
            <div className={cx('image')}>
              <img src={cat12} alt="cat 1-2"></img>
            </div>

            <div className={cx('des')}>
              <h4 className={cx('title')}>Tiêu đề bài viết tiêu đề bài viết</h4>
              <p className={cx('brief')}>Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className={cx('info')}>
                <h5 className={cx('author')}>Tác giả</h5>
                <span className={cx('dot-icon')}>
                  <img src={dot} alt="dot"></img>
                </span>
                <h5 className={cx('date')}>Jan 11, 2022</h5>
              </div>
              <div className={cx('buttons')}>
                <button></button>
                <button></button>
              </div>
            </div>
          </div>

          <div className={cx('post')}>
            <div className={cx('image')}>
              <img src={cat13} alt="cat 1-3"></img>
            </div>

            <div className={cx('des')}>
              <h4 className={cx('title')}>Tiêu đề bài viết tiêu đề bài viết</h4>
              <p className={cx('brief')}>Lorem ipsum dolor sit amet, con adipiscing elit, sed do eiusmod...</p>
              <div className={cx('info')}>
                <h5 className={cx('author')}>Tác giả</h5>
                <span className={cx('dot-icon')}>
                  <img src={dot} alt="dot"></img>
                </span>
                <h5 className={cx('date')}>Jan 11, 2022</h5>
              </div>
              <div className={cx('buttons')}>
                <button></button>
                <button></button>
              </div>
            </div>
          </div>

          <i className={cx('nav-btn', 'prevBtn')}><img src={prev} alt=""></img></i>
          <i className={cx('nav-btn', 'nextBtn')}><img src={next} alt=""></img></i>
        </div>
      </div>

      {/* Category 2 */}
      <div className={cx('category-2')}>
        <div className={cx('bar')}>
          <h3>Category 2</h3>
          <Link to="/">Xem tất cả <span className={cx('all-icon')}><img src={all} alt=""></img></span></Link>
        </div>

        <div className={cx('posts')}>
          <div className={cx('post')}>
            <div className={cx('image')}>
              <img src={cat21} alt="cat 2-1"></img>
            </div>

            <div className={cx('des')}>
              <h4 className={cx('title')}>Tiêu đề bài viết tiêu đề bài viết</h4>
              <p className={cx('brief')}>Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempo...</p>
              <div className={cx('info')}>
                <h5 className={cx('author')}>Tác giả</h5>
                <span className={cx('dot-icon')}>
                  <img src={dot} alt="dot"></img>
                </span>
                <h5 className={cx('date')}>Jan 11, 2022</h5>
              </div>
              <div className={cx('buttons')}>
                <button></button>
                <button></button>
              </div>
            </div>
          </div>

          <div className={cx('post')}>
            <div className={cx('image')}>
              <img src={cat22} alt="cat 2-2"></img>
            </div>

            <div className={cx('des')}>
              <h4 className={cx('title')}>Tiêu đề bài viết tiêu đề bài viết</h4>
              <p className={cx('brief')}>Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempo...</p>
              <div className={cx('info')}>
                <h5 className={cx('author')}>Tác giả</h5>
                <span className={cx('dot-icon')}>
                  <img src={dot} alt="dot"></img>
                </span>
                <h5 className={cx('date')}>Jan 11, 2022</h5>
              </div>
              <div className={cx('buttons')}>
                <button></button>
                <button></button>
              </div>
            </div>
          </div>

          <div className={cx('post')}>
            <div className={cx('image')}>
              <img src={cat23} alt="cat 2-3"></img>
            </div>

            <div className={cx('des')}>
              <h4 className={cx('title')}>Tiêu đề bài viết tiêu đề bài viết</h4>
              <p className={cx('brief')}>Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempo...</p>
              <div className={cx('info')}>
                <h5 className={cx('author')}>Tác giả</h5>
                <span className={cx('dot-icon')}>
                  <img src={dot} alt="dot"></img>
                </span>
                <h5 className={cx('date')}>Jan 11, 2022</h5>
              </div>
              <div className={cx('buttons')}>
                <button></button>
                <button></button>
              </div>
            </div>
          </div>

          <div className={cx('post')}>
            <div className={cx('image')}>
              <img src={cat24} alt="cat 2-4"></img>
            </div>

            <div className={cx('des')}>
              <h4 className={cx('title')}>Tiêu đề bài viết tiêu đề bài viết</h4>
              <p className={cx('brief')}>Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempo...</p>
              <div className={cx('info')}>
                <h5 className={cx('author')}>Tác giả</h5>
                <span className={cx('dot-icon')}>
                  <img src={dot} alt="dot"></img>
                </span>
                <h5 className={cx('date')}>Jan 11, 2022</h5>
              </div>
              <div className={cx('buttons')}>
                <button></button>
                <button></button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Category 3 */}
      <div className={cx('category-3')}>
        <div className={cx('bar')}>
          <h3>Category 3</h3>
          <Link to="/">Xem tất cả <span className={cx('all-icon')}><img src={all} alt=""></img></span></Link>
        </div>
        <div className={cx('posts')}>
          <div className={cx('post')}>
            <div className={cx('image')}>
              <img src={cat31} alt="cat 3-1"></img>
            </div>

            <div className={cx('des')}>
              <h4 className={cx('title')}>Tiêu đề bài viết tiêu đề bài viết</h4>
              <div className={cx('info')}>
                <h5 className={cx('author')}>Tác giả</h5>
                <span className={cx('dot-icon')}>
                  <img src={dot} alt="dot"></img>
                </span>
                <h5 className={cx('date')}>Jan 11, 2022</h5>
              </div>
              <div className={cx('buttons')}>
                <button></button>
                <button></button>
              </div>
            </div>
          </div>

          <div className={cx('post')}>
            <div className={cx('image')}>
              <img src={cat32} alt="cat 3-2"></img>
            </div>

            <div className={cx('des')}>
              <h4 className={cx('title')}>Tiêu đề bài viết tiêu đề bài viết</h4>
              <div className={cx('info')}>
                <h5 className={cx('author')}>Tác giả</h5>
                <span className={cx('dot-icon')}>
                  <img src={dot} alt="dot"></img>
                </span>
                <h5 className={cx('date')}>Jan 11, 2022</h5>
              </div>
              <div className={cx('buttons')}>
                <button></button>
                <button></button>
              </div>
            </div>
          </div>

          <div className={cx('post')}>
            <div className={cx('image')}>
              <img src={cat33} alt="cat 3-3"></img>
            </div>

            <div className={cx('des')}>
              <h4 className={cx('title')}>Tiêu đề bài viết tiêu đề bài viết</h4>
              <div className={cx('info')}>
                <h5 className={cx('author')}>Tác giả</h5>
                <span className={cx('dot-icon')}>
                  <img src={dot} alt="dot"></img>
                </span>
                <h5 className={cx('date')}>Jan 11, 2022</h5>
              </div>
              <div className={cx('buttons')}>
                <button></button>
                <button></button>
              </div>
            </div>
          </div>

          <div className={cx('post')}>
            <div className={cx('image')}>
              <img src={cat34} alt="cat 3-4"></img>
            </div>

            <div className={cx('des')}>
              <h4 className={cx('title')}>Tiêu đề bài viết tiêu đề bài viết</h4>
              <div className={cx('info')}>
                <h5 className={cx('author')}>Tác giả</h5>
                <span className={cx('dot-icon')}>
                  <img src={dot} alt="dot"></img>
                </span>
                <h5 className={cx('date')}>Jan 11, 2022</h5>
              </div>
              <div className={cx('buttons')}>
                <button></button>
                <button></button>
              </div>
            </div>
          </div>

          <div className={cx('post')}>
            <div className={cx('image')}>
              <img src={cat35} alt="cat 3-5"></img>
            </div>

            <div className={cx('des')}>
              <h4 className={cx('title')}>Tiêu đề bài viết tiêu đề bài viết</h4>
              <div className={cx('info')}>
                <h5 className={cx('author')}>Tác giả</h5>
                <span className={cx('dot-icon')}>
                  <img src={dot} alt="dot"></img>
                </span>
                <h5 className={cx('date')}>Jan 11, 2022</h5>
              </div>
              <div className={cx('buttons')}>
                <button></button>
                <button></button>
              </div>
            </div>
          </div>

          <div className={cx('post')}>
            <div className={cx('image')}>
              <img src={cat36} alt="cat 3-6"></img>
            </div>

            <div className={cx('des')}>
              <h4 className={cx('title')}>Tiêu đề bài viết tiêu đề bài viết</h4>
              <div className={cx('info')}>
                <h5 className={cx('author')}>Tác giả</h5>
                <span className={cx('dot-icon')}>
                  <img src={dot} alt="dot"></img>
                </span>
                <h5 className={cx('date')}>Jan 11, 2022</h5>
              </div>
              <div className={cx('buttons')}>
                <button></button>
                <button></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;