import { Link } from 'react-router-dom';
import styles from './Property.module.scss';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

export default function PropertyLayout({ property }) {
  return (
    <div className={styles.container}>
      <div>
        <Link to="/">
          <BsFillArrowLeftCircleFill className={styles.arrow} />
        </Link>

        <div className={styles.propertyMeta}>
          <h2>{property['Title Number']}</h2>{' '}
          <span className={styles.tenure}>{property['Tenure']}</span>
        </div>
        <p className={styles.propertyAddress}>{property['Property Address']}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
          fermentum magna. Praesent condimentum lacus sit amet congue tristique.
          Cras aliquet nisi neque, id ornare orci euismod ut. Fusce vitae tortor
          id dolor congue luctus. Proin bibendum dui vel convallis congue. Fusce
          consequat lectus justo, eu auctor dui feugiat non. Nulla eget ipsum
          sit amet sapien ultrices mattis. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. In lectus odio,
          consectetur a velit nec, vehicula molestie nisi.
        </p>
      </div>
      <div>
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDu-7v84ZijTSVqJ5Ba1R7rJxYKDiiT4zo&q=${property['Y']}, ${property['X']}`}
        ></iframe>
      </div>
    </div>
  );
}
