import classNames from "classnames/bind";
import styles from './Comment.module.scss'

const cx = classNames.bind(styles);

function Comment({ comment, dot }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('avatar')}>
          <img src={comment.avatar} alt=''></img>
        </div>

        <div className={cx('comment-info')}>
          <h3 className={cx('commentator-name')}>{comment.name}</h3>
          <div className={cx('content')}>
            {
              comment.content.map((sentence, index) => {
                return <p key={index}>{sentence}</p>
              })
            }
          </div>
        </div>
      </div>

      <div className={cx('response')}>
        <span>Phản hồi</span>
        <img src={dot} alt='dot-icon'></img>
        <span className={cx('hour')}>{comment.hour} giờ trước</span>
      </div>
    </div>
  );
}

export default Comment;