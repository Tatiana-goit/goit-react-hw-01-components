import PropTypes from 'prop-types';
import s from './SectionInfo.module.css';

function SectionInfo ({children}) {
    return (
        <div className={s.section}>{children}</div>
    )
}

export default SectionInfo;

SectionInfo.propTypes ={
    children: PropTypes.node.isRequired,
}