require([
    'gitbook',
    'jquery'
], function (gitbook, $) {
    function changeLink() {
        let link = $('.gitbook-link')
        link.remove();
    }
    changeLink()
    gitbook.events.on('page.change', function () {
        changeLink()
    })


})
