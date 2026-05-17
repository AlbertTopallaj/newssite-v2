const TAGS = {
    java: 'bg-blue-100 text-blue-800',
    springboot: 'bg-green-100 text-green-800',
    default: 'bg-gray-100 text-gray-600'
}

function getTagClass(tag = '') {
    const key = tag.toLowerCase().replace(/\s+/g, '')
    return TAGS[key] || TAGS.default 
}