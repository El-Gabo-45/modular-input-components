export function ElementPropertiesExtractor(element, props) {
    
    if (!element || !Array.isArray(props)) return null;

    const computedStyles = getComputedStyle(element);

    const results = {};

    props.forEach(prop => {
        if (prop in element) {
            results[prop] = element[prop];
        } else {
            results[prop] = computedStyles[prop] || computedStyles.getPropertyValue(prop) || null;
        }
    });

    return results;
}