import featuresData  from '../data/featuresData.json';
import { ImageShowcaseRow } from './ImageShowcaseRow.js';

export function ImageShowcase() {
    return (
        <section className="showcase">
            <div className="container-fluid p-0">
                {featuresData.map((feature, index) => <ImageShowcaseRow key={index} data={feature} />)}
            </div>
        </section>
    );
}