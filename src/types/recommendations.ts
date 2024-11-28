export interface Recommendation {
    id: number;
    author: string;
    position: string;
    date: string;
    relationship: string;
    content: string;
    image: ImageKey;
}

type ImageKey = 'chris' | 'harvey' | 'amanda' | 'hayley' | 'martin' | 'richard' | 'sabrina' | 'steve' | 'peter';

export type ImageMap = {
    [K in ImageKey]: string;
  };

