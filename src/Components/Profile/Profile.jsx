import SectionInfo from '../SectionInfo/SectionInfo';
import PropTypes from 'prop-types';

import img from '../../images/foto.jpg';
import s from './Profile.module.css';

function Ptofile ({name,tag,location,stats}) {
    return (
        <SectionInfo>
            <div className={s.profile}>
                <div className={s.description}>
                    <img
                    src={img}
                    alt="Аватар пользователя"
                    className={s.image}
                    />
                    <p className={s.name}>{name}</p>
                    <p className={s.tag}>@{tag}</p>
                    <p className={s.location}>{location}</p>
                </div>

                <ul className={s.list}>
                    <li className={s.item}>
                        <span className={s.label}>Followers</span>
                        <span className={s.quantity}>{stats.followers}</span>
                    </li>
                    <li className={s.item}>
                        <span className={s.label}>Views</span>
                        <span className={s.quantity}>{stats.views}</span>
                    </li>
                    <li className={s.item}>
                        <span className={s.label}>Likes</span>
                        <span className={s.quantity}>{stats.likes}</span>
                    </li>
                </ul>
            </div>
        </SectionInfo>
    )}

export default Ptofile;

Ptofile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
    // stats: PropTypes.shape ({
    //   followers: PropTypes.number.isRequired,
    //   views: PropTypes.number.isRequired,
    //   likes: PropTypes.number.isRequired,
    // }).isRequired,
}