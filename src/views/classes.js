import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import BellydanceComp from '../components/bellydance-comp'
import LatinComp from '../components/latin-comp'
import FitnessComp from '../components/fitness-comp'
import styles from './classes.module.css'

const Classes = () => {
  return (
    <div id="classes" className={styles['container']}>
      <Helmet>
        <title>Forbidden Dance</title>
      </Helmet>
      <div className={styles['Classes103122']}>
        <Link to="/home" className={styles['text']}>
          forbidden dance co.
        </Link>
        <img
          alt="Rectangle511953"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTU5JyBoZWlnaHQ9JzEyNicgdmlld0JveD0nMCAwIDE1OSAxMjYnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxyZWN0IHk9Jy0yMjYnIHdpZHRoPScxNTknIGhlaWdodD0nMzUyJyBmaWxsPScjRjlENUJEJyBmaWxsLW9wYWNpdHk9JzAuNicvPgo8L3N2Zz4K"
          loading="lazy"
          className={styles['image']}
        />
        <div className={styles['Frame1103124']}>
          <Link to="/about" className={styles['text1']}>
            About
          </Link>
          <span className={styles['text2']}>Classes</span>
          <Link to="/performancesand-workshops" className={styles['text3']}>
            Performances &amp; Workshops
          </Link>
        </div>
        <BellydanceComp rootClassName="rootClassName"></BellydanceComp>
        <div className={styles['Bellydance-Container']}>
          <img
            alt="Rectangle5103170"
            src="/playground_assets/Rectangle5103170-7co9-400h.png"
            className={styles['image1']}
          />
          <img
            alt="Rectangle8103216"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMzE4JyBoZWlnaHQ9JzQ3JyB2aWV3Qm94PScwIDAgMzE4IDQ3JyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPgo8cmVjdCB3aWR0aD0nMzE4JyBoZWlnaHQ9JzQ3JyBmaWxsPScjRjlENUJEJy8+Cjwvc3ZnPgo="
            className={styles['image2']}
          />
          <span className={styles['text4']}>bellydance</span>
        </div>
        <LatinComp rootClassName="rootClassName"></LatinComp>
        <div className={styles['Latin-Container']}>
          <img
            alt="Rectangle6103171"
            src="/playground_assets/Rectangle6103171-q1g9-400h.png"
            className={styles['image3']}
          />
          <img
            alt="Rectangle9103217"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMzE4JyBoZWlnaHQ9JzQ3JyB2aWV3Qm94PScwIDAgMzE4IDQ3JyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPgo8cmVjdCB3aWR0aD0nMzE4JyBoZWlnaHQ9JzQ3JyBmaWxsPScjRjlENUJEJy8+Cjwvc3ZnPgo="
            className={styles['image4']}
          />
          <span className={styles['text5']}>latin</span>
        </div>
        <FitnessComp rootClassName="rootClassName"></FitnessComp>
        <div className={styles['Fitness-Container']}>
          <img
            alt="Rectangle7103172"
            src="/playground_assets/Rectangle7103172-57ui-400h.png"
            className={styles['image5']}
          />
          <img
            alt="Rectangle10103219"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMzE4JyBoZWlnaHQ9JzQ3JyB2aWV3Qm94PScwIDAgMzE4IDQ3JyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPgo8cmVjdCB3aWR0aD0nMzE4JyBoZWlnaHQ9JzQ3JyBmaWxsPScjRjlENUJEJy8+Cjwvc3ZnPgo="
            className={styles['image6']}
          />
          <span className={styles['text6']}>fitness for dancers</span>
        </div>
      </div>
    </div>
  )
}

export default Classes
