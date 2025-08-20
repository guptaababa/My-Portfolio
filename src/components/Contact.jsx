import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { Mail, Github, Linkedin, MessageSquare } from "lucide-react";

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    config: { mass: 1, tension: 120, friction: 14 },
  });

  // Scroll to the latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    // Add user message to chat
    const userMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const prompt = `You are a professional assistant for a software developer named Harsh Gupta. Answer questions about his skills, projects, and experience based ONLY on the following information. Do not mention that you are a language model. Keep your responses concise and professional.

      Harsh Gupta's Profile:
      - **Name:** Harsh Bhushan Gupta
      - **Contact:** harshbhushangupta@gmail.com
      - **Skills:** Python, Java, C/C++, SQL, HTML, CSS, Javascript, React.js, Angular.js, Node.js, Tailwind CSS, Machine Learning (ML), Data/Business Analysis, NLP.
      - **Experience:** Software Engineer at Clover Infotech, Software Developer Engineer Intern at Softforce Consultants.
      - **Projects:**
        - Sign Language Recognition: A real-time system converting sign language to text and speech using hand gesture recognition and CNN models with 97% accuracy.
        - DSA Tracker: A tool for tracking DSA progress, providing performance insights, and setting practice goals.
        - Text-to-SQL converter: An NLP-driven tool that converts natural language queries into SQL statements with high accuracy for non-technical users.

      User question: ${input}`;

      let chatHistory = [];
      chatHistory.push({ role: "user", parts: [{ text: prompt }] });
      const payload = { contents: chatHistory };
      const apiKey = ""; // 🔑 Insert your Gemini API key here
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

      let response;
      let retryCount = 0;
      const maxRetries = 5;
      const baseDelay = 1000;

      while (retryCount < maxRetries) {
        try {
          response = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

          if (response.status === 429) {
            const delay = baseDelay * Math.pow(2, retryCount);
            console.log(`Rate limit exceeded. Retrying in ${delay / 1000}s...`);
            await new Promise((res) => setTimeout(res, delay));
            retryCount++;
            continue;
          }

          if (!response.ok) {
            throw new Error(`API call failed with status: ${response.status}`);
          }

          break; // ✅ Success
        } catch (error) {
          console.error("Fetch error:", error);
          if (retryCount >= maxRetries - 1) {
            throw error; // Re-throw after last retry
          }
          const delay = baseDelay * Math.pow(2, retryCount);
          await new Promise((res) => setTimeout(res, delay));
          retryCount++;
        }
      }

      const result = await response.json();
      const aiResponseText =
        result.candidates?.[0]?.content?.parts?.[0]?.text ||
        "I'm sorry, I couldn't process that request. Please try again.";

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: aiResponseText, sender: "ai" },
      ]);
    } catch (error) {
      console.error("Error fetching from Gemini API:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: "I'm sorry, something went wrong. Please try again later.",
          sender: "ai",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <animated.section
      ref={ref}
      id="contact"
      className="py-20 text-center"
      style={props}
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-violet-400">
        Get In Touch
      </h2>
      <p className="text-lg text-gray-300 max-w-xl mx-auto mb-10">
        I'm always open to new opportunities and collaborations. Feel free to
        reach out directly or chat with my AI assistant below!
      </p>

      {/* Contact Links */}
      <div className="flex justify-center space-x-6 mb-12">
        <animated.a
          href="mailto:harshbhushangupta@gmail.com"
          className="bg-gray-800 text-gray-300 p-4 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300 hover:bg-gray-700"
          style={useSpring({
            opacity: inView ? 1 : 0,
            transform: inView ? "scale(1)" : "scale(0.8)",
            delay: 200,
          })}
        >
          <Mail size={30} />
        </animated.a>
        <animated.a
          href="https://github.com/guptaababa"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-gray-300 p-4 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300 hover:bg-gray-700"
          style={useSpring({
            opacity: inView ? 1 : 0,
            transform: inView ? "scale(1)" : "scale(0.8)",
            delay: 400,
          })}
        >
          <Github size={30} />
        </animated.a>
        <animated.a
          href="https://www.linkedin.com/in/harsh-gupta-001767216/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-gray-300 p-4 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300 hover:bg-gray-700"
          style={useSpring({
            opacity: inView ? 1 : 0,
            transform: inView ? "scale(1)" : "scale(0.8)",
            delay: 600,
          })}
        >
          <Linkedin size={30} />
        </animated.a>
      </div>

      {/* AI Chatbot Section */}
      <div className="bg-gray-950 rounded-xl shadow-2xl p-6 max-w-2xl mx-auto border border-gray-700">
        <h3 className="text-xl font-bold text-center text-fuchsia-300 mb-4">
          Chat with my ✨AI Assistant
        </h3>
        <div
          className="h-64 sm:h-80 overflow-y-auto mb-4 p-2 border border-gray-700 rounded-lg bg-gray-950"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#4b5563 #1f2937",
          }}
        >
          {messages.length === 0 && (
            <div className="text-center text-gray-500 mt-20">
              Ask me anything about Harsh's projects or skills!
            </div>
          )}
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex mb-2 ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-3 rounded-lg max-w-[80%] break-words ${
                  msg.sender === "user"
                    ? "bg-fuchsia-600 text-white"
                    : "bg-gray-700 text-gray-200"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start mb-2">
              <div className="p-3 rounded-lg bg-gray-700 text-gray-200">
                <span className="animate-pulse">...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSendMessage} className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            className="flex-grow bg-gray-700 text-gray-200 border border-gray-600 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-colors duration-200"
            placeholder="Ask about my projects..."
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white p-2 rounded-full transition-colors duration-200 disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            <MessageSquare size={24} />
          </button>
        </form>
      </div>
    </animated.section>
  );
};

export default Contact;
