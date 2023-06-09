import PropTypes from 'prop-types';
import cl from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={cl.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency = '-' }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            {currency && <td>{currency}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string,
    })
  ).isRequired,
};
