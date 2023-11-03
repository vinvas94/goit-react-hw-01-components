import user from '../../user.json';
import css from '../Profile/Profile.module.css';

export const Profile = () => {
  return user.map((prof, index) => {
    return (
      <div key={index} className={css.profile}>
        <div className={css.description}>
          <img src={prof.avatar} alt={prof.name} className={css.avatar} />
          <p className={css.name}>{prof.username}</p>
          <p className={css.tag}>@ {prof.tag}</p>
          <p className={css.location}>{prof.location}</p>
        </div>

        <ul className={css.stats}>
          <li>
            <span className={css.label}>Followers: </span>
            <span className={css.quantity}>
              {' '}
              {prof.stats.followers
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>
          </li>
          <li>
            <span className={css.label}>Views: </span>
            <span className={css.quantity}>
              {prof.stats.views
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>
          </li>
          <li>
            <span className={css.label}>Likes: </span>
            <span className={css.quantity}>
              {' '}
              {prof.stats.likes
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>
          </li>
        </ul>
      </div>
    );
  });
};
