import React from 'react';
import { CheckCircle2, XCircle, AlertTriangle, TrendingUp, TrendingDown, Info } from 'lucide-react';

const PredictionResultCard = ({ result }) => {
    if (!result) return null;

    const isApproved = result.status === 'Approved';
    const isReview = result.status === 'Review';
    const isRejected = result.status === 'Rejected';

    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in-up border border-slate-100 mt-6 lg:mt-0 lg:sticky lg:top-6">

            {/* Header Banner */}
            <div className={`px-6 py-5 ${isApproved ? 'bg-emerald-500' :
                    isReview ? 'bg-amber-500' : 'bg-red-500'
                }`}>
                <div className="flex items-start justify-between">
                    <div>
                        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                            {isApproved && <CheckCircle2 className="w-6 h-6" />}
                            {isReview && <AlertTriangle className="w-6 h-6" />}
                            {isRejected && <XCircle className="w-6 h-6" />}
                            {result.status}
                        </h2>
                        <p className="text-white/80 text-sm mt-1">AI Recommendation Model</p>
                    </div>
                    <div className="bg-white/20 px-3 py-1 rounded-full text-white font-bold text-lg">
                        {result.probability}%
                    </div>
                </div>
            </div>

            <div className="p-6">

                {/* Main Score Readout */}
                <div className="flex flex-col items-center justify-center py-4">
                    <div className="relative w-32 h-32">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                            <circle
                                className="text-slate-100 stroke-current"
                                strokeWidth="8"
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                            ></circle>
                            <circle
                                className={`${isApproved ? 'text-emerald-500' :
                                        isReview ? 'text-amber-500' : 'text-red-500'
                                    } stroke-current`}
                                strokeWidth="8"
                                strokeLinecap="round"
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                                strokeDasharray="251.2"
                                strokeDashoffset={251.2 - (251.2 * result.probability) / 100}
                                style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
                            ></circle>
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <span className="text-3xl font-bold text-slate-800">{result.probability}%</span>
                            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Match</span>
                        </div>
                    </div>
                </div>

                {/* AI Factor Breakdown */}
                <div className="mt-4 space-y-4">
                    <h3 className="text-sm font-semibold text-slate-800 border-b border-slate-100 pb-2 uppercase tracking-wide">
                        Key Predictive Factors
                    </h3>

                    <ul className="space-y-3">
                        {result.factors.map((factor, index) => (
                            <li key={index} className="flex gap-3 text-sm">
                                <div className="mt-0.5">
                                    {factor.impact === 'positive' ? (
                                        <TrendingUp className="w-4 h-4 text-emerald-500" />
                                    ) : factor.impact === 'negative' ? (
                                        <TrendingDown className="w-4 h-4 text-red-500" />
                                    ) : (
                                        <Info className="w-4 h-4 text-amber-500" />
                                    )}
                                </div>
                                <div>
                                    <span className="font-medium text-slate-700">{factor.title}</span>
                                    <p className="text-slate-500 text-xs mt-0.5">{factor.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Action Button */}
                <div className="mt-8 pt-4 border-t border-slate-100">
                    <button
                        className={`w-full py-3 px-4 rounded-xl font-medium shadow-sm transition-all focus:ring-2 focus:ring-offset-2 ${isApproved
                                ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 focus:ring-emerald-500'
                                : 'bg-slate-50 text-slate-700 hover:bg-slate-100 focus:ring-slate-500'
                            }`}
                    >
                        {isApproved ? 'Proceed to Application' : 'Request Manual Underwriting'}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default PredictionResultCard;
