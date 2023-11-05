import friends from '..//..//friends.json';
import css from './FriendList.module.css';

export const FriendList = () => {
  return (
    <ul className={css.friendList}>
      {friends.map((friend, index) => (
        <li className={css.item} id={friend.id} key={index}>
          <span
            className={
              friend.isOnline
                ? `${css.status} ${css.green}`
                : `${css.status} ${css.red}`
            }
          >
            {friend.isOnline}
          </span>
          <img
            className={css.avatar}
            src={friend.avatar}
            alt={friend.name}
            width="100"
          />
          <p className={css.name}> {friend.name}</p>
        </li>
      ))}
    </ul>
  );
};
