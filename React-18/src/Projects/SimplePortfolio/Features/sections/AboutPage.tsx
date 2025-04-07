import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Configure PDF.js worker (local version for better reliability)
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/build/pdf.worker.min.js`;

export default function AboutPage() {
  // State management
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isPdfLoading, setIsPdfLoading] = useState(false);
  const [pdfError, setPdfError] = useState<string | null>(null);

  const pdfWrapper = useRef<HTMLDivElement>(null);

  // Handlers
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setProfileImage(file);
    }
  };

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setResumeFile(file);
      setPageNumber(1);
      setPdfError(null);
    }
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setIsPdfLoading(false);
  };

  const onDocumentLoadError = () => {
    setIsPdfLoading(false);
    setPdfError("Failed to load PDF. Please try another file.");
  };

  const handleDownload = () => {
    if (!resumeFile) return;

    const url = URL.createObjectURL(resumeFile);
    const a = document.createElement("a");
    a.href = url;
    a.download = resumeFile.name || "resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const changePage = (offset: number) => {
    setPageNumber((prev) =>
      Math.max(1, Math.min(numPages || 1, prev + offset))
    );
  };

  // Personal details data
  const personalDetails = [
    { label: "Name", value: "John Doe" },
    { label: "Date of Birth", value: "January 1, 1990" },
    { label: "Languages", value: "English, Spanish, French" },
    { label: "Skills", value: "React, Node.js, TypeScript, GraphQL" },
    { label: "CGPA", value: "3.8/4.0" },
  ];

  return (
    <div className="p-6 relative max-w-7xl mx-auto">
      {/* Image Box and Details Section */}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        {/* Image Upload Box */}
        <motion.div
          className="w-full md:w-[350px] h-[350px] border-2 border-dashed border-[var(--theme-color)] rounded-lg flex flex-col items-center justify-center bg-gray-50"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {profileImage ? (
            <>
              <img
                src={URL.createObjectURL(profileImage)}
                alt="Profile"
                className="w-full h-full object-cover rounded-lg"
              />
              <motion.button
                onClick={() => setProfileImage(null)}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ×
              </motion.button>
            </>
          ) : (
            <>
              <span className="text-gray-500 mb-2">Import Profile Image</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <motion.label
                htmlFor="image-upload"
                className="px-4 py-2 bg-[var(--theme-color)] text-white rounded-md cursor-pointer hover:opacity-90"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Choose Image
              </motion.label>
            </>
          )}
        </motion.div>

        {/* Personal Details */}
        <div className="flex-1">
          <motion.h1
            className="text-3xl font-bold text-[var(--theme-color)] mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            About Me
          </motion.h1>

          <div className="space-y-4">
            {personalDetails.map((detail) => (
              <div key={detail.label}>
                <h3 className="font-semibold">{detail.label}:</h3>
                <p className="text-gray-700">{detail.value}</p>
              </div>
            ))}

            {/* Resume Upload and View Buttons */}
            <div className="flex flex-wrap gap-4 mt-6 items-center">
              <div className="relative">
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleResumeUpload}
                  className="hidden"
                  id="resume-upload"
                />
                <motion.label
                  htmlFor="resume-upload"
                  className="px-4 py-2 bg-[var(--theme-color)] text-white rounded-md cursor-pointer hover:opacity-90 inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {resumeFile ? "Change Resume" : "Upload Resume"}
                </motion.label>
                {resumeFile && (
                  <span className="ml-2 text-sm text-gray-600">
                    {resumeFile.name}
                  </span>
                )}
              </div>

              <motion.button
                onClick={() => {
                  if (resumeFile) {
                    setIsPdfLoading(true);
                    setShowModal(true);
                  }
                }}
                disabled={!resumeFile}
                className={`px-4 py-2 rounded-md ${
                  resumeFile
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                whileHover={resumeFile ? { scale: 1.05 } : {}}
                whileTap={resumeFile ? { scale: 0.95 } : {}}
              >
                {isPdfLoading ? "Loading..." : "View Resume"}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Background and Education Cards */}
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-xl font-semibold mb-4 text-[var(--theme-color)]">
            Background
          </h2>
          <p className="text-gray-700">
            I'm a full-stack developer with 5+ years of experience building
            scalable web applications. Specialized in modern JavaScript
            frameworks and cloud technologies.
          </p>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-xl font-semibold mb-4 text-[var(--theme-color)]">
            Education
          </h2>
          <div className="space-y-2">
            <p className="text-gray-700 font-medium">Computer Science Degree</p>
            <p className="text-gray-600">XYZ University, 2015-2019</p>
            <p className="text-gray-600">GPA: 3.8/4.0</p>
          </div>
        </motion.div>
      </div>

      {/* Resume Modal with PDF Viewer */}
      {showModal && resumeFile && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50">
              <h3 className="text-xl font-bold truncate max-w-[70%]">
                {resumeFile.name}
              </h3>
              <div className="flex gap-2">
                <motion.button
                  onClick={handleDownload}
                  className="px-3 py-1 bg-[var(--theme-color)] text-white rounded-md hover:opacity-90 text-sm flex items-center gap-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Download</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </motion.button>
                <motion.button
                  onClick={() => setShowModal(false)}
                  className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  &times;
                </motion.button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div
              ref={pdfWrapper}
              className="flex-1 overflow-auto p-4 border-2 border-gray-300 m-4 bg-gray-50 rounded-lg"
            >
              {pdfError ? (
                <div className="text-center py-8 text-red-500">{pdfError}</div>
              ) : (
                <Document
                  file={resumeFile}
                  onLoadSuccess={onDocumentLoadSuccess}
                  onLoadError={onDocumentLoadError}
                  loading={
                    <div className="text-center py-8">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--theme-color)] mx-auto"></div>
                      <p className="mt-2">Loading PDF...</p>
                    </div>
                  }
                >
                  <Page
                    pageNumber={pageNumber}
                    width={
                      pdfWrapper.current
                        ? Math.min(pdfWrapper.current.clientWidth, 800)
                        : 800
                    }
                    loading={
                      <div className="text-center py-8">
                        <div className="animate-pulse">Rendering page...</div>
                      </div>
                    }
                    renderTextLayer={true}
                    renderAnnotationLayer={false}
                  />
                </Document>
              )}
            </div>

            {/* PDF Navigation */}
            {numPages && numPages > 1 && (
              <div className="flex justify-between items-center p-4 border-t border-gray-200 bg-gray-50">
                <motion.button
                  disabled={pageNumber <= 1}
                  onClick={() => changePage(-1)}
                  className={`px-4 py-2 rounded-md flex items-center gap-1 ${
                    pageNumber <= 1
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  whileHover={{ scale: pageNumber > 1 ? 1.05 : 1 }}
                  whileTap={{ scale: pageNumber > 1 ? 0.95 : 1 }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Previous
                </motion.button>

                <span className="text-sm font-medium">
                  Page {pageNumber} of {numPages}
                </span>

                <motion.button
                  disabled={pageNumber >= numPages}
                  onClick={() => changePage(1)}
                  className={`px-4 py-2 rounded-md flex items-center gap-1 ${
                    pageNumber >= numPages
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  whileHover={{ scale: pageNumber < numPages ? 1.05 : 1 }}
                  whileTap={{ scale: pageNumber < numPages ? 0.95 : 1 }}
                >
                  Next
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
