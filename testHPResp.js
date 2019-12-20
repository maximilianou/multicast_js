const { Multi } = require('./Multi.js');
let instancia = new Multi({});
instancia.init();
instancia.send({
    msg:
        '{"__type":"ReportEGMHandPayResponse","timeStamp":"2019-12-20T14:58:37.392Z","sender":{"__type":"BaseStamp","name":"vloud.sala.mesh","id":"","version":""},"addressee":{"__type":"BaseStamp","name":"vloud.sala.cmi","id":"","version":""},"sessionId":null,"body":{"__type":"HandPayDTO"},"correlationId":"D0:C5:D3:33:CE:59-4444"}'
});
