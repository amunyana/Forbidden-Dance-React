import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import BellydanceComp from '../components/bellydance-comp'
import styles from './bellydance.module.css'

const Bellydance = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Forbidden Dance</title>
      </Helmet>
      <div className={styles['Bellydance1102']}>
        <Link to="/home" className={styles['text']}>
          forbidden dance co.
        </Link>
        <img
          alt="Rectangle1111954"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTU5JyBoZWlnaHQ9JzEyNicgdmlld0JveD0nMCAwIDE1OSAxMjYnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxyZWN0IHk9Jy0yMjYnIHdpZHRoPScxNTknIGhlaWdodD0nMzUyJyBmaWxsPScjRjlENUJEJyBmaWxsLW9wYWNpdHk9JzAuNicvPgo8L3N2Zz4K"
          className={styles['image']}
        />
        <div className={styles['Frame11104']}>
          <Link to="/about" className={styles['text1']}>
            About
          </Link>
          <span className={styles['text2']}>Classes</span>
          <Link to="/performancesand-workshops" className={styles['text3']}>
            Performances &amp; Workshops
          </Link>
        </div>
        <div className={styles['Frame4132187']}>
          <BellydanceComp></BellydanceComp>
          <div className={styles['Group7132185']}>
            <img
              alt="Rectangle611010"
              src="/playground_assets/Rectangle611010-vz5tf-400h.png"
              className={styles['image1']}
            />
            <img
              alt="Rectangle911013"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMzE4JyBoZWlnaHQ9JzQ3JyB2aWV3Qm94PScwIDAgMzE4IDQ3JyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPgo8cmVjdCB3aWR0aD0nMzE4JyBoZWlnaHQ9JzQ3JyBmaWxsPScjRjlENUJEJy8+Cjwvc3ZnPgo="
              className={styles['image2']}
            />
            <Link to="/latin" className={styles['text4']}>
              latin
            </Link>
          </div>
          <div className={styles['Group6132184']}>
            <img
              alt="Rectangle711011"
              src="/playground_assets/Rectangle711011-7n7l-400h.png"
              className={styles['image3']}
            />
            <img
              alt="Rectangle1011014"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMzE4JyBoZWlnaHQ9JzQ3JyB2aWV3Qm94PScwIDAgMzE4IDQ3JyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPgo8cmVjdCB3aWR0aD0nMzE4JyBoZWlnaHQ9JzQ3JyBmaWxsPScjRjlENUJEJy8+Cjwvc3ZnPgo="
              className={styles['image4']}
            />
            <Link to="/fitness" className={styles['text5']}>
              fitness for dancers
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bellydance
