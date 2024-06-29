import { TestimonialCard } from "./TestimonialCard";
import reviews from '../data/reviews.json';

export function Testimonials() {
    return (
        // <!-- Testimonials-->
        <section className="testimonials text-center bg-light">
            <div className="container">
                <h2 className="mb-5">What people are saying...</h2>
                <div className="row">
                    {/* Load the testimonials */}
                    {reviews.map(review => <TestimonialCard key={review.id} review={review} />)}
                </div>
            </div>
        </section>
    );
}