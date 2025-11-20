"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Video, Sparkles, TrendingUp, Zap, Play, Download, Share2 } from "lucide-react";

interface VideoTemplate {
  id: string;
  title: string;
  description: string;
  category: string;
  earnings: string;
}

const videoTemplates: VideoTemplate[] = [
  {
    id: "1",
    title: "Product Review Video",
    description: "Automated product showcase with AI voiceover",
    category: "E-commerce",
    earnings: "$50-200/video"
  },
  {
    id: "2",
    title: "Top 10 List Video",
    description: "Trending topics with dynamic text animations",
    category: "Viral Content",
    earnings: "$100-500/video"
  },
  {
    id: "3",
    title: "Tutorial Video",
    description: "Step-by-step guides with screen recordings",
    category: "Education",
    earnings: "$75-300/video"
  },
  {
    id: "4",
    title: "Motivational Video",
    description: "Inspiring quotes with cinematic backgrounds",
    category: "Lifestyle",
    earnings: "$40-150/video"
  },
  {
    id: "5",
    title: "News Digest",
    description: "Daily news summary with AI narration",
    category: "News",
    earnings: "$60-250/video"
  },
  {
    id: "6",
    title: "Story Time Video",
    description: "Engaging stories with subtitles and music",
    category: "Entertainment",
    earnings: "$80-400/video"
  }
];

const affiliateProducts = [
  {
    name: "AI Video Generator Pro",
    commission: "40%",
    price: "$49/mo",
    link: "#"
  },
  {
    name: "Stock Footage Library",
    commission: "30%",
    price: "$29/mo",
    link: "#"
  },
  {
    name: "Voice AI Tool",
    commission: "35%",
    price: "$39/mo",
    link: "#"
  },
  {
    name: "Video Editing Suite",
    commission: "45%",
    price: "$59/mo",
    link: "#"
  }
];

export default function Home() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedVideo, setGeneratedVideo] = useState(false);
  const [videoTopic, setVideoTopic] = useState("");

  const generateVideo = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedVideo(true);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-purple-500/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Video className="w-8 h-8 text-purple-400" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Faceless Video Affiliate
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-purple-300">Earnings: $2,450 this month</span>
              <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Create Viral Videos Without Showing Your Face
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Generate professional faceless videos with AI in minutes. Monetize through affiliate marketing and earn passive income.
          </p>
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-sm">AI-Powered</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-sm">High ROI</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-400" />
              <span className="text-sm">Fast Creation</span>
            </div>
          </div>
        </motion.div>

        {/* Video Generator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30"
        >
          <h3 className="text-2xl font-bold mb-6">Generate Your Video</h3>

          <div className="mb-6">
            <input
              type="text"
              value={videoTopic}
              onChange={(e) => setVideoTopic(e.target.value)}
              placeholder="Enter your video topic or product..."
              className="w-full bg-slate-700/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {videoTemplates.slice(0, 3).map((template) => (
              <motion.button
                key={template.id}
                onClick={() => setSelectedTemplate(template.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 rounded-xl border-2 transition-all text-left ${
                  selectedTemplate === template.id
                    ? "border-purple-500 bg-purple-500/20"
                    : "border-purple-500/30 bg-slate-700/30 hover:border-purple-500/50"
                }`}
              >
                <h4 className="font-semibold mb-2">{template.title}</h4>
                <p className="text-sm text-gray-400 mb-2">{template.description}</p>
                <span className="text-xs text-green-400">{template.earnings}</span>
              </motion.button>
            ))}
          </div>

          <button
            onClick={generateVideo}
            disabled={isGenerating || !videoTopic || !selectedTemplate}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-3"
          >
            {isGenerating ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Generating Video...
              </>
            ) : (
              <>
                <Play className="w-5 h-5" />
                Generate Video
              </>
            )}
          </button>

          {generatedVideo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 bg-slate-900/50 rounded-xl p-6 border border-purple-500/30"
            >
              <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-lg mb-4 flex items-center justify-center">
                <Play className="w-16 h-16 text-white/80" />
              </div>
              <div className="flex gap-3">
                <button className="flex-1 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Download
                </button>
                <button className="flex-1 bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* Video Templates */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold mb-8 text-center">Popular Video Templates</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 hover:border-purple-500/60 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-purple-600/20 p-3 rounded-lg">
                  <Video className="w-6 h-6 text-purple-400" />
                </div>
                <span className="text-xs bg-purple-600/30 px-3 py-1 rounded-full">{template.category}</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">{template.title}</h4>
              <p className="text-gray-400 mb-4">{template.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-green-400 font-semibold">{template.earnings}</span>
                <button className="text-purple-400 hover:text-purple-300 text-sm font-semibold transition-colors">
                  Use Template →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Affiliate Products */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold mb-8 text-center">Affiliate Products to Promote</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {affiliateProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 hover:border-purple-500/60 transition-colors"
            >
              <h4 className="text-lg font-semibold mb-3">{product.name}</h4>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Commission:</span>
                  <span className="text-green-400 font-semibold">{product.commission}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Price:</span>
                  <span className="text-purple-400 font-semibold">{product.price}</span>
                </div>
              </div>
              <button className="w-full bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg font-semibold transition-colors">
                Get Affiliate Link
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">10K+</div>
              <div className="text-gray-400">Videos Created</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-400 mb-2">$500K+</div>
              <div className="text-gray-400">Earned by Creators</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-400">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">2 Min</div>
              <div className="text-gray-400">Avg. Creation Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/30 mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-gray-400">
          <p>&copy; 2024 Faceless Video Affiliate. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
