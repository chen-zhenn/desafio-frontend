import loader from '../../assets/loader.gif'

export function Loader(){

    return(
        <aside className='loader-container'>
            <img src={loader} className='loader-image' />     
        </aside>
    )
}