import React, { useState } from "react";
import { BookOpen, Eye, Clock } from "lucide-react";

const Education = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos] = useState([
    {
      id: 1,
      title: "Phishing Prevention 101",
      duration: "15:30",
      category: "Email Security",
      description: "Learn how to identify and avoid phishing attacks",
      thumbnail:
        "https://via.placeholder.com/320x180/1f2937/ffffff?text=Phishing+Prevention",
    },
    {
      id: 2,
      title: "Password Security Best Practices",
      duration: "12:45",
      category: "Access Control",
      description: "Creating and managing secure passwords",
      thumbnail:
        "https://via.placeholder.com/320x180/1f2937/ffffff?text=Password+Security",
    },
    {
      id: 3,
      title: "Social Engineering Awareness",
      duration: "18:20",
      category: "Human Factors",
      description: "Understanding social engineering tactics",
      thumbnail:
        "https://via.placeholder.com/320x180/1f2937/ffffff?text=Social+Engineering",
    },
  ]);

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Security Education</h1>
        <p className="text-gray-600">
          Learn about cybersecurity best practices and stay informed
        </p>
      </div>

      {selectedVideo ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <button
            onClick={() => setSelectedVideo(null)}
            className="mb-4 text-blue-600 hover:text-blue-700 flex items-center gap-2"
          >
            ← Back to Library
          </button>
          <div className="aspect-video bg-gray-900 rounded-lg mb-4 flex items-center justify-center">
            <div className="text-center text-white">
              <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2">
                {selectedVideo.title}
              </h3>
              <p className="text-gray-300">
                Video Player ({selectedVideo.duration})
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Integration with video hosting service needed
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">{selectedVideo.title}</h3>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {selectedVideo.category}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {selectedVideo.duration}
              </span>
            </div>
            <p className="text-gray-700">{selectedVideo.description}</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-video bg-gray-200 relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedVideo(video)}
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                >
                  <div className="bg-white rounded-full p-3">
                    <Eye className="w-6 h-6 text-gray-900" />
                  </div>
                </button>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {video.category}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {video.duration}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Education;
