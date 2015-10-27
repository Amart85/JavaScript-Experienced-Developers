using Microsoft.Owin;
using Owin;
using Module4;

namespace Module4
{
	public class Startup
	{
		public void Configuration(IAppBuilder app)
		{
			app.MapSignalR();
		}
	}
}