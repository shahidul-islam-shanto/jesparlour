import PrimaryButton from "../../../Components/Buttons/PrimaryButton";
import ServiceCard from "../../../Components/Cards/ServiceCard";
import SectionHeading from "../../../Components/SectionHeading/SectionHeading";
import { services } from "../../../data/homePageData";

const ServicesSection = () => {
  return (
    <section id="our-portfolio" className="container-2 py-20 lg:py-28">
      <SectionHeading className="wow fadeInUp">
        Our Awesome <span className="text-secondary1">Services</span>
      </SectionHeading>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            service={service}
            delay={`${index * 0.12}s`}
          />
        ))}
      </div>

      <div className="wow fadeInUp mt-12 text-center">
        <PrimaryButton to="/contact-us">Explore More</PrimaryButton>
      </div>
    </section>
  );
};

export default ServicesSection;
