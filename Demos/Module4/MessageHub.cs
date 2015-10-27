using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Module4
{
	public class MessageHub : Hub
	{
		public void ProcessMessage(string message)
		{
			Clients.All.MessageProcessed(message + " PROCESSED!!");
		}
	}
}