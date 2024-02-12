import { useState, useCallback } from 'react';

function FormValidation() {
    const [values, setValues] = useState({});           //Состояние для хранения значений полей формы.
    const [errors, setErrors] = useState({});           //Состояние для хранения сообщений об ошибках валидации полей.
    const [isInputValid, setIsInputValid] = useState({})  // Состояние, указывающее на валидность инпута.
    const [isValid, setIsValid] = useState(false);      //Состояние, указывающее на общую валидность всей формы.

    const handleChange = useCallback((evt) => {
        const name = evt.target.name
        const value = evt.target.value
        const validationMessage = evt.target.validationMessage
        const valid = evt.target.validity.valid                    // это булево значение, которое показывает, проходит ли текущий элемент валидацию или нет. Если элемент валиден, свойство valid будет равно true; если нет — false.
        const form = evt.target.form
    
        setValues(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: validationMessage }));
        setIsInputValid(prev => ({ ...prev, [name]: valid }))
        setIsValid(form.checkValidity());                               //Метод checkValidity() вызывается на элементе формы (form), чтобы проверить, проходит ли вся форма валидацию по встроенным правилам HTML5. Если форма валидна, этот метод возвращает true; в противном случае — false.
      }, []);

    const setValue = useCallback((name, value) => {                    //Устанавливает значение определенного поля
        setValues(prev => ({ ...prev, [name]: value }));
    }, []);
    
    const reset = useCallback(() => {                               //Сбрасывает состояния формы к начальным значениям или заданным данным
        setValues({});
        setErrors({});
        setIsValid(false);
    }, []);
    
    return { values, errors, isInputValid, isValid, handleChange, setValue, reset };
}

export default FormValidation;