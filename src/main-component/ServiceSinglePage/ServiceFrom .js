import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        department: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({
        nameError: '',
        emailError: '',
        departmentError: '',
        messageError: ''
    });

    const validateForm = () => {
        let isValid = true;
        const errors = {
            nameError: '',
            emailError: '',
            departmentError: '',
            messageError: ''
        };

        if (formData.name.trim() === '') {
            errors.nameError = 'Please enter your name';
            isValid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email)) {
            errors.emailError = 'Please enter a valid email';
            isValid = false;
        }

        if (formData.department.trim() === '') {
            errors.departmentError = 'Please select a department';
            isValid = false;
        }

      

        if (formData.message.trim() === '') {
            errors.messageError = 'Please describe your problem';
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            console.log('Form submitted:', formData);
            setFormData({
                name: '',
                email: '',
                department: '',
                message: ''
            });
        }
    };

    return (
        <div className="wpo-contact-form-area">
            <form method="post" className="contact-validation-active"  onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col col-lg-6 col-md-6 col-12">
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            placeholder="Your Name*"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        {formErrors.nameError && <span>{formErrors.nameError}</span>}
                    </div>
                    <div className="col col-lg-6 col-md-6 col-12">
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Your Email*"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        {formErrors.emailError && <span>{formErrors.emailError}</span>}
                    </div>
                    <div className="col col-lg-12 col-12">
                        <select
                            name="department"
                            className="form-control"
                            value={formData.department}
                            onChange={handleInputChange}
                        >
                            <option disabled="disabled" value="">Select Department</option>
                            <option>Department 1</option>
                            <option>Department 2</option>
                            <option>Department 3</option>
                        </select>
                        {formErrors.departmentError && <span>{formErrors.departmentError}</span>}
                    </div>
                    <div className="fullwidth col col-lg-12 col-12">
                        <textarea
                            className="form-control"
                            name="message"
                            id="note"
                            placeholder="Message..."
                            value={formData.message}
                            onChange={handleInputChange}
                        ></textarea>
                        {formErrors.messageError && <span>{formErrors.messageError}</span>}
                    </div>
                </div>
                <div className="submit-area">
                    <button type="submit" className="theme-btn">Send Message</button>
                    <div id="loader">
                        <i className="ti-reload"></i>
                    </div>
                </div>
                <div className="clearfix error-handling-messages">
                    <div id="success">Thank you. Message sent!</div>
                    <div id="error">Error occurred while sending email. Please try again later.</div>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
