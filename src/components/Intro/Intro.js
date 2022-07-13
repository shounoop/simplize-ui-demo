import classNames from "classnames/bind";
import styles from "./Intro.module.scss"

const cx = classNames.bind(styles);

function Intro({ category, grey }) {
  return (
    <div className={cx('wrapper', { grey })}>
      <div className={cx('container')}>
        <h2 className={cx('main-title')}>{category.title}</h2>

        <div className={cx('intros')}>
          {
            category.intros.map((intro, index) => {
              return <p className={cx('intro')} key={index}>{intro}</p>
            })
          }
        </div>

        <div className={cx('feature')}>
          <div className={cx('title')}>
            <h1>{category.feature.title}</h1>
          </div>
          <div className={cx('contents')}>
            {
              category.feature.contents.map((content, index) => {
                return (
                  <div className={cx('content')} key={index}>
                    <h4 className={cx('gist')}>{content.content}</h4>
                    {
                      content.subContents.map((subContent, index) => {
                        return (
                          <p className={cx('sub-content')} key={index}>{subContent}</p>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        </div>

        {category.conclusion ? <p className={cx('conclusion')}>{category.conclusion}</p> : null}
      </div>
    </div>
  );
}

export default Intro;