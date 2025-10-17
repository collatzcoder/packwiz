ServerEvents.recipes(event => {
    event.remove({ output: 'createaddition:alternator' })
    //event.remove({ output: 'createaddition:electric_motor' }) //becazuse actually balanced
})