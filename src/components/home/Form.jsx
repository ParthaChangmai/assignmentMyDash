import React, { useReducer } from 'react';

const Form = () => {
	const initialError = {
		email: '',
		password: '',
		confirmPassword: '',
		number: '',
	};
	const [error, updateError] = useReducer(
		(error, updates) => ({
			...error,
			...updates,
		}),
		initialError
	);

	const initialFormData = {
		email: '',
		password: '',
		confirmPassword: '',
		number: '',
	};
	const [form, updateForm] = useReducer(
		(form, updates) => ({
			...form,
			...updates,
		}),
		initialFormData
	);

	const validateEmail = (email) => {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	};
	const validateNumber = (num) => {
		var re = /^\d{10}$/;
		return re.test(num);
	};

	const handleSubmitClick = (e) => {
		e.preventDefault();

		if (!validateEmail(form.email)) {
			updateError({ email: 'Enter a valid email' });
			setTimeout(() => updateError({ email: '' }), 2500);
		}

		if (form.password.length < 8) {
			updateError({ password: 'Password must be greater then 8 character' });
			setTimeout(() => updateError({ password: '' }), 2500);
		}

		if (form.password !== form.confirmPassword) {
			updateError({ confirmPassword: 'Confrim Password does not macth' });
			setTimeout(() => updateError({ confirmPassword: '' }), 2500);
		}
		if (!error.Form && !error.password && !error.number) {
		}

		if (!validateNumber(form.number)) {
			updateError({ number: 'Enter a valid 10 digit Number' });
			setTimeout(() => updateError({ number: '' }), 2500);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmitClick} className="form ">
				<div className="form__heading ">Create an account</div>
				<div className="form__body">
					<p className="form__body--text">Your email address</p>
					<input
						type="text"
						value={form.email}
						onChange={(e) => updateForm({ email: e.target.value })}
						className="form__body--input"
					/>
					<span className="form__body--error">
						{error.email && error.email} <br></br>{' '}
					</span>

					<p className="form__body--text">Your password </p>
					<input
						value={form.password}
						onChange={(e) => updateForm({ password: e.target.value })}
						className="form__body--input"
						type="text"
					/>
					<span className="form__body--error">
						{error.password && error.password} <br></br>{' '}
					</span>

					<p className="form__body--text">Confirm your password</p>
					<input
						value={form.confirmPassword}
						onChange={(e) => updateForm({ confirmPassword: e.target.value })}
						className="form__body--input"
						type="text"
					/>
					<span className="form__body--error">
						{error.confirmPassword && error.confirmPassword} <br></br>{' '}
					</span>

					<p className="form__body--text">Your full name</p>
					<input className="form__body--input" type="text" />
					<span className="form__body--error">
						<br></br>{' '}
					</span>

					<p className="form__body--text">Your phone number</p>
					<input
						className="form__body--input form__body--input--no "
						type="text"
						value={form.number}
						onChange={(e) => updateForm({ number: e.target.value })}
					/>
					<span className="form__body--error">
						{error.number && error.number} <br></br>{' '}
					</span>
				</div>
				<div className="form__tc">
					<input type="checkbox" className="form__tc--checkbox" />

					<p className="form__tc--text">
						I read and agree terms and conditions
					</p>
				</div>
				<div className="form__button">
					<button className="form__button--button" type="submit">
						<span className="form__button--button--text">Create account</span>
					</button>
				</div>
			</form>
		</>
	);
};

export default Form;
