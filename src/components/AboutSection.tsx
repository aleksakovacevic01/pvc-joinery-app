export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                About CraftWood
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 15 years of experience in PVC and aluminum carpentry,
                we've built our reputation on delivering exceptional quality and
                craftsmanship. Our team of skilled artisans combines traditional
                techniques with modern materials to create solutions that are
                both beautiful and durable.
              </p>
              <p className="text-gray-600">
                From custom doors and windows to specialized blinds and insect
                screens, we take pride in every project we complete. Our
                commitment to excellence and customer satisfaction has made us
                the trusted choice for homeowners and businesses alike.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-amber-50 rounded-lg">
                <div className="text-2xl font-bold text-amber-600">500+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-amber-50 rounded-lg">
                <div className="text-2xl font-bold text-amber-600">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8">
              <img
                src="/placeholder.svg"
                alt="Craftsman working on PVC window"
                width={450}
                height={350}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
