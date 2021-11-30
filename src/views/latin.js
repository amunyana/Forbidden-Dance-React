import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import LatinComp from '../components/latin-comp'
import styles from './latin.module.css'

const Latin = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Forbidden Dance</title>
      </Helmet>
      <div className={styles['Latin11022']}>
        <Link to="/home" className={styles['text']}>
          forbidden dance co.
        </Link>
        <img
          alt="Rectangle1311955"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTU5JyBoZWlnaHQ9JzEyNicgdmlld0JveD0nMCAwIDE1OSAxMjYnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxyZWN0IHk9Jy0yMjYnIHdpZHRoPScxNTknIGhlaWdodD0nMzUyJyBmaWxsPScjRjlENUJEJyBmaWxsLW9wYWNpdHk9JzAuNicvPgo8L3N2Zz4K"
          className={styles['image']}
        />
        <div className={styles['Frame111024']}>
          <Link to="/about" className={styles['text1']}>
            About
          </Link>
          <span className={styles['text2']}>Classes</span>
          <Link to="/performancesand-workshops" className={styles['text3']}>
            Performances &amp; Workshops
          </Link>
        </div>
        <div className={styles['Frame6132207']}>
          <div className={styles['Group9132204']}>
            <img
              alt="Rectangle1111936"
              src="/playground_assets/Rectangle1111936-qvy-400h.png"
              className={styles['image1']}
            />
            <img
              alt="Rectangle1211937"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMzE4JyBoZWlnaHQ9JzQ3JyB2aWV3Qm94PScwIDAgMzE4IDQ3JyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPgo8cmVjdCB3aWR0aD0nMzE4JyBoZWlnaHQ9JzQ3JyBmaWxsPScjRjlENUJEJy8+Cjwvc3ZnPgo="
              className={styles['image2']}
            />
            <Link to="/bellydance" className={styles['text4']}>
              bellydance
            </Link>
          </div>
          <LatinComp></LatinComp>
          <div className={styles['Group11132206']}>
            <img
              alt="Rectangle711031"
              src="/playground_assets/Rectangle711031-ybhm-400h.png"
              className={styles['image3']}
            />
            <img
              alt="Rectangle1011033"
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

export default Latin
