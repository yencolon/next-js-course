import { IMetaProps } from '@shared/types/props';

const Seo: React.FC<IMetaProps> = (props) => {
    const title = '';
    const descripton = '';
    return (
        <head>
            <title>{props.title}</title>
            <meta name='description' content={props.description} />
        </head>
    )
}

export default Seo;
