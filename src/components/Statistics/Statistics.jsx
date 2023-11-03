import data from '..//..//data.json';
import css from '../Statistics/Statistics.module.css';

export const Statistics = ({ title }) => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}> {title} </h2>}
      <ul className={css.statList}>
        {data.map((stats, index) => (
          <li
            key={index}
            className={css.item}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={css.label}>{stats.label} </span>
            <span className={css.percentage}>{stats.percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
