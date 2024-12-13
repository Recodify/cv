import { recommendations } from '../../data/recommendations';
import { chrisImg, harveyImg, amandaImg, peterImg, hayleyImg, martinImg, richardImg, sabrinaImg, steveImg } from '@/features/cv/assets/assets';
import { ImageMap } from '@/features/cv/types/recommendations';
import Heading from '../heading/Heading';

const imageMap: ImageMap = {
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
    const classNames = "pl-2 hover:bg-gray-50 print:break-inside-avoid pt-6 pb-2";
    return (

        <div id="recommendations" className="recommandations print:break-margin max-w-2xl gap-y-2 bg-white print-version-styled-no-recommendations:hidden">
            <Heading title="RECOMMENDATIONS"></Heading>
            <div className="divide-y divide-gray-200  ">
                {recommendations.map((rec) => (
                    <div key={rec.id} className={rec.printPageTop ? classNames + " .printPageTop .print:break-margin" : classNames}>
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
