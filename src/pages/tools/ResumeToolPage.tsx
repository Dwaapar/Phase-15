import React, { useState } from "react";
import { Download, FileText, User, Briefcase } from "lucide-react";

export default function ResumeToolPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
    experience: [{ company: "", position: "", duration: "", description: "" }],
    education: [{ school: "", degree: "", year: "", gpa: "" }],
    skills: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addExperience = () => {
    setFormData(prev => ({
      ...prev,
      experience: [...prev.experience, { company: "", position: "", duration: "", description: "" }]
    }));
  };

  const addEducation = () => {
    setFormData(prev => ({
      ...prev,
      education: [...prev.education, { school: "", degree: "", year: "", gpa: "" }]
    }));
  };

  return (
    <div className="pt-20 min-h-screen bg-monks-light-gray">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-monks-black mb-6">Resume Builder</h1>
          <p className="text-xl text-monks-gray max-w-3xl mx-auto">
            Create a professional, ATS-optimized resume in minutes with our intelligent builder.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-monks-black mb-6">Your Information</h2>
            
            <div className="space-y-6">
              {/* Personal Info */}
              <div className="space-y-4">
                <h3 className="font-semibold text-monks-black">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-monks-light-gray border-0 text-monks-black focus:ring-2 focus:ring-monks-accent"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-monks-light-gray border-0 text-monks-black focus:ring-2 focus:ring-monks-accent"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-monks-light-gray border-0 text-monks-black focus:ring-2 focus:ring-monks-accent"
                  />
                  <input
                    type="text"
                    placeholder="Location"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-monks-light-gray border-0 text-monks-black focus:ring-2 focus:ring-monks-accent"
                  />
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-4">
                <h3 className="font-semibold text-monks-black">Professional Summary</h3>
                <textarea
                  placeholder="Brief summary of your professional background..."
                  value={formData.summary}
                  onChange={(e) => handleInputChange("summary", e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 rounded-2xl bg-monks-light-gray border-0 text-monks-black focus:ring-2 focus:ring-monks-accent resize-none"
                />
              </div>

              {/* Skills */}
              <div className="space-y-4">
                <h3 className="font-semibold text-monks-black">Skills</h3>
                <textarea
                  placeholder="List your key skills (comma separated)"
                  value={formData.skills}
                  onChange={(e) => handleInputChange("skills", e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 rounded-2xl bg-monks-light-gray border-0 text-monks-black focus:ring-2 focus:ring-monks-accent resize-none"
                />
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <button className="flex-1 bg-monks-black text-white px-6 py-3 rounded-full font-medium hover:bg-monks-accent transition-all duration-300 flex items-center justify-center gap-2">
                <Download size={16} />
                Download PDF
              </button>
              <button className="flex-1 border border-monks-gray text-monks-gray px-6 py-3 rounded-full font-medium hover:border-monks-black hover:text-monks-black transition-all duration-300">
                Save Draft
              </button>
            </div>
          </div>

          {/* Preview */}
          <div className="bg-white rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-monks-black mb-6">Preview</h2>
            <div className="bg-monks-light-gray rounded-2xl p-6 min-h-96">
              <div className="text-center text-monks-gray">
                <FileText size={48} className="mx-auto mb-4" />
                <p>Resume preview will appear here as you fill out the form</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}