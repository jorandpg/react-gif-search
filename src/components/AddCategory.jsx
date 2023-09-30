import { useState } from "react"
import PropTypes from 'prop-types'

export function AddCategory({onNewValue}) {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        // Seteamos el valor del estado de inputValue, 
        // esto se verá reflejado en el input
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return
        onNewValue(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit } aria-label="form">
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewValue: PropTypes.func.isRequired
}
