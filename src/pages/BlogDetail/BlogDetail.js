import classNames from 'classnames/bind'
import styles from './BlogDetail.module.scss'
import { newPost1, newPost2, newPost3, smAvt, mdAvt, lgAvt, calendar, comment, example, picIcon, smileIcon1, smileIcon2, sendIcon, dot } from '../../assets/images'
import Category from '../../components/CategoryItem/CategoryItem'
import Comment from '../../components/Comment/Comment'
import TheoryItem from '../../components/TheoryItem/TheoryItem'

const cx = classNames.bind(styles)

function BlogDetail() {
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
      }
    ]
  }

  const theory1 = {
    title: "EBIT là gì?",
    sentences: [
      {
        content: "EBIT là viết tắt của Earnings Before Interest and Tax, hay Lợi nhuận trước lãi vay và thuế.",
        bold: null
      },
      {
        content: "Đây là một chỉ tiêu tài chính cực kỳ hữu ích khi bạn muốn đánh giá lợi nhuận của 1 doanh nghiệp.",
        bold: null
      },
      {
        content: "Vì nó nhìn cụ thể vào thu nhập mà doanh nghiệp tạo ra từ hoạt động cốt lõi của mình.",
        bold: null
      }
    ]
  }

  const theory2 = {
    title: "Công thức tính EBIT",
    sentences: [
      {
        content: "EBIT được tính bằng cách lấy Lợi nhuận ròng (LNST) cộng thêm Chi phí lãi vay và Thuế TNDN:",
        bold: null
      },
      {
        content: "EBIT = Lợi nhuận sau thuế + Thuế TNDN + Chi phí lãi vay",
        bold: true
      },
      {
        content: "Hay: EBIT = Lợi nhuận trước thuế + Chi phí lãi vay",
        bold: true
      },
      {
        content: "Đây là công thức được đa số nhà đầu tư sử dụng.",
        bold: null
      },
      {
        content: "Việc tính toán khá dễ dàng, bởi các con số đều đã được bóc tách, thể hiện trên Báo cáo KQKD của doanh nghiệp.",
        bold: null
      }
    ]
  }

  const cmt1 = {
    avatar: mdAvt,
    name: "Nguyen B",
    content: [
      "ad cho mình hỏi “Cổ đông không kiểm soát” & “Cổ đông thiểu số” cũng như cặp “Lợi ích của cổ đông không kiểm soát” & “Lợi ích của cổ đông thiểu số” là một hay là khác nhau vậy ad?",
      "Nếu khác nhau nhờ ad phân biệt giúp. Tks ad"
    ],
    hour: 1
  }

  const cmt2 = {
    avatar: mdAvt,
    name: "Alex",
    content: [
      "Bài viết rất hay. Tôi tính thử tỷ lệ EBIT Quý 1 năm 2021của Công ty chứng khoán SSI nhưng vẫn không đúng như con số trên trang web của fireant và tvsi. Chuyên gia có thể giúp tôi cách tính tỷ lệ EBIT? (Con số 2 trang web trên là 59.02%, con số tôi tính là 49.95%)"
    ],
    hour: 2
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('main')}>
          <div className={cx('list')}>
            <div className={cx('list-title')}>Mục lục</div>
            <p>1. EBIT là gì?</p>
            <p>2. Công thức tính EBIT</p>
            <p>3. Ý nghĩa của EBIT trong phân tích</p>
            <p>4. Ứng dụng của EBIT trong đầu tư</p>
            <p>5. EBITDA là gì?</p>
            <p>6. Công thức tính EBITDA</p>
            <p>7. Ý nghĩa của EBITDA trong phân tích</p>
            <p>8. Những lầm tưởng mà EBITDA gây ra cho nhà đầu tư</p>
            <p>9. Bonus: Warren Buffett nói gì về chỉ số EBITDA?</p>
            <p>10. Ứng dụng của EBITDA trong đầu tư</p>
          </div>

          <div className={cx('current-content')}>
            <div className={cx('content')}>
              <div className={cx('path')}>
                <span>{"Blog >"}</span>
                <span>{"Category 1 >"}</span>
                <span className={cx('cur-index')}>{"EBIT và EBITDA: Cách tính và áp dụng trong đầu tư (CHUẨN)"}</span>
              </div>

              <h1 className={cx('title')}>EBIT và EBITDA: Cách tính và áp dụng trong đầu tư (CHUẨN)</h1>

              <div className={cx('publication-info')}>
                <div className={cx('publisher')}>
                  <img src={smAvt} alt='' className={cx('avatar')}></img>
                  <h4 className={cx('nickname')}>Tuấn Trần</h4>
                </div>

                <div className={cx('publication-time')}>
                  <img src={calendar} alt='' className={cx('date-icon')}></img>
                  <h5 className={cx('time')}>11/01/2022 09:30</h5>
                </div>

                <div className={cx('comments')}>
                  <img src={comment} alt='' className={cx('comment-icon')}></img>
                  <h5 className={cx('quantity')}>10 bình luận</h5>
                </div>
              </div>

              <div className={cx('intro')}>
                <p>Là một nhà đầu tư hay chủ doanh nghiệp, bạn cần phải nắm bắt được các số liệu tài chính quan trọng để đo lường hiệu suất hoạt động của doanh nghiệp.</p>
                <p>EBIT và EBITDA là 2 trong số các số liệu quan trọng này.</p>
                <p>Vậy chúng là gì? Sự khác biệt giữa 2 chỉ số này như thế nào?</p>
                <p>Chúng được tính toán ra sao và những tác động có thể ảnh hưởng đến doanh nghiệp là gì?…</p>
                <p>Bài viết này của GoValue sẽ giúp bạn biết mọi thứ cần biết và giúp loại bỏ sự nhầm lẫn ra khỏi các số liệu này. Điều này sẽ cho phép bạn sử dụng những chỉ số này một cách hiệu quả hơn khi đánh giá một doanh nghiệp.</p>
              </div>

              <TheoryItem theory={theory1} />
              <TheoryItem theory={theory2} />

              <div className={cx('example')}>
                <h4 className={cx('example-title')}>Ví dụ cách tính EBIT của PPC năm 2019</h4>
                <div className={cx('notes')}>
                  <p>Để tính EBIT năm 2019 của CTCP Nhiệt điện Phả Lại (Mã: PPC).</p>
                  <p>Hãy chú ý khung màu đỏ trên Báo cáo KQKD 2019 của PPC.</p>
                </div>
                <div className={cx('image')}>
                  <img src={example} alt=''></img>
                </div>
                <div className={cx('solve')}>
                  <p>Mình sẽ lấy đơn vị tính là tỷ đồng cho dễ nhìn (ở BCTC PPC đơn vị là VNĐ). Khi đó:</p>
                  <p className={cx('bold')}>EBIT 2019 = LNTT + Lãi vay =  1,530 tỷ + 12 tỷ = 1,542 tỷ đồng</p>
                  <p>Năm 2019, PPC tạo ra 1,542 tỷ đồng lợi nhuận sau khi trừ các chi phí hoạt động trong năm.</p>
                </div>
              </div>
            </div>

            <div className={cx('discussion')}>
              <div className={cx('publisher')}>
                <div className='publisher-avt'>
                  <img src={lgAvt} alt=''></img>
                </div>
                <div className={cx('publisher-info')}>
                  <h3 className={cx('publisher-name')}>Tuấn Trần</h3>
                  <div className={cx('publisher-more')}>
                    <p>Anh Tuấn là 1 trong những chuyên gia hàng đầu về đầu tư tại Việt Nam. Hơn 7 năm kinh nghiệm trong lĩnh vực phân tích đầu tư, quản lý quỹ trước khi gia nhập Simplize team.</p>
                    <p>Anh Tuấn có hơn 3 năm kinh nghiệm trong lĩnh vực Khoa học dữ liệu và là kỹ sư trưởng cho các mô hình tính toán trên Simplize.</p>
                  </div>
                </div>
              </div>

              <div className={cx('dis-comments')}>
                <div className={cx('dis-comments-header')}>
                  <div className={cx('dis-comments-qty')}>
                    <h4>Bình luận</h4>
                    <p>10</p>
                  </div>

                  <div className={cx('dis-comments-latest')}>
                    <p>Mới nhất</p>
                    <img src='' alt=''></img>
                  </div>
                </div>

                <div className={cx('dis-comments-content')}>
                  <div className={cx('input-bar')}>
                    <div className={cx('publisher-avt')}>
                      <img src={mdAvt} alt=''></img>
                    </div>

                    <input className={cx('input-area')}>

                    </input>
                    <div className={cx('placeholder')}>
                      <span>Bạn phải</span>
                      <span className={cx('sign-in')}>Đăng nhập</span>
                      <span>để bình luận</span>
                    </div>

                    <div className={cx('icons')}>
                      <img src={picIcon} alt=''></img>
                      <img src={smileIcon1} alt=''></img>
                      <img src={smileIcon2} alt=''></img>
                      <img src={sendIcon} alt=''></img>
                    </div>
                  </div>

                  <Comment comment={cmt1} dot={dot} />
                  <Comment comment={cmt2} dot={dot} />
                </div>

                <div className={cx('dis-comments-footer')}>
                  <h5>Xem thêm 8 câu trả lời</h5>
                </div>
              </div>
            </div>
          </div>

          <div className={cx('other-list')}></div>
        </div>

        <div className={cx('extra')}>
          <Category category={newPosts} />
        </div>
      </div>
    </div>
  )
}

export default BlogDetail;