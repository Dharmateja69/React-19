import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/build/pdf.worker.min.js`;

export default function AboutPage() {
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isPdfLoading, setIsPdfLoading] = useState(false);
  const [pdfError, setPdfError] = useState<string | null>(null);
  const pdfWrapper = useRef<HTMLDivElement>(null);

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

  const personalDetails = [
    { label: "Name", value: "John Doe" },
    { label: "Date of Birth", value: "January 1, 1990" },
    { label: "Languages", value: "English, Spanish, French" },
    { label: "Skills", value: "React, Node.js, TypeScript, GraphQL" },
    { label: "CGPA", value: "3.8/4.0" },
  ];

  return (
    <div
      className="p-6 border border-solid relative max-w-7xl mx-auto h-screen"
      style={{
        borderTop: `3px solid var(--theme-color)`,
        borderBottom: `3px solid var(--theme-color)`,
        borderRight: `3px solid var(--theme-color)`,
        borderLeft: `3px solid var(--theme-color)`,
        boxShadow: `0 4px 20px var(--theme-color)`,
      }}
    >
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <motion.div
          className="w-full md:w-[350px] h-[350px] border-2 border-solid border-[var(--theme-color)] rounded-lg flex flex-col items-center justify-center bg-gray-800 relative"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            borderTop: `3px solid var(--theme-color)`,
            borderBottom: `3px solid var(--theme-color)`,
            borderRight: `3px solid var(--theme-color)`,
            borderLeft: `3px solid var(--theme-color)`,
            boxShadow: `0 4px 20px var(--theme-color)`,
          }}
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
                <h3 className="font-semibold text-[var(--theme-color)]">
                  {detail.label}:
                </h3>
                <p className="text-white">{detail.value}</p>
              </div>
            ))}

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

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            borderTop: `3px solid var(--theme-color)`,
            borderBottom: `3px solid var(--theme-color)`,
            borderRight: `3px solid var(--theme-color)`,
            borderLeft: `3px solid var(--theme-color)`,
            boxShadow: `0 4px 20px var(--theme-color)`,
          }}
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
          style={{
            borderTop: `3px solid var(--theme-color)`,
            borderBottom: `3px solid var(--theme-color)`,
            borderRight: `3px solid var(--theme-color)`,
            borderLeft: `3px solid var(--theme-color)`,
            boxShadow: `0 4px 20px var(--theme-color)`,
          }}
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
            <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50">
              <h3 className="text-xl font-bold truncate max-w-[70%]">
                {resumeFile.name}
              </h3>
              <div className="flex gap-2">
                <motion.button
                  onClick={handleDownload}
                  className="px-3 py-1 bg-[var(--theme-color)] text-white rounded hover:opacity-90"
                  whileTap={{ scale: 0.95 }}
                >
                  Download
                </motion.button>
                <motion.button
                  onClick={() => setShowModal(false)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:opacity-90"
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4" ref={pdfWrapper}>
              {pdfError ? (
                <p className="text-red-500">{pdfError}</p>
              ) : (
                <Document
                  file={resumeFile}
                  onLoadSuccess={onDocumentLoadSuccess}
                  onLoadError={onDocumentLoadError}
                  loading={<p>Loading PDF...</p>}
                >
                  <Page pageNumber={pageNumber} />
                </Document>
              )}
            </div>

            <div className="flex justify-between items-center p-4 border-t border-gray-200 bg-gray-50">
              <button
                onClick={() => changePage(-1)}
                disabled={pageNumber <= 1}
                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
              >
                Previous
              </button>
              <p className="text-sm text-gray-700">
                Page {pageNumber} of {numPages}
              </p>
              <button
                onClick={() => changePage(1)}
                disabled={pageNumber >= (numPages || 1)}
                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
