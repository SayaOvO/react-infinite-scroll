import { Character as CharacterType } from "../types"
import styles from "./character.module.css";

interface Props {
  data: CharacterType
}

const Character: React.FC<Props> = ({
  data
}) => {
  return (
    <section className={styles.card}>
      <figure className={styles['image-container']}>
        <img 
					src={data.image} alt={`${data.name} image`} 
					className={styles.image} 
					loading="lazy"
				/>
      </figure>
      <div className={styles.description}>
        <h1 className={styles.header}>
          {data.name}
        </h1>
        <p>
          <span className={styles.status} style={{
            backgroundColor: data.status === 'Alive' ?
              "green" : data.status === 'Dead' ?
                "red" : 'gray'
          }} />
          <span>
            {data.status} - {data.species}
          </span>
        </p>
        <dl>
          <dt className={styles.locationLabel}>
            First Seen:
          </dt>
          <dd>{data.origin.name}</dd>
        </dl>

        <dl>
          <dt className={styles.locationLabel}>
            Last Seen:
          </dt>
          <dd>{data.location.name}</dd>
        </dl>
      </div>
    </section>
  )
}

export default Character;
