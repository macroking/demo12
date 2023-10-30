window.addEventListener("DOMContentLoaded", () => {
    const websocket = new WebSocket("ws://localhost:8001/");
    sendMoves(websocket);
});

function sendMoves(conn) {
    conn.onmessage = function(e){ console.log(e.data); };
    const event1 = { type: "play", 'column': 'demo' };
    conn.onopen = () => conn.send(JSON.stringify(event1));
}