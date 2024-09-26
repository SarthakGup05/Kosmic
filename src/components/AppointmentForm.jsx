import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com'; // Import EmailJS

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),

  // Updated email validation using regex for a more precise match
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Invalid email address'
    )
    .required('Email is required'),

  // Phone number must be exactly 10 digits
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone must be 10 digits')
    .required('Phone number is required'),

  service: Yup.string().required('Please select a service'),
  date: Yup.string().required('Please select a date'),
  time: Yup.string().required('Please select a time'),
});

const AppointmentForm = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state

  // Function to send an email
  const sendEmail = (values) => {
    const serviceID = 'service_wmdi1ho'; // Replace with your EmailJS service ID
    const templateID = 'template_qvaqylv'; // Replace with your EmailJS template ID
    const userID = '1819leEV2yi1h331M'; // Replace with your EmailJS user ID

    // Prepare email template params
    const templateParams = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      service: values.service,
      date: values.date,
      time: values.time,
      message: values.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          // Redirect to the thank you page after successful submission
          setIsSubmitting(false); // Reset submission state
          navigate('/thankyou');
        },
        (error) => {
          console.log('FAILED...', error);
          setIsSubmitting(false); // Reset submission state
          alert('There was an issue with submitting the form. Please try again.');
        }
      );
  };

  // Formik setup
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values) => {
      setIsSubmitting(true); // Set submission state to true
      console.log(values);
      sendEmail(values); // Send the email after form submission
    },
  });

  return (
    <div className="max-w-4xl mx-auto bg-transparent p-6 md:p-8 lg:p-10 rounded-lg shadow-lg">
      <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {/* Name Field */}
        <div className="col-span-1">
          <label className="block mb-2 font-semibold">Your Name</label>
          <input
            type="text"
            name="name"
            className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:border-teal-500 bg-gray-100"
            placeholder="Enter Your Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>}
        </div>

        {/* Email Field */}
        <div className="col-span-1">
          <label className="block mb-2 font-semibold">Your Email</label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:border-teal-500 bg-gray-100"
            placeholder="Enter Email Address"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>}
        </div>

        {/* Phone Field */}
        <div className="col-span-1">
          <label className="block mb-2 font-semibold">Your Phone</label>
          <input
            type="tel"
            name="phone"
            className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:border-teal-500 bg-gray-100"
            placeholder="+91"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone && <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>}
        </div>

        {/* Service Field */}
        <div className="col-span-1">
          <label className="block mb-2 font-semibold">Select Your Service</label>
          <select
            name="service"
            className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:border-teal-500 bg-gray-100"
            value={formik.values.service}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select Service</option>
            <option value="Dental Implant">Dental Implant</option>
            <option value="Teeth Whitening">Teeth Whitening</option>
            <option value="Root Canal">Root Canal</option>
            <option value="Dental Laser">Dental Laser</option>
            <option value="Composite Filling">Composite Filling</option>
            <option value="Laminates">Laminates</option>
          </select>
          {formik.touched.service && formik.errors.service && <p className="text-red-500 text-sm mt-1">{formik.errors.service}</p>}
        </div>

        {/* Date Field */}
        <div className="col-span-1">
          <label className="block mb-2 font-semibold">Select Date</label>
          <input
            type="date"
            name="date"
            className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:border-teal-500 bg-gray-100"
            value={formik.values.date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.date && formik.errors.date && <p className="text-red-500 text-sm mt-1">{formik.errors.date}</p>}
        </div>

        {/* Time Field */}
        <div className="col-span-1">
          <label className="block mb-2 font-semibold">Add Time</label>
          <input
            type="time"
            name="time"
            className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:border-teal-500 bg-gray-100"
            value={formik.values.time}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.time && formik.errors.time && <p className="text-red-500 text-sm mt-1">{formik.errors.time}</p>}
        </div>

        {/* Special Request Field */}
        <div className="col-span-1 md:col-span-2">
          <label className="block mb-2 font-semibold">Special Request</label>
          <textarea
            name="message"
            className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:border-teal-500 bg-gray-100"
            placeholder="Type your message..."
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 text-center">
          <button
            type="submit"
            className={`bg-teal-600 text-white px-6 py-3 font-bold rounded-lg shadow-md transition duration-300 ${
              isSubmitting ? 'bg-teal-400 cursor-not-allowed' : 'hover:bg-teal-500'
            }`}
            disabled={isSubmitting} // Disable button if form is submitting
          >
            {isSubmitting ? 'Submitting...' : 'Request an Appointment'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
