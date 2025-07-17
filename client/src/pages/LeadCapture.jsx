import { useState } from "react";
import {
  Mail,
  Building,
  Users,
  Briefcase,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function LeadCaptureForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    companyName: "",
    companySize: "",
    industry: "",
    service: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", form);
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setForm({
        fullName: "",
        email: "",
        companyName: "",
        companySize: "",
        industry: "",
        service: "",
      });
    }, 3000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-6">
        <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Thank You!</h2>
          <p className="text-gray-600 text-sm">We’ll reach out to you shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-6xl bg-white/80 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden border border-white/30 flex flex-col md:flex-row">
        {/* Left Side Graphic or Text */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-blue-100 via-purple-100 to-white items-center justify-center p-10">
          <div className="text-left space-y-4">
            <h2 className="text-3xl font-extrabold text-blue-700">
              Unlock your growth 🚀
            </h2>
            <p className="text-gray-700">
              Let’s connect and find out how LeadBridge can simplify your sales pipeline.
            </p>
            <img
              src="https://stories.freepiklabs.com/storage/51112/Team-goals_Artboard-1.svg"
              alt="Sales Illustration"
              className="w-full max-w-sm mt-6"
            />
          </div>
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-8 md:p-10">
          <div className="text-center md:text-left mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tell us about your business
            </h1>
            <p className="text-gray-600 mt-1">Let’s grow together</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              {
                name: "fullName",
                type: "text",
                icon: Users,
                placeholder: "Full Name",
              },
              {
                name: "email",
                type: "email",
                icon: Mail,
                placeholder: "Email Address",
              },
              {
                name: "companyName",
                type: "text",
                icon: Building,
                placeholder: "Company Name",
              },
            ].map(({ name, type, icon: Icon, placeholder }) => (
              <div key={name} className="relative">
                <input
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  value={form[name]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                />
                <Icon className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
              </div>
            ))}

            <select
              name="companySize"
              value={form.companySize}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
            >
              <option value="">Company Size</option>
              <option value="1-10">1-10 Employees</option>
              <option value="11-50">11-50 Employees</option>
              <option value="51-200">51-200 Employees</option>
              <option value="201+">201+ Employees</option>
            </select>

            <input
              type="text"
              name="industry"
              placeholder="Industry"
              value={form.industry}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
            />

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
            >
              <option value="">Service Interested In</option>
              <option value="Lead Management">Lead Management</option>
              <option value="Customer Support">Customer Support</option>
              <option value="Email Automation">Email Automation</option>
            </select>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>Submit</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
