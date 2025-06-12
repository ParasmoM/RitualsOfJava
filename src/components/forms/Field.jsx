import React, { useId } from 'react'

function Field({ type, label, ...props}) {
    const id = useId();
    const TypeField = type === 'textarea' ? 'textarea' : 'input';

    return (
        <div className='form-field'>
            {label && <label htmlFor={id} className='form-label'>{label}</label>}
            <TypeField id={id} className='form-control' {...props} />
        </div>
    )
}

export default Field