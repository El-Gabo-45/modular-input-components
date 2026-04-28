export function getPropertiesList(element) {

    if (!element) return null;

    const tag = element.tagName.toLowerCase();

    const isInput = tag === 'input' || tag === 'textarea';
    const isImg = tag === 'img';
    const isLink = tag === 'a';

    const styles = getComputedStyle(element);

    return {
        computedStyles: {
            display: styles.display,
            flexDirection: styles.flexDirection,
            position: styles.position,
            zIndex: styles.zIndex,
            width: styles.width,
            height: styles.height,
            backgroundColor: styles.backgroundColor,
            border: styles.border,
            borderRadius: styles.borderRadius,
            borderColor: styles.borderColor,
            boxShadow: styles.boxShadow,
            padding: styles.padding,
            margin: styles.margin,
            fontSize: styles.fontSize,
            color: styles.color,
            fontFamily: styles.fontFamily
        },
        attributes: {
            id: element.id,
            classList: [...element.classList],

            inputType: isInput ? element.type : null,
            value: isInput ? element.value : null,
            placeholder: isInput ? element.placeholder : null,

            src: isImg ? element.src : null,
            alt: isImg ? element.alt : null,

            href: isLink ? element.href : null,
            
            ariaLabel: element.getAttribute('aria-label'),
            title: element.getAttribute('title')
        }
    };
}