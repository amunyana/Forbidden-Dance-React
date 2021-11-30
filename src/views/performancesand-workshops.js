import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import styles from './performancesand-workshops.module.css'

const PerformancesandWorkshops = () => {
  return (
    <div id="performances" className={styles['container']}>
      <Helmet>
        <title>Forbidden Dance</title>
      </Helmet>
      <div className={styles['PerformancesandWorkshops103136']}>
        <Link to="/home" className={styles['text']}>
          forbidden dance co.
        </Link>
        <img
          alt="Rectangle1111958"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMzUxJyBoZWlnaHQ9JzEyNicgdmlld0JveD0nMCAwIDM1MSAxMjYnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxyZWN0IHk9Jy0yMjYnIHdpZHRoPSczNTEnIGhlaWdodD0nMzUyJyBmaWxsPScjRjlENUJEJyBmaWxsLW9wYWNpdHk9JzAuNicvPgo8L3N2Zz4K"
          className={styles['image']}
        />
        <div className={styles['Frame1103138']}>
          <Link to="/about" className={styles['text1']}>
            About
          </Link>
          <Link to="/classes" className={styles['text2']}>
            Classes
          </Link>
          <span className={styles['text3']}>Performances &amp; Workshops</span>
        </div>
        <img
          alt="Group15132339"
          className={styles['image1']}
        />
        <span className={styles['text4']}>find your confidence</span>
        <span className={styles['text5']}>
          Check back often for updates or visit our facebook page
        </span>
        <a
          href="https://www.facebook.com/ForbiddenDanceCompanyCV"
          target="_blank"
          rel="noreferrer noopener"
          className={styles['link']}
        >
          <div className={styles['Frame2103148']}>
            <span className={styles['text6']}>Facebook</span>
          </div>
        </a>
        <div className={styles['Group20132380']}>
          <img
            alt="Vector211938"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNDYnIGhlaWdodD0nMTE1JyB2aWV3Qm94PScwIDAgNDYgMTE1JyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPgo8cGF0aCBkPSdNNCA0Qzc3LjUgNDIgMjQuNSAxMTAuMTY3IDQgMTExJyBzdHJva2U9JyM4OUUzQkUnIHN0cm9rZS13aWR0aD0nNycgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJy8+Cjwvc3ZnPgo="
            className={styles['svg']}
          />
          <img
            alt="Line311940"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjAnIGhlaWdodD0nMzQnIHZpZXdCb3g9JzAgMCAyMCAzNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPGxpbmUgeDE9JzQuMjYyMDMnIHkxPSczMC4zNjU0JyB4Mj0nMTYuMzY1NCcgeTI9JzMuNzM3OTcnIHN0cm9rZT0nIzg5RTNCRScgc3Ryb2tlLXdpZHRoPSc3JyBzdHJva2UtbGluZWNhcD0ncm91bmQnLz4KPC9zdmc+Cg=="
            className={styles['svg1']}
          />
          <img
            alt="Line411941"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMzUnIGhlaWdodD0nMTMnIHZpZXdCb3g9JzAgMCAzNSAxMycgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPGxpbmUgeDE9JzQuMDU0OTknIHkxPSc0LjE2MTUxJyB4Mj0nMzEuMTYxNScgeTI9JzguOTQ1MDEnIHN0cm9rZT0nIzg5RTNCRScgc3Ryb2tlLXdpZHRoPSc3JyBzdHJva2UtbGluZWNhcD0ncm91bmQnLz4KPC9zdmc+Cg=="
            className={styles['svg2']}
          />
        </div>
      </div>
    </div>
  )
}

export default PerformancesandWorkshops