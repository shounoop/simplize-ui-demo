import classNames from "classnames/bind";
import styles from './Button.module.scss'

const cx = classNames.bind(styles);

function Button({ outline, children }) {
  return (
    <div className={cx('wrapper', {
      outline
    })}>
      <button className={cx('inner')}>
        {children}
      </button>
    </div>
  );
}

export default Button;