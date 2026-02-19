import { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    occupation: '',
    sessionType: '',
    mode: '',
    preferredDate: '',
    preferredTime: '',
    previousTherapy: '',
    concerns: '',
    referralSource: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1200));
    
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16 px-6">
        <div className="text-6xl mb-6">☕</div>
        <h3 className="text-3xl font-serif text-brew-brown mb-4">Thank You!</h3>
        <p className="text-gray-600 text-lg mb-2">
          Your counselling request has been received successfully.
        </p>
        <p className="text-gray-500">
          I will review your details and get back to you within 24-48 hours to confirm your session.
        </p>
        <button
          onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', age: '', gender: '', occupation: '', sessionType: '', mode: '', preferredDate: '', preferredTime: '', previousTherapy: '', concerns: '', referralSource: '' }); }}
          className="mt-8 px-8 py-3 bg-brew-brown text-white rounded-sm hover:bg-brew-dark transition-colors font-medium"
        >
          Book Another Session
        </button>
      </div>
    );
  }

  const inputClasses = "w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-brew-light focus:border-transparent transition-all bg-white text-gray-800";
  const labelClasses = "block text-sm font-medium text-brew-brown mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto text-left space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClasses}>Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label htmlFor="phone" className={labelClasses}>Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="age" className={labelClasses}>Age *</label>
          <input
            type="number"
            id="age"
            name="age"
            required
            min="5"
            max="120"
            value={formData.age}
            onChange={handleChange}
            placeholder="Your age"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="gender" className={labelClasses}>Gender *</label>
          <select
            id="gender"
            name="gender"
            required
            value={formData.gender}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Select</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="non-binary">Non-Binary</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="occupation" className={labelClasses}>Occupation *</label>
        <input
          type="text"
          id="occupation"
          name="occupation"
          required
          value={formData.occupation}
          onChange={handleChange}
          placeholder="e.g. Student, Engineer, Homemaker, etc."
          className={inputClasses}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="sessionType" className={labelClasses}>Type of Session *</label>
          <select
            id="sessionType"
            name="sessionType"
            required
            value={formData.sessionType}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Select the type of session</option>
            <option value="individual">Individual Therapy</option>
            <option value="group">Group Therapy</option>
            <option value="couple">Couple Therapy</option>
            <option value="assessment">Psychological Assessment</option>
          </select>
        </div>
        <div>
          <label htmlFor="mode" className={labelClasses}>Mode of Session *</label>
          <select
            id="mode"
            name="mode"
            required
            value={formData.mode}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Select mode</option>
            <option value="online">Online</option>
            <option value="offline">Offline (In-Person)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="preferredDate" className={labelClasses}>Preferred Date *</label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            required
            value={formData.preferredDate}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="preferredTime" className={labelClasses}>Preferred Time *</label>
          <select
            id="preferredTime"
            name="preferredTime"
            required
            value={formData.preferredTime}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Select preferred time</option>
            <option value="morning">Morning (9 AM - 12 PM)</option>
            <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
            <option value="evening">Evening (4 PM - 7 PM)</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="previousTherapy" className={labelClasses}>Have you been to therapy before?</label>
        <select
          id="previousTherapy"
          name="previousTherapy"
          value={formData.previousTherapy}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="prefer-not-to-say">Prefer not to say</option>
        </select>
      </div>

      <div>
        <label htmlFor="concerns" className={labelClasses}>Brief Description of Your Concerns *</label>
        <textarea
          id="concerns"
          name="concerns"
          required
          rows={4}
          value={formData.concerns}
          onChange={handleChange}
          placeholder="Please share what brings you to seek counselling. This helps me prepare for our first session together."
          className={`${inputClasses} resize-none`}
        />
      </div>

      <div>
        <label htmlFor="referralSource" className={labelClasses}>How did you hear about Brew Your Being?</label>
        <select
          id="referralSource"
          name="referralSource"
          value={formData.referralSource}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="">Select</option>
          <option value="social-media">Social Media</option>
          <option value="friend-family">Friend / Family</option>
          <option value="google">Google Search</option>
          <option value="doctor">Doctor Referral</option>
          <option value="other">Other</option>
        </select>
      </div>

      <p className="text-xs text-gray-400 italic">
        All information shared is kept strictly confidential. Your privacy is respected at every step.
      </p>

      <div className="text-center pt-4">
        <button
          type="submit"
          disabled={submitting}
          className="px-12 py-4 bg-brew-brown text-white text-lg font-medium rounded-sm hover:bg-brew-dark transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed btn-shine relative overflow-hidden"
        >
          {submitting ? (
            <span className="flex items-center gap-2 justify-center">
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
              Submitting...
            </span>
          ) : (
            'Request Appointment'
          )}
        </button>
      </div>
    </form>
  );
}
