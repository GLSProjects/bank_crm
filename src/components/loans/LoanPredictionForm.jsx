import React, { useState } from 'react';
import { Calculator, DollarSign, Briefcase, GraduationCap, MapPin, Users, CreditCard, CalendarDays } from 'lucide-react';

const LoanPredictionForm = ({ onPredict, isLoading }) => {
    const [formData, setFormData] = useState({
        applicantIncome: '',
        coapplicantIncome: '',
        loanAmount: '',
        loanTerm: '360',
        creditHistory: '1',
        propertyArea: 'Urban',
        education: 'Graduate',
        selfEmployed: 'No',
        dependents: '0',
        gender: 'Male',
        married: 'Yes'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onPredict(formData);
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in-up border border-slate-100">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-5">
                <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                        <Calculator className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-white">Loan Prediction Engine</h2>
                        <p className="text-blue-100 text-sm mt-0.5">Enter applicant details to generate an instant AI approval prediction.</p>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Financial Details */}
                    <div className="space-y-4 col-span-1 md:col-span-2 lg:col-span-3">
                        <h3 className="text-lg font-medium text-slate-800 border-b border-slate-100 pb-2 flex items-center gap-2">
                            <DollarSign className="w-5 h-5 text-indigo-500" /> Financial Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Applicant Income ($)</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <DollarSign className="h-4 w-4 text-slate-400" />
                                    </div>
                                    <input
                                        type="number"
                                        name="applicantIncome"
                                        value={formData.applicantIncome}
                                        onChange={handleChange}
                                        required
                                        className="pl-10 w-full rounded-xl border-slate-200 bg-slate-50 border focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 transition-all text-sm py-2.5 outline-none"
                                        placeholder="e.g. 5000"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Co-applicant Income ($)</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <DollarSign className="h-4 w-4 text-slate-400" />
                                    </div>
                                    <input
                                        type="number"
                                        name="coapplicantIncome"
                                        value={formData.coapplicantIncome}
                                        onChange={handleChange}
                                        className="pl-10 w-full rounded-xl border-slate-200 bg-slate-50 border focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 transition-all text-sm py-2.5 outline-none"
                                        placeholder="e.g. 2000"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Requested Loan Amount ($k)</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="text-slate-400 text-sm font-medium">$</span>
                                    </div>
                                    <input
                                        type="number"
                                        name="loanAmount"
                                        value={formData.loanAmount}
                                        onChange={handleChange}
                                        required
                                        className="pl-8 w-full rounded-xl border-slate-200 bg-slate-50 border focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 transition-all text-sm py-2.5 outline-none"
                                        placeholder="e.g. 150 (Thousands)"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Loan Variables */}
                    <div className="space-y-4 col-span-1 md:col-span-2 lg:col-span-3 mt-4">
                        <h3 className="text-lg font-medium text-slate-800 border-b border-slate-100 pb-2 flex items-center gap-2">
                            <CalendarDays className="w-5 h-5 text-indigo-500" /> Loan Parameters
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Loan Term</label>
                                <select
                                    name="loanTerm"
                                    value={formData.loanTerm}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border-slate-200 bg-slate-50 border focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 transition-all text-sm py-2.5 px-3 outline-none appearance-none"
                                >
                                    <option value="120">10 Years (120 Mo)</option>
                                    <option value="180">15 Years (180 Mo)</option>
                                    <option value="240">20 Years (240 Mo)</option>
                                    <option value="360">30 Years (360 Mo)</option>
                                    <option value="480">40 Years (480 Mo)</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1 flex items-center gap-1">
                                    <CreditCard className="w-4 h-4 text-slate-500" /> Credit History
                                </label>
                                <select
                                    name="creditHistory"
                                    value={formData.creditHistory}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border-slate-200 bg-slate-50 border focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 transition-all text-sm py-2.5 px-3 outline-none appearance-none"
                                >
                                    <option value="1">Good (Meets Guidelines)</option>
                                    <option value="0">Bad (Defaults/Delinquency)</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1 flex items-center gap-1">
                                    <MapPin className="w-4 h-4 text-slate-500" /> Property Area
                                </label>
                                <select
                                    name="propertyArea"
                                    value={formData.propertyArea}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border-slate-200 bg-slate-50 border focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 transition-all text-sm py-2.5 px-3 outline-none appearance-none"
                                >
                                    <option value="Urban">Urban</option>
                                    <option value="Semiurban">Semi-Urban</option>
                                    <option value="Rural">Rural</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1 flex items-center gap-1">
                                    <Users className="w-4 h-4 text-slate-500" /> Dependents
                                </label>
                                <select
                                    name="dependents"
                                    value={formData.dependents}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border-slate-200 bg-slate-50 border focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 transition-all text-sm py-2.5 px-3 outline-none appearance-none"
                                >
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3+">3+</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Applicant Profile */}
                    <div className="space-y-4 col-span-1 md:col-span-2 lg:col-span-3 mt-4">
                        <h3 className="text-lg font-medium text-slate-800 border-b border-slate-100 pb-2 flex items-center gap-2">
                            <Users className="w-5 h-5 text-indigo-500" /> Personal Profile
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1 flex items-center gap-1">
                                    <GraduationCap className="w-4 h-4 text-slate-500" /> Education
                                </label>
                                <select
                                    name="education"
                                    value={formData.education}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border-slate-200 bg-slate-50 border focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 transition-all text-sm py-2.5 px-3 outline-none appearance-none"
                                >
                                    <option value="Graduate">Graduate</option>
                                    <option value="Not Graduate">Not Graduate</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1 flex items-center gap-1">
                                    <Briefcase className="w-4 h-4 text-slate-500" /> Self Employed
                                </label>
                                <select
                                    name="selfEmployed"
                                    value={formData.selfEmployed}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border-slate-200 bg-slate-50 border focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 transition-all text-sm py-2.5 px-3 outline-none appearance-none"
                                >
                                    <option value="No">No (Salaried)</option>
                                    <option value="Yes">Yes (Business Owner)</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Gender</label>
                                <select
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border-slate-200 bg-slate-50 border focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 transition-all text-sm py-2.5 px-3 outline-none appearance-none"
                                >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Marital Status</label>
                                <select
                                    name="married"
                                    value={formData.married}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border-slate-200 bg-slate-50 border focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 transition-all text-sm py-2.5 px-3 outline-none appearance-none"
                                >
                                    <option value="Yes">Married</option>
                                    <option value="No">Single</option>
                                </select>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-end">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-xl shadow-lg shadow-indigo-200 transition-all hover:scale-[1.02] disabled:opacity-75 disabled:hover:scale-100"
                    >
                        {isLoading ? (
                            <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        ) : (
                            <span className="sparkle-icon">✨</span>
                        )}
                        {isLoading ? 'Analyzing Risk Profile...' : 'Run Prediction Model'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoanPredictionForm;
