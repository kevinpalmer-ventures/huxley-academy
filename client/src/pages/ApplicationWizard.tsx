import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { Link } from "wouter";

export default function ApplicationWizard() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Student Info
    studentFullName: "",
    preferredName: "",
    gradeLevel: "",
    currentSchool: "",
    dateOfBirth: "",
    gender: "",
    parentFullName: "",
    parentEmail: "",
    parentPhone: "",
    emergencyName: "",
    emergencyPhone: "",
    relationship: "",

    // Step 2: Academic & Tech
    mathLevel: "",
    scienceLevel: "",
    hasCodingExperience: false,
    codingExperienceDesc: "",
    hasUsedAI: false,
    hasComputerAccess: false,

    // Step 3: Agreement
    studentAgrees: false,
    parentAgrees: false,
    studentSignature: "",
    parentSignature: "",
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <Card className="max-w-lg w-full bg-white/10 border-white/20 backdrop-blur-md">
          <CardContent className="p-8 text-center space-y-6">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-10 w-10 text-green-400" />
            </div>
            <h2 className="text-3xl font-bold text-white">Application Submitted Successfully</h2>
            <p className="text-gray-300">
              Thank you for applying to Huxley Academy. Our admissions team will review your application and contact you within 3-5 business days.
            </p>
            <div className="flex flex-col gap-3 pt-4">
              <Link href="/">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Return to Homepage
                </Button>
              </Link>
              <Button variant="outline" className="w-full border-white/20 text-purple-200 hover:bg-white/10">
                Download Copy of Application
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" className="text-purple-300 hover:text-purple-200 pl-0">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Cancel Application
            </Button>
          </Link>
          <div className="text-right">
            <h1 className="text-xl font-bold text-white">Admissions Application</h1>
            <p className="text-sm text-purple-300">Summer 2026 Cohort</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm font-medium text-gray-400 mb-2">
            <span className={step >= 1 ? "text-purple-400" : ""}>Student Info</span>
            <span className={step >= 2 ? "text-purple-400" : ""}>Academic & Tech</span>
            <span className={step >= 3 ? "text-purple-400" : ""}>Agreement</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-purple-500 transition-all duration-500 ease-in-out"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Wizard Content */}
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
          <CardHeader className="border-b border-white/10 pb-6">
            <CardTitle className="text-2xl text-white">
              {step === 1 && "Step 1: Basic Student Information"}
              {step === 2 && "Step 2: Academic & Technology Background"}
              {step === 3 && "Step 3: AI Literacy Readiness Agreement"}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 md:p-8">
            
            {/* STEP 1 */}
            {step === 1 && (
              <div className="space-y-8">
                {/* Student Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-purple-300 border-b border-white/10 pb-2">Student Details</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-gray-300">Full Name *</Label>
                      <Input 
                        className="bg-black/20 border-white/10 text-white" 
                        placeholder="Legal First & Last Name"
                        value={formData.studentFullName}
                        onChange={(e) => handleInputChange("studentFullName", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-gray-300">Preferred Name</Label>
                      <Input 
                        className="bg-black/20 border-white/10 text-white" 
                        placeholder="Nickname (Optional)"
                        value={formData.preferredName}
                        onChange={(e) => handleInputChange("preferredName", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-gray-300">Grade Level (Fall 2026) *</Label>
                      <Select onValueChange={(val) => handleInputChange("gradeLevel", val)} value={formData.gradeLevel}>
                        <SelectTrigger className="bg-black/20 border-white/10 text-white">
                          <SelectValue placeholder="Select Grade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="6">6th Grade</SelectItem>
                          <SelectItem value="7">7th Grade</SelectItem>
                          <SelectItem value="8">8th Grade</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-gray-300">Current School *</Label>
                      <Input 
                        className="bg-black/20 border-white/10 text-white" 
                        placeholder="School Name"
                        value={formData.currentSchool}
                        onChange={(e) => handleInputChange("currentSchool", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-gray-300">Date of Birth *</Label>
                      <Input 
                        type="date"
                        className="bg-black/20 border-white/10 text-white" 
                        value={formData.dateOfBirth}
                        onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-gray-300">Gender</Label>
                      <Select onValueChange={(val) => handleInputChange("gender", val)} value={formData.gender}>
                        <SelectTrigger className="bg-black/20 border-white/10 text-white">
                          <SelectValue placeholder="Select Gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="non-binary">Non-binary</SelectItem>
                          <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Parent Info */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-purple-300 border-b border-white/10 pb-2">Parent / Guardian Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-gray-300">Parent Full Name *</Label>
                      <Input 
                        className="bg-black/20 border-white/10 text-white" 
                        value={formData.parentFullName}
                        onChange={(e) => handleInputChange("parentFullName", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-gray-300">Email Address *</Label>
                      <Input 
                        type="email"
                        className="bg-black/20 border-white/10 text-white" 
                        value={formData.parentEmail}
                        onChange={(e) => handleInputChange("parentEmail", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-gray-300">Phone Number *</Label>
                      <Input 
                        type="tel"
                        className="bg-black/20 border-white/10 text-white" 
                        value={formData.parentPhone}
                        onChange={(e) => handleInputChange("parentPhone", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-gray-300">Relationship to Student *</Label>
                      <Select onValueChange={(val) => handleInputChange("relationship", val)} value={formData.relationship}>
                        <SelectTrigger className="bg-black/20 border-white/10 text-white">
                          <SelectValue placeholder="Select Relationship" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="parent">Parent</SelectItem>
                          <SelectItem value="guardian">Legal Guardian</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-900/20 border border-blue-500/20 p-4 rounded-lg flex items-start gap-3">
                  <div className="mt-1"><CheckCircle className="h-5 w-5 text-blue-400" /></div>
                  <p className="text-sm text-blue-200">
                    Your information is secure and used only for admissions purposes. We do not share data with third parties.
                  </p>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="space-y-8">
                <div className="bg-purple-900/20 border border-purple-500/20 p-4 rounded-lg mb-6">
                  <p className="text-sm text-purple-200">
                    We are not evaluating prior experience to accept or reject students. We use this information to assess readiness and tailor our curriculum.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-gray-300">Current Math Level</Label>
                    <Select onValueChange={(val) => handleInputChange("mathLevel", val)} value={formData.mathLevel}>
                      <SelectTrigger className="bg-black/20 border-white/10 text-white">
                        <SelectValue placeholder="Select Level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="on-grade">On Grade Level</SelectItem>
                        <SelectItem value="above-grade">Above Grade Level</SelectItem>
                        <SelectItem value="honors">Honors / Advanced</SelectItem>
                        <SelectItem value="unsure">Unsure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-300">Current Science Level</Label>
                    <Select onValueChange={(val) => handleInputChange("scienceLevel", val)} value={formData.scienceLevel}>
                      <SelectTrigger className="bg-black/20 border-white/10 text-white">
                        <SelectValue placeholder="Select Level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="on-grade">On Grade Level</SelectItem>
                        <SelectItem value="above-grade">Above Grade Level</SelectItem>
                        <SelectItem value="honors">Honors / Advanced</SelectItem>
                        <SelectItem value="unsure">Unsure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-6 pt-4">
                  <div className="flex items-center justify-between bg-black/20 p-4 rounded-lg border border-white/5">
                    <Label className="text-gray-300 cursor-pointer flex-1">Has your child taken coding or STEM classes before?</Label>
                    <Checkbox 
                      checked={formData.hasCodingExperience}
                      onCheckedChange={(checked) => handleInputChange("hasCodingExperience", checked)}
                      className="border-white/30 data-[state=checked]:bg-purple-600"
                    />
                  </div>
                  
                  {formData.hasCodingExperience && (
                    <div className="ml-4 pl-4 border-l-2 border-purple-500/30 animate-in fade-in slide-in-from-top-2">
                      <Label className="text-gray-300 mb-2 block">Please describe briefly:</Label>
                      <Textarea 
                        className="bg-black/20 border-white/10 text-white"
                        placeholder="e.g. Python camp, Scratch in school, Robotics club..."
                        value={formData.codingExperienceDesc}
                        onChange={(e) => handleInputChange("codingExperienceDesc", e.target.value)}
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-between bg-black/20 p-4 rounded-lg border border-white/5">
                    <Label className="text-gray-300 cursor-pointer flex-1">Has your child used AI tools before (ChatGPT, etc.)?</Label>
                    <Checkbox 
                      checked={formData.hasUsedAI}
                      onCheckedChange={(checked) => handleInputChange("hasUsedAI", checked)}
                      className="border-white/30 data-[state=checked]:bg-purple-600"
                    />
                  </div>

                  <div className="flex items-center justify-between bg-black/20 p-4 rounded-lg border border-white/5">
                    <Label className="text-gray-300 cursor-pointer flex-1">Does your child have access to a laptop or computer at home?</Label>
                    <Checkbox 
                      checked={formData.hasComputerAccess}
                      onCheckedChange={(checked) => handleInputChange("hasComputerAccess", checked)}
                      className="border-white/30 data-[state=checked]:bg-purple-600"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="space-y-8">
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl space-y-4">
                  <h3 className="text-xl font-bold text-white text-center">AI Literacy Commitment</h3>
                  <p className="text-gray-300 text-center italic">
                    "At Huxley Academy, we believe technology should expand human potential, not replace it."
                  </p>
                  <ul className="space-y-3 text-gray-300 pt-4">
                    <li className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-400 shrink-0" />
                      <span>I agree to use AI tools responsibly and ethically.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-400 shrink-0" />
                      <span>I agree to think critically about AI outputs and verify facts.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-400 shrink-0" />
                      <span>I agree to respect others in collaborative discussions.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-400 shrink-0" />
                      <span>I agree to use technology to build, create, and solve problems—not to harm or deceive.</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Checkbox 
                      id="student-agree"
                      checked={formData.studentAgrees}
                      onCheckedChange={(checked) => handleInputChange("studentAgrees", checked)}
                      className="mt-1 border-white/30 data-[state=checked]:bg-purple-600"
                    />
                    <Label htmlFor="student-agree" className="text-gray-300 leading-relaxed cursor-pointer">
                      <strong>Student Agreement:</strong> I have read the commitment above and agree to follow these principles during my time at Huxley Academy.
                    </Label>
                  </div>
                  <div className="flex items-start gap-3">
                    <Checkbox 
                      id="parent-agree"
                      checked={formData.parentAgrees}
                      onCheckedChange={(checked) => handleInputChange("parentAgrees", checked)}
                      className="mt-1 border-white/30 data-[state=checked]:bg-purple-600"
                    />
                    <Label htmlFor="parent-agree" className="text-gray-300 leading-relaxed cursor-pointer">
                      <strong>Parent/Guardian Agreement:</strong> I agree to support my child in responsible AI learning and digital citizenship.
                    </Label>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
                  <div className="space-y-2">
                    <Label className="text-gray-300">Student Digital Signature (Type Full Name)</Label>
                    <Input 
                      className="bg-black/20 border-white/10 text-white font-mono" 
                      placeholder="Type Name"
                      value={formData.studentSignature}
                      onChange={(e) => handleInputChange("studentSignature", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-300">Parent Digital Signature (Type Full Name)</Label>
                    <Input 
                      className="bg-black/20 border-white/10 text-white font-mono" 
                      placeholder="Type Name"
                      value={formData.parentSignature}
                      onChange={(e) => handleInputChange("parentSignature", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

          </CardContent>
          <CardContent className="p-6 md:p-8 border-t border-white/10 flex justify-between bg-black/20">
            <Button 
              variant="ghost" 
              onClick={prevStep} 
              disabled={step === 1 || isSubmitting}
              className="text-gray-400 hover:text-white hover:bg-white/10"
            >
              Back
            </Button>
            
            {step < 3 ? (
              <Button 
                onClick={nextStep} 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8"
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button 
                onClick={handleSubmit} 
                disabled={isSubmitting || !formData.studentAgrees || !formData.parentAgrees || !formData.studentSignature || !formData.parentSignature}
                className="bg-green-600 hover:bg-green-700 text-white px-8"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
