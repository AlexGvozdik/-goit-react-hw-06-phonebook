import { useSelector, useDispatch } from 'react-redux';
// import{connect} from 'react-redux';
import PropTypes from 'prop-types';
import { changeFilter } from '../../redux/slicers';
import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(state => state.filter);
  const dispatch = useDispatch();
  

  return (
    <label className={s.findFild}>
      Find contacts by name
      <input
        className={s.inputFind}
        type="text"
        name="filter"
        value={value}
        onChange={ e => dispatch(changeFilter(e.target.value))}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

// const mapStateToProps=state=>({value:state.filter});
// const mapDispatchToProps=dispatch=>({
//   onChange:e=>dispatch(changeFilter(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter)
