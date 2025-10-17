ServerEvents.recipes(event=>{
	event.remove({ output: 'vs_tournament:tiny_thruster' })
	event.remove({ output: 'vs_tournament:thruster' })
	event.remove({ output: 'vs_tournament:upgrade_thruster' })
});