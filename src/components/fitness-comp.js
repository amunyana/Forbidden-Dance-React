import React from 'react'

import PropTypes from 'prop-types'

import styles from './fitness-comp.module.css'

const FitnessComp = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <img
        alt="Rectangle711213"
        src="/playground_assets/Rectangle711213-24bk-400h.png"
        className={styles['image']}
      />
      <img
        alt="Rectangle1311226"
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMzY5JyBoZWlnaHQ9JzM1Nicgdmlld0JveD0nMCAwIDM2OSAzNTYnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxyZWN0IHdpZHRoPSczNjknIGhlaWdodD0nMzU2JyBmaWxsPScjRjlENUJEJyBmaWxsLW9wYWNpdHk9JzAuNicvPgo8L3N2Zz4K"
        className={styles['image1']}
      />
      <img
        alt="Rectangle1311227"
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjUxJyBoZWlnaHQ9JzcnIHZpZXdCb3g9JzAgMCAyNTEgNycgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHJlY3Qgd2lkdGg9JzI1MScgaGVpZ2h0PSc3JyBmaWxsPScjRjlENUJEJy8+Cjwvc3ZnPgo="
        className={styles['image2']}
      />
      <img
        alt="Rectangle1511231"
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjE4JyBoZWlnaHQ9JzcnIHZpZXdCb3g9JzAgMCAyMTggNycgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHJlY3Qgd2lkdGg9JzIxOCcgaGVpZ2h0PSc3JyBmaWxsPScjRjlENUJEJy8+Cjwvc3ZnPgo="
        className={styles['image3']}
      />
      <img
        alt="Rectangle1611232"
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjUxJyBoZWlnaHQ9JzcnIHZpZXdCb3g9JzAgMCAyNTEgNycgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHJlY3Qgd2lkdGg9JzI1MScgaGVpZ2h0PSc3JyBmaWxsPScjRjlENUJEJy8+Cjwvc3ZnPgo="
        className={styles['image4']}
      />
      <span className={styles['text']}>
        Fitness class designed for social dancers looking to level up or
        maintain
      </span>
    </div>
  )
}

FitnessComp.defaultProps = {
  rootClassName: '',
}

FitnessComp.propTypes = {
  rootClassName: PropTypes.string,
}

export default FitnessComp
