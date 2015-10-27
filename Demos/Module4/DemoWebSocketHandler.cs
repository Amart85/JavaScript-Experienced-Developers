using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Web;

namespace Module4
{
	public class DemoWebSocketHandler
	{
		private readonly WebSocket socket;

		public DemoWebSocketHandler(WebSocket socket)
		{
			this.socket = socket;
		}

		public async Task Start()
		{
			while(socket.State == WebSocketState.Open) {
				var message = await ReceiveMessage();
				if (message != null) ProcessMessage(message);
			}
		}

		private async Task<string> ReceiveMessage()
		{
			var buffer = new ArraySegment<byte>(new byte[1024]);
			var result = await socket.ReceiveAsync(buffer, CancellationToken.None);
			var message = Encoding.UTF8.GetString(buffer.Array, buffer.Offset, result.Count);
			return message;
		}

		private void SendMessage(string message)
		{
			lock (socket) {
				var buffer = new ArraySegment<byte>(Encoding.UTF8.GetBytes(message));
				socket.SendAsync(buffer, WebSocketMessageType.Text, true, CancellationToken.None).Wait();
			}
		}

		private void ProcessMessage(string message)
		{
			message += " PROCESSED!!";
			SendMessage(message);

			Task.Delay(1000).ContinueWith(_ => SendMessage("Another message sent"));
		}
	}
}