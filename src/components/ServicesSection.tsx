import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-amber-50 to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We specialize in high-quality PVC and aluminum solutions for
            residential and commercial spaces
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src="/placeholder.svg"
                  alt="PVC Door Icon"
                  width={32}
                  height={32}
                />
              </div>
              <CardTitle className="text-xl text-gray-900">PVC Doors</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-600">
                Custom-made PVC doors that combine durability, security, and
                aesthetic appeal for your home or office.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src="/placeholder.svg"
                  alt="Window Icon"
                  width={32}
                  height={32}
                />
              </div>
              <CardTitle className="text-xl text-gray-900">Windows</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-600">
                Energy-efficient PVC and aluminum windows designed to enhance
                your space with natural light and ventilation.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src="/placeholder.svg"
                  alt="Blinds Icon"
                  width={32}
                  height={32}
                />
              </div>
              <CardTitle className="text-xl text-gray-900">Blinds</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-600">
                Stylish and functional blinds in various materials and designs
                to control light and privacy perfectly.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src="/placeholder.svg"
                  alt="Screen Icon"
                  width={32}
                  height={32}
                />
              </div>
              <CardTitle className="text-xl text-gray-900">
                Insect Screens
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-600">
                High-quality insect screens that allow fresh air while keeping
                unwanted pests out of your space.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
