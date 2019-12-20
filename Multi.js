const dgram = require("dgram");
const process = require("process");

exports.Multi = class Multi {
  constructor({ port = 6811, multicast_addr = "224.1.1.2" }) {
    this.PORT = port;
    this.MULTICAST_ADDR = multicast_addr;
  }

  init() {
    this.socket = dgram.createSocket({ type: "udp4", reuseAddr: true });
    this.socket.bind(this.PORT);

    this.socket.on("listening", () => {
      this.socket.addMembership(this.MULTICAST_ADDR);
      this.address = this.socket.address();
      console.log(
        `UDP socket listening on ${this.address.address}:${this.address.port} pid: ${
        process.pid
        }`
      );
    });

    this.socket.on("message", (message, rinfo) => {
      console.info(`Message[${new Date().toISOString().split('T')[0]}]from: ${rinfo.address}: ${rinfo.port} - ${message}`);
    });

  }
  send({ msg = `Message[${new Date().toISOString().split('T')[0]}]from process ${process.pid}` }) {
    const message = Buffer.from(msg);
    this.socket.send(message, 0, message.length, this.PORT, this.MULTICAST_ADDR, () => {
      console.info(`Sending message "${message}"`);
    });
  }
  initInterval({ msg }) {
    setInterval(() => {
      this.send({ msg });
    }, 2500);
  }
};





