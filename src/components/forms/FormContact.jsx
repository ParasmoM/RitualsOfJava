import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from 'react-router-dom';

function FormContact({ className }) {
    const [state, handleSubmit] = useForm("mnqwzqor");
    const navigate = useNavigate();
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [phone, setPhone] = useState('');
    // const [message, setMessage] = useState('');

    if (state.succeeded) {
        setTimeout(() => navigate('/'), 500);
    }

    return (
        <form className={className} onSubmit={handleSubmit}>
            <div className={`${className}--container`}>
                <div className={`${className}--field`}>
                    <label>Nom</label>
                    <input
                        name="name"
                        type="text"
                        placeholder={'Indiquez votre nom complet'}
                        // value={name}
                        required
                    />
                </div>

                <div className={`${className}--field`}>
                    <label>Email</label>
                    <input
                        name="email"
                        type='email'
                        placeholder={'Indiquez votre adresse email'}
                        // value={email}
                        required
                    />
                </div>

                <div className={`${className}--field`}>
                    <label>Téléphone</label>
                    <input
                        name="phone"
                        type="text"
                        placeholder={'Indiquez votre numéros'}
                        // value={phone}
                    />
                </div>

                <div className={`${className}--field`}>
                    <label>Message</label>
                    <textarea
                        name="message"
                        placeholder={'Indiquez votre message'}
                        // value={message}
                        required
                    >

                    </textarea>
                </div>

                <button type="submit" disabled={state.submitting}>
                    Envoyer votre message
                </button>
            </div>
        </form>
    )
}

export default FormContact