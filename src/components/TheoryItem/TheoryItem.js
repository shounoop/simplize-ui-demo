import classNames from "classnames/bind";
import styles from './TheoryItem.module.scss'

const cx = classNames.bind(styles)

function TheoryItem({ theory }) {
  return (
    <div className={cx('wrapper')}>
      <h3 className={cx('lesson-title')}>{theory.title}</h3>
      <div className={cx('lesson-content')}>
        {
          theory.sentences.map((sentence, index) => {
            return (
              <p key={index} className={cx('', { bold: sentence.bold })}>{sentence.content}</p>
            )
          })
        }
      </div>
    </div>
  );
}

export default TheoryItem;