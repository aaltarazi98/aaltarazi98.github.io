import TestimonialCard from "./TestimonialCard"

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechVision Inc.',
      content: 'Charismatic Words transformed our marketing communications. Our engagement rates increased by 40% within the first month of implementing their strategies.',
      avatar: '/images/testimonial-image.jpg',
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'Public Speaker',
      company: 'Inspire Academy',
      content: 'As a professional speaker, the quality of my words matters. This platform gave me tools to connect with my audience on a deeper level.',
      avatar: '/images/testimonial-image.jpg',
    },
    {
      id: 3,
      name: 'Emily Chang',
      role: 'Content Creator',
      company: 'Digital Narratives',
      content: 'The courses and resources available have significantly improved my writing. My content now drives more engagement and shares across all platforms.',
      avatar: '/images/testimonial-image.jpg',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-dark md:text-4xl">
            Trusted by <span className="text-primary">Communication Professionals</span>
          </h2>
          <p className="text-lg text-gray-600">
            See how Charismatic Words has helped professionals transform their communication skills and achieve remarkable results.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}