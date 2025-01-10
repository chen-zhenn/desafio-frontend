export default function HeaderList({ columnList }){
    return (
        <header 
            className='header-list'
        >
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