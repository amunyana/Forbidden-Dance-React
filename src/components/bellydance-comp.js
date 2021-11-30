import React from 'react'

import PropTypes from 'prop-types'

import styles from './bellydance-comp.module.css'

const BellydanceComp = (props) => {
  return (
    <div
      className={` ${styles['Group8132186']} ${styles[props.rootClassName]} `}
    >
      <img
        alt="Rectangle51109"
        src="/playground_assets/Rectangle51109-tcvq-400h.png"
        className={styles['image']}
      />
      <img
        alt="Rectangle1111019"
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMzY5JyBoZWlnaHQ9JzM1Nicgdmlld0JveD0nMCAwIDM2OSAzNTYnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxyZWN0IHdpZHRoPSczNjknIGhlaWdodD0nMzU2JyBmaWxsPScjRjlENUJEJyBmaWxsLW9wYWNpdHk9JzAuNicvPgo8L3N2Zz4K"
        className={styles['image1']}
      />
      <img
        alt="Rectangle811012"
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjIyJyBoZWlnaHQ9JzcnIHZpZXdCb3g9JzAgMCAyMjIgNycgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHJlY3Qgd2lkdGg9JzIyMicgaGVpZ2h0PSc3JyBmaWxsPScjRjlENUJEJy8+Cjwvc3ZnPgo="
        className={styles['image2']}
      />
      <img
        alt="Rectangle1211020"
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTU3JyBoZWlnaHQ9JzcnIHZpZXdCb3g9JzAgMCAxNTcgNycgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHJlY3Qgd2lkdGg9JzE1NycgaGVpZ2h0PSc3JyBmaWxsPScjRjlENUJEJy8+Cjwvc3ZnPgo="
        className={styles['image3']}
      />
      <span className={styles['text']}>egyptian</span>
      <span className={styles['text1']}>props</span>
    </div>
  )
}

BellydanceComp.defaultProps = {
  rootClassName: '',
}

BellydanceComp.propTypes = {
  rootClassName: PropTypes.string,
}

export default BellydanceComp
