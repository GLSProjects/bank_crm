import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    jobTitle: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful registration and navigate to dashboard
    navigate('/');
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50">
      <Header onToggleSidebar={() => {}} />
      <div className="flex flex-1">
      {/* Right side - Branding/Image (Flipped from Login for variety) */}
      <div className="hidden lg:flex lg:w-5/12 relative bg-gray-900 overflow-hidden order-2">
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-blue-900 to-indigo-900 opacity-90 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Modern bank building" 
          className="absolute inset-0 w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000 hover:scale-100"
        />
        
        <div className="relative z-20 flex flex-col p-16 h-full text-white w-full">
          <div className="flex items-center gap-3 self-end">
            <span className="text-2xl font-bold tracking-tight">Bank CRM</span>
            <div className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
          </div>
          
          <div className="mt-auto mb-10">
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Join the future of retail banking.
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-4 h-4 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-blue-100 text-sm">360° view of your customers and their financial portfolios.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-4 h-4 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-blue-100 text-sm">Automated lead tracking specifically built for financial tools.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Left side - Signup Form */}
      <div className="w-full lg:w-7/12 flex items-center justify-center px-8 sm:px-16 lg:px-24 py-12 order-1 bg-white">
        <div className="max-w-xl w-full">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-blue-600 rounded-lg shadow-md flex items-center justify-center">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Vault CRM</span>
          </div>

          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Create an account</h2>
            <p className="text-gray-500">Accelerate your team's workflow today.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="block w-full rounded-xl border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-3 px-4 border transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="block w-full rounded-xl border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-3 px-4 border transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Work Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-xl border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-3 px-4 border transition-all duration-200 bg-gray-50 focus:bg-white"
                placeholder="john.doe@bank.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Job Title</label>
              <select
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                className="block w-full rounded-xl border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-3 px-4 border transition-all duration-200 bg-gray-50 focus:bg-white cursor-pointer"
                required
              >
                <option value="" disabled>Select your role</option>
                <option value="advisor">Financial Advisor</option>
                <option value="manager">Branch Manager</option>
                <option value="teller">Senior Teller</option>
                <option value="executive">Bank Executive</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="block w-full rounded-xl border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-3 px-4 border transition-all duration-200 bg-gray-50 focus:bg-white"
                placeholder="Create a strong password"
                required
              />
              <p className="mt-2 text-xs text-gray-500">Must be at least 8 characters long.</p>
            </div>

            <div className="flex items-start mt-6">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer mt-0.5 transition-colors"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="text-gray-600 cursor-pointer select-none">
                  I agree to the <a href="#" className="font-semibold text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="font-semibold text-blue-600 hover:underline">Privacy Policy</a>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Create Account
            </button>
          </form>

          <div className="mt-8 text-center text-sm">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="font-bold text-blue-600 hover:text-blue-500 transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
