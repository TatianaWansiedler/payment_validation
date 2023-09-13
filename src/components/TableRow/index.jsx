import s from './style.module.css'

const TableRow = ({ row, type }) => {

    const row_array = (type === 'th')
        ? ['NAME', 'CARD NUMBER', 'DATE EXPIRE', 'CODE']
        : Object.values(row ?? {})

    return (
        <tr>
            {
                row_array.map((elem,i) => (type === 'th')
                    ? <th key={i} className={s.header}>{elem}</th>
                    : <td key={i} className={s.cell}>{elem}</td>
                )
            }
        </tr>
    )
};

export default TableRow;
