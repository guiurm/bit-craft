// type number
const INPUT_NUMBER_TAGS = [...(['range', 'number'] as const)];
// type boolean
const INPUT_BOOLEAN_TAGS = [...(['checkbox'] as const)];
// type file
const INPUT_FILE_TAGS = [...(['file'] as const)];
// type string
const INPUT_STRING_TAGS = [
    ...([
        'button',
        'color',
        'date',
        'datetime-local',
        'email',
        'hidden',
        'image',
        'month',
        'password',
        'radio',
        'reset',
        'search',
        'submit',
        'tel',
        'text',
        'time',
        'url',
        'week'
    ] as const)
];
// all
const INPUT_TAGS = [...INPUT_NUMBER_TAGS, ...INPUT_BOOLEAN_TAGS, ...INPUT_FILE_TAGS, ...INPUT_STRING_TAGS];

export { INPUT_BOOLEAN_TAGS, INPUT_FILE_TAGS, INPUT_NUMBER_TAGS, INPUT_STRING_TAGS, INPUT_TAGS };
