
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white flex flex-col items-center justify-center p-4 text-center">
      <div className="space-y-6 max-w-md">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#33C3F0] to-[#8B5CF6] text-transparent bg-clip-text">
          404
        </h1>
        <p className="text-xl">Page not found</p>
        <p className="text-gray-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-gradient-to-r from-[#8B5CF6] to-[#33C3F0] hover:opacity-90 mt-4">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
