import { useForm } from 'react-hook-form';
import s from './style.module.css'
import slash from '../../assets/slash.svg'
import cards from '../../assets/cards.svg'
import visa from '../../assets/visa.svg'
import master from '../../assets/master.svg'
import { useState } from 'react';

const CardsForm = ({ data, setData }) => {
    const [cardType, setCardTYpe] = useState('')
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm()

    const currentYear = new Date().getFullYear().toString().slice(2)

    const holderNameInput = register('name', {
        required: 'Required',
        pattern: {
            value: /^[A-Za-z]+\s[A-Za-z]+$/,
            message: "Invalid name"
        },
    })

    const cardNumberInput = register('number', {
        required: 'Required',
        minLength: {
            value: 16,
            message: 'Invalid card number'
        },
        maxLength: {
            value: 16,
            message: 'Invalid card number'
        },
        onChange: (e) => {
            if (e.target.value[0] === '4') {
                setCardTYpe('4')
            } else if (e.target.value[0] === '5') {
                setCardTYpe('5')
            } else {
                setCardTYpe('')
            }
        },
    })
    const monthInput = register('month', {
        required: 'Required',
        pattern: {
            value: /^(0[1-9]|1[0-2]|12)$/,
            message: 'Invalid'
        },
    })

    const yearInput = register('year', {
        required: 'Required',
        min: {
            value: parseInt(currentYear),
            message: 'Invalid'
        },
        minLength: {
            value: 2,
            message: 'Invalid'
        },
        maxLength: {
            value: 2,
            message: 'Invalid'
        }

    })

    const cvcInput = register('code', {
        required: 'Required',
        pattern: {
            value: /^\d{3}$/,
            message: 'Invalid'
        },
    })

    const onSubmit = (cardInfo) => {
        setData([...data, cardInfo]);
        reset()
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.form} >
            <div className={s.cards}>
                <div className={s.card_first}>
                    <div className={s.holder_info}>
                        <input
                            className={errors.name ? `${s.input} ${s.error}` : s.input}
                            style={{ "textTransform": "uppercase" }}
                            type="text"
                            {...holderNameInput}
                            placeholder='Holder of card'
                        />
                        {errors.name && <p className={s.error_text}>{errors.name?.message}</p>}
                        <input
                            className={errors.number ? `${s.input} ${s.error}` : s.input}
                            type="number"
                            {...cardNumberInput}
                            placeholder='Number of card'
                        />
                        {errors.number && <p className={s.error_text}>{errors.number.message}</p>}
                    </div>
                    <div className={s.date}>
                        <div >
                            <input
                                className={errors.month ? `${s.input} ${s.error}` : s.input}
                                type="number"
                                placeholder='MM'
                                {...monthInput}
                            />
                            {errors.month && <p className={s.error_text}>{errors.month.message}</p>}
                        </div>
                        <div>
                            <img className={s.slash} src={slash} alt="slash" />
                        </div>
                        <div>
                            <input
                                className={errors.year ? `${s.input} ${s.error}` : s.input}
                                type="number"
                                placeholder='YY'
                                {...yearInput}
                            />
                            {errors.year && <p className={s.error_text}>{errors.year.message}</p>}
                        </div>
                        <div>
                            {cardType === '' && <img src={cards} alt="cards" />}
                            {cardType === '4' && <img src={visa} alt="visa" />}
                            {cardType === '5' && <img src={master} alt="master" />}
                        </div>
                    </div>
                </div>
                <div className={s.card_second}>
                    <div className={s.decor}></div>
                    <div className={s.cvc}>
                        <input
                            className={errors.code ? `${s.input} ${s.error}` : s.input}
                            type="password"
                            placeholder='CVC'
                            {...cvcInput}
                        />
                        {errors.code && <p className={s.error_text}>{errors.code.message}</p>}
                    </div>
                </div>
            </div>
            <button className={s.btn_submit}>Send</button>
        </form >
    );
};

export default CardsForm;