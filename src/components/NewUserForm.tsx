import { ChangeEvent, FormEvent, useState } from "react";
import { generateId } from "../utils/generateId";
import { IUser } from "./UserItem";

type TFormData = {
    firstName: string,
    lastName: string,
    email: string,
}
type TformErrors = Record<string, string>;
interface INewUserFrom {
    onAdd: (obj: IUser) => void;
}

export const NewUserFrom = ({ onAdd }: INewUserFrom) => {
    const initialFormData: TFormData = {
        firstName: '',
        lastName: '',
        email: '',
    };
    const initialFormErrors: TformErrors = {};
    const [formData, setFormData] = useState(initialFormData);
    const [formErrors, setFormErrors] = useState(initialFormErrors);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = () => {
        const errors: TformErrors = {};
        if (!formData.firstName.trim()) {
            errors.firstName = 'Поле "Имя" необходимо заполнить';
        }
        if (!formData.lastName.trim()) {
            errors.lastName = 'Поле "Фамилия" необходимо заполнить';
        }
        if (!formData.email.trim()) {
            errors.email = 'Поле "Email" необходимо заполнить';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Введите корректный адрес email';
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            const formDataWithId = generateId(formData);
            onAdd(formDataWithId);
            setFormData(initialFormData);
        }
    }

    return (
        <form className="form-new-user" onSubmit={handleSubmit}>
            <fieldset>
                <legend>Добавить нового пользователя</legend>
                <div className="form-container">
                    <div className="form-field">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Имя"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        {formErrors.firstName && <span className="error-message">{formErrors.firstName}</span>}
                    </div>
                    <div className="form-field">
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Фамилия"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                        {formErrors.lastName && <span className="error-message">{formErrors.lastName}</span>}
                    </div>
                    <div className="form-field">
                        <input
                            type="text"
                            name="email"
                            placeholder="E-mail"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                    </div>
                    <button className="button" type="submit">Добавить</button>
                </div>
            </fieldset>
        </form>
    )
}