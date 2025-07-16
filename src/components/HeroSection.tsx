import { Award, Shield } from "lucide-react";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-amber-50 to-orange-50 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Premium PVC & Aluminum
                <span className="text-amber-600 block">
                  Carpentry Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your space with our expertly crafted doors, windows,
                blinds, and insect screens. Quality materials, precision
                craftsmanship, and exceptional service.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3"
              >
                Start Your Project
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3 bg-transparent"
              >
                View Our Work
              </Button>
            </div>
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-amber-600" />
                <span className="text-sm text-gray-600">
                  15+ Years Experience
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-amber-600" />
                <span className="text-sm text-gray-600">
                  Quality Guaranteed
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8">
              <img
                src="/placeholder.svg"
                alt="Modern PVC windows and doors"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
