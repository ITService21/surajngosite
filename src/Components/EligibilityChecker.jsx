import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import Select from 'react-select';
import PropTypes from 'prop-types';

// Helper function to format numbers in Indian numbering system
const formatIndianCurrency = (num) => {
  if (!num) return '₹0';
  const numStr = num.toString();
  const lastThree = numStr.substring(numStr.length - 3);
  const otherNumbers = numStr.substring(0, numStr.length - 3);
  if (otherNumbers !== '') {
    return '₹' + otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + lastThree;
  } else {
    return '₹' + lastThree;
  }
};

// Options for ReactSelect dropdowns
const FUNDING_TYPE_OPTIONS = [
  { value: 'loan', label: 'Loan' },
  { value: 'grant', label: 'Grant' }
];

const EDUCATION_OPTIONS = [
  { value: 'Below 8th', label: 'Below 8th' },
  { value: '8th-10th', label: '8th-10th' },
  { value: '12th', label: '12th' },
  { value: 'Graduate', label: 'Graduate' },
  { value: 'Post Graduate', label: 'Post Graduate' }
];

const BUSINESS_TYPE_OPTIONS = [
  { value: 'Manufacturing', label: 'Manufacturing' },
  { value: 'Trading', label: 'Trading' },
  { value: 'Service', label: 'Service' },
  { value: 'Agriculture', label: 'Agriculture' },
  { value: 'Technology', label: 'Technology' }
];

const BUSINESS_REGISTRATION_OPTIONS = [
  { value: 'MSME', label: 'MSME' },
  { value: 'Private Limited', label: 'Private Limited' },
  { value: 'LLP', label: 'LLP' },
  { value: 'ROF', label: 'ROF (Registrar of Firms)' },
  { value: 'Partnership', label: 'Partnership' },
  { value: 'Proprietorship', label: 'Proprietorship' },
  { value: 'None', label: 'None' }
];

const EligibilityChecker = ({ isOpen, onClose }) => {
  const [fundingType, setFundingType] = useState(''); // 'loan' or 'grant'
  const [formData, setFormData] = useState({
    // Personal Information
    age: '',
    education: '',
    
    // Business Information
    businessType: '',
    businessRegistration: '',
    registrationDate: '', // For Startup India (within 2 years check)
    annualTurnover: '',
    projectCost: '',
    
    // Financial Information
    creditScore: '',
    
    // Additional Information
    employment: '', // Number of jobs created
    hasInnovativeIdea: false
  });

  const [eligibilityResults, setEligibilityResults] = useState(null);
  const [isChecking, setIsChecking] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Format number with Indian comma separators for display
  const formatNumberWithCommas = (num) => {
    if (!num) return '';
    const numStr = num.toString().replace(/,/g, ''); // Remove existing commas
    if (isNaN(numStr)) return num;
    
    const parts = numStr.split('.');
    const integerPart = parts[0];
    const decimalPart = parts[1] ? '.' + parts[1] : '';
    
    const lastThree = integerPart.substring(integerPart.length - 3);
    const otherNumbers = integerPart.substring(0, integerPart.length - 3);
    
    if (otherNumbers !== '') {
      return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + lastThree + decimalPart;
    } else {
      return lastThree + decimalPart;
    }
  };

  // Handle amount input with comma formatting
  const handleAmountChange = (field, displayValue) => {
    // Remove commas to get the actual number
    const numericValue = displayValue.replace(/,/g, '');
    
    if (numericValue === '' || !isNaN(numericValue)) {
      setFormData(prev => ({
        ...prev,
        [field]: numericValue === '' ? '' : parseInt(numericValue)
      }));
    }
  };

  const checkEligibility = () => {
    setIsChecking(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const results = calculateEligibility(formData);
      setEligibilityResults(results);
      setIsChecking(false);
    }, 2000);
  };

  const calculateEligibility = (data) => {
    const schemes = {};
    
    // Determine which schemes to check based on funding type
    if (fundingType === 'loan') {
      schemes['PMEGP Loan'] = {
        eligible: false,
        amount: 0,
        reasons: [],
        requirements: []
      };
      schemes['MUDRA Loan'] = {
        eligible: false,
        amount: 0,
        reasons: [],
        requirements: []
      };
      schemes['Startup India Seed Fund'] = {
        eligible: false,
        amount: 0,
        reasons: [],
        requirements: []
      };
      schemes['NAIFF Scheme'] = {
        eligible: false,
        amount: 0,
        reasons: [],
        requirements: []
      };
    } else if (fundingType === 'grant') {
      schemes['Government Grants for MSMEs'] = {
        eligible: false,
        amount: 0,
        reasons: [],
        requirements: []
      };
      schemes['Venture Capital'] = {
        eligible: false,
        amount: 0,
        reasons: [],
        requirements: []
      };
    }

    // PMEGP Loan Eligibility
    if (fundingType === 'loan' && data.age >= 18 && data.age <= 40 && 
        data.education !== 'Below 8th') {
      schemes['PMEGP Loan'].eligible = true;
      schemes['PMEGP Loan'].amount = Math.min(parseInt(data.projectCost) * 0.90, 5000000);
      schemes['PMEGP Loan'].reasons.push('Meets age and education criteria');
      schemes['PMEGP Loan'].requirements.push('Project report', 'Training certificate', 'Bank account');
    } else if (fundingType === 'loan') {
      if (data.age < 18 || data.age > 40) {
        schemes['PMEGP Loan'].reasons.push('Age must be between 18-40 years');
      }
      if (data.education === 'Below 8th') {
        schemes['PMEGP Loan'].reasons.push('Minimum 8th standard education required');
      }
    }

    // MUDRA Loan Eligibility
    if (fundingType === 'loan' && data.age >= 18 && data.age <= 65 && 
        data.creditScore >= 650) {
      schemes['MUDRA Loan'].eligible = true;
      if (data.annualTurnover < 50000) {
        schemes['MUDRA Loan'].amount = 50000; // Shishu
      } else if (data.annualTurnover < 500000) {
        schemes['MUDRA Loan'].amount = 500000; // Kishor
      } else {
        schemes['MUDRA Loan'].amount = 1000000; // Tarun
      }
      schemes['MUDRA Loan'].reasons.push('Meets age and credit criteria');
      schemes['MUDRA Loan'].requirements.push('Business registration', 'Bank statements', 'ITR');
    } else if (fundingType === 'loan') {
      if (data.age < 18 || data.age > 65) {
        schemes['MUDRA Loan'].reasons.push('Age must be between 18-65 years');
      }
      if (data.creditScore < 650) {
        schemes['MUDRA Loan'].reasons.push('Credit score of 650 or higher required');
      }
    }

    // Startup India Seed Fund Eligibility
    const isWithin2Years = data.registrationDate ? 
      (new Date() - new Date(data.registrationDate)) / (1000 * 60 * 60 * 24 * 365) <= 2 : false;
    
    if (fundingType === 'loan' && data.age >= 18 && data.age <= 40 && 
        (data.businessRegistration === 'Private Limited' || data.businessRegistration === 'LLP' || data.businessRegistration === 'ROF') && 
        isWithin2Years &&
        data.annualTurnover < 1000000000) {
      schemes['Startup India Seed Fund'].eligible = true;
      schemes['Startup India Seed Fund'].amount = 5000000; // Up to ₹50 lakh
      schemes['Startup India Seed Fund'].reasons.push('Meets startup registration and turnover criteria');
      schemes['Startup India Seed Fund'].requirements.push('Startup India registration', 'Business plan');
    } else if (fundingType === 'loan') {
      if (data.age < 18 || data.age > 40) {
        schemes['Startup India Seed Fund'].reasons.push('Age must be between 18-40 years');
      }
      if (data.businessRegistration !== 'Private Limited' && data.businessRegistration !== 'LLP' && data.businessRegistration !== 'ROF') {
        schemes['Startup India Seed Fund'].reasons.push('Must be registered as Private Limited, LLP, or ROF');
      }
      if (!isWithin2Years) {
        schemes['Startup India Seed Fund'].reasons.push('Business must be registered within the last 2 years');
      }
      if (data.annualTurnover >= 1000000000) {
        schemes['Startup India Seed Fund'].reasons.push('Annual turnover should be less than ₹100 crore');
      }
    }

    // NAIFF Scheme Eligibility (National Agriculture Infra Financing Facility)
    if (fundingType === 'loan' && 
        (data.businessType === 'Agriculture' || data.businessType === 'Manufacturing')) {
      schemes['NAIFF Scheme'].eligible = true;
      schemes['NAIFF Scheme'].amount = Math.min(parseInt(data.projectCost) * 0.90, 20000000);
      schemes['NAIFF Scheme'].reasons.push('Suitable for post-harvest management and viable farming assets');
      schemes['NAIFF Scheme'].requirements.push('Business model', 'Financial projections');
    } else if (fundingType === 'loan') {
      schemes['NAIFF Scheme'].reasons.push('Suitable for Agriculture and Manufacturing sectors only');
    }

    // Government Grants for MSMEs Eligibility
    // data.hasInnovativeIdea && 
    if (fundingType === 'grant' && 
        data.businessRegistration === 'MSME' && 
        data.employment >= 5) {
      schemes['Government Grants for MSMEs'].eligible = true;
      schemes['Government Grants for MSMEs'].amount = Math.min(parseInt(data.projectCost) * 0.75, 30000000);
      schemes['Government Grants for MSMEs'].reasons.push('Meets MSME, and employment criteria');
      schemes['Government Grants for MSMEs'].requirements.push('MSME registration', 'Project proposal');
    } else if (fundingType === 'grant') {
      if (data.businessRegistration !== 'MSME') {
        schemes['Government Grants for MSMEs'].reasons.push('MSME registration required');
      }
      // if (!data.hasInnovativeIdea) {
      //   schemes['Government Grants for MSMEs'].reasons.push('It would be great if you have an innovative idea.');
      // }
      if (data.employment < 5) {
        schemes['Government Grants for MSMEs'].reasons.push('Must provide employment to at least 5 people');
      }
    }

    // Venture Capital Eligibility
    if (fundingType === 'grant') {
      schemes['Venture Capital'].eligible = true;
      schemes['Venture Capital'].amount = 200000000; // Up to ₹200 crore
      schemes['Venture Capital'].reasons.push('Sector agnostic funding available for eligible businesses');
      schemes['Venture Capital'].requirements.push('Pitch deck', 'Financial model', 'Market analysis', 'Business plan', 'Team profile');
    }

    return schemes;
  };

  const eligibleSchemes = eligibilityResults ? 
    Object.entries(eligibilityResults).filter(([, scheme]) => scheme.eligible) : [];
  const ineligibleSchemes = eligibilityResults ? 
    Object.entries(eligibilityResults).filter(([, scheme]) => !scheme.eligible) : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Eligibility Checker</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>

          {!eligibilityResults ? (
            <div className="space-y-6">
              {/* Funding Type Selection */}
              <div className="pb-[20px] mb-[30px] bg-gradient-to-r from-pitama-green-50 to-pitama-teal-50 p-6 rounded-lg border-2 border-pitama-green-200">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Select Funding Type</h3>
                <Select
                  value={FUNDING_TYPE_OPTIONS.find(opt => opt.value === fundingType)}
                  onChange={(selectedOption) => setFundingType(selectedOption ? selectedOption.value : '')}
                  options={FUNDING_TYPE_OPTIONS}
                  placeholder="Choose Loan or Grant"
                  isClearable
                  className="react-select-container"
                  classNamePrefix="react-select"
                />
                <p className="text-sm text-gray-600 mt-2">
                  {fundingType === 'loan' ? 'Loans: PMEGP, MUDRA, Startup India Seed Fund, NAIFF' : 
                   fundingType === 'grant' ? 'Grants: Government Grants for MSMEs, Venture Capital' : 
                   'Please select a funding type to see relevant schemes'}
                </p>
              </div>

              {fundingType && (
                <>
              {/* Personal Information */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                    <input
                      type="number"
                      value={formData.age}
                      onChange={(e) => handleInputChange('age', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pitama-green-500"
                      placeholder="Enter your age"
                    />
                  </div>
                  {fundingType === 'loan' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Education</label>
                      <Select
                        value={EDUCATION_OPTIONS.find(opt => opt.value === formData.education)}
                        onChange={(selectedOption) => handleInputChange('education', selectedOption ? selectedOption.value : '')}
                        options={EDUCATION_OPTIONS}
                        placeholder="Select Education"
                        isClearable
                        className="react-select-container"
                        classNamePrefix="react-select"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Business Information */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Business Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {fundingType === 'loan' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
                      <Select
                        value={BUSINESS_TYPE_OPTIONS.find(opt => opt.value === formData.businessType)}
                        onChange={(selectedOption) => handleInputChange('businessType', selectedOption ? selectedOption.value : '')}
                        options={BUSINESS_TYPE_OPTIONS}
                        placeholder="Select Business Type"
                        isClearable
                        className="react-select-container"
                        classNamePrefix="react-select"
                      />
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Business Registration</label>
                    <Select
                      value={BUSINESS_REGISTRATION_OPTIONS.find(opt => opt.value === formData.businessRegistration)}
                      onChange={(selectedOption) => handleInputChange('businessRegistration', selectedOption ? selectedOption.value : '')}
                      options={BUSINESS_REGISTRATION_OPTIONS}
                      placeholder="Select Registration Type"
                      isClearable
                      className="react-select-container"
                      classNamePrefix="react-select"
                    />
                  </div>
                  {fundingType === 'loan' && (formData.businessRegistration === 'Private Limited' || formData.businessRegistration === 'LLP' || formData.businessRegistration === 'ROF') && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Business Registration Date</label>
                      <input
                        type="date"
                        value={formData.registrationDate}
                        onChange={(e) => handleInputChange('registrationDate', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pitama-green-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">Required for Startup India Seed Fund</p>
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Annual Turnover (₹)</label>
                    <input
                      type="text"
                      value={formatNumberWithCommas(formData.annualTurnover)}
                      onChange={(e) => handleAmountChange('annualTurnover', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pitama-green-500"
                      placeholder="e.g., 50,00,000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Project Cost (₹)</label>
                    <input
                      type="text"
                      value={formatNumberWithCommas(formData.projectCost)}
                      onChange={(e) => handleAmountChange('projectCost', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pitama-green-500"
                      placeholder="e.g., 50,00,000"
                    />
                  </div>
                  {fundingType === 'grant' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Employment Generation</label>
                      <input
                        type="number"
                        value={formData.employment}
                        onChange={(e) => handleInputChange('employment', parseInt(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pitama-green-500"
                        placeholder="Number of jobs to be created"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Financial Information */}
              {fundingType === 'loan' && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">Financial Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Credit Score (Optional)</label>
                      <input
                        type="number"
                        value={formData.creditScore}
                        onChange={(e) => handleInputChange('creditScore', parseInt(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pitama-green-500"
                        placeholder="Credit score (300-900)"
                      />
                      <p className="text-xs text-gray-500 mt-1">Required for MUDRA Loan (650+)</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Additional Information */}
              {fundingType === 'grant' && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">Additional Information</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="hasInnovativeIdea"
                        checked={formData.hasInnovativeIdea}
                        onChange={(e) => handleInputChange('hasInnovativeIdea', e.target.checked)}
                        className="w-4 h-4 text-pitama-green-600 border-gray-300 rounded focus:ring-pitama-green-500"
                      />
                      <label htmlFor="hasInnovativeIdea" className="text-sm font-medium text-gray-700">
                        Innovative Business Idea or Starting Business with New Ways
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Check Eligibility Button */}
              <div className="text-center pb-[24px]">
                <button
                  onClick={checkEligibility}
                  disabled={isChecking}
                  className="px-8 py-3 bg-gradient-to-r from-pitama-green-500 to-pitama-teal-500 text-white font-semibold rounded-lg hover:from-pitama-green-600 hover:to-pitama-teal-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isChecking ? 'Checking Eligibility...' : 'Check Eligibility'}
                </button>
              </div>
              </>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              {/* Results Header */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Eligibility Results</h3>
                <p className="text-gray-600">
                  Based on your information, here are the schemes you&apos;re eligible for:
                </p>
              </div>

              {/* Eligible Schemes */}
              {eligibleSchemes.length > 0 && (
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                    <FaCheckCircle className="mr-2" />
                    Eligible Schemes ({eligibleSchemes.length})
                  </h4>
                  <div className="space-y-4">
                    {eligibleSchemes.map(([schemeName, scheme]) => (
                      <div key={schemeName} className="bg-white p-4 rounded-lg border border-green-200">
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-semibold text-green-800">{schemeName}</h5>
                          <span className="text-lg font-bold text-green-600">
                            {formatIndianCurrency(scheme.amount)}
                          </span>
                        </div>
                        <div className="text-sm text-green-700 mb-2">
                          {scheme.reasons.join(', ')}
                        </div>
                        <div className="text-sm text-gray-600">
                          <strong>Requirements:</strong> {scheme.requirements.join(', ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Ineligible Schemes */}
              {ineligibleSchemes.length > 0 && (
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
                    <FaTimesCircle className="mr-2" />
                    Not Eligible ({ineligibleSchemes.length})
                  </h4>
                  <div className="space-y-4">
                    {ineligibleSchemes.map(([schemeName, scheme]) => (
                      <div key={schemeName} className="bg-white p-4 rounded-lg border border-red-200">
                        <h5 className="font-semibold text-red-800 mb-2">{schemeName}</h5>
                        <div className="text-sm text-red-700">
                          <strong>Reasons:</strong> {scheme.reasons.join(', ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => setEligibilityResults(null)}
                  className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition-all duration-300"
                >
                  Check Again
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2 bg-pitama-green-500 text-white font-semibold rounded-lg hover:bg-pitama-green-600 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          )}
          </div>
        </motion.div>
      </div>
      )}
    </AnimatePresence>
  );
};

EligibilityChecker.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EligibilityChecker;
