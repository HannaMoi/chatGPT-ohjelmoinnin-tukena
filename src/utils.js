 export const renderTextWithLineBreaks = (text) => {
    return text.split('\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
    ));
};


