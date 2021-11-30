import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import FitnessComp from '../components/fitness-comp'
import styles from './fitness.module.css'

const Fitness = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Forbidden Dance</title>
      </Helmet>
      <div className={styles['Fitness1124']}>
        <Link to="/home" className={styles['text']}>
          forbidden dance co.
        </Link>
        <img
          alt="Rectangle1411956"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTU5JyBoZWlnaHQ9JzEyNicgdmlld0JveD0nMCAwIDE1OSAxMjYnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxyZWN0IHk9Jy0yMjYnIHdpZHRoPScxNTknIGhlaWdodD0nMzUyJyBmaWxsPScjRjlENUJEJyBmaWxsLW9wYWNpdHk9JzAuNicvPgo8L3N2Zz4K"
          className={styles['image']}
        />
        <div className={styles['Frame11126']}>
          <Link to="/about" className={styles['text1']}>
            About
          </Link>
          <span className={styles['text2']}>Classes</span>
          <Link to="/performancesand-workshops" className={styles['text3']}>
            Performances &amp; Workshops
          </Link>
        </div>
        <div className={styles['Frame8132289']}>
          <div className={styles['Group12132286']}>
            <img
              alt="Rectangle511211"
              src="/playground_assets/Rectangle511211-u67m-400h.png"
              className={styles['image1']}
            />
            <img
              alt="Rectangle1111221"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMzE4JyBoZWlnaHQ9JzQ3JyB2aWV3Qm94PScwIDAgMzE4IDQ3JyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPgo8cmVjdCB3aWR0aD0nMzE4JyBoZWlnaHQ9JzQ3JyBmaWxsPScjRjlENUJEJy8+Cjwvc3ZnPgo="
              className={styles['image2']}
            />
            <Link to="/bellydance" className={styles['text4']}>
              bellydance
            </Link>
          </div>
          <div className={styles['Group13132287']}>
            <img
              alt="Rectangle1311223"
              src="/playground_assets/Rectangle1311223-f2mc-400h.png"
              className={styles['image3']}
            />
            <img
              alt="Rectangle1411224"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMzE4JyBoZWlnaHQ9JzQ3JyB2aWV3Qm94PScwIDAgMzE4IDQ3JyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPgo8cmVjdCB3aWR0aD0nMzE4JyBoZWlnaHQ9JzQ3JyBmaWxsPScjRjlENUJEJy8+Cjwvc3ZnPgo="
              className={styles['image4']}
            />
            <Link to="/latin" className={styles['text5']}>
              latin
            </Link>
          </div>
          <div className={styles['Group14132288']}>
            <FitnessComp></FitnessComp>
            <img
              alt="Rectangle1711233"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTEzJyBoZWlnaHQ9JzcnIHZpZXdCb3g9JzAgMCAxMTMgNycgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHJlY3Qgd2lkdGg9JzExMycgaGVpZ2h0PSc3JyBmaWxsPScjRjlENUJEJy8+Cjwvc3ZnPgo="
              className={styles['image5']}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fitness
