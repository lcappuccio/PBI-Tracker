 Ext.application({
    name: 'PBI',
    appFolder: 'app',
    autoCreateViewport : true,

    models: [
    ],
    stores: [
    ],
    controllers: [
        'Controller'
    ],

     launch : function() {

        Ext.onReady(function() {
            setTimeout(function(){
                Ext.get('loading').remove();
                Ext.get('loading-mask').fadeOut({remove:true});
            }, 1000);
        });
     }
 });