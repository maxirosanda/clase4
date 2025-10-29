import './ButtonPrimary.css'

function ButtonPrimary ({children}){
    return (
        <button className='buttonPrimary'>
            {children}
        </button>
    )
}

export default ButtonPrimary