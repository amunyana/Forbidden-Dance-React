import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import styles from './about.module.css'

const About = () => {
  return (
    <div id="about" className={styles['container']}>
      <Helmet>
        <title>Forbidden Dance</title>
      </Helmet>
      <div className={styles['About103108']}>
        <Link to="/home" className={styles['text']}>
          forbidden dance co.
        </Link>
        <img
          alt="Rectangle1111957"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTU5JyBoZWlnaHQ9JzEyNicgdmlld0JveD0nMCAwIDE1OSAxMjYnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxyZWN0IHk9Jy0yMjYnIHdpZHRoPScxNTknIGhlaWdodD0nMzUyJyBmaWxsPScjRjlENUJEJyBmaWxsLW9wYWNpdHk9JzAuNicvPgo8L3N2Zz4K"
          className={styles['image']}
        />
        <div className={styles['Frame1103110']}>
          <span className={styles['text01']}>About</span>
          <Link to="/classes" className={styles['text02']}>
            Classes
          </Link>
          <Link to="/performancesand-workshops" className={styles['text03']}>
            Performances &amp; Workshops
          </Link>
        </div>
        <img
          alt="Rectangle2103151"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjY5JyBoZWlnaHQ9JzY1Mycgdmlld0JveD0nMCAwIDI2OSA2NTMnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxyZWN0IHdpZHRoPScyNjknIGhlaWdodD0nNjUzJyBmaWxsPScjODlFM0JFJyBmaWxsLW9wYWNpdHk9JzAuNTknLz4KPC9zdmc+Cg=="
          className={styles['image1']}
        />
        <img
          alt="Rectangle1103150"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTkyMCcgaGVpZ2h0PScyNzInIHZpZXdCb3g9JzAgMCAxOTIwIDI3MicgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHJlY3Qgd2lkdGg9JzE5MjAnIGhlaWdodD0nMjgzJyBmaWxsPScjRjdGN0Y3Jy8+Cjwvc3ZnPgo="
          className={styles['image2']}
        />
        <img
          alt="Rectangle4103153"
          src="/playground_assets/Rectangle4103153-b9ed-600h.png"
          className={styles['image3']}
        />
        <span className={styles['text04']}>about</span>
        <span className={styles['text05']}>
          Emily has been dancing or performing her entire life with a huge love
          for stage and screen. Inspired by her grandmothers belly dance
          performances on Denman island, she began her professional journey of
          learning and performing Egyptian style belly dance at the age of 16 in
          Vancouver, BC. She has attended workshops and private lessons by
          various world class or award winning teachers. With an extensive
          history of dance experience and a huge passion for latin, Emily has
          recently branched her performing and teaching into Salsa and Bachata
          Sensual, in hopes, to add to the already enriched latin dance
          community growing in the Comox Valley.
        </span>
        <img
          alt="Rectangle3103152"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjY5JyBoZWlnaHQ9JzM1Micgdmlld0JveD0nMCAwIDI2OSAzNTInIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxyZWN0IHdpZHRoPScyNjknIGhlaWdodD0nMzUyJyBmaWxsPScjODlFM0JFJyBmaWxsLW9wYWNpdHk9JzAuNTknLz4KPC9zdmc+Cg=="
          className={styles['image4']}
        />
        <span className={styles['text06']}>Certifications</span>
        <span className={styles['text07']}>
          capilano univeresity - performing arts degree with distinction
        </span>
        <span className={styles['text08']}>
          BCRPA - fitness theory certification
        </span>
        <span className={styles['text09']}>
          leader - shimmy mob
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
      </div>
    </div>
  )
}

export default About
