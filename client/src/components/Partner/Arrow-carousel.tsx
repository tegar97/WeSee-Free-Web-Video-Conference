import './ArrowCustom.styles.scss';

export function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick}></div>;
}

export function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />;
}
