const menu = {
    burger : [
        {
            name: '🍔',
            time: 3000
        },
        {
            name: '🍟',
            time: 750
        },
        {
            name: '🥤',
            time: 500
        }
    ],
    hotDog : [
        {
            name: '🌭',
            time: 2000
        },
        {
            name: '🍺',
            time: 500
        }
    ],
    pizza : [
        {
            name: '🍕',
            time: 2500
        },
        {
            name: '🥃',
            time: 250
        }
    ]
};

function order(menuName) {

    console.log('Start cooking...');

    const result = [];

    const foo = (name) => {

        result.push(name);
    };

    function cooking({name, time}) {

        setTimeout(function() {

            const isComplete = !Math.round(Math.random());
            if (isComplete){

                return foo({name, isComplete});
            } else {

                console.log('Not ready');
            }
        }(), time);
    }

    menuName.forEach(cooking);

    console.log(result);
}
console.log(order(menu.burger));