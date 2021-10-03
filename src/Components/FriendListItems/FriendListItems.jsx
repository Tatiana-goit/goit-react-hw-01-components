import PropTypes from 'prop-types';
import s from './FriendListItems.module.css'

function FriendListItems ({avatar,name,isOnline}) {
    return (
        <div className={s.item}>
            <span className={isOnline? s.online : s.offline}>{isOnline}</span>
            <img className={s.avatar} src={avatar} alt={name}/>
            <p className={s.name}>{name}</p>
        </div>
    )
}

export default FriendListItems;

FriendListItems.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}