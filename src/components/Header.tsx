import { Hammer } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Hammer className="h-8 w-8 text-amber-600" />
            <span className="text-2xl font-bold text-gray-900">CraftWood</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#gallery"
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Contact
            </a>
          </nav>
          <Button className="bg-amber-600 hover:bg-amber-700 text-white">
            Get Quote
          </Button>
        </div>
      </div>
    </header>
  );
}
