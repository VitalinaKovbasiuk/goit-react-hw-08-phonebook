import PropTypes from 'prop-types';
import { List, ListItem, ListDeleteButton } from './ContactList.styled';
import { deleteContact } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const listVAriatns = {
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
    hidden: { opacity: 0, y: -100 },
  };

  return (
    <>
      <List>
        {contacts.map(({ id, name, number }, i) => {
          return (
            <motion.div
              key={id}
              variants={listVAriatns}
              initial="hidden"
              animate="visible"
              custom={i}
            >
              <ListItem key={id}>
                <p>
                  {name}: {number}
                </p>
                <ListDeleteButton
                  type="button"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  Delete
                </ListDeleteButton>
              </ListItem>
            </motion.div>
          );
        })}
      </List>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func,
};
