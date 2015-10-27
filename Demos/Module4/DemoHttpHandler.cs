using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.WebSockets;

namespace Module4
{
	public class DemoHttpHandler : IHttpHandler
	{
		public void ProcessRequest(HttpContext context)
		{
			if (context.IsWebSocketRequest) {
				context.AcceptWebSocketRequest(ProcessWebSocketRequest);
			}
		}

		Task ProcessWebSocketRequest(AspNetWebSocketContext context)
		{
			var socket = context.WebSocket;
			var connection = new DemoWebSocketHandler(socket);
			return connection.Start();
		}

		public bool IsReusable
		{
			get { return false; }
		}
	}
}