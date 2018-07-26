var clipboard = new ClipboardJS('.swatch-container');

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.trigger.classList.add('swatch-container--selected');

    e.trigger.addEventListener('mouseout', function() {
        setTimeout(function() {
            e.trigger.classList.remove("swatch-container--selected");
        }, 201);
    });

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});
