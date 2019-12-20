const { Multi } = require('./Multi.js');
let instancia = new Multi({});
instancia.init();
instancia.send({
    msg:
        '{"__type":"ReportEGMHandPayRequest","timeStamp":"2019-12-20T14:58:49.211Z","sender":{"__type":"BaseStamp","name":"vloud.sala.cmi","id":"D0:C5:D3:33:CE:58","version":"0.0.1"},"addressee":{"__type":"BaseStamp","name":"vloud.sala.mesh","id":"","version":""},"sessionId":null,"body":{"__type":"HandPayDTO"},"correlationId":"D0:C5:D3:33:CE:58-NaN"}'
});
