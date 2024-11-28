import { recommendations } from '../../data/reecommendations';

import chrisImg from '../../assets/images/avatars/chris.jpeg';
import harveyImg from '../../assets/images/avatars/harvey.jpeg';
import amandaImg from '../../assets/images/avatars/amanda.gif';
import peterImg from '../../assets/images/avatars/peter.jpeg';
import hayleyImg from '../../assets/images/avatars/hayley.jpeg';
import martinImg from '../../assets/images/avatars/martin.jpeg';
import richardImg from '../../assets/images/avatars/richard.jpeg';
import sabrinaImg from '../../assets/images/avatars/sabrina.jpeg';
import steveImg from '../../assets/images/avatars/steve.jpeg';

import { ImageMap } from '@/types/recommendations';
import Heading from '../heading/Heading';

const imageMap : ImageMap = {
    chris: chrisImg,
    harvey: harveyImg,
    amanda: amandaImg,
    peter: peterImg,
    hayley: hayleyImg,
    martin: martinImg,
    richard: richardImg,
    sabrina: sabrinaImg,
    steve: steveImg,
  };


export default function LinkedInRecommendations() {
    return (

        <div className="recommandations print:break-inside-avoid print:break-margin max-w-2xl bg-white print-version-styled-no-recommendations:hidden">
            <Heading title="RECOMMENDATIONS"></Heading>
            <div className="divide-y divide-gray-200">
                {recommendations.map((rec) => (
                    <div key={rec.id} className="p-4 hover:bg-gray-50 print:break-inside-avoid">
                        <div className="flex justify-between items-start">
                            <div className="flex gap-3">
                                <div className="w-12 h-12 rounded-full overflow-hidden">
                                    <img
                                        src={imageMap[rec.image]}
                                        alt={`${rec.author} profile`}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = `${process.env.PUBLIC_URL}/avatars/default-avatar.jpg`;
                                            target.onerror = null; // Prevent infinite loop if default image also fails
                                        }}
                                    />
                                </div>
                                <div>
                                    <div className="font-semibold">{rec.author}</div>
                                    <div className="text-sm text-gray-600">{rec.position}</div>
                                    <div className="text-sm text-gray-500 mt-1">
                                        {rec.date} • {rec.relationship}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 text-sm text-gray-800 whitespace-pre-line">
                            {rec.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
