import { Code2, Users, MessageSquare, Calendar, Heart, Zap } from 'lucide-react';

function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Code2 className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">MeetDev</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
                How it Works
              </a>
              <a
                href="/login"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                Connect with Developers
                <span className="block text-blue-600 mt-2">Who Get You</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Swipe, match, and meet fellow developers. Build connections, collaborate on projects,
                or just hang out with people who speak your language.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/login"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg"
                >
                  Get Started
                </a>
                <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Everything You Need to Connect
              </h2>
              <p className="text-xl text-gray-600">
                Built by developers, for developers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Matching</h3>
                <p className="text-gray-600">
                  Match with developers based on tech stack, interests, and location. Find your coding soulmate.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Chat</h3>
                <p className="text-gray-600">
                  Instant messaging with code syntax highlighting. Share snippets and debug together.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Meetups</h3>
                <p className="text-gray-600">
                  Schedule coffee chats, pair programming sessions, or hackathon teams with ease.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Events</h3>
                <p className="text-gray-600">
                  Join local developer meetups, online events, and collaborative coding sessions.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-50 to-sky-50 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tech Stack Profiles</h3>
                <p className="text-gray-600">
                  Showcase your skills, favorite languages, and projects. Let your code do the talking.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-violet-600 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
                <p className="text-gray-600">
                  Built with modern tech for a smooth, responsive experience on any device.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600">
                Three simple steps to start connecting
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Create Your Profile</h3>
                <p className="text-gray-600">
                  Add your tech stack, interests, and what you're looking for. Show off your GitHub projects.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Swipe & Match</h3>
                <p className="text-gray-600">
                  Browse developer profiles, swipe right on those you'd like to connect with. It's that simple.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Connect & Meet</h3>
                <p className="text-gray-600">
                  Start chatting, collaborate on projects, or meet up for coffee. Build your dev network.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Meet Your Dev Community?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of developers already connecting on MeetDev
            </p>
            <a
              href="/login"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg"
            >
              Join Now
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LandingPage;
