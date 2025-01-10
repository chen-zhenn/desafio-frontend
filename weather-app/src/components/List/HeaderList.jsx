export default function HeaderList({ columnList }){
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', gap: '5rem' }}>
            {
                (columnList && Array.isArray(columnList) ) && (

                    columnList?.map((column, index) => (
                        <section key={index}>{ column }</section>
                    ))
                )
            }
        </header>
    )
}