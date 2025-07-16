import { Hammer } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Hammer className="h-8 w-8 text-amber-600" />
              <span className="text-2xl font-bold">CraftWood</span>
            </div>
            <p className="text-gray-400">
              Premium PVC and aluminum carpentry solutions for your home and
              business.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>PVC Doors</li>
              <li>Windows</li>
              <li>Blinds</li>
              <li>Insect Screens</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Our Work</li>
              <li>Testimonials</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p>+1 (555) 123-4567</p>
              <p>info@craftwood.com</p>
              <p>
                123 Craft Street
                <br />
                Woodville, WV 12345
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} CraftWood. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
