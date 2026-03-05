import React, { useState } from 'react';
import LoanPredictionForm from '../components/loans/LoanPredictionForm';
import PredictionResultCard from '../components/loans/PredictionResultCard';
import { Sparkles, BrainCircuit } from 'lucide-react';

function Loans() {
  const [predictionResult, setPredictionResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Mock Machine Learning Model (Phase 1 Dummy Function)
  const handlePredict = (data) => {
    setIsLoading(true);
    setPredictionResult(null);

    // Simulate network delay
    setTimeout(() => {
      const income = parseFloat(data.applicantIncome || 0);
      const coIncome = parseFloat(data.coapplicantIncome || 0);
      const loanAmount = parseFloat(data.loanAmount || 0) * 1000; // Convert 'k' to actual
      const totalIncome = income + coIncome;

      let probability = 50; // Starting baseline
      let status = "Review";
      let factors = [];

      // 1. Credit History is the biggest factor
      if (data.creditHistory === "1") {
        probability += 25;
        factors.push({ impact: 'positive', title: 'Strong Credit', description: 'Applicant has a good credit history.' });
      } else {
        probability -= 30;
        factors.push({ impact: 'negative', title: 'Poor Credit', description: 'Past defaults detected.' });
      }

      // 2. Debt to Income Ratio Approximation (Total Income / Monthly Loan Payment roughly)
      // Very rough proxy for demonstration
      if (totalIncome > (loanAmount / (parseFloat(data.loanTerm) || 360)) * 5) {
        probability += 15;
        factors.push({ impact: 'positive', title: 'High Income Ratio', description: 'Income comfortably covers estimated monthly payments.' });
      } else if (totalIncome < (loanAmount / (parseFloat(data.loanTerm) || 360)) * 2) {
        probability -= 15;
        factors.push({ impact: 'negative', title: 'Low Income to Loan Ratio', description: 'Requested amount is high relative to income.' });
      } else {
        factors.push({ impact: 'neutral', title: 'Acceptable Income Ratio', description: 'Income to loan ratio is within standard limits.' });
      }

      // 3. Employment & Education
      if (data.education === "Graduate" && data.selfEmployed === "No") {
        probability += 10;
        factors.push({ impact: 'positive', title: 'Stable Profile', description: 'Salaried Graduate indicates lower default risk.' });
      }

      // Cap bounds
      probability = Math.max(5, Math.min(98, probability)); // between 5% and 98%

      // Determine Status
      if (probability >= 80) status = "Approved";
      else if (probability <= 45) status = "Rejected";

      setPredictionResult({
        status,
        probability,
        factors
      });
      setIsLoading(false);
    }, 1500); // 1.5s delay to simulate model processing
  };

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-6">

      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3 text-slate-800">
            <BrainCircuit className="w-8 h-8 text-indigo-600" />
            AI Loan Origination
          </h1>
          <p className="text-slate-500 mt-2 max-w-2xl">
            Empower agents with predictive intelligence. Evaluate customer profiles instantly to gauge loan approval probability before initiating formal underwriting.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
          <Sparkles className="w-4 h-4" />
          Model Active (v1.0 Mock)
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        <div className="col-span-1 lg:col-span-8">
          <LoanPredictionForm onPredict={handlePredict} isLoading={isLoading} />
        </div>

        <div className="col-span-1 lg:col-span-4">
          {predictionResult ? (
            <PredictionResultCard result={predictionResult} />
          ) : (
            <div className="bg-slate-50 border border-slate-200 border-dashed rounded-2xl h-64 flex flex-col items-center justify-center text-slate-400 p-6 text-center lg:sticky lg:top-6">
              <BrainCircuit className="w-12 h-12 mb-3 text-slate-300" />
              <p>Run the prediction model to view the AI analysis and recommendations here.</p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

export default Loans;