import { IMetaProps } from '@shared/types/props';
import { metadata } from 'config';

const Seo: React.FC<IMetaProps> = ({ title, description, isBlogPost = false}) => {
    const pageTitle = title ? `${title} :: ${metadata.siteName}` : metadata.siteName;
    const pageDescription = description ? description: metadata.description;
    return (
        <head>
            <title>{title}</title>
            <meta name='description' content={pageDescription} />
            <meta property='og:title' content={pageTitle} />
            <meta property='og:description' content={pageDescription}/>
            <meta property='og:type' content={isBlogPost? 'article': 'website'}/>
        </head>
    )
}

export default Seo;
