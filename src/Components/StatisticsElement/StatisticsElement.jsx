import PropTypes from 'prop-types';
import s from "./StatisticsElement.module.css";

function StatisticsElement ({ label, percentage }){
  return (
    <div className={s.element}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </div>
  );
};

export default StatisticsElement;

StatisticsElement.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,

}