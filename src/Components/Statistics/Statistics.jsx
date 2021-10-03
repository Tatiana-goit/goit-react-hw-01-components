import SectionInfo from '../SectionInfo/SectionInfo';
import StatisticsElement  from '../StatisticsElement/StatisticsElement';
import { randomColor } from "../../utils/colorRandomizer";
import PropTypes from 'prop-types';
import s from './Statistics.module.css'

function Statistics ({title,stats}) {
    return (
        <SectionInfo>
            {title && <h2 className={s.title}>{title}</h2>}
            <ul className={s.list}>
                {stats.map(({id,label,percentage}) => {
                    return (
                        <li className={s.item}
                            key={id}
                            style={{ backgroundColor: randomColor() }}
                        >
                           <StatisticsElement label={label} percentage={percentage}/>
                        </li>
                    )
                })}
            </ul>
        </SectionInfo>
    )
}

export default Statistics;

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }
      ).isRequired
    ),
}