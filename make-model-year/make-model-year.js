const data = [
    {
        "make": "Acura",
        "model-year": [
            {
                "model": "CL",
                "yearslist": [
                    {
                        "year": "1997",
                        "url": "/bath"
                    },
                    {
                        "year": "1998",
                        "url": "/garden"
                    },
                    {
                        "year": "1999",
                        "url": "/kitchen"
                    },
                    {
                        "year": "2001",
                        "url": "minterapp.com"
                    }
                ]
            },
            {
                "model": "EL",
                "yearslist": [
                    {
                        "year": "2001",
                        "url": "engraved.com"
                    },
                    {
                        "year": "2002",
                        "url": "psdcenter.com"
                    },
                    {
                        "year": "2003",
                        "url": "beprogrammer.com"
                    },
                    {
                        "year": "2004",
                        "url": "minterapp.com"
                    }
                ]
            },
            {
                "model": "Integra",
                "yearslist": [
                    {
                        "year": "2005",
                        "url": "amazon.com"
                    },
                    {
                        "year": "2006",
                        "url": "flipcart.com"
                    },
                    {
                        "year": "2007",
                        "url": "rapidops.com"
                    },
                    {
                        "year": "2008",
                        "url": "beengraved.com"
                    }
                ]
            }
        ]
    },
    {
        "make": "Alfa Romeo",
        "model-year": [
            {
                "model": "164",
                "yearslist": [
                    {
                        "year": "2011",
                        "url": "flipflop.com"
                    },
                    {
                        "year": "2010",
                        "url": "react.com"
                    },
                    {
                        "year": "2009",
                        "url": "nodejs.com"
                    },
                    {
                        "year": "2008",
                        "url": "angularjs.com"
                    }
                ]
            }
        ]
    },
    {
        "make": "Audi",
        "model-year": [
            {
                "model": "100",
                "yearslist": [
                    {
                        "year": "1976",
                        "url": "audi1.com"
                    },
                    {
                        "year": "1977",
                        "url": "audi2.com"
                    },
                    {
                        "year": "1978",
                        "url": "audi3.com"
                    },
                    {
                        "year": "1979",
                        "url": "audi4.com"
                    }
                ]
            },
            {
                "model": "100 Quattro",
                "yearslist": [
                    {
                        "year": "1980",
                        "url": "quanti123.com"
                    },
                    {
                        "year": "1981",
                        "url": "quanti123.com"
                    },
                    {
                        "year": "1982",
                        "url": "quanti123.com"
                    },
                    {
                        "year": "1983",
                        "url": "quanti123.com"
                    }
                ]
            },
            {
                "model": "200",
                "yearslist": [
                    {
                        "year": "1984",
                        "url": "quanti200.com"
                    },
                    {
                        "year": "1985",
                        "url": "quanti201.com"
                    },
                    {
                        "year": "1986",
                        "url": "quanti202.com"
                    },
                    {
                        "year": "1987",
                        "url": "quanti203.com"
                    }
                ]
            },
            {
                "model": "200 Quattro",
                "yearslist": [
                    {
                        "year": "1988",
                        "url": "google.com"
                    },
                    {
                        "year": "1989",
                        "url": "yahoo.com"
                    },
                    {
                        "year": "1990",
                        "url": "apple.com"
                    },
                    {
                        "year": "1991",
                        "url": "minterapp.com"
                    }
                ]
            }
        ]
    },
    {
        "make": "BMW",
        "model-year": [
            {
                "model": "128i",
                "yearslist": [
                    {
                        "year": "2005",
                        "url": "google.com"
                    },
                    {
                        "year": "2006",
                        "url": "yahoo.com"
                    },
                    {
                        "year": "2007",
                        "url": "apple.com"
                    },
                    {
                        "year": "2008",
                        "url": "minterapp.com"
                    }
                ]
            },
            {
                "model": "135i",
                "yearslist": [
                    {
                        "year": "2009",
                        "url": "google.com"
                    },
                    {
                        "year": "2010",
                        "url": "yahoo.com"
                    },
                    {
                        "year": "2011",
                        "url": "apple.com"
                    },
                    {
                        "year": "2012",
                        "url": "minterapp.com"
                    }
                ]
            },
            {
                "model": "318i",
                "yearslist": [
                    {
                        "year": "2013",
                        "url": "google.com"
                    },
                    {
                        "year": "2004",
                        "url": "yahoo.com"
                    },
                    {
                        "year": "2008",
                        "url": "apple.com"
                    },
                    {
                        "year": "2010",
                        "url": "minterapp.com"
                    }
                ]
            }
        ]
    }
];

if (document.querySelectorAll('.product-model').length) {
    const makeModelYearData = data;
    const makeArray = [];
    let modelArray = [];
    let yearArray = [];

    function make() {
        return new Promise((resolve, reject) => {
            if (resolve) {
                document.getElementById('make').innerHTML = '<option value="make">Loading...</option>';
                setTimeout(() => {
                    makeModelYearData.forEach(item => {
                        resolve(makeArray.push('<option value="' + item.make + '">' + item.make + '</option>'));
                    });
                }, 1000);
            } else if (reject) { }
        });
    }

    function model(selectedMake) {
        return new Promise((resolve, reject) => {
            if (resolve) {
                modelArray = [''];
                document.getElementById('model').innerHTML = '<option value="model">Loading...</option>';
                document.getElementById('model').setAttribute('disabled', 'disabled');
                setTimeout(() => {
                    const findmodels = selectedMake["model-year"];
                    findmodels.forEach(item => {
                        resolve(modelArray.push('<option value="' + item.model + '">' + item.model + '</option>'));
                    });
                }, 1000);
            }
        });
    }

    function year(makevalue, currentValue) {
        return new Promise((resolve, reject) => {
            if (resolve) {
                yearArray = [''];
                document.getElementById('year').innerHTML = '<option value="year">Loading...</option>';
                document.getElementById('year').setAttribute('disabled', 'disabled');
                setTimeout(() => {
                    const selectedMake = makeModelYearData.find(obj => obj.make === makevalue);
                    const selectedModel = selectedMake["model-year"];
                    const selectedYear = selectedModel.find(item => item.model === currentValue);
                    selectedYear['yearslist'].forEach(item => {
                        resolve(yearArray.push('<option value="' + item.url + '">' + item.year + '</option>'));
                    });
                }, 1000);
            }
        });
    }

    make().then(() => {
        document.getElementById('make').innerHTML = '<option value="make">Choose Make</option>' + makeArray.join(' ');
    });


    document.getElementById('make').addEventListener('change', function () {
        if (this.value === 'make') {
            document.getElementById('model').setAttribute('disabled', 'disabled');
            document.getElementById('year').setAttribute('disabled', 'disabled');
            document.getElementById('year').innerHTML = '<option value="year">Choose Year</option>';
            document.getElementById('model').innerHTML = '<option value="model">Choose Model</option>';
        } else {
            const selectedMake = makeModelYearData.find(obj => obj.make === this.value);
            model(selectedMake).then(() => {
                document.getElementById('model').innerHTML = '<option value="model">Choose Model</option>' + modelArray.join(' ');
                document.getElementById('model').removeAttribute('disabled');

                document.getElementById('year').setAttribute('disabled', 'disabled');
                document.getElementById('year').innerHTML = '<option value="year">Choose Year</option>';
            });
        }
    });

    document.getElementById('model').addEventListener('change', function () {
        if (this.value === 'model') {
            document.getElementById('year').setAttribute('disabled', 'disabled');
            document.getElementById('year').innerHTML = '<option value="year">Choose Year</option>';
        } else {
            let e = document.getElementById("make");
            let makevalue = e.options[e.selectedIndex].value;
            year(makevalue, this.value).then(() => {
                document.getElementById('year').innerHTML = '<option value="year">Choose Year</option>' + yearArray.join(' ');
                document.getElementById('year').removeAttribute('disabled');
            })
        }
    });

    document.getElementById('year').addEventListener('change', function () {
        if (this.value === 'year') {
            document.getElementById('filter').setAttribute('disabled');
        } else {
            document.getElementById('filter').removeAttribute('disabled');
        }
    });

    document.getElementById('filter').addEventListener('click', () => {
        let e = document.getElementById("year");
        let makevalue = e.options[e.selectedIndex].value;
        window.location = makevalue;
    });
}

