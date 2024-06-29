import { FeatureCard } from './FeatureCard.js';
import featuresData  from '../data/featuresData.json';

export function Features() {
    return (
        // <!-- Icons Grid-->
        <section className="features-icons bg-light text-center">
            <div className="container">
                <div className="row">
                    {featuresData.map((feature, index) => <FeatureCard key={index} feature={feature}/>)}
                </div>
            </div>
        </section>
    );
}