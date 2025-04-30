import {
  FaCalendarCheck,
  FaComments,
  FaMapMarkedAlt,
  FaUsers,
} from "react-icons/fa";

import React from "react";

const Features = () => {
  return (
    <section className="px-6 py-12 ">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Our Features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Feature 1 */}
        <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-sm transition">
          <FaUsers className="text-blue-500 text-3xl" />
          <div>
            <h3 className="text-xl font-semibold">Find Travel Buddies</h3>
            <p className="text-gray-600">
              Connect with like-minded travelers who share your destination or
              interests.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-sm transition">
          <FaMapMarkedAlt className="text-green-500 text-3xl" />
          <div>
            <h3 className="text-xl font-semibold">Explore Destinations</h3>
            <p className="text-gray-600">
              Discover trending places, hidden gems, and community-recommended
              spots.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-sm transition">
          <FaCalendarCheck className="text-purple-500 text-3xl" />
          <div>
            <h3 className="text-xl font-semibold">Plan Your Trips</h3>
            <p className="text-gray-600">
              Use our integrated trip planner to organize and schedule your
              travel itinerary.
            </p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-sm transition">
          <FaComments className="text-pink-500 text-3xl" />
          <div>
            <h3 className="text-xl font-semibold">Chat & Coordinate</h3>
            <p className="text-gray-600">
              Instantly message your group to stay in sync and manage travel
              plans.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
