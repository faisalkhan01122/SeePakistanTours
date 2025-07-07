import React, { useState } from "react";

const BookingForm = ({ 
  tourName = "Hunza, Nagar & Naltar Valley Cherry Blossom 8 Days 7 Nights Tour",
  onSubmit 
}) => {
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    numberOfDays: "",
    departureDate: "",
    returnDate: "",
    adults: "",
    children: "",
    infants: "",
    travellerType: "",
    specialRequirements: "",
    budget: "",
    honeypot: "", // for spam bot trap
  });

  // Validation errors
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Simple validation
  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName.trim()) tempErrors.firstName = "First name is required.";
    if (!formData.email.trim()) tempErrors.email = "Email is required.";
    if (!formData.phone.trim()) tempErrors.phone = "Phone is required.";
    if (!formData.departureDate.trim()) tempErrors.departureDate = "Departure date is required.";
    if (!formData.returnDate.trim()) tempErrors.returnDate = "Return date is required.";
    if (!formData.adults.trim()) tempErrors.adults = "Number of adults is required.";
    if (!formData.travellerType.trim()) tempErrors.travellerType = "Traveller type is required.";
    if (formData.honeypot.trim()) tempErrors.honeypot = "Spam detected.";
    return tempErrors;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Call external submit handler if provided
      if(onSubmit) onSubmit(formData);
      alert("Form submitted successfully! We will contact you soon.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        numberOfDays: "",
        departureDate: "",
        returnDate: "",
        adults: "",
        children: "",
        infants: "",
        travellerType: "",
        specialRequirements: "",
        budget: "",
        honeypot: "",
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section className="bg-[#F5F5F2]  py-16 px-6 md:px-16 rounded-lg shadow-lg max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-primary-500 mb-4">Book Tour Now</h2>
      <p className="text-center mb-8 text-gray-600">
        Information we need to confirm your tour.
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-8">
        {/* Traveler Info */}
        <fieldset className="border border-primary-500 rounded-lg p-6 bg-[#F5F5F2] shadow-sm">
          <legend className="text-xl font-semibold text-primary-600 mb-4">Traveler Information</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block font-semibold mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name*"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400 ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {errors.firstName && (
                <p className="text-red-500 mt-1 text-sm">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label htmlFor="lastName" className="block font-semibold mb-1">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {errors.email && (
                <p className="text-red-500 mt-1 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block font-semibold mb-1">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone*"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400 ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {errors.phone && (
                <p className="text-red-500 mt-1 text-sm">{errors.phone}</p>
              )}
            </div>
          </div>
        </fieldset>

        {/* Travel Plans */}
        <fieldset className="border border-primary-500 rounded-lg p-6 bg-[#F5F5F2] shadow-sm">
          <legend className="text-xl font-semibold text-primary-600 mb-4">
            Tell us your travel plans
          </legend>
          <p className="mb-6 text-gray-700 font-medium">
            Tour Name <span className="font-semibold">{tourName}</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="numberOfDays" className="block font-semibold mb-1">
                Number of Days
              </label>
              <input
                id="numberOfDays"
                name="numberOfDays"
                type="number"
                min="1"
                placeholder="Number of Days"
                value={formData.numberOfDays}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
              />
            </div>

            <div>
              <label htmlFor="departureDate" className="block font-semibold mb-1">
                Departure Date <span className="text-red-500">*</span>
              </label>
              <input
                id="departureDate"
                name="departureDate"
                type="date"
                value={formData.departureDate}
                onChange={handleChange}
                className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400 ${
                  errors.departureDate ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {errors.departureDate && (
                <p className="text-red-500 mt-1 text-sm">{errors.departureDate}</p>
              )}
            </div>

            <div>
              <label htmlFor="returnDate" className="block font-semibold mb-1">
                Return Date <span className="text-red-500">*</span>
              </label>
              <input
                id="returnDate"
                name="returnDate"
                type="date"
                value={formData.returnDate}
                onChange={handleChange}
                className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400 ${
                  errors.returnDate ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {errors.returnDate && (
                <p className="text-red-500 mt-1 text-sm">{errors.returnDate}</p>
              )}
            </div>
          </div>
        </fieldset>

        {/* Additional Info */}
        <fieldset className="border border-primary-500 rounded-lg p-6 bg-[#F5F5F2] shadow-sm">
          <legend className="text-xl font-semibold text-primary-600 mb-4">
            Please tell us more to help us tailor your holiday
          </legend>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="adults" className="block font-semibold mb-1">
                Adults (14+ years) <span className="text-red-500">*</span>
              </label>
              <input
                id="adults"
                name="adults"
                type="number"
                min="0"
                placeholder="Adults * 14+ year"
                value={formData.adults}
                onChange={handleChange}
                className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400 ${
                  errors.adults ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {errors.adults && (
                <p className="text-red-500 mt-1 text-sm">{errors.adults}</p>
              )}
            </div>

            <div>
              <label htmlFor="children" className="block font-semibold mb-1">
                Children (5-13 years)
              </label>
              <input
                id="children"
                name="children"
                type="number"
                min="0"
                placeholder="Children: 5-13 Year"
                value={formData.children}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
              />
            </div>

            <div>
              <label htmlFor="infants" className="block font-semibold mb-1">
                Infants
              </label>
              <input
                id="infants"
                name="infants"
                type="number"
                min="0"
                placeholder="Infants"
                value={formData.infants}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="travellerType" className="block font-semibold mb-1">
              Please select your traveller type <span className="text-red-500">*</span>
            </label>
            <select
              id="travellerType"
              name="travellerType"
              value={formData.travellerType}
              onChange={handleChange}
              className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400 ${
                errors.travellerType ? "border-red-500" : "border-gray-300"
              }`}
              required
            >
              <option value="" disabled>
                Please select your traveler type*
              </option>
              <option value="First Choice">First Choice</option>
              <option value="Second Choice">Second Choice</option>
              <option value="Third Choice">Third Choice</option>
            </select>
            {errors.travellerType && (
              <p className="text-red-500 mt-1 text-sm">{errors.travellerType}</p>
            )}
          </div>

          <div className="mt-6">
            <label
              htmlFor="specialRequirements"
              className="block font-semibold mb-1"
            >
              Must Haves / Must Nots / Special Requirements
            </label>
            <textarea
              id="specialRequirements"
              name="specialRequirements"
              rows="4"
              placeholder="Eg. Are you on Honeymoon or any other special occasion?"
              value={formData.specialRequirements}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-300 resize-none"
            />
          </div>
        </fieldset>

        {/* Budget */}
        <fieldset className="border border-primary-500 rounded-lg p-6 bg-[#F5F5F2] shadow-sm">
          <legend className="text-xl font-semibold text-primary-400 mb-4">
            Finally, please tell us your approximate total budget.
          </legend>
          <p className="mb-4 text-gray-700">
            This is so we can offer you the best options to match your
            requirements.
          </p>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
          >
            <option value="" disabled>
              Select budget range
            </option>
            <option value="PKR 40,000 - PKR 60,000">PKR 40,000 - PKR 60,000</option>
            <option value="PKR 60,001 - PKR 80,000">PKR 60,001 - PKR 80,000</option>
            <option value="PKR 80,001 - PKR 1,00,000">PKR 80,001 - PKR 1,00,000</option>
            <option value="Above PKR 1,00,000">Above PKR 1,00,000</option>
          </select>
        </fieldset>

        {/* Honeypot field for spam bots (hidden) */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <button
          type="submit"
          className="w-full bg-primary-500 hover:bg-primary-400 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default BookingForm;
