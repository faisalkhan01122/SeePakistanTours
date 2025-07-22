import { motion } from "framer-motion";

const MurreeContent = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="lg:w-2/3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-xl shadow-sm mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Plan A Murree Tour 2025 With Zufta Travels
            </h2>
            <p className="text-gray-600 mb-4">
              Zufta Travels is the leader in the travel and tour industry in
              Pakistan. Like always Zufta Travels and travel offers, Murree tour
              packages 2025 with the best travel and tour services in Pakistan.
            </p>
            <p className="text-gray-600 mb-4">
              We offer economy and luxury Murree tour packages 2025 which
              include, family tour Murree, couple tours Murree, and Murree group
              tours.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">
              Most visited Tourist Points in Murree Tours
            </h2>
            <p className="text-gray-600 mb-4">
              As described above the tourists from all over Pakistan and abroad
              like to explore the whole Murree and also there are some points
              which got the special attraction for the tourists visiting Murree.
              Here is the list of some famous tourist points in Murree.
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
              <li>Kashmir Point</li>
              <li>Pindi Point</li>
              <li>Ayubia</li>
              <li>Nathia Gali</li>
              <li>Mall Road</li>
              <li>New Murree</li>
              <li>Bhurban</li>
              <li>Patriata</li>
            </ul>
            <p className="text-gray-600 mb-4">
              Last but not least, one of the most attractive things for the
              tourists especially children visiting Murree is the chairlift.
            </p>
            <p className="text-gray-600 mb-4">
              Additionally, Murree has a couple of chairlifts which provide a
              breathtaking view of the Murree mountains and surrounding areas.
              Chairlifts are in Ayubia, Pindi point, and Patriata.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">
              Hotels In Murree
            </h2>
            <p className="text-gray-600 mb-4">
              A large number of the tourists visit Murree whole the year. There
              are Govt and private guesthouses along with plenty of{" "}
              <a href="#" className="text-primary-600 hover:underline">
                hotels in Murree
              </a>{" "}
              of the medium and luxury range.
            </p>
            <p className="text-gray-600 mb-4">
              Plan a trip to Murree today and enjoy your tour with{" "}
              <a href="#" className="text-primary-600 hover:underline">
                Pakistan's best tour and travel company
              </a>
              .
            </p>
            <p className="text-gray-600">
              Explore below the Murree trip 2025 packages offered by See
              Pakistan Tours.
            </p>
          </motion.div>
        </div>

        {/* Sidebar - Empty for alignment */}
        <div className="lg:w-1/3"></div>
      </div>
    </div>
  );
};

export default MurreeContent;
