export default function Search({ onSearch }){
    return (
        <input 
            type='text'
            placeholder='Insira aqui o nome da Cidade'
            onChange={onSearch}
            className='input' 
        />
    )
}