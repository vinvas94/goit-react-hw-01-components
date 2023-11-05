import transactions from '../../transactions.json';
import css from '../TransactionHistory/TransactionHistory.module.css';

export const TransactionHistory = () => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      {transactions.map((transact, index) => (
        <tbody key={index}>
          <tr id={transact.id} style={{ backgroundColor: getRandomHexColor() }}>
            <td>{transact.type}</td>
            <td>{transact.amount}</td>
            <td>{transact.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};
