
TaCZServerEvents.gunIndexLoad((event) => {
    const id = event.getId().toString();
    if (id === "maxsuff:db_50") {
        return event.removeGun();
    }
})


ServerEvents.recipes(event=>{
    event.remove({output: 'ae2:spatial_io_port'})
    event.remove({output: 'ae2:spatial_anchor'})
    event.remove({output: 'ae2:spatial_pylon'})
    event.remove({output: 'advancedperipherals:player_detector'})
    event.remove({output:/vs_eureka:.*_ship_helm/})



    event.campfireCooking('minecraft:torch', 'minecraft:stick', 0.35, 600)

    event.recipes.create.compacting("jeg:brimstone_crystal","tfmg:sulfur_dust").heated()
    event.recipes.create.haunting("minecraft:charcoal","minecraft:coal")



    event.shaped
    event.shaped(
  		Item.of('create_radar:data_link',1),
       [
        ' A ',
        ' B ',
        '   '
        ],
        {                          
            A:'create_radar:radar_dish_block',
            B:'create:display_link'
        }
     )
    event.shaped(
        Item.of('vs_eureka:oak_ship_helm', 1), // arg 1: output
        [
        ' A ',
        'CBC', // arg 2: the shape (array of strings)
        ' D '
        ],
    {
        A: 'create:cogwheel', 
        B: 'minecraft:gold_block',
        C: 'quark:oak_vertical_slab',
        D: 'minecraft:lectern',//arg 3: the mapping object
    }
    )
    event.shaped(
        Item.of('jeg:stun_grenade',1),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A:'minecraft:sand',
            B:'minecraft:glowstone_dust',
            C:'minecraft:gunpowder'
        }
    )



    
    let inter1='minecraft:iron_ingot'
    event.recipes.create.sequenced_assembly([
        Item.of('destroy:chromium_ingot').withChance(75.0),
        inter1,
        ],inter1,[
        event.recipes.createCutting(inter1,inter1),
        event.recipes.createDeploying(inter1, ['minecraft:iron_ingot', inter1]),
        event.recipes.createPressing(inter1,inter1),
    ]).transitionalItem(inter1).loops(4)
    let inter2 = 'kubejs:morphing_scrap' 
	event.recipes.create.sequenced_assembly([
		Item.of('minecraft:netherite_ingot').withChance(16.0), 
		'minecraft:dirt', 
		], 'jeg:scrap', [ 
		event.recipes.createPressing(inter2, inter2),
		event.recipes.createDeploying(inter2, ['createnuclear:enriched_yellowcake', inter2]),
        event.recipes.createFilling(inter2, [inter2, Fluid.water(100)]),
        event.recipes.createPressing(inter2, inter2),
        event.recipes.createDeploying(inter2, ['tfmg:steel_ingot', inter2]),
        event.recipes.createFilling(inter2, [inter2, Fluid.lava(100)]),
        event.recipes.createCutting(inter2, inter2),
        event.recipes.createDeploying(inter2, ['jeg:scrap', inter2]),
        event.recipes.createPressing(inter2, inter2)
	]).transitionalItem(inter2).loops(50)
});
