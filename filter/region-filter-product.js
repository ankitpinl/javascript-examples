// if you live in Nunavut region then you are forbidden to use product otherwise allow
const regionProductList = [
    {
        'region': 'British Columbia',
        'options': ['10 mg/ml'],
        'products': ['all']
    },
    {
        'region': 'Alberta',
        'options': ['20 mg/ml'],
        'products': ['all']
    },
    {
        'region': 'Saskatchewan',
        'options': ['30 mg/ml'],
        'products': ['all']
    },
    {
        'region': 'Manitoba',
        'options': ['40 mg/ml'],
        'products': ['all']
    },
    {
        'region': 'Ontario',
        'options': ['50 mg/ml'],
        'products': ['Tobacco', 'Mint', 'Menthol']
    },
    {
        'region': 'Quebec',
        'options': ['n/a'],
        'products': ['n/a']
    },
    {
        'region': 'Nova Scotia',
        'options': ['60 mg/ml'],
        'products': ['Tobacco']
    },
    {
        'region': 'New Brunswick',
        'options': ['80 mg/ml'],
        'products': ['all']
    },
    {
        'region': 'Newfoundland and Labrador',
        'options': ['70 mg/ml'],
        'products': ['all']
    },
    {
        'region': 'Prince Edward Island',
        'options': ['n/a'],
        'products': ['n/a']
    },
    {
        'region': 'Yukon Territory',
        'options': ['90 mg/ml'],
        'products': ['all']
    },
    {
        'region': 'Northwest Territories',
        'options': ['100 mg/ml'],
        'products': ['all']
    },
    {
        'region': 'Nunavut',
        'options': ['110s mg/ml'],
        'products': ['all']
    }
];

const selectedRegionArray = regionProductList.filter(function (item) {
    return item.region.toLowerCase() == 'nunavut'
});

const getSelectedRegion = selectedRegionArray[0].region;

if (currentRegion == 'Nunavut') {
    console.log('Forbidden');
} else {
    console.log('Allow')
}