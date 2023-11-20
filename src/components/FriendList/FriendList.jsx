import PropTypes from 'prop-types';
import css from '../FriendList/FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={css.item} key={id}>
          <span
            className={
              isOnline
                ? `${css.status} ${css.green}`
                : `${css.status} ${css.red}`
            }
          >
            {isOnline}
          </span>
          <img className={css.avatar} src={avatar} alt={name} width="100" />
          <p className={css.name}> {name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
