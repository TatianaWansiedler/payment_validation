import TableRow from '../TableRow';
import s from './style.module.css'

const DataTable = ({ rows }) => {
    return (
        <div className={s.container}>
            <table className={s.table}>
                <thead className={s.head}>
                    <TableRow type={'th'} />
                </thead>
                <tbody>
                    {
                        rows.map((elem, i) => <TableRow key={i} row={elem} type={'td'} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;