import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
// import {connect} from 'react-redux';
import { MdContactPhone } from 'react-icons/md';
import {deleteContact} from '../../redux/slicers';
import s from './ContactList.module.css';

 export default function ContactList() {
  const contacts=useSelector(({contacts,filter})=>contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())));
  const dispatch=useDispatch();
  const onDeleteClick=(id)=>dispatch(deleteContact(id));
  
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.contact}>
            <MdContactPhone className={s.icon} />
            <p>
              {name}: {number}
            </p>
            <button
              className={s.buttonDelete}
              type="button"
              onClick={()=>onDeleteClick(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteClick: PropTypes.func,
};

//  const mapStateToProps= ({contacts,filter})=>({
//   contacts:contacts.filter(contact =>contact.name.toLowerCase().includes(filter.toLowerCase())),
//  });
//  const  mapDispatchToProps=dispatch=>({
//   onDeleteClick:id=>dispatch(deleteContact(id))
//  });

//  export default connect(mapStateToProps,mapDispatchToProps)(ContactList);