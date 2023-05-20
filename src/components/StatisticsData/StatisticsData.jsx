import PropTypes from 'prop-types';
import cl from './StatisticsData.module.css';

export default function Statistics({ title, stats }) {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  return (
    <section className={cl.statisticsContainer}>
      {title && <h2 className={cl.titleText}>{title}</h2>}
      <ul className={cl.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li className={cl.itemList} key={id} style={{ backgroundColor: getRandomHexColor() }}>
              <span className={cl.labelList}>{label}</span>
              <span className={cl.percentageList}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
