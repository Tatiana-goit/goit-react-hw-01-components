import SectionInfo from '../SectionInfo/SectionInfo';
import FriendListItems from '../FriendListItems/FriendListItems';
import PropTypes from 'prop-types';
import s from './FriendList.module.css'


function FriendList({friends}) {
    return(
       <SectionInfo>
           <ul className={s.list}>
                {friends.map(({avatar,name,isOnline,id}) => {
                    return(
                       <FriendListItems 
                                avatar={avatar}
                                name={name}
                                isOnline={isOnline}
                                id={id}
                            />
                    )
                })}
           </ul>
       </SectionInfo>

    )
}

export default FriendList;

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }).isRequired,
    ),
}