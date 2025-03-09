import React from "react";

function InfoModal({ close, title, message }) {
    if (!close) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md mx-4 p-6">
                <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                        <svg
                            className="w-6 h-6 text-blue-500 dark:text-blue-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 9v3.75m0 3.75h.007v.008H12v-.008ZM12 3a9 9 0 100 18 9 9 0 000-18z"
                            />
                        </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
                </div>
                <div className="mt-4">
                    <p className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-line">{message}</p>
                </div>
                <div className="mt-6 flex justify-end">
                    <button
                        onClick={close}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors"
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
}

export default InfoModal;