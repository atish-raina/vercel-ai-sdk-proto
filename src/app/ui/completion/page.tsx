"use client";

import { useState } from "react";

export default function CompletionPage() {
    const [prompt, setPrompt] = useState();
    const [completion, setCompletion] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const complete = async(e: React.FormEvent) => {
        e.preventDefault();

        setIsLoading(true);
        setPrompt("");

        try {
            const response = await fetch("api/completion", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({prompt})

            })

            const data = await response.json();
            setCompletion(data.text);

        } finally {
            setIsLoading(false);
        }
    }
    return(
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">AI Completion</h1>
                    <p className="text-gray-600">Enter your prompt to get started</p>
                </div>
                
                <form className="space-y-6">
                    <div>
                        <input 
                            placeholder="Please enter a prompt"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700 placeholder-gray-400"
                        />
                    </div>
                    <button 
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 outline-none"
                    >
                        Generate Response
                    </button>
                </form>
            </div>
        </div>
    )
}