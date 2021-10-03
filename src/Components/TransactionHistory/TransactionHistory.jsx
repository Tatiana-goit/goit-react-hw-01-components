import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

function TransactionHistory({items}) {
    return (
        <div>
            <table className={s.table}>
                <thead>
                    <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map(({id,type,amount,currency}) => {
                        return (
                            <tr key={id}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                        )
                    })}
                   
                </tbody>
            </table>
        </div>
    )
}

export default TransactionHistory;

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }).isRequired,
    )
  };
